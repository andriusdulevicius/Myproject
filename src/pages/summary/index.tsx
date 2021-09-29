import React from 'react';
import styled from 'styled-components';
import { StatisticsSummary } from './sections/StatisticsSummary';
import { PersonalSummary } from './sections/PersonalSummary';
import {
  H1Mobile,
  H3Mobile,
  RegularTextMobile,
  SmallTextMobile,
  FlexWrapper,
  Image,
  SmallCard,
  Svg,
  ContainerSmall,
  TextBaseBold,
  CaptionTextMobile,
} from 'components';
import { green, grey_white, light_text, orange } from 'styles/colors';

const Summary = () => {
  return (
    <StyledSummary>
      <StatisticsSummary />
      <PersonalSummary />
    </StyledSummary>
  );
};

export default Summary;

const StyledSummary = styled.section`
  padding: 1rem;
  background-color: ${grey_white};
`;
