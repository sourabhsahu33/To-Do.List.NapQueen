import { useSelector } from "react-redux";
// import { useState } from "react";
import { useTasks } from "../../useTasks";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { selectTasks } from "./tasksSlice";

function Tasks() {
  // const [hideDone, setHideDone] = useState(false);

  /* const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  }; */

  const { tasks } = useSelector(selectTasks);

  const {
    // tasks,
    removeTasks,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <Header title="To-Do List" />
      <Section
        title="Add New Task"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="To-Do List"
        body={
          <TaskList
            tasks={tasks}
            // hideDone={hideDone}
            removeTasks={removeTasks}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            // hideDone={hideDone}
            // toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
