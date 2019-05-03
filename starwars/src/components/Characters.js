import React from 'react';

const Character = (props) => {
    return (
        <div className = 'character-info'>
            
            <div className = 'character-box'>
                <h3 className = 'character'>{props.character.name}</h3>
                <p>{props.character.birth_year}</p>
                <p>{props.character.gender}</p>
                <p>{props.character.hair_color}</p>
                <p>{props.character.eye_color}</p>
                <p>{props.character.skin_color}</p>
                <p>{props.character.mass}</p>
                
                
                
                
                
                
            </div>
                
        </div>
    );
}

export default Character;