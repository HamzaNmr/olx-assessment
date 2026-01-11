import { NextIntlClientProvider } from "next-intl";
import { AppInitialProps } from "next/app";
import { useRouter } from "next/router";

interface ProvidersProps extends AppInitialProps {
    children: React.ReactNode;
}

function Providers({ 
  children,
  pageProps,
}: ProvidersProps) {
  const { locale } = useRouter();
  const { messages } = pageProps;

  return (
    <>
      <NextIntlClientProvider
          locale={locale}
          messages={messages}
      >
        {children}
      </NextIntlClientProvider>
    </>
  )
}

export default Providers