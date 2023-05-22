import React from 'react';


const NavBar = () => {
    return (
        <>
            <nav className='nav'>
                <div className='nav-title'>
                    <h2 className='nav-agency-title'>TIME TRAVEL AGENCY</h2>
                </div>
                <div className="social">
                        <a href="https://fr-fr.facebook.com/">
                            <img src="/img/fb.png" alt="logo facebook" />
                        </a>
                        <a href="https://www.instagram.com/">
                            <img src="/img/insta.png" alt="logo instagram" />
                        </a>
                        <a href="https://www.tiktok.com/fr/">
                            <img src="/img/tiktok.png" alt="logo tiktok" />
                        </a>
                    </div>
                <div className="parallelogramme">
                    
                </div>

            </nav>

        </>

    );
};

export default NavBar;