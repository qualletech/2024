"use client";

import { useRouter } from "next/navigation";
import StyleProvider from "../styles/StyleProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
        />
      </head>
      <body>
        <StyleProvider>
          <h1 onClick={() => router.push("/")}>Qualle Tech</h1>
          <aside>
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>Github</p>
          </aside>
          <main>{children}</main>
        </StyleProvider>
      </body>
    </html>
  );
}
