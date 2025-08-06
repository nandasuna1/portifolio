import React from "react";
import { Page, GoBack, Image } from "./styled";
import image from '/img/icons/coffeAndCode.png'
import { useTranslation } from "react-i18next";
export default function NotFound() {
  const { t } = useTranslation();

  return (
    <Page>

      <Image src={image}  />
      <h1>{t('notFound.title')}</h1>
      <p>{t('notFound.description')}</p>

      <GoBack to="/">{t('notFound.button')}</GoBack>
    </Page>
  );
}
