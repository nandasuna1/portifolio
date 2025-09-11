import React from "react";
import { useParams } from "react-router-dom";
import { publishedApps } from "../publishedAppsList";
import { Container, Description, Image, Section, SubTitle, Title } from "./styles";
import { useTranslation } from "react-i18next";
import NotFound from "../../NotFound";
export default function PublishedAppsDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const publishedApp = publishedApps.find((app) => t(app.id) === id);

  if (!publishedApp) {
    return <NotFound />;
  }

  return (
    <Section>
      <Container>
        <Title>{t(publishedApp.label)}</Title>
        <Description>{t(publishedApp.description)}</Description>
        <SubTitle>{t ('publishedAppsDetails.privacyPolicy')} - {t(publishedApp.label)}</SubTitle>
        <Description>{t(publishedApp?.privacyPolicy)}</Description>
      </Container>
      <Container>
        <Image src={publishedApp?.image} />
      </Container>
    </Section>
  );
}
