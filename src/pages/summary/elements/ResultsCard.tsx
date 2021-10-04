import React, { useState } from 'react';
import { AbsoluteBox, ContainerSmall, FlexWrapper, SmallCard, H4, H5, SmallText, Svg, Image } from 'components';
import { yellow, blue } from 'styles/colors';

interface Result {
  resultObj: { imgSrc: string; indication: boolean; result?: string; info?: string; answer?: string };
}

export const ResultsCard: React.FC<Result> = ({ resultObj }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { imgSrc, indication, result, info, answer } = resultObj;

  const handleModal = () => {
    setModalOpen((prevState) => !prevState);
  };
  return (
    <SmallCard margin='0'>
      <Image src={imgSrc} />
      <ContainerSmall position='relative' padding='0 1rem'>
        {indication && <SmallText color={yellow}>Your results indicate that</SmallText>}
        <H4>{result}</H4>
        {info && (
          <FlexWrapper onClick={handleModal} justifyContent='start' gap='0.4rem' padding='0' margin='0.5rem 0'>
            <Svg src='info' />
            <SmallText color={blue} margin='0'>
              {info}
            </SmallText>
          </FlexWrapper>
        )}
        {info && modalOpen && (
          <AbsoluteBox left='-0.5rem' right='-0.5rem' top='-12rem'>
            <SmallCard maxWidth='25rem' padding='1rem'>
              <FlexWrapper justifyContent='space-between' padding='0'>
                <H5>{info}</H5>
                <Svg src='close' onClick={handleModal} />
              </FlexWrapper>

              <SmallText>{answer}</SmallText>
            </SmallCard>
          </AbsoluteBox>
        )}
      </ContainerSmall>
    </SmallCard>
  );
};
