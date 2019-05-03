import React from 'react';

const Character = (props) => {
    return (
        <div className = 'character-info'>
                {props.character.name}
        </div>
    );
}

export default Character;