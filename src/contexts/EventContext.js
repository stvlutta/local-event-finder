import React, { createContext, useState, useEffect, useContext } from 'react';
import eventService from '../services/eventService';

// Create context
const EventContext = createContext();

// Custom hook for using the event context
export const useEvents = () => {
  return useContext(EventContext);
};

export const EventProvider = ({ children }) => {
  // State for events, categories, cities, loading and error
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filters state
  const [filters, setFilters] = useState({
    city: '',
    category: '',
    query: '',
    startDate: '',
    endDate: ''
  });

  // Load initial data
  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      try {
        // Fetch categories and cities in parallel
        const [categoriesData, citiesData] = await Promise.all([
          eventService.getCategories(),
          eventService.getCities()
        ]);
        
        setCategories(categoriesData.categories || categoriesData);
        setCities(citiesData);
        
        // Then fetch events with no filters
        const eventsData = await eventService.getEvents();
        setEvents(eventsData.events || []);
        
        setError(null);
      } catch (err) {
        console.error('Error loading initial data:', err);
        
        // Using mock data as a fallback
        try {
          console.log('Falling back to mock data...');
          
          // Set error message but keep it user-friendly
          setError('Using demo data (Eventbrite API connection issue)');
          
          // Import mockData directly here as a fallback
          const { mockEvents, mockCategories, mockCities } = await import('../data/mockEvents');
          setCategories(mockCategories);
          setCities(mockCities);
          setEvents(mockEvents);
          
          // After a delay, clear the error message to improve UX
          setTimeout(() => {
            setError(null);
          }, 3000);
        } catch (fallbackErr) {
          console.error('Error loading fallback data:', fallbackErr);
          setError('Failed to load data. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };
    
    loadInitialData();
  }, []);
  
  // Update events when filters change
  useEffect(() => {
    const fetchFilteredEvents = async () => {
      setLoading(true);
      try {
        const eventsData = await eventService.getEvents(filters);
        setEvents(eventsData.events || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching filtered events:', err);
        setError('Failed to load events with the selected filters.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchFilteredEvents();
  }, [filters]);
  
  // Function to update filters
  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };
  
  // Function to reset filters
  const resetFilters = () => {
    setFilters({
      city: '',
      category: '',
      query: '',
      startDate: '',
      endDate: ''
    });
  };
  
  // Function to get a single event by ID
  const getEventById = async (eventId) => {
    try {
      setLoading(true);
      const eventData = await eventService.getEventById(eventId);
      setLoading(false);
      return eventData;
    } catch (err) {
      setLoading(false);
      setError(`Failed to load event with ID ${eventId}`);
      throw err;
    }
  };
  
  // Context value
  const value = {
    events,
    categories,
    cities,
    loading,
    error,
    filters,
    updateFilters,
    resetFilters,
    getEventById
  };
  
  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  );
};

export default EventContext;