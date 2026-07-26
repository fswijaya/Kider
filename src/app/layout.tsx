import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Spinner from "@/components/Spinner";
import BackToTop from "@/components/BackToTop";
import AnimationInit from "@/components/AnimationInit";

export const metadata: Metadata = {
  title: "Kider - Preschool Website Template",
  description: "Kider Preschool Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@600&family=Lobster+Two:wght@700&display=swap"
          rel="stylesheet"
        />
        {/* Icon Font Stylesheets */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        {/* Animate.css */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          rel="stylesheet"
        />
        {/* Customized Bootstrap */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
      </head>
      <body>
        <div className="container-xxl bg-white p-0">
          <Spinner />
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </div>
        <AnimationInit />
      </body>
    </html>
  );
}
