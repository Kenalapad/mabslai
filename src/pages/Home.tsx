import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import mabslai from "../images/mabslai.png";
import fbLogo from "../images/fb-logo.jpg";
import viber from "../images/carousel//viber.jpg";
import facebook from "../images/carousel/facebook.jpg";
import signal from "../images/carousel/signal.jpg";
import loan from "../images/carousel/loan.jpg";
import capitalContribution from "../images/carousel/capitalContribution.jpg";
import instagram from "../images/carousel/intagram.jpg";
import BecameAMabslaiMember from "../images/content/BecameAMabslaiMembers.jpg";
import Loan from "../images/content/Loan.png";

function Home() {
  // Carousel
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

  // Navigate through Pages
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
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <img src={mabslai} style={{ width: "80px" }} alt="mabslaiLogo" />
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
                      style={{
                        backgroundColor: "transparent",
                        color: "black",
                      }}
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
                      style={{
                        backgroundColor: "transparent",
                        color: "black",
                      }}
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
                      style={{
                        backgroundColor: "transparent",
                        color: "black",
                      }}
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
                      style={{
                        backgroundColor: "transparent",
                        color: "black",
                      }}
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
                      style={{
                        backgroundColor: "transparent",
                        color: "black",
                      }}
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
                      style={{
                        backgroundColor: "transparent",
                        color: "black",
                      }}
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
                      style={{
                        backgroundColor: "transparent",
                        color: "black",
                      }}
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
                <img src={fbLogo} alt="fbLogo" />
              </a>
            </div>
          </div>
          {/* SOCIAL MEDIA */}
        </div>
      </nav>
      {/* CAROUSEL SECTION */}
      <div
        id="mabslaiCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ marginTop: "90px" }}
      >
        <div className="carousel-indicators">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#mabslaiCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {[
            { src: viber, alt: "viber" },
            { src: facebook, alt: "facebook" },
            { src: signal, alt: "signal" },
            { src: loan, alt: "loan" },
            { src: capitalContribution, alt: "capital contribution" },
            { src: instagram, alt: "instagram" },
          ].map((img, idx) => (
            <div
              className={`carousel-item ${idx === 0 ? "active" : ""}`}
              data-bs-interval="2500"
              key={idx}
            >
              <img
                src={img.src}
                className="d-block w-100 h-100"
                alt={img.alt}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mabslaiCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mabslaiCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* END CAROUSEL SECTION */}
      {/* LATEST NEWS */}
      <div className="col-md-12 p-4 bordered shadow-lg">
        <h3 className="text-center border rounded shadow-lg">
          Latest Mabslai News
        </h3>
        <h1 className={styles["list-item"]}></h1>
      </div>
      {/* END LATEST NEWS */}
      {/* BECAME A MEMBER */}
      <div className="rounded-5  mb-1 mt-5 ms-1 me-1 bg-light">
        <div
          id="becameAMember"
          className="d-flex justify-content-evenly border shadow  rounded mb-1 mt-1 "
          style={{ marginTop: "20px" }}
        >
          {" "}
          <div className="card mb-5 mt-5" style={{ width: "30rem" }} id="bam">
            <img
              src={BecameAMabslaiMember}
              className="card-img-top"
              alt="becameAMember"
            />
          </div>
          <div
            className=" w-20 h-55 mb-5 mt-5 pt-4"
            style={{ marginLeft: "20px" }}
          >
            <div className="card-body me-5" id="becameAMemberContent">
              <h5 className="card-title fs-5">Became a Mabslai Member</h5>
              <p className="card-text fs-4">
                Be one of the member of Mabslai to avail our Loan, Deposit and
                etc... <br />
                <i>
                  Come and Visit Mabslai for more info...
                  <br />
                </i>
              </p>
              <a
                href="#"
                className="btn btn-success fs-6"
                onClick={() => (window.location.href = "/BecameAMember")}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* end Became a Member */}
      <br />
      <br />
      {/* Salary Loan */}
      <div className="rounded-5 mb-1 mt-1 ms-1 me-1">
        <div
          id="salaryLoan"
          className="d-flex justify-content-evenly border shadow  mb-1 mt-1 "
        >
          <div
            className=" w-20 h-55 mb-5 mt-5 pt-5"
            style={{ marginLeft: "50px" }}
          >
            <div className="card-body me-5" id="sl-content">
              <h5 className="card-title fs-5">Salary Loan</h5>
              <p className="card-text fs-4">
                We guarantee flexible term, Fast disburtment of funds, and fixed
                interest rates.{" "}
                <i>
                  <br />
                  Come and Visit Mabslai for more info...
                  <br />
                </i>
              </p>
              <a
                className="btn btn-success fs-6"
                onClick={() => (window.location.href = "/Loan")}
              >
                Read More
              </a>
            </div>
          </div>
          <div className="card mb-5 mt-5" style={{ width: "25rem" }}>
            <img
              src={Loan}
              className="card-img-top"
              alt="capitalContribution"
            />
          </div>
        </div>
      </div>
      {/* end Salary Loan */}
      <br />
      <br />
      {/* Capital Contribution */}
      <div className="rounded-5  mb-1 mt-1 ms-1 me-1 bg-light">
        <div
          id="CapitalContribution"
          className="d-flex justify-content-evenly border shadow  rounded mb-1 mt-1 "
        >
          <div
            id="ccImage"
            className="card mb-5 mt-5"
            style={{ width: "25rem" }}
          >
            <img
              src={capitalContribution}
              className="card-img-top"
              alt="capitalContribution"
            />
          </div>
          <div
            className=" w-20 h-55 mb-5 mt-5 pt-4"
            style={{ marginLeft: "20px" }}
          >
            <div id="ccContent" className="card-body me-5">
              <h5 className="card-title fs-5">
                Capital Contribution/ Savings Account
              </h5>
              <p className="card-text fs-4">
                Invest your money to our Capital Contribution that offers 10%
                annually!
                <br />
                <i>Come and Visit Mabslai for more info info...</i>
              </p>
              <a className="btn btn-success fs-6" onClick={CapitalContribution}>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* end  Capital Contribution */}
      <br />
      <br />
      {/* Pension Loan */}
      <div className="rounded-5 mb-1 mt-1 ms-1 me-1">
        <div
          id="pensionLoan"
          className="d-flex justify-content-evenly border shadow  mb-1 mt-1 "
        >
          <div id="plContent" className=" w-20 h-55 mb-5 mt-5 pt-4">
            <div className="card-body me-5">
              <h5 className="card-title fs-5">Pension Loan</h5>
              <p className="card-text fs-4">
                Mabslai offers loan to all Philippine Air Force Pensioner.{" "}
                <br />
                <i>Come and Visit Mabslai for more info...</i>
              </p>
              <a className="btn btn-success fs-6" onClick={PensionLoan}>
                Read More
              </a>
            </div>
          </div>
          <div className="card mb-5 mt-5" style={{ width: "25rem" }}>
            <img
              src="/src/images/content/pensionLoan.png"
              className="card-img-top"
              alt="capitalContribution"
            />
          </div>
        </div>
      </div>
      {/* end Pension Loan */}
      {/* Loan Calculator */}
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "3em", paddingBottom: "3em" }}
      >
        <img
          src="/src/images/calculator/calculator.png"
          style={{ width: "400px" }}
          className={styles.loanCalculator}
          alt="LoanCalculator"
          onClick={() => (window.location.href = "/LoanCalculator")}
        />
      </div>
      {/* end Loan Calculator */}
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
              {/* MABSLAI */}
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
              {/* End MABSLAI */}
              {/* LOANS */}
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
              {/* End LOANS */}
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
              {/* About Us */}
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
              {/* End About US */}

              {/* CONTACTS */}
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
              {/* End CONTACTS */}
            </div>
          </div>
        </section>
      </footer>
      {/* end Footer */}
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
      {/* end Copyright */}
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
      {/* ScrollToTopButton */}
    </>
  );
}

export default Home;
