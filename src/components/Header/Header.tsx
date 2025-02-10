import styles from "./header.module.css"
import Link from 'next/link'

export default function Header(){

    return (

        <header>
            <nav>
              <ul className="flex justify-center gap-4 p-7 bg-black text-white font-bold">
                <li><Link href="/#Tea_Map">Location</Link></li>
                <li>About - Placeholder</li>
                <li>Teas - Placeholder</li>
                <li>Ethical Sourcing - Placeholder</li>
                <li>ESG Targets - Placeholder</li>
              </ul>
            </nav>
        </header>

    )

}
