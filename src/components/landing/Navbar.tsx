import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import Circle from "../ui/loading-spinner";

// Redux Stuff
import { connect } from "react-redux";
import { getGitHubStars } from "../../redux/actions/dataActions";

// Icons and Images
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faHome, faPenNib } from "@fortawesome/free-solid-svg-icons";

const NavWrapper = styled.div`
  margin: 0;
  display: grid;
  color: white;
  grid-template-rows: 1fr;
  grid-template-columns: auto auto;
  padding: 4vh 5vw;

  .nav-components-container {
    display: flex;
    margin-left: auto;
    align-items: center;
  }

  .nav-component {
    display: flex;
    align-items: center;
    margin-left: 2em;
    font-size: 3vh;
    cursor: pointer;

    .svg-inline--fa {
      font-size: 1.4em;
      margin-right: 0.2em;
    }
  }

  .gt-container {
    display: flex;
    flex-direction: row;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05) 10.93%,
      rgba(255, 255, 255, 0) 90%
    );
    padding: 0rem 0.8rem;
    color: white;
    border-radius: 4vh;

    .svg-inline--fa {
      font-size: 1.8em;
    }
  }

  .pl-branding {
    display: flex;
    align-items: center;
  }

  .pl-logo {
    width: 80px; /* Medium-sized logo */
    height: auto;
    margin-right: 10px;
  }

  .pl-title {
    font-size: 5vh;
    margin: 0;
  }

  .mobile-nav {
    display: none;
  }

  .rainbow-text {
    background: linear-gradient(90deg, #4ca5ff 2.34%, #b673f8 100.78%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    background-clip: text;
    font-weight: bold;
  }

  @media only screen and (max-width: 768px) {
    padding: 2vh;
    grid-template-columns: 1fr;

    .nav-components-container,
    .pl-branding {
      display: none;
    }

    .mobile-nav {
      display: flex;
      width: 100%;
    }

    .nav-component {
      margin: 2vh;
      font-size: 1.25rem;
    }

    .m-github {
      margin-left: auto;
    }
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
    padding: 2vh;
    grid-template-columns: 1fr;

    .nav-components-container,
    .pl-branding {
      display: none;
    }

    .mobile-nav {
      display: flex;
      width: 100%;
    }

    .nav-component {
      margin: 2vh;
      font-size: 2.5rem;
    }

    .m-github {
      margin-left: auto;
    }
  }
`;

class Navbar extends Component {
  componentDidMount() {
    this.props.getGitHubStars();
  }

  render() {
    const { stars } = this.props;
    return (
      <NavWrapper>
        <div className="pl-branding">
          <img
            src="https://ik.imagekit.io/4arf8q5j1/code%20sphere%20logo.png?updatedAt=1735817418748"
            alt="Code-Spherre Logo"
            className="pl-logo"
          />
          <h1 className="pl-title">Code-Spherre</h1>
        </div>

        <div className="mobile-nav">
          <Link href="/">
            <div className="nav-component">
              <FontAwesomeIcon icon={faHome} />
            </div>
          </Link>
          <Link 
  href="https://github.com/CodeSpherreDev" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="m-github"
>
  <div className="nav-component">
    <FontAwesomeIcon icon={faPenNib} />
  </div>
</Link>


          <a href="https://github.com/Abhranil2004" target="_blank" className="m-github">
          <div className="nav-component gt-container">
          <FontAwesomeIcon icon={faGithub} />
          <span> Abhranil Dutta</span>
          </div>
        </a>


        </div>

        <div className="nav-components-container">
          <Link href="/">
            <div className="nav-component">
              <FontAwesomeIcon icon={faHome} />
              Home
            </div>
          </Link>

          <a href="https://github.com/Abhranil2004" target="_blank">
            <div className="nav-component gt-container">
              <FontAwesomeIcon icon={faGithub} />
              Abhranil Dutta
            </div>
          </a>
        </div>
      </NavWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  stars: state.data.stars,
});

const mapDispatchToProps = {
  getGitHubStars,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
