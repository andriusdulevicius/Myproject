import React, { useState } from 'react';
import { useRouter } from 'apis/history';
import { RegularText, H3, Svg, TextBaseBold, SmallText, ContainerSmall, SmallCard, PrimaryButton } from 'components';
import { blue } from 'styles/colors';

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
        <ContainerSmall padding='3rem 0' textAlign='center'>
          <Svg src='seed_of_life' />
        </ContainerSmall>
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
