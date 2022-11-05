import "./home.css";

export const Home = () => {
  return (
    <div id="home" className="body">
      <div
        className="container text-center h-100  align-items-center justify-content-center  "
        style={{ minHeight: "100vh" }}
      >
        <h1
          className="home_ani_h1"
          data-aos="slide-left"
          style={{
            paddingTop: "20%",
            letterSpacing: "2px",
            wordSpacing: "5px"
          }}
        >
          {/* vh-100 */}
          <span style={{ color: "grey" }}>I'm</span>
          <u> Mantosh Kumar</u>
        </h1>
        <h1 data-aos="slide-right" className="home_ani_h1">
          <span style={{ color: "grey" }}>I'm a </span>
          <u style={{ textTransform: "uppercase", color: "yellow" }}>
            {" "}
            reactjs Developer
          </u>
        </h1>
        <p
          data-aos="zoom-in-up"
          className="home_ani_p"
          style={{
            textAlign: "left",
            fontSize: "2rem",
            padding: "30px",
            letterSpacing: "2px",
            wordSpacing: "5px"
          }}
        >
          I'm a reactJs developer working on building exceptional digital
          experience for User .Currently I'm a focused on building full stack
          web application.
        </p>
        <a
          data-aos="slide-right"
          href="#project"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="btn btn-outline-primary btn-lg text-white home_ani_a"
          style={{ fontSize: "2rem" }}
        >
          Projects{" "}
          <span>
            {" "}
            <i class=" bi bi-arrow-right-square-fill"></i>
          </span>
        </a>
        <a
          data-aos="slide-left"
          href="./mantosh_Resume(1).pdf"
          target="blank"
          download
          className="btn btn-outline-primary btn-lg m-3 text-white home_ani_a"
          style={{ fontSize: "2rem" }}
        >
          Resume{" "}
          <span>
            {" "}
            <i class="bi bi-download"></i>
          </span>
        </a>
      </div>
    </div>
  );
};
