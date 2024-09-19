import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { Logo } from '../../assets/images'
import './Navbar.css'
import { RiCloseLargeLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import { IoSearch } from 'react-icons/io5'
import { FaBell } from 'react-icons/fa'
import { Input } from '@material-tailwind/react'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [componentMount, setComponentMount] = useState(false)
    const [activeLink, setActiveLink] = useState('')
    const [showSearch, setShowSearch] = useState(false) // Keep track of active link
    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate()

    const handleToggle = () => {
        setToggle(!toggle) // Toggle between showing and hiding the navbar
        if (!componentMount) {
            setComponentMount(true) // Set componentMount to true when toggle is first triggered
        }
    }

    const link1 = [
        { text: 'Home', to: 'home' },
        { text: 'Movies and Shows', to: 'about' },
        { text: 'Support', to: 'skills' },
        { text: 'Suscription', to: 'skills' },
    ]

    // Handle search and navigate based on query changes
    useEffect(() => {
        if (searchQuery) {
            // If search query exists, navigate to search results page
            navigate(`/search?search=${searchQuery}`)
        }
        // else {
        //     // If search query is empty, navigate back to the home page
        //     navigate('/')
        // }
    }, [searchQuery, navigate])

    return (
        <nav className="app__navbar flex flex-col lg:flex-row font-roboto sticky top-0 w-full z-[70] bg-[#070606]  items-center md:h-[120px] lg:h-[100px] h-[100px]">
            <div className="app__navbar-logo">
                <img src={Logo} alt="app__logo" />
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans">
                    <a href="#home">Home</a>
                </li>
                <li className="p__opensans">
                    <a href="#about">Movies and Shows</a>
                </li>
                <li className="p__opensans">
                    <a href="#menu">Support</a>
                </li>
                <li className="p__opensans">
                    <a href="#awards">Subscriptions</a>
                </li>
            </ul>
            <div className=" flex lg:w-[30%] w-full lg:justify-end justify-start items-center gap-2 mt-[0.5rem] lg:mt-0 lg:gap-[1.5rem]">
                {/* <span className="p__opensans">
                    <IoSearch size={20} className="cursor-pointer" />
                </span> */}

                {/* Search Input */}
                <Input
                    color="brown"
                    label="Movie Name"
                    name="movieName"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter Movie name..."
                    className="input w-full py-3 px-3 text-white placeholder-white border-blue border-[1px] input-border"
                />

                <div />
                {/* Bell Icon */}
                <span className="p__opensans">
                    <FaBell size={20} className="cursor-pointer" />
                </span>
            </div>

            {toggle && (
                <div className="fixed inset-0 bg-black md:bg-opacity-50 bg-opacity-30"></div>
            )}

            {/* RESPONSIVENESS */}

            <span
                className="absolute right-[2rem] lg:hidden"
                onClick={handleToggle}
            >
                {toggle ? (
                    <RiCloseLargeLine />
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                )}
            </span>

            <div
                className={`flex flex-col ${
                    !componentMount && !toggle
                        ? 'hidden'
                        : toggle && componentMount
                        ? 'slide-in-left'
                        : 'slide-out-left'
                } items-center justify-center absolute top-0 z-50 w-[65%] md:w-[45%] h-dvh left-0 nav shadow-lg transition-all duration-300 gap-8 lg:hidden`}
            >
                {link1.map((link, index) => (
                    <Link
                        className={`${
                            activeLink === link.to
                                ? 'text-purple'
                                : 'text-white'
                        } text-[1.05rem] hover:text-purple transition-all duration-300 cursor-pointer`}
                        key={index}
                        to={link.to}
                        onClick={() => {
                            setActiveLink(link.to)
                            setToggle(false) // Close the nav with slide-out-left
                        }}
                    >
                        {link.text}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Navbar
