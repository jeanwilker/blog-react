// COMPONENTS
import Hero from './Hero';
import Main from './Main';
import Banner from './Banner';
import Card from './Card';

// FIGURES
import imgStar from '../../svg/icon-star.svg';

// API
import api from '../../services/api';

//HOOKS
import { useState, useEffect } from 'react';

const Home = () => {
    const [main, setMain] = useState([]);
    const [banner, setBanner] = useState([]);
    const [mostSeen, setMostSeen] = useState([]);

    useEffect(() => {
        api.get('/posts?star=5&_limit=2&_order=desc').then((response) => {
            setMain(response.data);
        });

        api.get('/posts?_sort=date_order=desc&_limit=1').then((response) => {
            setBanner(response.data);
        });

        api.get('/posts?-sort=views_order=desc&_limit=3').then((response) => {
            setMostSeen(response.data);
        });
    }, []);

    return (
        <>
            <Hero />

            <section className="container">
                <div className="row">
                    <div className="grid-6">
                        <img
                            src={imgStar}
                            className="icon-l"
                            alt="Icone de estrela dos favoritos"
                        />
                        <h3 className="mt-2">
                            Os melhores e mais bem votados posts do mês.
                        </h3>

                        <p className="mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ornare urna pharetra ut ac, pellentesque.
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ornare urna pharetra ut ac, pellentesque.
                        </p>
                    </div>

                    {main.map((item) => {
                        return <Main key={item.id} content={item} />;
                    })}
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
