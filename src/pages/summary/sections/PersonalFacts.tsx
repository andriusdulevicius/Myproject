import React from 'react';
import styled from 'styled-components';
import { PersonalFactsCard } from '../elements/PersonalFactsCard';
import { PERSONAL_FACTS, PROMOTER_LOGOS } from '../utils';
import { useQuery, mobile } from 'styles/breakpoints';
import { FlexWrapper, H2, Container, H5, Image } from 'components';
import { dark_text } from 'styles/colors';

export const PersonalFacts: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <StyledSection>
      <Container textAlign={isMobile ? 'left' : 'center'} margin='2rem auto'>
        <H2>Personal facts</H2>
        <StyledFlexWrapper>
          {PERSONAL_FACTS.map((fact) => (
            <PersonalFactsCard key={fact.id} fact={fact} />
          ))}
        </StyledFlexWrapper>
        <H5 margin='2rem 0'>Anxiety reduction techniques covered in</H5>
        <FlexWrapper flexWrap='wrap' gap={isMobile ? '1rem' : '2rem'} padding='0' maxWidth='80rem'>
          {PROMOTER_LOGOS.map((logo: string, index: number) => (
            <Image key={index} src={logo} />
          ))}
        </FlexWrapper>
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  position: relative;
  z-index: 10;
`;

const StyledFlexWrapper = styled(FlexWrapper).attrs({ gap: '1rem', alignItems: 'start' })`
  max-width: 80rem;
  border: 0.0625rem solid ${dark_text + '15'};
  border-radius: 0.8rem;

  @media ${mobile} {
    flex-direction: column;
    gap: 0;
  }
`;
