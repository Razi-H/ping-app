"use client"

import { useState } from "react"

export default function Test() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <div className="flex justify-center">
                <div className="max-w-lg flex-1">
                    <div className=" mx-10 my-10 flex-1">
                        <div className=" h-24 w-full bg-purple-600 rounded-3xl flex justify-center items-center justify-items-center">
                            <div className="relative size-40">
                                <svg className="size-full " viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
     
                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-400 dark:text-neutral-700" strokeWidth="4"></circle>
      \
                                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-white dark:text-blue-500" strokeWidth="4" stroke-dasharray="100" stroke-dashoffset="75" stroke-linecap="round"></circle>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => { setNumber(n => n + 1) }}>{`Razi${number}`}<span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">Badge</span></div>
                </div>
            </div>
        </>)
}