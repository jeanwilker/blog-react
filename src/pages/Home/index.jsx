// COMPONENTS
import Hero from './Hero';
import Main from './Main';
import Banner from './Banner';
import Card from './Card';

// FIGURES
import imgStar from '../../svg/icon-star.svg'


const Home = () => {
    return (
        <>
            <Hero />

            <section className="container">
                <div className="row">
                    <div className="grid-6">
                        <img src={imgStar} className="icon-l" alt="Icone de estrela dos favoritos" />
                        <h3 className="mt-2">Os melhores e mais bem votados posts do mês.</h3>
                    
                        <p className="mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque.
                        </p>
                    </div>

                    <Main />
                    
                </div>
            </section>

            <Banner />

            <section className="container">
                <h3 className="ml-2 mb-3">Mais vistos</h3>
                <div className="row">

                    <Card />

                </div>
            </section>
        </>
    );
};

export default Home;
