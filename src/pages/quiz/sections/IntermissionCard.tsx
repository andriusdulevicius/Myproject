import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { INTERMISSION_DATA } from './utils';
import { Container, FlexWrapper, H4, Image, PrimaryButton, TextBase, RegularText, SmallBox } from 'components';
import { blue, dark_text } from 'styles/colors';

interface IProps {
  renderNextQuestion: () => void;
}

export const IntermissionCard: React.FC<IProps> = ({ renderNextQuestion }) => {
  const { isMobile } = useQuery();
  const { title, imgSrc, texts, disclaimer } = INTERMISSION_DATA;

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
      <PrimaryButton colorProp={blue} minWidth='100%' margin='1rem 0' onClick={renderNextQuestion}>
        Continue
      </PrimaryButton>

      {isMobile && (
        <TextBase margin='5rem 0 0 ' fontSize='0.85rem' color={dark_text + '80'}>
          {disclaimer}
        </TextBase>
      )}
    </Container>
  );
};

const StyledSmallBox = styled(SmallBox)`
  border-radius: 50%;
  max-width: 5rem;
  overflow: hidden;
`;
