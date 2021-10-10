import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexWrapper, AbsoluteBox, Svg } from 'components';
import { white, dark_text } from 'styles/colors';

interface IProps {
  labelProp?: string;
  type?: string;
  renderNextQuestion: (value?: string) => void;
  answer: string[];
  setAnswer: (value: string[]) => void;
}

export const AnswerCard: React.FC<IProps> = ({ labelProp = '', type, renderNextQuestion, answer, setAnswer }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const onClick = () => {
    if (type === 'multiple') {
      setIsSelected((prevState) => !prevState);
      const selectedAnswer = isSelected ? answer.filter((a) => a != labelProp) : [...answer, labelProp];
      setAnswer(selectedAnswer);
    } else {
      renderNextQuestion(labelProp);
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
        <AbsoluteBox top={isSelected ? '0.1rem' : '0.15rem'}>{labelProp}</AbsoluteBox>
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
`;
