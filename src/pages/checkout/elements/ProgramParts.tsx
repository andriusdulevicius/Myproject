import React from 'react';
import { PLAN_PARTS } from '../sections/utils';
import { useQuery } from 'styles/breakpoints';
import { ContainerSmall, FlexWrapper, SmallBox, Svg, SmallText } from 'components';

export const ProgramParts: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <FlexWrapper
      flexDirection={isMobile ? 'column' : 'row'}
      flexWrap='nowarp'
      alignItems={isMobile ? 'stretch' : 'center'}
    >
      {PLAN_PARTS.map(({ id, iconSrc, text }) => (
        <ContainerSmall key={id} maxWidth='25rem' margin='0'>
          <FlexWrapper justifyContent='flex-start'>
            <SmallBox width='2.75rem'>
              <Svg src={iconSrc} />
            </SmallBox>
            <SmallText textAlign='left'>{text}</SmallText>
          </FlexWrapper>
        </ContainerSmall>
      ))}
    </FlexWrapper>
  );
};
