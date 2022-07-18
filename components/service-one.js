import { ServiceOneData } from "@/data";
import Link from "@/components/link";
import React from "react";
import Image from 'next/image'
import ServiceLaboratory1 from "@/images/services/Laboratory1.webp";
import ServiceUltrasound1 from "@/images/services/Ultrasound1.webp";
import ServiceCovid1 from "@/images/services/Covid1.webp";
import ServiceCureSuture1 from "@/images/services/CureSuture1.webp";
import ServiceDiseaseControls1 from "@/images/services/DiseaseControls1.webp";
import ServiceDotExam1 from "@/images/services/DotExam1.webp";
import ServiceEarWhash1 from "@/images/services/EarWhash1.webp";
import ServiceGeneralMedical1 from "@/images/services/GeneralMedical1.webp";
import ServiceInjection1 from "@/images/services/Injection1.webp";
import ServicePregnancyTest1 from "@/images/services/PregnancyTest1.webp";
import ServicePyshicalExam1 from "@/images/services/PyshicalExam1.webp";
import ServiceContraceptiveRemoval1 from "@/images/services/ContraceptiveRemoval1.webp";
import ServicePrescriptionRefills1 from "@/images/services/PrescriptionRefills1.webp";
import ServiceProstateExam1 from "@/images/services/ProstateExam1.webp";
import ServiceSexuallyDiseases1 from "@/images/services/SexuallyDiseases1.webp";
import ServiceInfectionTreatment1 from "@/images/services/InfectionTreatment1.webp";
import ServiceNailRemoval1 from "@/images/services/NailRemoval1.webp";
import ServicePapTest1 from "@/images/services/PapTest1.webp";
import { useTranslations } from 'next-intl';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
const ServiceOne = () => {

  const t = useTranslations('Index');
  return (
    <section className="service_area section_padding ">
      <div className="container" >
        <div className="col-md-12">
          <div className="hero-section-title text-center">
            <h1>{t('ServiceOneData_Title')}</h1>
          </div>
        </div>

        <>
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            loop={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="row mb-5">
                <div className="col-lg-4 col-md-6 ">
                  <div className="service_box ">
                    <div className="service_img">
                      <Image src={ServiceLaboratory1} alt="Imagen de laboratorio clínico" layout="responsive" />
                    </div>
                    <div className="service_details ">
                      <Link href="/services/laboratory">
                        <h2>{t('ServiceOneData_Title1')}</h2>
                      </Link>
                      <p>{t('ServiceOneData_Text1').substring(0, 48)}...</p>
                      <Link href="/services/laboratory" className="btn-yellow">
                        {t('ServiceOneData_Button')}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="service_box">
                    <div className="service_img">
                      <Image src={ServiceGeneralMedical1} alt="Imagen de laboratorio clínico" layout="responsive" />
                    </div>
                    <div className="service_details">
                      <Link href="/services/general-medical">
                        <h2>{t('ServiceGeneralMedical_PostTitle')}</h2>
                      </Link>
                      <p>{t('ServiceGeneralMedical_Text1').substring(0, 48)}...</p>
                      <Link href="/services/general-medical" className="btn-yellow">
                        {t('ServiceOneData_Button')}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="service_box">
                    <div className="service_img">
                      <Image src={ServicePapTest1} alt="Imagen de laboratorio clínico" layout="responsive" />
                    </div>
                    <div className="service_details">
                      <Link href="/services/pap-test">
                        <h2>{t('ServicePhysicalExam_PostTitle')}</h2>
                      </Link>
                      <p>{t('ServicePhysicalExam_Text1').substring(0, 52)}...</p>
                      <Link href="/services/pap-test" className="btn-yellow">
                        {t('ServiceOneData_Button')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="row mb-5">
                <div className="col-lg-4 col-md-6">
                  <div className="service_box">
                    <div className="service_img">
                      <Image src={ServiceUltrasound1} alt="Imagen de laboratorio clínico" layout="responsive" />
                    </div>
                    <div className="service_details">
                      <Link href="/services/ultrasound">
                        <h2>{t('ServiceUltrasound_PostTitle')}</h2>
                      </Link>
                      <p>{t('ServiceUltrasound_Text1').substring(0, 60)}...</p>
                      <Link href="/services/ultrasound" className="btn-yellow">
                        {t('ServiceOneData_Button')}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 ">
                  <div className="service_box ">
                    <div className="service_img">
                      <Image src={ServicePyshicalExam1} alt="Imagen de laboratorio clínico" layout="responsive" />
                    </div>
                    <div className="service_details ">
                      <Link href="/services/physical-exam">
                        <h2>{t('ServiceOneData_Title4')}</h2>
                      </Link>
                      <p>{t('ServiceOneData_Text4').substring(0, 49)}...</p>
                      <Link href="/services/physical-exam" className="btn-yellow">
                        {t('ServiceOneData_Button')}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="service_box">
                    <div className="service_img">
                      <Image src={ServiceDiseaseControls1} alt="Imagen de laboratorio clínico" layout="responsive" />
                    </div>
                    <div className="service_details">
                      <Link href="/services/disease-control">
                        <h2>{t('ServiceDiseaseControl_PostTitle')}</h2>
                      </Link>
                      <p>{t('ServiceDiseaseControl_Text1').substring(0, 51)}...</p>
                      <Link href="/services/disease-control" className="btn-yellow">
                        {t('ServiceOneData_Button')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="row mb-5">
                <div className="col-lg-4 col-md-6 ">
                  <div className="service_box ">
                    <div className="service_img">
                      <Image src={ServiceCureSuture1} alt="Imagen de laboratorio clínico" layout="responsive" />
                    </div>
                    <div className="service_details ">
                      <Link href="/services/cure-sutures">
                        <h2>{t('ServiceCureSutures_PostTitle')}</h2>
                      </Link>
                      <p>{t('ServiceCureSutures_Text1').substring(0, 60)}...</p>
                      <Link href="/services/cure-sutures" className="btn-yellow">
                        {t('ServiceOneData_Button')}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="service_box">
                    <div className="service_img">
                      <Image src={ServiceCovid1} alt="Imagen de laboratorio clínico" layout="responsive" />
                    </div>
                    <div className="service_details">
                      <Link href="/services/covid">
                        <h2>{t('ServiceCovid_PostTitle')}</h2>
                      </Link>
                      <p>{t('ServiceCovid_Text1').substring(0, 47)}...</p>
                      <Link href="/services/covid" className="btn-yellow">
                        {t('ServiceOneData_Button')}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="service_box">
                    <div className="service_img">
                      <Image src={ServiceSexuallyDiseases1} alt="Imagen de laboratorio clínico" layout="responsive" />
                    </div>
                    <div className="service_details">
                      <Link href="/services/sexually-diseases">
                        <h2>{t('ServiceSexuallyDiseases_PostTitle')}</h2>
                      </Link>
                      <p>{t('ServiceSexuallyDiseases_Text1').substring(0, 50)}...</p>
                      <Link href="/services/sexually-diseases" className="btn-yellow">
                        {t('ServiceOneData_Button')}
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row mb-5">
                <div className="col-lg-4 col-md-6 ">
                  <div className="service_box ">
                    <div className="service_img">
                      <Image src={ServiceInfectionTreatment1} alt="Imagen de laboratorio clínico" layout="responsive" />
                    </div>
                    <div className="service_details ">
                      <Link href="/services/infection-treatment">
                        <h2>{t('ServiceInfectionTreatment_PostTitle')}</h2>
                      </Link>
                      <p>{t('ServiceInfectionTreatment_Text1').substring(0, 48)}...</p>
                      <Link href="/services/infection-treatment" className="btn-yellow">
                        {t('ServiceOneData_Button')}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="service_box">
                    <div className="service_img">
                      <Image src={ServiceProstateExam1} alt="Imagen de laboratorio clínico" layout="responsive" />
                    </div>
                    <div className="service_details">
                      <Link href="/services/prostate-exam">
                        <h2>{t('ServiceProstateExam_PostTitle')}</h2>
                      </Link>
                      <p>{t('ServiceProstateExam_Text1').substring(0, 52)}...</p>
                      <Link href="/services/prostate-exam" className="btn-yellow">
                        {t('ServiceOneData_Button')}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="service_box">
                    <div className="service_img">
                      <Image src={ServiceDotExam1} alt="Imagen de laboratorio clínico" layout="responsive" />
                    </div>
                    <div className="service_details">
                      <Link href="/services/dot-exam">
                        <h2>{t('ServiceDotExam_PostTitle')}</h2>
                      </Link>
                      <p>{t('ServiceDotExam_Text1').substring(0, 48)}...</p>
                      <Link href="/services/dot-exam" className="btn-yellow">
                        {t('ServiceOneData_Button')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row mb-5">
                <div className="col-lg-4 col-md-6 ">
                  <div className="service_box ">
                    <div className="service_img">
                      <Image src={ServiceEarWhash1} alt="Imagen de laboratorio clínico" layout="responsive" />
                    </div>
                    <div className="service_details ">
                      <Link href="/services/ear-whash">
                        <h2>{t('ServiceEarWhash_PostTitle')}</h2>
                      </Link>
                      <p>{t('ServiceEarWhash_Text1').substring(0, 49)}...</p>
                      <Link href="/services/ear-whash" className="btn-yellow">
                        {t('ServiceOneData_Button')}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="service_box">
                    <div className="service_img">
                      <Image src={ServiceNailRemoval1} alt="Imagen de laboratorio clínico" layout="responsive" />
                    </div>
                    <div className="service_details">
                      <Link href="/services/nail-removal">
                        <h2>{t('ServiceNailRemoval_PostTitle')}</h2>
                      </Link>
                      <p>{t('ServiceNailRemoval_Text1').substring(0, 58)}...</p>
                      <Link href="/services/nail-removal" className="btn-yellow">
                        {t('ServiceOneData_Button')}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="service_box">
                    <div className="service_img">
                      <Image src={ServiceContraceptiveRemoval1} alt="Imagen de laboratorio clínico" layout="responsive" />
                    </div>
                    <div className="service_details">
                      <Link href="/services/contraceptive-removal">
                        <h2>{t('ServiceContraceptiveRemoval_PostTitle')}</h2>
                      </Link>
                      <p>{t('ServiceContraceptiveRemoval_Text1').substring(0, 62)}...</p>
                      <Link href="/services/contraceptive-removal" className="btn-yellow">
                        {t('ServiceOneData_Button')}
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row mb-5">
                <div className="col-lg-4 col-md-6 ">
                  <div className="service_box ">
                    <div className="service_img">
                      <Image src={ServiceInjection1} alt="Imagen de laboratorio clínico" layout="responsive" />
                    </div>
                    <div className="service_details ">
                      <Link href="/services/injections">
                        <h2>{t('ServiceLaboratory_PostTitle')}</h2>
                      </Link>
                      <p>{t('ServiceLaboratory_Text1').substring(0, 57)}...</p>
                      <Link href="/services/injections" className="btn-yellow">
                        {t('ServiceOneData_Button')}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="service_box">
                    <div className="service_img">
                      <Image src={ServicePrescriptionRefills1} alt="Imagen de laboratorio clínico" layout="responsive" />
                    </div>
                    <div className="service_details">
                      <Link href="/services/prescription-refills">
                        <h2>{t('ServicePrescriptionRefills_PostTitle')}</h2>
                      </Link>
                      <p>{t('ServicePrescriptionRefills_Text1').substring(0, 51)}...</p>
                      <Link href="/services/prescription-refills" className="btn-yellow">
                        {t('ServiceOneData_Button')}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="service_box">
                    <div className="service_img">
                      <Image src={ServicePregnancyTest1} alt="Imagen de laboratorio clínico" layout="responsive" />
                    </div>
                    <div className="service_details">
                      <Link href="/services/pregnancy-test">
                        <h2>{t('ServicePregnancyTest_PostTitle')}</h2>
                      </Link>
                      <p>{t('ServicePregnancyTest_Text1').substring(0, 51)}...</p>
                      <Link href="/services/pregnancy-test" className="btn-yellow">
                        {t('ServiceOneData_Button')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </>
      </div>
    </section>
  );
};

export default ServiceOne;
