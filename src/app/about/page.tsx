// "use client";
'use server'
import Link from "next/link"
import Image from "next/image"
import styles from "./about.module.css"
import RedirectButton from "./redirectButton"

// import { useEffect, useState } from "react"

export default async function Page() {
    
    
    
    // const [data, setData] = useState<string>("no data");
    // useEffect(()=>{
        //     test()
        // })
        
        // async function test(){
            
        //     const response:Promise<Response> = await fetch("https://api.coinlore.net/api/tickers/")
        //     .then(response => response.json())
        //     .then(data => data)
        //     return JSON.stringify(response)
        //     // setData(JSON.stringify(response))
        // };
        
        const data = await fetch("https://api.coinlore.net/api/tickers/");
        const tickers = await data.json()
        
        return (    
        
        <>
            <h1>hello world this is the ABOUT page</h1>
    
            <br />
            
            <button className={styles.bold} style={{
                display:"block",
                background: "green",
                color: "white",
                padding: "1em",
                borderRadius:"19%"
            }}>
               <Link href="/">Go to Homepage </Link>
            </button>

            <div style={{
                width:"50%",
                height:"auto"         
                }}>
                
                <Image 
                    src="/tea.jpg" 
                    alt="tea" 
                    layout="responsive"
                    width={600}
                    height={600}
                />

            </div>
            
            <h1 className="font-bold hover:text-4xl hover:underline hover:font-mono " >
                hello world
            </h1>

            
            {/* <form >
                <input type="text" name="title" />
                <input type="text" name="content" />
                <button type="submit">Create</button>
                </form> */}

            <RedirectButton/>

            <div>
                { JSON.stringify(tickers)}
            </div>
            


        </>

    )



}

