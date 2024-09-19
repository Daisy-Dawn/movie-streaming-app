import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './components/pages/Home'
import Search from './components/pages/Search'
import MovieDetail from './components/pages/MovieDetail'
import Layout from './components/layout/Layout'

function App() {
    return (
        <div className="app shadow-lg">
            <BrowserRouter>
                <Routes>
                    {/* Wrap all routes with Layout */}
                    <Route path="/" element={<Layout />}>
                        <Route path="" element={<Home />} />
                        <Route path="/search" element={<Search />} />

                        <Route path="/detail/:id" element={<MovieDetail />} />
                        <Route path="/Search/:id" element={<MovieDetail />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
