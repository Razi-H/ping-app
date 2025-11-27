import { ReactElement, useContext } from "react";
import { Sheet } from 'react-modal-sheet';
import AppContext from "../AppContext";


export default function MySheet({children }: {children?: ReactElement | ReactElement[] }) {
    const {isOpen, setOpen} = useContext(AppContext);

    return (<Sheet
        isOpen={isOpen}
        tweenConfig={{ ease: 'easeOut', duration: 0.4 }}
        // disableDismiss={true}
        detent='content'
        initialSnap={1}
        // snapPoints={snapPoints} 
        onClose={() => setOpen(false)}
    >
        <Sheet.Container className='rounded-t-2xl!'>
            <Sheet.Header />
            <Sheet.Content>
                {children}
                {/* <AddUser />
                <WaitingList /> */}
            </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop className='pointer-events-auto!'
          onTap={() => setOpen(false)} 
        />
    </Sheet>);
}