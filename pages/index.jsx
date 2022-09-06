import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { user, isLoading } = useUser();
  console.log(user?.sub);
  return (
    <div className={styles.container}>
      <Link href="/api/auth/login">Login</Link>
      <Link href="/api/auth/logout">Log Out</Link>
      <p>Name: {user?.name}</p>
    </div>
  );
}
