import { useState } from "react"

export const CheckNumber = () => {
    const [number, setNumber] = useState('0');
    const [errorMessage, setErrorMessage] = useState('');

    const isEven = parseInt(number)% 2 === 0;

    return (
        <>
            <h1>Check number even or odd</h1>

            <input 
                type="text" 
                name="number" 
                placeholder="Enter a number" 
                value={number} 
                onChange={event => {
                    const rawValue = event?.target.value;

                    const numberValue = parseInt(rawValue);
                    setNumber(rawValue)

                    if(isNaN(numberValue)) {
                        setErrorMessage('Please, enter a number');
                        return;
                    }

                    setErrorMessage('');
                }}
            />

            <p role={'presentation'}>{isEven ? 'Even' : 'Odd'}</p>

            <p role={"alert"}>{errorMessage}</p>
        </>
    )
}