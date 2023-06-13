import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DESIGNO",
  description: `Award-winning custom designs and digital branding solutions
  With over 10 years in the industry, we are experienced in creating fully
  responsive websites, apps, and engaging brand experiences. Find out more about
  our services. Learn More`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
