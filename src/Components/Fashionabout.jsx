import { FaSearch, FaMailBulk, } from "react-icons/fa"

export const About = () => {
    return (
        <div className="min-h-full bg-neutral-100">
            <div className="bg-header-img bg-cover bg-center pt-1 ">                
                <header className="flex justify-between items-center  py-2 px-12">
                    <ul className="flex space-x-4 items-center">
                        <li><a className="head-link" href="#">Home</a></li>
                        <li><a className="head-link" href="#">Shop</a></li>
                        <li><a className="head-link" href="#">About us</a></li>
                        <li><a className="head-link" href="#">Contact us</a></li>
                    </ul>

                    <div className="text-neutral-900 font-bold border-b-2 border-solid border-neutral-700 -space-y-1 text-center">
                        <h6 className="text-sm">Femme</h6>
                        <p className="text-base italic">Wardrobe</p>                        
                    </div>

                    <div className="flex space-x-4">
                        <FaSearch className="head-icon"/>
                        <FaMailBulk className="head-icon"/>
                    </div>
                </header>

                <div className="flex justify-center items-center text-center py-32 text-neutral-800 text-5xl italic pl-52 font-semibold">
                    <p>About Us</p>
                </div>                

            </div>

            <div className="py-12 px-24 flex space-x-12 justify-between w-full border-solid border-b-2 border-b-neutral-400">
                <div className="w-1/3">
                    <p className="text-neutral-800 italic text-4xl capitalize font-bold ">
                        From Vision to vogue:<br/>
                        The birth of femme Wardrobe
                    </p>
                </div>

                <div className="w-1/2 space-y-4">
                    <h3 className="text-neutral-900 text-xs font-bold uppercase">
                        Our Story
                    </h3>

                    <h5 className="text-neutral-900 text-base font-bold italic capitalize ">
                        Our journey begin with a simple yet powerful vision-
                        To redine the way women experience fashion.
                    </h5>

                    <p className="text-neutral-500 text-base font-medium ">
                        Fueled by a passion for style and a commitment to individuality, we embarked 
                        on a mission to curate a collection that speaks to the diverse tates and personalities 
                        of our cherished customers. From our humble beginnings to the vibrant online space we 
                        inhabit today, each milestone represents a chapter in our story. <br/>
                        Join us on this fashion-forward adventure, where every piece tells a tale of inspiration, 
                        dedication, and sartorial elegance.
                    </p>
                </div>
            </div>

            <div className="py-10 px-24">
                <span className="text-neutral-950 text-xs font-bold uppercase">Quality Assurance</span>
                
                <h2 className="text-neutral-950 text-sm font-bold capitalize">
                    We Understand that fashion is an expression of identity, and we take pride 
                    in delivering products that embody the hisghest standards of quality.
                </h2>

                <p className="text-neutral-500 text-base font-medium ">
                    Our journey to excelence begibs with meticulous sourcing, where we carefully select 
                    materials that meet our stringent criteria for durability, comfort, and style. Every 
                    garment is crafted with precision in our state-of-the-art manufacturing facilities, 
                    ensuring attention to detail at every stitch. Our commitment to quality doesn&apos;t 
                    end there - rigorous quality control processes guarantee that each piece meets our 
                    exacting standards before it finds its ways to your wardrobe. Trust in EmmacWardrobe 
                    for fashion that not only captures attention but withstands the test of time.
                </p>

            </div>



        </div>
    )
}