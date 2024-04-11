import { ButtonsContainer, StyleButton } from "./styled";

const Buttons = (props) => {
  if (props.tasks.length === 0) {
    return null;
  }

  return (
    <ButtonsContainer>
      <StyleButton onClick={props.toggleHideDone}>
        {props.hideDone ? "Show Completed" : "Hide Completed"}
      </StyleButton>
      <StyleButton
        onClick={props.setAllDone}
        disabled={props.tasks.every(({ done }) => done)}
      >
        {" "}
        Complete All
      </StyleButton>
    </ButtonsContainer>
  );
};

export default Buttons;
