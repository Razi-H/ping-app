import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import QueueSlide from "./QueueSlide";
import { Dispatch, RefObject, SetStateAction } from "react";
import { Queue } from "./types";

export default function QueueSlider({ queues, splide, showLoading, setSelectedQueueId }: { queues: Queue[], splide: RefObject<any>, showLoading: boolean, setSelectedQueueId: Dispatch<SetStateAction<number>> }) {
    return (<div className="relative aspect-19/9">
        {showLoading &&
            <>
                <div className="absolute bg-gray-200 opacity-40 right-0 left-0 top-0 bottom-0 z-100 flex items-center justify-center">
                </div>
                <div className="absolute right-0 left-0 top-0 bottom-0 z-101 flex items-center justify-center">
                    <div role="status">
                        <svg aria-hidden="true" className="inline opacity-100 w-8 h-8 text-neutral-tertiary animate-spin fill-white dark:fill-quaternary text-gray-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    </div>
                </div>
            </>
        }
        <Splide options={{
            // type: 'loop',
            direction: "rtl",
            padding: '1.5rem',
            flickMaxPages: 1,
            perMove: 1,
            lazyLoad: false,
            autoWidth: false,
            fixedWidth: '100%'
            // waitForTransition: true,
        }} aria-label="My Favorite Images" hasTrack={false}
            onActive={(splide, slide) => { setSelectedQueueId(parseInt(slide.slide.dataset.key != undefined ? slide.slide.dataset.key : "0")) }} ref={splide}>
            <SplideTrack>
                {queues.map((item, index) => {
                    //console.log(item);
                    return <QueueSlide key={item.queueId} queueId={item.queueId} name={item.name} waitingNumber={item.waitingNumber} totalNumber={item.totalNumber} colorCSS={`bg-gradient-${item.colorId}`} />
                }
                )}
                {/* <QueueSlide queueId={1} name='ظرفیت دو نفره' waitingNumber={5} totalNumber={10} colorCSS='bg-gradient-1' />
            <QueueSlide queueId={1} name='ظرفیت سه نفره' waitingNumber={10} totalNumber={40} colorCSS='bg-gradient-2' />
            <QueueSlide queueId={1} name='ظرفیت چهار نفره' waitingNumber={8} totalNumber={10} colorCSS='bg-gradient-3' /> */}

                <SplideSlide>
                    <div className="flex pt-4 mx-2 ">
                        <div className="relative w-full aspect-19/9 border-2 border-dashed border-gray-400 bg-linear-to-r from-neutral-100 to-gray-300 rounded-3xl flex flex-col items-center justify-center">
                            {/* <div className='w-15 aspect-[1/1] border-2 border-dashed border-gray-400 rounded-2xl flex justify-center items-center'> */}
                            <svg className="w-16 h-16 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd" />
                            </svg>

                            {/* </div> */}
                            <div className='bottom-5 text-center font-bold text-gray-400 pt-3'>ساخت لیست جدید</div>
                        </div>
                    </div>
                </SplideSlide>
            </SplideTrack>

            <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev hidden!">Prev</button>
                <button className="splide__arrow splide__arrow--next hidden!">Next</button>
            </div>
            <ul className="splide__pagination absolute bottom-2!"></ul>
            {/* 
                <button className="splide__toggle" type="button">
                    <span className="splide__toggle__play">Play</span>
                    <span className="splide__toggle__pause">Pause</span>
                </button> */}

        </Splide></div>)
}