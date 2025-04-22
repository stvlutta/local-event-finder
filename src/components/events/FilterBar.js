import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useEvents } from '../../contexts/EventContext';

const FilterContainer = styled.div`
  background: #FFFFFF; /* White background */
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: 2.5rem;
  margin-bottom: 3.5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid #E2E8F0;
  
  &:hover {
    box-shadow: var(--shadow-lg);
  }
`;

const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const FilterTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1A202C; /* Dark text for white background */
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  span {
    font-size: 1.5rem;
    color: var(--color-secondary);
  }
`;

const FilterToggle = styled.button`
  background-color: white;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  font-weight: 500;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
  
  &:hover {
    background-color: var(--color-gray-light);
  }
  
  span {
    display: inline-block;
    transition: transform 0.2s ease;
    transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const FilterForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  ${props => !props.expanded && `
    display: none;
  `}
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1A202C; /* Dark text for white background */
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  span {
    font-size: 1rem;
    color: var(--color-secondary);
  }
`;

const Select = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: white;
  color: var(--color-text);
  font-size: 0.9rem;
  font-weight: 400;
  transition: all 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%231E0A3C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
  
  &:hover {
    border-color: var(--color-text-light);
  }
  
  option {
    font-weight: 400;
    padding: 8px;
  }
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: white;
  color: var(--color-text);
  font-size: 0.9rem;
  font-weight: 400;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
  
  &:hover {
    border-color: var(--color-text-light);
  }
  
  &::placeholder {
    color: var(--color-gray-dark);
    font-weight: 400;
  }
  
  /* Special styling for date inputs */
  &[type="date"] {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%231E0A3C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'/%3E%3Cline x1='16' y1='2' x2='16' y2='6'/%3E%3Cline x1='8' y1='2' x2='8' y2='6'/%3E%3Cline x1='3' y1='10' x2='21' y2='10'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
  }
  
  &::-webkit-calendar-picker-indicator {
    opacity: 0.7;
  }
`;

const FilterActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  border: none;
  
  &:focus {
    outline: none;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ApplyButton = styled(Button)`
  background-color: var(--color-secondary);
  color: white;
  font-weight: 600;
  
  &:hover {
    background-color: var(--color-secondary-light);
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

const ResetButton = styled(Button)`
  background-color: white;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  font-weight: 500;
  
  &:hover {
    background-color: var(--color-gray-light);
    border-color: var(--color-text-light);
  }
`;

const ActiveFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
`;

const FilterTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background-color: var(--color-gray-light);
  color: var(--color-text);
  font-size: 0.85rem;
  padding: 0.4rem 0.75rem;
  border-radius: var(--radius-full);
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid var(--color-border);
  
  button {
    background: none;
    border: none;
    color: var(--color-text-light);
    cursor: pointer;
    font-size: 1rem;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-left: 0.25rem;
    transition: all 0.2s ease;
    
    &:hover {
      color: var(--color-text);
    }
  }
`;

const FilterBar = () => {
  const { categories, cities, filters, updateFilters, resetFilters } = useEvents();
  
  // Local state to manage form inputs
  const [localFilters, setLocalFilters] = useState({
    city: '',
    category: '',
    query: '',
    startDate: '',
    endDate: ''
  });
  
  // State to control filter visibility
  const [expanded, setExpanded] = useState(true);
  
  // Update local filters when context filters change
  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    updateFilters(localFilters);
  };
  
  // Handle filter reset
  const handleReset = () => {
    resetFilters();
  };
  
  // Remove single filter
  const handleRemoveFilter = (filterName) => {
    updateFilters({
      ...filters,
      [filterName]: ''
    });
  };
  
  // Count active filters
  const activeFilterCount = Object.values(filters).filter(value => value !== '').length;
  
  // Toggle filter visibility
  const toggleFilters = () => {
    setExpanded(!expanded);
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-KE', { month: 'short', day: 'numeric', year: 'numeric' });
  };
  
  return (
    <FilterContainer>
      <FilterHeader>
        <FilterTitle>
          <span>🔍</span> Find Events
          {activeFilterCount > 0 && (
            <span className="text-sm ml-2 bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </FilterTitle>
        <FilterToggle 
          onClick={toggleFilters}
          expanded={expanded}
          type="button"
        >
          {expanded ? 'Hide Filters' : 'Show Filters'}
          <span>▼</span>
        </FilterToggle>
      </FilterHeader>
      
      <FilterForm onSubmit={handleSubmit} expanded={expanded}>
        <FormGroup>
          <Label htmlFor="city">
            <span>📍</span> Location
          </Label>
          <Select 
            id="city"
            name="city"
            value={localFilters.city}
            onChange={handleChange}
          >
            <option value="">All Cities</option>
            {cities.map(city => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </Select>
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="category">
            <span>🏷️</span> Category
          </Label>
          <Select 
            id="category"
            name="category"
            value={localFilters.category}
            onChange={handleChange}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </Select>
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="query">
            <span>🔍</span> Search
          </Label>
          <Input 
            type="text"
            id="query"
            name="query"
            placeholder="Search for events..."
            value={localFilters.query}
            onChange={handleChange}
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="startDate">
            <span>📅</span> Start Date
          </Label>
          <Input 
            type="date"
            id="startDate"
            name="startDate"
            value={localFilters.startDate}
            onChange={handleChange}
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="endDate">
            <span>📅</span> End Date
          </Label>
          <Input 
            type="date"
            id="endDate"
            name="endDate"
            value={localFilters.endDate}
            onChange={handleChange}
          />
        </FormGroup>
        
        <FilterActions>
          <ResetButton 
            type="button"
            onClick={handleReset}
          >
            Reset All
          </ResetButton>
          <ApplyButton type="submit">
            Apply Filters
            <span>→</span>
          </ApplyButton>
        </FilterActions>
      </FilterForm>
      
      {activeFilterCount > 0 && (
        <ActiveFilters>
          {filters.city && (
            <FilterTag>
              <span>📍 {filters.city}</span>
              <button type="button" onClick={() => handleRemoveFilter('city')}>×</button>
            </FilterTag>
          )}
          {filters.category && (
            <FilterTag>
              <span>🏷️ {filters.category}</span>
              <button type="button" onClick={() => handleRemoveFilter('category')}>×</button>
            </FilterTag>
          )}
          {filters.query && (
            <FilterTag>
              <span>🔍 "{filters.query}"</span>
              <button type="button" onClick={() => handleRemoveFilter('query')}>×</button>
            </FilterTag>
          )}
          {filters.startDate && (
            <FilterTag>
              <span>📅 From {formatDate(filters.startDate)}</span>
              <button type="button" onClick={() => handleRemoveFilter('startDate')}>×</button>
            </FilterTag>
          )}
          {filters.endDate && (
            <FilterTag>
              <span>📅 To {formatDate(filters.endDate)}</span>
              <button type="button" onClick={() => handleRemoveFilter('endDate')}>×</button>
            </FilterTag>
          )}
        </ActiveFilters>
      )}
    </FilterContainer>
  );
};

export default FilterBar;