import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/movies">Movies</Link></li>
      </ul>
    </nav>
  );
}