import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BecameAMember() {
  // NavBar
  type DropdownName = "loans" | "deposit" | "contactus" | "aboutus" | null;

  const [activeDropdown, setActiveDropdown] = useState<DropdownName>(null);

  const handleMouseEnter = (dropdownName: Exclude<DropdownName, null>) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // ScrollToTopButton
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    setIsVisible(scrolled > 20);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigate
  const navigate = useNavigate();

  // HOME
  const Home = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/Home");
  };

  // SALARY LOAN
  const SalaryLoan = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/SalaryLoan");
  };

  // PENSION LOAN
  const PensionLoan = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/PensionLoan");
  };

  // Capital Contribution
  const CapitalContribution = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/CapitalContribution");
  };

  // OUR LOCATION
  const Ourlocation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/OurLocation");
  };

  // CONTACT MABSLAI
  const ContactMabslai = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/ContactMabslai");
  };

  // ABOUT US
  const AboutUs = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // prevent full page reload
    navigate("/BoardOfTrustees");
  };

  // MANAGEMENT TEAM
  const ManagementTeam = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/ManagementTeam");
  };
  return (
    <>
      {/* NAVBAR SECTION */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <img
            src="/src/images/mabslai.png"
            style={{ width: "80px" }}
            alt="mabslaiLogo"
            onClick={() => navigate("/Home")}
          />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              {/* HOME */}
              <li style={{ paddingTop: "8px", marginLeft: "10px" }}>
                <a
                  className="nav-item"
                  onClick={Home}
                  style={{
                    marginTop: "50px",
                    marginLeft: "10px",
                    color: "green",
                    textDecoration: "None",
                  }}
                >
                  <strong>HOME</strong>
                </a>
              </li>

              {/* END HOME */}
              {/* LOANS */}
              <li
                className={`nav-item dropdown ${
                  activeDropdown === "loans" ? "show" : ""
                }`}
                onMouseEnter={() => handleMouseEnter("loans")}
                onMouseLeave={handleMouseLeave}
                style={{ marginLeft: "20px" }}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "green" }}
                >
                  <strong>LOANS</strong>
                </a>
                <ul
                  className={`dropdown-menu ${
                    activeDropdown === "loans" ? "show" : ""
                  }`}
                >
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={SalaryLoan}
                      style={{ backgroundColor: "transparent", color: "black" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#06923E";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "black";
                      }}
                    >
                      Salary Loan
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={PensionLoan}
                      style={{ backgroundColor: "transparent", color: "black" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#06923E";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "black";
                      }}
                    >
                      Pension Loan
                    </a>
                  </li>
                </ul>
              </li>
              {/* END LOANS */}
              {/* DEPOSIT */}
              <li
                className={`nav-item dropdown ${
                  activeDropdown === "deposit" ? "show" : ""
                }`}
                onMouseEnter={() => handleMouseEnter("deposit")}
                onMouseLeave={handleMouseLeave}
                style={{ marginLeft: "10px" }}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "green" }}
                >
                  <strong>DEPOSIT</strong>
                </a>
                <ul
                  className={`dropdown-menu ${
                    activeDropdown === "deposit" ? "show" : ""
                  }`}
                >
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={CapitalContribution}
                      style={{ backgroundColor: "transparent", color: "black" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#06923E";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "black";
                      }}
                    >
                      Capital Contribution / Savings Account
                    </a>
                  </li>
                </ul>
              </li>
              {/* END DEPOSIT */}
              {/* ABOUTUS */}
              <li
                className={`nav-item dropdown ${
                  activeDropdown === "aboutus" ? "show" : ""
                }`}
                onMouseEnter={() => handleMouseEnter("aboutus")}
                onMouseLeave={handleMouseLeave}
                style={{ marginLeft: "10px" }}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "green" }}
                >
                  <strong>ABOUT US</strong>
                </a>
                <ul
                  className={`dropdown-menu ${
                    activeDropdown === "aboutus" ? "show" : ""
                  }`}
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href=""
                      onClick={AboutUs}
                      style={{ backgroundColor: "transparent", color: "black" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#06923E";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "black";
                      }}
                    >
                      Board of Trustees
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={ManagementTeam}
                      style={{ backgroundColor: "transparent", color: "black" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#06923E";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "black";
                      }}
                    >
                      Management Team
                    </a>
                  </li>
                </ul>
              </li>
              {/* ABOUTUS */}
              {/* CONTACT US */}
              <li
                className={`nav-item dropdown ${
                  activeDropdown === "contactus" ? "show" : ""
                }`}
                onMouseEnter={() => handleMouseEnter("contactus")}
                onMouseLeave={handleMouseLeave}
                style={{ marginLeft: "10px" }}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "green" }}
                >
                  <strong>CONTACT US</strong>
                </a>
                <ul
                  className={`dropdown-menu ${
                    activeDropdown === "contactus" ? "show" : ""
                  }`}
                >
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={Ourlocation}
                      style={{ backgroundColor: "transparent", color: "black" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#06923E";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "black";
                      }}
                    >
                      Our Location
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={ContactMabslai}
                      style={{ backgroundColor: "transparent", color: "black" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#06923E";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "black";
                      }}
                    >
                      Contact Mabslai
                    </a>
                  </li>
                </ul>
              </li>
              {/* END CONTACT US */}
            </ul>
          </div>
          {/* SOCIAL MEDIA */}
          <div className="d-flex justify-content-end">
            <div className="row">
              <a className="me-4 text-rest " href="#">
                <img src="/src/images/logo/fb-logo.jpg" alt="" />
              </a>
            </div>
          </div>
          {/* SOCIAL MEDIA */}
        </div>
      </nav>
      {/* End NAVBAR SECTION */}
      {/* BecameAMember */}
      <div
        className="container overflow-hidden text-left"
        id="container_sample"
        style={{ marginTop: "10em", marginBottom: "5em" }}
      >
        <div className="col-8 rounded container">
          <div className="p-3 border rounded">
            <img
              className="card-img-top w-100 mx-auto d-block"
              src="src/images/content/BecameAMabslaiMembers.jpg"
              alt="BecameAMember"
            />
            <h5 className="card-title text-center mt-5">
              <strong>MEMBERSHIP</strong>
            </h5>
            <p className="card-text">
              <strong>ELIGIBILITY :</strong>An active Officer, Enlisted
              Personnel and Civilian Human Resource of the Philippine Air Force
              who are under the paying jurisdiction of the PAF Finance Center.
            </p>
            <h6 className="card-title">
              <strong>PROCESS:</strong>
            </h6>
            <ol>
              <li>Fill out the membership form.</li>
              <li>Must have One (1) 2x2 and 1x1 ID picture.</li>
              <li>Photocopy of Military I.D.</li>
              <li>
                Payslip for automatic monthly deduction or may pay over the
                counter
              </li>
              <li>Initial deposit of 1,000 for maintaining balance.</li>
              <li>Issuance of Passbook</li>
            </ol>
            <p>
              <strong>
                As Regular Member of MABSLAI you can now avail low interest rate
                for your Salary Loan
              </strong>
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      {/* Footer */}
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-2 border-bottom --bs-success-bg-subtle">
          <div className="me-5 d-none d-lg-block mt-2">
            <span>
              <strong>Get connected to our Social Media Account:</strong>
            </span>
          </div>
          <div>
            <a
              href="https://www.facebook.com/mabslaiofficial"
              className="me-4 text-reset"
              style={{ textDecoration: "none" }}
            >
              <img
                src="/src/images/logo/facebook.svg"
                alt="facebook"
                style={{ width: "34px" }}
              />
            </a>
            <a
              href="https://www.instagram.com/mabslai/"
              className="me-4 text-reset"
              style={{ textDecoration: "none" }}
            >
              <img
                src="/src/images/logo/instagram.svg"
                alt="instagram"
                style={{ width: "34px" }}
              />
            </a>
            <a
              href="#"
              className="me-4 text-reset"
              style={{ textDecoration: "none" }}
            >
              <img
                src="/src/images/logo/whatsapp.svg"
                alt="whatsapp"
                style={{ width: "34px" }}
              />
            </a>
            <a
              href="#"
              className="me-4 text-reset"
              style={{ textDecoration: "none" }}
            >
              <img
                src="/src/images/logo/youtube.svg"
                alt="youtube"
                style={{ width: "34px" }}
              />
            </a>
          </div>
        </section>
        <section className="bg-success text-white">
          <div className="container text-center text-md-start mt-10">
            <div className="row" id="footer">
              {/* Mabslai */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <img
                    src="/src/images/mabslai.png"
                    style={{
                      width: "34px",
                      height: "34px",
                    }}
                    alt=""
                  />
                  <strong style={{ marginLeft: "10px" }}>MABSLA, INC</strong>

                  <p style={{ marginTop: "10px" }}>
                    MACTAN AIR BASE SAVINGS & LOAN ASSOCIATION, INC.
                    <br />
                    <br />
                    Brigadier General Benito N Ebuen Air Base 6015, Lapu-Lapu
                    City
                  </p>
                </h6>
              </div>
              {/* End Mabslai */}
              {/* Loan */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{ textDecoration: "none" }}
                >
                  <strong>LOANS</strong>
                </h6>
                <p>
                  <a
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                    href=""
                  >
                    Salary Loan
                  </a>
                </p>
                <p>
                  <a
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                    href=""
                  >
                    Pension Loan
                  </a>
                </p>
              </div>
              {/* End Loan */}
              {/* Deposit */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{ textDecoration: "none" }}
                >
                  Deposit
                </h6>
                <p>
                  <a
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                    href=""
                  >
                    Capital Contribution / Savings Account
                  </a>
                </p>
              </div>
              {/* End Deposit */}
              {/* AboutUs */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{ textDecoration: "none" }}
                >
                  ABOUT US
                </h6>
                <p>
                  <a
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                    href=""
                  >
                    Board of Trustees
                  </a>
                </p>
                <p>
                  <a className="text-reset" style={{ textDecoration: "none" }}>
                    Management Team
                  </a>
                </p>
              </div>
              {/* End AboutUS */}
              {/* Contact */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <strong>CONTACT US</strong>
                </h6>
                <p>
                  <img
                    src="/src/images/logo/gmail.png"
                    style={{ width: "34px" }}
                    alt=""
                  />
                  &nbsp; mabslai@yahoo.com
                </p>
                <p>
                  <img
                    src="/src/images/logo/phone.png"
                    style={{ width: "34px" }}
                    alt=""
                  />
                  &nbsp; 0916 519 1592
                </p>
                <p>
                  <img
                    src="/src/images/logo/dialphone.png"
                    style={{ width: "34px" }}
                    alt=""
                  />
                  &nbsp; 340 3052
                </p>
              </div>
              {/* End Contact */}
            </div>
          </div>
        </section>
      </footer>
      {/* End Footer */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        Copyright © 2025 MACTAN AIR BASE SAVINGS & LOAN ASSOCIATION, INC. All
        Rights Reserved &nbsp;
        <a className="text-success fw-bold" href="#">
          Mabslai.com.ph
        </a>
      </div>
      {/* End Copyright */}
      {/* ScrollToTopButton */}
      <button
        id="myBtn"
        onClick={scrollToTop}
        style={{
          display: isVisible ? "block" : "none",
          position: "fixed",
          bottom: "40px",
          right: "40px",
          zIndex: 1000,
          padding: "10px 15px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#333",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        ↑ Top
      </button>
      {/* End ScrollToTopButton */}
    </>
  );
}

export default BecameAMember;
