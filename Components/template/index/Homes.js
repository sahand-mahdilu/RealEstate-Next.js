import React from "react";
import db from "./../../../data/db.json"
import HomeComponent from "@/Components/modules/HomeComponent";


export default function Homes() {

    const {homes}= db


    console.log(homes);

  return (
    <div className="homes">

        {homes.slice(0,6).map(home=>{
            return(
                 <HomeComponent key={home.id} {...home}/>
            )
        })}
     
    
    </div>
  );
}
