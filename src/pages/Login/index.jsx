// COMPONENTS
import Header from '../Header';
import Footer from '../Footer';

// IMAGES
import blogLogo from '../../svg/blog-logo2.svg';

const Login = () => {
    return (
        <>
            <Header />

            <section className="container">
                <div className="row flex-center">
                    <img src={blogLogo} className="icon-l" alt="Logo blog." />
                </div>

                <div className="row">
                    <div className="grid-4 disappear"></div>
                    <div className="grid-4">
                        <h6 className="text-center">
                            Olá, faça o login para continuar.
                        </h6>

                        <input
                            type="text"
                            className="mt-2"
                            name="user"
                            id=""
                            placeholder="Digite seu usuário"
                        />
                        <input
                            type="password"
                            className="mt-1"
                            name="password"
                            id=""
                            placeholder="Digite sua senha"
                        />

                        <button className="btn w-100 mt-2">Entrar</button>
                    </div>
                    <div className="grid-4 disappear"></div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Login;
