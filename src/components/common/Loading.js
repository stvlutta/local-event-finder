import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: 200px;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid var(--color-secondary);
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  margin-left: 1rem;
  font-weight: 500;
`;

const Loading = ({ message = "Loading..." }) => {
  return (
    <LoadingContainer className="flex justify-center items-center py-8">
      <Spinner className="border-4 border-gray-200 border-t-secondary rounded-full w-10 h-10 animate-spin" />
      <LoadingText className="ml-4 font-medium">{message}</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;