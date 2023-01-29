// SHEET: will contain the fetch requests, headings, and will pass the fetched data into the list components.

import React , { useState , useEffect } from "react";
import List from "../List";

import './style.css';


// SORTING: creating functions to filter through the data object, and store only the values I need in a new set of arrays.
/* COLLECT THE VALID CAST IDs: */
 function getValidCastIds( array , dateString ) {
    let validCastIds = [];
    const newArray = array.filter((item) => {
      return item.type === "activities" && item.attributes.date === dateString;
    });
  
    if (newArray.length > 0) {
      validCastIds = newArray[0].relationships?.cast?.data?.map((castMem) => castMem.id);
    };
    console.log(newArray)
    return validCastIds;
  };
  


function Sheet() {
    
    /* STATE MANAGEMENT: */

        const [ title , setTitle ] = useState("");
        const [ date , setDate ] = useState("");
        const [ descr , setDescr ] = useState("")

        const [ cast , setCast ] = useState([]);
        const [ creatives , setCreatives ] = useState([]);


    /* HELPER FUNCTIONS: */
        // Removing any <p></p> tags present in the JSON data:
            function checkTags(string) {
            if (string.includes("<p>")) {
                return string.slice(3, -4);
            } else {
                return string;
            }};

        // Remove excess from date: (TODO: refactor later with format date)
            function removeTime(string) {
             if (string.startsWith("2023-03-10")) {
                 return string.slice(0 , -15);
            }
            }
        

          
    /* FETCH REQUEST: */
        useEffect( () => {
            async function fetchData() {
            const response = await fetch (`https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban`  
            );
        
            const data = await response.json();
            console.log(data);


    /* ACCESSING THE DATA & SETTING THE STATE: */

            setTitle(checkTags(data.data.attributes.title));
            setDescr(checkTags(data.data.attributes.shortDescription));
            
            // Storing the date in a variable for ease of use , readability , & async state management.
            const theDate = data.included[14].attributes.date;
            setDate(theDate);
            
            // Setup the getValidCastIds function with the correct arguments
            const castIdsForDate = getValidCastIds(data.included , theDate);

            // Filter data.included for key value pairs that have a value of "castRoles" , and set the "cast" state to the resulting array
            setCast(data.included.filter((item) => item.type === "castRoles").filter((item) => castIdsForDate.includes(item.id)).map((item) => item.attributes));

            // Filter data.included for key value pairs that have a value of "creatives" , and set the "creatives" state to the resulting array
            setCreatives(data.included.filter((item) => item.type === "creatives").map((item) => item.attributes));

            }  


            fetchData()
            .catch(console.error);

        //eslint-disable-next-line
        },[])


    /* MISC: */
            // TODO: refactor (date format):
            let displayDate = removeTime(date);
            // displayDate.Intl.DateTimeFormat("en-GB" , {dateStyle: "full"});

            // Displays loading status whilst the fetch function is being called.
            if(!title){
                return <div className="main-sheet-container"><p className="loading">Loading...</p></div>
            };
     

    return (
        <div className="main-sheet-container">

            <section className="prod-info-container">

                <h1 className="prod-title-heading">{title}</h1>

                <p className="prod-date">Date: {displayDate}</p>
                <p className="prod-descr">{descr}</p>
                
            </section>


            <section className="creatives-container">
            <h2 className="creatives-heading">Creatives</h2>

                <List className="creatives-list" ListItem={creatives ?? []}/>

            </section>


            <section className="cast-container">
            <h2 className="cast-heading">Cast</h2>

                <List className="cast-list" ListItem={cast ?? []}/>

            </section>

        </div>
    );
};

export default Sheet;