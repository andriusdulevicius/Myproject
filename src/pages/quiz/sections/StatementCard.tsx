import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { Container, FlexWrapper, Image, RegularText, PrimaryButton, SmallBox } from 'components';
import { violet, orange } from 'styles/colors';
interface Props {
  statementKey: string;
  custom?: {
    sublabel?: string;
    stressor?: string;
    text?: string;
  };
  renderNextQuestion: (value: string) => void;
}

export const StatementCard: React.FC<Props> = ({ statementKey, custom, renderNextQuestion }) => {
  const { isLaptop } = useQuery();
  return (
    <Container maxWidth={isLaptop ? '22rem' : '36rem'}>
      <SmallBox minHeight='22rem'>
        <Image src={statementKey} />
      </SmallBox>
      <StyledRegularText>{custom && custom.text}</StyledRegularText>
      <FlexWrapper>
        <PrimaryButton colorProp={orange} minWidth='50%' padding='0.5rem' onClick={() => renderNextQuestion('No')}>
          No
        </PrimaryButton>
        <PrimaryButton colorProp={violet} minWidth='50%' padding='0.5rem' onClick={() => renderNextQuestion('Yes')}>
          Yes
        </PrimaryButton>
      </FlexWrapper>
    </Container>
  );
};

const StyledRegularText = styled(RegularText).attrs({ textAlign: 'center' })`
  min-height: 5.5rem;
`;
