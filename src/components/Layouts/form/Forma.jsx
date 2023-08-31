import { useDispatch } from "react-redux";
import { Button, Form } from "rsuite";
import { addTodo } from "../../../redux/todoSlicer";
import { useState } from "react";

const Forma = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        name: input,
        desc: description,
      })
    );
    window.location.reload();
  };

  return (
    <div className="form__container">
      <div className="box">
        <p style={{ fontSize: "40px", margin: "15px" }}>Todo Aplication</p>
        <div className="form__box">
          <Form layout="inline" onSubmit={handleAddTodo}>
            <Form.Group controlId="username-7">
              <Form.Control
                name="username"
                placeholder="Todo Title"
                required
                className="form__input"
                onChange={(e) => setInput(e)}
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
                onChange={(e) => setDescription(e)}
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
