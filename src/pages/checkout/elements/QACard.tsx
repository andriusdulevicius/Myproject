import React, { useState } from 'react';
import styled from 'styled-components';
import { ContainerSmall, FlexWrapper, SmallText, Svg, H5, SmallBox } from 'components';
import { grey_white } from 'styles/colors';

interface Props {
  QA: {
    question: string;
    answer: string;
  };
}

export const QACard: React.FC<Props> = ({ QA }) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const { question, answer } = QA;

  return (
    <StyledContainerSmall showAnswer={showAnswer} onClick={() => setShowAnswer((prevState) => !prevState)}>
      <FlexWrapper justifyContent='space-between' alignItems='start'>
        <H5 margin='0' fontWeight={700}>
          {question}
        </H5>
        <SmallBox minWidth='0.46rem'>
          <Svg src={!showAnswer ? 'expand_more' : 'expand_less'} />
        </SmallBox>
      </FlexWrapper>
      <StyledSmallText showAnswer={showAnswer}>{answer}</StyledSmallText>
    </StyledContainerSmall>
  );
};

export const StyledContainerSmall = styled(ContainerSmall)<{ showAnswer: boolean }>`
  margin-top: 1rem;
  padding: 2rem;
  min-height: 5.5rem;
  max-height: ${({ showAnswer }) => (showAnswer ? '40rem' : '4rem')};
  max-width: 50rem;
  border: 0.0625rem solid ${grey_white};
  border-radius: 1rem;
  transition: all 1s ease;
`;

const StyledSmallText = styled(SmallText)<{ showAnswer: boolean }>`
  margin: 0;
  opacity: ${({ showAnswer }) => (showAnswer ? 1 : 0)};
  overflow: ${({ showAnswer }) => (showAnswer ? 'visible' : 'hidden')};
  transition: all 1s ease;
`;
