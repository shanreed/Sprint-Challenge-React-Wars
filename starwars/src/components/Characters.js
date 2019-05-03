import React from 'react';
import './Characters.css';

const Character = (props) => {
    return (
        <div className = 'character-box'>
        <div className = 'character-info'>
                <h3 className = 'character'>{props.character.name}</h3>
                <p className = 'green'>Was born {props.character.birth_year}</p>
                <p className = 'yellow'>Is a {props.character.gender}</p>
                <p className = 'red'>Hair color is {props.character.hair_color}</p>
                <p className = 'orange'>Eye color is {props.character.eye_color}</p>
                <p className = 'purple'>Skin color is {props.character.skin_color}</p>
                <p className = 'brown'>Mass is {props.character.mass}</p>
        </div>
        </div>
    );
}

export default Character;