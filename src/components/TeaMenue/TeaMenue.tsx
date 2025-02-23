
import style  from "./TeaMenue.module.css"

export default function TeaMenu(){

    return (
        <>
        <div className={style.titleParent}>
            <h1 className={style.title}>Tea Range</h1>
        </div>
        
        <div className={style.TeaMenu}>
            <div>
                <img src="./chai-latte.png" alt=""/>
                <div>

                    <h1>Chai Latte:</h1>
                    <p>
                        A warm and spicy blend of black tea infused with aromatic spices like cinnamon, cardamom, and ginger, combined with steamed milk for a comforting experience.
                    </p>
                    
                    <p className={style.extraContent}>
                        This flavorful beverage originates from traditional Indian masala chai, blending bold tea with a medley of warming spices. The balance of sweetness and spice makes it a favorite for cozy mornings or relaxing evenings. Whether enjoyed with honey, vanilla, or a dairy-free alternative like oat milk, the chai latte offers a rich, creamy texture with a hint of exotic depth, making it both soothing and invigorating.
                    </p>
                    
                </div>
            </div>          
            
            <div className={style.reverse}>
                <img src="./matchaLatte.jpg"></img>
                <div>
                    <h1>Matcha Latte:</h1>
                    <p>
                        A vibrant green tea latte made from finely ground matcha powder whisked into steamed milk, offering a rich, earthy flavor and a boost of antioxidants.
                    </p>

                    <p className={style.extraContent}>
                        Known for its smooth, umami-rich taste, a matcha latte delivers a perfect balance of sweetness and slight bitterness. Unlike regular green tea, matcha is made from whole tea leaves, maximizing its health benefits. It provides a steady energy boost without the jitters of coffee, thanks to L-theanine, which promotes relaxation and focus. Enjoy it hot or iced, with dairy or plant-based milk.
                    </p>
                </div>
            </div>
            
            <div>
                <img src="./callomaialTea.jpg" alt="" />
                <div>
                    <h1>Chamomile Tea Latte:</h1>
                    <p>
                        A calming herbal latte made by steeping chamomile tea in steamed milk, often flavored with a touch of honey and vanilla, perfect for unwinding.
                    </p>

                    <p className={style.extraContent}>
                        Chamomile tea lattes are a popular caffeine-free alternative, offering a soothing and aromatic experience. The delicate floral notes of chamomile blend seamlessly with the creamy richness of steamed milk, creating a velvety texture. Adding honey enhances its natural sweetness, while vanilla deepens the comforting flavor profile. Some variations incorporate cinnamon or nutmeg for a hint of warmth. This latte is ideal for relaxation, especially before bedtime, as chamomile is known for its calming properties. Many enjoy it as a natural stress reliever, making it a perfect choice for winding down after a long day. Serve it hot for coziness or iced for a refreshing twist.
                    </p>
                </div>
            </div>

            <div className={style.reverse}>
                <img src="./dirtyChiaLatte.jpg" alt="" />
                <div>
                    <h1>Dirty Chai Latte:</h1>
                    <p>
                        Dirty Chai Latte: A fusion of spiced chai tea and a shot of espresso, combined with steamed milk, offering a delightful mix of tea and coffee flavors for an extra caffeine kick.
                    </p>

                    <p className={style.extraContent}>
                        A Dirty Chai Latte is a popular choice for those who love both the comforting spices of chai and the bold intensity of espresso. The chai base, typically a blend of black tea with cinnamon, cardamom, ginger, cloves, and black pepper, provides warmth and complexity. When paired with espresso, it gains depth and a slight bitterness, balancing the sweetness of the milk. It can be enjoyed hot or iced, with variations like oat or almond milk for a dairy-free twist. The drink originated as a happy accident in coffee shops, where baristas experimented with blending tea and coffee. Now, it’s a go-to for those seeking a flavorful caffeine boost with a hint of spice.
                    </p>
                </div>
            </div>
        </div>
        </>
    )


}