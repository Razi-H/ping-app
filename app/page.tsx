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
import toast, { Toaster, toast as toastEvent, useToaster } from 'react-hot-toast';
import PingTag from './Home/PingTag';

export default function Home() {
    const splide = useRef<any>(null);
    const snapPoints = [0, 1];

    const [isOpen, setOpen] = useState(false);
    const [queues, setQueues] = useState<Queue[]>([]);
    const [showLoading, setShowLoading] = useState<boolean>(true);

    const [selectedMenuId, setSelectedMenuId] = useState<number>(0);
    const [selectedQueueId, setSelectedQueueId] = useState<number>(0);

    const [isPing, setIsPing] = useState<boolean>(false);

    const ping = (queueUserId: number, cancel: boolean = false) => {
        setOpen(false);
        setIsPing(true);
        fetch(`http://192.168.88.24:3002/Api/Ping?queueUserId=${queueUserId}&cancel=${cancel ? 1 : 0}`)
            .then(result => result.json())
            .then(data => {
                setTimeout(() => {
                    toast(data.message, {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    }); setIsPing(false); getQueues();
                }, 500)
            });
    }

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
        <AppContext value={{ isOpen: isOpen, setOpen: setOpen, reload: getQueues, ping: ping }}>
            <div><Toaster /></div>
            {/* <div className='fixed inset-0 bg-black/10 backdrop-blur-xs transition-all duration-300 z-[999]'></div> */}
            <div className='max-w-lg mx-auto bg-gray-50 relative flex flex-col h-full'>
                <TopBar title='رستوران فرناز' />
                <div className='flex-none'>
                    <QueueSlider showLoading={showLoading} queues={queues} setSelectedQueueId={setSelectedQueueId} splide={splide} />
                </div>
                <div className='grow overflow-auto bg-gray-50'>
                    <Menu onItemSelect={(id) => { setSelectedMenuId(id); setOpen(true) }}>
                        <MenuItem id={1} text='افزودن به لیست انتظار' subtitle='افزودن فرد جدید به لیست انتظار' iconType={IconType.AddPerson} />
                        <MenuItem id={4} text='لیست انتظار' subtitle='نمایش افراد در لیست انتظار' iconType={IconType.Group} />
                        <MenuItem id={2} text='فراخوانی خودکار' subtitle='فراخوانی نفر اول لیست انتظار' iconType={IconType.Dial} /*onclick={getQueues}*/ />
                        <MenuItem id={3} text='فراخوانی با تگ' subtitle='فراخوانی از طریق تگ فراخوانی' iconType={IconType.Tag} />
                        {/* <MenuItem id={5} text='جستجو' subtitle='جستجو در لیست انتظار' iconType={IconType.Search} /> */}
                        {/* <MenuItem id={6} text='حذف لیست' subtitle='حذف لیست انتظار' iconType={IconType.Delete} /> */}
                    </Menu>
                </div>
                <div className='flex-none h-20'>

                </div>
                {isPing && <div className='absolute flex top-0 left-0 right-0 bottom-20 items-center justify-center'>
                    <div className='absolute bg-gray-400 opacity-40 top-0 left-0 right-0 bottom-0'></div>
                    <div className="flex flex-col items-center justify-center w-42 h-30 mx-10 bg-gray-200 rounded-2xl shadow-xl z-110">
                        <div role="status">
                            <svg aria-hidden="true" className="inline opacity-100 w-10 h-10 text-neutral-tertiary animate-spin fill-white dark:fill-quaternary text-gray-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        </div>
                        <div className='text-sm pt-5'>در حال فراخوانی</div>
                    </div>
                </div>}

                {/* <div className='absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className="w-full h-50 mx-10 bg-red-300 rounded-lg">
                        salam
                    </div>
                </div> */}
                <MySheet>
                    {selectedMenuId === 1 && <AddUser queueId={selectedQueueId} />}
                    {selectedMenuId === 2 && <QueueUser queueId={selectedQueueId} />}
                    {selectedMenuId === 4 && <WaitingList queueId={selectedQueueId} />}
                    {selectedMenuId === 3 && <PingTag queueId={selectedQueueId} />}
                </MySheet>
                <BottomBar />
            </div>
        </AppContext>);
}