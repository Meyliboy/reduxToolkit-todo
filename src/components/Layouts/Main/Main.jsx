import { Button, ButtonGroup } from "rsuite";
import Items from "./items/Items";
import { useDispatch, useSelector } from "react-redux";
import { removeAllTodo } from "../../../redux/todoSlicer";

const Main = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="btns">
        <ButtonGroup>
          {todos.length > 0 ? (
            <Button
              appearance="primary"
              style={{ backgroundColor: "#CA3345FF" }}
              onClick={() => dispatch(removeAllTodo([]))}
            >
              Clear Todos
            </Button>
          ) : (
            <Button
              disabled
              appearance="primary"
              style={{ backgroundColor: "#CA3345FF" }}
            >
              Clear Todos
            </Button>
          )}
          <Button
            disabled
            appearance="primary"
            style={{ backgroundColor: "#289A4AFF" }}
          >
            Mark As Completed
          </Button>
        </ButtonGroup>
      </div>
      <Items />
    </div>
  );
};

export default Main;
