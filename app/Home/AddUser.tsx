import { useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form"
import AppContext from "../AppContext";
import toast from "react-hot-toast";

type Inputs = {
    family: string,
    gender: number,
    mobileNumber: string,
    showPingTag: boolean,
    pingTag: string
}

export default function AddUser({ queueId }: { queueId: number }) {
    const {
        register,
        handleSubmit,
        watch,
        setFocus,
        formState: { errors },
    } = useForm<Inputs>()

    const context = useContext(AppContext);

    const post = (data: object) => {
        fetch("http://192.168.88.24:3002/Api/User", {
            method: "POST",
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
            }, 500); context.reload?.(); context.setOpen(false);
        });
    }

    const onSubmit: SubmitHandler<Inputs> = (data) => post({ ...data, queueId, pingTag: data.showPingTag ? data.pingTag : null });
    // console.log(watch("gender"))

    const showPingTag = watch("showPingTag");
    const mobile = watch("mobileNumber");

    useEffect(() => {
        // فقط وقتی طول 11 رقم شد و با صفر شروع شد
        if (/^0\d{10}$/.test(mobile)) {
            setFocus("family");
        }
    }, [mobile, setFocus]);

    // useEffect(() => {
    //     const timer = setTimeout(() => setFocus("mobileNumber"), 1000);
    //     return () => clearTimeout(timer);
    // }, [setFocus])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex bg-white rounded-3xl px-5 flex-col">
                <div className="mb-4 w-full py-2">
                    <div className="">
                        <label className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white text-right">تلفن همراه</label>
                        <input type="number" pattern="[0-9]*" inputMode="numeric" {...register("mobileNumber", { required: true })} className="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="تلفن همراه را وارد نمایید" />
                    </div>
                    <div className="mt-4 mx-1 flex flex-row w-full " style={{ direction: "rtl" }}>
                        <div className="flex items-center flex-1">
                            <input type="radio" {...register("gender")} value="1" className=" border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" defaultChecked={true} />
                            <label className="block ms-2 px-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                جناب آقای
                            </label>
                        </div>
                        <div className="flex items-center flex-1">
                            <input type="radio" {...register("gender")} value="2" className=" border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                            <label className="block ms-2 px-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                سرکار خانم
                            </label>
                        </div>
                    </div>
                    <div className="mt-4">
                        <input type="text" {...register("family", { required: true })} className="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="نام خانوادگی را وارد نمایید" />
                    </div>
                    <div className="flex flex-row mt-4 justify-end">
                        <div className="text-sm flex items-center pr-2">تگ فراخوانی</div>
                        <div className="flex items-center gap-x-3">
                            <label className="relative inline-block w-11 h-6 cursor-pointer">
                                <input type="checkbox" {...register("showPingTag")} className="peer sr-only" />
                                <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-600 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
                                <span className="absolute right-0 top-1/2 end-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:-translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
                            </label>
                            {/* <label className="text-sm text-gray-500 dark:text-neutral-400">Unchecked</label> */}
                        </div>
                    </div>
                    {showPingTag && <div className="mt-4">
                        <input pattern="[0-9]*" inputMode="numeric" {...register("pingTag", { required: true })} className="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="تگ فراخوانی را وارد کنید" />
                    </div>}

                    {/* <div className="relative z-0 w-full mb-5 group">
                                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                </div> */}
                    {/* <div className="w-full">
                                <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                                <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="Apple" placeholder="Product brand" required="">
                            </div>
                            <div className="w-full">
                                <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="2999" placeholder="$299" required="">
                            </div>
                            <div>
                                <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option selected="">Electronics</option>
                                    <option value="TV">TV/Monitors</option>
                                    <option value="PC">PC</option>
                                    <option value="GA">Gaming/Console</option>
                                    <option value="PH">Phones</option>
                                </select>
                            </div>
                            <div>
                                <label for="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Weight (kg)</label>
                                <input type="number" name="item-weight" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="15" placeholder="Ex. 12" required="">
                            </div>
                            <div className="sm:col-span-2">
                                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write a product description here...">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US</textarea>
                            </div> */}
                </div>
                <div><button className="w-full mb-6 mt-10 text-white bg-blue-500 hover:bg-gray-900 active:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-sm px-5 py-3 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" type="submit">افزودن به لیست انتظار</button></div>

            </div>
        </form >)
}