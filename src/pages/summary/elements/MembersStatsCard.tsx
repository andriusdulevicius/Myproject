import React from 'react';
import styled from 'styled-components';
import { SmallCard, FlexWrapper, H1, CaptionText } from 'components';
import { green } from 'styles/colors';
import { mobile, useQuery } from 'styles/breakpoints';

interface Props {
  percent: string;
  text: string;
}

export const MembersStatsCard: React.FC<Props> = ({ percent, text }) => {
  const { isMobile } = useQuery();
  return (
    <SmallCard>
      <StyledFlexWrapper>
        <H1 color={green}>{percent}%</H1>
        <CaptionText margin={isMobile ? '0 0 1rem' : '0'}>{text}</CaptionText>
      </StyledFlexWrapper>
    </SmallCard>
  );
};

const StyledFlexWrapper = styled(FlexWrapper).attrs({
  flexWrap: 'nowrap',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1rem',
  padding: '0 1rem',
})`
  @media ${mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`;
