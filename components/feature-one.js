import React from "react";
import { useTranslations } from 'next-intl';
const FeatureOne = () => {
  const t = useTranslations('Index');
  return (
    <div className="feature_service_area text-center">
       <div className="feature_service_box_width">
        <i className="icon-clock"></i>
        <p>{t('FeatureOneData_Without_Date')}</p>
      </div>
      <div className="feature_service_box_width">
        <i className="icon-building"></i>
        <p>{t('FeatureOneData_Atention_Adult_Child')}</p>
      </div>
      <div className="feature_service_box_width">
        <i className="icon-diploma"></i>
        <p>{t('FeatureOneData_Without_Secure')}</p>
      </div>
      <div className="feature_service_box_width">
        <i className="icon-support"></i>
        <p>{t('FeatureOneData_More_Experience')}</p>
      </div>
      <div className="feature_service_box_width">
        <i className="icon-location"></i>
        <p>{t('FeatureOneData_Clinic_Hispany_in_Houston')}</p>
      </div>
    </div>
  );
};

export default FeatureOne;
