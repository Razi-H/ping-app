import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import QueueSlide from "./QueueSlide";
import { RefObject } from "react";
import { Queue } from "./types";

export default function QueueSlider({ queues, splide }: { queues: Queue[], splide: RefObject<any> }) {
    return (<Splide options={{
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
        onActive={(splide, slide) => { alert(slide.slide.dataset.key)}} ref={splide}>
        <SplideTrack>
            {queues.map((item, index) => {
                console.log(item);
                return <QueueSlide key={item.queueId} queueId={item.queueId} name={item.name} waitingNumber={item.waitingNumber} totalNumber={item.totalNumber} colorCSS={`bg-gradient-${item.colorId}`} />
            }
            )}
            {/* <QueueSlide queueId={1} name='ظرفیت دو نفره' waitingNumber={5} totalNumber={10} colorCSS='bg-gradient-1' />
            <QueueSlide queueId={1} name='ظرفیت سه نفره' waitingNumber={10} totalNumber={40} colorCSS='bg-gradient-2' />
            <QueueSlide queueId={1} name='ظرفیت چهار نفره' waitingNumber={8} totalNumber={10} colorCSS='bg-gradient-3' /> */}

            <SplideSlide>
                <div className="flex py-6 mx-2 ">
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
        <ul className="splide__pagination absolute bottom-8!"></ul>
        {/* 
                <button className="splide__toggle" type="button">
                    <span className="splide__toggle__play">Play</span>
                    <span className="splide__toggle__pause">Pause</span>
                </button> */}

    </Splide>)
}