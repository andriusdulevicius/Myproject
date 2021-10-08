import React from 'react';
import styled from 'styled-components';
import { PERSONAL_SUMMARY } from '../utils';
import { useQuery } from 'styles/breakpoints';
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
        <FlexWrapper
          flexDirection={isTablet ? 'column' : 'row'}
          justifyContent='center'
          alignItems='stretch'
          gap='1rem'
          maxWidth='80rem'
        >
          {stats.map(({ icon, title, subtitle }, index: number) => (
            <StatsCard icon={icon} title={title} subtitle={subtitle} key={index} />
          ))}
        </FlexWrapper>
        <RegularText>{sublabel1}</RegularText>
        <RegularText>{sublabel2}</RegularText>
        <FlexWrapper flexDirection={isTablet ? 'column' : 'row'} alignItems='stretch' maxWidth='80rem'>
          {results.map((result, index: number) => (
            <ResultsCard key={index} resultObj={result} />
          ))}
        </FlexWrapper>
      </Container>
    </StyledSummary>
  );
};

const StyledSummary = styled.section`
  position: relative;
  z-index: 10;
`;
