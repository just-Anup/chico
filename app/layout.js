import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VisualEffects from "./components/VisualEffects";

export const metadata = {
  title: "Your Brand",
  description:
    "Premium video editing for creators.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">

      <body>

        <VisualEffects />

        <Navbar />

        {children}

        <Footer />

      </body>

    </html>
  );
}