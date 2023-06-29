import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";

const Home = () => {
  return (
    <>
      <Head>
        <title>KANKUN</title>
        <meta
          name="description"
          content="Jttribe Stake is a platform to stake your JTT NFTs"
        />
        <link rel="icon" href="/favi.png" />
      </Head>

      <Navbar />
      <Hero />
      {/*<SectionTitle
        pretitle="JTT Staking Benefits"
        title=" How stake and token system works?">
        The token $JERS will be swapped for JTT-SAVE a virtual currency used for the staking process. You can Stake your $JERS by locking up any amount as JTT-SAVE for a period between 28 and 2888 days. Stake accrues rewards every day that will compound, and the amount of yield depends on the length of your Stake "Delay and get Paid" 🚀
      </SectionTitle>*/}
      {/*<Benefits data={benefitOne} />*/}
      {/*<Benefits imgPos="right" data={benefitTwo} />**/}
      {/*<SectionTitle
        pretitle="Watch our promo video"
        title="Expand your travels and be a digital nomad 🌎">
        You have the posibilities to get disscount on your future travels with your family, or whoever you want.
         With gorilla NFTs and JTT-Staking increase your benefies in yatches, hotels, and more!
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Team"
        title="Here's who is our team 🤝">
        We have a professional and experimented team that has working during the project.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>*/}
      {/*<Faq />*/}
      {/*<Cta />*/}
      {/*<Footer />*/}
      {/*<PopupWidget />**/}
    </>
  );
}

export default Home;