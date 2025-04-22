import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-primary);
`;

const Paragraph = styled.p`
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const MemberImage = styled.div`
  height: 200px;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
`;

const MemberName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--color-primary);
`;

const MemberRole = styled.p`
  color: var(--color-secondary);
  font-weight: 500;
  margin-bottom: 0.75rem;
`;

const MemberBio = styled.p`
  color: var(--color-text);
  font-size: 0.875rem;
`;

const AboutPage = () => {
  return (
    <PageContainer className="max-w-6xl mx-auto px-4 py-8">
      <PageTitle className="text-4xl font-bold text-primary mb-6 text-center">
        About Local Event Finder
      </PageTitle>
      
      <Section className="mb-12">
        <SectionTitle className="text-2xl font-semibold text-primary mb-4">
          Our Mission
        </SectionTitle>
        <Paragraph className="text-gray-700 leading-relaxed mb-6">
          Local Event Finder was created with a simple mission: to help people discover and connect with events happening in their communities across Kenya. 
          We believe that local events are the heartbeat of our cities and towns, bringing people together, fostering community, and creating shared experiences.
        </Paragraph>
        <Paragraph className="text-gray-700 leading-relaxed mb-6">
          Whether you're looking for tech meetups in Nairobi, cultural festivals in Mombasa, or sports events in Kisumu, 
          our platform aims to be your go-to resource for finding what's happening near you. We're passionate about promoting local culture, 
          supporting event organizers, and helping Kenyans connect with experiences that enrich their lives.
        </Paragraph>
      </Section>
      
      <Section className="mb-12">
        <SectionTitle className="text-2xl font-semibold text-primary mb-4">
          What We Offer
        </SectionTitle>
        <Paragraph className="text-gray-700 leading-relaxed mb-6">
          Local Event Finder provides a comprehensive, user-friendly platform for discovering events across Kenya:
        </Paragraph>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>A curated selection of events from various categories including tech, arts, culture, music, food, sports, and business</li>
          <li>Powerful search and filtering tools to help you find exactly what you're looking for</li>
          <li>Detailed event information including dates, venues, prices, and descriptions</li>
          <li>Mobile-friendly design so you can find events on the go</li>
          <li>Focus on local Kenyan events and communities</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle className="text-2xl font-semibold text-primary mb-4">
          Our Team
        </SectionTitle>
        <Paragraph className="text-gray-700 leading-relaxed mb-6">
          Local Event Finder is brought to you by a passionate team of developers and designers who are dedicated to creating the best event discovery platform for Kenya.
        </Paragraph>
        
        <TeamGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <TeamMember className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform">
            <MemberImage className="h-48 bg-gray-100 flex items-center justify-center text-5xl">
              👨‍💻
            </MemberImage>
            <MemberInfo className="p-6">
              <MemberName className="text-xl font-semibold text-primary mb-1">
                Alex Kimani
              </MemberName>
              <MemberRole className="text-secondary font-medium mb-3">
                Frontend Developer
              </MemberRole>
              <MemberBio className="text-gray-700 text-sm">
                Alex leads our frontend development, creating the user interfaces that make our platform intuitive and enjoyable to use.
              </MemberBio>
            </MemberInfo>
          </TeamMember>
          
          <TeamMember className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform">
            <MemberImage className="h-48 bg-gray-100 flex items-center justify-center text-5xl">
              👩‍💻
            </MemberImage>
            <MemberInfo className="p-6">
              <MemberName className="text-xl font-semibold text-primary mb-1">
                Faith Wangari
              </MemberName>
              <MemberRole className="text-secondary font-medium mb-3">
                Backend Developer
              </MemberRole>
              <MemberBio className="text-gray-700 text-sm">
                Faith handles our backend systems, ensuring data flows smoothly and our API integrations work perfectly.
              </MemberBio>
            </MemberInfo>
          </TeamMember>
          
          <TeamMember className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform">
            <MemberImage className="h-48 bg-gray-100 flex items-center justify-center text-5xl">
              👨‍🎨
            </MemberImage>
            <MemberInfo className="p-6">
              <MemberName className="text-xl font-semibold text-primary mb-1">
                David Ochieng
              </MemberName>
              <MemberRole className="text-secondary font-medium mb-3">
                UI/UX Designer
              </MemberRole>
              <MemberBio className="text-gray-700 text-sm">
                David creates the beautiful designs that make our platform visually appealing and user-friendly.
              </MemberBio>
            </MemberInfo>
          </TeamMember>
          
          <TeamMember className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform">
            <MemberImage className="h-48 bg-gray-100 flex items-center justify-center text-5xl">
              👩‍💼
            </MemberImage>
            <MemberInfo className="p-6">
              <MemberName className="text-xl font-semibold text-primary mb-1">
                Mary Mwangi
              </MemberName>
              <MemberRole className="text-secondary font-medium mb-3">
                Project Manager
              </MemberRole>
              <MemberBio className="text-gray-700 text-sm">
                Mary keeps everything on track, ensuring we deliver the best possible experience to our users.
              </MemberBio>
            </MemberInfo>
          </TeamMember>
        </TeamGrid>
      </Section>
    </PageContainer>
  );
};

export default AboutPage;