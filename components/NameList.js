import React from 'react'
import "./namestyle.css"
function NameList() {
const name = [
    {
        id:1,
        name :" Steve",
        heroName:"captain America"
    },
    {
        id: 2,
        name :"Natasha",
        heroName:"wild animal"
    }
];
  return (
    <div><h1 className='Apple'>NameList</h1>{
    name.map((n)=><h2 className="Ball">{n.name} = {n.id} is {n.heroName}</h2>)
}
</div>

  )
}

export default NameList