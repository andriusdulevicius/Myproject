import React from 'react';
import styled from 'styled-components';
import {
  FlexWrapper,
  H2Mobile,
  H2,
  ContainerSmall,
  Svg,
  H4Mobile,
  H4,
  H5,
  SmallTextMobile,
  TextWrapper,
  H5Mobile,
  Image,
} from 'components';
import { useQuery } from 'styles/breakpoints';
import { dark_text } from 'styles/colors';

const PERSONAL_FACTS = [
  {
    id: 1,
    icon: 'us_flag',
    title: 'Affects 18% of US population',
    subtitle: 'According to ADDA:',
    text: 'Anxiety affect over 40 million US adults annualy. Anxiety is by far the most prevalent mental health disorder.',
  },
  {
    id: 2,
    icon: 'hospital',
    title: '1/3 get help',
    subtitle: 'According to NIMH:',
    text: 'Only 33% of people seek anxiety treatment.',
    text2: 'Don’t delay. Your issues are real, but you are not alone on this journey.',
  },
  {
    id: 3,
    icon: 'woman',
    title: 'Women X2 ',
    subtitle: 'According to ADDA:',
    text: 'Women have a higher chance of anxiety. But, that isn’t all. Women show signs of anxiety much earlier than man as well. Hower only 1/4 of men seek help in general.',
  },
  {
    id: 4,
    icon: 'pill',
    title: 'Pills - Short term solution',
    subtitle: 'According to University of Virginia:',
    text: 'Tranquilizers and sleeping pills may work in the short-term, but they do not help you manage and reduce your anxiety overt time. Anxiety methods are long term solutions which are easy to impliment into your daily routine.',
  },
];

export const PersonalFacts = () => {
  const { isMobile } = useQuery();
  return (
    <StyledFacts>
      {isMobile ? <H2Mobile>Personal facts</H2Mobile> : <H2>Personal facts</H2>}
      <StyledFlexWrapper isMobile={isMobile}>
        {PERSONAL_FACTS.map(({ id, icon, title, subtitle, text }) => (
          <ContainerSmall key={id} padding='1rem' maxWidth={isMobile ? '100%' : '24%'}>
            <FlexWrapper flexWrap='nowrap' padding='0' justifyContent='start'>
              <Svg src={icon} />
              {isMobile ? <H4Mobile textAlign='left'>{title}</H4Mobile> : <H4 textAlign='left'>{title}</H4>}
            </FlexWrapper>
            <SmallTextMobile margin='0'>
              <TextWrapper>{subtitle}</TextWrapper>
              {text}
            </SmallTextMobile>
          </ContainerSmall>
        ))}
      </StyledFlexWrapper>
      {isMobile ? (
        <H5Mobile>Anxiety reduction techniques covered in</H5Mobile>
      ) : (
        <H5>Anxiety reduction techniques covered in</H5>
      )}
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
  padding: 0;
`;
