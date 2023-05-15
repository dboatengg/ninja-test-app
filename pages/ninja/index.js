import React from "react";
import Head from "next/head";
import styles from "../../styles/Ninja.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { data },
  };
};

const Ninja = ({ data }) => {
  return (
    <>
      <Head>
        <title>Ninja Listing | List</title>
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {data.map((user) => (
          <Link
            className={styles.user}
            key={user.id}
            href={`/ninja/${user.id}`}
          >
            <h3>{user.name}</h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Ninja;
