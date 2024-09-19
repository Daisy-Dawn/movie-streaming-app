import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/swiper-bundle.min.css'
// import SwiperCore, { Keyboard } from 'swiper'
import {
    Button,
    Buttonhand,
    Buttonplus,
    Buttonvoice,
    Buttonarrow,
    Buttonforward,
} from '../../assets/images'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { format } from 'date-fns'

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'

const Home = () => {
    // Install Swiper modules
    // SwiperCore.use([Keyboard])
    const [movies, setMovies] = useState([])
    const [error, setError] = useState('')
    const TMDB_ACCESS_TOKEN =
        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjgyMDc1MDcxNmQ2MWFmOTFkYmJkMGZjZWEzYjM4OCIsIm5iZiI6MTcyNjcxOTMxNy45MzMzMzgsInN1YiI6IjY2ZWJhM2VmZTQzZjA3ZGU4MmViNmI4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pKOCqyzoYkZbe4PiI51gWUXaJDeX8POHqlUDba7zrwk'

    const [popularMovies, setPopularMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [topRated, setTopRated] = useState([])

    // sources
    let popular = 'popular'
    let upcoming = 'upcoming'
    let top_rated = 'top_rated'

    // Utility function to shuffle an array
    const shuffleArray = (array) => {
        let shuffledArray = [...array]
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i],
            ]
        }
        return shuffledArray
    }

    useEffect(() => {
        // Fetch movies data from the API
        const fetchMovies = async () => {
            try {
                const response = await axios.get(
                    'https://api.themoviedb.org/3/movie/now_playing',
                    {
                        params: { language: 'en-US', page: 1 },
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
                        },
                    }
                )
                // Shuffle the movies data
                setMovies(shuffleArray(response.data.results))
            } catch (error) {
                console.error('Error fetching movies:', error)
            }
        }

        fetchMovies()
    }, []) // Empty dependency array ensures this runs once on mount

    useEffect(() => {
        // fetch popular movies
        const fetchPopularMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${popular}`,
                    {
                        headers: {
                            Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
                        },
                    }
                )
                setPopularMovies(shuffleArray(response.data.results))
            } catch (error) {
                console.error('Error fetching data from TMDb:', error)
            }
        }

        // fetch upcoming movies
        const fetchUpcomingMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${upcoming}`,
                    {
                        headers: {
                            Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
                        },
                    }
                )
                setUpcomingMovies(shuffleArray(response.data.results))
            } catch (error) {
                console.error('Error fetching data from TMDb:', error)
            }
        }
        // fetch topRatedMovies
        const fetchTopRatedMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${top_rated}`,
                    {
                        headers: {
                            Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
                        },
                    }
                )
                setTopRated(shuffleArray(response.data.results))
            } catch (error) {
                console.error('Error fetching data from TMDb:', error)
            }
        }

        fetchPopularMovies()
        fetchUpcomingMovies()
        fetchTopRatedMovies()
    }, [popular, top_rated, upcoming])

    const getFormattedDate = (dateString) => {
        return format(new Date(dateString), 'MMMM d, yyyy')
    }
    return (
        <div className="min-h-[100vh] font-manrope px-[0.5rem] text-[14px] lg:text-[16px] lg:px-[3rem] lg:py-0 py-[1rem]">
            <div className="">
                {error && <p>{error}</p>}

                {movies.length === 0 ? (
                    <p>Loading movies...</p>
                ) : (
                    <>
                        <Swiper
                            autoplay={{
                                delay: 5000, // 5 seconds delay between transitions
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true, // Make pagination bullets clickable
                                dynamicBullets: true, // Dynamically show bullets
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            modules={[Pagination, Autoplay, Navigation]}
                            className="mySwiper"
                        >
                            {movies.map((movie) => (
                                <SwiperSlide
                                    className="my-swipe"
                                    key={movie.id}
                                >
                                    <Link to={'/detail/' + movie.id}>
                                        <div className="relative rounded-[12px] overflow-hidden h-[719px] container group">
                                            {/* Movie Poster Image */}
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                                alt={movie.title}
                                                className="w-full rounded-[12px] h-[719px] object-cover object-top mb-2"
                                            />

                                            {/* Gradient Overlay: Using absolute positioning with a gradient background */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-90 cursor-pointer"></div>

                                            {/* Movie Information */}
                                            <div className="absolute lg:top-[40%] top-[30%] left-1/2 transform -translate-x-1/2 z-20 text-white text-center lg:w-2/3 w-full p-4  rounded-lg group-hover:bg-opacity-40 transition-colors duration-300">
                                                <h2 className="lg:text-[30px] text-[20px] font-bold mb-2">
                                                    {movie.title}
                                                </h2>
                                                <p className="text-center text-[#d3d2d2]">
                                                    {movie.overview}
                                                </p>
                                                <div className="flex flex-col lg:flex-row justify-center mt-[0.5rem] items-center lg:gap-[2rem]">
                                                    <p className="mb-1 text-[#E60000]">
                                                        Release Date:{' '}
                                                        {getFormattedDate(
                                                            movie.release_date
                                                        )}
                                                    </p>
                                                    <p className="mb-1 text-green-300">
                                                        Rating:{' '}
                                                        {movie.vote_average}
                                                    </p>
                                                </div>

                                                <div className="w-full flex justify-center mt-[2rem]">
                                                    <div className="w-[45%] flex justify-center items-center">
                                                        <img
                                                            src={Button}
                                                            className="cursor-pointer"
                                                            alt=""
                                                        />
                                                        <img
                                                            src={Buttonplus}
                                                            className="h-[40px] cursor-pointer w-[40px]"
                                                            alt=""
                                                        />
                                                        <img
                                                            src={Buttonhand}
                                                            className="h-[40px] cursor-pointer w-[40px]"
                                                            alt=""
                                                        />
                                                        <img
                                                            src={Buttonvoice}
                                                            className="h-[40px] cursor-pointer w-[40px]"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Navigation Arrows */}
                                            <div className="absolute lg:bottom-[4rem] bottom-1 cursor-pointer left-[3rem] transform -translate-y-1/2 z-10 swiper-button-prev">
                                                <img src={Buttonarrow} alt="" />
                                            </div>
                                            <div className="absolute lg:bottom-[4rem] bottom-1 cursor-pointer right-[3rem] transform -translate-y-1/2 z-10 swiper-button-next">
                                                <img
                                                    src={Buttonforward}
                                                    alt=""
                                                />
                                            </div>
                                        </div>{' '}
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </>
                )}
            </div>

            <div className="p-10 grid gap-10">
                <div>
                    <div>
                        <h1 className="font-bold text-2xl mb-4 text-white">
                            {' '}
                            Popular Movies
                        </h1>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3  lg:grid-cols-5">
                        {popularMovies?.map((item) => {
                            const formattedDate = format(
                                new Date(item.release_date),
                                'MMMM d, yyyy'
                            )

                            return (
                                <div
                                    key={item.id}
                                    className="shadow-md rounded-md bg-[#1A1A1A] border text-white  border-gray-500"
                                >
                                    <Link
                                        to={'/detail/' + item.id}
                                        key={item.id}
                                    >
                                        <div className="relative">
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                                                alt={item.title}
                                            />
                                        </div>
                                        <div className="px-4 py-6 ">
                                            <h1 className="font-bold text-1xl">
                                                {' '}
                                                {item.original_title}{' '}
                                            </h1>
                                            <p className="font-bold">
                                                Release Date: {formattedDate}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className="font-bold text-2xl mb-4 text-white">
                            {' '}
                            Upcoming Movies{' '}
                        </h1>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3  lg:grid-cols-5">
                        {upcomingMovies?.map((item) => {
                            const formattedDate = format(
                                new Date(item.release_date),
                                'MMMM d, yyyy'
                            )

                            return (
                                <div
                                    key={item.id}
                                    className="shadow-md rounded bg-[#1A1A1A] text-white font-bold"
                                >
                                    <Link
                                        to={'/detail/' + item.id}
                                        key={item.id}
                                    >
                                        <div>
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                                                alt={item.title}
                                            />
                                        </div>
                                    </Link>
                                    <div className="px-4 py-6">
                                        <h1 className="font-bold">
                                            {' '}
                                            {item.original_title}{' '}
                                        </h1>
                                        <p className="semibold">
                                            Release Date: {formattedDate}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className="font-bold text-2xl mb-4 text-white">
                            Top Rated Movies{' '}
                        </h1>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3  lg:grid-cols-5">
                        {topRated?.map((item) => {
                            const formattedDate = format(
                                new Date(item.release_date),
                                'MMMM d, yyyy'
                            )

                            return (
                                <div
                                    key={item.id}
                                    className="shadow-md rounded bg-[#1A1A1A] text-white   font-bold"
                                >
                                    <Link
                                        to={'/detail/' + item.id}
                                        key={item.id}
                                    >
                                        <div>
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                                                alt={item.title}
                                            />
                                        </div>
                                    </Link>
                                    <div className="px-4 py-6">
                                        <h1 className="font-bold">
                                            {' '}
                                            {item.original_title}{' '}
                                        </h1>
                                        <p className="semibold">
                                            Release Date: {formattedDate}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
