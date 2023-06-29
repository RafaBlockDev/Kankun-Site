import Head from "next/head";
import Navbar from "../components/stake/navbar";
import Footer from "../components/footer";
import Cta from "../components/cta";
import OwnNFT from "../components/stake/nft";

const Stake = () => {
  return (
    <>
      <Head>
        <title>Jttribe Stake</title>
        <meta
          name="description"
          content="Jttribe Stake is a platform to stake your JTT NFTs"
        />
        <link rel="icon" href="/favi.png" />
      </Head>

      <Navbar />
      <OwnNFT />
      <Cta />
      <Footer />
      {/*<PopupWidget />**/}
    </>
  );
}

export default Stake;