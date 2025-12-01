import { ChangeEvent, useContext, useRef, useState } from "react";
import QueueUser from "./QueueUser";
import AppContext from "../AppContext";

export default function PingTag({ queueId }: { queueId: number }) {

    const [queueUser, setQueueUser] = useState<any>({ id: 0 });
    const [showLoading, setShowLoading] = useState<boolean>(false);
    const timer = useRef<NodeJS.Timeout>(setTimeout(() => { }, 0));

    const { ping } = useContext(AppContext);

    const getQueueUser = (pingTag: string) => {
        fetch(`http://192.168.88.24:3002/Api/QueueUser?queueId=${queueId}&pingTag=${pingTag === "" ? "-1" : pingTag}`)
            .then(result => result.json())
            .then(data => { setQueueUser(data); setShowLoading(false); });
    }

    const searchTag = (control: ChangeEvent<HTMLInputElement>) => {
        setShowLoading(true);
        clearTimeout(timer.current);
        setQueueUser({ id: 0 })
        const v = control.currentTarget.value;
        timer.current = setTimeout(() => { getQueueUser(v); }, 1000);
    }

    return (<div className="">
        <div className="flex bg-white rounded-3xl px-5 flex-col">
            <div className="mb-4 w-full py-2">
                <div className="">
                    <label className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white text-right">تگ فراخوانی</label>
                    <input onChange={searchTag} type="number" pattern="[0-9]*" inputMode="numeric" className="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="تگ فراخوانی را وارد نمایید" />
                </div>
            </div>
            {showLoading && <div className="py-4 h-15 flex items-center justify-center">
                <svg aria-hidden="true" className="inline opacity-100 w-6 h-6 text-neutral-tertiary animate-spin fill-white dark:fill-quaternary text-gray-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
            </div>}
            {!showLoading && <div className="text-sm flex flex-col items-center justify-center bg-gray-200 rounded-2xl gap-2 py-4 h-15">
                <div className="">{queueUser.id === 0 ? "تگ فراخوانی یافت نشد" : `${queueUser.gender == "1" ? "آقای" : "خانم"} ${queueUser.family}`}</div>
                {/* <div>09123848015</div>
                    <div>1404-08-08</div> 
                    <div>12 دقیقه پیش</div>*/}
            </div>}
            <div>
                <button className={`w-full ${queueUser.id === 0 || queueUser.queueUserStatusId === 2 ? "invisible" : ""} flex items-center justify-center mb-6 mt-6 text-white bg-blue-500 hover:bg-gray-900 active:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-sm px-5 py-3 me-2`} onClick={() => ping?.(queueUser.id)}>
                    فراخوانی {queueUser.queueUserStatusId > 2 ? "مجدد" : ""}
                </button>
            </div>
            {/* <QueueUser queueId={queueId} /> */}
        </div>
    </div>)
}