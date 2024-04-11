import styled from "styled-components";

export const StyleForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.color.gallery};
`;

export const Button = styled.button`
  color: white;
  background-color: ${({ theme }) => theme.color.teal};
  border: none;
  padding: 15px;
  transition: 0.5s linear;

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
    transform: scale(1.03);
  }

  &:active {
    filter: brightness(120%);
  }
`;
