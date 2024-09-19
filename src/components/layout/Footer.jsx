// import { flower5, footerLogo, phoneIcon, mailIcon } from '../assets'
import { Link } from 'react-router-dom'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
    // const backgroundImageUrl = flower5
    const home = [
        {
            content: 'Home',
            href: '/about',
        },
        {
            content: 'Categories',
            href: '/shop',
        },
        {
            content: 'Devices',
            href: '/blog',
        },
        {
            content: 'Pricing',
            href: '/blog',
        },
        {
            content: 'FAQ',
            href: '/blog',
        },
    ]
    const shows = [
        {
            content: 'Genres',
            href: '/contact',
        },
        {
            content: 'Trending',
            href: '/',
        },
        {
            content: 'New Release',
            href: '/shop',
        },
        {
            content: 'Popular',
            href: '/shop',
        },
    ]
    const movies = [
        {
            content: 'Genres',
            href: '/contact',
        },
        {
            content: 'Trending',
            href: '/',
        },
        {
            content: 'New Release',
            href: '/shop',
        },
        {
            content: 'Popular',
            href: '/shop',
        },
    ]
    const support = [
        {
            content: 'Contact Us',
            href: '/contact',
        },
    ]
    const subscription = [
        {
            content: ' Plans',
            href: '/contact',
        },
        {
            content: ' Features',
            href: '/contact',
        },
    ]

    const socialIconList = [
        {
            icon: <FaTwitter size={19} />,
            href: '#',
            style: 'hover:text-[#55acee]',
            title: 'twitter',
        },
        {
            icon: <FaLinkedinIn size={19} />,
            href: '#',
            style: 'hover:text-[#0077B5]',
            title: 'linkedIn',
        },
        {
            icon: <FaFacebook size={19} />,
            href: '#',
            style: 'hover:text-[#0077B5]',
            title: 'linkedIn',
        },
    ]

    return (
        <div className="flex footer font-manrope flex-col font-nunito">
            <div className="bg-lead md:px-[5rem] lg:px-[2rem] xl:px-[5rem] px-[1.3rem] xl:pt-[5rem] lg:pt-[3rem] pt-[2rem] pb-[2rem] flex flex-col text-steam">
                <div className="grid lg:grid-cols-6 grid-cols-1">
                    <div className="flex flex-col md:gap-[1rem] gap-[0.5rem]">
                        <Link
                            className="text-white font-normal lg:text-[17px]  text-[16px]  mb-1"
                            to="/"
                        >
                            Home
                        </Link>
                        {home.map((link, index) => (
                            <div key={index}>
                                <Link
                                    className="md:text-[15px] text-[13px]"
                                    to={link.href}
                                >
                                    {' '}
                                    {link.content}{' '}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col md:gap-[1rem] gap-[0.5rem] mt-[1.5rem] md:mt-[0]">
                        <Link
                            className="text-white font-normal lg:text-[17px]  text-[16px]  mb-1"
                            to="/"
                        >
                            Movies
                        </Link>
                        {movies.map((link, index) => (
                            <div key={index}>
                                <Link
                                    className="md:text-[15px] text-[13px]"
                                    to={link.href}
                                >
                                    {' '}
                                    {link.content}{' '}
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:gap-[1rem] gap-[0.5rem] mt-[1.5rem] md:mt-[0]">
                        <Link
                            className="text-white font-normal lg:text-[17px]  text-[16px]  mb-1"
                            to="/"
                        >
                            Shows
                        </Link>
                        {shows.map((link, index) => (
                            <div key={index}>
                                <Link
                                    className="md:text-[15px] text-[13px]"
                                    to={link.href}
                                >
                                    {' '}
                                    {link.content}{' '}
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:gap-[1rem] gap-[0.5rem] mt-[1.5rem] md:mt-[0]">
                        <Link
                            className="text-white font-normal lg:text-[17px]  text-[16px]  mb-1"
                            to="/"
                        >
                            Support
                        </Link>
                        {support.map((link, index) => (
                            <div key={index}>
                                <Link
                                    className="md:text-[15px] text-[13px]"
                                    to={link.href}
                                >
                                    {' '}
                                    {link.content}{' '}
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:gap-[1rem] gap-[0.5rem] mt-[1.5rem] md:mt-[0]">
                        <Link
                            className="text-white font-normal lg:text-[17px]  text-[16px]  mb-1"
                            to="/"
                        >
                            Subscription
                        </Link>
                        {subscription.map((link, index) => (
                            <div key={index}>
                                <Link
                                    className="md:text-[15px] text-[13px]"
                                    to={link.href}
                                >
                                    {' '}
                                    {link.content}{' '}
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:gap-[1rem] gap-[0.75rem] mt-[1.5rem] md:mt-[0]">
                        <Link
                            className="text-white font-normal lg:text-[17px]  text-[16px]  mb-1"
                            to="/"
                        >
                            Connect with us
                        </Link>
                        <Link className="md:text-[15px] text-[13px]" to="/h">
                            2118 Thornridge Cir. Syracuse, Connecticut 35624.
                        </Link>
                        <div className="flex gap-5 items-center">
                            <FaPhoneAlt />
                            <a
                                className="md:text-[15px] text-[13px]"
                                href="https://wa.link/o81wxs"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                +234 705 862 5305
                            </a>
                        </div>
                        <div className="flex gap-3 items-center">
                            <MdOutlineMailOutline />
                            <p className="md:text-[15px] text-[13px]">
                                agboella20@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:mt-[4rem] px-[5rem] mb-[2rem] mt-[3rem]">
                <hr className="text-[#999999]  bg-[#999999]" />
                <div className="flex flex-col md:flex-row md:mt-8 mt-4 md:justify-between md:items-center items-start">
                    <div className="mb-[1rem] md:mb-0">
                        <a
                            className=" md:text-[14px] text-[12px] font-normal"
                            href="/"
                        >
                            @2023 streamvib, All Rights Reserved
                        </a>
                    </div>

                    <div className="flex items-center justify-between w-full md:w-fit md:justify-center gap-[1rem]">
                        {socialIconList.map((icon, index) => (
                            <div
                                className="w-[28px] h-[28px]  rounded-full bg-steam flex justify-center items-center "
                                key={index}
                            >
                                <a
                                    href={icon.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {' '}
                                    <span
                                        className={`${icon.style} transition-all duration-300 size-[20px] text-lead`}
                                    >
                                        {icon.icon}
                                    </span>{' '}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
