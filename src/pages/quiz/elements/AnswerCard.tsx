import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexWrapper, AbsoluteBox, Svg } from 'components';
import { white, dark_text } from 'styles/colors';

interface IProps {
  labelProp?: string;
  type?: string;
  renderNextQuestion: () => void;
}

export const AnswerCard: React.FC<IProps> = ({ labelProp, type, renderNextQuestion }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleState = () => {
    setIsSelected((prevState) => !prevState);
  };

  return (
    <OptionCard isSelected={isSelected} onClick={type === 'multiple' ? handleState : renderNextQuestion}>
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
