import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="mb-3">Yahya Al Salmi</h5>
            <p className="text-muted mb-0">
              Computer Science Student at Dalhousie University
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="social-icons mb-3">
              <a
                href="https://linkedin.com/in/yahyaalsalmi/"
                target="_blank"
                rel="noreferrer"
              >
                <span>in</span>
              </a>
              <a
                href="https://github.com/EllE961"
                target="_blank"
                rel="noreferrer"
              >
                <span>GH</span>
              </a>
              <a href="mailto:Yahyaalsalmi961@gmail.com">
                <span>✉️</span>
              </a>
            </div>
            <p className="mb-0">
              &copy; 2025 Yahya Al Salmi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
