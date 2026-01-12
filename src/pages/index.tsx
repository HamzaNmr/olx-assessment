import { GetServerSideProps } from 'next';
import HomePage from '@/components/features/home-page';
import { fonts } from '@/resources/config';
import Header from '@/components/widgets/header';

export default function Root() {
  return (
    <div className={`${fonts.primary} ${fonts.secondary}`}>
      <Header />
      <HomePage />
    </div>
  );
}

interface Props {
  messages: Record<string, string>;
  locale: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ locale }) => {
  const messages = await import(`../messages/${locale || 'en'}.json`).then((m) => m.default);

  return {
    props: {
      messages,
      locale: locale || 'en'
    },
  };
};