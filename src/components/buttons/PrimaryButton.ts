import styled from 'styled-components';
import { Button } from './Button';
import { blue, dark_blue, blue_shadow, disabled } from 'styles/colors';

export const PrimaryButton = styled(Button)`
  background-color: ${blue};
  box-shadow: 0 1rem 2rem 0 ${blue_shadow};

  :hover {
    box-shadow: none;
  }
  :active {
    background-color: ${dark_blue};
  }
  :disabled {
    background-color: ${disabled};
  }
`;
