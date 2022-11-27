import logoHeader from '../../svg/blog-logo.svg';

// LINK
import { Link } from 'react-router-dom';

const Header = () => {
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

                <div className="bx"></div>

                <div className="flex-start-row">
                    <div className="search">
                        <form className="flex">
                            <input
                                type="text"
                                name="search"
                                placeholder="Buscar..."
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
                <div className="menu-mobile">
                    <ul className="nav-mobile">
                        <li>
                            <Link href="/about" className="nav-mobile__link">
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="nav-mobile__link">
                                Contato
                            </Link>
                        </li>
                        <li className="py-2 px-2">
                            <form className="flex">
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="Buscar..."
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
