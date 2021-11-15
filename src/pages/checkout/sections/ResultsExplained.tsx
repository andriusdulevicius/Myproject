import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { PlanListEl } from '../elements/PlanListEl';
import { RESULTS_EXPLAINED } from './utils';
import { CaptionText, Container, ContainerSmall, FlexWrapper, H2, H4, Image, SmallBox } from 'components';
import { dark_violet, white } from 'styles/colors';

export const ResultsExplained: React.FC = () => {
  const { isMobile } = useQuery();
  const STATEMENTS = RESULTS_EXPLAINED.compatibility;

  const renderListInOneColumn = (array: Array<string>) =>
    array.map((li: string, index: number) => <PlanListEl key={index} li={li} />);

  return (
    <StyledSection>
      <Container>
        <H2 textAlign='center'>Here is your quiz results explained</H2>
        <H4 textAlign='center'>
          Qualities you are looking <StyledWrapper>FOR</StyledWrapper>
        </H4>
        <FlexWrapper margin='2rem 0'>
          <SmallBox margin='0' maxWidth={isMobile ? '7.3rem' : '17.6rem'}>
            <Image src='bright_mind' />
          </SmallBox>
          <FlexWrapper
            flexDirection='column'
            gap={isMobile ? '0' : '1rem'}
            alignItems='start'
            justifyContent='space-between'
            maxWidth='20rem'
          >
            {RESULTS_EXPLAINED.result_pros.map((p) => (
              <ContainerSmall key={p.id} margin='0' width='50%'>
                <H4 margin='0' fontWeight={700} color={dark_violet}>
                  {p.title}
                </H4>
                <CaptionText margin='0 0 0.4rem'>{p.subtitle}</CaptionText>
              </ContainerSmall>
            ))}
          </FlexWrapper>
        </FlexWrapper>
        <H4 textAlign={isMobile ? 'left' : 'center'}>
          Your <StyledWrapper>answers</StyledWrapper> compatibility with my qualities
        </H4>
        <FlexWrapper
          flexDirection={isMobile ? 'column' : 'row'}
          alignItems='start'
          gap={isMobile ? '0' : '1rem'}
          margin='1rem 0 2rem'
          maxWidth='80rem'
        >
          {isMobile && renderListInOneColumn(STATEMENTS)}
          {!isMobile && <ContainerSmall margin='0'>{renderListInOneColumn(STATEMENTS.slice(0, 2))}</ContainerSmall>}
          {!isMobile && <ContainerSmall margin='0'>{renderListInOneColumn(STATEMENTS.slice(2, 4))}</ContainerSmall>}
        </FlexWrapper>
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 0 1rem;
  background-color: ${white};
`;

const StyledWrapper = styled.span`
  color: ${dark_violet};
`;
