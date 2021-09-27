import React from 'react';
import { Container, FlexWrapper, H4Mobile, Image, RegularTextMobile, PrimaryButton, CaptionText } from 'components';
import { blue } from 'styles/colors';

export const IntermissionCard: React.FC = () => {
  return (
    <Container>
      <FlexWrapper>
        <Image src='intermission_pic' />
        <H4Mobile>Let’s get to the root of the problem.</H4Mobile>
      </FlexWrapper>
      <RegularTextMobile>We need to find out what triggers stress and anxiety for you.</RegularTextMobile>

      <RegularTextMobile>
        It will help us understand your current stressors and offer the right solution for you.
      </RegularTextMobile>

      <RegularTextMobile>Please select which of the following sentences are relevant to you. </RegularTextMobile>

      <PrimaryButton colorProp={blue} width='100%'>
        Continue
      </PrimaryButton>
      <CaptionText margin='3rem 0 0 0'>
        Disclaimer: Scores on the DASS-21 do not indicate a diagnosis. They simply provide a measure of severity based
        on the three assessed domains. To determine any potential diagnosis, discuss your results with your doctor or a
        qualified mental health provider.
      </CaptionText>
    </Container>
  );
};
