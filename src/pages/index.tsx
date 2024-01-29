import Head from "next/head";
import { Hero } from "~/components/Hero";

import { api } from "~/utils/api";

export default function Home() {
  return (
    <>
      <Head>
        <title>Example NextJS</title>
        <meta name="description" content="Experimenting NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <section className="mb-24 grid grid-cols-1 gap-12  bg-slate-200 px-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-6xl font-bold">Experimental JS</h1>
          <p className="text-2xl">
            Save time by generating icons for your businesses website,
            applications, or brand using our AI digital icon generator.
          </p>
        </div>
      </section>
    </>
  );
}
