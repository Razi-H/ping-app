"use client"
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { useEffect, useRef, useState } from 'react';
import { Sheet } from 'react-modal-sheet';
import AddUser from './Home/AddUser';
import WaitingList from './Home/WaitingList';


export default function Home() {
    const splide = useRef<any>(null);
    const snapPoints = [0, 1];

    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (splide.current) {
            //splide.current?.splide.go(2);
        }
    }, []);

    return (<div className='max-w-lg mx-auto bg-gray-50'>
        <div className='flex h-12 pt-3 bg-white border-b-1 border-gray-200'>
            <div className='w-14 px-4'>

            </div>
            <div className="flex-1 text-center text-md">رستوران فرناز</div>
            <div className='w-14 PX-4'>
                <button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" className="inline-flex items-center px-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                    </svg>

                </button>
                <div id="dropdownDotsHorizontal" className="hidden z-[1000000] absolute right-6 top-12  bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                    </ul>
                    <div className="py-2">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                    </div>
                </div>
            </div>
        </div>

        <Splide options={{
            // type: 'loop',
            direction: "rtl",
            padding: '1.5rem',
            flickMaxPages: 1,
            perMove: 1,
            lazyLoad: false,
            autoWidth: false,
            fixedWidth: '100%'
            // waitForTransition: true,
        }} aria-label="My Favorite Images" hasTrack={false}
            onActive={(splide, slide) => { }} ref={splide}>
            <SplideTrack>
                <SplideSlide>
                    <div className="flex py-6 mx-2 ">
                        <div className="w-full aspect-[19/9] bg-gradient-to-r to-indigo-500 from-blue-500 rounded-3xl flex flex-row-reverse">
                            <div className="flex flex-col flex-1 justify-center justify-items-center">
                                <div className="text-white font-bold text-md h-8 text-right">ظرفیت دو نفره</div>
                                <div className="text-white text-sm text-right ">تعداد افراد در لیست انتظار : 10 نفر</div>
                            </div>
                            <div className="flex justify-center justify-items-center items-center px-6">
                                <div className="relative size-20">
                                    <svg className="size-full " viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">

                                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-300 dark:text-neutral-700" strokeWidth="4"></circle>
                                        /
                                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-white dark:text-blue-500" strokeWidth="4" strokeDasharray="100" strokeDashoffset="75" strokeLinecap="round"></circle>
                                    </svg>
                                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 translate-x-1/2">
                                        <span className="text-center text-md font-bold text-white dark:text-blue-500">35%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="flex py-6 mx-2">
                        <div className="w-full aspect-[19/9] bg-gradient-to-r from-rose-400 to-red-500 rounded-3xl flex flex-row-reverse">
                            <div className="flex flex-col flex-1 justify-center justify-items-center">
                                <div className="text-white font-bold text-md h-8 text-right">ظرفیت سه نفره</div>
                                <div className="text-white text-sm text-right ">تعداد افراد در لیست انتظار : 10 نفر</div>
                            </div>
                            <div className="flex justify-center justify-items-center items-center px-6">
                                <div className="relative size-20">
                                    <svg className="size-full " viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">

                                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-300 dark:text-neutral-700" strokeWidth="4"></circle>
                                        /
                                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-white dark:text-blue-500" strokeWidth="4" strokeDasharray="100" strokeDashoffset="75" strokeLinecap="round"></circle>
                                    </svg>
                                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 translate-x-1/2">
                                        <span className="text-center text-md font-bold text-white dark:text-blue-500">35%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="flex py-6 mx-2">
                        <div className="w-full aspect-[19/9] bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-3xl flex flex-row-reverse">
                            <div className="flex flex-col flex-1 justify-center justify-items-center">
                                <div className="text-white font-bold text-md h-8 text-right">ظرفیت چهار نفره</div>
                                <div className="text-white text-sm text-right ">تعداد افراد در لیست انتظار : 8 نفر</div>
                            </div>
                            <div className="flex justify-center justify-items-center items-center px-6">
                                <div className="relative size-20">
                                    <svg className="size-full " viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">

                                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-300 dark:text-neutral-700" strokeWidth="4"></circle>
                                        /
                                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-white dark:text-blue-500" strokeWidth="4" strokeDasharray="100" strokeDashoffset="20" strokeLinecap="round"></circle>
                                    </svg>
                                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 translate-x-1/2">
                                        <span className="text-center text-md font-bold text-white dark:text-blue-500">80%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="flex py-6 mx-2 ">
                        <div className="relative w-full aspect-[19/9] border-2 border-dashed border-gray-400 bg-gradient-to-r from-neutral-100 to-gray-300 rounded-3xl flex flex-col items-center justify-center">
                            {/* <div className='w-15 aspect-[1/1] border-2 border-dashed border-gray-400 rounded-2xl flex justify-center items-center'> */}
                            <svg className="w-16 h-16 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd" />
                            </svg>

                            {/* </div> */}
                            <div className='bottom-5 text-center font-bold text-gray-400 pt-3'>ساخت لیست جدید</div>
                        </div>

                    </div>
                </SplideSlide>
            </SplideTrack>

            <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev !hidden">Prev</button>
                <button className="splide__arrow splide__arrow--next !hidden">Next</button>
            </div>
            <ul className="splide__pagination absolute !bottom-8"></ul>
            {/* 
            <button className="splide__toggle" type="button">
                <span className="splide__toggle__play">Play</span>
                <span className="splide__toggle__pause">Pause</span>
            </button> */}

        </Splide>
        <div>
            <div className="flex flex-row-reverse py-3 hover:bg-gray-100"  onClick={() => { setOpen(true) }}>
                <div className="mx-3">
                    <div className='w-12 h-12 bg-blue-500 rounded-3xl flex items-center justify-center'>
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                        </svg>

                    </div>
                </div>
                <div className='flex flex-1 flex-col justify-between py-1'>
                    <div className='text-sm text-right'>افزودن به لیست انتظار</div>
                    <div className='text-xs text-gray-400 text-right'>افزودن فرد جدید به لیست انتظار</div>

                </div>
                <div className="w-12 flex items-center justify-center">
                    <svg className="w-7 h-7 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-row-reverse py-3 hover:bg-gray-100 ">
                <div className="mx-3">
                    <div className='w-12 h-12 bg-blue-500 rounded-3xl flex items-center justify-center'>
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6.97825 3.99999c-.3729 0-.74128.08169-1.07926.23933-.32394.1511-.61243.36846-.84696.63787-1.81892 1.82189-2.35302 3.87423-1.89899 5.93671.43916 1.9949 1.77747 3.8929 3.45642 5.572 1.67897 1.6791 3.57614 3.0176 5.57034 3.4591 2.0612.4563 4.1141-.0726 5.9396-1.8853.2705-.2348.4888-.524.6405-.8489.1581-.3387.2401-.7081.2401-1.0819 0-.3739-.082-.7432-.2401-1.0819-.1516-.3247-.3696-.6137-.6398-.8483l-1.2098-1.2106c-.5043-.5041-1.1879-.7872-1.9007-.7872-.7128 0-1.3968.2835-1.9011.7876l-.6178.6181c-.1512.1513-.3563.2363-.5701.2363-.2138 0-.4189-.085-.5701-.2363l-1.85336-1.8545c-.15117-.1513-.23609-.3565-.23609-.5704 0-.214.08493-.4192.23613-.5705l.61812-.61851c.5037-.50461.7867-1.18868.7867-1.90191s-.2833-1.39767-.7871-1.90228L8.90499 4.8778c-.23462-.26969-.5233-.48727-.84749-.63848-.33798-.15764-.70636-.23933-1.07925-.23933Z" />
                            <path fillRule="evenodd" d="M14.9925 3.99996c0-.55228.4477-.99999 1-.99999l3.03.00002c.5523 0 1 .44772 1 1v2.98135c0 .55228-.4478 1-1 1-.5523 0-1-.44772-1-1v-.58113l-3.3184 3.29112c-.3921.38887-1.0253.38627-1.4142-.00583-.3889-.39213-.3863-1.02529.0059-1.4142l3.2983-3.27133h-.6016c-.5523 0-1-.44772-1-1.00001Z" clipRule="evenodd" />
                        </svg>



                    </div>
                </div>
                <div className='flex flex-1 flex-col justify-between py-1'>
                    <div className='text-sm text-right'>فراخوانی خودکار</div>
                    <div className='text-xs text-gray-400 text-right'>فراخوانی نفر اول لیست انتظار</div>

                </div>
                <div className="w-12 flex items-center justify-center">
                    <svg className="w-7 h-7 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-row-reverse py-3 hover:bg-gray-100 ">
                <div className="mx-3">
                    <div className='w-12 h-12 bg-blue-500 rounded-3xl flex items-center justify-center'>
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clipRule="evenodd" />
                        </svg>


                    </div>
                </div>
                <div className='flex flex-1 flex-col justify-between py-1'>
                    <div className='text-sm text-right'>نمایش لیست انتظار</div>
                    <div className='text-xs text-gray-400 text-right'>نمایش افراد در لیست انتظار</div>

                </div>
                <div className="w-12 flex items-center justify-center">
                    <svg className="w-7 h-7 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-row-reverse py-3 hover:bg-gray-100">
                <div className="mx-3">
                    <div className='w-12 h-12 bg-blue-500 rounded-3xl flex items-center justify-center'>
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                </div>
                <div className='flex flex-1 flex-col justify-between py-1'>
                    <div className='text-sm text-right'>جستجو</div>
                    <div className='text-xs text-gray-400 text-right'>جستجو در لیست انتظار</div>

                </div>
                <div className="w-12 flex items-center justify-center">
                    <svg className="w-7 h-7 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-row-reverse py-3 hover:bg-gray-100 active:bg-gray-100 ">
                <div className="mx-3">
                    <div className='w-12 h-12 bg-red-700 rounded-3xl flex items-center justify-center'>
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                        </svg>

                    </div>
                </div>
                <div className='flex flex-1 flex-col justify-between py-1'>
                    <div className='text-sm text-right'>حذف لیست</div>
                    <div className='text-xs text-gray-400 text-right'>حذف لیست انتظار</div>

                </div>
                <div className="w-12 flex items-center justify-center">
                    <svg className="w-7 h-7 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                    </svg>
                </div>
            </div>
        </div>
        <Sheet isOpen={isOpen}
        tweenConfig={{ ease: 'easeOut', duration: 0.4 }}
        // disableDismiss={true}
        detent='content'
         initialSnap={1} snapPoints={snapPoints} onClose={() => setOpen(false)}>
            <Sheet.Container className='!rounded-t-2xl'>
                <Sheet.Header />
                <Sheet.Content>
                    <AddUser />
                    <WaitingList />
                </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop className='!pointer-events-auto' onTap={() => setOpen(false)} />
        </Sheet>
        <div className="fixed bottom-0 left-0 z-50 w-full h-20 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Profile</span>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
                        <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Wallet</span>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2" />
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Settings</span>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="w-5 h-5 mb-2 text-blue-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    <span className="text-sm text-blue-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">لیست ها</span>
                </button>
            </div>
        </div>
    </div>);
}