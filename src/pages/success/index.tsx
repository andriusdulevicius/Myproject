import React from 'react';
import styled from 'styled-components';
import { useQuery, mobile } from 'styles/breakpoints';
import { useSelector } from 'react-redux';
import { checkoutOptionSelector } from 'state/reducers';
import { TransparentNav } from 'layouts/navigations/TransparentNav';
import { Link } from 'gatsby';
import {
  Container,
  ContainerSmall,
  AbsoluteBox,
  FlexWrapper,
  TextWrapper,
  SmallBox,
  H2,
  H4,
  RegularText,
  SmallText,
  CaptionText,
  Image,
  Svg,
} from 'components';
import { blue, dark_text, green, grey_white } from 'styles/colors';

const HOW_TO_START_DATA = {
  title: 'How to start the Anxietless program?',
  text1: 'We have just sent out a letter to this email address:',
  email: 'johndoe@mail.com',
  caption: '(Please check your Spam folder, too)',
  text2: 'Start your Anxietless journey right away!',
  text3: 'P.S. If you ordered any additional services, check your email for a confirmation letter.',
};

const Success: React.FC = () => {
  const { isMobile } = useQuery();
  const selectedOptionData = useSelector(checkoutOptionSelector);
  const { title, text1, email, caption, text2, text3 } = HOW_TO_START_DATA;

  return (
    <>
      <StyledWrapper>
        <TransparentNav align='center' />
        <ContainerSmall>
          <AbsoluteBox zIndex={1}>
            <Image src='confetti' />
          </AbsoluteBox>
        </ContainerSmall>
        <SmallBox zIndex={5} padding={isMobile ? '4rem 1rem' : '7rem 1rem'} textAlign='center'>
          {isMobile && <StyledSvg src='check_circle' />}
          <H2>Thank you for your order</H2>
          {!isMobile && <StyledSvg src='check_circle' />}
        </SmallBox>
        <ContainerSmall padding={isMobile ? '1rem' : '5rem 1rem 3rem'}>
          <H4>Order summary</H4>
          <StyledFlexWrapper>
            <SmallText>
              {selectedOptionData.product_key.includes('monthly') ? 'Anxietless 28-day program' : 'One time payment'}
            </SmallText>
            <SmallText>${selectedOptionData.final_price}</SmallText>
          </StyledFlexWrapper>
          <StyledFlexWrapper>
            <SmallText>Anxietless guided meditations </SmallText>
            <SmallText>Not ordered</SmallText>
          </StyledFlexWrapper>
          <FlexWrapper justifyContent='flex-end' padding='1rem 0'>
            <TextWrapper color={dark_text + '80'}>
              <Link to='/home'>Learn more</Link>
            </TextWrapper>
            <TextWrapper color={blue}>
              <Link to='/checkout'>Upgrade</Link>
            </TextWrapper>
          </FlexWrapper>
          <StyledFlexWrapper justifyContent='space-between'>
            <TextWrapper>Total </TextWrapper>
            <TextWrapper>${selectedOptionData.final_price}</TextWrapper>
          </StyledFlexWrapper>
        </ContainerSmall>
      </StyledWrapper>
      <StyledContainer>
        <ContainerSmall margin={isMobile ? '1rem auto' : '2rem auto'} maxWidth='37rem'>
          <H2>{title}</H2>
          <RegularText>{text1}</RegularText>
          <RegularText margin={isMobile ? '1rem 0 0' : '1rem 0 0.6rem'}>
            <TextWrapper>{email}</TextWrapper>
          </RegularText>
          <CaptionText margin={isMobile ? '0' : '1rem 0 0.6rem'}>{caption}</CaptionText>
          <RegularText>{text2}</RegularText>
          <RegularText margin={isMobile ? '2rem 0' : '0 0 2rem'}>{text3}</RegularText>
        </ContainerSmall>
      </StyledContainer>
    </>
  );
};

export default Success;

const StyledWrapper = styled(Container).attrs({ maxWidth: '37rem' })`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledContainer = styled(Container).attrs({
  padding: '1rem',
  maxWidth: '100%',
  backgroundColor: grey_white,
})`
  p {
    text-align: center;
  }

  @media ${mobile} {
    p {
      text-align: left;
    }
  }
`;

const StyledFlexWrapper = styled(FlexWrapper).attrs({ justifyContent: 'space-between' })`
  border-bottom: 1px solid ${dark_text + '20'};
  :last-of-type {
    padding: 1rem 0;
    border-top: 1px solid ${dark_text + '20'};
    border-bottom: none;
  }
`;

const StyledSvg = styled(Svg)`
  width: 2.5rem;
  height: 2.5rem;
  path {
    fill: ${green};
  }
`;
