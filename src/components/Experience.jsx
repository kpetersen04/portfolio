const Experience = () => {
  return (
    <section className="experience-container section" id="experience">
      <h2>Experience</h2>
      <div className="job-container">
        <div className="experience-heading-container">
          <img src="https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png" />
          <h3 className="_business">General Assembly</h3>
        </div>
        <p className="_job-name">Software Engineering Immersive</p>
        <p className="_date">November 2022 - May 2023</p>
        <p className="_description">
          Part-time software engineering immersive course held over Zoom and
          Slack on Tuesday and Thursday nights from 18:00 to 22:00 and Saturdays
          from 10:00 to 17:00.{" "}
        </p>
        <p className="_description">
          Throughout the course we had regular stand-ups and pair programming
          opportunities and I completed four main projects.
        </p>
      </div>
      <div className="job-container">
        <div className="experience-heading-container">
          <img src="./src/assets/images/wiseLogo.png" />
          <h3 className="_business">Wise</h3>
        </div>
        <p className="_job-name">WiseWomenCode</p>
        <p className="_date">27 March 2023 - 29 March 2023</p>
        <p className="_description">
          Selected from 100+ applicants to take part in the 3-day WiseWomenCode
          insight programme at the Wise London office.{" "}
        </p>
        <p className="_description">
          I attended lectures on Machine Learning, Product Engineering and
          Security, along with coding workshops using APIs to create quotes,
          recipients and transfers for payment.{" "}
        </p>
        <p className="_description">
          I also shadowed a full-stack Wise Software Engineer which included
          attending team planning meetings, completing a ticket to update
          content on the Wise website and participating in a pair programming
          session.
        </p>
      </div>
      <div className="job-container">
        <div className="experience-heading-container">
          <img src="./src/assets/images/uolLogo.png" />
          <h3 className="_business">University of London</h3>
        </div>
        <p className="_job-name">Laws Manager</p>
        <p className="_date">December 2018 - June 2023</p>
        <p className="_description">
          Student relationship professional responsible for the delivery of key
          communications to students across multiple platforms, the planning and
          delivery of annual study events and enhancing the student experience
          through detailed advice and problem solving.
        </p>
      </div>
    </section>
  );
};

export default Experience;
