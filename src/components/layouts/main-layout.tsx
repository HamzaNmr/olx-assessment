import Head from "next/head"
import { LayoutProps } from "@/interfaces";

export default function MainLayout({
    head = { title: "Next app", description: "" },
    children
}: LayoutProps) {
  return (
    <>
        <Head>
            <title>{head.title}</title>
            <meta name="description" content={head.description}/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {children}
    </>
  )
}
