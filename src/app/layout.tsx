import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rate APP",
  description: "Ratings ask valorations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="m-auto max-w-screen-lg h-screen p-4 flex items-center justify-center flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
