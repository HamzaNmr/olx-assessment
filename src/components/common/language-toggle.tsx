import styles from '@/styles/language-toggler.module.css';
import { useRouter } from 'next/router';
import { Button } from '@/components/common/ui/button';

function LanguageToggle() {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  };

  return (
    <Button 
      variant="ghost" 
      className={styles.toggleButton} onClick={toggleLanguage}
      label={locale === "en" ? "العربية" : "English"}
    />
  );
};

export default LanguageToggle;