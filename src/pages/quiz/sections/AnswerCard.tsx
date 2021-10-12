import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexWrapper, AbsoluteBox, Svg } from 'components';
import { white, dark_text } from 'styles/colors';

interface Props {
  answerLabel?: string;
  type?: string;
  renderNextQuestion: (value?: string) => void;
  fullAnswer: string[];
  setFullAnswer: (value: string[]) => void;
}

export const AnswerCard: React.FC<Props> = ({
  answerLabel = '',
  type,
  renderNextQuestion,
  fullAnswer,
  setFullAnswer,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const onClick = () => {
    if (type === 'multiple') {
      setIsSelected((prevState) => !prevState);
      const selectedAnswers = isSelected ? fullAnswer.filter((a) => a != answerLabel) : [...fullAnswer, answerLabel];
      setFullAnswer(selectedAnswers);
    } else {
      renderNextQuestion(answerLabel);
    }
  };

  return (
    <OptionCard isSelected={isSelected} onClick={onClick}>
      <FlexWrapper padding='0.2rem'>
        {isSelected && (
          <AbsoluteBox left='0.2rem' top='0.1rem'>
            <Svg src='check_circle' />
          </AbsoluteBox>
        )}
        <AbsoluteBox top={isSelected ? '0.1rem' : '0.15rem'}>{answerLabel}</AbsoluteBox>
      </FlexWrapper>
    </OptionCard>
  );
};

const OptionCard = styled.div<{ isSelected: boolean }>`
  display: block;
  width: 100%;
  height: 1.8rem;
  border: ${({ isSelected }) => (isSelected ? `1px solid ${dark_text}` : 'none')};
  border-radius: 2.3rem;
  background-color: ${white};
  cursor: pointer;
  :active {
    transform: scale(1.02);
    background-color: ${dark_text + '80'};
  }
`;
