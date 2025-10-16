export default function AddUser() {


    return (
        <>
            <div className="bg-gray-100 h-dvh flex justify-center justify-items-center flex-row">
                <div className="pb-12 flex h-full flex-col max-w-md flex-1">
                    <div className="bg-white h-12 pt-2 border-b-1 border-gray-200 text-center text-md">افزودن به صف</div>
                    <div className=" px-5 flex flex-col justify-between h-full flex-1">
                        <div>
                            <div className="flex py-6">
                                <div className="w-full h-40 bg-purple-600 rounded-3xl flex flex-row-reverse drop-shadow-2xl ">
                                    <div className="flex flex-col flex-1 justify-center justify-items-center px-6">
                                        <div className="text-white font-bold text-md h-8 text-right">میزهای دو نفره</div>
                                        <div className="text-white text-sm text-right ">تعداد افراد در لیست انتظار : 10 نفر</div>
                                    </div>
                                    <div className="flex justify-center justify-items-center items-center px-4">
                                        <div className="relative size-20">
                                            <svg className="size-full " viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">

                                                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-300 dark:text-neutral-700" strokeWidth="4"></circle>
                                                /
                                                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-white dark:text-blue-500" strokeWidth="4" strokeDasharray="100" strokeDashoffset="75" strokeLinecap="round"></circle>
                                            </svg>
                                            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                <span className="text-center text-md font-bold text-white dark:text-blue-500">35%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col drop-shadow-2xl">
                                {/* <div className="w-full bg-white rounded-2xl flex flex-row  items-center  dropshadow-xl border-1 border-gray-300">
                            <div className="bg-gray-100 p-3 py-4 flex-1 text-center text-sm rounded-2xl m-2 border-1 border-gray-300">ثبت مشخصات</div>
                            <div className="bg-white p-3 flex-1 text-center text-sm rounded-2xl m-3 text-gray-300">ثبت تلفن همراه</div>
                        </div> */}
                                <div className="flex bg-white rounded-3xl px-5">
                                    <div className="mb-4 w-full py-2">
                                        <div className="">
                                            <label className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white text-right">تلفن همراه</label>
                                            <input type="number" pattern="[0-9]*" inputMode="numeric" name="name" id="name" className="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="تلفن همراه را وارد نمایید" />
                                        </div>
                                        <div className="mt-4 mx-1 flex flex-row w-full " style={{ direction: "rtl" }}>
                                            <div className="flex items-center flex-1">
                                                <input id="country-option-1" type="radio" name="countries" value="USA" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" defaultChecked={true} />
                                                <label className="block ms-2 px-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    جناب آقای
                                                </label>
                                            </div>
                                            <div className="flex items-center flex-1">
                                                <input id="country-option-1" type="radio" name="countries" value="USA" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                                <label className="block ms-2 px-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    سرکار خانم
                                                </label>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            {/* <label className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white text-right">نام خانوادگی</label> */}
                                            <input type="text" name="name" id="name" className="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="نام خانوادگی را وارد نمایید" />
                                        </div>





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

                                </div>
                            </div>
                        </div>
                        <div><button className="w-full mb-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-sm px-5 py-4 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">افزودن به صف</button></div>
                    </div>
                </div>
            </div>
            
            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Home</span>
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
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2" />
                        </svg>
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Settings</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Profile</span>
                    </button>
                </div>
            </div>

        </>
    )
}