// SHEET: will contain the fetch requests, headings, and will pass the fetched data into the list components.

import React from "react";
import List from "../List";


function Sheet() {

// ** PLACEHOLDER VARIABLES: here I'm planning how I'll be organising the fetched data into a clean structure.
  const prodTitle = "title fetch goes here";
  const prodDate = "date fetch goes here";
  const prodDescr = "description fetch goes here";
// **

// FETCH REQUESTS WILL GO HERE

    return (
        <div className="main-sheet-container">

            <section className="prod-info-container">

            <h1 className="prod-title-heading">{prodTitle}</h1>

            <p className="prod-date">Date: {prodDate}</p>
            <p className="prod-descr">{prodDescr}</p>

            </section>


            <section className="creatives-container">
            <h2 className="creatives-heading">Creatives</h2>

                <List className="creatives-list"/>

            </section>


            <section className="cast-container">
            <h2 className="cast-heading">Cast</h2>

                <List className="cast-list"/>

            </section>

        </div>
    );
};

export default Sheet;