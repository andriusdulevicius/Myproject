import React from 'react';
import { useQuery } from 'styles/breakpoints';
import { Container, FlexWrapper, Image, RegularText, PrimaryButton, SmallBox } from 'components';
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
  const { isLaptop } = useQuery();
  return (
    <Container maxWidth={isLaptop ? '25rem' : '36rem'}>
      <SmallBox>
        <Image src={statementKey} />
      </SmallBox>
      <RegularText textAlign='center'>{custom && custom.text}</RegularText>
      <FlexWrapper>
        <PrimaryButton colorProp={orange} minWidth='50%' padding='0.5rem' onClick={renderNextQuestion}>
          No
        </PrimaryButton>
        <PrimaryButton colorProp={blue} minWidth='50%' padding='0.5rem' onClick={renderNextQuestion}>
          Yes
        </PrimaryButton>
      </FlexWrapper>
    </Container>
  );
};
