// LIST: this will be a reusable unordered list component, capable of displaying any fetched data necessary, and allowing the Cast Sheet to be scalable if any additional lists need to be added in the future.

import React from 'react';
//eslint-disable-next-line


export default function List({ ListItem }) {

// TODO: - if two results contain the same "role" value (e.g. Libretto), render them together with a comma?
// TODO: - each li should have a unique key

return(
    <div className="ul-container">
      <ul>
        {ListItem.map((item) => {
          return (
            <li>
              {item.role} <span>-</span> {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
