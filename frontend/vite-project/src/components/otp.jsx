import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function Otp() {

    const no_of_boxes = 5
    const [inputBox, setInputBox] = useState(new Array(no_of_boxes).fill(""));
    let refArr = useRef([]);
    // console.log(refArr.current);


    // console.log(inputBox);

    // handling input
    const handleInput = (e, index) => {

        let newValue = e.target.value.trim();

        if (isNaN(newValue)) return;

        const newArr = [...inputBox];
        newArr[index] = newValue.slice(-1);
        setInputBox(newArr);
        newValue && refArr.current[index + 1]?.focus();
    }

    const handleEvent = (e, index) => {
        
        if (e.key === "Backspace")
            if (!e.target.value)
                refArr.current[index - 1]?.focus();

        if(e.key === "ArrowRight")
            refArr.current[index +1]?.focus();

        if(e.key === "ArrowLeft")
            refArr.current[index -1]?.focus()
    }


    useEffect(() => {
        refArr.current[0].focus()
    }, []);

    return (
        <>

            <div className="pt-20 h-100 ">
                <div className="border h-50 flex flex-col items-center gap-3">
                    <h2 className=" text-2xl font-bold tracking-wide">Validate OTP</h2>
                    <div className="flex gap-2">
                        {
                            inputBox?.map((value, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    className="input h-15 w-15 text-center text-xl"
                                    value={inputBox[index]}
                                    onChange={(e) => handleInput(e, index)}
                                    onKeyDown={(e) => handleEvent(e, index)}
                                    ref={(value) => refArr.current[index] = value}
                                />

                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Otp;
