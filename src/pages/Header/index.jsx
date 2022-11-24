const Header = () => {
    return (
        <>
            <header className="px-2 py-1">
                <nav>
                    <div className="logo">
                        <a href="">
                            <img src="./svg/blog-logo.svg" alt="Logo do blog" />
                        </a>
                    </div>
                    <ul className="menu">
                        <li>
                            <a href="">Categorias</a>
                        </li>
                        <li>
                            <a href="">Sobre</a>
                        </li>
                        <li>
                            <a href="">Contato</a>
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
                        <a className="btn" href="">
                            Login
                        </a>
                    </div>

                    <div className="cta-mobile">
                        <a className="link" href="">
                            Login
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;