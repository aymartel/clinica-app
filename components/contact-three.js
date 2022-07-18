
import { useForm } from "hooks/useForm";
import React from "react";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { useTranslations } from 'next-intl';

const ContactThree = () => {
  const initialForm = {
    name: '',
    email: '',
    phone: '',
    secure: '',
    date: '',
    hour: '',
    service: '',
    message: ''
  }
  const t = useTranslations('Index');
  const [values, handleInputChange, reset] = useForm(initialForm);
  const { name, email, phone, secure, date, hour, service, message } = values;
  const [alertFlag, setAlertFlag] = useState(false);
  const [pacient, setPacient] = useState("")
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_279u5ph', 'template_kdl8wo6', e.target, 'NBeAWBqDUynp3sik5')
      .then((result) => {
        console.log(result.text);
        setAlertFlag(true);
      }, (error) => {
        console.log(error.text);
        setAlertFlag(false);
      });
    setPacient(name)
    setAlertFlag(true)
    reset();
  };
  const ContactThree_SubtitleArray = t('ContactThree_Subtitle').split('\n'); 
  return (
    <section className="contact_form_area contact_us section_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-right contact_details">
              <div className="hero-title-with-shape">
                <h4 className="heading_with_border">{t('ContactThree_Title')}</h4>
                <h1>{ContactThree_SubtitleArray[0]}<strong>{ContactThree_SubtitleArray[1]}</strong>{ContactThree_SubtitleArray[2]}</h1>
              </div>
              <p>
                {t('ContactThree_Parr')}
              </p>
              <div className="contact_location_box">
                <div className="contact_location_map">
                  <span className="icon-location"></span>
                  <p>
                    <a href="https://goo.gl/maps/EDXnEMyKf3b6iAqAA"> 8200 Wilcrest Dr Suite 20, <br />Houston, TX 77072</a>
                  </p>
                </div>
                <div className="contact_location_map contact_location_call">
                  <span className="icon-contact_call"></span>
                  <p>
                    <a href="mailto:info@clinicahispanaludesperanza.com"><span>info@clinicahispanaludesperanza.com</span></a><br />
                    <a href="tel:+13465702594"><span>+1 346-570-2594</span></a><br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-right contact-right-style-2 responsive_mt">
              <form onSubmit={sendEmail}>

                <div className="row">
                  <div className="col-lg-6 col-md-6 ">
                    <input
                      type="text"
                      name="name"
                      placeholder={t('ContactOne_Name')}
                      value={name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 ">
                    <input
                      type="EMAIL"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="row">

                  <input
                    className=""
                    type="tel"
                    name="phone"
                    placeholder={t('ContactOne_Phone')}
                    value={phone}
                    onChange={handleInputChange}
                    required
                  /></div>
                <div className="row">

                  <input
                    type="textarea"
                    name="message"
                    placeholder={t('ContactOne_Message')}
                    value={message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-6 ">
                    <button className="btn-yellow mb-4" value="SUBMIT NOW">
                      {t('ContactThree_Button')}
                    </button>
                  </div>
                  <div className="col-lg-6 col-md-6 ">
                    {alertFlag ?
                      <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>{pacient}</strong> {t('ContactTree_Confirmation')}
                        <button type="button" className="close-button-contact " onClick={() => { setAlertFlag(false) }}>
                          x
                        </button>
                      </div> : <span className=""></span>}
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactThree;
