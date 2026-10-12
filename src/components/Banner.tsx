import '../styles/components/Banner.scss';

function Banner() {
  return (
    <section className="banner" aria-labelledby="banner-title">
      <div className="banner__inner">
        <h1 id="banner-title" className="banner__title">
          Venha conhecer nossas promoções
        </h1>
        <p className="banner__subtitle">
          <strong>50% Off</strong> nos produtos
        </p>
        <a className="banner__button" href="#produtos-relacionados">
          Ver produto
        </a>
      </div>
    </section>
  );
}

export default Banner;
