import Child from "./Child";
import { useState } from "react";

export default function Parent() {

        const [ value, setValue ] = useState("lawal is awesome")

        function changeValue() {
            setValue("I dont like Wahala")
        }


    return(
        <div className="parent">
            <h1>{value}</h1>
            {/* <button className="parent-button" onClick={changeValue}>Click me</button> */}
            <div>
                <Child 
                    handleClick= {changeValue}
                />
            </div>
        </div>
    )
}