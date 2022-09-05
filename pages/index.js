import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { user, isLoading } = useUser();
  console.log(user?.sub);
  return (
    <div className={styles.container}>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
      <p>Name: {user?.name}</p>
    </div>
  );
}
