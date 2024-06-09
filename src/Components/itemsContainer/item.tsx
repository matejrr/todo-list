import { ChangeEvent, useState } from "react";
import binIcon from "../../assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg";
import penEdit from "../../assets/icons/edit_FILL0_wght400_GRAD0_opsz24.svg";
import { Todo } from "../../App";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>;

interface ItemProps {
  title: string;
  id: number;
  removeItem: (clickedId: number) => void;
  completed: boolean;
  items: Todo[];
  setItems: (items: Todo[]) => void;
  userId: number;
}

export function Item(props: ItemProps) {
  const [crossedItem, setCrossedItem] = useState(props.completed);
  const [isChecked, setIschecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleCheckBoxChange = () => {
    setIschecked(!isChecked);
  };

  const crossItem = () => {
    setCrossedItem(!crossedItem);
  };

  const textDecoration = {
    textDecoration: crossedItem ? "line-through" : "none",
  };

  const handleParagraphValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const editItems = () => {
    const changeParagraph: Todo = {
      title: inputValue,
      id: props.id,
      userId: props.userId,
      completed: props.completed,
    };

    const handleEditItems = props.items.map((item) => {
      if (item.id === props.id) {
        return changeParagraph;
      } else {
        return item;
      }
    });

    props.setItems(handleEditItems);
  };

  function editItemsOnEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      setIsEditing(!isEditing);
      return editItems();
    }
  }

  return (
    <div className="items">
      <div className="left-side">
        <input
          onChange={handleCheckBoxChange}
          className={isChecked ? "checked" : "unchecked"}
          type="checkbox"
          onClick={crossItem}
          checked={crossedItem}
        />
        {isEditing ? (
          <input
            defaultValue={props.title}
            onChange={handleParagraphValue}
            onKeyDown={editItemsOnEnter}
          />
        ) : (
          <p style={textDecoration}>{props.title}</p>
        )}
      </div>
      <div className="right-side">
        <button
          className="bin-button"
          onClick={() => props.removeItem(props.id)}
        >
          <img className="bin-button" src={binIcon} />
        </button>
        <button
          onClick={() => {
            if (isEditing) {
              editItems();
            }

            setIsEditing(!isEditing);
          }}
          className="edit-button"
        >
          <img className="edit-pen" src={penEdit} />
        </button>
      </div>
    </div>
  );
}
