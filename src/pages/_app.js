 import "@/styles/globals.css";
 import Layout from "@/components/layouts/Layout";
import { ThemeProvider } from "next-themes";
import { CartProvider } from "@/utils/ContextReducer";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <CartProvider>
      <Layout>
  <Component {...pageProps} />
  </Layout>
  </CartProvider>
  </ThemeProvider>);
}
