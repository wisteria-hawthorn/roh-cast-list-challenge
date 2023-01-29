// LIST: this will be a reusable unordered list component, capable of displaying any fetched data necessary, and allowing the Cast Sheet to be scalable if any additional lists need to be added in the future.

import React from 'react';
//eslint-disable-next-line

import './style.css';


export default function List({ ListItem }) {

// TODO: - if two results contain the same "role" value (e.g. Libretto), render them together with a comma?
// TODO: - each li should have a unique key

let spacerText = "............."

return(
    <div className="ul-container">
      <ul className="unordered-list">
        {ListItem.map((item) => {
          return (
            <li className="the-list-item">
              <span className="the-role">{item.role}</span>
               <span aria-hidden="true" className="list-spacer">{spacerText}</span>
               <span className="the-person">{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
