import { FaSearch, FaMailBulk, FaFacebook, FaPinterest, FaTwitter, FaInstagram,
    FaLock, FaTruck, FaArrowAltCircleLeft, FaKey,
 } from "react-icons/fa";
import contmap from "../assets/FASHION JPG/map.png";
import PropTypes from 'prop-types';

export const Contact = ({
    onClickHome,
    onClickAbout,
    onClickContact,
    name,
    email,
    message,
    onChangeName,
    onChangeEmail,
    onChangeMessage,
}) => {
    return(
        <div className="min-h-full bg-neutral-100">
            <div className="bg-headercont-img bg-cover bg-center pt-1 ">                
                <header className="flex justify-between items-center  py-2 px-12">
                    <ul className="flex space-x-4 items-center">
                        <li><button className="contact-link" type="click" onClick={onClickHome}>Home</button></li>
                        <li><button className="contact-link" type="button">Shop</button></li>
                        <li><button className="contact-link" type="click" onClick={onClickAbout}>About us</button></li>
                        <li><button className="contact-link" type="click" onClick={onClickContact} >Contact us</button></li>
                    </ul>

                    <div className="text-neutral-100 font-extrabold border-b-2 border-solid border-neutral-700 -space-y-1 text-center">
                        <h6 className="text-sm">Emmac</h6>
                        <p className="text-base italic">Wardrobe</p>                        
                    </div>

                    <div className="flex space-x-4">
                        <FaSearch className="contact-icon"/>
                        <FaMailBulk className="contact-icon"/>
                    </div>
                </header>

                <div className="flex justify-center items-center text-center py-32 text-neutral-200 text-5xl italic font-semibold">
                    <p>Contact Us</p>
                </div>    

            </div>

            <div >
                <div className="flex flex-col justify-center items-center text-center px-80 pt-16 pb-10 space-y-3">
                    <h5 className="text-neutral-900 text-sm font-bold uppercase">Get in touch</h5>
                    <p className="text-neutral-900 text-2xl font-medium italic  capitalize">
                        We value the connection with our community and are here to assist in any way we can. 
                        Feel free to reach out through the following channels:

                    </p>
                </div>
                
                <div className="flex justify-between space-x-12 px-24 py-7 w-full ">
                    <div className="w-1/2">
                        <form action="" >
                            <div className="flex flex-col space-y-4">
                                <input className="cont-inp" type="text" value={name} onChange={onChangeName} placeholder="Name" />
                                <input className="cont-inp" type="text" value={email} onChange={onChangeEmail} placeholder="Email" />
                                <textarea className="cont-inp" placeholder="Message" value={message} onChange={onChangeMessage} id="" cols="50" rows="8"></textarea>
                            </div>
                            <input className="text-neutral-600 text-lg font-bold uppercase mt-3 border-2 border-neutral-800 py-2 px-7" type="submit" value="Send"  />
                        </form>
                    </div>

                    <div className="w-1/2 space-y-6">
                        <div className="flex space-x-5 items-center border-b-2 border-neutral-300 pb-6">
                            <div>
                                <h4 className="cont">Phone</h4>
                                <p className="contact">(+234)7050212789</p>
                            </div>
                            <div>
                                <h4 className="cont">Email</h4>
                                <p className="contact">rodrigofemi@gmail.com</p>
                            </div>
                        </div>

                        <div className="border-b-2 border-neutral-300 pb-6">
                            <h4 className="cont">Address</h4>
                            <p className="contact">
                                No20, Winsheter Street, works bus-stop along oyemekun Rd, akure, ondo state.
                            </p>
                        </div>

                        <div className="flex space-x-4 items-center">
                            <h4 className="cont">Follow us</h4>
                            <div className="flex space-x-4 items-center">
                                <FaFacebook className="cont-icon"/>
                                <FaPinterest className="cont-icon"/>
                                <FaTwitter className="cont-icon"/>
                                <FaInstagram className="cont-icon"/>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="pt-10">
                    <img className="w-full h-96" src={contmap} alt="Business Map" />
                </div>

                <div className="px-24 py-20 flex justify-between items-center space-x-11">
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
                <div className="bg-footer-img bg-cover bg-center py-44 pr-20 pl-96   ">
                   <div className="flex flex-col justify-end items-start space-y-5 ml-72">
                        <span className="text-neutral-700 font-bold uppercase">Explore</span> 

                        <h3 className="text-neutral-700 text-3xl font-semibold capitalize">
                        Elevate your wardrobe, embrace timeless style!
                        </h3>

                        <p className="text-neutral-700 text-base font-medium">
                            Explore our collections today and experience the joy of fashion. Shop 
                            now for the epitome of chic sophistication!
                        </p>

                        <button type="button" className="flex justify-end bg-transparent text-neutral-700 uppercase text-base font-semibold border-2 border-neutral-500 py-2 px-4">
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
Contact.propTypes = {
    onClickHome: PropTypes.func.isRequired,
    onClickAbout: PropTypes.func.isRequired,
    onClickContact: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onChangeName: PropTypes.func.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
}