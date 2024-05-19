/** @format */

import React from "react";
import avatar from "../Assets/images/ProfilePictures/pic.jpg";
const DataContext = React.createContext();

const dataList = {
  name: "Xseler",
};

const FreqAQst = [
  {
    id: 1,
    question: "How does the CV building tool works?",
    answer:
      "Our CV building tool guides you step-by-step through the process of creating a professional CV. You can input your information, choose from various templates, and customize the layout to suit your preferences.",
  },
  {
    id: 2,
    question: "What types of CV templates are available?",
    answer:
      "We offer a wide range of professionally designed CV templates, including traditional, modern, creative, and industry-specific styles. You can choose the template that best showcases your skills and experience.",
  },
  {
    id: 3,
    question: "Is the CV building tool really free to use?",
    answer:
      "Yes, our CV building tool is completely free to use. You can create, edit, and download your CV without any cost or hidden fees.",
  },
  {
    id: 4,
    question: "How does the CV review process work?",
    answer:
      "Our team of experts provides personalized feedback on your CV, highlighting areas for improvement and offering suggestions to enhance its effectiveness. You can submit your CV for review through our platform, and we'll provide detailed feedback within a specified timeframe.",
  },
  {
    id: 5,
    question: "What are the benefits of subscribing to your service?",
    answer:
      "Subscribers enjoy exclusive perks, including priority access to CV review services, enhanced visibility to employers through top placement in search results, and personalized job application assistance from our team of experts.",
  },
  {
    id: 6,
    question: "How does the subscriber feature help with job search?",
    answer:
      "Subscribers' names are prioritized in employers' search results, increasing visibility and opportunities for connection. Additionally, subscribers receive personalized job application support, including tailored recommendations and assistance with the application process.",
  },
  {
    id: 7,
    question: "Can I edit my CV after creating it?",
    answer:
      "Yes, you can edit your CV at any time. Simply log in to your account, access your saved CV, and make any necessary changes or updates.",
  },
  {
    id: 8,
    question: "How does the job application assistance work?",
    answer:
      "Our job application assistance service provides personalized support throughout the application process, including resume optimization, cover letter writing, interview preparation, and job search strategies tailored to your goals and preferences.",
  },
  {
    id: 9,
    question: "What kind of support do you offer if I encounter issues?",
    answer:
      "We offer comprehensive customer support to address any issues or questions you may have. You can reach out to our support team via email (support@xseler.com), live chat, or phone (+23480-5555-5555) for prompt assistance and resolution.",
  },
  {
    id: 10,
    question: "Is my personal information safe and secure on your platform?",
    answer:
      "Yes, we take the privacy and security of your personal information seriously. Our platform employs robust security measures to protect your data and ensure confidentiality at all times. We adhere to strict privacy policies and industry standards to safeguard your information.",
  },
];

const experience = [
  { id: 1, select: "Select Experience" },
  { id: 2, entry: "Entry Level" },
  { id: 3, zo: "0-1 Year" },
  { id: 4, of: "2-5 Years" },
  { id: 5, st: "6-10 Years" },
  { id: 6, ta: "Above 10 Years" },
];
const planList = [
  { id: 1, plan: "Free", amount: 0, duration: "For Life" },
  { id: 2, plan: "Lite", amount: 2999, duration: "3 Months" },
  { id: 3, plan: "Pro", amount: 4999, duration: "3 Months" },
];
const transactionHistory = [
  {
    id: 1,
    transaction_id: 3434242,
    status: "Successful",
    amount: 2999,
    payment_method: "USSD",
  },
  {
    id: 2,
    transaction_id: 4242344,
    status: "Failed",
    amount: 4999,
    payment_method: "Card",
  },
  {
    id: 3,
    transaction_id: 6836746,
    status: "Successful",
    amount: 2999,
    payment_method: "Bank Transfer",
  },
];

const usersList = {
  //PERSONAL DETAILS COLLECTIONS
  avatar: avatar,
  sname: "Ijiwade",
  fname: "James",
  onames: "Oluwafemi",
  email: "ijiwadejames@gmail.com",
  pnum: "08134014066",
  address: "3762C, New Jersey, USA",
  website: "www.xseler.com",
  linkedin: "jamesijiwade",
  portfolio: "ijiwadejames",

  //CAREER OBJECTIVE
  objective:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequatur explicabo quaerat beatae ex, aliquam omnis commodi qui blanditiis placeat, vel quibusdam magnam quidem maiores exercitationem quod excepturi suscipit voluptatum.",

  //HOBBIES
  hobbies: "Reading, Singing, Coding, Researching",

  //ACADEMIC QUALIFICATIONS
  iAttended: "Adekunle Ajasin University",
  dAStarted: "24/10/2013",
  dAEnded: "24/03/2017",
  degree: "Bachelor of Science",
  course: "Chemistry",
  dClass: "Second Class",

  //WORK EXPERIENCE
  org: "Elixir Global Food Manufacturing Limited",
  add: "First Commercial Road, Oluyole Industrial Estate, Oluyole, Ibadan",
  position: "Environmental Consultant",
  jobTitle: "Software Dev",
  dWStarted: "",
  dWEnded: "",
  started: "13/04/2021",
  isChecked: true,
  duty:
    "Handling environmental duties on behalf of the company and many more companies",
};
const categories = [
  "Personal Details",
  "Academic Qualification",
  "Career Objectives",
  "Work Experience",
  "Hobbies",
];

const cvTemplates = ["Entry Level", "Professional", "Academic CV"];

const defaultCountry = [
  //LITE PLAN STARTS HERE!
  {
    country: "EUR",
    currency: "EUR",
    plan: "Lite",
    details: {
      durAmount: [
        { duration: "1 Month", amount: 1.5 },
        { duration: "2 Months", amount: 2 },
        { duration: "3 Months", amount: 2.5 },
      ],
    },
  },
  {
    country: "GBP",
    currency: "GBP",
    plan: "Lite",
    details: {
      durAmount: [
        { duration: "1 Month", amount: 1.5 },
        { duration: "2 Months", amount: 2 },
        { duration: "3 Months", amount: 2.5 },
      ],
    },
  },

  {
    country: "GH",
    currency: "GHS",
    plan: "Lite",
    details: {
      durAmount: [
        { duration: "1 Month", amount: 500 },
        { duration: "2 Months", amount: 100 },
        { duration: "3 Months", amount: 30 },
      ],
    },
  },
  {
    country: "KE",
    currency: "KES",
    plan: "Lite",
    details: {
      durAmount: [
        { duration: "1 Month", amount: 50 },
        { duration: "2 Months", amount: 10 },
        { duration: "3 Months", amount: 40 },
      ],
    },
  },
  {
    country: "NG",
    currency: "NGN",
    plan: "Lite",
    details: {
      durAmount: [
        { duration: "1 Month", amount: 1000 },
        { duration: "2 Months", amount: 2000 },
        { duration: "3 Months", amount: 3000 },
      ],
    },
  },
  {
    country: "USD",
    currency: "USD",
    plan: "Lite",
    details: {
      durAmount: [
        { duration: "1 Month", amount: 1.5 },
        { duration: "2 Months", amount: 2 },
        { duration: "3 Months", amount: 2.5 },
      ],
    },
  },

  //PRO PLAN STARTS HERE!

  {
    country: "EUR",
    currency: "EUR",
    plan: "Pro",
    details: {
      durAmount: [
        { duration: "4 Month", amount: 1.5 },
        { duration: "9 Months", amount: 2 },
        { duration: "12 Months", amount: 2.5 },
      ],
    },
  },
  {
    country: "GBP",
    currency: "GBP",
    plan: "Pro",
    details: {
      durAmount: [
        { duration: "4 Month", amount: 1.5 },
        { duration: "9 Months", amount: 2 },
        { duration: "12 Months", amount: 2.5 },
      ],
    },
  },

  {
    country: "GH",
    currency: "GHS",
    plan: "Pro",
    details: {
      durAmount: [
        { duration: "4 Months", amount: 550 },
        { duration: "9 Months", amount: 200 },
        { duration: "12 Months", amount: 60 },
      ],
    },
  },
  {
    country: "KE",
    currency: "KES",
    plan: "Pro",
    details: {
      durAmount: [
        { duration: "4 Months", amount: 70 },
        { duration: "9 Months", amount: 20 },
        { duration: "12 Months", amount: 80 },
      ],
    },
  },
  {
    country: "NG",
    currency: "NGN",
    plan: "Pro",
    details: {
      durAmount: [
        { duration: "4 Months", amount: 999 },
        { duration: "9 Months", amount: 1999 },
        { duration: "12 Months", amount: 4999 },
      ],
    },
  },
  {
    country: "USD",
    currency: "USD",
    plan: "Pro",
    details: {
      durAmount: [
        { duration: "4 Month", amount: 1.5 },
        { duration: "9 Months", amount: 2 },
        { duration: "12 Months", amount: 2.5 },
      ],
    },
  },
];

const description = {
  newAccount: `Join ${dataList.name} to create FREE Professional CVs using different templates, let employers find you, 
  Leave your job search to us.`,
  login: `We are glad you came back. Feel free to continue from where you left off`,
};

const DataProvider = ({ children }) => {
  const [data] = React.useState(dataList);
  const [users] = React.useState(usersList);
  const [subplan] = React.useState(planList);
  const [transact] = React.useState(transactionHistory);
  const [exp] = React.useState(experience);
  const [detailCat] = React.useState(categories);
  const [fasq] = React.useState(FreqAQst);
  const [cvTemps] = React.useState(cvTemplates);
  const [defCountry] = React.useState(defaultCountry);

  return (
    <DataContext.Provider
      value={{
        data,
        users,
        description,
        subplan,
        transact,
        exp,
        detailCat,
        fasq,
        cvTemps,
        defCountry,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => React.useContext(DataContext);

export default DataProvider;
