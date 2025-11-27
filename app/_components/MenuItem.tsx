import { MouseEventHandler } from "react";
import { MenuItemType } from "./types";
import Icon from "./Icon";

export default function MenuItem({ text, subtitle, onclick, iconType, onItemSelect }: MenuItemType) {

    const handleClick = () => {
        onItemSelect?.(text);
        onclick?.();
    }

    return (<div className="flex flex-row-reverse py-3 hover:bg-gray-100" onClick={handleClick}>
        <div className="mx-3">
            <div className='w-12 h-12 bg-blue-500 rounded-3xl flex items-center justify-center'>
                <Icon type={iconType} />
            </div>
        </div>
        <div className='flex flex-1 flex-col justify-between py-1'>
            <div className='text-sm text-right'>{text}</div>
            <div className='text-xs text-gray-400 text-right'>{subtitle}</div>

        </div>
        <div className="w-12 flex items-center justify-center">
            <svg className="w-7 h-7 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
            </svg>
        </div>
    </div>);
}

// MenuItem.displayName = "MenuItem";