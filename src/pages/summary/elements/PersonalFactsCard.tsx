import React from 'react';
import { FlexWrapper, ContainerSmall, Svg, H4, TextWrapper, SmallText } from 'components';
import { useQuery } from 'styles/breakpoints';

interface Props {
  fact: { icon: string; title: string; subtitle: string; text: string; text2?: string; key: number };
}

export const PersonalFactsCard: React.FC<Props> = (props) => {
  const { icon, title, subtitle, text, text2, key } = props.fact;
  const { isMobile } = useQuery();
  return (
    <ContainerSmall key={key} padding='1rem' maxWidth={isMobile ? '100%' : '24%'}>
      <FlexWrapper flexWrap='nowrap' padding='0' gap='0.5rem' justifyContent='start'>
        <Svg src={icon} />
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
