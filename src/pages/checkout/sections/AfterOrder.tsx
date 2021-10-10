import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { CaptionText, H4 } from 'components';
import { StyledContainer } from '../elements/Styles';
import { dark_text } from 'styles/colors';

export const AfterOrder: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <StyledContainer maxWidth='50rem'>
      <H4 margin={isMobile ? '1rem 0' : '2rem 0'} fontWeight={700}>
        What happens after I order?
      </H4>
      <StyledUl>
        <StyledLi>You receive an email with all the necessary info to begin your Anxietless journey.</StyledLi>
        <StyledLi>
          You will be enrolled in the email sequence, which will guide you with tips & tricks throughout the entire
          journey.
        </StyledLi>
      </StyledUl>
      <CaptionText margin={isMobile ? '2rem 0' : '3rem 0'} color={dark_text + '80'} textAlign='justify'>
        The information we provide at our website or app is not intended to replace consultation with a qualified
        medical professional. Please, seek the advice of your psychologist or another qualified health provider with any
        questions you may have regarding a medical condition. For questions or concerns about any medical conditions you
        may have, please contact your doctor. For more information check out our Terms and Conditions.
      </CaptionText>
    </StyledContainer>
  );
};

const StyledUl = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const StyledLi = styled.li`
  text-align: left;
  padding-top: 1rem;

  :before {
    display: inline-block;
    vertical-align: middle;
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    background-color: ${dark_text};
    margin-right: 0.5rem;
    content: ' ';
  }
`;
