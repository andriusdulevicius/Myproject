import React, { useState, useEffect } from 'react';
import { useRouter } from 'apis/history';
import styled from 'styled-components';
import {
  Container,
  ContainerSmall,
  H2,
  FlexWrapper,
  H3,
  CaptionText,
  SmallCard,
  SmallText,
  PrimaryButton,
} from 'components';
import { grey_white, violet } from 'styles/colors';
import { mobile, useQuery } from 'styles/breakpoints';
import useInput from 'hooks/useInput';

export interface DataTypes {
  product_key: string;
  final_price: number;
  daily_price: number;
  original_price: number;
}

export const ContactForm: React.FC = () => {
  const { isMobile } = useQuery();
  const { goToSuccess } = useRouter();

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value: string) => value.trim().length >= 3 && /^[a-zA-Z\s]*$/.test(value));
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameInputBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value: string) => value.trim().length >= 3 && /^[a-zA-Z\s]*$/.test(value));

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value: string) => {
    const emailValidationRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailValidationRegex.test(value);
  });

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    valueBlurHandler: messageInputBlurHandler,
    reset: resetMessageInput,
  } = useInput((value: string) => value.split(' ').length >= 7);

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid && enteredMessageIsValid
      ? setFormIsValid(true)
      : setFormIsValid(false);
  }, [enteredNameIsValid, enteredLastNameIsValid, enteredEmailIsValid, enteredMessageIsValid]);

  const formSubmissionhandler = (e: any) => {
    e.preventDefault();
    if (!formIsValid) return;
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetMessageInput();
    goToSuccess();
    console.log({ enteredName, enteredLastName, enteredEmail, enteredMessage });
  };

  return (
    <StyledSection>
      <Container margin='2rem auto' maxWidth='50rem'>
        {isMobile ? <H3>Contact me:</H3> : <H2 textAlign='center'>Please fill out the contact form</H2>}
        <SmallText textAlign='center'>For any queries you can always contact me by filling up contact form. </SmallText>
        <SmallCard margin='1rem auto' padding='1rem' textAlign='center' maxWidth='30rem'>
          <StyledForm onSubmit={formSubmissionhandler}>
            <FlexWrapper flexDirection='column' gap='2rem' alignItems='stretch'>
              <StyledFlexWrapper>
                <StyledLabel htmlFor='name'>First Name</StyledLabel>
                <StyledInput
                  onChange={nameChangeHandler}
                  onBlur={nameInputBlurHandler}
                  type='text'
                  id='name'
                  value={enteredName}
                />
                {nameInputHasError && (
                  <ErrorMessage>
                    Name must be at least 3 chars long and can contain only letters and spaces
                  </ErrorMessage>
                )}
              </StyledFlexWrapper>
              <StyledFlexWrapper>
                <StyledLabel htmlFor='lastname'>Last Name</StyledLabel>
                <StyledInput
                  onChange={lastNameChangeHandler}
                  onBlur={lastNameInputBlurHandler}
                  type='text'
                  id='lastname'
                  value={enteredLastName}
                />
                {lastNameInputHasError && (
                  <ErrorMessage>
                    Last name must be at least 3 chars long and can contain only letters and spaces
                  </ErrorMessage>
                )}
              </StyledFlexWrapper>

              <StyledFlexWrapper>
                <StyledLabel htmlFor='email'>E-mail address</StyledLabel>
                <StyledInput
                  onChange={emailChangeHandler}
                  onBlur={emailInputBlurHandler}
                  type='text'
                  id='email'
                  value={enteredEmail}
                />
                {emailInputHasError && <ErrorMessage>Enter a valid e-mail</ErrorMessage>}
              </StyledFlexWrapper>
              <StyledFlexWrapper>
                <StyledLabel htmlFor='message'>Enter your message:</StyledLabel>
                <StyledTextarea
                  onChange={messageChangeHandler}
                  onBlur={messageInputBlurHandler}
                  id='message'
                  value={enteredMessage}
                />
                {messageInputHasError && <ErrorMessage>Message must containt at least 7 words.. </ErrorMessage>}
              </StyledFlexWrapper>
            </FlexWrapper>

            <PrimaryButton disabled={!formIsValid}>Submit</PrimaryButton>
          </StyledForm>
        </SmallCard>
        <ContainerSmall margin='0 auto' maxWidth='70%'>
          <CaptionText textAlign='center'>
            By providing your details you agree to the <BlueText>T&Cs</BlueText> and
            <BlueText>Privacy Policy</BlueText>
          </CaptionText>
        </ContainerSmall>
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  margin: 3rem 0;
  padding: 1rem;
  background-color: ${grey_white};
`;

const BlueText = styled.span`
  color: ${violet};
`;

const StyledForm = styled.form`
  padding: 1rem 0;
`;

const ErrorMessage = styled(CaptionText)`
  position: absolute;
  top: 1.8rem;
  margin: 0;
  padding: 0;
  text-align: left;
  line-height: 0.8rem;
  font-size: 0.7rem;
  color: red;
`;

const StyledLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${violet};

  @media ${mobile} {
    font-size: 0.9rem;
  }
`;

const StyledInput = styled.input`
  padding: 0.2rem;
  width: 14rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  background-color: white !important;
  line-height: 1.2rem;

  input {
    background-color: white !important;
  }

  @media ${mobile} {
    width: 11rem;
  }
`;

const StyledTextarea = styled.textarea`
  margin: 0.5rem 0 2rem;
  padding: 0.3rem;
  width: 100%;
  border-radius: 0.5rem;
`;

const StyledFlexWrapper = styled(FlexWrapper).attrs({
  position: 'relative',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'start',
})``;
