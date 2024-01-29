import Head from "next/head";
import { api } from "~/utils/api";

export default function Submitions() {
  const submitions = api.getSubmitions.getSubmtions.useQuery();
  return (
    <>
      <Head>
        <title>Submitions</title>
        <meta name="description" content="All form submitions by the user" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto mt-24 flex min-h-screen flex-col gap-4 px-8"></main>
    </>
  );
}
