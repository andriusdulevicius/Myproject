import styled from 'styled-components';
import { white, dark_text } from 'styles/colors';
import { Container } from './Container';

interface Styles {
  minHeight?: string;
  minWidth?: string;
}

export const SmallBox = styled(Container)<Styles>`
  margin: ${({ margin }) => margin || '0'};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  min-width: ${({ minWidth }) => minWidth || ''};
  width: ${({ width }) => width || ''};
  min-height: ${({ minHeight }) => minHeight || 'auto'};
`;
