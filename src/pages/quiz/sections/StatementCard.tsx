import React from 'react';
import { useQuery } from 'styles/breakpoints';
import { Container, FlexWrapper, Image, RegularTextMobile, RegularText, PrimaryButton } from 'components';
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
  const { isMobile } = useQuery();
  return (
    <Container>
      <Image src={statementKey} />

      {custom &&
        (isMobile ? (
          <RegularTextMobile>{custom.text}</RegularTextMobile>
        ) : (
          <RegularText textAlign='center'>{custom.text}</RegularText>
        ))}
      <FlexWrapper flexWrap='nowrap'>
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
