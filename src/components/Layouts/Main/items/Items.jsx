import { useDispatch, useSelector } from "react-redux";
import { Button, Checkbox } from "rsuite";
import {
  removeTodo,
  toggleTodo,
  updateTodo,
} from "../../../../redux/todoSlicer";

const Items = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  function handleEdited(item) {
    let name = prompt("Name:", "");
    let desc = prompt("Description:");
    let { id, text, completed } = item;
    text = {
      name: name,
      desc: desc,
    };
    dispatch(updateTodo({ text, id, completed }));
  }

  return (
    <div>
      <table>
        <thead>
          <th>
            <Checkbox checked />
          </th>
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </thead>
        <tbody>
          {todos &&
            todos.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.completed ? (
                    <Checkbox
                      checked
                      disabled
                      onClick={() => dispatch(toggleTodo(item.id))}
                    />
                  ) : (
                    <Checkbox
                      disabled
                      onClick={() => dispatch(toggleTodo(item.id))}
                    />
                  )}
                </td>
                <td>{item.text.name}</td>
                <td>{item.text.desc}</td>
                <td>
                  <Button
                    size="sm"
                    appearance="primary"
                    style={{
                      backgroundColor: `${
                        item.completed ? "#289A4AFF" : "#CA3345FF"
                      }`,
                    }}
                    onClick={() => dispatch(toggleTodo(item.id))}
                  >
                    {item.completed ? "Completed" : "Pending"}
                  </Button>
                </td>
                <td>
                  <Button
                    size="sm"
                    appearance="primary"
                    color="blue"
                    style={{ marginRight: "10px" }}
                    onClick={() => handleEdited(item)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    appearance="primary"
                    style={{ backgroundColor: "#CA3345FF" }}
                    onClick={() => dispatch(removeTodo(item.id))}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
