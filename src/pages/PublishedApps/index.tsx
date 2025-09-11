import React from "react";
import {
    Card,
  CardDescription,
  CardLink,
  CardTitle,
  Container,
  Section,
  Title,
} from "./styled.ts";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { publishedApps } from "./publishedAppsList.ts";

export default function PublishedApps() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleNavigation = (link: string) => {
        navigate(link);
    }



  return (
    <Section id="PublishedApps">
          <Title>{t('publishedApps.title')}</Title>
      <Container>
          {publishedApps.map(data => {
            return (
              <Card key={t(data.id)}>
                <CardTitle>{t(data.label)}</CardTitle>
                <CardDescription>{t(data.description)}</CardDescription>
                <CardLink onClick={() => handleNavigation(data.link)}>{t('publishedApps.seeMore')}</CardLink>
            </Card>
            )
          })}
      </Container>
    </Section>
  );
}
