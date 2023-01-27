// SHEET: will contain the fetch requests, headings, and will pass the fetched data into the list components.

import React , { useState , useEffect } from "react";
import List from "../List";

function Sheet() { 


// FETCH REQUEST
        const [data , setData] = useState(null);

        useEffect( () => {
            async function fetchData() {
            const response = await fetch (`https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban`);
            const {data} = await response.json();

            setData(data);
            
            }    
            fetchData()
            .catch(console.error);

        //eslint-disable-next-line
        },[])
        
        // Displays loading status whilst the fetch function is being called
        if(!data){
            return <p>Loading...</p>
        };
        
        console.log(data);


    // Storing the fetched data in variables
        const prodTitle = data.attributes.title;
        const prodDescr = data.attributes.shortDescription;

        const prodDate = "10/03/2023";


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