import Link from "next/link";

export function Logo(props: any) {
  return (
    <Link href="/">
      <img className={props.className} src={props.src} alt="Logo" />
    </Link>
  );
}
