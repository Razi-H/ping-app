import { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext";

export default function QueueUser({ queueId }: { queueId: number }) {

    const [queueUser, setQueueUser] = useState<any>(null);

    const { ping } = useContext(AppContext);

    useEffect(() => {
        fetch(`http://192.168.88.24:3002/Api/QueueUser?queueId=${queueId}`)
            .then(result => result.json())
            .then(data => setQueueUser(data));
    }, [])

    const call = () => {
        fetch(`http://192.168.88.24:3002/Api/Ping?queueId=${queueId}`)
            .then(result => result.json())
            .then(data => alert(JSON.stringify(data)));
    }



    return (
        <div className="mx-5">
            {queueUser != null && queueUser.id !== 0 &&
                <div className="text-sm flex flex-col items-center justify-center bg-gray-200 rounded-2xl gap-2 py-4">
                    <div className="">{`${queueUser.gender == "1" ? "آقای" : "خانم"} ${queueUser.family}`}</div>
                    {/* <div>09123848015</div>
                    <div>1404-08-08</div> 
                    <div>12 دقیقه پیش</div>*/}
                </div>}
            <div><button className="w-full mb-6 mt-6 text-white bg-blue-500 hover:bg-gray-900 active:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-sm px-5 py-3 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => ping?.(queueUser.id)}>فراخوانی</button></div>
        </div >
    );
}