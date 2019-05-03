import React from 'react';


const CharacterList = (props) => {
    return (
        <div className = 'character-list'>
        {props.starwarsChars.map((character) => {
            console.log(character);
        })}
        </div>
    )
}

export default CharacterList;