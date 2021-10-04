import React from 'react';
import { useQuery } from 'styles/breakpoints';
import { INTERMISSION_DATA } from './utils';
import { Container, FlexWrapper, H4, Image, PrimaryButton, TextBase, RegularText } from 'components';
import { blue } from 'styles/colors';

interface IProps {
  renderNextQuestion: () => void;
}

export const IntermissionCard: React.FC<IProps> = ({ renderNextQuestion }) => {
  const { isMobile } = useQuery();
  const { title, imgSrc, texts, disclaimer } = INTERMISSION_DATA;

  return (
    <Container maxWidth='25rem'>
      <FlexWrapper>
        <Image src={imgSrc} />
        <H4>{title}</H4>
      </FlexWrapper>
      {texts.map((text: string, index: number) => (
        <RegularText key={index}>{text}</RegularText>
      ))}
      <PrimaryButton colorProp={blue} minWidth='100%' margin='1rem 0' onClick={renderNextQuestion}>
        Continue
      </PrimaryButton>

      {isMobile && (
        <TextBase margin='5rem 0 0 ' fontSize='0.85rem'>
          {disclaimer}
        </TextBase>
      )}
    </Container>
  );
};
