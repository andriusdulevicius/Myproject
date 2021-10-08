import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'apis/history';
import { RegularText, H3, TextBaseBold, SmallText, SmallCard, PrimaryButton, FlexWrapper } from 'components';
import { blue, orange, dark_text } from 'styles/colors';

export const LoadingCard: React.FC = () => {
  const { goToSummary } = useRouter();
  const [dynamicNumber, setDynamicNumber] = useState<number>(0);
  const [breathIn, setBreathIn] = useState<boolean>(true);

  useEffect(() => {
    if (dynamicNumber < 100) {
      setTimeout(() => setDynamicNumber((prevState: number) => prevState + 1), 50);
    }
  }, [dynamicNumber]);
  setTimeout(() => setBreathIn((prevState) => !prevState), 2500);

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
          {Array.from({ length: 6 }).map((_, index: number) => (
            <StyledCircle key={index} />
          ))}
        </StyledFlexWrapper>
        <StyledSmallText>{breathIn ? 'Breath in...' : 'Breath out..'}</StyledSmallText>
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
  margin: 0 auto;
  height: 13rem;
  width: 8rem;
  animation: pulse 4s cubic-bezier(0.5, 0, 0.5, 1) alternate infinite;

  @keyframes pulse {
    0% {
      transform: scale(0.7);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const StyledCircle = styled.div`
  position: absolute;
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  mix-blend-mode: screen;
  transform: translate(0, 0);
  animation: center 6s infinite;

  :nth-child(1) {
    animation: circle-1 4s ease alternate infinite;
  }
  :nth-child(2) {
    animation: circle-2 4s ease alternate infinite;
  }
  :nth-child(3) {
    animation: circle-3 4s ease alternate infinite;
  }
  :nth-child(4) {
    animation: circle-4 4s ease alternate infinite;
  }
  :nth-child(5) {
    animation: circle-5 4s ease alternate infinite;
  }
  :nth-child(6) {
    animation: circle-6 4s ease alternate infinite;
  }

  :nth-child(odd) {
    background: ${orange + '70'};
  }
  :nth-child(even) {
    background: ${orange + '80'};
  }

  @keyframes circle-1 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-35px, -50px);
    }
  }

  @keyframes circle-2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(35px, 50px);
    }
  }

  @keyframes circle-3 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-60px, 0);
    }
  }

  @keyframes circle-4 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(60px, 0);
    }
  }

  @keyframes circle-5 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-35px, 50px);
    }
  }

  @keyframes circle-6 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(35px, -50px);
    }
  }
`;
