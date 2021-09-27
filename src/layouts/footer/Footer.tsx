import React from 'react';
import { useQuery } from 'styles/breakpoints';
import { Container, FlexWrapper } from 'components';
import { CaptionText } from './../../components/typography/Texts';

export const Footer: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <Container>
      <FlexWrapper justifyContent={!isMobile ? 'space-between' : 'center'} padding='0.5rem 0'>
        <CaptionText> &copy; 2020 Anxietless. All rights reserved.</CaptionText>
        {!isMobile && <CaptionText>Disclaimer: Results may vary from person to person.</CaptionText>}
      </FlexWrapper>
    </Container>
  );
};
