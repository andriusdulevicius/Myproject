import React from 'react';
import styled from 'styled-components';
import { YOU_WILL_DATA } from '../utils';
import { useQuery, mobile } from 'styles/breakpoints';
import { StyledH2, StyledContainer } from '../elements/Styles';
import { ContainerSmall, FlexWrapper, Image, SmallBox, Svg, SmallText, H3, SecondaryButton } from 'components';
import { blue, grey_white } from 'styles/colors';

export const YouWill: React.FC = () => {
  const { isMobile } = useQuery();
  return (
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
      <SecondaryButton colorProp={blue} maxWidth='24rem' color={blue}>
        Click here for more information
      </SecondaryButton>
    </StyledContainer>
  );
};

const StyledContainerSmall = styled(ContainerSmall)`
  margin: 1rem auto 3rem;
  padding: 2rem;
  max-width: 50rem;
  border: 1px solid ${grey_white};
  border-radius: 1rem;

  @media ${mobile} {
    margin: 1rem 0;
    padding: 1rem;
  }
`;
