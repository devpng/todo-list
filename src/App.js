import './styles/_global.scss';

function App() {
  return (
    <div className="app-wrapper">
      <div className="todo-form-wrapper">
        <div className="form-header">
          <h4>Todo List Title</h4>
          <p>Start writing and manage your schedule</p>
        </div>
        <div className="todo-list-wrapper">
          <div className="todo-add">
            <input type="text" placeholder="Enter a todo" className="todo-add_input" />
            <button className="todo-add_btn">Add Todo</button>
          </div>
          <ul className="todo-list">
            <li className="todo">
              <div className="todo_text">
                <input type="checkbox" className="todo_text-checkbox" />
                <p>asdasdas</p>
              </div>
              <div className="todo_time">
                <p>11:30 am</p>
              </div>
            </li>
            <li className="todo">
              <div className="todo_text">
                <input type="checkbox" className="todo_text-checkbox" />
                <p>lorem ipsum</p>
              </div>
              <div className="todo_time">
                <p>12:30 pm</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
