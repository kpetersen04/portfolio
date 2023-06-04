const Interests = () => {
  return (
    <>
      <section className="interests-container section" id="interests">
        <h2>Personal Interests</h2>
        <div className="all-interests-container">
          <div className="interest-container">
            <h3>Hiking</h3>
            <img src="/assets/images/hiking1.jpg" />
            <p className="text _description">
              I grew up hiking the mountains of North Carolina. Since moving to
              the United Kingdom, and becoming a citizen, I’ve taken hiking
              trips to the Lake District, Jurassic Coast, Cornwall and the Peak
              District. Next stop Hadrian's Wall!
            </p>
          </div>
          <div className="interest-container">
            <h3>Baking</h3>
            <img src="/assets/images/baking1.jpg" />
            <p className="text _description">
              I got further into baking during COVID, when I planned a chocolate
              chip cookie and blueberry muffin bake off to find the best recipe.
              <p className="text _description">
                My current pièce de résistance is a brookie; half brownie, half
                cookie.
              </p>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Interests;
