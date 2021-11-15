import { useState } from 'react';

const useInput = (validateValue: (a: string) => boolean) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e: any) => {
    setEnteredValue(e.target.value);
  };
  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
