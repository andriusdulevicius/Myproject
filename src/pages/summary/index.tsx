import React from 'react';
import styled from 'styled-components';
import { SummaryBackground } from 'components';
import { StatisticsSummary } from './sections/StatisticsSummary';
import { PersonalSummary } from './sections/PersonalSummary';
import { PersonalFacts } from './sections/PersonalFacts';
import { OurPromise } from './sections/OurPromise';
import { grey_white } from 'styles/colors';
import { useQuery } from 'styles/breakpoints';

const Summary: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <>
      {!isMobile && <SummaryBackground />}
      <StyledSummary>
        <StatisticsSummary />
        <PersonalSummary />
        <PersonalFacts />
        <OurPromise />
      </StyledSummary>
    </>
  );
};

export default Summary;

const StyledSummary = styled.section`
  padding: 1rem;
  background-color: ${grey_white};
`;
