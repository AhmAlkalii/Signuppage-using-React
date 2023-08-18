import React from "react";
import Nav from "./nav";
import Sign from "./sign";
import notes from "./notes";


function App() {
  function photo(notes){
    return(
    <Sign img={notes.imgURL} key={notes.key} />
    );

  }
    return (
       <section >
         <Nav /> 
         <div>
          {notes.map(photo)}
         </div>
        
       </section>
       
    );
}

export default App;
