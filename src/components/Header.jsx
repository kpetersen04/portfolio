import $ from "jquery";

const Header = () => {
  const onClick = (e) => {
    e.preventDefault();
    const offset = $("#heading").outerHeight();
    const targetOffset =
      $($(e.currentTarget).attr("href")).offset().top - offset;
    $("html, body").animate(
      {
        scrollTop: targetOffset,
      },
      500
    );
  };
  return (
    <div className="header-container" id="heading">
      <nav>
        <ul className="menu">
          <li className="about">
            <a href="#about" onClick={onClick}>
              About
            </a>
          </li>
          <div className="core-header">
            <li>
              <a href="#projects" onClick={onClick}>
                Projects
              </a>
            </li>
            <li>
              <a href="#skillsList" onClick={onClick}>
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" onClick={onClick}>
                Experience
              </a>
            </li>
            <li>
              <a href="#interests" onClick={onClick}>
                Interests
              </a>
            </li>
            <li>
              <a href="#contact" onClick={onClick}>
                Contact
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
