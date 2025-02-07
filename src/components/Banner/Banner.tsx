import styles from "./banner.module.css"

export default function Banner(){

    return (

        <div className={styles.banner}> 
          <img 
            src="/matchaTea.jpg" 
            alt="tea cup cover photo"
            />
        </div>

    )

}