// LIST: this will be a reusable unordered list component, capable of displaying any fetched data necessary, and allowing the Cast Sheet to be scalable if any additional lists need to be added in the future.

import React from 'react';


export default function List() {

/* LIST: probably a .map array method to render as many <li> as needed in the JSON object.

ALSO CONSIDER:
- if two results contain the same "role" value (e.g. Libretto), render them together with a comma?

*/

return(
    <div className="ul-container">
        <ul>
            <li>result1 (role)</li>
            <li>result2 (role)</li>
            <li>result3 (role)</li>
        </ul>
    </div>
);
};
