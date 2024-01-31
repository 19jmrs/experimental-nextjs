import Head from "next/head";
import { DataTable } from "~/components/DataTable";
import { columns } from "~/components/columns";
import { api } from "~/utils/api";

export default function Submitions() {
  const submitions = api.submitions.getSubmtions.useQuery();

  return (
    <>
      <Head>
        <title>Submitions</title>
        <meta name="description" content="All form submitions by the user" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto mt-24 flex min-h-screen flex-col gap-4 px-8">
        <DataTable
          data={submitions.data ? submitions.data : []}
          columns={columns}
        />
      </main>
    </>
  );
}
