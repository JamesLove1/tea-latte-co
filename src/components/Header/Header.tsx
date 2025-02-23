"use client";

import styles from "./Header.module.css"
import Link from 'next/link'
import { useState } from "react"


export default function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false)


    return (

        <header style={{position:"sticky", top:"0"}}>

            <nav className={styles.navBar}>    
              <div className={styles.menueAndLogo}>
                <Link href="/">

                  <div className={styles.logoText}>

                    <img src="./coffee-cup.png" alt="coffee-cup.png" />

                    <h1>Tea Latte & Co</h1>

                  </div>

                </Link>

                <img 
                  className={styles.menueIcon} 
                  src="./burger-bar.png"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                ></img> 
              </div>

              
              <ul 
                className={`${styles.navBarLinks} ${isMenuOpen ? styles.showMenu : ''}`}
                >

                <li className="p-2">
                    <Link href="/">Home</Link>
                </li>
                
                <li className="p-2">
                    <Link href="/#Tea_Map">Sourcing Tea</Link>
                </li>

                <li className="p-2">
                    <Link href="/Tea-Range">Tea Range</Link>
                </li>
              
              </ul>
              
            </nav>
        </header>

    )

}
