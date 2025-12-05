import { useContext } from "react";
import toast from "react-hot-toast";
import AppContext from "../AppContext";

export default function QueueDelete({ queueId }: { queueId: number }) {

    const context = useContext(AppContext);

    const deleteQueue = (queueId : number) => {
        fetch("http://192.168.88.24:3002/Api/Queue", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({QueueId : queueId})
        }).then(res => res.json()).then(result => {
            setTimeout(() => {
                toast(result.message, {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
            }, 500); context.reload?.(); setTimeout(() => { context.setOpen(false); }, 500);
        });
    }

    return (<div className="flex flex-col items-center w-full">
        <div className="text-sm text-center">آیا از حذف لیست اطمینان دارید؟<br/> <br/> در صورت حذف لیست امکان بازیابی وجود ندارد</div>
        <div className="w-full px-6 pt-5"><button className="w-full mb-6 mt-6 text-white bg-red-700 hover:bg-gray-900 active:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-sm px-5 py-3 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => { deleteQueue(queueId) }}>حذف لیست</button></div>
    </div>);
}