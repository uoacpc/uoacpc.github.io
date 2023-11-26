import React from 'react';
// import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
        <div className="bottomSetter">
            <header>
                <div className="navBar">
                    <div className="navBarButtons">
                        <Link to="/">
                            <img src="/images/CPCLogo.png" className='navBarImage' alt="CPCLogo"/>
                        </Link>
                    </div>
                    <a href="https://forms.gle/KNQsRjctczBmYrg86" title="join" className='navBarButtons'>Join</a>
                    <Link to="/about" className='navBarButtons'>About</Link>
                    <Link to="/sponsors" className='navBarButtons'>Sponsors</Link>
                </div>
                <div className='headerContainer'>
                    <img src="/images/CPCLogoText.png" className='headerContainerImage' alt="CPCLogoText"/>
                </div>
            </header>

            <section>
                <div className="blog">
                    <Outlet/>
                </div>
            </section>
        </div>
        <footer>
            <span className="footerText">Find us</span> 
            <br/><br/>
            <img src="/images/CPCLogo.png" className="footerLogo" alt="CPCLogo"/>&nbsp;
            <a href="https://www.facebook.com/groups/uoacpc" title="Facebook">
                <img src="/images/fbLogo.png" className="footerLogo" alt="fbLogo"/>
            </a>&nbsp;
            <a href="https://discord.gg/9yBJs68Sj4" title="Discord">
                <img src="/images/discordLogo.png" className="footerLogo" alt="discordLogo"/>
            </a>&nbsp;
            <a href="https://www.linkedin.com/company/competitive-programming-club-of-the-university-of-adelaide/" title="Linkedin">
                <img src="/images/linkedinLogo.png" className="footerLogo" alt="linkedinLogo"/>
            </a>
            <br/><br/>
            © 2018-{new Date().getFullYear()} Competitive Programming Club. All rights reserved 2023.
        </footer>
    </>
  );
}

export default App;
