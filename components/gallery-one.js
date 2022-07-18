import React from "react";
import GalleryCard from "@/components/gallery-card";
import dot from "@/images/gallery/dot.webp";
import examen from "@/images/gallery/examen.webp";
import infection from "@/images/gallery/infection.webp";
import sexual from "@/images/gallery/sexual.webp";
import tratamiento from "@/images/gallery/tratamiento.webp";
import ultrasound from "@/images/gallery/ultrasound.webp";
import { useTranslations } from 'next-intl';

const GalleryOne = () => {
  const t = useTranslations('Index');
  return (
    <section className="gallery_area">
      <GalleryCard
        src={ultrasound}
        alt=""
        title={t('GalleryOneData_Title1')}
        url="/services/ultrasound"
      />
      <GalleryCard
        src={examen}
        alt=""
        title={t('GalleryOneData_Title2')}
        url="/services/physical-exam"
      />
      <GalleryCard
        src={tratamiento}
        alt=""
        title={t('GalleryOneData_Title3')}
        url="/services/disease-control"
      />
      <GalleryCard
        src={infection}
        alt=""
        title={t('GalleryOneData_Title4')}
        url="/services/infection-treatment"
      />
      <GalleryCard
        src={sexual}
        alt=""
        title={t('GalleryOneData_Title5')}
        url="/services/sexually-diseases"
      />
      <GalleryCard
        src={dot}
        alt=""
        title={t('GalleryOneData_Title6')}
        url="/services/dot-exam"
      />
    </section>
  );
};

export default GalleryOne;
