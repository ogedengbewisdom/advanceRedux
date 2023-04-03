import { useState } from "react"


const useInput = (check) => {
    const [ value, setValue ] = useState("")
    
    const isValid = check(value)

    const valueChangeHandler = (event) => {
        setValue(event.target.value)
    }

    const reset = () => {
        setValue("")
    }

    return {
        value,
        valueChangeHandler,
        isValid,
        reset
    }
}

export default useInput