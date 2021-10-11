import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { QUESTIONS_ANSWERS } from './utils';
import { QACard } from '../elements/QACard';
import { StyledContainer, StyledH2 } from '../elements/Styles';
import { FlexWrapper, ContainerSmall, TextWrapper, SmallBox, Image, SmallText, AbsoluteBox } from 'components';
import { grey_white } from 'styles/colors';

interface Props {
  navPage?: any;
}

export const Faq: React.FC<Props> = ({ navPage }) => {
  const { isMobile } = useQuery();

  return (
    <>
      <StyledContainer>
        <StyledH2>Frequently Asked Questions</StyledH2>
        {QUESTIONS_ANSWERS.map((QAObj) => (
          <QACard QA={QAObj} key={QAObj.id} />
        ))}

        {!navPage && (
          <StyledContainerSmall>
            <FlexWrapper>
              <SmallBox>
                <StyledSmallText>
                  ''87% patients significantly reduces anxiety by fallowing simple-guided steps''
                </StyledSmallText>

                <TextWrapper>Christine Ellis</TextWrapper>
                <SmallText>Behavioural Psychologist</SmallText>
              </SmallBox>
              <SmallBox minWidth={!isMobile ? '6.875rem' : '5.125rem'}>
                <Image src='christine_ellis' />
              </SmallBox>
            </FlexWrapper>
          </StyledContainerSmall>
        )}
      </StyledContainer>
      {!isMobile && !navPage && (
        <AbsoluteBox right='0' top='324rem'>
          <Image src='right_grey_cloud' />
        </AbsoluteBox>
      )}
    </>
  );
};

const StyledContainerSmall = styled(ContainerSmall).attrs({
  margin: '3rem auto',
  padding: '1rem',
  maxWidth: '36.75rem',
})`
  border: 0.0625rem solid ${grey_white};
  border-radius: 1rem;
`;

const StyledSmallText = styled(SmallText)`
  font-style: italic;
`;
