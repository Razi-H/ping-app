import { useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form"
import AppContext from "../AppContext";
import toast from "react-hot-toast";
import ColorSelector from "../_components/ColorSelector";

type Inputs = {
    name: string,
    prompt: string,
    colorId: number,
}

export enum QueueMode {
    Add, Edit
}

export default function QueueEdit({ queueId, queueMode }: { queueId: number, queueMode: QueueMode }) {
    const {
        register,
        handleSubmit,
        watch,
        setFocus,
        formState: { errors },
    } = useForm<Inputs>()

    const context = useContext(AppContext);

    const post = (data: object) => {
        fetch("http://192.168.88.24:3002/Api/Queue", {
            method: queueMode == QueueMode.Add ? "PUT" : "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
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

    const onSubmit: SubmitHandler<Inputs> = (data) => post({ ...data, queueId, organizationId: context.organizationId });
    // console.log(watch("gender"))

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex bg-white rounded-3xl px-5 flex-col">
                <div className="w-full">
                    <div className="">
                        <label className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white text-right">نام لیست</label>
                        <input type="text" {...register("name", { required: true })} defaultValue={context.queue?.name} className="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="نام لیست را وارد نمایید" />
                    </div>
                    <div className="">
                        <label className="block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white text-right">متن فراخوان</label>
                        <textarea defaultValue={context.queue?.prompt} {...register("prompt", { required: true })} className="text-right h-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="متن فراخوان را وارد نمایید" />
                    </div>
                    <div>
                        <ul className="flex w-full py-6 items-center justify-around flex-row-reverse">
                            {[1, 2, 3, 4, 5, 6].map((item: number, index) => {
                                return (<li key={index} className="flex items-center">
                                    <input {...register("colorId")} type="radio" id={`color${index}`} name="colorId" className="hidden peer" value={item} required defaultChecked={item === context.queue?.colorId || (queueMode == QueueMode.Add && item == 1)} />
                                    <label htmlFor={`color${index}`} className={`inline-flex w-8 h-8 peer-checked:outline-2 peer-checked:outline-offset-3 peer-checked:outline-gray-400 bg-gradient-${index + 1} rounded-full `}>
                                    </label>
                                </li>)
                            })}
                        </ul>
                    </div>
                </div>
                <div><button className="w-full mb-6 text-white bg-blue-500 hover:bg-gray-900 active:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-sm px-5 py-3 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" type="submit">
                    {queueMode === QueueMode.Edit ? "به روز رسانی مشخصات لیست"  : "ساخت لیست جدید"}
                    </button></div>

            </div>
        </form >
    );
}