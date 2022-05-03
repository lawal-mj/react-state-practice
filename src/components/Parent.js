import Child from "./Child";

export default function Parent() {
    return(
        <div className="parent">
            <h1>This is the parent Component</h1>
            <div>
                <Child />
            </div>
        </div>
    )
}