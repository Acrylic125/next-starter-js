import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { user, isLoading } = useUser();
  return (
    <div className={styles.container}>
      <Link href="/api/auth/login">Login</Link>
      <Link href="/api/auth/logout">Log Out</Link>
      <p>Name: {user?.name}</p>
    </div>
  );
}
