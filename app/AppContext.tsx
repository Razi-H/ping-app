import { createContext, Dispatch, SetStateAction } from "react";
import { Queue } from "./_components/types";

const AppContext = createContext<{
    isOpen: boolean, setOpen: Dispatch<SetStateAction<boolean>>
    , editMode?: boolean, setEditMode?: Dispatch<SetStateAction<boolean>>
    , queue? :Queue
    , organizationId : number
    , reload?: () => void, ping?: (queueUserId: number, cancel?: boolean) => void
}>({ isOpen: false, setOpen: () => { }, organizationId : 0 });

export default AppContext;