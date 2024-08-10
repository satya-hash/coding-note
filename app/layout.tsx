import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Coding Note | Your Ultimate Resource for LeetCode Solutions and Programming Insights",
  description:
    "Coding Note is your go-to destination for detailed LeetCode solutions, programming tutorials, and coding tips. Whether you're preparing for coding interviews or looking to enhance your coding skills, our comprehensive guides and resources will help you stay ahead in the tech industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </head>
      <body
        className={`${inter.className} bg-bg-primary text-text-primary text-base`}
      >
        <Navbar />
        <div className="mb-36">{children}</div>
        <Footer />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"
        ></script>
      </body>
    </html>
  );
}
