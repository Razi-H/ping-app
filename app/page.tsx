"use client"
import '@splidejs/react-splide/css';
import { useEffect, useRef, useState } from 'react';
import AddUser from './Home/AddUser';
import WaitingList from './Home/WaitingList';
import QueueSlider from './_components/QueueSlider';
import MenuItem from './_components/MenuItem';
import { Queue } from './_components/types';
import { IconType } from './_components/Icon';
import Menu from './_components/Menu';
import BottomBar from './_components/BottomBar';
import MySheet from './_components/MySheet';
import TopBar from './_components/TopBar';
import AppContext from './AppContext';
import QueueUser from './Home/QueueUser';

export default function Home() {
    const splide = useRef<any>(null);
    const snapPoints = [0, 1];

    const [isOpen, setOpen] = useState(false);
    const [queues, setQueues] = useState<Queue[]>([]);
    const [showLoading, setShowLoading] = useState<boolean>(true);

    const [selectedMenuId, setSelectedMenuId] = useState<number>(0);
    const [selectedQueueId, setSelectedQueueId] = useState<number>(0);

    const getQueues = () => {
        setShowLoading(true);
        fetch("http://192.168.88.24:3002/Api/Queues?organzitationId=1")
            .then(result => result.json())
            .then(data => { setQueues(data); setShowLoading(false); })
            .catch(error => alert(error));
    }

    useEffect(() => {
        if (splide.current) {
            //splide.current?.splide.go(2);
        }

        getQueues();

    }, []);

    return (
        <AppContext value={{ isOpen: isOpen, setOpen: setOpen, reload: getQueues }}>
            <div className='max-w-lg mx-auto bg-gray-50 relative flex flex-col h-full'>
                <TopBar title='رستوران فرنازز' />
                <div className='flex-none'>
                    <QueueSlider showLoading={showLoading} queues={queues} setSelectedQueueId={setSelectedQueueId} splide={splide} />
                </div>
                <div className='grow overflow-auto bg-gray-50'>
                    <Menu onItemSelect={(id) => { setSelectedMenuId(id); setOpen(true) }}>
                        <MenuItem id={1} text='افزودن به لیست انتظار' subtitle='افزودن فرد جدید به لیست انتظار' iconType={IconType.AddPerson} />
                        <MenuItem id={2} text='فراخوانی خودکار' subtitle='فراخوانی نفر اول لیست انتظار' iconType={IconType.Dial} onclick={getQueues} />
                        <MenuItem id={3} text='فراخوانی با تگ' subtitle='فراخوانی از طریق تگ فراخوانی' iconType={IconType.Tag} />
                        <MenuItem id={4} text='لیست انتظار' subtitle='نمایش افراد در لیست انتظار' iconType={IconType.Group} />
                        <MenuItem id={5} text='جستجو' subtitle='جستجو در لیست انتظار' iconType={IconType.Search} />
                        {/* <MenuItem id={6} text='حذف لیست' subtitle='حذف لیست انتظار' iconType={IconType.Delete} /> */}
                    </Menu>
                </div>
                <div className='flex-none h-20'>

                </div>
                {/* <div className='absolute flex top-0 left-0 right-0 bottom-20 items-center justify-center bg-gray-100'>
                    <div className="w-full h-50 mx-10 bg-white rounded-lg">
                        salam
                    </div>
                </div> */}

                {/* <div className='absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className="w-full h-50 mx-10 bg-red-300 rounded-lg">
                        salam
                    </div>
                </div> */}
                <MySheet>
                    {selectedMenuId === 1 && <AddUser queueId={selectedQueueId} />}
                    {selectedMenuId === 2 && <QueueUser />}
                    {selectedMenuId === 4 && <WaitingList queueId={selectedQueueId} />}
                </MySheet>
                <BottomBar />
            </div>
        </AppContext>);
}