import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import FilterBar from '../components/events/FilterBar';
import EventList from '../components/events/EventList';
import { useEvents } from '../contexts/EventContext';
import { getEventsByCity } from '../data/mockEvents';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-primary);
`;

const PageDescription = styled.p`
  color: var(--color-text);
  margin-bottom: 2rem;
`;

const EventsPage = () => {
  const [searchParams] = useSearchParams();
  const { updateFilters } = useEvents();
  
  // Extract filter values from URL parameters
  useEffect(() => {
    // Get from URL parameters first
    let category = searchParams.get('category') || '';
    let city = searchParams.get('city') || '';
    const query = searchParams.get('query') || '';
    const startDate = searchParams.get('startDate') || '';
    const endDate = searchParams.get('endDate') || '';
    
    // Check local storage for stored values
    const selectedCity = localStorage.getItem('selectedCity');
    const selectedCategory = localStorage.getItem('selectedCategory');
    
    console.log("EventsPage - initial params:", { 
      category, city, query, startDate, endDate, 
      selectedCity, selectedCategory 
    });
    
    // Override URL params with localStorage if they exist and URL doesn't
    if (selectedCity && !city) {
      city = selectedCity;
      console.log(`Using city from localStorage: ${city}`);
      const cityEvents = getEventsByCity(city);
      console.log(`Found ${cityEvents.length} events for ${city}`);
    }
    
    if (selectedCategory && !category) {
      category = selectedCategory;
      console.log(`Using category from localStorage: ${category}`);
    }
    
    // Clear localStorage after use
    localStorage.removeItem('selectedCity');
    localStorage.removeItem('selectedCategory');
    
    // Apply the filters
    updateFilters({
      category,
      city,
      query,
      startDate,
      endDate
    });
    
    // Update the page title based on filters
    if (category) {
      document.title = `${category} Events | Local Event Finder`;
    } else if (city) {
      document.title = `Events in ${city} | Local Event Finder`;
    } else {
      document.title = "Local Event Finder";
    }
    
    // Update URL to reflect the actual filters being used (if they came from localStorage)
    if ((selectedCity && !searchParams.get('city')) || 
        (selectedCategory && !searchParams.get('category'))) {
      
      // Build new URL with all parameters
      const newParams = new URLSearchParams();
      if (category) newParams.set('category', category);
      if (city) newParams.set('city', city);
      if (query) newParams.set('query', query);
      if (startDate) newParams.set('startDate', startDate);
      if (endDate) newParams.set('endDate', endDate);
      
      // Use window.history to update URL without causing a navigation/reload
      const newUrl = `${window.location.pathname}?${newParams.toString()}`;
      window.history.replaceState({}, '', newUrl);
    }
  }, [searchParams, updateFilters]);
  
  // Keep track of effective filters that include localStorage values
  const [effectiveFilters, setEffectiveFilters] = useState({
    category: '',
    city: ''
  });
  
  // Update effectiveFilters when primary useEffect runs
  useEffect(() => {
    setEffectiveFilters({
      category: localStorage.getItem('selectedCategory') || searchParams.get('category') || '',
      city: localStorage.getItem('selectedCity') || searchParams.get('city') || ''
    });
  }, [searchParams]);
  
  return (
    <PageContainer className="max-w-6xl mx-auto px-4 py-8">
      <PageTitle className="text-3xl font-semibold text-primary mb-2">
        {effectiveFilters.category ? 
          `${effectiveFilters.category} Events in Kenya` : 
          effectiveFilters.city ? 
            `Events in ${effectiveFilters.city}` : 
            'Events in Kenya'
        }
      </PageTitle>
      <PageDescription className="text-gray-700 mb-8">
        Browse through events happening in cities across Kenya. Use the filters below to find exactly what you're looking for.
      </PageDescription>
      
      <FilterBar />
      <EventList />
    </PageContainer>
  );
};

export default EventsPage;