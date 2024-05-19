import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title section--title-jnh">
            <span className="safix">Teacher </span> Jamal Naser "Habibi"
          </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              Full Stack Developer
            </span>{" "}
            <br />
          </h1>
          <p className="hero--section-description">
            I'm a seasoned developer, specialized in innovative solutions that
            blend technology and user experience. Explore my work to see how I
            bring creativity and technical expertise together!
          </p>
        </div>

        <Link
          activeClass="navbar--active-content"
          spy={true}
          smooth={true}
          offset={30}
          duration={500}
          to="MyPortfolio"
          className="navbar--content"
        >
          <button className="btn btn-primary hero">Get In Touch</button>
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/about-me.png" alt="Hero Section" />
      </div>
    </section>
  );
}
