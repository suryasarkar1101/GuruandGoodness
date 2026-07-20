import divider from "../../assets/images/divider_below.png";

const Hero = ({ hero }) => {
    return (
        <section className="shop-hero">
            <div className="shop-hero-overlay"></div>

            <div className="shop-hero-content">

                <div className="hero-title">
                    <span>{hero.title1} </span>
                    <span className="golden-title">
                        {hero.title2}
                    </span>
                </div>

                <div className="hero-divider">
                    <img
                        src={divider}
                        alt="Divider"
                        className="divider-img"
                    />
                </div>

                <div className="hero-description">
                    {hero.description}
                </div>

            </div>
        </section>
    );
};

export default Hero;