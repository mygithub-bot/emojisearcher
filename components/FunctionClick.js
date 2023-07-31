import React from 'react'

function FunctionClick() {
    function handleClick(){
        console.log("this is a button");    }
  return (
<div>
    <button onClick={handleClick}>ClickButton</button>
</div>    )
}

export default FunctionClick