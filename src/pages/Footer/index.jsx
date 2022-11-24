import logoFooter from '../../svg/blog-logo2.svg';
import iconFacebook from '../../svg/icon-facebook.svg';
import iconInstagram from '../../svg/icon-instagram.svg';
import iconYoutube from '../../svg/icon-youtube.svg';
import iconTwitter from '../../svg/icon-twitter.svg';

const Footer = () => {
    return (
        <>
            <footer className="bg-section bt-black">
                <section className="container pb-0 ">
                    <div className="row flex-center">
                        <img
                            src={logoFooter}
                            style={{ maxWidth: '96px' }}
                            alt="Logo do footer"
                        />
                    </div>

                    <div className="row pb-3 bb-black">
                        <div className="grid-3">
                            <h4>Posts</h4>
                            <div className="flex-start-column mt-2">
                                <a href="#" className="color-gray link-footer">
                                    Mais vistos
                                </a>
                                <a href="#" className="color-gray link-footer">
                                    Mais comentados
                                </a>
                                <a href="#" className="color-gray link-footer ">
                                    Mais populares
                                </a>
                                <a href="#" className="color-gray link-footer">
                                    Mais recentes
                                </a>
                            </div>
                        </div>

                        <div className="grid-3">
                            <h4>Categorias</h4>
                            <div className="flex-start-column mt-2">
                                <a href="#" className="color-gray link-footer">
                                    Tecnologia
                                </a>
                                <a href="#" className="color-gray link-footer">
                                    Games
                                </a>
                                <a href="#" className="color-gray link-footer">
                                    Fotografia
                                </a>
                                <a href="#" className="color-gray link-footer">
                                    Cinema
                                </a>
                            </div>
                        </div>

                        <div className="grid-6">
                            <h4 className="mb-2">
                                Quer ser avisado dos novos posts do blog?
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ornare urna pharetra ut ac,
                                pellentesque.
                            </p>
                            <div className="flex-start-row mt-2">
                                <input
                                    type="text"
                                    name="search"
                                    id=""
                                    placeholder="Digite seu e-mail aqui"
                                />
                                <button className="btn ml-2">Cadastrar</button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="grid-9">
                            <p>
                                2022 | Todos os direitos reservados. Projeto de
                                React.js feito por Jean Wilker.
                            </p>
                        </div>

                        <div className="grid-3">
                            <img
                                src={iconFacebook}
                                className="icon-s"
                                alt="Ícone facebook."
                            />
                            <img
                                src={iconInstagram}
                                className="icon-s ml-2"
                                alt="Ícone instagram."
                            />
                            <img
                                src={iconYoutube}
                                className="icon-s ml-2"
                                alt="Ícone youtube."
                            />
                            <img
                                src={iconTwitter}
                                className="icon-s ml-2"
                                alt="Ícone twitter."
                            />
                        </div>
                    </div>
                </section>
            </footer>
        </>
    );
};

export default Footer;
