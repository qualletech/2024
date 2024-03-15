"use client";

import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <html lang="en">
      <body>
        <h1 onClick={() => router.push("/")}>Qualle Tech</h1>
        <aside>
          <p>LinkedIn</p>
          <p>Instagram</p>
          <p>Github</p>
        </aside>
        <main>{children}</main>
      </body>
    </html>
  );
}
