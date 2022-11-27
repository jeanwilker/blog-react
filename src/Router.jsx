import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// PAGES
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Post from './pages/post';
import Profile from './pages/Profile';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/post/:idPost" element={<Post />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/search" element={<Search />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
