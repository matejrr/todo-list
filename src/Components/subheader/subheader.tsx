import { ChangeEvent, KeyboardEvent, useState } from "react";
import { Todo } from "../../App";

interface SubHeaderProps {
  items: Todo[];
  setItems: (items: Todo[]) => void;
}

export function SubHeader(props: SubHeaderProps) {
  const [inputValue, setInputvalue] = useState("");

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputvalue(e.target.value);
  };

  function addItem() {
    const newItem: Todo = {
      title: inputValue,
      id: props.items.length + 1,
      userId: 1,
      completed: false,
    };

    props.setItems([...props.items, newItem]);
    setInputvalue("");
  }

  function handleKeyPressValue(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      console.log("new item added");
      return addItem();
    }
  }

  return (
    <div className="todolist-subheader">
      <div className="input-component">
        <input
          className="input"
          value={inputValue}
          onChange={handleInputValue}
          type="text"
          placeholder="Add Item"
          onKeyDown={handleKeyPressValue}
        />
      </div>

      <button className="all"> All</button>
    </div>
  );
}
