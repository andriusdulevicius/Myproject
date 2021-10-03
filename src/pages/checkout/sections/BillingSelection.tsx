import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getPlansData } from 'apis/fetch';
import { OptionCard } from '../elements/OptionCard';
import { AbsoluteBox, Container, ContainerSmall, H2, Image, FlexWrapper, H3, CaptionText } from 'components';
import { grey_white, blue } from 'styles/colors';
import { useQuery } from 'styles/breakpoints';

export interface DataTypes {
  product_key: string;
  final_price: number;
  daily_price: number;
  original_price: number;
}

export const BillingSelection: React.FC = () => {
  const [plans, setPlans] = useState<DataTypes[] | []>([]);
  const { isMobile } = useQuery();

  useEffect(() => {
    (async () => {
      const result = await getPlansData();
      setPlans(result);
    })();
  }, []);

  return (
    <StyledSection>
      {!isMobile && (
        <AbsoluteBox left='0' bottom='0'>
          <Image src='left_side_cloud' />
        </AbsoluteBox>
      )}
      <Container margin='2rem auto' maxWidth='50rem'>
        {isMobile ? <H3>Chose your personal 3-month plan:</H3> : <H2>Select billing option</H2>}
        <FlexWrapper flexDirection={isMobile ? 'column' : 'row'}>
          {plans.map((plan) => (
            <OptionCard {...plan} />
          ))}
        </FlexWrapper>
        <ContainerSmall margin='0 auto' maxWidth='70%'>
          <CaptionText textAlign='center'>
            By choosing a payment method you agree to the <BlueText>T&Cs</BlueText> and{' '}
            <BlueText>Privacy Policy</BlueText>
          </CaptionText>
          <ContainerSmall maxWidth='16rem'>
            <Image src='safe_checkout' />
          </ContainerSmall>
        </ContainerSmall>
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  position: relative;
  padding: 1rem;
  background-color: ${grey_white};
`;

const BlueText = styled.span`
  color: ${blue};
`;
