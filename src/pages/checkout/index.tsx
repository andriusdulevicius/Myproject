import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';

import { grey_white } from 'styles/colors';
import {
  Button,
  PrimaryButton,
  SecondaryButton,
  Image,
  TextBase,
  TextBaseBold,
  H1,
  H2,
  H3,
  RegularText,
  SmallText,
  CaptionText,
  Container,
  ContainerSmall,
  FlexWrapper,
} from 'components';

const Checkout = () => {
  const { isMobile, isTablet } = useQuery();

  // Linka naudojam renderyje, useRouteri naudojame funkcijose

  return (
    <SectionWrapper>
      <PrimaryButton> Checkout </PrimaryButton>
      <SecondaryButton> Secondary </SecondaryButton>
    </SectionWrapper>
  );
};

export default Checkout;

const SectionWrapper = styled.div`
  margin: 3rem 0;
  padding: 2rem 0;
  background-color: ${grey_white};
`;
