import "./globals.css";
import { Poppins } from "next/font/google";
import { Goldman } from "next/font/google";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-poppins", // Bisa dipakai di CSS
// });
// const goldman = Goldman({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: "Portofolio",
  description: "MyPortofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    >
      <body>
        <Navbar />
          {children}
        <Footer />
      </body>

    </html>
  );
}
