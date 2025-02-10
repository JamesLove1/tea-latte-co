"use client";
// 'use server'
import Link from "next/link"
import Image from "next/image"
import styles from "./about.module.css"
import RedirectButton from "./redirectButton"

import { useEffect, useState } from "react"

export default  function Page() {
    
        const [data, setData] = useState<string>("no data");
        useEffect(()=>{

            test()
        
        }, [])
        
        async function test(){
            
            const response:Promise<Response> = await fetch("https://api.coinlore.net/api/tickers/")
            .then(response => response.json())
            .then(data => data)
            setData(JSON.stringify(response))
        };
        
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

            <RedirectButton/>

            <div>
                {data}
            </div>
            


        </>

    )



}

