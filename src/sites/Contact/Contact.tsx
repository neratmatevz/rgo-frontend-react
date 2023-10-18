import React from "react";
import "./Contact.css";
import SubHeader from "../../components/SubHeader/SubHeader";

const Contact = () => {

  return (
    <>
      <SubHeader naslovStrani={"KONTAKT"} />

      <div className="container-fluid px-5 my-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card border-0 rounded-3 shadow-lg overflow-hidden">
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-sm-6 p-4 border-top">
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
                        <label htmlFor="emailAddress">Email</label>
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
                        <label htmlFor="selectMachine">Izbira aparata</label>
                      </div>
                      {/* Message Input */}
                      <div className="form-floating mb-3">
                        <textarea className="form-control" id="message" placeholder="Message" style={{ height: '10rem' }} defaultValue={""} />
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

                  <div className="col-sm-6 border-lg-left border-top">

                    <div className="row m-5">
                      <div className="d-flex align-items-start">
                        <div className="col-lg-4 col-sm-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          </svg>
                        </div>
                        <div className="col-lg-8 col-sm-10">
                          <p className="m-3">Antoličičeva ulica, 2204, Miklavž na Dravskem polju, Slovenija</p>
                        </div>
                      </div>
                    </div>

                    <div className="row m-5 ">
                      <div className="d-flex align-items-start">
                        <div className="col-lg-4 col-sm-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                          </svg>
                        </div>
                        <div className="col-lg-8 col-sm-10">
                          <p className="m-3">Telefon: 070707070</p>
                        </div>
                      </div>
                    </div>

                    <div className="row m-5">
                      <div className="d-flex align-items-start">
                        <div className="col-lg-4 col-sm-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                          </svg>
                        </div>
                        <div className="col-lg-8 col-sm-10">
                          <p className="m-3">Email: <a href="mailto: abc@example.com" className="text-dark">test@gmail.com</a></p>
                        </div>
                      </div>
                    </div>

                    <div className="row m-5">
                      <div className="d-flex align-items-start">
                        <div className="col-lg-4 col-sm-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="currentColor" className="bi bi-globe-europe-africa" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM3.668 2.501l-.288.646a.847.847 0 0 0 1.479.815l.245-.368a.809.809 0 0 1 1.034-.275.809.809 0 0 0 .724 0l.261-.13a1 1 0 0 1 .775-.05l.984.34c.078.028.16.044.243.054.784.093.855.377.694.801-.155.41-.616.617-1.035.487l-.01-.003C8.274 4.663 7.748 4.5 6 4.5 4.8 4.5 3.5 5.62 3.5 7c0 1.96.826 2.166 1.696 2.382.46.115.935.233 1.304.618.449.467.393 1.181.339 1.877C6.755 12.96 6.674 14 8.5 14c1.75 0 3-3.5 3-4.5 0-.262.208-.468.444-.7.396-.392.87-.86.556-1.8-.097-.291-.396-.568-.641-.756-.174-.133-.207-.396-.052-.551a.333.333 0 0 1 .42-.042l1.085.724c.11.072.255.058.348-.035.15-.15.415-.083.489.117.16.43.445 1.05.849 1.357L15 8A7 7 0 1 1 3.668 2.501Z" />
                          </svg>
                        </div>
                        <div className="col-lg-8 col-sm-10">
                          <p className="m-3">Spletna stran: <a href="#" className="text-dark">imepodjetja.si</a></p>
                        </div>
                      </div>
                    </div>

                    <div className="row m-5">
                      <div className="d-flex align-items-start">
                        <div className="col-lg-4 col-sm-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                          </svg>
                        </div>
                        <div className="col-lg-8 col-sm-10">
                          <p className="m-3">Matična: 52344545345</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21970.322120450317!2d15.685329027648867!3d46.50236439092599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f7a6ba5f8e8a7%3A0x5ecb863fae714f04!2s2204%20Miklav%C5%BE%20na%20Dravskem%20polju!5e0!3m2!1ssl!2ssi!4v1697670790138!5m2!1ssl!2ssi"  style={{ border: 0, width:'100%',height:'30rem'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />       
      </div>
    </>

  );
};

export default Contact;