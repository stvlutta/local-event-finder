import React from 'react';
import styled from 'styled-components';
import FilterBar from '../components/events/FilterBar';
import EventList from '../components/events/EventList';

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
  return (
    <PageContainer className="max-w-6xl mx-auto px-4 py-8">
      <PageTitle className="text-3xl font-semibold text-primary mb-2">
        Events in Kenya
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