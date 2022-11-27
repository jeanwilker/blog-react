import imgBlog from '../../../svg/blog.svg';

// LINK
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <section className="container flex-center">
                <div className="row mt-9">
                    <div className="grid-6">
                        <h1 className="h0">
                            Blog<span>.</span>
                        </h1>
                        <p className="mt-1">
                            Um blog para todos. Escrever. Ler. Comentar.
                            Contribuir. Aprender. Conectar.
                        </p>
                        <Link to="/login" className="btn mt-4">
                            Começar a escrever
                        </Link>
                    </div>

                    <div className="grid-6">
                        <img src={imgBlog} alt="Imagem da logo blog." />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;