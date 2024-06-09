import { ReactNode } from "react";

interface ItemsContainerBox {
  children: ReactNode;
}

export function ItemsContainer(props: ItemsContainerBox) {
  return <div className="items-container">{props.children}</div>;
}
