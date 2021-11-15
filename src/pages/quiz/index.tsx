import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'styles/breakpoints';
import { useRouter } from 'apis/history';
import { useDispatch } from 'react-redux';
import { setQuizAnswers } from 'state/actions';
import { IntermissionCard } from './sections/IntermissionCard';
import { StatementCard } from './sections/StatementCard';
import { AnswerCard } from './sections/AnswerCard';
import { QuizFooter } from 'layouts/footer/QuizFooter';
import { Svg, Container, H2, FlexWrapper, PrimaryButton, RegularText, TextWrapper } from 'components';
import { violet, grey_white } from 'styles/colors';
import { QUIZ_DATA } from './sections/utils';

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

const Quiz: React.FC<DataTypes> = React.memo(() => {
  const dispatch = useDispatch();
  const { goBack, goToLoader } = useRouter();
  const [questions, setQuestions] = useState<DataTypes[] | []>([]);
  const [question, setQuestion] = useState<number>(0);
  const [fullAnswer, setFullAnswer] = useState<string[]>([]);
  const [allAnswers, setAllAnswers] = useState<Answer[]>([]);
  const { isLaptop } = useQuery();

  useEffect(() => {
    setQuestions(QUIZ_DATA);
  }, []);

  const renderNextQuestion = async (oneAnswer: string = '') => {
    if (question < questions.length - 1) {
      setAllAnswers([
        ...allAnswers,
        { question: questions[question].key, answer: fullAnswer.length >= 1 ? fullAnswer : [oneAnswer] },
      ]);
      setQuestion(question + 1);
      setFullAnswer([]);
    }
    if (question === questions.length - 1) {
      dispatch(setQuizAnswers(allAnswers));
      goToLoader();
    }
  };

  const renderPreviousQuestion = async () => {
    if (question > 0) setQuestion(question - 1);
    if (question === 0) goBack();
  };

  return (
    <QuizPage>
      {questions?.[question] &&
        [questions[question]].map((q) => {
          const { type, key, label, custom, options } = q;
          return (
            <Container key={key} zIndex={2} minHeight={isLaptop ? '100vh' : 'calc(100vh - 5.5rem)'}>
              <FlexWrapper justifyContent='space-between' padding='1rem' maxWidth='80rem'>
                <StyledSvg src='go_back' onClick={renderPreviousQuestion} />
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
                        answerLabel={label}
                        type={type}
                        renderNextQuestion={renderNextQuestion}
                        fullAnswer={fullAnswer}
                        setFullAnswer={setFullAnswer}
                      />
                    ))}
                  </FlexWrapper>
                )}
                {type === 'statement' && (
                  <StatementCard statementKey={key} custom={custom} renderNextQuestion={renderNextQuestion} />
                )}
                {fullAnswer.length >= 1 && type === 'multiple' && (
                  <PrimaryButton
                    colorProp={violet}
                    minWidth='100%'
                    margin='1rem 0'
                    padding='0.5rem'
                    onClick={() => renderNextQuestion()}
                  >
                    Continue
                  </PrimaryButton>
                )}
                {type === 'multiple' && fullAnswer.length === 0 && (
                  <PrimaryButton colorProp={violet} minWidth='100%' margin='1rem 0' padding='0.5rem' disabled>
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
});

export default Quiz;

const QuizPage = styled.div`
  position: relative;
  background-color: ${grey_white};
`;

const StyledSvg = styled(Svg)`
  cursor: pointer;
`;
