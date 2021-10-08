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
  const { isTablet } = useQuery();
  return (
    <Container maxWidth={isTablet ? '28rem' : '36rem'}>
      <SmallBox>
        <Image src={statementKey} />
      </SmallBox>
      <RegularText textAlign='center'>{custom && custom.text}</RegularText>
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
