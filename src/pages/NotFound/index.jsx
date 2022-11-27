// CONPONENTS
import Header from '../Header';
import Footer from '../Footer';

// IMAGES
import blogImage from '../../svg/blog-logo2.svg';

// LINK
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <Header />

            <section className="container">
                <div className="row flex-center">
                    <img src={blogImage} className="icon-l" alt="" />
                </div>

                <div className="row">
                    <div className="grid-4 disappear"></div>
                    <div className="grid-4">
                        <h1 className="h0 text-center color-primary">404</h1>
                        <h5 className="text-center">Página não encontrada!</h5>
                        <p className="text-center mt-1">
                            A página que você tá procurando não existe ou foi
                            removida. Clique para voltar para o site.
                        </p>

                        <Link to="/" className="btn w-100 mt-3">
                            Voltar para home
                        </Link>
                    </div>
                    <div className="grid-4 disappear"></div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default NotFound;
