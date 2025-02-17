// LIST: a reusable unordered list component. Displays fetched data, and allows the Cast Sheet to be scalable if any additional lists need to be added in the future.

import React from 'react';
import './style.css';



export default function List({ ListItem }) {

// TODO: - if two results contain the same "role" value (e.g. Libretto), render them together with a comma?

return(
    <div className="ul-container">
      <ul className="unordered-list">
        {ListItem.map((item) => {
          return (
            <li className="the-list-item">
              <span className="the-role">{item.role}</span><div className="list-spacer"></div>
               <span className="the-person">{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
