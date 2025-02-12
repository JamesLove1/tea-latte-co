import styles from "./Header.module.css"
import Link from 'next/link'


export default function Header(){

    return (

        <header style={{position:"sticky", top:"0"}}>
            <nav className="flex justify-around gap-4 p-7 bg-black text-white font-bold">
              
              <Link href="/">
                <div className={styles.logoText}>
                
                  <img src="/coffee-cup.png" alt="coffee-cup.png" />
                  <h1>Tea Latte & Co</h1>
                </div>
              </Link>

              <ul className={styles.navBar} >
                <li className="p-2"><Link href="/">Home</Link></li>
                <li className="p-2"><Link href="/#Tea_Map">Sourcing Tea</Link></li>
                <li className="p-2"><Link href="/Tea-Range">Tea Range</Link></li>
              </ul>

            </nav>
        </header>

    )

}
