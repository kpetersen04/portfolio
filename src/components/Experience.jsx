const Experience = () => {
  return (
    <section className="experience-container section" id="experience">
      <h2>Tech Experience</h2>
      <div className="job-container">
        <div className="experience-heading-container">
          <img src="/assets/images/ctmLogo.png" />
          <h3 className="_business">Compare the Market</h3>
        </div>
        <p className="_job-name">Technology Intern</p>
        <p className="_date">June 2023 - August 2023</p>
        <ul className="_description">
          <li>
            10-week internship within the Mobile Team where I contributed to 14
            business-relevant tickets for Platform and Experience.
          </li>
          <li>
            Conducted through testing and code reviews, contributing to team
            priorities and ensuring sprint deadlines were met.
          </li>
          <li>
            Produced comprehensive unit tests, ensuring code quality and
            reliability.
          </li>
          <li>
            Collaborated with other engineers in regular pairing sessions to
            enhance my coding skills and incorporate best practices.
          </li>
          <li>
            Actively participated in regular bug bashes, sprint planning and
            Jira ticket refinement meetings.
          </li>
          <li>
            Played a key role as a member of the winning team at the Run and
            Trade Innovation Day, generating customer focused ideas for business
            enhancement.
          </li>
          <li>
            Utilized tools and key software development practices including
            GitLab, pipelines, Jira, CI/CD and agile methodologies to support
            project management and development processes.
          </li>
          <li>
            Engaged in daily standup meetings to provide updates on progress and
            discuss team priorities.
          </li>
        </ul>
      </div>
      <div className="job-container">
        <div className="experience-heading-container">
          <img src="https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png" />
          <h3 className="_business">General Assembly</h3>
        </div>
        <p className="_job-name">Software Engineering Immersive</p>
        <p className="_date">November 2022 - May 2023</p>
        <ul className="_description">
          <li>
            Part-time software engineering immersive course held over Zoom and
            Slack on Tuesday and Thursday as well as all day Saturday.
          </li>
          <li>
            Participated in regular stand-ups and pair programming opportunities
            and I completed four main projects.
          </li>
        </ul>
      </div>
      <div className="job-container">
        <div className="experience-heading-container">
          <img src="/assets/images/wiseLogo.png" />
          <h3 className="_business">Wise</h3>
        </div>
        <p className="_job-name">WiseWomenCode</p>
        <p className="_date">27 March 2023 - 29 March 2023</p>
        <ul className="_description">
          <li>
            Selected from 100+ applicants to take part in the 3-day
            WiseWomenCode insight programme at the Wise London office.{" "}
          </li>
          <li>
            I attended lectures on Machine Learning, Product Engineering and
            Security, along with coding workshops using APIs to create quotes,
            recipients and transfers for payment.{" "}
          </li>
          <li>
            I also shadowed a full-stack Wise Software Engineer which included
            attending team planning meetings, completing a ticket to update
            content on the Wise website and participating in a pair programming
            session.
          </li>
        </ul>
      </div>
      <h2>Previous Experience</h2>
      <div className="job-container">
        <div className="experience-heading-container">
          <img src="/assets/images/uolLogo.png" />
          <h3 className="_business">University of London</h3>
        </div>
        <p className="_job-name">Laws Manager</p>
        <p className="_date">December 2018 - June 2023</p>
        <ul className="_description">
          <li>
            Student relationship professional responsible for the delivery of
            key communications to students across multiple platforms, the
            planning and delivery of annual study events and enhancing the
            student experience through detailed advice and problem solving.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
