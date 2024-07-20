import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Random Quote Machine",
  description: "Lots of great quotes for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="footer">
          <div className="text-center"><a href="https://github.com/WizardOfSaaS/quote-machine" target="_blank">Source Code</a> by <a href="https://github.com/WizardOfSaaS" target="_blank">WizardOfSaaS</a></div>
          <div className="text-center">Quotes from <a href="https://github.com/lukePeavey/quotable" target="_blank">Quotable</a></div>
        </div>
      </body>
    </html>
  );
}
