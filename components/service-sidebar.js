import { ServiceSidebarListData, ServiceSidebarOtherData } from "@/data";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTranslations } from 'next-intl';
import Link from "@/components/link";
const ServiceSidebar = () => {
  const t = useTranslations('Index');
  const [active, setActive] = useState(1);
  const [activeTwo, setActiveTwo] = useState(1);
  const router = useRouter();
  
  return (
    <div className="service_details_right">
      <h1 className="text-center">{t('ServiceOneData_Title')}</h1>
      <div className="tab-content">

        <div className="tab-pane show fade in active animated fadeIn">
          <div className="service_category">
            <ul>
              {
                (router.asPath != "/services/laboratory") ?
                  <li >
                    <Link href="/services/laboratory">
                      {t('ServiceLaboratory_PostTitle')}
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </li> 
                  : null
              }
              {
                (router.asPath != "/services/pap-test") ?
                  <li >
                  <Link href="/services/pap-test">
                    {t('ServicePapTest_PostTitle')}
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </li> 
                  : null
              }
              {
                (router.asPath != "/services/covid") ?
                  <li >
                    <Link href="/services/covid">
                    {t('ServiceCovid_PostTitle')}
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </li> 
                  : null
              }
              {
                (router.asPath != "/services/cure-sutures") ?
                  <li >
                    <Link href="/services/cure-sutures">
                    {t('ServiceCureSutures_PostTitle')}
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </li> 
                  : null
              }
               {
                (router.asPath != "/services/contraceptive-removal") ?
                  <li >
                    <Link href="/services/contraceptive-removal">
                    {t('ServiceContraceptiveRemoval_PostTitle')}
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </li> 
                  : null
              }
              {
                (router.asPath != "/services/disease-control") ?
                  <li >
                    <Link href="/services/disease-control">
                    {t('ServiceDiseaseControl_PostTitle')}
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </li> 
                  : null
              }
              {
                (router.asPath != "/services/dot-exam") ?
                  <li >
                    <Link href="/services/dot-exam">
                    {t('ServiceDotExam_PostTitle')}
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </li> 
                  : null
              }
              {
                (router.asPath != "/services/ear-whash") ?
                  <li >
                    <Link href="/services/ear-whash">
                    {t('ServiceEarWhash_PostTitle')}
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </li> 
                  : null
              }
              {
                (router.asPath != "/services/general-medical") ?
                  <li >
                    <Link href="/services/general-medical">
                    {t('ServiceGeneralMedical_PostTitle')}
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </li> 
                  : null
              }
              {
                (router.asPath != "/services/infection-treatment") ?
                  <li href="/services/infection-treatment">
                    <Link href="/services/infection-treatment">
                    {t('ServiceInfectionTreatment_PostTitle')}
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </li> 
                  : null
              }
              {
                (router.asPath != "/services/injections") ?
                  <li >
                    <Link href="/services/injections">
                    {t('ServiceInjections_PostTitle')}
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </li> 
                  : null
              }
              {
                (router.asPath != "/services/nail-removal") ?
                  <li >
                    <Link href="/services/nail-removal">
                    {t('ServiceNailRemoval_PostTitle')}
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </li> 
                  : null
              }
              {
                (router.asPath != "/services/physical-exam") ?
                  <li >
                    <Link href="/services/physical-exam">
                    {t('ServicePhysicalExam_PostTitle')}
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </li> 
                  : null
              }
              {
                (router.asPath != "/services/pregnancy-test") ?
                  <li >
                    <Link href="/services/pregnancy-test">
                    {t('ServicePregnancyTest_PostTitle')}
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </li> 
                  : null
              }
              {
                (router.asPath != "/services/prescription-refills") ?
                  <li >
                    <Link href="/services/prescription-refills">
                    {t('ServicePrescriptionRefills_PostTitle')}
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </li> 
                  : null
              }
              {
                (router.asPath != "/services/prostate-exam") ?
                  <li >
                    <Link href="/services/prostate-exam">
                    {t('ServiceProstateExam_PostTitle')}
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </li> 
                  : null
              }
              {
                (router.asPath != "/services/sexually-diseases") ?
                  <li >
                    <Link href="/services/sexually-diseases">
                    {t('ServiceSexuallyDiseases_PostTitle')}
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </li> 
                  : null
              }
              {
                (router.asPath != "/services/ultrasound") ?
                  <li >
                    <Link href="/services/ultrasound">
                    {t('ServiceUltrasound_PostTitle')}
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </li> 
                  : null
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;
