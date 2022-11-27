// COMPONENTS
import Header from '../Header';
import Footer from '../Footer';

// IMAGES
import iconLinkedin from '../../svg/icon-linkedin.svg';
import iconGithub from '../../svg/icon-github.svg';
import iconInstagram from '../../svg/icon-instagram.svg';

const Contact = () => {
    function onSubmit(event) {
        event.preventDefault();
    }

    return (
        <>
            <Header />

            <section className="container">
                <div className="row">
                    <div className="grid-6">
                        <h3>Entre em contato</h3>
                        <p>
                            Aqui você vai conseguir mais informações sobre o
                            projeto Blog utilizando React.js.
                        </p>
                        <form onSubmit={onSubmit}>
                            <input
                                type="text"
                                name="name"
                                className="mt-2"
                                placeholder="Nome"
                            />
                            <input
                                type="email"
                                name="email"
                                className="mt-2"
                                placeholder="E-mail"
                            />
                            <textarea
                                name="content"
                                rows="8"
                                className="mt-2"
                                placeholder="Mensagem"
                            ></textarea>
                            <button className="btn mt-2">Enviar</button>
                        </form>
                    </div>
                    <div className="grid-1 disappear"></div>
                    <div className="grid-5">
                        <h5 className="mt-4">Algumas informações</h5>

                        <h6 className="color-primary mt-4">Info.</h6>
                        <p>
                            Projeto Blog. Desenvolvido em React.js por Jean
                            Wilker.
                        </p>

                        <h6 className="color-primary mt-4">Address</h6>
                        <p>Salvador, BA.</p>

                        <h6 className="color-primary mt-4">E-mail</h6>
                        <p>jeanwilkerss@gmail.com</p>

                        <h6 className="color-primary mt-4">Redes sociais</h6>
                        <div className="mt-2">
                            <a href="https://www.linkedin.com/in/jeanwilkerss/" target="_black">
                                <img
                                    src={iconLinkedin}
                                    className="icon-s"
                                    alt="Ícone de redirecionamento linkedin"
                                />
                            </a>
                            <a href="https://github.com/jeanwilker" target="_black">
                                <img
                                    src={iconGithub}
                                    className="icon-s"
                                    alt="Ícone de redirecionamento github"
                                />
                            </a>
                            <a href="https://www.instagram.com/wilker.ss/" target="_black">
                                <img
                                    src={iconInstagram}
                                    className="icon-s"
                                    alt="Ícone de redirecionamento Instagram"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Contact;
