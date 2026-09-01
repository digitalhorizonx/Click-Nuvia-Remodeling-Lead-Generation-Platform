import type { Metadata } from "next";
import "./styles.css";
export const metadata: Metadata = { title: "Click Nuvia Remodeling | Start Your Remodel", description: "Plan your home remodel with a trusted local professional.", robots: { index: true, follow: true } };
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
