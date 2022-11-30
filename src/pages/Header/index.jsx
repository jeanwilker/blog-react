import logoHeader from '../../svg/blog-logo.svg';

// LINK
import { Link, useNavigate } from 'react-router-dom';

//HOOKS
import { useState } from 'react';

const Header = () => {
    //SEARCH
    const initialValueForm = {
        search: '',
    };

    const [form, setForm] = useState(initialValueForm);

    function onChange(event) {
        const { value, name } = event.target;

        setForm({ ...form, [name]: value });
    }

    const navigate = useNavigate();

    function handleSearch(event) {
        event.preventDefault();

        navigate(`/search/${form.search}`);
    }

    // MENU MOBILE
    const [active, setActive] = useState(false);

    const toggleMode = () => {
        setActive(!active);
    };

    return (
        <>
            <header className="px-2 py-1">
                <nav>
                    <div className="logo">
                        <Link to="/">
                            <img src={logoHeader} alt="Logo do blog" />
                        </Link>
                    </div>
                    <ul className="menu">
                        <li>
                            <Link to="/about">Sobre</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contato</Link>
                        </li>
                    </ul>
                </nav>

                <div
                    className={active ? 'bx active-bx' : 'bx'}
                    onClick={toggleMode}
                ></div>

                <div className="flex-start-row">
                    <div className="search">
                        <form className="flex" onSubmit={handleSearch}>
                            <input
                                type="text"
                                name="search"
                                placeholder="Buscar..."
                                onChange={onChange}
                            />
                            <button className="btn-search"></button>
                        </form>
                    </div>

                    <div className="cta-desktop ml-3">
                        <Link className="btn" to="/login">
                            Login
                        </Link>
                    </div>

                    <div className="cta-mobile">
                        <Link className="link" to="/login">
                            Login
                        </Link>
                    </div>
                </div>
            </header>

            <div className="relative">
                <div
                    className={active ? 'menu-mobile showmenu' : 'menu-mobile'}
                >
                    <ul className="nav-mobile">
                        <li>
                            <Link to="/about" className="nav-mobile__link">
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="nav-mobile__link">
                                Contato
                            </Link>
                        </li>
                        <li className="py-2 px-2">
                            <form className="flex" onSubmit={handleSearch}>
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="Buscar..."
                                    onChange={onChange}
                                />
                                <button className="btn-search"></button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;
