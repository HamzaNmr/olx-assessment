import { GetServerSideProps } from 'next';
import HomePage from '@/components/features/home-page';
import { fonts } from '@/resources/config';

export default function Root() {
  return (
    <div className={`${fonts.primary} ${fonts.secondary}`}>
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