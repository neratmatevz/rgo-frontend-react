import React from "react";
import "./Contact.css";

const Contact = () => {

    return (
      <div className="container-fluid px-5 my-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card border-0 rounded-3 shadow-lg overflow-hidden">
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-sm-6 d-none d-sm-block bg-image" />
                  <div className="col-sm-6 p-4">
                    <div className="text-center">
                      <div className="h3 fw-light">Kontaktirajte nas!</div>
                      <p className="mb-4 text-muted">Napišite nam, če imate kakšno vprašanje ali pa želite kupiti katerega izmed aparatov</p>
                    </div>
                    
                    <form id="contactForm" >
                      {/* Name Input */}
                      <div className="form-floating mb-3">
                        <input className="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
                        <label htmlFor="name">Ime</label>
                        <div className="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
                      </div>
                      {/* Email Input */}
                      <div className="form-floating mb-3">
                        <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                        <label htmlFor="emailAddress">Email Naslov</label>
                        <div className="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                        <div className="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                      </div>
                      <div className="form-floating mb-3">
                        <select id="selectMachine" className="form-select" aria-label="Default select example">
                          <option defaultValue={0}>Ne izberi aparata</option>
                          <option value={1}>Mašina ena</option>
                          <option value={2}>Mašina dva</option>
                          <option value={3}>Mašina tri</option>
                        </select>
                        <label htmlFor="selectMachine">Izbira mašine</label>
                      </div>
                      {/* Message Input */}
                      <div className="form-floating mb-3">
                        <textarea className="form-control" id="message" placeholder="Message" style={{height: '10rem'}} defaultValue={""} />
                        <label htmlFor="message">Dodatno sporočilo</label>
                        <div className="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
                      </div>
                      {/* Submit success message */}
                      <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center mb-3">
                          <div className="fw-bolder">Form submission successful!</div>
                          <p>To activate this form, sign up at</p>
                          <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                      </div>
                      {/* Submit error message */}
                      <div className="d-none" id="submitErrorMessage">
                        <div className="text-center text-danger mb-3">Error sending message!</div>
                      </div>
                      {/* Submit button */}
                      <div className="d-grid">
                        <button className="btn btn-primary btn-lg " id="submitButton" type="submit">Pošlji</button>
                      </div>
                    </form>
                    {/* End of contact form */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
};

export default Contact;