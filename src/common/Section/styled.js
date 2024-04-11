import styled from "styled-components";

export const StyleSection = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 2px 2px 13px -1px rgba(69, 68, 76, 0.36);
  margin: 15px 0;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 15px;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  padding: 20px;
  border-bottom: 1px solid #eee;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
`;

export const Container = styled.div`
  padding: 20px;
`;
