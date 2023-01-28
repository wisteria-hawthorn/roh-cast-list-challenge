// compiling the list items into one line
import React from 'react';


function ListItem( role , name , id ) {


//TODO: if role has the same value as another item, render `${name}, ${name}` ?

 return (
    <li className="listItem">
        <p className="role">{role}</p>
        <span>...</span>
        <p className="name" key={id}>{name}</p>
    </li>
 );
};

export default ListItem;