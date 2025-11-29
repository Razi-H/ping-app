import { MouseEventHandler } from "react"
import { IconType } from "./Icon";

export type MenuItemType = {
    id: number,
    text: string,
    subtitle: string,
    iconType: IconType
    onclick?: () => void,
    onItemSelect?: (id: number) => void
}

export type Queue = {
    queueId: number,
    name: string,
    colorId?: number,
    totalNumber: number,
    waitingNumber: number,
    colorCSS?: string
};
