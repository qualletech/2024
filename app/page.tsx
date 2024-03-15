"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <h2>Qualle noun - /kwɑːl.i/ quall-e - jellyfish</h2>
      <section onClick={() => router.push("/projects")}>Developed by</section>
      <section onClick={() => router.push("/about")}>Get to know</section>
      <section onClick={() => router.push("/contact")}>Work with</section>
    </>
  );
}
