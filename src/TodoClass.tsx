import React, { ChangeEvent, Component, Key, KeyboardEvent } from "react";

type TodoClassProps = {
  name: string;
};

type TodoClassState = {
  task: string;
  todo: string[];
  goItems: string[];
};

class TodoClass extends Component<TodoClassProps, TodoClassState> {
  constructor(props: TodoClassProps) {
    super(props);
    this.state = {
      task: "",
      todo: [],
      goItems: [],
    };
    this.handleAddToDo = this.handleAddToDo.bind(this);
    this.handleSaveTodo = this.handleSaveTodo.bind(this);
    this.perDelete = this.perDelete.bind(this);
    this.hanndleKeyPress = this.hanndleKeyPress.bind(this);
  }

  handleAddToDo(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ task: event.target.value });
  }
  handleSaveTodo(): void {
    if (this.state.task.trim() !== "") {
      this.setState({ todo: [this.state.task, ...this.state.todo], task: "" });
    } else {
      alert("Please add something");
    }
  }
  handleGetDown(id: number): void {
    const deleted = this.state.todo.filter((element, key) => {
      return key !== id;
    });
    this.setState({ todo: [...deleted] });
    const deleted1 = this.state.todo.filter((element, key) => {
      return key === id;
    });
    this.setState({ goItems: [...deleted1, ...this.state.goItems] });
  }
  perDelete(id: number): void {
    const perDel = this.state.goItems.filter((element, key) => {
      return key !== id;
    });
    this.setState({ goItems: [...perDel] });
  }
  hanndleKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      this.handleSaveTodo();
    }
  }

  render(): React.ReactNode {
    return (
      <div className="w-full">
        {this.state.todo.map((item, id) => {
          return (
            <div key={id} className="flex gap-4 m-1 tracking-widest ">
              {item}

              <button
                className="bg-blue-500 px-8 rounded-md "
                onClick={() => this.handleGetDown(id)}
              >
                Completed
              </button>
            </div>
          );
        })}

        <div className="w-full flex mx-2 items-center gap-1">
          <input
            className="outline-none font-mono placeholder-yellow-200 focus:placeholder-yellow-400 border-4 border-gray-400 rounded-md w-full px-2 focus:border-blue-300 duration-1000 focus:bg-blue-200 focus:shadow-xl"
            placeholder="Add a todo..."
            onChange={this.handleAddToDo}
            onKeyUp={this.hanndleKeyPress}
            value={this.state.task}
          />
          <div>
            {" "}
            <button
              onClick={this.handleSaveTodo}
              className="px-8 rounded-md bg-green-500 hover:bg-green-600 duration-1000 transition-all font-bold "
            >
              Add
            </button>
          </div>
        </div>

        {this.state.goItems.map((item, id) => {
          return (
            <div key={id} className="flex gap-4 m-1 letter tracking-widest">
              {item}
              <button
                className="bg-red-500 px-8 rounded-md"
                onClick={() => {
                  this.perDelete(id);
                }}
              >
                {" "}
                delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
export default TodoClass;
// its a class based example
