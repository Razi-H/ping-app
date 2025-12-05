export default function ColorSelector() {
    return (
        <div className="">
            <ul className="flex w-full pt-4 items-center justify-around flex-row-reverse">

                {[1, 2, 3, 4, 5, 6].map((item: number, index) => {
                    return (<li key={index}>
                        <input type="radio" id={`color${index}`} name="color" className="hidden peer" required defaultChecked={index === 2}/>
                        <label htmlFor={`color${index}`} className={`inline-flex w-8 h-8 peer-checked:outline-2 peer-checked:outline-offset-3 peer-checked:outline-gray-400 bg-gradient-${index + 1} rounded-full `}>
                        
                        </label>
                    </li>)
                })}
            </ul>
        </div>
    )
}