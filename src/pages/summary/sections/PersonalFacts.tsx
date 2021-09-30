import React from 'react';
import styled from 'styled-components';
import { PERSONAL_FACTS } from './utils';
import { useQuery } from 'styles/breakpoints';
import { FlexWrapper, H2, ContainerSmall, Svg, H4, H5, TextWrapper, Image, SmallText } from 'components';
import { dark_text } from 'styles/colors';

export const PersonalFacts = () => {
  const { isMobile } = useQuery();
  return (
    <StyledFacts>
      <H2>Personal facts</H2>
      <StyledFlexWrapper isMobile={isMobile}>
        {PERSONAL_FACTS.map(({ id, icon, title, subtitle, text }) => (
          <ContainerSmall key={id} padding='1rem' maxWidth={isMobile ? '100%' : '24%'}>
            <FlexWrapper flexWrap='nowrap' padding='0' justifyContent='start'>
              <Svg src={icon} />
              <H4 textAlign='left'>{title}</H4>
            </FlexWrapper>
            <SmallText margin='0'>
              <TextWrapper>{subtitle}</TextWrapper>
              {text}
            </SmallText>
          </ContainerSmall>
        ))}
      </StyledFlexWrapper>
      {isMobile ? <H5>Anxiety reduction techniques covered in</H5> : <H5>Anxiety reduction techniques covered in</H5>}
      <FlexWrapper flexWrap='wrap' padding='0'>
        <Image src='healthline' />
        <Image src='bi' />
        <Image src='nyc' />
        <Image src='bbc' />
      </FlexWrapper>
    </StyledFacts>
  );
};

const StyledFacts = styled(FlexWrapper).attrs({ flexDirection: 'column' })``;

const StyledFlexWrapper = styled(FlexWrapper)<{ isMobile: boolean }>`
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  flex-wrap: nowrap;
  align-items: start;
  border: 0.0625rem solid ${dark_text + '15'};
  border-radius: 0.8rem;
  max-width: 74rem;
`;
