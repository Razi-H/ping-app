import { createContext, Dispatch, SetStateAction } from "react";

const AppContext = createContext<{ isOpen: boolean, setOpen: Dispatch<SetStateAction<boolean>> }>({ isOpen: false, setOpen: () => {}});

export default AppContext;