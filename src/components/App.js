import React from 'react'

let arr = ["relativeListItem1", "relativeListItem2", "relativeListItem3", "relativeListItem4", "relativeListItem5"]
const App = () => {
  return (
    <div id="main">
      <ol key={"#relativeList"}>
        {/* {
          arr.map((el,i) => {
            return (
              <li key={el}>Relative {i+1}</li>
            )
          })
        } */}
        <li key={"#relativeListItem1"}>Relative 1</li>
        <li key={"#relativeListItem2"}>Relative 2</li>
        <li key={"#relativeListItem3"}>Relative 3</li>
        <li key={"#relativeListItem4"}>Relative 4</li>

      </ol>

    </div>
  )
}

export default App
