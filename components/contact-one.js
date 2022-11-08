
import { useForm } from "hooks/useForm";
import React from "react";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { useTranslations } from 'next-intl';
import Imagemap from "@/images/map.webp";
import Image from "next/image";
const ContactOne = () => {
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
    emailjs.sendForm('service_279u5ph', 'template_6tdfu1b', e.target, 'NBeAWBqDUynp3sik5')
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


  return (
    <section className="contact_form_area">
      <div className="contact_form_width">
        <h1 className="contact_map_title text-center">
          {t('ContactOne_Title')}
        </h1>
        <div id="map" className="map-div">
        <a href="https://goo.gl/maps/EDXnEMyKf3b6iAqAA"> <Image src={Imagemap} alt="Map Houston" layout="responsive"  /></a>
        

        </div>
      </div>
      <div className="contact_form_width contact-right">
        <div className="hero-title-with-shape">
          <h2 className="heading_with_border">{t('ContactOne_TitleForm')}</h2>
          <h3>{t('ContactOne_SubtitleForm')}</h3>
        </div>
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
                placeholder="Email address"
                value={email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 ">
              <input
                className=""
                type="tel"
                name="phone"
                placeholder={t('ContactOne_Phone')}
                value={phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-lg-6 col-md-6 ">
              <span className="select_icon">
                <select name="secure" id="secure" value={secure} onChange={handleInputChange} required>
                  <option value="">{t('ContactOne_SelectMedicalSecure')}</option>
                  <option value={t('ContactOne_WithoutSecure')}>{t('ContactOne_WithoutSecure')}</option>
                  <option value="Wellcare">Wellcare</option>
                  <option value="MultiPlan">MultiPlan</option>
                  <option value="Aetna">Aetna</option>
                  <option value="BlueCross BlueShield">BlueCross BlueShield</option>
                  <option value="Bright HealthCare">Bright HealthCare</option>
                  <option value="Friday">Friday</option>
                  <option value="Medicare">Medicare</option>
                  <option value="Galaxy Health Network">Galaxy Health Network</option>
                  <option value="Cigna">Cigna</option>
                  <option value="Superior Healthplan">Superior Healthplan</option>
                  <option value="Molina HealthCare">Molina HealthCare</option>
                  <option value="United HealthCare">United HealthCare</option>
                  <option value="Ambetter">Ambetter</option>

                </select>
              </span>


            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 ">
                <label htmlFor="datePicker" className="text-secondary" >{t('ContactOne_SelectDate')}:</label>
              
                <input
                  id="datePicker"
                  type="date"
                  name="date"
                  placeholder="Fecha"
                  value={date}
                  onChange={handleInputChange}
                  required
                />
            </div>
            <div className="col-lg-6 col-md-6 ">
              <label htmlFor="timePicker" className="text-secondary">{t('ContactOne_SelectTime')}:</label>
              <input
                id="timePicker"
                type="time"
                name="hour"
                placeholder="Hora"
                value={hour}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>




          <span className="select_icon">
            <select name="service" id="select" value={service} onChange={handleInputChange} required>
              <option value="">{t('ContactOne_SelectService')}</option>
              <option value={t('ServiceLaboratory_PostTitle')}>{t('ServiceLaboratory_PostTitle')}</option>
              <option value={t('ServiceGeneralMedical_PostTitle')}>{t('ServiceGeneralMedical_PostTitle')}</option>
              <option value={t('ServiceUltrasound_PostTitle')}>{t('ServiceUltrasound_PostTitle')}</option>
              <option value={t('ServiceCovid_PostTitle')}>{t('ServiceCovid_PostTitle')}</option>
              <option value={t('ServiceCureSutures_PostTitle')}>{t('ServiceCureSutures_PostTitle')}</option>
              <option value={t('ServiceDiseaseControl_PostTitle')}>{t('ServiceDiseaseControl_PostTitle')}</option>
              <option value={t('ServiceDotExam_PostTitle')}>{t('ServiceDotExam_PostTitle')}</option>
              <option value={t('ServiceEarWhash_PostTitle')}>{t('ServiceEarWhash_PostTitle')}</option>
              <option value={t('ServiceInfectionTreatment_PostTitle')}>{t('ServiceInfectionTreatment_PostTitle')}</option>
              <option value={t('ServiceInjections_PostTitle')}>{t('ServiceInjections_PostTitle')}</option>
              <option value={t('ServiceNailRemoval_PostTitle')}>{t('ServiceNailRemoval_PostTitle')}</option>
              <option value={t('ServiceContraceptiveRemoval_PostTitle')}>{t('ServiceContraceptiveRemoval_PostTitle')}</option>
              <option value={t('ServicePapTest_PostTitle')}>{t('ServicePapTest_PostTitle')}</option>
              <option value={t('ServicePhysicalExam_PostTitle')}>{t('ServicePhysicalExam_PostTitle')}</option>
              <option value={t('ServicePregnancyTest_PostTitle')}>{t('ServicePregnancyTest_PostTitle')}</option>
              <option value={t('ServicePrescriptionRefills_PostTitle')}>{t('ServicePrescriptionRefills_PostTitle')}</option>
              <option value={t('ServiceProstateExam_PostTitle')}>{t('ServiceProstateExam_PostTitle')}</option>
              <option value={t('ServiceSexuallyDiseases_PostTitle')}>{t('ServiceSexuallyDiseases_PostTitle')}</option>
              <option value={t('ServiceOthers_PostTitle')}>{t('ServiceOthers_PostTitle')}</option>
            </select>
          </span>
          <input
            type="textarea"
            name="message"
            placeholder={t('ContactOne_Message')}
            value={message}
            onChange={handleInputChange}
            required
          />
          <div className="row">
            <div className="col-lg-6 col-md-6 ">
              <button className="btn-yellow mb-4" value="SUBMIT NOW">
                {t('Header_Book_Today')}
              </button>
            </div>
            <div className="col-lg-6 col-md-6 ">
              {alertFlag ?
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  <strong>{pacient}</strong> {t('ContactOne_Confirmation')}
                  <button type="button" className="close-button-contact " onClick={() => { setAlertFlag(false) }}>
                    x
                  </button>
                </div> : <span className="">{t('ContactOne_Confirmation')}</span>}
            </div>
          </div>

        </form>
      </div >
    </section >
  );
};

export default ContactOne;