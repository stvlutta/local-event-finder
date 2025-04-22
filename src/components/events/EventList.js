import React from 'react';
import styled from 'styled-components';
import EventCard from './EventCard';
import Loading from '../common/Loading';
import ErrorMessage from '../common/ErrorMessage';
import { useEvents } from '../../contexts/EventContext';

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const NoEventsMessage = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: #F7FAFC;
  border-radius: var(--radius-lg);
  margin: 2rem 0;
  border: 1px solid #E2E8F0;
`;

const EventList = () => {
  const { events, loading, error } = useEvents();
  
  if (loading) {
    return <Loading message="Loading events..." />;
  }
  
  if (error) {
    return <ErrorMessage message={error} />;
  }
  
  if (events.length === 0) {
    return (
      <NoEventsMessage className="text-center p-12 bg-gray-50 rounded-lg my-8">
        <h3 className="text-xl font-semibold mb-2">No events found</h3>
        <p className="text-gray-600">Try adjusting your filters or check back later for new events.</p>
      </NoEventsMessage>
    );
  }
  
  return (
    <EventsGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </EventsGrid>
  );
};

export default EventList;