import React from 'react';
import { Container, FlexWrapper, Image, RegularText, PrimaryButton } from 'components';
import { blue, orange } from 'styles/colors';

interface IProps {
  statementKey: string;
  custom?: {
    sublabel?: string;
    stressor?: string;
    text?: string;
  };
  renderNextQuestion: () => void;
}

export const StatementCard: React.FC<IProps> = ({ statementKey, custom, renderNextQuestion }) => {
  return (
    <Container>
      <Image src={statementKey} />
      <RegularText textAlign='center'>{custom.text}</RegularText>
      <FlexWrapper>
        <PrimaryButton colorProp={orange} minWidth='50%' onClick={renderNextQuestion}>
          No
        </PrimaryButton>
        <PrimaryButton colorProp={blue} minWidth='50%' onClick={renderNextQuestion}>
          Yes
        </PrimaryButton>
      </FlexWrapper>
    </Container>
  );
};
