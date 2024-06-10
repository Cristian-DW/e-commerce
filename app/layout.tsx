import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import CartProvider from "../provider/CartProvider";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

/**
 * Metadata for the application.
 */
export const metadata: Metadata = {
  title: "E-Shop",
  description: "E-commerce app",
};

/**
 * RootLayout component that sets up the overall structure of the app.
 * It includes a NavBar, Footer, and provides the Cart context to the children.
 * @param props The properties for the component, including the children elements.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-slate-700`}>
        <Toaster toastOptions={{ 
          style: {
            background: "#363636",
            color: "#fff",
          },
          duration: 4000 }} />
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow ">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
