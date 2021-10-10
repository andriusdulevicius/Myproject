import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { SecondaryNav } from 'layouts/navigations/SecondaryNav';
import { SummaryBackground } from 'components';
import { StatisticsSummary } from './sections/StatisticsSummary';
import { PersonalSummary } from './sections/PersonalSummary';
import { PersonalFacts } from './sections/PersonalFacts';
import { OurPromise } from './sections/OurPromise';
import { grey_white } from 'styles/colors';

const Summary: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <>
      <SecondaryNav text='Start Now' />
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
  padding: 3rem 1rem;
  background-color: ${grey_white};
`;
