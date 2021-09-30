import React from 'react';
import styled from 'styled-components';
import { SmallCard, FlexWrapper, H1, CaptionText } from 'components';
import { green } from 'styles/colors';
import { mobile } from 'styles/breakpoints';

interface Props {
  percent: string;
  text: string;
}

export const MembersStatsCard: React.FC<Props> = ({ percent, text }) => {
  return (
    <FlexWrapper flexWrap='nowrap'>
      <SmallCard>
        <StyledFlexWrapper>
          <H1 color={green}>{percent}%</H1>
          <CaptionText margin='0 0 1rem'>{text}</CaptionText>
        </StyledFlexWrapper>
      </SmallCard>
    </FlexWrapper>
  );
};

const StyledFlexWrapper = styled(FlexWrapper).attrs({ flexWrap: 'nowrap', gap: '1rem', padding: '0 1rem' })`
  flex-direction: row;

  @media ${mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`;
