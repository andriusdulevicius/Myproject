import React from 'react';
import { Container, FlexWrapper, H4Mobile, Image, RegularTextMobile, PrimaryButton, TextBase } from 'components';
import { blue } from 'styles/colors';

export const IntermissionCard: React.FC = () => {
  return (
    <Container>
      <FlexWrapper flexWrap='no-wrap'>
        <Image src='intermission_pic' />
        <H4Mobile>Let’s get to the root of the problem.</H4Mobile>
      </FlexWrapper>
      <RegularTextMobile>We need to find out what triggers stress and anxiety for you.</RegularTextMobile>

      <RegularTextMobile>
        It will help us understand your current stressors and offer the right solution for you.
      </RegularTextMobile>

      <RegularTextMobile>Please select which of the following sentences are relevant to you. </RegularTextMobile>
    </Container>
  );
};
