import React from 'react';
import styled from 'styled-components';
import { INTERMISSION_DATA } from './utils';
import { Container, FlexWrapper, H4, Image, PrimaryButton, TextBase, RegularText, SmallBox } from 'components';
import { violet } from 'styles/colors';

interface Props {
  renderNextQuestion: () => void;
}

export const IntermissionCard: React.FC<Props> = ({ renderNextQuestion }) => {
  const { title, imgSrc, texts } = INTERMISSION_DATA;

  return (
    <Container maxWidth='25rem'>
      <FlexWrapper>
        <StyledSmallBox minWidth='5rem'>
          <Image src={imgSrc} />
        </StyledSmallBox>
        <H4>{title}</H4>
      </FlexWrapper>
      {texts.map((text: string, index: number) => (
        <RegularText key={index}>{text}</RegularText>
      ))}
      <PrimaryButton colorProp={violet} minWidth='100%' margin='1rem 0' padding='0.5rem' onClick={renderNextQuestion}>
        Continue
      </PrimaryButton>
    </Container>
  );
};

const StyledSmallBox = styled(SmallBox)`
  border-radius: 50%;
  max-width: 5rem;
  overflow: hidden;
`;
