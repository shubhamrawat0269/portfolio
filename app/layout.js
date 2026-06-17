import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/organisms/CustomCursor";
import LenisScroll from "./components/organisms/LenisScroll";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Shubham Rawat",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased bg-[#131313] cursor-none`}
      >
        <LenisScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
