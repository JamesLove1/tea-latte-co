"use client";
import { redirect } from "next/navigation";

export default function redirectButton(){
    
    return(

        <>
        
            <br />
            <button onClick={()=> redirect("/")}>   click here to redirect to Home Page</button>
            <br />   
            <br />
            <br />     
        
        </>
    )

}