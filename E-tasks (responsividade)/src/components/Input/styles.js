import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  
  border-radius: 7px;
  
  > input {
    height: 56px;
    width: 100%;
    font-size: 16px;
    padding: 12px;
    
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 1.2rem;
      padding: 0.75rem;
  }
  
  > svg {
    margin-left: 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;