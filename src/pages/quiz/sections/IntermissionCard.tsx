import React from 'react';
import { useQuery } from 'styles/breakpoints';
import {
  Container,
  FlexWrapper,
  H4Mobile,
  H4,
  Image,
  RegularTextMobile,
  PrimaryButton,
  TextBase,
  RegularText,
} from 'components';
import { blue } from 'styles/colors';

interface IProps {
  renderNextQuestion: () => void;
}

const INTERMISSION_DATA = {
  title: 'Let’s get to the root of the problem.',
  imgSrc: 'intermission_pic',
  texts: [
    'We need to find out what triggers stress and anxiety for you.',
    'It will help us understand your current stressors and offer the right solution for you.',
    'Please select which of the following sentences are relevant to you.',
  ],
  disclaimer:
    'Disclaimer: Scores on the DASS-21 do not indicate a diagnosis. They simply provide a measure of severity based on the three assessed domains. To determine any potential diagnosis, discuss your results with your doctor or a qualified mental health provider.',
};

export const IntermissionCard: React.FC<IProps> = ({ renderNextQuestion }) => {
  const { isMobile } = useQuery();
  const { title, imgSrc, texts, disclaimer } = INTERMISSION_DATA;

  return (
    <Container maxWidth='25rem'>
      <FlexWrapper flexWrap='no-wrap' padding='0'>
        <Image src={imgSrc} />
        {isMobile ? <H4Mobile>{title}</H4Mobile> : <H4>{title}</H4>}
      </FlexWrapper>
      {texts.map((text: string, index: number) =>
        isMobile ? (
          <RegularTextMobile key={index}>{text} asd</RegularTextMobile>
        ) : (
          <RegularText key={index}>{text}</RegularText>
        )
      )}

      <PrimaryButton colorProp={blue} minWidth='100%' margin='1rem 0' onClick={renderNextQuestion}>
        Continue
      </PrimaryButton>

      {isMobile && (
        <TextBase margin='5rem 0 0 0' fontSize='0.85rem'>
          {disclaimer}
        </TextBase>
      )}
    </Container>
  );
};
