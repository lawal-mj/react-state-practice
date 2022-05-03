export default function Child(props) {
    return (
        <div className="child">
            <h1>This is the child component</h1>
            <button onClick={props.handleClick} className="child-button">Click Me</button>
        </div>
    )
}