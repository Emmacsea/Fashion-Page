import { FaSearch, FaMailBulk, FaLock, FaTruck, FaArrowAltCircleLeft, FaKey, FaStar,
 } from "react-icons/fa";
 import PropTypes from 'prop-types';
 import work from "../assets/FASHION JPG/brooke-cagle-dGK3ynaDNCI-unsplash.jpg";
 import casual from "../assets/FASHION JPG/cesar-la-rosa-MI6UcceQTFY-unsplash.jpg";
 import evening from "../assets/FASHION JPG/christopher-campbell-wtZgw1nQ3FI-unsplash.jpg";
 import casual2 from "../assets/FASHION JPG/engin-akyurt-jaZoffxg1yc-unsplash.jpg";
 import bag from "../assets/FASHION JPG/tamara-bellis-3t6rfsCaWiQ-unsplash.jpg";
 import pro from "../assets/FASHION JPG/aiony-haust-K0DxxljcRv0-unsplash.jpg";
 import fas from "../assets/FASHION JPG/warion-taipei-vSqmb2IX3DM-unsplash.jpg";
 import dress1 from "../assets/FASHION JPG/naeim-jafari-6Xai7XxOgBc-unsplash.jpg";
 import dress2 from "../assets/FASHION JPG/ian-dooley-8HqPXTToMn0-unsplash.jpg";
 import dress3 from "../assets/FASHION JPG/darko-mitev-c5t_j1zlk1Y-unsplash.jpg";
 import dress4 from "../assets/FASHION JPG/judeus-samson-0UECcInuCR4-unsplash.jpg";
 
 

export default function Home ({
    onClickHome,
    onClickContact,
    onClickAbout,
}) {
    return(
        <div className="min-h-full bg-neutral-100">
            <div className="relative bg-headerhme-img bg-cover bg-center pt-1 ">                
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <header className="relative flex justify-between items-center  py-2 px-12">
                    <ul className="flex space-x-4 items-center">
                        <li><button className="home-link" type="click" onClick={onClickHome}>Home</button></li>
                        <li><button className="home-link" type="button">Shop</button></li>
                        <li><button className="home-link" type="click" onClick={onClickAbout}>About us</button></li>
                        <li><button className="home-link" type="click" onClick={onClickContact} >Contact us</button></li>
                    </ul>

                    <div className="text-neutral-100 font-bold border-b-2 border-solid border-neutral-200 -space-y-1 text-center">
                        <h6 className="text-sm">Emmac</h6>
                        <p className="text-base italic">Wardrobe</p>                        
                    </div>

                    <div className="flex space-x-4">
                        <FaSearch className="home-icon"/>
                        <FaMailBulk className="home-icon"/>
                    </div>
                </header>

                <div className="relative flex flex-col space-y-4 justify-center items-center text-center px-24 py-16">
                    <h2 className="text-neutral-100 text-sm font-bold uppercase" >Casual & Everyday</h2>
                    <p className="text-neutral-100 text-3xl font-semibold capitalize">
                        Effortlessly blend comfort & style!
                    </p>
                    <p className="text-neutral-100 text-lg font-medium">
                        Effortlessly blend comfort and style with our Casual & Everyday collection, 
                        featuring cozy sweaters, versatile denim, laid-back tees, and relaxed-fit joggers 
                        for your everyday adventures.
                    </p>
                    <button type="button" className="border-2 border-neutral-300 uppercase text-neutral-200 text-base font-bold py-2 px-5 " >
                        View Collection
                    </button>
                </div>    

            </div>

            <div>
                <div className="px-24 text-center py-16">
                    <h3 className="text-neutral-900 text-2xl font-bold capitalize italic mb-8">Most popular</h3>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="flex flex-col space-y-2 justify-center items-center text-center">
                            <div><img src={work} alt="" /></div>
                            <h4 className="det-head">Work & office</h4>
                            <p className="det-body">Timeless classic collection</p>
                            <span className="det-prize">$124.90</span>                            
                            <div className="flex space-x-4 items-center">
                                <span className="det-size">
                                    XL
                                </span>
                                <span className="det-size">
                                    L
                                </span>
                                <span className="det-size">
                                    M
                                </span>
                                <span className="det-size">
                                    S
                                </span>
                                <span className="det-size">
                                    XS
                                </span>
                            </div>
                            <div className="flex space-x-3 items-center">
                                <span className="rounded-full w-4 h-4 bg-neutral-700"></span>
                                <span className="rounded-full w-4 h-4 bg-green-700"></span>
                                <span className="rounded-full w-4 h-4 bg-red-700"></span>
                                <span className="rounded-full w-5 h-5 bg-transparent border-2 border-neutral-400"></span>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2 justify-center items-center text-center">
                            <div><img src={casual} alt="" /></div>
                            <h4 className="det-head">Casual</h4>
                            <p className="det-body">Bohemian rhapsody attire</p>
                            <span className="det-prize">$145.50</span>                            
                            <div className="flex space-x-4 items-center">
                                <span className="det-size">
                                    XL
                                </span>
                                <span className="det-size">
                                    L
                                </span>
                                <span className="det-size">
                                    M
                                </span>
                                <span className="det-size">
                                    S
                                </span>
                                <span className="det-size">
                                    XS
                                </span>
                            </div>
                            <div className="flex space-x-3 items-center">
                                <span className="rounded-full w-4 h-4 bg-neutral-700"></span>
                                <span className="rounded-full w-4 h-4 bg-green-700"></span>
                                <span className="rounded-full w-4 h-4 bg-red-700"></span>                                
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2 justify-center items-center text-center">
                            <div><img src={evening} alt="" /></div>
                            <h4 className="det-head">Evening Dresses</h4>
                            <p className="det-body">Midnight gala maxi dress</p>
                            <span className="det-prize">$175.00</span>                            
                            <div className="flex space-x-4 items-center">
                                <span className="det-size">
                                    L
                                </span>
                                <span className="det-size">
                                    M
                                </span>                                
                                <span className="det-size">
                                    S
                                </span>
                                <span className="det-size">
                                    XS
                                </span>
                            </div>
                            <div className="flex space-x-3 items-center">
                                <span className="rounded-full w-4 h-4 bg-neutral-700"></span>
                                <span className="rounded-full w-4 h-4 bg-green-700"></span>
                                <span className="rounded-full w-4 h-4 bg-red-700"></span>                                
                                <span className="rounded-full w-5 h-5 bg-transparent border-2 border-neutral-400"></span>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2 justify-center items-center text-center">
                            <div><img src={casual2} alt="" /></div>
                            <h4 className="det-head">Casual</h4>
                            <p className="det-body">Power suit ensemble</p>
                            <span className="det-prize">$125.50</span>                            
                            <div className="flex space-x-4 items-center">
                                <span className="det-size">
                                    XL
                                </span>
                                <span className="det-size">
                                    L
                                </span>
                                <span className="det-size">
                                    M
                                </span>                                
                                <span className="det-size">
                                    S
                                </span>
                                <span className="det-size">
                                    XS
                                </span>
                            </div>
                            <div className="flex space-x-3 items-center">
                                <span className="rounded-full w-4 h-4 bg-neutral-700"></span>
                                <span className="rounded-full w-4 h-4 bg-green-700"></span>
                                <span className="rounded-full w-4 h-4 bg-red-700"></span>                                
                                <span className="rounded-full w-5 h-5 bg-transparent border-2 border-neutral-400"></span>
                            </div>
                        </div>                       

                    </div>

                </div>

                <div className="relative bg-home-img bg-cover bg-center  flex justify-end items-end px-24" >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <div className="relative py-12 w-60 text-center space-y-3">
                                <div><img className="w-full h-72 bg-gradient-to-t from-neutral-800 to-neutral-900" src={bag} alt="" /></div>
                                <h2 className="text-gray-100 text-xl italic font-extrabold capitalize mt-4">
                                    Explore our exquite bage collection now!
                                </h2>
                                <button type="button" className="border-2 border-neutral-6=200 py-2 px-7 text-gray-100 text-lg font-extrabold uppercase">
                                    view Collection
                                </button>
                            </div>
                </div>

                <div className="pl-24 flex justify-between items-center space-x-32 w-full ">
                    <div className="w-1/2 space-y-3 ">
                        <h3 className="text-neutral-900 text-sm font-bold uppercase">
                            Work & office attire
                        </h3>
                        <h1 className="text-neutral-900 text-5xl leading-tight font-bold italic capitalize">
                            Professional pinstripe blazers collection
                        </h1>
                        <p className="text-neutral-500 text-base font-medium ">
                            Elevate your workwear with our Professional Pinstripe Blazers Collection, 
                            where tailored sophistication meets modern confidence for a powersully 
                            polished office look.
                        </p>
                        <button className="text-neutral-800 text-base font-bold uppercase tracking-wider border-2 border-neutral-800 py-2 px-8 ">
                            Shop Now
                        </button>

                    </div>

                    <div className="w-1/2">
                        <img className="w-full " src={pro} alt="" />
                    </div>

                </div>

                <div className="relative bg-home2-img bg-cover bg-center pb-60 px-24 flex justify-start items-start ">
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="flex justify-start items-start w-96"  >
                        <div className="absolute -top-32 z-10"><img className="w-96 h-80" src={fas} alt="" /></div>
                        <div className="relative mt-52 space-y-3 w-full">
                            <h2 className="text-gray-100 text-3xl capitalize font-bold">
                                Discover The allure of fashion reinvented!
                            </h2>
                            <p className="text-neutral-100 text-lg font-bold ">
                                Dive into a world of style with our latest collection! 
                                Shop now and redefine your wardrobe narrative!
                            </p>
                            <button type="button" className="text-neutral-100 text-base uppercase font-bold border-2 border-solid border-neutral-200 py-2 px-7">
                                Shop Now
                            </button>
                        </div>

                    </div>

                </div>

                <div className="flex flex-col justify-center items-center px-24 py-32">
                    <h3 className="text-neutral-900 text-xl font-semibold capitalize">
                        Newest products
                    </h3>
                    <div className="grid grid-cols-4 gap-6 mt-6">
                        <div className="flex flex-col justify-center items-center">
                            <div><img src={dress4} alt="" /></div>
                            <h4 className="det-name">Activewear</h4>
                            <p className="det-title">
                                Weekend Wardrobe
                            </p>
                            <span className="title-prize">$109.99</span>
                        </div>
                        
                        <div className="flex flex-col justify-center items-center">
                            <div><img className="h-full" src={dress2} alt="" /></div>
                            <h4 className="det-name">Activewear</h4>
                            <p className="det-title">
                                Relaxed fit joggers
                            </p>
                            <span className="title-prize">$250.00</span>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div><img src={dress1} alt="" /></div>
                            <h4 className="det-name">Evening Dresses</h4>
                            <p className="det-title">
                                Urban chic ensemble
                            </p>
                            <span className="title-prize">$224.95</span>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div><img src={dress3} alt="" /></div>
                            <h4 className="det-name">Work & Office</h4>
                            <p className="det-title">
                                Weekend Wanderlust Wardrobe
                            </p>
                            <span className="title-prize">$119.95</span>
                        </div>

                    </div>
                </div>

                <div className="bg-homefoot-img bg-cover bg-center px-24 py-28 flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center space-y-3 px-40">
                        <div className="flex space-x-4 items-center">
                            <FaStar className="text-yellow-500 text-lg font-bold "/>
                            <FaStar className="text-yellow-500 text-lg font-bold "/>
                            <FaStar className="text-yellow-500 text-lg font-bold "/>
                            <FaStar className="text-yellow-500 text-lg font-bold "/>
                            <FaStar className="text-yellow-500 text-lg font-bold "/>
                        </div>
                        <div className="text-center space-y-3">
                            <p className="text-neutral-700 text-lg font-semibold capitalize">
                                &quot;
                                    EmmacWardrobe is my fashion sanctuary! The curated collection Effortlessly blends chic 
                                    trends with timeless elegance, making every purchase a delightfull discovery. The quality 
                                    of their pieces is unmatched, and i appreciate the brans&apos;s commitment to sustainable 
                                    fashion. What truly sets EmmacWardrobe apart is their customer-centric approach.
                                &quot;
                            </p>
                            <span className="text-neutral-400 text-sm font-medium">
                                George B. Washignton
                            </span>
                        </div>

                    </div>

                </div>

                <div className="px-24 py-20 flex justify-between items-center space-x-11">yy
                    <div className="space-y-3 flex flex-col justify-center items-center text-center">
                        <div>
                            <FaLock className="cont-icon"/>
                        </div>
                        <h3 className="cont-e">Secure payments</h3>
                        <p className="cont-p">
                            Shop with confidence knowing that your transactions are safeguarded.
                        </p>
                    </div>

                    <div className="space-y-3 flex flex-col justify-center items-center text-center">
                        <div>
                            <FaTruck className="cont-icon"/>
                        </div>
                        <h3 className="cont-e">Free shipping</h3>
                        <p className="cont-p">
                            Shooping with no extra charges savor the liberty of complimentary shipping 
                            on every order.
                        </p>
                    </div>

                    <div className="space-y-3 flex flex-col justify-center items-center text-center">
                        <div>
                            <FaArrowAltCircleLeft className="cont-icon"/>
                        </div>
                        <h3 className="cont-e">Easy returns</h3>
                        <p className="cont-p">
                            With our hassle-free Easy Returns, changing your mind has never 
                            been more convenient.
                        </p>
                    </div>

                    <div className="space-y-3 flex flex-col justify-center items-center text-center">
                        <div>
                            <FaKey className="cont-icon"/>
                        </div>
                        <h3 className="cont-e">Order tracking</h3>
                        <p className="cont-p">
                            Stay in the loop with our Order Tracking feature - from checkout 
                            to your doorstep.
                        </p>
                    </div>

                </div>

            </div>

            <footer className="">
                <div className="relative bg-footer-img bg-cover bg-center py-44 pr-20 pl-96   ">
                    <div className="relative inset-0 bg-black bg-opacity-50"></div>
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
Home.propTypes = {
    onClickHome: PropTypes.func.isRequired,
    onClickContact: PropTypes.func.isRequired,
    onClickAbout: PropTypes.func.isRequired,
}