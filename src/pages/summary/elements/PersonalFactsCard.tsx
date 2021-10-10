import React from 'react';
import { FlexWrapper, ContainerSmall, Svg, H4, TextWrapper, SmallText, SmallBox } from 'components';
import { useQuery } from 'styles/breakpoints';

interface Props {
  fact: { id: number; imgSrc: string; title: string; subtitle: string; text: string; text2?: string };
}

export const PersonalFactsCard: React.FC<Props> = ({ fact }) => {
  const { imgSrc, title, subtitle, text, text2 } = fact;
  const { isMobile } = useQuery();
  return (
    <ContainerSmall padding={isMobile ? '0 1rem' : '1rem'} maxWidth={isMobile ? '100%' : '24%'}>
      <FlexWrapper padding='1rem 0' gap='0.5rem' justifyContent='start' alignItems='flex-start'>
        <SmallBox minWidth='2rem'>
          <Svg src={imgSrc} />
        </SmallBox>
        <H4 margin='0' textAlign='left'>
          {title}
        </H4>
      </FlexWrapper>
      <ContainerSmall>
        <TextWrapper>{subtitle}</TextWrapper>
        <SmallText margin='0.5rem 0'>{text}</SmallText>
        {text2 && <SmallText margin='0.5rem 0'>{text2}</SmallText>}
      </ContainerSmall>
    </ContainerSmall>
  );
};
