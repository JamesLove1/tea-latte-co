import styles from "./Tea_Map.module.css"

export default function Tea_Map(){

    return (
        <div className={styles.Tea_Map}>
            
            <h1 className="text-4xl pl-20 underline" id="Tea_Map" > Tea Map </h1>
            <div className="flex justify-center">


                <div style={{
                    width:"40%",
                    padding:"4%"
                }}>
                    <p>At <strong>The Tea Latte Co.</strong>, we source our tea from the world-famous estates of <strong>Darjeeling, India</strong>, ensuring that every cup embodies exceptional quality and flavour. Darjeeling tea, often called the "Champagne of Teas," is prized for its delicate aroma and muscatel notes, making it the perfect foundation for our signature tea lattes.</p>
                    <br />
                    <p>We partner directly with small and medium-sized tea gardens that use <strong>organic and sustainable farming</strong> practices. By sourcing responsibly, we ensure that our tea is free from artificial pesticides while supporting ethical trade and fair wages for tea farmers. Our focus is on <strong>Second Flush Darjeeling</strong>, harvested in late spring, as its rich, full-bodied flavour pairs beautifully with the creamy texture of our lattes.</p>
                    <br />
                    <p>The tea leaves are carefully plucked and processed through <strong>withering, rolling, oxidation, and drying</strong>, preserving their complex flavour. We work closely with our suppliers to ensure small-batch processing, maintaining freshness and quality.</p>
                    <br />
                    <p>From the misty Himalayan slopes to London’s tea culture, every sip of a <strong>Tea Latte Co.</strong> drink tells a story of craftsmanship and tradition. We take pride in bringing the finest Darjeeling tea to our customers, transforming it into velvety, aromatic tea lattes.</p>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56862.43054319622!2d88.22347548483164!3d27.033265357732127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e42e654cf501bb%3A0x4175555979d4702a!2sDarjeeling%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2suk!4v1738948073964!5m2!1sen!2suk" 
                style={{
                    border:"0",
                    padding:"0% 10% 0% 5%"
                }}   
                loading="lazy" allowFullScreen={true}  referrerPolicy="no-referrer-when-downgrade" ></iframe>

            </div>
        </div>


        

    )

}