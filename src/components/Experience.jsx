const Experience = () => {
  return (
    <section className="experience-container section" id="experience">
      <h2>Experience</h2>
      <div className="job-container">
        <p className="_business">General Assembly</p>
        <p className="_job-name">Software Engineering Immersive</p>
        <p className="_date">November 2022 - May 2023</p>
        <p className="_description">
          Part-time software engineering immersive course held over Zoom and
          Slack on Tuesday and Thursday nights from 18:00 to 22:00 and Saturdays
          from 10:00 to 17:00. Throughout the course we had regular stand-ups
          and pair programming opportunities and I completed four main projects.
        </p>
      </div>
      <div className="job-container">
        <h3>Wise</h3>
        <p className="_job-name">WiseWomenCode Spring Insights Day</p>
        <p className="_date">27 March 2023 - 29 March 2023</p>
        <p className="_description">
          Shadowed a Wise full-stack Software Engineer for a day Gained insight
          into Product Engineering, Security and Machine Learning Participated
          in a coding workshop working with APIs to create quotes, recipients
          and transfers for payment
        </p>
      </div>
      <div className="job-container">
        <h3>University of London</h3>
        <p className="_job-name">Laws Manager (Student Support and Events)</p>
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
