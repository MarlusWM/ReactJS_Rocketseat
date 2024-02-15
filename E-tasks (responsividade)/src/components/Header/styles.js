import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;
  padding: 16px 0;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};

  > h1 {
    font-size: 32px;
  }
`
export const Menu = styled.header`
  color: ${({ theme }) => theme.COLORS.BLUE_200};
  display:none;

  > svg {
    font-size: 1.75rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }
`
;
