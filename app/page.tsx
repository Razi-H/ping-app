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

export default function Home() {
    const splide = useRef<any>(null);
    const snapPoints = [0, 1];

    const [isOpen, setOpen] = useState(false);
    const [queues, setQueues] = useState<Queue[]>([]);

    useEffect(() => {
        if (splide.current) {
            //splide.current?.splide.go(2);
        }
        fetch("http://192.168.88.24:3002/Api/Queues?organzitationId=1")
            .then(result => result.json())
            .then(data => setQueues(data))
            .catch(error => alert(error));


    }, []);

    return (
        <AppContext value={{ isOpen: isOpen, setOpen: setOpen }}>
            <div className='max-w-lg mx-auto bg-gray-50'>
                <TopBar title='رستوران فرنازز' />
                <QueueSlider queues={queues} splide={splide} />
                <Menu onItemSelect={(id) => { alert(id); }}>
                    <MenuItem text='افزودن به لیست انتظار' subtitle='افزودن فرد جدید به لیست انتظار' iconType={IconType.AddPerson} onclick={() => { setOpen(true) }} />
                    <MenuItem text='فراخوانی خودکار' subtitle='فراخوانی نفر اول لیست انتظار' iconType={IconType.Dial} />
                    <MenuItem text='نمایش لیست انتظار' subtitle='نمایش افراد در لیست انتظار' iconType={IconType.Group} />
                    <MenuItem text='جستجو' subtitle='جستجو در لیست انتظار' iconType={IconType.Search} />
                    <MenuItem text='حذف لیست' subtitle='حذف لیست انتظار' iconType={IconType.Delete} />
                </Menu>
                <MySheet>
                    <AddUser />
                </MySheet>
                <BottomBar />
            </div>
        </AppContext>);
}