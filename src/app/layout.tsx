import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
// import { Footer, Navbar } from "~/components/layout";
import TanstackQueryProvider from "./providers";
import { Toaster } from "sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Camping Rental",
  description: "Camping Rental"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TanstackQueryProvider>
        <body
          className={`${montserrat.variable}  ${poppins.variable} font-sans antialiased`}
        >
          <NuqsAdapter>{children}</NuqsAdapter>
          <Toaster />
        </body>
      </TanstackQueryProvider>
    </html>
  );
}
