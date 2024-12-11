import { FaSearch, FaMailBulk, } from "react-icons/fa";
import PropTypes from 'prop-types';

export const About = ({
    onClickHome,
    onClickAbout,
    onClickContact,
}) => {
    return (
        <div className="min-h-full bg-neutral-100">
            <div className="relative bg-headerabt-img bg-cover bg-center pt-1 ">                
                <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
                <header className="relative flex justify-between items-center  py-2 px-12">
                    <ul className="flex space-x-4 items-center">
                        <li><button className="head-link" type="click" onClick={onClickHome}>Home</button></li>
                        <li><button className="head-link" type="button">Shop</button></li>
                        <li><button className="head-link" type="click" onClick={onClickAbout}>About us</button></li>
                        <li><button className="head-link" type="click" onClick={onClickContact} >Contact us</button></li>
                    </ul>

                    <div className="text-neutral-100 font-bold border-b-2 border-solid border-neutral-100 -space-y-1 text-center">
                        <h6 className="text-sm">Emmac</h6>
                        <p className="text-base italic">Wardrobe</p>                        
                    </div>

                    <div className="flex space-x-4">
                        <FaSearch className="head-icon"/>
                        <FaMailBulk className="head-icon"/>
                    </div>
                </header>

                <div className="relative flex justify-center items-center text-center py-32 text-neutral-100 text-5xl italic font-semibold">
                    <p>About Us</p>
                </div>                

            </div>

            <div className="py-12 mx-24 flex space-x-12 justify-between border-b-2 border-b-neutral-400">
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

            <div className="py-14 mx-24 space-y-5">
                <span className="text-neutral-950 text-xs font-bold uppercase">Quality Assurance</span>
                
                <h2 className="text-neutral-950 text-3xl italic font-bold capitalize">
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

            <div className="relative bg-about-img bg-cover bg-center py-44 pl-24 pr-96 flex flex-col space-y-4 justify-start">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative space-y-3">
                    <span className="text-neutral-100 text-xs font-bold uppercase">Customer-centric approach</span>

                    <h2 className="text-neutral-300 text-4xl font-bold capitalize">
                        Beyond Fashion: Nurturing a customer-centric experience
                    </h2>

                    <p className="text-neutral-200 text-base font-medium ">
                        We believe that the essence of our success lies in the satisfaction of our customers. 
                        Our commitment to providing an exceptional shopping experince goes beyond trends and 
                        styles - It&apos;s about understanding and meeting the unique needs of every individual 
                        who chooses EmmacWardrobe. From personalized  recommendations to hassle-free returns, 
                        We&apos;ve crafted every aspect of our service with you in mind. Our dedicated customer 
                        support team is here to ensure your journey with us is seamless, enjoyable, and exceeds 
                        your expectations. Join our community of empowered fashion enthusiasts, where your 
                        satisfaction is not just a priority; it&apos;s our mission.
                    </p>
                </div>
            </div>

            <div className="px-24 py-11 space-y-8">
                <div className="space-y-4">
                    <span className="text-neutral-900 text-xs font-bold uppercase">Sustainability Initiatives</span>

                    <h3 className="text-neutral-900 text-xl font-bold capitalize italic">
                        Conscious Fashion for a better tommorow
                    </h3>
                </div>

                <div className="flex justify-between space-x-24">
                    <div className="w-1/2">
                        <p className="text-neutral-900 text-base font-bold">
                            We recognize the responsibility we hold in shaping a more sustainable 
                            future for fashion. Our connection to Eco-friendly practices and 
                            sustainable fashion choices is at the care of what we do.
                        </p>
                    </div>

                    <div className="w-1/2 space-y-4">
                        <p className="text-neutral-500 text-base font-semibold">
                            From the careful section of ethically sorced materials to the 
                            implementation of environmentally consious manufacturing processes, 
                            every step we take is a stride toward a greneer and more sustainable industry.
                        </p>

                        <p className="text-neutral-500 text-base font-semibold">
                            We prioritize transparency in our supply chain, partnering with suppliers who 
                            share our values of fair labour practices and environmental stewardship. Our 
                            sustainable fashion choices extend to packaging as well - we use recysclable 
                            materials to mininize our environmental footprint. Join us on this journey towards 
                            consious fashion, where style meets responsibility, and every purchase contributes 
                            to a brighter, eco-friendly tommorow.
                        </p>
                    </div>
                </div>                

            </div>

            <footer className="">
                <div className="relative bg-footer-img bg-cover bg-center py-44 pr-20 pl-96   ">
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                   <div className="relative flex flex-col justify-end items-start space-y-5 ml-72">
                        <span className="text-neutral-100 font-bold uppercase">Explore</span> 

                        <h3 className="text-neutral-100 text-3xl font-semibold capitalize">
                        Elevate your wardrobe, embrace timeless style!
                        </h3>

                        <p className="text-neutral-100 text-base font-medium">
                            Explore our collections today and experience the joy of fashion. Shop 
                            now for the epitome of chic sophistication!
                        </p>

                        <button type="button" className="flex justify-end bg-transparent text-neutral-100 uppercase text-base font-semibold border-2 border-neutral-200 py-2 px-4">
                            Shop now
                        </button>
                   </div>
                </div>

                <div className="flex justify-between items-start px-24 py-11 border-b-2 border-b-solid border-b-neutral-400">
                    <div className="space-y-3">
                        <h2 className="footer-head">Menu</h2>
                        <ul>
                            <li><a className="footer-link" href="#">Home</a></li>
                            <li><a className="footer-link" href="#">Shop</a></li>
                            <li><a className="footer-link" href="#">About us</a></li>
                            <li><a className="footer-link" href="#">Contact us</a></li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h2 className="footer-head">Categories</h2>
                        <ul>
                            <li><a className="footer-link" href="#">Casual</a></li>
                            <li><a className="footer-link" href="#">Work & office</a></li>
                            <li><a className="footer-link" href="#">Activewear</a></li>
                            <li><a className="footer-link" href="#">Evening dresses</a></li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h2 className="footer-head">Resources</h2>
                        <ul>
                            <li><a className="footer-link" href="#">Contact support</a></li>
                            <li><a className="footer-link" href="#">FAQ</a></li>
                            <li><a className="footer-link" href="#">Live chat</a></li>
                            <li><a className="footer-link" href="#">Returns</a></li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h2 className="footer-head">Social media</h2>
                        <ul>
                            <li><a className="footer-link" href="#">Facebook</a></li>
                            <li><a className="footer-link" href="#">Twitter</a></li>
                            <li><a className="footer-link" href="#">Instagram</a></li>
                            <li><a className="footer-link" href="#">Pinterest</a></li>
                        </ul>
                    </div>

                </div>

                <div className="py-7">
                    <p className="text-neutral-800 text-sm font-medium text-center">
                        Copyright &copy; {new Date().getFullYear()} Emmac Clothing Store | Powered by Emmac Store
                    </p>
                </div>

            </footer>



        </div>
    )
}
About.propTypes = {
    onClickHome: PropTypes.func.isRequired,
    onClickAbout: PropTypes.func.isRequired,
    onClickContact: PropTypes.func.isRequired,
}