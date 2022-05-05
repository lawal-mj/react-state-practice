import { useState } from "react"

export default function Form() {

    const [ firstName , setFirstName ] = useState("")
    const [ secondName , setSecondName ] = useState("")
    
    function changeFirst(event){
        setFirstName(event.target.value)
    }

    function changeSecond(event){
        setSecondName(event.target.value)
    }




    return (
        <form action="">
            <input type="text"
                name="firstName"
                id=""
                onChange={changeFirst}
                placeholder="First Name "
            />
            <input
                type="text"
                name="secondName" 
                id=""
                onChange={changeSecond}
                placeholder=" Second Name "
            />
        </form>
    )
}