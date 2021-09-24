import styled from 'styled-components';
import { Button } from './Button';
import { blue, dark_blue, disabled, secondary_hover } from 'styles/colors';

export const SecondaryButton = styled(Button)`
  border: 1px solid ${blue};

  :hover {
    background-color: ${secondary_hover};
  }
  :disabled {
    background-color: transparent;
    border: 1px solid ${disabled};
  }
`;
