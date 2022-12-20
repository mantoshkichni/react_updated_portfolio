import clogo from "../images/C_Logo.png";
import javalogo from "../images/java_logo.png";
import reactlogo from "../images/reactsjsLogo.png";
import nodelogo from "../images/nodejs-logo.png";
import mongodblogo from "../images/mongodblogo.jpg";
import mysqllogo from "../images/mysqllogo.jpg";
import javascriptlogo from "../images/javascript_logo.png";
import bootstraplogo from "../images/bootatrapLogo.png";
import pythonlogo from "../images/pythonlogo.png";
import htmllogo from "../images/htmlCSSlogo.png";
import figmalogo from "../images/figmalogo.png";
import gitlogo from "../images/gitlogo.png";
import "./experience.css";
export const Experience = () => {
  return (
    <div id="skills" className="container " style={{ minHeight: "100vh" }}>
      <h1
        data-aos="fade-down"
        className="text-center"
        style={{ paddingTop: "5%", fontSize: "3rem" }}
      >
        <u>Skills</u>
      </h1>
      <p
        data-aos="fade-left"
        className="text-center "
        style={{ fontSize: "1.4rem", letterSpacing: "2px", wordSpacing: "5px" }}
      >
        /*These are the technology i've worked with..*/
      </p>
      <div
        className="row"
        style={{ paddingTop: "10%", paddingLeft: "10%", paddingRight: "5%" }}
      >
        {/* ---------------- */}
        <div className="col col-sm-6 col-md-3 pt-2  ">
          <div
            data-aos="zoom-in-up"
            class="card"
            style={{ width: "8rem", border: "none" }}
          >
            <img
              src={clogo}
              style={{ width: "8rem", height: "8rem" }}
              class="card-img-top p-2"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">C & C++</h5>
            </div>
          </div>
        </div>
        {/* --------------- */}
        {/* ---------------- */}
        <div className="col col-sm-6 col-md-3 pt-2  ">
          <div
            data-aos="zoom-in-up"
            class="card"
            style={{ width: "8rem", border: "none" }}
          >
            <img
              src={htmllogo}
              style={{ width: "8rem", height: "8rem" }}
              class="card-img-top p-2"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">Html & css</h5>
            </div>
          </div>
        </div>
        {/* --------------- */}
        <div className="col col-sm-6 col-md-3 pt-2  ">
          <div
            data-aos="zoom-in-up"
            class="card"
            style={{ width: "8rem", border: "none" }}
          >
            <img
              src={pythonlogo}
              style={{ width: "8rem", height: "8rem" }}
              class="card-img-top p-2"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">Python</h5>
            </div>
          </div>
        </div>
        {/* ---------------- */}
        <div className="col col-sm-6 col-md-3 pt-2  ">
          <div
            data-aos="zoom-in-up"
            class="card"
            style={{ width: "8rem", border: "none" }}
          >
            <img
              src={gitlogo}
              style={{ width: "8rem", height: "8rem" }}
              class="card-img-top p-2"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">GIT</h5>
            </div>
          </div>
        </div>
        {/* --------------- */}
        <div className="col col-sm-4 col-md-3 pt-2 ">
          <div
            data-aos="zoom-in-up"
            class="card"
            style={{ width: "8rem", border: "none" }}
          >
            <img
              src={javalogo}
              style={{ width: "8rem", height: "8rem" }}
              class="card-img-top p-2"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">JAVA</h5>
            </div>
          </div>
        </div>
        <div className="col col-sm-6 col-md-3 pt-2">
          <div
            data-aos="zoom-in-up"
            class="card"
            style={{ width: "8rem", border: "none" }}
          >
            <img
              src={reactlogo}
              style={{ width: "8rem", height: "8rem" }}
              class="card-img-top p-2"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">REACT JS</h5>
            </div>
          </div>
        </div>
        <div className="col col-sm-6 col-md-3 p-2">
          <div
            data-aos="zoom-in-up"
            class="card"
            style={{ width: "8rem", border: "none" }}
          >
            <img
              src={nodelogo}
              style={{ width: "8rem", height: "8rem" }}
              class="card-img-top p-2"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">NODE JS</h5>
            </div>
          </div>
        </div>
        <div className="col col-sm-6 col-md-3 p-2 ">
          <div
            data-aos="zoom-in-up"
            class="card"
            style={{ width: "8rem", border: "none" }}
          >
            <img
              src={mongodblogo}
              style={{ width: "8rem", height: "8rem" }}
              class="card-img-top p-2"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">MONGODB</h5>
            </div>
          </div>
        </div>
        <div className="col col-sm-6 col-md-3 p-2">
          <div
            data-aos="zoom-in-up"
            class="card"
            style={{ width: "8rem", border: "none" }}
          >
            <img
              src={mysqllogo}
              style={{ width: "8rem", height: "8rem" }}
              class="card-img-top p-2"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">MYSQL</h5>
            </div>
          </div>
        </div>
        <div className="col col-sm-6 col-md-3 p-2">
          <div
            data-aos="zoom-in-up"
            class="card"
            style={{ width: "8rem", border: "none" }}
          >
            <img
              src={javascriptlogo}
              style={{ width: "8rem", height: "8rem" }}
              class="card-img-top p-2"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">JAVASCRIPT</h5>
            </div>
          </div>
        </div>
        <div className="col col-sm-6 col-md-3 p-2">
          <div
            data-aos="zoom-in-up"
            class="card mb-5"
            style={{ width: "8rem", border: "none" }}
          >
            <img
              src={bootstraplogo}
              style={{ width: "8rem", height: "8rem" }}
              class="card-img-top p-2"
              alt="..."
            />
            <div class="card-body">
              <h5 class=" card-title text-center  ">BOOTSTRAP</h5>
            </div>
          </div>
        </div>
        {/* ---------------- */}
        <div className="col col-sm-6 col-md-3 pt-2  ">
          <div
            data-aos="zoom-in-up"
            class="card"
            style={{ width: "8rem", border: "none" }}
          >
            <img
              src={figmalogo}
              style={{ width: "8rem", height: "8rem" }}
              class="card-img-top p-2"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">Figma</h5>
            </div>
          </div>
        </div>
        {/* --------------- */}
      </div>
    </div>
  );
};
