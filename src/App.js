import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)

    function toggle(id) {
        setSquares(function (prevState) {
            let newList = []

            for (let i = 0; i < prevState.length; i++) {
                let currentItem = prevState[i]
                if (currentItem.id === id) {
                    newList.push({
                        ...currentItem,
                        on: !currentItem.on
                    })
                } else {
                    newList.push(currentItem)
                }
            }
            return newList

        })
        console.log(squares)



        /**
         * Challenge: use setSquares to update the
         * correct square in the array.
         * 
         * Make sure not to directly modify state!
         * 
         * Hint: look back at the lesson on updating arrays
         * in state if you need a reminder on how to do this
         */
    }

    const squareElements = squares.map(square => (
        <Box
            key={square.id}
            id={square.id}
            on={square.on}
            toggle={toggle}
        />
    ))

    return (
        <main>
            {squareElements}
        </main>
    )
}
