import React from 'react';
import styled from 'styled-components';
import { useQuery, tablet } from 'styles/breakpoints';
import { PERSONAL_SUMMARY } from './utils';
import { StatsCard } from '../elements/StatsCard';
import { ResultsCard } from '../elements/ResultsCard';
import { Container, FlexWrapper, H2, RegularText } from 'components';

export const PersonalSummary: React.FC = () => {
  const { isTablet } = useQuery();
  const { title, stats_label, stats, sublabel1, sublabel2, results } = PERSONAL_SUMMARY;

  return (
    <StyledSummary>
      <Container textAlign={isTablet ? 'left' : 'center'} margin='0 auto 2rem'>
        <H2>{title}</H2>
        <RegularText>{stats_label}</RegularText>
        <StyledFlexWrapper>
          {stats.map(({ icon, title, subtitle }, index: number) => (
            <StatsCard icon={icon} title={title} subtitle={subtitle} key={index} />
          ))}
        </StyledFlexWrapper>
        <RegularText>{sublabel1}</RegularText>
        <RegularText>{sublabel2}</RegularText>
        <StyledFlexWrapper>
          {results.map((result, index: number) => (
            <ResultsCard key={index} resultObj={result} />
          ))}
        </StyledFlexWrapper>
      </Container>
    </StyledSummary>
  );
};

const StyledSummary = styled.section`
  position: relative;
  z-index: 10;
  @media ${tablet} {
    text-align: center;
  }
`;

const StyledFlexWrapper = styled(FlexWrapper).attrs({ alignItems: 'stretch' })`
  @media ${tablet} {
    flex-direction: column;
    align-items: center;
  }
`;
