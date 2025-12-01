import { useContext, useEffect, useState } from "react"
import AppContext from "../AppContext";

export default function WaitingList({ queueId }: { queueId: number }) {

    const { ping } = useContext(AppContext);

    const [waitingList, setWaitingList] = useState<any>([]);
    const [showHistory, setShowHistory] = useState<boolean>(false);
    const [expandedItem, setExpandedItem] = useState<number>(0);


    useEffect(() => {
        fetch(`http://192.168.88.24:3002/Api/QueueUsers?queueId=${queueId}`)
            .then(res => res.json())
            .then(data => setWaitingList(data));
    }, [])

    const getInterval = (i: number): string => {
        if (i < 60)
            return `${i} ثانیه پیش`

        if (i < 3600)
            return `${Math.floor(i / 60)} دقیقه پیش`

        if (i < 24 * 3600)
            return `${Math.floor(i / (60 * 60))} ساعت پیش`

        if (i < 24 * 3600 * 7)
            return `${Math.floor(i / (60 * 60 * 24))} روز پیش`

        return `${Math.floor(i / (60 * 60 * 24 * 7))} هفته پیش`
    }


    return (
        <div className='w-full flex-col pb-4 min-h-100 relative'>
            <div className="flex flex-row pb-3 px-2 justify-end fixed right-0 w-full bg-white border-b-1 border-gray-200">
                <div className="text-sm flex items-center pr-2">نمایش تاریخچه</div>
                <div className="flex items-center gap-x-3">
                    <label className="relative inline-block w-11 h-6 cursor-pointer">
                        <input type="checkbox" className="peer sr-only" onChange={(control) => setShowHistory(control.currentTarget.checked)} />
                        <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-600 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
                        <span className="absolute right-0 top-1/2 end-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:-translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
                    </label>
                    {/* <label className="text-sm text-gray-500 dark:text-neutral-400">Unchecked</label> */}
                </div>
            </div>
            <div className="overflow-auto pt-9">
                {waitingList.length === 0 && <div className="min-h-100 bg-gray-200 flex items-center justify-center text-sm flex-col">
                    <div role="status">
                        <svg aria-hidden="true" className="inline opacity-100 w-10 h-10 text-neutral-tertiary animate-spin fill-white dark:fill-quaternary text-gray-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    </div>
                    <div className="mt-4">در حال بارگذاری</div>
                </div>}
                {waitingList.filter((item: { queueUserStatusId: number; }) => showHistory || (!showHistory && item.queueUserStatusId <= 2)).map(({ gender, family, id, queueUserStatusId, name, pings, interval }: { gender: string; family: string; id: number; queueUserStatusId: number; name: string; pings: any; interval: number }, index: number) => {
                    return (<div key={id} className=' w-full flex flex-col bg-gray-50 even:bg-white'>
                        <div className=' flex flex-row-reverse py-3 text-sm  w-full' onClick={() => setExpandedItem(v => v === id ? 0 : id)}>
                            <div className='text-center px-4'>{index + 1}</div>
                            <div className='text-right grow-1'>{`${gender == "1" ? "آقای" : "خانم"} ${family} (${getInterval(interval)})`}</div>
                            {/* <div className='text-right'>09123840815</div> */}
                            {/* <div className='text-center direction-rtl flex-1 text-xs'></div> */}
                            <div className='pl-4 text-left'><span className={`badge-${queueUserStatusId}`}>{name}</span></div>
                        </div>
                        <div className={`w-full px-5 ${expandedItem === id ? 'max-h-[200px] overflow-auto' : 'max-h-0 overflow-hidden'} transition-[max-height] duration-700 ease-in-out`}>
                            {pings.map(({ pingStatusId, setupDate, sequanceNumber }: { pingStatusId: number; setupDate: string; sequanceNumber: number; }, index: number) => {
                                return (<div key={`${id}-${index}`} className="flex flex-col" >
                                    <div className="flex justify-between flex-row-reverse">
                                        <div>{setupDate}</div>
                                        <div>{pingStatusId}</div>
                                    </div>
                                </div>)
                            }
                            )}
                            {queueUserStatusId !== 2 && <div> <button onClick={() => ping?.(id)} className="w-full mb-6 mt-6 text-white bg-blue-500 hover:bg-gray-900 active:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-sm px-5 py-3 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" >{`فراخوانی ${queueUserStatusId > 2 ? 'مجدد' : ''}`}</button></div>}

                        </div>
                    </div>);
                })}
            </div>

            {/* <div className="px-4" ><button className="w-full mt-6 mx-auto text-white bg-blue-500 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-sm py-3 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">بازگشت</button></div> */}

        </div >
    )
}