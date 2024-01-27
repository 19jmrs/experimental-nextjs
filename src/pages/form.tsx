import Head from "next/head";
import { ProfileForm } from "~/components/ProfileForm";

export default function Form() {
  return (
    <>
      <Head>
        <title>Forn</title>
        <meta name="description" content="Input form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto mt-24 flex min-h-screen flex-col gap-4 px-8">
        <ProfileForm />
      </main>
    </>
  );
}
