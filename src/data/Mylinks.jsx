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

export const listData = [
    {
        id: 1,
        title: "A Great Apartment Next to the Beach!",
        img: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bedroom: 2,
        bathroom: 1,
        price: 1000,
        address: "456 Park Avenue, London",
        latitude: 51.5074,
        longitude: -0.1278,
    },
    {
        id: 2,
        title: "An Awesome Apartment Near the Park! Almost too good to be true!",
        img: "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bedroom: 3,
        bathroom: 2,
        price: 1500,
        address: "789 Oxford Street, London",
        latitude: 52.4862,
        longitude: -1.8904,
    },
    {
        id: 3,
        title: "A New Apartment in the City!",
        img: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bedroom: 1,
        bathroom: 1,
        price: 800,
        address: "101 Baker Street, London",
        latitude: 53.4808,
        longitude: -2.2426,
    },
    {
        id: 4,
        title: "Great Location! Great Price! Great Apartment!",
        img: "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bedroom: 2,
        bathroom: 1,
        price: 1000,
        address: "234 Kingsway, London,",
        latitude: 53.8008,
        longitude: -1.5491,
    },
    {
        id: 5,
        title: "Apartment 5",
        img: "https://images.pexels.com/photos/276625/pexels-photo-276625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bedroom: 3,
        bathroom: 2,
        price: 1500,
        address: "567 Victoria Road, London",
        latitude: 53.4084,
        longitude: -2.9916,
    },
    {
        id: 6,
        title: "Apartment 6",
        img: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bedroom: 1,
        bathroom: 1,
        price: 800,
        address: "890 Regent Street, London",
        latitude: 54.9783,
        longitude: -1.6174,
    },
    {
        id: 7,
        title: "Apartment 7",
        img: "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bedroom: 2,
        bathroom: 1,
        price: 1000,
        address: "112 Piccadilly, London",
        latitude: 53.3811,
        longitude: -1.4701,
    },
    {
        id: 8,
        title: "Apartment 8",
        img: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        bedroom: 3,
        bathroom: 2,
        price: 1500,
        address: "8765 Main High Street, London",
        latitude: 51.4545,
        longitude: -2.5879,
    },
];

export const singlePostData = {
    id: 1,
    title: "Beautiful Apartment",
    price: 1200,
    images: [
        "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    bedRooms: 2,
    bathroom: 1,
    size: 861,
    latitude: 51.5074,
    longitude: -0.1278,
    city: "London",
    address: "1234 Broadway St",
    school: "250m away",
    bus: "100m away",
    restaurant: "50m away",
    description:
        "Future alike hill pull picture swim magic chain seed engineer nest outer raise bound easy poetry gain loud weigh me recognize farmer bare danger. actually put square leg vessels earth engine matter key cup indeed body film century shut place environment were stage vertical roof bottom lady function breeze darkness beside tin view local breathe carbon swam declared magnet escape has from pile apart route coffee storm someone hold space use ahead sheep jungle closely natural attached part top grain your grade trade corn salmon trouble new bend most teacher range anybody every seat fifteen eventually",
};

export const userData = {
    id: 1,
    name: "John Doe",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
};





