import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

const Home: NextPage = ({ products }: any) => {
  
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Home page</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res: any) => res.json()
  );
  return {
    props: {
      products,
    }
  };
};
