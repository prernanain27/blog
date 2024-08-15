"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const homeClick = () => {
    router.push("/");
  };
  const workClick = () => {
    router.push("/work");
  };
  const blogClick = () => {
    router.push("/blog");
  };
  const guestbookClick = () => {
    router.push("/guestbook");
  };
  return (
    <main
      style={{
        backgroundColor: "black",
        padding: "32px",
        color: "white",
        width: "100%",
        height: "100vh",
      }}
    >
      <div style={{ display: "flex", gap: "32px" }}>
        <button onClick={homeClick}>Home</button>
        <button onClick={workClick}>Work</button>
        <div onClick={blogClick}>Blog</div>
        <div onClick={guestbookClick}>Guestbook</div>
      </div>
    </main>
  );
}
