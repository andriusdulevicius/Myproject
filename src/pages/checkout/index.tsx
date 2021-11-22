import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { SecondaryNav } from 'layouts/navigations/SecondaryNav';
import { MyGoals } from './sections/MyGoals';
import { ResultsExplained } from './sections/ResultsExplained';
import { ContactForm } from './sections/ContactForm';
import { RealStories } from './sections/RealStories';
import { Faq } from './sections/Faq';
import { grey_white } from 'styles/colors';

const Checkout: React.FC = () => {
  return (
    <>
      <SecondaryNav />
      <SectionWrapper>
        <ResultsExplained />
        <MyGoals />
        <RealStories />
        <Element name='contact_form'>
          <ContactForm />
        </Element>
        <Faq />
      </SectionWrapper>
    </>
  );
};

export default Checkout;

const SectionWrapper = styled.section`
  padding: 3rem 0;
  background-color: ${grey_white + '15'};
`;
