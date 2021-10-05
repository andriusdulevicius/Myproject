import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { SecondaryNav } from 'layouts/navigations/SecondaryNav';
import { BreakFree } from './sections/BreakFree';
import { MonthlyPlanExplained } from './sections/MonthlyPlanExplained';
import { BillingSelection } from './sections/BillingSelection';
import { RealStories } from './sections/RealStories';
import { GenuinePeople } from './sections/GenuinePeople';
import { YouWill } from './sections/YouWill';
import { Faq } from './sections/Faq';
import { AfterOrder } from './sections/AfterOrder';
import { grey_white } from 'styles/colors';

const Checkout: React.FC = () => {
  return (
    <>
      <SecondaryNav text='Get my plan' />
      <SectionWrapper>
        <MonthlyPlanExplained />
        <Element name='billing'>
          <BillingSelection />
        </Element>
        <BreakFree />
        <RealStories />
        <GenuinePeople />
        <YouWill />
        <Faq />
        <BillingSelection />
        <AfterOrder />
      </SectionWrapper>
    </>
  );
};

export default Checkout;

const SectionWrapper = styled.section`
  padding: 3rem 0;
  background-color: ${grey_white + '15'};
`;
