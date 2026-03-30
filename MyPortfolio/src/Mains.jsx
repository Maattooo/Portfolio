import "./index.css";
import Moon from "./assets/Moon.svg";
import Sun from "./assets/Sun.svg";
import { ColorMode } from "./components/color-mode.js";
import { useState, useEffect } from "react";

function Mains() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
    }, []);

    const handleColorModeToggle = () => {
        ColorMode();
        const newTheme = document.documentElement.getAttribute('data-theme');
        setTheme(newTheme);
    };

    return (
        <main>
            <section className="Home">
                <div className="MyPicture">
                    <img src="/src/assets/Me.png" alt="Martin"/>
                </div>

                <div className="My-descriptions">
                    <div>
                        <h1>Martin Mamaradlo</h1>
                        <button id="color-mode-toggle" onClick={handleColorModeToggle} aria-label="toggle color mode">
                        <img src={theme === 'light' ? Moon : Sun} alt={theme === 'light' ? 'Dark' : 'Light'} />
                        </button>
                    </div>

                    <div>
                        <p>Student | Software Developer </p>
                    </div>
                    
                    <h2>From browser tabs to taskbars, I build software that works where you do.</h2>
                </div>

                
            </section>

            <section className="About">
                <div className="About-Me">
                    <h2>About Me</h2>
                    <p>Hi, I'm Matt, and I'm a developer who makes high-performance software that works where you do. 
                       I connect the power of the desktop with the flexibility of the web. No matter if it's a browser-based 
                       tool or a native system app, my main goal is always the same: to write clean, efficient code that makes 
                       difficult problems easy for users to understand.</p>
                </div>
                <div className="Skills">
                    <h2>Tech Stack</h2>
                    <div className="frontend">
                    <h2>Frontend</h2>
                    <ul>
                        <li>VB.NET</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                    </ul>

                    </div>
                    <div className="backend">
                    <h2>Backend</h2>
                    <ul>
                        <li>C/C++</li> 
                        <li>VB.NET</li>
                        <li>Python</li>
                        <li>SQL</li>
                        <li>PHP</li>
                        <li>REST</li>
                    </ul>
                    </div>

                    <div className="DevTools">
                        <h2>IDE & Tools</h2>
                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Visual Studio</li>
                            <li>VS Code</li>
                            <li>PyCharm</li>
                            <li>XAMPP</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="Projects">
                <h2>Projects</h2>
                <div className="Project-list">
                    <h3>Project 1: Task Manager</h3>
                    <p>A powerful task management application built with VB.NET and C++. It allows users to efficiently organize their tasks, set deadlines, and track progress. The intuitive interface and robust features make it an essential tool for productivity.</p>
                </div>
            </section>
        </main>
    )
}

export default Mains