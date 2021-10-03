import React, { useState } from 'react';
import styled from 'styled-components';
import { ContainerSmall, FlexWrapper, SmallText, H4, Svg, H5, SmallBox } from 'components';
import { grey_white } from 'styles/colors';

interface IProps {
  QA: {
    question: string;
    answer: string;
  };
}

export const QACard: React.FC<IProps> = ({ QA }) => {
  const [answerState, setAnswerState] = useState<boolean>(false);
  const { question, answer } = QA;

  const answerShowHandler = () => {
    setAnswerState(!answerState);
  };

  return (
    <StyledContainerSmall answerState={answerState} onClick={answerShowHandler}>
      <FlexWrapper justifyContent='space-between' alignItems='start'>
        <H5 margin='0' fontWeight={700}>
          {question}
        </H5>
        <SmallBox minWidth='0.46rem'>
          <Svg src={!answerState ? 'expand_more' : 'expand_less'} />
        </SmallBox>
      </FlexWrapper>
      <StyledSmallText answerState={answerState} margin='0'>
        {answer}
      </StyledSmallText>
    </StyledContainerSmall>
  );
};

export const StyledContainerSmall = styled(ContainerSmall)<{ answerState: boolean }>`
  margin-top: 1rem;
  padding: 2rem;
  min-height: 5.5rem;
  max-height: ${({ answerState }) => (answerState ? '40rem' : '4rem')};
  max-width: 50rem;
  border: 0.0625rem solid ${grey_white};
  border-radius: 1rem;
  transition: all 1s ease;
`;

const StyledSmallText = styled(SmallText)<{ answerState: boolean }>`
  opacity: ${({ answerState }) => (answerState ? 1 : 0)};
  overflow: ${({ answerState }) => (answerState ? 'visible' : 'hidden')};
  transition: all 1s ease;
`;
