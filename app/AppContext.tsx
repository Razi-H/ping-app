import { createContext, Dispatch, SetStateAction } from "react";

const AppContext = createContext<{ isOpen: boolean, setOpen: Dispatch<SetStateAction<boolean>>, reload?: () => void, ping?: (queueUserId: number, cancel?: boolean) => void }>({ isOpen: false, setOpen: () => { } });

export default AppContext;