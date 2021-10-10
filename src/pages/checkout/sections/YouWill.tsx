import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery, mobile } from 'styles/breakpoints';
import { YOU_WILL_DATA } from './utils';
import { StyledH2, StyledContainer } from '../elements/Styles';
import {
  ContainerSmall,
  FlexWrapper,
  Image,
  SmallBox,
  SmallCard,
  Svg,
  SmallText,
  H3,
  H4,
  SecondaryButton,
  AbsoluteBox,
} from 'components';
import { blue, grey_white } from 'styles/colors';

export const YouWill: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { isMobile } = useQuery();
  return (
    <>
      {!isMobile && (
        <AbsoluteBox right='0' top='220rem'>
          <Image src='right_grey_cloud' />
        </AbsoluteBox>
      )}
      <StyledContainer>
        <StyledH2>You will:</StyledH2>
        <StyledContainerSmall>
          <FlexWrapper flexDirection={isMobile ? 'column' : 'row'}>
            <SmallBox minWidth='50%'>
              <Image src='flying_man' />
            </SmallBox>
            <FlexWrapper flexDirection='column' alignItems='start' gap='0.4rem'>
              {YOU_WILL_DATA.map((li) => (
                <ContainerSmall key={li.id} margin='0'>
                  <FlexWrapper alignItems='start' justifyContent='start' gap='0.4rem'>
                    <SmallBox minWidth='0.5rem'>
                      <Svg src='orange_bulletpoint' />
                    </SmallBox>
                    <SmallText fontSize='0.875rem' margin='0'>
                      {li.text}
                    </SmallText>
                  </FlexWrapper>
                </ContainerSmall>
              ))}
            </FlexWrapper>
          </FlexWrapper>
        </StyledContainerSmall>
        <H3> Still not sure what you'll get?</H3>
        <SecondaryButton
          colorProp={blue}
          maxWidth='24rem'
          color={blue}
          onClick={() => setModalOpen((prevState) => !prevState)}
        >
          Click here for more information
        </SecondaryButton>
        {modalOpen && (
          <ContainerSmall>
            <AbsoluteBox left='-0.5rem' right='-0.5rem' top='-9.5rem'>
              <SmallCard maxWidth='35rem' padding='1rem'>
                <FlexWrapper justifyContent='space-between' padding='0'>
                  <H4>For more information, take a note below:</H4>
                  <Svg src='close' onClick={() => setModalOpen((prevState) => !prevState)} />
                </FlexWrapper>

                <SmallText>If you cannot read properly, go back to summary page and read it again, please!</SmallText>
              </SmallCard>
            </AbsoluteBox>
          </ContainerSmall>
        )}
      </StyledContainer>
    </>
  );
};

const StyledContainerSmall = styled(ContainerSmall).attrs({
  margin: '1rem auto 3rem',
  padding: '2rem',
  maxWidth: '50rem',
})`
  border: 1px solid ${grey_white};
  border-radius: 1rem;

  @media ${mobile} {
    margin: 1rem 0;
    padding: 1rem;
  }
`;
