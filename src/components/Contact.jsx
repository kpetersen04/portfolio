const Contact = () => {
  return (
    <section
      className="contact
    -container section"
      id="contact"
    >
      <h2>Contact</h2>
      <div className="skills-icon-container contact-container">
        <a
          href="https://github.com/kpetersen04"
          target="_blank"
          rel="noreferrer"
        >
          <i className=" _icon devicon-github-original"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/kirstin-petersen/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="_icon devicon-linkedin-plain"></i>
        </a>
        <a href="mailto:contact.kcpetersen@gmail.com">
          <i className="_icon _email bx bx-envelope" type="solid"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
