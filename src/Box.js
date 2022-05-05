import { useState } from "react"

export default function Form() {


    const [ formData , setFormData ] = useState({
        firstName:"",
        secondName:"",
        fruit:""

    })

    function changeData(event){
        const target= event.target;
        setFormData(function(prevdata){
                return {
                    ...prevdata,
                    [target.name]: target.value
                }
        })
    }

    console.log(formData)




    return (
        <form action="">
            <input type="text"
                name="firstName"
                id=""
                onChange={changeData}
                placeholder="First Name"
                value={formData.firstName}
            />

            <input type="file" />

            <input
                type="text"
                name="secondName" 
                id=""
                onChange={changeData}
                placeholder=" Second Name"
                value={formData.secondName}
            />

            <select name="fruit" value={formData.fruit} onChange={changeData}>
                <option value="Coconut">Coconut</option>
                <option value="Apple">Apple</option>
                <option value="Mango">Mango</option>
            </select>
        </form>
    )
}