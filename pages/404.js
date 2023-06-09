import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="notfound">
      <h1>Ooooops...</h1>
      <h2>Page requested not found!</h2>
      <p>
        Go back to <Link href="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
