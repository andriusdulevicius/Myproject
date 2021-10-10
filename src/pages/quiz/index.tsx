import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { getQuizQuestions } from 'apis/fetch';
import { useRouter } from 'apis/history';
import { useDispatch } from 'react-redux';
import { setQuizAnswers } from 'state/actions';
import { IntermissionCard } from './sections/IntermissionCard';
import { StatementCard } from './sections/StatementCard';
import { AnswerCard } from './elements/AnswerCard';
import { QuizFooter } from 'layouts/footer/QuizFooter';
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
export interface Answer {
  question: string;
  answer: string[];
}

const Quiz: React.FC<DataTypes> = () => {
  const dispatch = useDispatch();
  const { goBack, goToLoader } = useRouter();
  const [questions, setQuestions] = useState<DataTypes[] | []>([]);
  const [question, setQuestion] = useState<number>(0);
  const [answer, setAnswer] = useState<string[]>([]);
  const [allAnswers, setAllAnswers] = useState<Answer[]>([]);
  const { isMobile, isTablet, isLaptop } = useQuery();

  useEffect(() => {
    (async () => {
      const result = await getQuizQuestions();
      setQuestions(result);
    })();
  }, []);

  const renderNextQuestion = async (value: string = '') => {
    if (question < questions.length - 1) {
      setAllAnswers([
        ...allAnswers,
        { question: questions[question].key, answer: answer.length > 1 ? answer : [value] },
      ]);
      setQuestion(question + 1);
      setAnswer([]);
    }
    if (question === questions.length - 1) {
      dispatch(setQuizAnswers(allAnswers));
      goToLoader();
    }
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
      {questions?.[question] &&
        [questions[question]].map((q) => {
          const { type, key, label, custom, options } = q;
          return (
            <Container key={key} zIndex={2} minHeight={isLaptop ? '100vh' : 'calc(100vh - 5.5rem)'}>
              <FlexWrapper justifyContent='space-between' padding='1rem' maxWidth='80rem'>
                <Svg src='go_back' onClick={renderPreviousQuestion} />
                <TextWrapper fontWeight={isLaptop ? 700 : 400}>
                  {question + 1} of {questions.length}
                </TextWrapper>
              </FlexWrapper>
              <Container
                padding={isLaptop ? '1rem' : '1.4rem 1rem'}
                maxWidth='35rem'
                textAlign={isLaptop ? 'left' : 'center'}
              >
                {type === 'intermission' && <IntermissionCard renderNextQuestion={() => renderNextQuestion('None')} />}
                {label && <H2>{label}</H2>}
                {custom && custom.sublabel && <RegularText>{custom.sublabel}</RegularText>}
                {options && (
                  <FlexWrapper gap='0.6rem' flexWrap='wrap'>
                    {options.map(({ label, value }) => (
                      <AnswerCard
                        key={value}
                        labelProp={label}
                        type={type}
                        renderNextQuestion={renderNextQuestion}
                        answer={answer}
                        setAnswer={setAnswer}
                      />
                    ))}
                  </FlexWrapper>
                )}
                {type === 'statement' && (
                  <StatementCard statementKey={key} custom={custom} renderNextQuestion={renderNextQuestion} />
                )}
                {answer.length >= 1 && type === 'multiple' && (
                  <PrimaryButton
                    colorProp={blue}
                    minWidth='100%'
                    margin='1rem 0'
                    padding='0.5rem'
                    onClick={() => renderNextQuestion()}
                  >
                    Continue
                  </PrimaryButton>
                )}
                {type === 'multiple' && answer.length === 0 && (
                  <PrimaryButton colorProp={blue} minWidth='100%' margin='1rem 0' padding='0.5rem' disabled>
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
  background-color: ${grey_white};
`;
