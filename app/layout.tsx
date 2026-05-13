import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import {ThemeProvider} from "@/components/theme-provider"


const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SupportMe",
  description: "A platform for creators to receive support from their fans and followers.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(poppins.className, "h-full antialiased")}
      suppressHydrationWarning
    >
    <body>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
    </body>
    </html>
  );
}
