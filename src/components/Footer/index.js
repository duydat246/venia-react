import React, { useContext } from 'react';
import './Footer.scss';
import logo from '../../assets/VeniaLogo.svg';
import { GlobalContext } from '../../Contexts/GlobalContext/GlobalContext';
console.log(window.setOpen)

function Footer(props) {
    const { handleSignInClick } = useContext(GlobalContext);
    return (
        <div className="footer-root-39z">
            <div className="footer-links-3az">
                <ul className="footer-linkGroup-235">
                    <li className="footer-linkItem-20r">Account</li>
                    <li className="footer-linkItem-20r"><button onClick={() => handleSignInClick()}>Sign In</button></li>
                    <li className="footer-linkItem-20r">Register</li>
                    <li className="footer-linkItem-20r">Oder Status</li>
                    <li className="footer-linkItem-20r">Returns</li>
                </ul>
                <ul className="footer-linkGroup-235">
                    <li className="footer-linkItem-20r">About Us</li>
                    <li className="footer-linkItem-20r">Our Story</li>
                    <li className="footer-linkItem-20r">Email Signup</li>
                    <li className="footer-linkItem-20r">Give Back</li>
                </ul>
                <ul className="footer-linkGroup-235">
                    <li className="footer-linkItem-20r">Help</li>
                    <li className="footer-linkItem-20r">Live chat</li>
                    <li className="footer-linkItem-20r">Contact Us</li>
                    <li className="footer-linkItem-20r">Oder Status</li>
                    <li className="footer-linkItem-20r">Returns</li>
                </ul>

                <div className="footer-callout-3br">
                    <h3 className="footer-calloutHeading-30h">Follow Us!</h3>
                    <p className="footer-calloutBody-2Bc">Lorem ipsum dolor sit amet, consectetur adipsicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore.</p>
                    <ul className="footer-socialLinks-5tb">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </li>

                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path
                                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                                </path>
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-branding-3vc">
                <a className="footer-logo-15z" href="1">
                    <div className="image-root-gpx image-container-589">
                        <img src={logo} height='18px' width='102px' className="undefined image-loaded-SKT" alt="logo" />
                    </div>
                </a>

                <p className="footer-copyright-35h">Copyright © 2013-present Magento, Inc. All rights reserved.</p>
                <ul className="footer-legal-345">
                    <li>Terms Of Use</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;