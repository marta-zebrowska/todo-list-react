import { useState, useRef } from "react";
import { StyledForm, StyledInput, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    const trimmedNewTaskContent = newTaskContent.trim();
    
    if (!trimmedNewTaskContent) {
      return
    }
    
    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");
  }

  const focusInput = () => {
    inputRef.Ref.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledInput
        value={newTaskContent}
        autoFocus
        ref={inputRef}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button onClick={focusInput}>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;