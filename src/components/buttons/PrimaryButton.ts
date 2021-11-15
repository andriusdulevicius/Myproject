import styled from 'styled-components';
import { Button } from './Button';
import { violet, disabled } from 'styles/colors';

export const PrimaryButton = styled(Button)<{ colorProp?: string }>`
  background-color: ${({ colorProp }) => colorProp || violet};
  box-shadow: ${({ colorProp }) => `0 1rem 2rem 0 ${colorProp + '30'}` || `0 1rem 2rem 0 ${violet + '30'}`};

  :hover {
    box-shadow: none;
  }
  :active {
    filter: brightness(90%);
  }
  :disabled {
    background-color: ${disabled};
    box-shadow: none;
    cursor: text;
  }
`;
