import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/lib/provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <ReduxProvider> {children}</ReduxProvider>
      </body>
    </html>
  );
}
