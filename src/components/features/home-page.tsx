import styles from "@/styles/Home.module.css";
import { useTranslations } from "next-intl";
import MainLayout from "@/components/layouts/main-layout";
import { metadata } from "@/resources/config";

function HomePage() {
  const t = useTranslations('home');
  const { home } = metadata;

  return (
    <MainLayout
      head={{ 
        title: home.title, 
        description: home.description 
      }}
    >
      <main className={styles.main}>
        <h1 className={styles.title}>
          {t('home_welcome')}
        </h1>
      </main>
    </MainLayout>
  )
}

export default HomePage