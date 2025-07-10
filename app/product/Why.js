"use client";
import React, { useState } from "react";


function Why() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="container " style={{marginBottom:"100px"}}>
      {/* Button Section */}
      <div className="d-flex justify-content-between align-items-center bg-dark p-3 rounded">
        <h4 className="text-light mb-0">
          Connect with us For Tailored Business Solutions
        </h4>
        <button className="btn btn-light" onClick={handleOpenModal}>
          For More Enquiries
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal d-block" tabIndex="-1" role="dialog" onClick={handleCloseModal}>
          <div className="modal-dialog modal-lg" role="document" onClick={e => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Connect with Us for <span className="text-primary">Tailored Business Solutions</span>
                </h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                {/* Form */}
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Enter your Name" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Enter your Company Name" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control" placeholder="Enter your Email" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Enter your Designation" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Enter your Phone Number" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Enter your Location" />
                    </div>
                    <div className="col-md-6">
                      <select className="form-select">
                        <option>Select Your Area of Interest</option>
                        <option>Product Research</option>
                        <option>Consultation</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select className="form-select">
                        <option>Enter your Preferred Mode of Contact</option>
                        <option>Email</option>
                        <option>Phone</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea className="form-control" placeholder="Enter your Message" rows="4"></textarea>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Why;
