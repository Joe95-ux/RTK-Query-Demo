import Head from "next/head";
import News from "@/components/News";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Create News App</title>
        <meta name="description" content="News app created with nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <News/>
    </>
  );
}