import imgBanner from '../../../img/05.png';

const Banner = () => {
    return (
        <>
            <section className="container">
                <div className="img-banner hidden">
                    <img src={imgBanner} alt="" />
                </div>
                <div className="row mt-3">
                    <h6 className="color-gray text-center">01 NOV 2022</h6>
                    <h6 className="uppercase color-primary text-center">
                        Criptomoedas
                    </h6>
                    <a href="" className="link-title">
                        <h2 className="mt-1 text-center">
                            Ainda vale a pena comprar Bitcoin em 2022?
                        </h2>
                    </a>

                    <p className="my-2 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ornare urna pharetra ut ac, pellentesque.
                    </p>
                    <div className="flex-center">
                        <a href="" className="link p-0">
                            Ler mais
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
