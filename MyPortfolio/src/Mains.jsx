import "./index.css";
import { FiMoon, FiSun } from "react-icons/fi";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { IoShareSocial, IoSend, IoCloseCircle } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";
import { TbBrandVite, TbBrandJavascript, TbBrandReact, TbBrandNodejs, TbBrandHtml5, TbBrandCss3, TbBrandPython, TbBrandMysql, TbBrandPhp, TbBrandGit, TbBrandGithub, TbBrandVisualStudio, TbBrandVscode } from "react-icons/tb";
import { SiPycharm, SiXampp } from "react-icons/si";
import { MdOutlineFileDownloadOff } from "react-icons/md";
import { ColorMode } from "./components/color-mode.js";
import Modal from "./components/modal.jsx";
import Collapsible from "./components/Collapsible.jsx";
import { useState } from "react";

function Mains() {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const [modalContent, setModalContent] = useState(null);

    const handleColorModeToggle = () => {
        ColorMode();
        const newTheme = document.documentElement.getAttribute('data-theme');
        setTheme(newTheme);
    };

    return (
        <main>
            {}
            <section className="Home" id="Home">
                <div className="MyPicture">
                    <img src={theme === 'light' ? "Me.png" : "MeD.png"} alt="Martin"/>
                </div>

                <div className="My-descriptions">
                    <div className="My-Name">
                        <h1>Martin Mamaradlo</h1>
                        <button id="color-mode-toggle" onClick={handleColorModeToggle} aria-label="toggle color mode">
                        {theme === 'light' ? <FiMoon size={30} /> : <FiSun size={30} />}
                        </button>
                    </div>

                    <div className="My-Bio">
                        <p>Student | Software Developer </p>
                        <h3>From browser tabs to taskbars, I build software that works where you do.</h3>
                    </div>
                    
                    <div className="My-Buttons">
                        <button className="socials" onClick={() => setModalContent('socials')}>
                            <IoShareSocial size={26} />
                            Social Links
                        </button>
                        
                        <button className="contact" onClick={() => setModalContent('contact')}>
                            <IoSend size={26} />
                            Contact Me
                        </button>
                    </div>
                </div>
            </section>

            <section className="About" id="About">
                <div className="About-Me">
                    <h2><GrContactInfo size={30} />About Me</h2>
                        <p>Hi, I'm Matt, and I'm a developer who makes high-performance software that works where you do. 
                        I connect the power of the desktop with the flexibility of the web. No matter if it's a browser-based 
                        tool or a native system app, my main goal is always the same: to write clean, efficient code that makes 
                        difficult problems easy for users to understand.</p>
                        <p>I am currently seeking a tech internship where I can apply my skills and further 
                        develop them by tackling real-world challenges.</p>
                </div>

                <div className="Skills">
                    {}
                    <div className="techstack" id="techstack">
                        <Collapsible title="Tech Stack" defaultOpen={true}>
                            <div className="skills-lists">
                                {}
                                <div className="frontend">
                                    <Collapsible title="Frontend" defaultOpen={false}>
                                        <div className="lists">
                                            <ul>
                                                <li><MdOutlineFileDownloadOff />VB.NET</li>
                                                <li><TbBrandVite />Vite</li>
                                                <li><TbBrandJavascript />JavaScript</li>
                                                <li><TbBrandReact />React</li>
                                                <li><TbBrandNodejs />Node.js</li>
                                                <li><TbBrandHtml5 />HTML5</li>
                                                <li><TbBrandCss3 />CSS3</li>
                                            </ul>
                                        </div>
                                    </Collapsible>
                                </div>

                                {}
                                <div className="backend">
                                    <Collapsible title="Backend">
                                        <div className="lists">
                                            <ul>
                                                <li><MdOutlineFileDownloadOff />C/C++</li>
                                                <li><MdOutlineFileDownloadOff />VB.NET</li>
                                                <li><TbBrandPython />Python</li>
                                                <li><TbBrandMysql />MySQL</li>
                                                <li><TbBrandPhp />PHP</li>
                                            </ul>
                                        </div>
                                    </Collapsible>
                                </div>

                                {}
                                <div className="DevTools">
                                    <Collapsible title="IDE & Tools">
                                        <div className="lists">
                                            <ul>
                                                <li><TbBrandGit />Git</li>
                                                <li><TbBrandGithub />GitHub</li>
                                                <li><TbBrandVisualStudio />Visual Studio</li>
                                                <li><TbBrandVscode />VS Code</li>
                                                <li><SiPycharm />PyCharm</li>
                                                <li><SiXampp />XAMPP</li>
                                            </ul>
                                        </div>
                                    </Collapsible>
                                </div>
                            </div>
                        </Collapsible>
                    </div>
                </div>
            </section>

            {}
            <section className="Projects" id="Projects">
                {}
                <div className="Project-lists">
                    <Collapsible title="Projects" defaultOpen={true}>
                        <div className="lists">
                            <div className="Pageant-System">
                                <div>
                                    <img src="Pageantd.PNG" alt="Pageant System" onClick={() => setModalContent('pageant')}/>
                                </div>
                                <p>Pageant System</p>
                            </div>
                            
                        </div>
                    </Collapsible>

                </div>
                
            </section>
            
            <Modal isOpen={modalContent !== null} onClose={() => setModalContent(null)} className={modalContent ? `modal-${modalContent}` : ''}>
                {}
                {modalContent === 'socials' && (
                    <div className="modals">
                        <div className="modal-head">
                            <h3>Social Links</h3>
                            <button onClick={() => setModalContent(null)} aria-label="Close modal">
                              <IoCloseCircle size={30} />
                            </button>
                        </div>
                        <div className="modal-lists">
                            <a href="https://github.com/Maattooo/" target="_blank"><FaGithub size={40} /></a>
                            <a href="https://www.facebook.com/martinjunio.mamaradlo/" target="_blank"><FaFacebook size={40} /></a>
                            <a href="https://www.instagram.com/mrtn_mmrdlo/" target="_blank"><FaInstagramSquare size={40} /></a>
                            <a href="https://www.linkedin.com/in/martin-mamaradlo/" target="_blank"><FaLinkedin size={40} /></a>
                        </div>
                    </div>

                )}
                {modalContent === 'contact' && (
                    <div className="modals">
                        <div className="modal-head">
                            <h3>Contact Information</h3>
                            <button onClick={() => setModalContent(null)} aria-label="Close modal">
                              <IoCloseCircle size={30} />
                            </button>
                        </div>
                        <div className="modal-list">
                            <a href="https://mail.google.com/mail/u/0/?fs=1&to=mrtn.mmrdlo@gmail.com&su=Inquiry&body=&tf=cm" target="_blank">mrtn.mmrdlo@gmail.com</a>
                        </div>
                    </div>
                )}

                {modalContent === 'pageant' && (
                    <div className="modals" id="Pageant">
                        <div className="modal-head">
                            <h3>Pageant System</h3>
                            <button onClick={() => setModalContent(null)} aria-label="Close modal">
                              <IoCloseCircle size={30} />
                            </button>
                        </div>
                        <div className="Pageant-Scode">
                            <div>
                                <img src="Pageantd.PNG" alt="" />
                            </div>
                            <div className="Pageant-Info">
                                <a href="https://github.com/Maattooo/PageantSystem" target="_blank">
                                    <button>
                                        <TbBrandGithub size={30} />
                                        View Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </main>
    )
}

export default Mains