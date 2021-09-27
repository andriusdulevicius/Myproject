import React, { Dispatch, SetStateAction } from 'react';
import { Container, FlexWrapper, Image, RegularTextMobile, PrimaryButton } from 'components';
import { blue, orange } from 'styles/colors';

interface IProps {
  statementKey: string;
  custom?: {
    sublabel?: string;
    stressor?: string;
    text?: string;
  };
  question: number;
  setQuestion: Dispatch<SetStateAction<number>>;
}

export const StatementCard: React.FC<IProps> = ({ statementKey, custom, question, setQuestion }) => {
  const handlePageRender = () => {
    setQuestion(question + 1);
  };

  return (
    <Container>
      <Image src={statementKey} />

      {custom && <RegularTextMobile>{custom.text}</RegularTextMobile>}
      <FlexWrapper flexWrap='no-wrap'>
        <PrimaryButton colorProp={orange} minWidth='50%' onClick={handlePageRender}>
          No
        </PrimaryButton>
        <PrimaryButton colorProp={blue} minWidth='50%' onClick={handlePageRender}>
          Yes
        </PrimaryButton>
      </FlexWrapper>
    </Container>
  );
};
