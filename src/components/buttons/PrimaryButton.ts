import styled from 'styled-components';
import { Button } from './Button';
import { blue, dark_blue, blue_shadow, disabled } from 'styles/colors';

export const PrimaryButton = styled(Button)<{ colorProp?: string }>`
  background-color: ${({ colorProp }) => colorProp || blue};
  box-shadow: ${({ colorProp }) => `0 1rem 2rem 0 ${colorProp + '30'}` || `0 1rem 2rem 0 ${blue + '30'}`};

  :hover {
    box-shadow: none;
  }
  :active {
    filter: brightness(90%);
  }
  :disabled {
    background-color: ${disabled};
  }
`;
