import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'apis/history';
import { getQuizQuestions } from 'apis/fetch';
import { IntermissionCard } from './sections/IntermissionCard';
import { StatementCard } from './sections/StatementCard';
import { AnswerCard } from './elements/AnswerCard';
import { QuizFooter } from 'layouts/footer/QuizFooter';
import { useQuery, mobile, tablet, laptop } from 'styles/breakpoints';
import {
  Svg,
  Container,
  H2,
  FlexWrapper,
  PrimaryButton,
  RegularText,
  TextWrapper,
  AbsoluteBox,
  Image,
} from 'components';
import { blue, grey_white } from 'styles/colors';

interface DataTypes {
  type: string;
  key: string;
  label?: string;
  custom?: {
    sublabel?: string;
    stressor?: string;
    text?: string;
  };
  options?: [
    {
      label?: string;
      value?: string;
      custom?: {
        horizontal?: boolean;
      };
    }
  ];
}

const Quiz: React.FC<DataTypes> = () => {
  const { goBack, goToLoader } = useRouter();
  const { isMobile, isTablet, isLaptop } = useQuery();
  const [questions, setQuestions] = useState<DataTypes[] | []>([]);
  const [question, setQuestion] = useState<number>(1);

  useEffect(() => {
    (async () => {
      const result = await getQuizQuestions();
      setQuestions(result);
    })();
  }, []);

  const renderNextQuestion = async () => {
    if (question < 9) setQuestion(question + 1);
    if (question === 9) goToLoader();
  };

  const renderPreviousQuestion = async () => {
    if (question > 1) setQuestion(question - 1);
    if (question === 1) goBack();
  };

  return (
    <QuizPage>
      <AbsoluteBox zIndex={1} left={isTablet ? '-9rem' : '15rem'} top={isTablet ? '-1.5rem' : '6rem'} maxWidth='13rem'>
        <Image src='top_cloud' />
      </AbsoluteBox>
      <AbsoluteBox zIndex={1} bottom='0' right='0' maxWidth={isTablet ? '8rem' : '18rem'}>
        <Image src={isTablet ? 'bottom_cloud_small' : 'bottom_cloud'} />
      </AbsoluteBox>
      {questions &&
        questions.slice(question - 1, question).map((q: DataTypes) => {
          const { type, key, label, custom, options } = q;
          return (
            <Container key={key} zIndex={2}>
              <FlexWrapper justifyContent='space-between' padding='1rem' maxWidth='80rem'>
                <Svg src='go_back' onClick={renderPreviousQuestion} />
                <TextWrapper fontWeight={isLaptop ? 700 : 400}>
                  {question} of {questions.length}
                </TextWrapper>
              </FlexWrapper>
              <Container
                padding={isLaptop ? '1rem' : '1.4rem 1rem'}
                maxWidth='35rem'
                textAlign={isLaptop ? 'left' : 'center'}
              >
                {type === 'intermission' && <IntermissionCard renderNextQuestion={renderNextQuestion} />}
                {label && <H2>{label}</H2>}
                {custom && custom.sublabel && <RegularText>{custom.sublabel}</RegularText>}
                {options && (
                  <FlexWrapper gap='0.6rem' flexWrap='wrap'>
                    {options.map(({ label, value }) => (
                      <AnswerCard key={value} labelProp={label} type={type} renderNextQuestion={renderNextQuestion} />
                    ))}
                  </FlexWrapper>
                )}
                {type === 'statement' && (
                  <StatementCard statementKey={key} custom={custom} renderNextQuestion={renderNextQuestion} />
                )}
                {type === 'multiple' && (
                  <PrimaryButton colorProp={blue} minWidth='100%' margin='1rem 0' onClick={renderNextQuestion}>
                    Continue
                  </PrimaryButton>
                )}
              </Container>
            </Container>
          );
        })}
      {!isLaptop && <QuizFooter />}
    </QuizPage>
  );
};

export default Quiz;

const QuizPage = styled.div`
  position: relative;
  min-height: 100%;
  background-color: ${grey_white};
`;
