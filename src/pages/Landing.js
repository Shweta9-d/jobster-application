import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/** info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Jobster makes time and job tracking a lot easier by creating tasks
            and to-dos on projects, and categorizing projects by client. When
            you start working on a specific task, all you have to do is choose a
            project, write an optional description of what you're doing, and
            start the timer.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
