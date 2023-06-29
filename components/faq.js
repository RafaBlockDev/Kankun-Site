import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How much I will receive of JERS token per day? 🤔",
    answer: "You will receive 1 $JERS token per day. Remember that you can claim once 30 days has been staked.",
  },
  {
    question: "Have I a limit of NFTs to stake? ⌛️",
    answer: "No, you do not have a limit to stake NFTs. Is recommended stake all your NFTs",
  },
  {
    question: "How I swap my JERS token? 🧐",
    answer:
      "You need to claim your tokens rewarded, then, you need to send it to our vault to buy Reward Credits; this last ones works as an internal currency accepted on our upgraded travel platform TRIPFLIX 2.0 PRO, with domain https://www.globaltrotting.com.co, please review on channel 🎢┃tripflix-travel-platform  on JTTribe discord server.",
  },
  {
    question: "How can I make my $JERS tokes grow and gain compound interest? 🏦",
    answer:
      "Lock your $JERS as JTT-SAVE for 28 to 2888 days and watch your stake grow daily. The longer you stake, the more you earn - `Delay and get Paid`  Unlike traditional banks' average 2% APY, $JERS provides a remarkable average of 20% APY, coupled with the possibility of increased investment value, gain is paid in $JERS",
  },
  {
    question: "Do you offer technical support? 👨🏻‍💻",
    answer:
      "Yes, join to our discord to get support openning a ticket or asking in our channels",
  },
];

export default Faq;