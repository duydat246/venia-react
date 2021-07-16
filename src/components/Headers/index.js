import React, { useEffect, useState } from 'react';
import logo from '../../assets/VeniaLogo.svg';
import './Headers.scss';


function HeaderSecondary(props) {

    const initialForm = Boolean;
    const [showForm, setShowForm] = useState(initialForm);

    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            event.preventDefault()
            // if (!formRef.current.contains(event.target)) {
            //     setShowForm(false);
            // }
            setShowForm(false);
        })
    })

    const [value, setValue] = useState('');

    const handleValueChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }



    return (
        <div className='header-secondaryActions-X-l'>
            <button className='clickable-root-1G6 searchTrigger-root-3KZ'>
                <span className='icon-root-3D0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon-icon-3jC"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </span>
                <span className='searchTrigger-label'>Search</span>
            </button>

            <div className='accountTrigger-root-1wH'>
                <button className='clickable-root-1G6 accountTrigger-trigger-3YU' onClick={() => setShowForm(!initialForm ? false : true)}>
                    <span className='accountChip-root-3cE'>
                        <span className='icon-root-3D0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon-icon-3jC"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </span>
                        <span>Sign In</span>
                    </span>
                </button>
            </div>


            {showForm ? <aside className='accountMenu-root_open-6PL accountMenu-root-1FL' id='account-contents'>
                <div className='accountMenu-contents_open-31B accountMenu-contents-26Ys'>
                    <div className='signIn-root-3y3'>
                        <h2 className='signIn-title-k0s'>Sign in to Your Account</h2>
                        <form className='signIn-form-1qm'>
                            <div className='field-root-5l0'>
                                <label className='field-label-3pi'>Email address</label>
                                <span className='fieldIcons-root-1Nr' style={{ "--icons-before": '0', "--icons-after": '0' }}>
                                    <span className='fieldIcons-input-3Ip'>
                                        <input className='textInput-input-3vg field-input-2wm' autoComplete='email' name='email' value={value} onChange={handleValueChange}></input>
                                    </span>
                                    <span className='fieldIcons-before-3BN'></span>
                                    <span className='fieldIcons-after-3Ch'></span>
                                </span>
                                <p className='message-root-2kz'></p>
                            </div>

                            <div className='password-root-6l0'>
                                <label className='field-label-3pi'>Password</label>
                                <span className='fieldIcons-root-1Nr' style={{ "--icons-before": '0', "--icons-after": '1' }}>
                                    <span className='fieldIcons-input-3Ip'>
                                        <input type='password' className='textInput-input-3vg field-input-2wm' autoComplete='current-password' name='password' value={value} onChange={handleValueChange}></input>
                                    </span>
                                    <span className='fieldIcons-before-3BN'></span>
                                    <span className='fieldIcons-after-3Ch'>
                                        <button className='clickable-root-1G6 password-passwordButton-3Km button-root-2KE' type='button'>
                                            <span className='button-content-3An'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                                            </span>
                                        </button>
                                    </span>
                                </span>
                                <p className='message-root-2kz'></p>
                            </div>

                            <div className='signIn-forgotPasswordButtonContainer-2Sl'>
                                <button className='clickable-root-1G6 signIn-forgotPasswordButton-2xt linkButton-root-lp9 ' type='button'>
                                    <span className='button-content-3An'>Forgot Password</span>
                                </button>
                            </div>

                            <div className='signIn-buttonContainer-1Ps'>
                                <button className='clickable-root-1G6 button-root_hightPriority button-root-2KE' type='submit'>
                                    <span className='button-content-3An'>Sign In</span>
                                </button>
                                <button className='clickable-root-1G6 button-root_normalPriority button-root-2KE' type='button'>
                                    <span className='button-content-3An'>Create an account</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </aside> : null}

            <div className='cartTrigger-triggerContainer-317'>
                <button className='clickable-root-1G6 cartTrigger-trigger-3P'>
                    <span className='icon-root-3D0'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon-icon-3jC"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    </span>
                </button>
            </div>
        </div>
    )
}



function HeaderPrimaryAction() {
    return (
        <div className='header-primaryActions-11t'>
            <button className='navTrigger-root-vK4 clickable-root-1G6 ' aria-label='Toggle navigation panel'>
                <span className='icon-root-5Pd'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon-icon-3jC"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </span>
            </button>
        </div>
    )
}

function Logo() {
    return (
        <a className='header-logoContainer-3tl' href='/'>
            <div className='image-root-6Ph image-container-_09o'>
                <img src={logo} height='18' width='102' className='header-logo-32P image-loaded-MK0' title='Venia' alt='Venia' />
            </div>
        </a>
    )
}

function MegaMenu() {
    return (
        <nav className='megaMenu-megaMenu-2Kz' role='navigation'>
            <div className='megaMenuItem-megaMenuItem-34K'>
                <a className='megaMenuItem-megaMenuLink-32Kb' href='#'>Bottoms</a>
                <div className='subMenu-subMenu-57Hb'>
                    <div className='subMenu-subMenuItems-1Gl' style={{ minWidth: '473px' }}>
                        <div className='subMenuColumn-subMenuColumn-2MP'>
                            <a className='subMenuColumn-link-3_5' href='#'>
                                <h3 className='subMenuColumn-heading-3zf'>Pants & Shorts</h3>
                            </a>
                        </div>
                        <div className='subMenuColumn-subMenuColumn-2MP'>
                            <a className='subMenuColumn-link-3_5' href='#'>
                                <h3 className='subMenuColumn-heading-3zf'>Skirts</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='megaMenuItem-megaMenuItem-34K'>
                <a className='megaMenuItem-megaMenuLink-32Kb' href='#'>Tops</a>
                <div className='subMenu-subMenu-57Hb'>
                    <div className='subMenu-subMenuItems-1Gl' style={{ minWidth: '473px' }}>
                        <div className='subMenuColumn-subMenuColumn-2MP'>
                            <a className='subMenuColumn-link-3_5' href='#'>
                                <h3 className='subMenuColumn-heading-3zf'>Blouses & Shirts</h3>
                            </a>
                        </div>
                        <div className='subMenuColumn-subMenuColumn-2MP'>
                            <a className='subMenuColumn-link-3_5' href='#'>
                                <h3 className='subMenuColumn-heading-3zf'>Sweaters</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='megaMenuItem-megaMenuItem-34K'>
                <a className='megaMenuItem-megaMenuLink-32Kb' href='#'>Dresses</a>
            </div>

            <div className='megaMenuItem-megaMenuItem-34K'>
                <a className='megaMenuItem-megaMenuLink-32Kb' href='#'>Accessories</a>
                <div className='subMenu-subMenu-57Hb'>
                    <div className='subMenu-subMenuItems-1Gl' style={{ minWidth: '473px' }}>
                        <div className='subMenuColumn-subMenuColumn-2MP'>
                            <a className='subMenuColumn-link-3_5' href='#'>
                                <h3 className='subMenuColumn-heading-3zf'>Belts</h3>
                            </a>
                        </div>
                        <div className='subMenuColumn-subMenuColumn-2MP'>
                            <a className='subMenuColumn-link-3_5' href='#'>
                                <h3 className='subMenuColumn-heading-3zf'>Jewelry</h3>
                            </a>
                        </div>
                        <div className='subMenuColumn-subMenuColumn-2MP'>
                            <a className='subMenuColumn-link-3_5' href='#'>
                                <h3 className='subMenuColumn-heading-3zf'>Scarves</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='megaMenuItem-megaMenuItem-34K'>
                <a className='megaMenuItem-megaMenuLink-32Kb' href='#'>Shop The Look</a>
                <div className='subMenu-subMenu-57Hb'>
                    <div className='subMenu-subMenuItems-1Gl' style={{ minWidth: '473px' }}>
                        <div className='subMenuColumn-subMenuColumn-2MP'>
                            <a className='subMenuColumn-link-3_5' href='#'>
                                <h3 className='subMenuColumn-heading-3zf'>MiniMalist Sensibility</h3>
                            </a>
                        </div>
                        <div className='subMenuColumn-subMenuColumn-2MP'>
                            <a className='subMenuColumn-link-3_5' href='#'>
                                <h3 className='subMenuColumn-heading-3zf'>Outside The Lines</h3>
                            </a>
                        </div>
                        <div className='subMenuColumn-subMenuColumn-2MP'>
                            <a className='subMenuColumn-link-3_5' href='#'>
                                <h3 className='subMenuColumn-heading-3zf'>Carefree Days</h3>
                            </a>
                        </div>
                        <div className='subMenuColumn-subMenuColumn-2MP'>
                            <a className='subMenuColumn-link-3_5' href='#'>
                                <h3 className='subMenuColumn-heading-3zf'>Perfectly Beachy</h3>
                            </a>
                        </div>
                        <div className='subMenuColumn-subMenuColumn-2MP'>
                            <a className='subMenuColumn-link-3_5' href='#'>
                                <h3 className='subMenuColumn-heading-3zf'>Retire your LBD</h3>
                            </a>
                        </div>
                        <div className='subMenuColumn-subMenuColumn-2MP'>
                            <a className='subMenuColumn-link-3_5' href='#'>
                                <h3 className='subMenuColumn-heading-3zf'>Timeless Sophistication</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

function Headers() {
    return (
        <header className='header-closed-24h header-root-3pv' >
            <div className='header-toolbar-5gz'>
                <HeaderPrimaryAction />
                <Logo />
                <MegaMenu />
                <HeaderSecondary />
            </div>
        </header>
    );
}




export default Headers;