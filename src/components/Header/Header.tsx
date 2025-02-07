import styles from "./header.module.css"
import Link from 'next/link'

export default function Header(){

    return (

        <header>
            <nav>
              <ul className="flex justify-center gap-4 p-7 bg-black text-white font-bold">
                <li>About</li>
                <li><Link href="/#Tea_Map">Location</Link></li>
                <li>Teas</li>
                <li>Ethical Sourcing</li>
                <li>ESG Targets</li>
              </ul>
            </nav>
        </header>

    )

}
