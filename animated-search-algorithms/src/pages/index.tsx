import Head from "next/head";
import { Inter } from "next/font/google";
import { SearchAnimation } from "@/components/SearchAnimation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Animated Search Algorithm</title>
      </Head>
      <main 
        className={inter.className}
        style={{ display: "flex", flexDirection: "column",}}
      >
        <h2>🔍 Searching Algorithms with React</h2>
        <SearchAnimation defaultTarget={12} />
      </main>
    </>
  );
}
