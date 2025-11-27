import { SplideSlide } from "@splidejs/react-splide";
import { Queue } from "./types";

export default function QueueSlide({ name, waitingNumber, totalNumber, colorCSS }: Queue) {
    return (
        <SplideSlide data-key={name}>
            <div className="flex py-6 mx-2 ">
                <div className={`w-full aspect-19/9 ${colorCSS} rounded-3xl flex flex-row-reverse shadow`}>
                    <div className="flex flex-col flex-1 justify-center justify-items-center">
                        <div className="text-white font-bold text-md h-8 text-right">{name}</div>
                        <div className="text-white text-sm text-right ">تعداد افراد در لیست انتظار : {waitingNumber} نفر</div>
                    </div>
                    <div className="flex justify-center justify-items-center items-center px-6">
                        <div className="relative size-20">
                            <svg className="size-full " viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">

                                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-400 dark:text-neutral-700" strokeWidth="4"></circle>
                                /
                                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-white dark:text-blue-500" strokeWidth="4" strokeDasharray="100" strokeDashoffset={100 - Math.floor(waitingNumber * 100 / totalNumber)} strokeLinecap="round"></circle>
                            </svg>
                            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 translate-x-1/2">
                                <span className="text-center text-md font-bold text-white dark:text-blue-500">{Math.floor(waitingNumber * 100 / totalNumber)}% </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SplideSlide>)
}