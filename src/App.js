import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import apexLogo from './apexloads 1.png'
import store from './store.png'
import playstore from './playstore.png'

function App() {
  return (
    <div className='App'>
      <header className='header bg-danger text-white'>
        <div className='container-fluid d-flex justify-content-between align-items-center py-2'>
          <div className='contact-info d-flex'>
            <i className='fas fa-whatsapp'></i> +254 (0) 709 677 400
            &nbsp;|&nbsp;
            <i className='fas fa-phone'></i> +254 (0) 709 677 400 &nbsp;|&nbsp;
            <i className='fas fa-envelope'></i> info@apexloads.com
          </div>
          <div className='login'>
            <button className='btn btn-light'>
              Login <i className='fas fa-chevron-down'></i>
            </button>
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className='navbar navbar-expand-lg navbar-dark bg-black'>
        <div className='container-fluid'>
          <a href='/' className='navbar-brand'>
            <img src={apexLogo} alt='Apexloads Logo' className='navbar-logo' />
          </a>

          {/* Toggle Button for Mobile View */}
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          {/* Navbar Links */}
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <a href='#transporters' className='nav-link'>
                  Transporters
                </a>
              </li>
              <li className='nav-item'>
                <a href='#brokers' className='nav-link'>
                  Full Service Broker
                </a>
              </li>
              <li className='nav-item'>
                <a href='#freight' className='nav-link'>
                  Freight Forwarders/Brokers
                </a>
              </li>
            </ul>
            <div className='navbar-buttons d-flex'>
              <a href='#pricing' className='btn btn-outline-light me-2'>
                Pricing
              </a>
              <a href='#demo' className='btn btn-danger'>
                Book a Free Demo
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Pricing Header */}
      <section className='pricing-header'>
        <div className='overlay'>
          <h1 className='display-3'>PRICING</h1>
        </div>
      </section>

      {/* Pricing Section */}
      <section className='pricing-section text-center py-5'>
        <div className='container'>
          <div className='pricing-tabs d-flex justify-content-center mb-4'>
            <button className='btn pricing-btn mx-2'>Monthly</button>
            <button className='btn pricing-btn mx-2'>Quarterly</button>
            <button className='btn pricing-btn mx-2'>Semi-Annual</button>
            <button className='btn pricing-btn mx-2'>Yearly</button>
          </div>

          {/* Pricing Cards */}
          <div className='row'>
            <div className='col-md-4 mb-4'>
              <div className='card p-3 h-100 shadow-sm'>
                <h5>Transporter</h5>
                <h3 className='price'>$5 /month</h3>
                <p>
                  Entity responsible for moving goods from one location to
                  another.
                </p>
                <ul className='list-unstyled'>
                  <li>Unlimited load searching</li>
                  <li>Unlimited truck posting</li>
                  <li>EAC Profile Verification</li>
                </ul>
                <button className='btn2 btn-danger mt-auto'>Get Started</button>
              </div>
            </div>
            <div className='col-md-4 mb-4'>
              <div className='card p-3 h-100 shadow-sm'>
                <h5>Full-Service Broker</h5>
                <h3 className='price'>$15 /month</h3>
                <p>Has both roles of a transporter and broker.</p>
                <ul className='list-unstyled'>
                  <li>Unlimited load/truck posting</li>
                  <li>Unlimited load/truck searching</li>
                  <li>EAC Profile Verification</li>
                </ul>
                <button className='btn2 btn-danger mt-auto'>Get Started</button>
              </div>
            </div>
            <div className='col-md-4 mb-4'>
              <div className='card p-3 h-100 shadow-sm'>
                <h5>Freight Forwarder/Broker</h5>
                <h3 className='price'>$10 /month</h3>
                <p>Has both roles of transporter and broker.</p>
                <ul className='list-unstyled'>
                  <li>Unlimited load/truck posting</li>
                  <li>Unlimited load/truck searching</li>
                  <li>EAC Profile Verification</li>
                </ul>
                <button className='btn2 btn-danger mt-auto'>Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='download'>
        <div className='overlay'></div>
        <div className='content'>
          <h1>Download the Apexloads mobile app</h1>

          <div className='download-buttons'>
            <a href='#' className='store-btn'>
              <img src={store} alt='Get From Apple Store' />{' '}
            </a>
            <a href='#' className='store-btn'>
              <img src={playstore} alt='Get From Playstore' />
            </a>
          </div>
        </div>
      </section>

      <footer className='footer bg-dark text-white py-5'>
        <div className='container'>
          <div className='row'>
            {/* Left Section: Logo, Description, Feedback, Form */}
            <div className='col-md-4'>
              <img
                src={apexLogo}
                alt='Apexloads Logo'
                className='footer-logo'
              />
              <p className='footer-description'>
                The first free end-to-end analytics service for the site,
                designed to work with enterprises of various levels and business
                segments.
              </p>
              <p className='feedback-link text-danger'>FEEDBACK</p>
              <h5>Seeking personalized support?</h5>
              <p>Request a call from our team</p>
              <form className='support-form'>
                <input
                  type='text'
                  placeholder='Your Name'
                  className='form-control mb-2'
                />
                <input
                  type='tel'
                  placeholder='Phone Number'
                  className='form-control mb-2'
                />
                <button type='submit' className='btn btn-danger'>
                  Send a request
                </button>
              </form>
            </div>

            {/* Middle Section: Useful Links */}
            <div className='col-md-2'>
              <h5 className='text-danger'>Useful Links</h5>
              <ul className='list-unstyled'>
                <li>
                  <a href='#'>About Us</a>
                </li>
                <li>
                  <a href='#'>Privacy Policy</a>
                </li>
                <li>
                  <a href='#'>Contact Us</a>
                </li>
                <li>
                  <a href='#'>Newsletter</a>
                </li>
                <li>
                  <a href='#'>Pricing</a>
                </li>
                <li>
                  <a href='#'>Our Blog</a>
                </li>
              </ul>
            </div>

            <div className='col-md-2'>
              <h5 className='text-danger'>Services</h5>
              <ul className='list-unstyled'>
                <li>
                  <a href='#'>Transporters</a>
                </li>
                <li>
                  <a href='#'>Post Trucks</a>
                </li>
                <li>
                  <a href='#'>Search For Loads</a>
                </li>
                <li>
                  <a href='#'>Shippers</a>
                </li>
                <li>
                  <a href='#'>Post Trucks</a>
                </li>
                <li>
                  <a href='#'>Search For Loads</a>
                </li>
              </ul>
            </div>

            <div className='col-md-4'>
              <h5 className='text-danger'>Contact Us</h5>
              <p>
                <a href='tel:+254709677400'>+254 (0) 709 677 400</a>
              </p>
              <p>
                <a href='mailto:info@apexloads.com'>info@apexloads.com</a>
              </p>
              <p className='text-danger'>Call me back</p>
              <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>

              <h5 className='mt-3'>Follow Us</h5>
              <p>
                <a href='#' className='mx-2'>
                  Telegram
                </a>{' '}
                /
                <a href='#' className='mx-2'>
                  Whatsapp
                </a>{' '}
                /
                <a href='#' className='mx-2'>
                  Instagram
                </a>
              </p>
            </div>
          </div>

          <div className='row mt-4 text-center'>
            <div className='col-md-12'>
              <p>© 2024 — Copyright</p>
              <a href='#' className='text-white'>
                Privacy
              </a>
              <div className='mt-3'>
                <a href='#' className='scroll-top'>
                  <i className='fas fa-arrow-up'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
