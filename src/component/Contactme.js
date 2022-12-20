import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contactme = () => {
  const notify = () => {
    toast.success("🦄 CHECK YOUR MAIL!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };
  const submithandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    console.log(name, email, message);
    axios.post("https://portpolio.mantoshkichni.repl.co/mail", {
      name,
      email,
      message
    });
    console.log("mail sent");

    notify();
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.message.value = "";
  };
  return (
    <div id="contactme" className="container " style={{ minHeight: "100vh" }}>
      <h1
        data-aos="flip-down"
        className="text-center pt-5"
        style={{ fontSize: "4rem" }}
      >
        <u>Contact Me</u>
      </h1>
      <div
        className="from-control"
        style={{ width: "90%", paddingLeft: "20%" }}
      >
        <form
          data-aos="zoom-in-up"
          onSubmit={submithandler}
          className="from-control"
        >
          <div>
            <input
              required
              name="name"
              className="form-control "
              style={{
                fontFamily: "cursive",
                fontSize: "1.2rem",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                letterSpacing: "2px",
                fontWeight: "999"
              }}
              placeholder="name"
            ></input>
          </div>
          <div>
            <input
              required
              name="email"
              className="form-control"
              style={{
                fontFamily: "cursive",
                fontSize: "1.2rem",
                fontWeight: "900",
                letterSpacing: "2px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white"
              }}
              placeholder="Email"
            ></input>
          </div>
          <div>
            <textarea
              required
              name="message"
              className="form-control"
              style={{
                height: "300px",
                fontFamily: "cursive",
                fontSize: "1.5rem",
                letterSpacing: "1px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white"
              }}
              placeholder="message"
            ></textarea>
          </div>
          <div className="mt-3 ">
            <button className="btn form-control btn-outline-primary mb-5">
              <h1>Send Mail</h1>
            </button>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </form>
      </div>
    </div>
  );
};
