import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import LaunchIcon from "@mui/icons-material/Launch";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__title">
        <h2>
          <span>03.</span>Some Things I’ve Built
        </h2>
        <div></div>
      </div>
      <div className="projects__description">
        <div className="projects__item">
          <div className="projects__item_inner">
            <div className="projects__icons">
              <FolderIcon />
              <a
                href="https://amazon-cllone.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <LaunchIcon />
              </a>
            </div>
            <div>
              <h4>Amazon Clone</h4>
              <p>
                This is a clone of Amazon with every functionalities. Adding
                products to the cart was enabled and removing from cart function
                also works. Additionally, authentication was added to this
                website by using Firebase authentication system.
              </p>
            </div>
          </div>
        </div>
        <div className="projects__item">
          <div className="projects__item_inner">
            <div className="projects__icons">
              <FolderIcon />
              <a
                href="https://authenticationn.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <LaunchIcon />
              </a>
            </div>
            <div>
              <h4>Authentication</h4>
              <p>
                Simple authentication using Firebase authentication system with
                Sign in and Sign up functionalities. Two types of authentication
                methods were used here: Email & Password and Google Sign in
                method.
              </p>
            </div>
          </div>
        </div>
        <div className="projects__item">
          <div className="projects__item_inner">
            <div className="projects__icons">
              <FolderIcon />
              <a
                href="https://googlecllone.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <LaunchIcon />
              </a>
            </div>
            <div>
              <h4>Google Clone</h4>
              <p>
                Google Clone with React JS. Main parts are home page and search
                funtionalities. Also filter function works accordingly to the
                search item.
              </p>
            </div>
          </div>
        </div>
        <div className="projects__item">
          <div className="projects__item_inner">
            <div className="projects__icons">
              <FolderIcon />
              <a
                href="https://shoponlinee.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <LaunchIcon />
              </a>
            </div>
            <div>
              <h4>Shop Online</h4>
              <p>
                This is a simple E-commerce üebsite üith React JS. Main concepts
                here are filtering categories, filtering products for specific
                category, adding and removing products from cart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
