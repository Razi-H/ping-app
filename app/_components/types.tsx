import { MouseEventHandler } from "react"
import { IconType } from "./Icon";

export type MenuItemType = {
    id: number,
    text: string,
    subtitle: string,
    iconType: IconType,
    disabled?: boolean,
    iconColor?: string,
    onclick?: () => void,
    onItemSelect?: (id: number) => void
}

export type Queue = {
    organizationId? :number,
    queueId: number,
    name: string,
    colorId?: number,
    totalNumber: number,
    waitingNumber: number,
    prompt?: string,
    colorCSS?: string
};
