import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'apis/history';
import { RegularText, H3, TextBaseBold, SmallText, SmallCard, PrimaryButton, FlexWrapper } from 'components';
import { blue, orange, dark_text } from 'styles/colors';

export const LoadingCard: React.FC = () => {
  const { goToSummary } = useRouter();
  const [dynamicNumber, setDynamicNumber] = useState<number>(0);

  setTimeout(frame, 500);
  function frame() {
    if (dynamicNumber < 99) setDynamicNumber((prevState: number) => prevState + 1);
    else {
      setDynamicNumber(100);
      return;
    }
  }

  return (
    <>
      <SmallCard padding='1rem' width='100%' maxWidth='35rem' textAlign='center'>
        <H3>{dynamicNumber === 100 ? 'Finished calculating!' : 'Calculating your results'}</H3>
        <RegularText>
          {dynamicNumber === 100
            ? "Press 'Continue' to see your results"
            : 'Here is breathing exercise while you wait.'}
        </RegularText>
        <StyledFlexWrapper>
          <StyledCircle></StyledCircle>
          <StyledCircle></StyledCircle>
          <StyledCircle></StyledCircle>
          <StyledCircle></StyledCircle>
          <StyledCircle></StyledCircle>
          <StyledCircle></StyledCircle>
        </StyledFlexWrapper>
        <StyledSmallText>{dynamicNumber < 50 ? 'Breath in...' : 'Breath out..'}</StyledSmallText>
        <TextBaseBold>{dynamicNumber}%</TextBaseBold>
        <SmallText>{dynamicNumber === 100 ? 'Completed' : 'Calculating...'}</SmallText>
      </SmallCard>
      {dynamicNumber > 99 && (
        <PrimaryButton onClick={goToSummary} colorProp={blue} margin='1rem auto' width='100%' maxWidth='35rem'>
          Continue
        </PrimaryButton>
      )}
    </>
  );
};

const StyledSmallText = styled(SmallText)`
  position: absolute;
  left: 7.5rem;
  right: 7.5rem;
  top: 13rem;
  color: ${dark_text + '80'};
`;
const StyledFlexWrapper = styled(FlexWrapper)`
  min-height: 14rem;
  width: 100%;
  animation: pulse 5s cubic-bezier(0.5, 0, 0.5, 1) infinite alternate;

  @keyframes pulse {
    0% {
      transform: scale(0.7) rotate(0.5turn);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  height: 8rem;
  position: absolute;
  width: 8rem;
  animation: circle 5s infinite alternate;

  :nth-child(1) {
    transform: rotate(-60deg) translate(4rem);
  }
  :nth-child(2) {
    transform: rotate(0deg) translate(4rem);
  }
  :nth-child(3) {
    transform: rotate(60deg) translate(4rem);
  }
  :nth-child(4) {
    transform: rotate(120deg) translate(4rem);
  }
  :nth-child(5) {
    transform: rotate(180deg) translate(4rem);
  }
  :nth-child(6) {
    transform: rotate(240deg) translate(4rem);
  }

  :nth-child(odd) {
    background: ${orange + '60'};
  }
  :nth-child(even) {
    background: ${orange + '80'};
  }
`;
