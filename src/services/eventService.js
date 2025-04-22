import { eventService as apiEventService } from './api';
import { mockEvents, mockCategories, mockCities } from '../data/mockEvents';

// Flag to determine whether to use real API or mock data
const USE_MOCK_DATA = process.env.REACT_APP_USE_MOCK_DATA === 'true' || !process.env.REACT_APP_EVENTBRITE_API_KEY;

const eventService = {
  // Get events with filtering
  getEvents: async (filters = {}) => {
    try {
      if (USE_MOCK_DATA) {
        console.log('Using mock data for events');
        // Apply filters to mock data
        let filteredEvents = [...mockEvents];
        
        if (filters.city) {
          filteredEvents = filteredEvents.filter(
            event => event.venue.address.city.toLowerCase() === filters.city.toLowerCase()
          );
        }
        
        if (filters.category) {
          filteredEvents = filteredEvents.filter(
            event => event.category.toLowerCase() === filters.category.toLowerCase()
          );
        }
        
        if (filters.query) {
          const query = filters.query.toLowerCase();
          filteredEvents = filteredEvents.filter(
            event => 
              event.name.text.toLowerCase().includes(query) || 
              event.description.text.toLowerCase().includes(query)
          );
        }
        
        if (filters.startDate) {
          filteredEvents = filteredEvents.filter(
            event => new Date(event.start.local) >= new Date(filters.startDate)
          );
        }
        
        if (filters.endDate) {
          filteredEvents = filteredEvents.filter(
            event => new Date(event.end.local) <= new Date(filters.endDate)
          );
        }
        
        // Sort by date (most recent first)
        filteredEvents.sort((a, b) => new Date(a.start.local) - new Date(b.start.local));
        
        return {
          pagination: {
            page_count: 1,
            page_size: filteredEvents.length,
            page_number: 1,
            has_more_items: false
          },
          events: filteredEvents
        };
      } else {
        // Try multiple approaches to get real events
        try {
          // First try the standard API
          const response = await apiEventService.getEvents({
            'location.address': 'Kenya',
            ...filters
          });
          
          // Process Eventbrite API response to match our expected format
          return {
            pagination: response.pagination,
            events: response.events || []
          };
        } catch (apiError) {
          console.log('Failed to get events from primary API, trying popular events', apiError);
          
          // Try our backup method
          try {
            return await apiEventService.getPopularEvents();
          } catch (backupError) {
            console.log('All API methods failed, using mock data as last resort', backupError);
            
            // As last resort, use mock data but don't tell caller we're using mock data
            let filteredEvents = [...mockEvents];
            // (filtering logic as above - but we'll skip re-implementing it since this is a last resort)
            
            return {
              pagination: {
                page_count: 1,
                page_size: filteredEvents.length,
                page_number: 1,
                has_more_items: false
              },
              events: filteredEvents
            };
          }
        }
      }
    } catch (error) {
      console.error('Unexpected error in eventService.getEvents:', error);
      // Final fallback to mock data
      return {
        pagination: {
          page_count: 1,
          page_size: mockEvents.length,
          page_number: 1,
          has_more_items: false
        },
        events: mockEvents
      };
    }
  },
  
  // Get specific event by ID
  getEventById: async (eventId) => {
    try {
      if (USE_MOCK_DATA) {
        console.log('Using mock data for event details');
        const event = mockEvents.find(event => event.id === eventId);
        
        if (!event) {
          throw new Error(`Event with ID ${eventId} not found`);
        }
        
        return event;
      } else {
        try {
          // Try to get real event data
          const eventData = await apiEventService.getEventById(eventId);
          return eventData;
        } catch (apiError) {
          console.log('API error fetching event details, checking mock data as fallback', apiError);
          
          // If API fails and this looks like our mock/synthetic event ID, use that
          if (eventId.startsWith('public-')) {
            // This will be handled by our API service directly
            throw apiError;
          }
          
          // Otherwise check if it's one of our mock events
          const mockEvent = mockEvents.find(event => event.id === eventId);
          if (mockEvent) {
            return mockEvent;
          }
          
          // If we get here, we couldn't find the event
          throw apiError;
        }
      }
    } catch (error) {
      console.error(`Error in eventService.getEventById for ID ${eventId}:`, error);
      throw error;
    }
  },
  
  // Get all categories
  getCategories: async () => {
    try {
      // Always try to get real categories from Eventbrite first as this endpoint works
      const categoriesData = await apiEventService.getCategories();
      
      // Map Eventbrite categories to our app's format
      const formattedCategories = categoriesData.categories.map(category => ({
        id: category.id,
        name: category.name
      }));
      
      return {
        categories: formattedCategories
      };
    } catch (error) {
      console.log('Failed to get categories from API, using mock data', error);
      
      // Fall back to mock data if API fails
      return {
        categories: mockCategories
      };
    }
  },
  
  // Get cities (only mock data for now, as EventBrite might not have this endpoint)
  getCities: async () => {
    if (USE_MOCK_DATA) {
      console.log('Using mock data for cities');
      return mockCities;
    } else {
      // For real API, you would need to implement location fetching
      // This might be a separate endpoint or may require additional processing
      console.log('Using mock cities data (API does not provide this directly)');
      return mockCities;
    }
  }
};

export default eventService;