import { useEffect, useState } from "react"

export default function WaitingList({ queueId }: { queueId: number }) {

    const [waitingList, setWaitingList] = useState<any>([]);

    useEffect(() => {
        fetch(`http://192.168.88.24:3002/Api/QueueUsers?queueId=${queueId}`)
            .then(res => res.json())
            .then(data => setWaitingList(data));
    }, [])


    return (
        <div className='w-full flex-col pb-10'>
            {waitingList.map(({ gender, family, id, queueUserStatusId, name }: { gender: string; family: string; id: number; queueUserStatusId: number; name: string }, index: number) => {
                return (<div key={id} className='even:bg-gray-50 w-full flex flex-row-reverse py-3 text-sm'>
                    <div className='text-center px-4'>{index + 1}</div>
                    <div className='text-right flex-1'>{`${gender == "1" ? "آقای" : "خانم"} ${family}`}</div>
                    {/* <div className='text-right'>09123840815</div> */}
                    <div className='text-left direction-rtl flex-1 text-xs'>2 دقیقه پیش</div>
                    <div className='pl-4 text-left flex-1'><span className={`badge-${queueUserStatusId}`}>{name}</span></div>
                </div>);
            })}
            
            {/* <div className="px-4" ><button className="w-full mt-6 mx-auto text-white bg-blue-500 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-sm py-3 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">بازگشت</button></div> */}

        </div>
    )
}