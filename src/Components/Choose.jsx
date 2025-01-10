import React from "react";
import onlineBankingIcon from "./../assets/icon-online.svg";
import budgetingIcon from "./../assets/icon-budgeting.svg";
import onboardingIcon from "./../assets/icon-onboarding.svg";
import apiIcon from "./../assets/icon-api.svg";

const features = [
  {
    icon: onlineBankingIcon,
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: budgetingIcon,
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },
  {
    icon: onboardingIcon,
    title: "Fast Onboarding",
    description:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    icon: apiIcon,
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

function WhyChoose() {
  return (
    <section className="bg-gray-200 py-16 px-6 lg:px-20">
      {/* Title and Description */}
      <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 mb-12">
        <h2 className="text-3xl font-bold lg:text-4xl mb-4 text-gray-900">
          Why choose Easybank?
        </h2>
        <p className="text-gray-600 text-sm lg:text-base">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="mb-6 w-16 h-16"
            />
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm lg:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;
