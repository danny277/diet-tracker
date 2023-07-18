import React from 'react'
import Services from './Services'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">Welcome to your daily Diet Tracker</h1>
              <p className="lead text-center fs-4 mb-5 text-white">Track your diet,exercise and health data</p>
              <div className="buttons d-flex justify-content-center">
                <buttons className="btn btn-light me-4 rounded-pill px-4 py-2">Get Quote</buttons>
                <buttons className="btn btn-outline-light rounded-pill px-4 py-2">Our Services</buttons>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Contact />
    </div>
  )
}

export default Home