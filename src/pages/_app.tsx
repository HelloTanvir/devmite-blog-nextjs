// import "tailwindcss/tailwind.css";
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
// export default MyApp
// import "@/css/tailwind.css";
// import '@/css/prism.css'
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout';
import '../styles/globals.css';

// import Head from "next/head";

// import Analytics from "@/components/analytics";
// import LayoutWrapper from "@/components/LayoutWrapper";
// import { ClientReload } from "@/components/ClientReload";

// const isDevelopment = process.env.NODE_ENV === "development";
// const isSocket = process.env.SOCKET;

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider enableSystem attribute="class">
            {/* <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head> */}
            {/* {isDevelopment && isSocket && <ClientReload />} */}
            {/* <Analytics /> */}
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}
