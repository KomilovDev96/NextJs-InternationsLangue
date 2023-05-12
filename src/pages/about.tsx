import React, { ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next'
interface Props {}

export default function AboutPage({}: Props): ReactElement {
  const { t } = useTranslation();
  return <div>{t('about:about')}</div>;
}
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about"])),
    },
  };
}
