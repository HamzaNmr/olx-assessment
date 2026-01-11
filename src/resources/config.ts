import { geistMono, geistSans } from "@/resources/fonts";
import { HOME_METADATA } from "./meta";

export const fonts = {
    primary: geistSans.variable,
    secondary: geistMono.variable
}

export const metadata = {
    siteName: "OLX Assessment",
    siteUrl: "https://olx-assessment.example.com",
    siteDescription: "An assessment project for OLX",
    tags: ["OLX", "Assessment"],
    home: HOME_METADATA,
}