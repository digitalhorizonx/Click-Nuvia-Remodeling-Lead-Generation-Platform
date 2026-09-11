import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clicknuviaremodeling.com"),
  title: { default: "Click Nuvia Remodeling | Start Your Remodel", template: "%s | Click Nuvia Remodeling" },
  description: "Start your home remodeling project with a simple qualification flow for kitchens, bathrooms, additions, ADUs and whole-home renovations.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Click Nuvia Remodeling | Start Your Remodel",
    description: "Tell us about your remodeling project and take the next step toward a qualified project conversation.",
    url: "https://www.clicknuviaremodeling.com",
    siteName: "Click Nuvia Remodeling",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Layout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
