import React from 'react';
import { FlexWrapper, ContainerSmall, Image, H4, TextWrapper, SmallText, SmallBox } from 'components';
import { useQuery } from 'styles/breakpoints';

interface Props {
  fact: { id: number; imgSrc: string; title: string; subtitle: string; text: string; text2?: string };
}

export const PersonalFactsCard: React.FC<Props> = ({ fact }) => {
  const { imgSrc, title, subtitle, text, text2 } = fact;
  const { isMobile } = useQuery();
  return (
    <ContainerSmall padding={isMobile ? '0 1rem' : '1rem'} maxWidth={isMobile ? '100%' : '24%'}>
      <FlexWrapper padding='0' gap='0.5rem' justifyContent='start'>
        <SmallBox minWidth='2rem'>
          <Image src={imgSrc} />
        </SmallBox>
        <H4 textAlign='left'>{title}</H4>
      </FlexWrapper>
      <ContainerSmall>
        <TextWrapper>{subtitle}</TextWrapper>
        <SmallText margin='0.5rem 0'>{text}</SmallText>
        {text2 && <SmallText margin='0.5rem 0'>{text2}</SmallText>}
      </ContainerSmall>
    </ContainerSmall>
  );
};
