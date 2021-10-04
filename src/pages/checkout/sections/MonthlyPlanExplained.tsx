import React from 'react';
import styled from 'styled-components';
import { PlanListEl } from '../elements/PlanListEl';
import { PLAN_DATA_EXPLAINED } from '../utils';
import { useQuery } from 'styles/breakpoints';
import { CaptionText, Container, ContainerSmall, FlexWrapper, H4, Image, Svg, SmallText, SmallBox } from 'components';
import { dark_green, white } from 'styles/colors';

export const MonthlyPlanExplained: React.FC = () => {
  const { isMobile } = useQuery();
  const plan_array = PLAN_DATA_EXPLAINED.reduction_plan;

  const renderListInOneColumn = (array: Array<string>) =>
    array.map((li: string, index: number) => <PlanListEl key={index} li={li} />);

  return (
    <StyledSection>
      <Container margin='0 auto'>
        <FlexWrapper maxWidth='80rem' margin='2rem 0'>
          <ContainerSmall margin='0'>
            <Image src={isMobile ? 'checkout_heart' : 'checkout_heart_laptop'} />
          </ContainerSmall>
          <FlexWrapper
            flexDirection='column'
            gap={isMobile ? '0' : '1rem'}
            alignItems='start'
            justifyContent='space-between'
            maxWidth='20rem'
          >
            {PLAN_DATA_EXPLAINED.plan_pros.map((p) => (
              <ContainerSmall key={p.id} margin='0' width='50%'>
                <H4 margin='0' fontWeight={700} color={dark_green}>
                  {p.title}
                </H4>
                <CaptionText margin='0 0 0.4rem'>{p.subtitle}</CaptionText>
              </ContainerSmall>
            ))}
          </FlexWrapper>
        </FlexWrapper>
        <H4 textAlign={isMobile ? 'left' : 'center'}>
          Your <StyledWrapper>personal</StyledWrapper> 3-month Anxiety and Stress Reduction Plan
        </H4>
        <FlexWrapper
          flexDirection={isMobile ? 'column' : 'row'}
          alignItems='start'
          gap={isMobile ? '0' : '1rem'}
          maxWidth='80rem'
        >
          {isMobile && renderListInOneColumn(plan_array)}
          {!isMobile && <ContainerSmall margin='0'>{renderListInOneColumn(plan_array.slice(0, 4))}</ContainerSmall>}
          {!isMobile && <ContainerSmall margin='0'>{renderListInOneColumn(plan_array.slice(4, 8))}</ContainerSmall>}
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
  color: ${dark_green};
`;
