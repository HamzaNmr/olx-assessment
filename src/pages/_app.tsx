import Providers from "@/components/providers";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const { messages } = pageProps;

  return (
    <NextIntlClientProvider
        locale={locale}
        messages={messages}
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
