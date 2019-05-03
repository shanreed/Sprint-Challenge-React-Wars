import React from 'react';
import Character from './Characters'
import './CharacterList.css';


const CharacterList = (props) => {
    return (
    <div className = 'character-list'>
        {props.starwarsChars.map((person) => {
            return(
            <Character character = {person}/>
            )
          }
         )
        }
    </div>
    )
}

export default CharacterList;