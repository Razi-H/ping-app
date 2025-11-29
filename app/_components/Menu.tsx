import React, { Children, cloneElement, ReactElement, ReactNode } from "react";
import MenuItem from "./MenuItem";
import { MenuItemType } from "./types";

export default function Menu({ children, onItemSelect }: { children?: ReactElement<MenuItemType, typeof MenuItem> | ReactElement<MenuItemType, typeof MenuItem>[], onItemSelect?: (id: number) => void }) {
    const enhanedChildren = Children.map(children, (child) => {

        if (!React.isValidElement(child)) return null;

        return cloneElement(child, { onItemSelect: onItemSelect });
    }
    )

    return (<>{enhanedChildren}</>);
}