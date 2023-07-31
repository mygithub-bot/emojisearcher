import React, { useState } from 'react'
import "./emojistyle.css"
const emojiData=[
    { 
        id:1,
        emoji:"😀",
        label:"happy"
    },
    {
        id:2,
        emoji:"🥶",
        label:"coldy"
    },{
        id:3,
        emoji:"🧑🏻‍✈️",
        label:"police"
    },{
        id:4,
        emoji:"🤑",
        label:"money"
    },{
        id:5,
        emoji:"🤩",
        label:"star"
    },{
        id:6,
        emoji:"😎",
        label:"classy"
    },{
        id:7,
        emoji:"😘",
        label:"lovely"
    },{
        id:8,
        emoji:"😍",
        label:"beauty"
    },{
        id:9,
        emoji:"😂",
        label:"smiley"
    },{
        id:10,
        emoji:"🤣",
        label:"funny"
    },
]

function EmojiSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
    
    const filteredEmojis = emojiData.filter((emoji) => {
      return emoji.label.toLowerCase().includes(searchTerm.toLowerCase());
    });
    
    return (
      <div>
        <h1>React Js Emoji Searcher</h1>
        <input type="text" placeholder="Search for an emoji..." value={searchTerm} onChange={handleSearch} />
        
          {filteredEmojis.map((emoji, index) => (
            <li key={index}>{emoji.emoji} - {emoji.label}</li>
          ))}
        
      </div>
    );
  }
export default EmojiSearch