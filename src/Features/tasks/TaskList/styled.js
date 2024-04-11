import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration-line: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.color.white};
  width: 30px;
  height: 30px;
  padding: 0;
  transition: 1s;
  cursor: pointer;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background: ${({ theme }) => theme.color.forestGreen};

      &:hover {
        filter: brightness(110%);

      &:active {
        filter: brightness(120%);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background: ${({ theme }) => theme.color.red};

      &:hover {
        filter: brightness(110%);
      }

      &:active {
        filter: brightness(120%);
      }
    `}
`;
