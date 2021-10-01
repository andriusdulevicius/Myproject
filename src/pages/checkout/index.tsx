import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { grey_white, orange, blue } from 'styles/colors';
import { MonthlyPlanExplained } from './sections/MonthlyPlanExplained';

const Checkout = () => {
  return (
    <SectionWrapper>
      <MonthlyPlanExplained />
    </SectionWrapper>
  );
};

export default Checkout;

const SectionWrapper = styled.section`
  margin: 3rem 0;
  padding: 1rem;
  background-color: ${grey_white + '15'};
`;
