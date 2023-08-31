import { useDispatch } from "react-redux";
import { Button, Form, Message } from "rsuite";
import { addTodo } from "../../../redux/todoSlicer";
import { useState } from "react";

const Forma = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");
  const handleAddTodo = () => {
    if (!input && !description) {
      alert("Input fields must not be empty ... Name and Description ");
      window.location.reload();
    } else if (!input) {
      alert("Input fields must not be empty ... → Name ←");
    } else if (!description) {
      alert("Input fields must not be empty ... → Description ←");
    } else {
      window.location.reload();
      dispatch(
        addTodo({
          name: input,
          desc: description,
        })
      );
    }
  };

  return (
    <div className="form__container">
      <div className="box">
        <p className="box__title">Todo Aplication</p>
        <div className="form__box">
          <Form layout="inline" onSubmit={handleAddTodo}>
            <Form.Group controlId="username-7">
              <Form.Control
                name="username"
                placeholder="Todo Title"
                required
                className="form__input"
                onChange={(e) => setInput(e.trim())}
                autoFocus
              />
              <Form.HelpText tooltip>Required</Form.HelpText>
            </Form.Group>

            <Form.Group controlId="password-7">
              <Form.Control
                required
                placeholder="Description"
                name="text"
                type="text"
                autoComplete="off"
                className="form__input"
                onChange={(e) => setDescription(e.trim())}
              />
              <Form.HelpText tooltip>Required</Form.HelpText>
            </Form.Group>

            <Button appearance="primary" color="blue" type="submit">
              Create Todo
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Forma;
