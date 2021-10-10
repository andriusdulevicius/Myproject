import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'apis/history';
import { useDispatch } from 'react-redux';
import { setSelectedOption } from 'state/actions';
import { DataTypes } from '../sections/BillingSelection';
import { H2, SmallCard, FlexWrapper, H5, Svg, TextWrapper, SmallText, PrimaryButton } from 'components';
import { dark_text, green, purple, orange, blue } from 'styles/colors';

export const OptionCard: React.FC<DataTypes> = ({ product_key, original_price, final_price, daily_price }) => {
  const dispatch = useDispatch();
  const { goToSuccess } = useRouter();

  const handlePlanSelection = () => {
    dispatch(setSelectedOption({ product_key, final_price }));
    goToSuccess();
  };
  const discount = 100 - (final_price / original_price) * 100;

  return (
    <SmallCard margin='1rem auto' padding='1rem' textAlign='center' key={product_key}>
      <FlexWrapper flexWrap='no-wrap' gap='0.5rem'>
        {product_key.includes('1') ? (
          <>
            <H5>Monthly</H5>
            <BannerCard colorProp={purple}>
              <StyledSvg src='star' />
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
      <H2 margin='0.5rem 0 0'>
        ${daily_price} <TextWrapper fontWeight={400}>/ day</TextWrapper>
      </H2>
      <SmallText margin='0.5rem 0'>
        <FullPrice> {`$${original_price}`}</FullPrice>
        <DiscountedPrice>{`$${final_price} `}</DiscountedPrice>
        {product_key.includes('1') ? 'billed every month' : 'One-time payment'}
      </SmallText>
      <PrimaryButton maxWidth='100%' colorProp={blue} onClick={handlePlanSelection}>
        Start now <TextWrapper fontWeight={400}>(Save {discount.toFixed()}%)</TextWrapper>
      </PrimaryButton>
    </SmallCard>
  );
};

const BannerCard = styled.div<{ colorProp: string }>`
  padding: 0.2rem 0.5rem;
  background-color: transparent;
  border: 0.0625rem solid ${({ colorProp }) => colorProp};
  border-radius: 0.312rem;
`;

const FullPrice = styled.span`
  margin-right: 0.3rem;
  text-decoration: line-through;
  color: ${dark_text};
`;

const DiscountedPrice = styled.span`
  font-weight: 700;
  color: ${orange};
`;

const StyledTextWrapper = styled(TextWrapper)`
  margin-left: 0.3rem;
`;

const StyledSvg = styled(Svg)`
  width: 0.85rem;
  height: 0.85rem;
  path {
    fill: ${purple};
  }
`;
