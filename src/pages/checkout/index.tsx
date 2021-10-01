import React from 'react';
import styled from 'styled-components';
import { grey_white, orange, blue } from 'styles/colors';
import { MonthlyPlanExplained } from './sections/MonthlyPlanExplained';
import { OptionSelection } from './sections/OptionSelection';

const Checkout = () => {
  return (
    <SectionWrapper>
      <MonthlyPlanExplained />
      <OptionSelection />
    </SectionWrapper>
  );
};

export default Checkout;

const SectionWrapper = styled.section`
  margin: 3rem 0;
  background-color: ${grey_white + '15'};
`;
