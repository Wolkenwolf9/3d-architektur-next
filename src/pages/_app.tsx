import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className='relative h-screen'>
        <Scene />
        <Component {...pageProps} />;
      </main>
    </>
  );
}
