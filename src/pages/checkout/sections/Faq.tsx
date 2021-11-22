import React from 'react';
import { QUESTIONS_ANSWERS } from './utils';
import { QACard } from '../elements/QACard';
import { StyledContainer, StyledH2 } from '../elements/Styles';

interface Props {
  navPage?: any;
}

export const Faq: React.FC<Props> = () => {
  return (
    <>
      <StyledContainer>
        <StyledH2>Frequently Asked Questions</StyledH2>
        {QUESTIONS_ANSWERS.map((QAObj) => (
          <QACard QA={QAObj} key={QAObj.id} />
        ))}
      </StyledContainer>
    </>
  );
};
