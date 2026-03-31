import "./index.css";
import { openSidebar, closeSidebar } from "./components/navbar.js";
import { FaAngleLeft } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState, useRef } from "react";

function Header() {
    const [isHidden, setIsHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // 1. If scrolling down and passed a certain distance (e.g., 150px)
            if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
                setIsHidden(true);
            } 
            // 2. If scrolling up
            else {
                setIsHidden(false);
            }
            
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ... Keep your existing useEffect for the nav-slider here ...
    useEffect(() => {
        const navLinks = document.querySelectorAll(".nav-link");
        const slider = document.querySelector(".nav-slider");
        function moveSlider(element) {
            if (!element || !slider) return;
            slider.style.width = `${element.offsetWidth}px`;
            slider.style.left = `${element.offsetLeft}px`;
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    const activeAnchor = document.querySelector(`.nav-link[href="#${id}"]`);
                    navLinks.forEach(link => link.classList.remove('active-link'));
                    if (activeAnchor) {
                        activeAnchor.classList.add('active-link');
                        moveSlider(activeAnchor);
                    }
                }
            });
        }, { threshold: 0.6 });
        document.querySelectorAll("section[id]").forEach(section => observer.observe(section));
        const currentActive = document.querySelector(".active-link");
        if (currentActive) moveSlider(currentActive);
        window.addEventListener('resize', () => moveSlider(document.querySelector(".active-link")));
    }, []);

    return (
        // Add the dynamic class here
        <header className={isHidden ? "header-hidden" : ""}>
            <h1 id="title">My Portfolio</h1>
            <button id="open-sidebar" onClick={openSidebar} aria-label="open sidebar">
                <IoMenu />
            </button>
            <nav id="navbar">
                <ul>
                    <li>
                        <button id="close-sidebar" onClick={closeSidebar}>
                            <FaAngleLeft />
                        </button>
                    </li>
                    <li><a href="#Home" className="nav-link active-link" onClick={closeSidebar}>Home</a></li>
                    <li><a href="#About" className="nav-link" onClick={closeSidebar}>About</a></li>
                    <li><a href="#Projects" className="nav-link" onClick={closeSidebar}>Projects</a></li>
                    <span className="nav-slider"></span>
                </ul>
            </nav>
        </header>
    );
}

export default Header;