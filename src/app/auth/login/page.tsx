"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./login.module.css";  

export default function LoginPage() {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("123456");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "admin" && password === "123456") {
      router.push("/home");
    } else {
      alert("نام کاربری یا رمز عبور اشتباه است");
    }
  };

  return (
    <div className={styles.container}>
      <h2>ورود</h2>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="نام کاربری"
          className={styles.input}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="رمز عبور"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          ورود
        </button>
      </form>
      <div className={styles.links}>
        <Link href="/auth/signup">ثبت نام</Link>
        <Link href="/auth/forgot-password">فراموشی رمز عبور</Link>
      </div>
    </div>
  );
}

  