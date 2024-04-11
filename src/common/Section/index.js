import { StyleSection, Header, Title, Container } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyleSection>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    <Container>{body}</Container>
  </StyleSection>
);

export default Section;
