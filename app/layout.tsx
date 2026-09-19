import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DSA Visualizer",
  description: "Interactive data structures and algorithm visualizer",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}