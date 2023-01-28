// LIST: this will be a reusable unordered list component, capable of displaying any fetched data necessary, and allowing the Cast Sheet to be scalable if any additional lists need to be added in the future.

import React from 'react';
import ListItem from '../ListItem';


export default function List({ListItem}) {

/* LIST: 
- .map to render as many <li> (ListItem) as needed

ALSO CONSIDER:
// - if two results contain the same "role" value (e.g. Libretto), render them together with a comma?

*/

// WIP, testing:
return(
    <div className="ul-container">
        <ul>
            <li>{ListItem}</li>
            <li>result2 (role)</li>
            <li>result3 (role)</li>
        </ul>
    </div>
);
};
