import React from 'react'

const KYC = () => {
  return (
<>


    <article>
      <section className="details">
        <h3>KYC Company Form</h3>
        <form>
          <div className="grd-row">
            <div className="grd-column grd-column-six">
              <p>PAN Card</p>
              <input
                type="text"
                id="pan"
                placeholder="PAN No."
                autoComplete="off"
              />
              <div className="message">
                <i id="pan_demo" />
                <span className="validation-response">Message!</span>
              </div>
              <input
                type="text"
                id="company"
                placeholder="Company Name"
                autoComplete="off"
              />
              <div className="message">
                <i id="company_demo" />
                <span className="validation-response">Message!</span>
              </div>
              <input
                type="text"
                id="date"
                placeholder="Date of Incorporation"
                autoComplete="off"
              />
              <div className="message">
                <i id="date_demo" />
                <span className="validation-response">Message!</span>
              </div>
              <p>TIN No.</p>
              <input
                type="text"
                id="tin"
                placeholder="TIN No."
                autoComplete="off"
              />
              <div className="message">
                <i id="tin_demo" />
                <span className="validation-response">Message!</span>
              </div>
            </div>
            <div className="grd-column grd-column-six">
              <input type="file" id="fileinput" />
            </div>
          </div>
          <div className="grd-row">
            <div id="addressproof" className="grd-column grd-column-twelve">
              <p>Address Proof</p>
              <input
                type="radio"
                name="addressproof"
                defaultValue="electricitybill"
              />
              <span>Electricity Bill</span>
              <input
                type="radio"
                name="addressproof"
                defaultValue="waterbill"
              />
              <span>Water Bill</span>
              <input
                type="radio"
                name="addressproof"
                defaultValue="telephonebill"
              />
              <span>Telephone Bill</span>
              <div className="message">
                <i id="addressproof_demo" />
                <span className="validation-response">Message!</span>
              </div>
              
            </div>
            <input type='file'></input>
          </div>
          <button id="submitform">Submit Details</button>
        </form>
      </section>
      <section className="guidelines">
        <h3>Guidlines for filling KYC Form</h3>
        <div className="test" />
      </section>
    </article>
</>
  )
}

export default KYC