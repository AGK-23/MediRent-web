import { BiLoaderCircle, BiGridAlt, BiServer, BiBuilding } from "react-icons/bi";
import { TbBrandMonday, TbAppsFilled, TbBoxPadding, TbBrandAmigo } from "react-icons/tb";
import { BsBoxSeam, BsFingerprint, BsGear, BsPuzzle, BsCreditCard2Back } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";
import { FcSurvey, FcInTransit, FcSafe, FcCallback, FcIdea, FcViewDetails, FcPuzzle } from "react-icons/fc";
import { CiDollar } from "react-icons/ci";
import { RiShieldUserLine } from "react-icons/ri";
import { SlWallet } from "react-icons/sl";
import { VscLocation } from "react-icons/vsc";

import Container from '../assets/wrapper/container.png';
import Ship from '../assets/wrapper/ship.png';
import Warehouse from '../assets/wrapper/warehouse.png'

import Shipped from '../assets/images/shipped.png';
import HomeAddress from '../assets/images/home-address.png';
import OpenBox from '../assets/images/open-box.png';

import { AiOutlineContainer, AiOutlineUngroup, AiOutlineSend } from "react-icons/ai";


import { TfiPackage } from "react-icons/tfi";



export const cards = [
    {
        id: 1,
        title: "AI Artists",
        desc: "Add talent to AI",
        img: "https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
        id: 2,
        title: "Logo Design",
        desc: "Build yor brand",
        img: "https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
        id: 3,
        title: "WordPress",
        desc: "Customize your site",
        img: "https://images.pexels.com/photos/4371669/pexels-photo-4371669.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
        id: 4,
        title: "Voice Over",
        desc: "Share your message",
        img: "https://images.pexels.com/photos/7608079/pexels-photo-7608079.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
        id: 5,
        title: "Video Explainer",
        desc: "Engage your audience",
        img: "https://images.pexels.com/photos/13388047/pexels-photo-13388047.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
        id: 6,
        title: "Social Media",
        desc: "Reach more customers",
        img: "https://images.pexels.com/photos/11378899/pexels-photo-11378899.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
        id: 7,
        title: "SEO",
        desc: "Unlock growth online",
        img: "https://images.pexels.com/photos/4820241/pexels-photo-4820241.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
        id: 8,
        title: "Illustration",
        desc: "Color you dreams",
        img: "https://images.pexels.com/photos/15032623/pexels-photo-15032623.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
];

export const products = [
    {
        id: 1,
        title: "Logistics",
        desc: "We can arrange and provides with the comprehensive service in the sphere of urgent, valuable, fragile or any cargoes conscientious accelerated delivery by air.",

        icon: <img src={Container} alt="" className="w-16 h-16" />,
        color: "lime",
        // IoShieldCheckmarkSharp
    },
    {
        id: 2,
        title: "Shipping & Delivery",
        desc: "We provides with the main types of basic conditions International sea transportation is implemented by our partners’ vessels, the largest ocean carriers.",
        icon: <img src={Ship} alt="" className="w-16 h-16" />,
        color: "purple",
    },
    {
        id: 3,
        title: "WareHousing",
        desc: "We provides with the main types of basic conditions International sea transportation is implemented by our partners’ vessels, the largest ocean carriers.",
        icon: <img src={Warehouse} alt="" className="w-16 h-16" />,
        color: "amber",
    },
]

export const projects = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600",
        pp: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
        cat: "Web and Mobile Design",
        username: "Anna Bell",
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
        pp: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
        cat: "Logo Design",
        username: "Morton Green",
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1600",
        pp: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
        cat: "Animated GIFs",
        username: "Emmett Potter",
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1600",
        pp: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600",
        cat: "Packaging Design",
        username: "Freddie Johnston",
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1600",
        pp: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
        cat: "Social Media Design",
        username: "Audrey Richards",
    },
    {
        id: 6,
        img: "https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=1600",
        pp: "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1600",
        cat: "Illustration",
        username: "Dalton Hudson",
    },
    {
        id: 7,
        img: "https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=1600",
        pp: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600",
        cat: "Book Design",
        username: "Hannah Dougherty",
    },
    {
        id: 8,
        img: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1600",
        pp: "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=1600",
        cat: "Digital Marketing",
        username: "Ward Brewer",
    },
];

export const projectImage = [
    {
        id: 1,
        img: '../assets/img/1.png',
        cat: "Web and Mobile Design",
        username: "Anna Bell",
    },
    {
        id: 2,
        img: '../assets/img/2.png',
        cat: "Logo Design",
        username: "Morton Green",
    },
    {
        id: 3,
        img: '../assets/img/3.png',
        cat: "Animated GIFs",
        username: "Emmett Potter",
    },
    {
        id: 4,
        img: '../assets/img/4.png',
        cat: "Packaging Design",
        username: "Freddie Johnston",
    },
    {
        id: 5,
        img: '../assets/img/5.png',
        cat: "Social Media Design",
        username: "Audrey Richards",
    },
    {
        id: 6,
        img: '../assets/img/6.png',
        cat: "Illustration",
        username: "Dalton Hudson",
    },
    {
        id: 7,
        img: '../assets/img/7.png',
        cat: "Book Design",
        username: "Hannah Dougherty",
    },
    {
        id: 8,
        img: '../assets/img/8.png',
        cat: "Digital Marketing",
        username: "Ward Brewer",
    },
    {
        id: 9,
        img: '../assets/img/9.png',
        cat: "Digital Marketing",
        username: "Ward Brewer",
    },
    {
        id: 10,
        img: '../assets/img/10.png',
        cat: "Digital Marketing",
        username: "Ward Brewer",
    },
    {
        id: 11,
        img: '../assets/img/11.png',
        cat: "Digital Marketing",
        username: "Ward Brewer",
    },
    {
        id: 12,
        img: '../assets/img/12.png',
        cat: "Digital Marketing",
        username: "Ward Brewer",
    },
];

export const carts = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Marketplace",
        font: "Find a home, pay monthly",
        desc: "Find a home you love and pay monthly or quarterly. Our homes come fully furnished and equipped with the amenities you need. All you have to do is select a space, subscribe and your Spleet home is warm, comfortable, and ready for living.",
        icon: <BiGridAlt />,
        color: 'mediumseagreen',
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/3057960/pexels-photo-3057960.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Rent Now, Pay Later",
        font: "Rental loans made easy",
        desc: "Spleet’s Rent Now, Pay Later gives you access to low interest, no collateral loans up to ₦3,000,000 to finance rent payments.",
        icon: <BiLoaderCircle />,
        color: '#ff4560',
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/1117211/pexels-photo-1117211.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Rent Now, Pay Later",
        font: "Rental loans made easy",
        desc: "Find a home you love and pay monthly or quarterly. Our homes come fully furnished and equipped with the amenities you need. All you have to do is select a space, subscribe and your Spleet home is warm, comfortable, and ready for living.",
        icon: <BiServer />,
        color: '#ac63ee',
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/2231742/pexels-photo-2231742.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Rent Now, Pay Later",
        font: "Rental loans made easy",
        desc: "Find a home you love and pay monthly or quarterly. Our homes come fully furnished and equipped with the amenities you need. All you have to do is select a space, subscribe and your Spleet home is warm, comfortable, and ready for living.",
        icon: <BiBuilding />,
        color: "#008ffb",
    },
]

export const articles = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg?auto=compress&cs=tinysrgb&w=2000",
        title: "Insights, Management",
        font: "Importers Achieve Cost Savings Through The First Sale Rule!",
        desc: "The trade war currently ensuing between the US and several nations around the globe, most fiercely with China, shows no signs of the first set of tariffs levied against solar.",
        icon: <AiOutlineContainer />,
        color: 'deeppink',
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=2000",
        title: "Warehousing, Industry",
        font: "Cargo Flow Through Better Supply Chain Visibility, Control.",
        desc: "Global provider connected products for consumers, and enterprises worldwide, supply chain control is everything, provide visibility and traceability needed for",
        icon: <AiOutlineUngroup />,
        color: 'yellowgreen',
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/3076000/pexels-photo-3076000.jpeg?auto=compress&cs=tinysrgb&w=2000",
        title: "Logistics, Distribution",
        font: "Importance Of Specialized Focus In Projects, Oil & Gas Logistics?",
        desc: "Our team provides highly skilled & experienced project managers who know the intricacies of this vertical and focus on providing innovative solutions in Oil & Gas sector.",
        icon: <AiOutlineSend />,
        color: '#feb019',
    },

]

export const slides = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Verify",
        font: "Tenant verification made easy.",
        desc: "Find a home you love and pay monthly or quarterly. Our homes come fully furnished and equipped with the amenities you need. All you have to do is select a space, subscribe and your Spleet home is warm, comfortable, and ready for living.",
        icon: <TbBrandMonday />,
        color: "#949392",
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "List Your Spacer",
        font: "Let your space earn money for you",
        desc: "Earn money from listing your space and reach thousands of prospective tenants. With Spleet, you eliminate agent and legal hassles, choose from a pool of verified tenants and enjoy 24/7 maintenance support.",
        icon: <TbAppsFilled />,
        color: "#fd1292",
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/3840441/pexels-photo-3840441.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Rent Now, Pay Later",
        font: "Rental loans made easy",
        desc: "Find a home you love and pay monthly or quarterly. Our homes come fully furnished and equipped with the amenities you need. All you have to do is select a space, subscribe and your Spleet home is warm, comfortable, and ready for living.",
        icon: <TbBoxPadding />,
        color: "#84cc16",
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/3856440/pexels-photo-3856440.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Verify Super Power",
        font: "Tenant verification made easy.",
        desc: "Spleet Verify provides landlords, property managers and real estate investors with real-time, detailed reports on prospective tenants. You get complete background checks, and other information to help you make the informed decision about who to rent to.",
        icon: <TbBrandAmigo />,
        color: "#0d084d",
    },
]

export const tools = [
    {
        id: 1,
        title: "Automatic rate selection",
        desc: "Save time with rate shipping that automatically chooses label.",
        icon: <CiDollar />,
        color: "lime",
    },
    {
        id: 2,
        title: "Faster bulk Shipping",
        desc: "Carttel can select the best rates and help up to 100 orders at once.",
        icon: <IoTicketOutline />,
        color: "purple",
    },
    {
        id: 3,
        title: "Automated shipping rules",
        desc: "Set up weight, values, delivery options and other specs in advance.",
        icon: <BsBoxSeam />,
        color: "amber",
    },
]

export const items = [
    {
        id: 1,
        title: "The same guarentee offered",
        desc: "You'll be protected against A-Z carrier claims related to late delivery and negative feedback Just like you find in Buy Shipping.",
        icon: <FcSurvey />,
        color: "lime",
        // IoShieldCheckmarkSharp
    },
    {
        id: 2,
        title: "Amazon-discounted Rates",
        desc: "Discounts may vary per carrier, ship method, package and transit and transit route, They range up to $400 per shipping label.",
        icon: <FcInTransit />,
        color: "purple",
    },
    {
        id: 3,
        title: "100% Valid Tracking Rates",
        desc: "All labels purchased through us will include a valid Tracking ID and it will automatically sync with your ecommerce account.",
        icon: < FcSafe />,
        color: "amber",
    },
]

export const sounds = [
    {
        id: 1,
        title: "We're flexible",
        desc: "You can save interest by repaying your short term loan early. If things go wrong, we're here to help you.",
        icon: <FcPuzzle />,
        color: "lime",
        // IoShieldCheckmarkSharp
    },
    {
        id: 2,
        title: "We're committed to you",
        desc: "Easy navigation and user experience. Access to QuickCredit services with ease.",
        icon: <FcViewDetails />,
        color: "purple",
    },
    {
        id: 3,
        title: "We're transparent",
        desc: "There are no hidden charges. We make all our fees completely clear upfront before you apply.",
        icon: < FcIdea />,
        color: "amber",
    },
    {
        id: 4,
        title: "We're here to help",
        desc: "Get extensive details of requested loan facility real-time.",
        icon: < FcCallback />,
        color: "amber",
    },
]

export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 5,
        slidesToSlide: 2,
    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export const productData = [
    {
        id: 1,
        icon: <RiShieldUserLine />,
        imageurl:
            "https://images.pexels.com/photos/4391478/pexels-photo-4391478.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Security For Cargo",
       
        description: "High Security Requirements and are certified to local Standards.",
    },
    {
        id: 2,
        icon: <SlWallet />,
        imageurl:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name: "Transparent Pricing",
        price: "$21.99",
        description: "International supply chains involves challenging regulations.",
    },
    {
        id: 3,
        icon: <TfiPackage />,
        imageurl:
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Warehouse Storage",
        price: "$99.99",
        description: "Depending on your product, we provide warehouse activities.",
    },
    {
        id: 4,
        icon: <VscLocation />,
        imageurl:
            "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Real Time Tracking",
        price: "$14.99",
        description: "Ensure customer's supply chains are fully compliant by practices.",
    },
    {
        id: 5,
        icon: <BsCreditCard2Back />,
        imageurl:
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Easy Payment Methods",
        price: "$38.99",
        description: "You can make use the easy payment options, listed below.",
    },
    {
        id: 6,
        icon: <BsFingerprint />,
        imageurl:
            "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Secure & Safe Shipping",
        price: "$149.99",
        description: "You can make use the easy payment options, listed below.",
    },
    {
        id: 7,
        icon: <BsGear />,
        imageurl:
            "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Personalised Solutions",
        price: "$38.99",
        description: "We continue to pursue that same vision in today's complex solutions.",
    },
    {
        id: 8,
        icon: <BsPuzzle />,
        imageurl:
            "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Fast & Efficient Delivery",
        price: "$49.99",
        description: "We enhance our operations by relieving you of the worries.",
    },
];

export const questionData = [
    {
        question: "What are your shipping costs?",
        answer: "We charge as low as $8 per pound for all shipments. Our minimum weight is 1 pound. Fragile items like TV and glass furniture have an optional crating fee.",
    },
    {
        question: "Are there additional or hidden charges?",
        answer: "There are no additional shipping and clearing charges. But, a delivery charge applies to all packages not picked up at the Lagos warehouse. It costs $15 to deliver non-extra large Items (Phones, laptops, clothing, etc. under 10 lbs) within Lagos and $20 outside. For extra-large items (TVs, Speakers, Consoles, etc. above 10 lbs), delivery within Lagos costs $20 and $30 outside Lagos.",
    },
    {
        question: "How do I track my shipment?",
        answer: "To track your shipment from the USA to Nigeria, CartTel provides a unique shipment status for each package. By checking the status, you can determine at what stage your item is in its journey to you.",
    },
    {
        question: "If I get scammed by someone using the CartTel warehouse address, can I get my packages back?",
        answer: "Yes, it is possible that we can help you get your package back.",
    },
    {
        question: "How long does it take to get my package delivered to Nigeria?",
        answer: "10 - 14 working days from the day the package ships out of our US warehouse if there is zero customs delay in Nigeria. The 10 - 14 working days don’t include the time it takes for the US store to deliver the package to our US warehouse. We ship packages every Thursday.",
    },
    {
        question: "How long does it take to get my package delivered to Ghana?",
        answer: "7 - 14 days from the day the package ships out of our US warehouse if there is zero customs delay in Nigeria. The 7 - 14 days doesn’t include the time it takes for the US store to deliver the package to our US warehouse. We ship packages every Thursday.",
    },
    {
        question: "What is the acceptable mode of payment?",
        answer: "We accept payment in Naira or US Dollars through bank-to-bank transfers and debit or credit cards. We are unable to accept cash, and cash on delivery.",
    },
    {
        question: "Do I have to pay for delivery in Nigeria?",
        answer: "We accept payment in Naira or US Dollars through bank-to-bank transfers and debit or credit cards. We are unable to accept cash, and cash on delivery.",
    },
];

export const personalData = [
    
    {
        question: "How long does it take to get my package delivered to Nigeria?",
        answer: "10 - 14 working days from the day the package ships out of our US warehouse if there is zero customs delay in Nigeria. The 10 - 14 working days don’t include the time it takes for the US store to deliver the package to our US warehouse. We ship packages every Thursday.",
    },
    {
        question: "How long does it take to get my package delivered to Ghana?",
        answer: "7 - 14 days from the day the package ships out of our US warehouse if there is zero customs delay in Nigeria. The 7 - 14 days doesn’t include the time it takes for the US store to deliver the package to our US warehouse. We ship packages every Thursday.",
    },
    {
        question: "What is the acceptable mode of payment?",
        answer: "We accept payment in Naira or US Dollars through bank-to-bank transfers and debit or credit cards. We are unable to accept cash, and cash on delivery.",
    },
    {
        question: "Do I have to pay for delivery in Nigeria?",
        answer: "We accept payment in Naira or US Dollars through bank-to-bank transfers and debit or credit cards. We are unable to accept cash, and cash on delivery.",
    },
];

export const businessData = [
    {
        question: "What are your shipping costs?",
        answer: "We charge as low as $8 per pound for all shipments. Our minimum weight is 1 pound. Fragile items like TV and glass furniture have an optional crating fee.",
    },
    {
        question: "Are there additional or hidden charges?",
        answer: "There are no additional shipping and clearing charges. But, a delivery charge applies to all packages not picked up at the Lagos warehouse. It costs $15 to deliver non-extra large Items (Phones, laptops, clothing, etc. under 10 lbs) within Lagos and $20 outside. For extra-large items (TVs, Speakers, Consoles, etc. above 10 lbs), delivery within Lagos costs $20 and $30 outside Lagos.",
    },
    {
        question: "How do I track my shipment?",
        answer: "To track your shipment from the USA to Nigeria, CartTel provides a unique shipment status for each package. By checking the status, you can determine at what stage your item is in its journey to you.",
    },
    {
        question: "If I get scammed by someone using the CartTel warehouse address, can I get my packages back?",
        answer: "Yes, it is possible that we can help you get your package back.",
    },
    
];

export const questionItems = [
    {
        question: "Use CartTel address",
        answer: "Get your valid US address when you sign up with CartTel. Use it as your delivery address at checkout or have your packages sent there by loved ones.",
        icon: <img src={HomeAddress} alt="" />,
    },
    {
        question: "Track your shipments",
        answer: "Track your shipment from the US till it arrives in Nigeria on your mobile phone or the web.",
        icon: <img src={Shipped} alt="" />,
    },
    {
        question: "Deliver anywhere you choose",
        answer: "Pay to have your shipments delivered anywhere in Nigeria or pick them up for free in our Lagos office",
        icon: <img src={OpenBox} alt="" />,
    },
];

export const itemData = [
    {
        id: 1,
        icon: <RiShieldUserLine />,
        imageurl:
            "https://images.pexels.com/photos/2217513/pexels-photo-2217513.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        name: "International shipping",
       
        description: "High Security Requirements and are certified to local Standards.",
    },
    {
        id: 2,
        icon: <SlWallet />,
        imageurl:
            "https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Logistics",
        
        description: "International supply chains involves challenging regulations.",
    },
    {
        id: 3,
        icon: <TfiPackage />,
        imageurl:
            "https://images.pexels.com/photos/11589778/pexels-photo-11589778.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        name: "Procurement",
        
        description: "Depending on your product, we provide warehouse activities.",
    },
    {
        id: 4,
        icon: <VscLocation />,
        imageurl:
            "https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        name: "Drop-shipping",
        
        description: "Ensure customer's supply chains are fully compliant by practices.",
    },
    {
        id: 5,
        icon: <BsCreditCard2Back />,
        imageurl:
            "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Delivery",
        
        description: "You can make use the easy payment options, listed below.",
    },
    {
        id: 6,
        icon: <BsFingerprint />,
        imageurl:
            "https://images.pexels.com/photos/4329902/pexels-photo-4329902.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        name: "Supply Chain",
        
        description: "You can make use the easy payment options, listed below.",
    },
    {
        id: 7,
        icon: <BsGear />,
        imageurl:
            "https://images.pexels.com/photos/4480984/pexels-photo-4480984.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Ware-Housing",
        
        description: "We continue to pursue that same vision in today's complex solutions.",
    },
    {
        id: 8,
        icon: <BsPuzzle />,
        imageurl:
            "https://images.pexels.com/photos/1544372/pexels-photo-1544372.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        name: "Sea Freight",
        
        description: "We enhance our operations by relieving you of the worries.",
    },
]

export const links = [
  {
    name: "Solutions",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "Bottomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "innerwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },

      {
        Head: "sleepwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "footwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Products",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "Bottomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "innerwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },

    ],
  },
  {
    name: "Resources",
    submenu: true,
    sublinks: [
      
      

      {
        Head: "sleepwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "footwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
    ],
  },
];
