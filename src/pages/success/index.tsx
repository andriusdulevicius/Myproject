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
import { violet, dark_text, green, grey_white } from 'styles/colors';

const INFO_DATA = {
  title: 'What is happening next?',
  text1: 'I will send my response to your given email address in next 3 working days',
  caption: '(If you did not receive my answer, please check your Spam folder)',
  text2: 'I hope you enjoyed going through my little website!',
  text3: 'Best wishes, Andrius.',
};

const Success: React.FC = () => {
  const { isMobile } = useQuery();
  const { title, text1, caption, text2, text3 } = INFO_DATA;

  const savedProduct: string | null = localStorage.getItem('product_key');
  const savedPrice: string | null = localStorage.getItem('final_price');

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
          <H2>You have successfully submited the form!</H2>
          {!isMobile && <StyledSvg src='check_circle' />}
        </SmallBox>
      </StyledWrapper>
      <StyledContainer>
        <ContainerSmall margin={isMobile ? '1rem auto' : '3rem auto'} maxWidth='37rem'>
          <H2 textAlign='center'>{title}</H2>
          <RegularText>{text1}</RegularText>
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
  margin: '3rem 0',
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
