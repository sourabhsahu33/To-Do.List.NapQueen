import styled, { css } from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyleButton = styled.button`
  color: ${({ theme }) => theme.color.teal};
  background-color: transparent;
  border: none;
  margin: 0 0 0 20px;
  border-bottom: 1px solid transparent;
  transition: color 0.3s;

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(120%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
    cursor: not-allowed;
  }
`;
