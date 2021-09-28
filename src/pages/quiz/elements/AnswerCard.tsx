import React, { useState, Dispatch, SetStateAction } from 'react';
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
          <AbsoluteBox left='0.4rem' top='0.35rem'>
            <Svg src='check_circle' />
          </AbsoluteBox>
        )}
        <AbsoluteBox top='0.6rem'>{labelProp}</AbsoluteBox>
      </FlexWrapper>
    </OptionCard>
  );
};

const OptionCard = styled.div<{ isSelected: boolean }>`
  display: block;
  width: 100%;
  height: 2.3rem;
  border: ${({ isSelected }) => (isSelected ? `1px solid ${dark_text}` : 'none')};
  border-radius: 2.3rem;
  text-align: center;
  background-color: ${white};
  cursor: pointer;
`;
