import React, { useState, useEffect } from 'react';
import { getPlansData } from 'apis/fetch';
import {
  AbsoluteBox,
  Container,
  ContainerSmall,
  H2,
  Image,
  SmallCard,
  FlexWrapper,
  H5,
  Svg,
  TextWrapper,
  H1,
  SmallText,
  PrimaryButton,
  H3,
  CaptionText,
} from 'components';
import styled from 'styled-components';
import { grey_white, dark_text, green, purple, orange, blue } from 'styles/colors';
import { useQuery } from 'styles/breakpoints';

export interface DataTypes {
  product_key: string;
  final_price: number;
  daily_price: number;
  original_price: number;
}

export const OptionSelection: React.FC = () => {
  const [plans, setPlans] = useState<DataTypes[] | []>([]);

  useEffect(() => {
    (async () => {
      const result = await getPlansData();
      setPlans(result);
    })();
  }, []);

  const { isMobile } = useQuery();
  return (
    <StyledSection>
      {!isMobile && (
        <AbsoluteBox left='0' bottom='0'>
          <Image src='left_side_cloud' />
        </AbsoluteBox>
      )}
      <Container margin='2rem auto' maxWidth='50rem'>
        {isMobile ? <H3>Chose your personal 3-month plan:</H3> : <H2>Select billint option</H2>}
        <FlexWrapper justifyContent={isMobile ? 'column' : 'row'}>
          {plans.map(({ product_key, final_price, daily_price, original_price }) => {
            const discount = 100 - (final_price / original_price) * 100;
            return (
              <SmallCard margin='1rem auto' padding='1rem' textAlign='center' key={product_key}>
                <FlexWrapper flexWrap='no-wrap' gap='0.5rem'>
                  {product_key.includes('1') ? (
                    <>
                      <H5>Monthly</H5>
                      <BannerCard colorProp={purple}>
                        <Svg src='purple_star' />
                        <StyledTextWrapper color={purple}>Most popular</StyledTextWrapper>
                      </BannerCard>
                    </>
                  ) : (
                    <>
                      <H5>One-time payment</H5>
                      <BannerCard colorProp={green}>
                        <TextWrapper color={green}>Best value</TextWrapper>
                      </BannerCard>
                    </>
                  )}
                </FlexWrapper>
                <H1 margin='0.5rem 0 0'>
                  ${daily_price} <TextWrapper fontWeight={400}>/ day</TextWrapper>
                </H1>
                <SmallText margin='1rem 0'>
                  <FullPrice> {`$${original_price}`}</FullPrice>
                  <DiscountedPrice>{`$${final_price} `}</DiscountedPrice>
                  {product_key.includes('1') ? 'billed every month' : 'One-time payment'}
                </SmallText>
                <PrimaryButton maxWidth='100%' colorProp={blue}>
                  Start now <TextWrapper fontWeight={400}>(Save {discount.toFixed()}%)</TextWrapper>
                </PrimaryButton>
              </SmallCard>
            );
          })}
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

const BannerCard = styled.div<{ colorProp: any }>`
  padding: 0.2rem 0.5rem;
  background-color: transparent;
  border: 0.0625rem solid ${({ colorProp }) => colorProp};
  border-radius: 0.312rem;
`;

const FullPrice = styled.span`
  text-decoration: line-through;
  color: ${dark_text};
  margin-right: 0.3rem;
`;

const DiscountedPrice = styled.span`
  color: ${orange};
  font-weight: 700;
`;

const StyledTextWrapper = styled(TextWrapper)`
  margin-left: 0.3rem;
`;

const BlueText = styled.span`
  color: ${blue};
`;
