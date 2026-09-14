import { COMPANY, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: COMPANY.shortName,
    template: `%s | ${COMPANY.shortName}`,
  },
  description:
    "REPLA Technologies delivers AI, software, web, and mobile solutions for organizations in Saudi Arabia and worldwide.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
