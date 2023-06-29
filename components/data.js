import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Increase your benefits",
  desc: "The APY for $JERS stake of average length will be around 20% while traditional banks average less than 2%. In addition to the unprecedented yield, there is also the tendency of the $JERS price to appreciate.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Distribution 🚛",
      desc: "All $JERS Token used to purchase JTT-SAVE to stake are distributed in: 33% Burned, 33% Staking Pool, 33% Rewards Pool",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Expecting APY 💰",
      desc: "We are expecting the APY for a 1 year stake to be about 12% , 6 year stake is 30%, an 10+ year stakes is 43% with varied APY between these example time increments.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "JERS to real benefies 🛳",
      desc: "Virtual currency to stake Rewards Pool Fund dips below 50% 5% Increments per day until the fund reaches 100%",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

/*
const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};
*/

export {benefitOne};
