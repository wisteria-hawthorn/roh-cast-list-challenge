// SHEET: will contain the fetch requests, headings, and will pass the fetched data into the list components.

import React , { useState , useEffect } from "react";
import List from "../List";

import './style.css';

function Sheet() { 


// State management:
        const [ title , setTitle ] = useState("");
        const [ date , setDate ] = useState("");
        let [ descr , setDescr ] = useState("")

        const [ creativeName , setCreativeName ] = useState("");
        const [ creativeRole , setCreativeRole ] = useState("");


        // Removing any <p></p> tags present in the JSON data:
        function checkTags(string) {
            if (string.includes("<p>")) {
                return string.slice(3, -4);
            } else {
                return string;
            }};

        // FETCH REQUEST:    
        useEffect( () => {
            async function fetchData() {
            const response = await fetch (`https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban` , { headers: {
                'Accept': 'application/json'
            }
              });
            const data = await response.json();
            console.log(data);
            
            // variable to allow access to the nested date value: TODO: sometimes shows in correct format, sometimes doesn't? 
            // const theArrayIndex = 14;

            setTitle(checkTags(data.data.attributes.title));
            setDate(data.included[14].attributes.date);
            console.log(`THIS IS THE DATE: ${date}`);
            setDescr(checkTags(data.data.attributes.shortDescription))


            setCreativeName(checkTags(data.included[1].attributes.name))
            setCreativeRole(checkTags(data.included[1].attributes.role))

            }  

            fetchData()
            .catch(console.error);

        //eslint-disable-next-line
        },[])
        
        // Displays loading status whilst the fetch function is being called.
        if(!title){
            return <div className="main-sheet-container"><p className="loading">Loading...</p></div>
        };
       
         

    return (
        <div className="main-sheet-container">

            <section className="prod-info-container">

                <h1 className="prod-title-heading">{title}</h1>

                <p className="prod-date">Date: {date}</p>
                <p className="prod-descr">{descr}</p>
                

            </section>


            <section className="creatives-container">
            <h2 className="creatives-heading">Creatives</h2>

                <List className="creatives-list"/>

            </section>


            <section className="cast-container">
            <h2 className="cast-heading">Cast</h2>

                <List className="cast-list"/>

                <hr></hr>

                <p>FETCH CHECK: creatives</p>
                <p>{creativeName}</p>
                <p><span>{creativeRole}</span></p>

            </section>

        </div>
    );
};

export default Sheet;