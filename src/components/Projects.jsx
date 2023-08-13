const Projects = () => {
  return (
    <section className="projects-container section" id="projects">
      <h2>Projects</h2>
      <div className="project-container">
        <img className="_project-images" src="/assets/images/homePageP4.png" />
        <h3 className="_project-title">Wild Swimming</h3>
        <p>
          JavaScript - React - Sass - Bootstrap - Cloudinary - Python - Django -
          PostgreSQL - JWT - Heroku - Netlify
        </p>
        <p className="_project-type"> Independent Project </p>
        <p className=" _description">
          A full stack, responsive application that allows users to explore a
          list of wild swimming spots across the United Kingdom. Through their
          personal profile accounts, users can save their favorite sites, leave
          comments on swim spots, and even have the ability to edit or delete
          their own comments.
        </p>
        <div className="_project-links">
          <a
            href="https://github.com/kpetersen04/Wild-Swimming-APP"
            target="_blank"
            rel="noreferrer noopener"
          >
            Repo
          </a>
          <a
            href="https://wild-swimming.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Live Site
          </a>
        </div>
      </div>
      <div className="project-container">
        <img className="_project-images" src="/assets/images/homePageP3.png" />
        <h3 className="_project-title">Design My Trip</h3>
        <p>
          JavaScript - React - Sass - Bootstrap - Node.js - Express.js - JWT -
          MongoDB{" "}
        </p>
        <p className="_project-type"> Group Project </p>
        <p className=" _description">
          A a full stack MERN application with CRUD functionality. A travel
          planning website that allows users to add and delete activities to
          their personal itinerary as well as add a new activity and edit any
          activity they initially created.
        </p>
        <div className="_project-links">
          <a
            href="https://github.com/kpetersen04/Travel-App"
            target="_blank"
            rel="noreferrer noopener"
          >
            Repo
          </a>
          <a
            href="https://designmytrip.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Live Site
          </a>
        </div>
      </div>
      <div className="project-container">
        <img
          className="_project-images"
          src="https://i.imgur.com/uBfmXGP.png"
        />
        <h3 className="_project-title">Currency Convertor</h3>
        <p>JavaScript - React - Axios - HTML - CSS - Sass - Netlify</p>
        <p className="_project-type"> Independent Project </p>
        <p className=" _description">
          A React SPA consuming a public API that allows the user to convert up
          to 30 different currencies. It also lists all currencies, currency
          codes and the conversion rate for each currency.
        </p>
        <div className="_project-links">
          <a
            href="https://github.com/kpetersen04/Currency-converter"
            target="_blank"
            rel="noreferrer noopener"
          >
            Repo
          </a>
          <a
            href="https://musical-pothos-740b29.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Live Site
          </a>
        </div>
      </div>

      <div className="project-container">
        <img
          className="_project-images"
          src="https://kpetersen04.github.io/images/landingpage:start.gif"
        />
        <h3 className="_project-title">PokeMan Game</h3>
        <p>JavaScript - HTML - CSS</p>
        <p>Independent Project</p>
        <p className=" _description">
          A Pokemon-themed, Pacman-inspired game built with HTML, CSS and
          vanilla JavaScript. Players try to catch as many pokemon as they can
          while avoiding Team Rocket. Project One of the General Assembly
          Software Engineering Immersive Course.
        </p>
        <div className="_project-links">
          <a
            href="https://github.com/kpetersen04/kpetersen04.github.io"
            target="_blank"
            rel="noreferrer noopener"
          >
            Repo
          </a>
          <a
            href="https://kpetersen04.github.io/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Live Site
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
