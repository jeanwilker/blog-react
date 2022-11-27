// COMPONENTS
import Header from '../Header';
import Footer from '../Footer';

// IMAGE
import imgBlog from '../../svg/blog.svg';

const About = () => {
    return (
        <>
            <Header />

            <section className="container flex-center">
                <div className="row mt-9">
                    <div className="grid-6">
                        <h1 className="h0">
                            Blog<span>.</span>
                        </h1>
                        <p className="mt-1">
                            O Blog é um projeto desenvolvido em React.js. Clique
                            abaixo para saber de mais informações.
                        </p>
                        <a
                            href="https://github.com/jeanwilker/blog-react"
                            target="_black"
                            className="btn mt-4"
                        >
                            Saber mais
                        </a>
                    </div>

                    <div className="grid-6">
                        <img src={imgBlog} alt="Imagem da logo blog." />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default About;
