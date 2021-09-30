import styled from 'styled-components';
import { Button } from './Button';
import { disabled } from 'styles/colors';

export const SecondaryButton = styled(Button)<{ colorProp?: string }>`
  border: ${({ colorProp }) => `0.125rem solid ${colorProp}`};

  :hover {
    background-color: ${({ colorProp }) => colorProp + '08'};
  }
  :active {
    background-color: ${({ colorProp }) => colorProp + '16'};
  }

  :disabled {
    background-color: transparent;
    border: 0.0625rem solid ${disabled};
  }
`;
