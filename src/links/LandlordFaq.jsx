import { useState } from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import card_15 from "../assets/card_15.jpg";
import post from "../assets/post-1.png";
import join from "../assets/faq-joinus.png";
import list from "../assets/faq-createnewlisting.png";
import faq_packages from "../assets/faq-packages_1.png";
import next from "../assets/faq-next.png";
import Drag_Drop from "../assets/faq-dragdrop.png";
import Calender from "../assets/faq-calendar.png";
import calendarlegend from "../assets/faq-calendarlegend.png";
import pay from "../assets/faq-pay.png";
import text from "../assets/faq-test.png";
import summary from "../assets/faq-summary.png";
import { Link } from "react-router-dom";

const LandlordFaq = ({ title, linkText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={"faqfst mt-1 flex" + (isOpen ? " open" : "")}>
      <div className="faqsec " onClick={toggleDropdown}>
        {title}{" "}
        {isOpen ? (
          <RiSubtractLine className="text-black" />
        ) : (
          <RiAddLine className="text-black" />
        )}
      </div>
      {isOpen && (
        <div className="faqList">
          <ul>
            <li>
              <Link to="/">{linkText}</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="text-black font-semibold ml-2 mt-10">
      <div>
        <LandlordFaq
          title={
            <>
              <h3 className="p-3 font-semibold" style={{ width: "40vw" }}>
                Landlord User Guide
              </h3>
            </>
          }
          linkText={
            <>
              <div className="flex p-5" style={{ width: "41.2vw" }}>
                <div className="">
                  <div className="text-center mt-10">
                    <img
                      src={card_15}
                      alt="landlord"
                      style={{ width: "30vw", height: "35vh" }}
                    />
                    <h3 className="mt-5">medirent.com USER GUIDE</h3>
                    <p className="mt-5">
                      How to Create an Account & Create a Listing
                    </p>
                  </div>
                  <div className="ml-10 mt-10 text-gry ">
                    <span>There are 6 steps to creating a rental listing</span>
                    <img src={post} alt="post" />
                  </div>
                  <div className="mt-20  text-gry ml-5 text-1xl">
                    <h3 className="text-black ">STEP ONE: REGISTRATION</h3>
                    <p className="mt-5">
                      To create an account, click on{" "}
                      <img src={join} alt="join" style={{ width: "4vw" }} />
                      on the top right corner of the home page and select
                      “Landlord” and enter registration details.
                    </p>
                    <p className="mt-5">
                      Once you have created your account, you may create your
                      listing.
                    </p>
                    <p className="mt-5">
                      To do so, on the main page click on{" "}
                      <img src={list} alt="new list" style={{ width: "9vw" }} />
                    </p>
                  </div>
                  <div className="ml-5 text-gry">
                    <h3 className="mt-5 text-black">STEP TWO: ADDRESS</h3>
                    <p className="mt-5">
                      Select the package you wish to purchase:
                    </p>
                    <img
                      src={faq_packages}
                      alt="faq_packages"
                      className="mt-5"
                    />
                    <p className="mt-5">
                      Enter the Listing title and Housing address information
                      and click{" "}
                    </p>
                    <img src={next} alt="Next" style={{ width: "7vw" }} />
                  </div>
                  <div className="mt-20 ml-5 text-gry">
                    <h3 className="text-black ml-1">STEP THREE: DETAILS</h3>
                    <p
                      className=" mt-10 text-1xl"
                      style={{ fontWeight: "lighter" }}
                    >
                      Enter Housing Details, which includes the property type,
                      number of rooms, cost to rent, amenities, which medical
                      school it is located by and a detailed description of your
                      rental property. Adding distances to medical schools,
                      hospitals, clinics and local amenities (grocery shops,
                      cafes, etc) is helpful . These can be found on Google
                      Maps/.
                    </p>
                  </div>
                  <div className="mt-20 ml-5 text-gry">
                    <h3 className="text-black ml-1">STEP FOUR: PHOTOS</h3>
                    <p className="mt-5" style={{ fontWeight: "lighter" }}>
                      Upload the photos you wish to include in your listing:
                    </p>
                    <p className="mt-5" style={{ fontWeight: "lighter" }}>
                      Depending on your package, you can post up to 25 photos
                      per listing.
                    </p>
                    <img
                      src={Drag_Drop}
                      alt="Drag_Drop"
                      className="mt-5"
                      style={{ width: "35vw" }}
                    />
                  </div>
                  <div className="mt-20 ml-5 text-gry">
                    <h3 className="text-black">STEP FIVE: AVAILABILITY</h3>
                    <p className="mt-5" style={{ fontWeight: "lighter" }}>
                      Next, confirm the dates your rental property will be
                      available for and the duration.
                    </p>
                    <p style={{ fontWeight: "lighter" }} className="mt-5">
                      The calendar is set up to automatically make your property
                      available immediately. If you wish to rent your property
                      on a set day, you will need to block out the days/months
                      prior to the desired date.
                    </p>
                    <p className="mt-5" style={{ fontWeight: "lighter" }}>
                      For example, If you wish to rent your property starting
                      July 1st for, you would click on June and block it off as
                      not available (when dates are highlighted{" "}
                      <strong className="text-black">blue</strong> , it means
                      those dates are not available).
                    </p>
                    <img
                      src={Calender}
                      alt="Calender"
                      className="mt-5"
                      style={{ width: "35vw" }}
                    />
                    <img
                      src={calendarlegend}
                      alt="calendarlegend"
                      style={{ width: "14vw" }}
                    />
                    <p
                      className="mt-5 text-1xl"
                      style={{ fontWeight: "lighter" }}
                    >
                      To block out an entire month, click on the name of the
                      month at the top. If you click on a day, it will remove
                      the blue blockout.
                    </p>
                    <p style={{ fontWeight: "lighter" }}>
                      When you have selected your desired dates click on{" "}
                      <img src={next} alt="next" style={{ width: "8vw" }} />
                    </p>
                  </div>
                  <div className="mt-20 text-gry ml-5">
                    <h3 className="text-black">STEP SIX: PAYMENT</h3>
                    <p style={{ fontWeight: "lighter" }} className="mt-5">
                      Review the details of the package you wish to purchase and
                      click on{" "}
                      <img src={pay} alt="pay" style={{ width: "8vw" }} />
                    </p>
                    <p
                      className="text-1xl mt-5"
                      style={{ fontWeight: "lighter" }}
                    >
                      You can now enter your payment method details and confirm
                      payment as shown below: This is where you will add a
                      discount code if you have one.
                    </p>
                  </div>
                  <div className="mt-10 ml-5 text-gry">
                    <img src={text} alt="text" style={{ width: "35vw" }} />
                    <p style={{ fontWeight: "lighter" }} className="ml-2">
                      After you pay this invoice, you will be able to continue
                      and complete your listing in the next step.
                    </p>
                    <img src={summary} alt="summary" className="ml-3 mt-5" />
                    <p
                      style={{ fontWeight: "lighter" }}
                      className="mt-5 text-1xl"
                    >
                      *If you wish to receive notice by text (as well as on the
                      dashboard and by email) you will need to select MedsGold
                      Subscription and tick the box on the description page.
                    </p>
                    <p
                      style={{ fontWeight: "lighter" }}
                      className="mt-5 text-1xl"
                    >
                      *Remember to check into your dashboard, (pressing save)
                      weekly in order for the site to log when you were last
                      “seen”. This shows tenants you are an active landlord.
                    </p>
                  </div>
                  <div className="mt-20 ml-5 text-gry">
                    <h3 className="text-black">RENEWAL</h3>
                    <p
                      style={{ fontWeight: "lighter" }}
                      className="text-1xl mt-5"
                    >
                      One week prior to the listing expiration date, you will
                      receive a renewal invoice. If you wish to renew, upgrade
                      or downgrade, this is when you would do it. If you no
                      longer wish to continue, the listing will go dormant.
                    </p>
                    <p
                      style={{ fontWeight: "lighter" }}
                      className="text-1xl mt-5"
                    >
                      <strong className="text-black">
                        If your property is rented
                      </strong>
                      , update the listing by blocking out the dates it is
                      rented for. You have the option to remove the property
                      from view on the description section.
                    </p>
                    <p style={{ fontWeight: "lighter" }} className="mt-5">
                      If you wish to completely remove the listing information,
                      delete the listing. If you do not delete , the listing can
                      be reactivated in the future.
                    </p>
                    <p style={{ fontWeight: "lighter" }} className="mt-5">
                      Keep in mind, medical learners can often /search or book a
                      few years in advance. Keeping the listing in view allows
                      these future tenants to reach out to you.
                    </p>
                  </div>
                </div>
              </div>
            </>
          }
        />
        <LandlordFaq
          title={
            <>
              <h3 className="p-3" style={{ width: "40vw" }}>
                What is an Ideal medirent property?
              </h3>
            </>
          }
          linkText={
            <>
              <div className="p-10" style={{ width: "41.2vw" }}>
                <ul
                  className="mt-5 text-1xl text-gry"
                  style={{ fontWeight: "lighter" }}
                >
                  <li>
                    Ideal medirent properties are those that cater to the
                    specific needs of medical professionals and trainees. These
                    properties are characterized by their proximity to various
                    essential facilities and features, including:
                  </li>
                </ul>
                <ol
                  className="mt-5 text-1xl text-gry list-decimal"
                  style={{ fontWeight: "lighter" }}
                >
                  <li className="mt-5">
                    Medical Schools: The property should be conveniently located
                    near medical schools, allowing easy access for students and
                    trainees.
                  </li>
                  <li className="mt-5">
                    <strong className="text-black">Medical Schools: </strong>
                    The property should be conveniently located near medical
                    schools, allowing easy access for students and trainees.
                  </li>
                  <li className="mt-5">
                    <strong className="text-black">Hospital: </strong>
                    Close proximity to hospitals is crucial for medical
                    professionals, making it easier for them to commute to work.
                  </li>
                  <li className="mt-5">
                    <strong className="text-black">
                      {" "}
                      Medical Teaching Clinics:
                    </strong>{" "}
                    Access to medical teaching clinics is essential for hands-on
                    learning experiences for medical students.
                  </li>
                  <li className="mt-5">
                    <strong className="text-black">
                      {" "}
                      Known Rural Satellite Medical School Locations:{" "}
                    </strong>
                    In addition to urban settings, properties near rural
                    satellite medical school locations are beneficial for those
                    involved in specialized training programs.
                  </li>
                  <li className="mt-5">
                    <strong className="text-black">
                      Public Transit (if Urban Setting):
                    </strong>{" "}
                    For properties in urban settings, easy access to public
                    transportation is important, facilitating a convenient
                    commute to medical facilities.
                  </li>
                  <li className="mt-5">
                    <strong className="text-black">
                      {" "}
                      Safe Family Suitable Neighborhoods:
                    </strong>{" "}
                    The ideal property is situated in a safe and family-friendly
                    neighborhood, ensuring a secure and comfortable living
                    environment.
                  </li>
                  <li className="mt-5">
                    <strong className="text-black">
                      {" "}
                      Near Amenities and Shopping:
                    </strong>{" "}
                    Proximity to amenities such as fitness gyms, running/biking
                    paths, fresh food markets, and shopping centers enhances the
                    overall quality of life for residents.
                  </li>
                  <li className="mt-5">
                    <strong className="text-black">
                      Well-Managed and Clean:{" "}
                    </strong>
                    The property should be well-managed, clean, and
                    well-maintained, creating a comfortable and professional
                    living environment.
                  </li>
                  <li className="mt-5">
                    <strong className="text-black">
                      {" "}
                      Updated and Furnished/Unfurnished:
                    </strong>{" "}
                    Properties should be updated and can be offered either
                    furnished or unfurnished, accommodating the preferences and
                    needs of medical professionals.
                  </li>
                  <li className="mt-5">
                    <strong className="text-black">
                      Long-Term and Short-Term Options:
                    </strong>{" "}
                    Offering both long-term and short-term rental options
                    provides flexibility for medical professionals based on the
                    duration of their training or assignments.
                  </li>
                  <li className="mt-5">
                    <strong className="text-black">
                      Efficient Transportation to Medical Facilities:
                    </strong>{" "}
                    Easy access to efficient transportation options to medical
                    facilities ensures that residents can reach their workplace
                    promptly.
                  </li>
                  <li className="mt-5">
                    <strong className="text-black"> Parking Facilities:</strong>{" "}
                    Adequate parking is considered an asset, providing
                    convenience for residents who own vehicles.
                  </li>
                </ol>
                <ul
                  className="text-gry text-1xl"
                  style={{ fontWeight: "lighter" }}
                >
                  {" "}
                  <li className="mt-5">
                    medirent reserves the right to remove any listings that
                    are perceived to be unsuitable for their clients, ensuring
                    that the platform maintains a standard of quality and
                    suitability for medical professionals and trainees.
                  </li>
                </ul>
              </div>
            </>
          }
        />
        <LandlordFaq
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                Q: How do I know if there is interest in my listed property?
              </h3>
            </>
          }
          linkText={
            <>
              <div className="p-10" style={{ width: "41.2vw" }}>
                <ul className="text-gry">
                  <li
                    className=""
                    style={{ fontWeight: "lighter", text: "1xl" }}
                  >
                    To gauge interest in your listed property on medirent,
                    follow these steps:
                  </li>
                </ul>
                <ol>
                  <li className="text-black list-decimal mt-5">
                    Email Inquiries:
                  </li>
                  <ul
                    className="list-disc text-gry mt-5 ml-5"
                    style={{ fontWeight: "lighter", text: "1xl" }}
                  >
                    <li className="list-disc">
                      Monitor your email inbox for direct contacts from
                      potential tenants.
                    </li>
                    <li className="list-disc">
                      Be attentive to emails requesting more information about
                      your property.
                    </li>
                    <li className="list-disc">
                      Check your junk and spam folders regularly to ensure you
                      don't miss any messages.
                    </li>
                    <li className="list-disc">
                      Set your email settings to allow messages from
                      <Link to="/" className="text-customBlue">
                        info@medirent.com.{" "}
                      </Link>
                    </li>
                  </ul>
                  <li className="text-black list-decimal">
                    Want Ads for MEDSGold Landlords:
                  </li>
                  <ul
                    className="mt-5 ml-5"
                    style={{ fontWeight: "lighter", text: "1xl" }}
                  >
                    <li className="list-disc">
                      If you are a MEDSGold landlord, regularly check the Tenant
                    </li>
                    <li className="list-disc">Want ads on medirent.com</li>
                    <li className="list-disc">
                      Reach out to potential tenants who have posted ads{" "}
                    </li>
                    <li>matching your property.</li>
                  </ul>
                  <li className="list-decimal">Text Message Alerts:</li>
                  <ul
                    className="list-disc text-gry mt-5 ml-5"
                    style={{ fontWeight: "lighter", text: "1xl" }}
                  >
                    <li className="list-disc">
                      If you are a MEDSGold landlord, opt to receive text
                      message alerts when someone contacts you.
                      <li className="list-disc">
                        This provides immediate notification of interest in your
                        property.
                      </li>
                    </li>
                  </ul>
                  <li className="list-decimal text-black">
                    Personal Dashboard:
                  </li>
                  <ul
                    className="list-disc text-gry mt-5 ml-5"
                    style={{ fontWeight: "lighter", text: "1xl" }}
                  >
                    <li className="list-disc">
                      Log in to your personal dashboard on medirent.
                    </li>
                    <li className="list-disc">
                      View and respond to contact messages directly from the
                      dashboard.
                    </li>
                    <li className="list-disc">
                      Check for updates, inquiries, and messages related to your
                      listing.
                    </li>
                  </ul>
                  <li className="list-decimal">View Statistics:</li>
                  <ul
                    className="list-disc text-gry mt-5 ml-5"
                    style={{ fontWeight: "lighter", text: "1xl" }}
                  >
                    <li className="list-disc">
                      Check the bottom of your dashboard to see how many people
                      have viewed your listing.
                    </li>
                    <li className="list-disc">
                      Monitor the number of favorites your listing has received,
                      indicating interest.
                    </li>
                  </ul>
                  <li className="list-decimal text-black">
                    Social Media Sharing:
                  </li>
                  <ul
                    className="text-gry mt-5 ml-5"
                    style={{ fontWeight: "lighter", text: "1xl" }}
                  >
                    <li className="list-disc">
                      Share your medirent listing on your own social media
                      platforms.
                    </li>
                    <li className="list-disc">
                      This can increase visibility and attract potential
                      tenants.
                    </li>
                  </ul>
                </ol>
                <ul
                  className="mt-5"
                  style={{ fontWeight: "lighter", text: "1xl" }}
                >
                  <li>
                    By actively engaging with inquiries through email, text
                    alerts, and your dashboard, as well as utilizing the
                    features available to MEDSGold landlords, you can stay
                    informed about the level of interest in your listed
                    property. Additionally, leveraging social media can help
                    broaden your reach and attract more potential tenants.
                  </li>
                </ul>
              </div>
            </>
          }
        />
      </div>
      <div>
        <LandlordFaq
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                Q: Are medirent.com tenants verified?
              </h3>
            </>
          }
          linkText={
            <>
              <div
                className="p-10"
                style={{ width: "41.2vw", fontWeight: "lighter" }}
              >
                <ul className="text-grey">
                  <li>
                    No, medirent.com does not verify tenants. It is the
                    responsibility of landlords to conduct their own due
                    diligence and exercise prudence before engaging in any
                    financial transactions or commitments.
                  </li>
                </ul>
                <ul className="mt-5">
                  <li>Landlords are advised to:</li>
                  <ol className="mt-5 list-decimal ml-10">
                    <li>
                      Use appropriate leases that adhere to local landlord and
                      tenant laws.
                    </li>
                    <li>
                      Utilize all available social media channels to research
                      prospective tenants
                    </li>
                    <li>
                      Conduct virtual or in-person meetings through platforms
                      like Facetime, Skype, Zoom, or telephone before finalizing
                      any agreements.
                    </li>
                    <li>
                      Exercise caution and refrain from sending money to
                      overseas accounts as it is a common scam.
                    </li>
                    <li>
                      Request identification, photo ID, proof of medical school
                      enrollment, and medical school references to verify the
                      status of potential tenants as medical trainees or
                      healthcare workers.
                    </li>
                    <li>
                      Explore the public internet footprint of medical trainees,
                      including checking with student administration, looking
                      for publicly recognized achievements, published articles,
                      and other relevant information
                    </li>
                    <li>
                      Understand that medirent provides a platform for
                      landlords to directly connect with prospective tenants.
                      medirent does not involve itself in the transaction or
                      collect rent.
                    </li>
                  </ol>
                </ul>
                <ul className="mt-5">
                  By following these guidelines, landlords can enhance the
                  security and reliability of their rental arrangements when
                  using medirent.com.
                </ul>
              </div>
            </>
          }
        />
        <LandlordFaq
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                Q: I want to rent my property to a medical learner or healthcare
                provider. Does the property need to be furnished or unfurnished?
              </h3>
            </>
          }
          linkText={
            <>
              <div
                className="p-10"
                style={{ width: "41.2vw", fontWeight: "lighter" }}
              >
                <ul className="text-black">
                  <li className="text-black list-disc text-semibold">
                    <strong>Location Matters:</strong>
                  </li>
                </ul>
                <ul className="mt-5 text-gry">
                  <li className="list-disc">
                    In major teaching cities near universities, consider
                    long-term rentals (2 to 5+ years) for students
                  </li>
                  <li className="list-disc">
                    Urban centers attract short and long-term healthcare
                    providers based on clinical rotations.
                  </li>
                  <ul className="text-gry">
                    <li className="text-black list-disc text-semibold">
                      <strong>Flexibility:</strong>
                    </li>
                    <li className="list-disc mt-5 ">
                      Offer the flexibility of furnished or unfurnished options
                      based on tenant needs and preferences.
                    </li>
                    <li className="list-disc ">
                      Exercise caution and refrain from sending money to
                      overseas accounts as it is a common scam.
                    </li>
                    <li className="text-black list-disc text-semibold">
                      <strong>Smaller or Rural Areas:.</strong>
                    </li>
                    <li className="list-disc mt-5">
                      In smaller or rural communities near teaching hospitals:
                    </li>
                    <li className="list-disc ">
                      Short-term accommodations (2 to 6 weeks) are common for
                      clinical placements.
                    </li>
                    <li className="list-disc ">
                      Locum replacements for local physicians on vacation and
                      travel healthcare providers may seek furnished properties.
                    </li>
                  </ul>
                </ul>
                <ul className="text-gry list-disc">
                  <li className="text-black list-disc text-semibold">
                    <strong>Consider Tenant Needs:</strong>
                  </li>
                  <li className="list-disc mt-5 ">
                    For medical learners during clinical rotations, offering{" "}
                    furnished properties is generally preferable.
                  </li>
                  <li className="list-disc">
                    Ensure convenience and comfort for healthcare{" "}
                  </li>
                  <li className="list-disc">
                    professionals with varying durations of stay.
                  </li>
                </ul>
              </div>
            </>
          }
        />
        <LandlordFaq
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                Q: I have an inquiry about my listing in the 'My Listing
                Inquiries' tab of my Dashboard, but I am unsure how to respond
                to them.
              </h3>
            </>
          }
          linkText={
            <>
              <div
                className="p-10"
                style={{ width: "41.2vw", fontWeight: "lighter" }}
              >
                <ul className="text-black">
                  <li className="text-black list-disc text-semibold">
                    <strong>Location Matters:</strong>
                  </li>
                </ul>
                <ul className="mt-5 text-gry">
                  <li className="list-disc">
                    In major teaching cities near universities, consider
                    long-term rentals (2 to 5+ years) for students
                  </li>
                  <li className="list-disc">
                    Urban centers attract short and long-term healthcare
                    providers based on clinical rotations.
                  </li>
                  <ul className="text-gry">
                    <li className="text-black list-disc text-semibold">
                      <strong>Flexibility:</strong>
                    </li>
                    <li className="list-disc mt-5 ">
                      Offer the flexibility of furnished or unfurnished options
                      based on tenant needs and preferences.
                    </li>
                    <li className="list-disc ">
                      Exercise caution and refrain from sending money to
                      overseas accounts as it is a common scam.
                    </li>
                    <li className="text-black list-disc text-semibold">
                      <strong>Smaller or Rural Areas:.</strong>
                    </li>
                    <li className="list-disc mt-5">
                      In smaller or rural communities near teaching hospitals:
                    </li>
                    <li className="list-disc ">
                      Short-term accommodations (2 to 6 weeks) are common for
                      clinical placements.
                    </li>
                    <li className="list-disc ">
                      Locum replacements for local physicians on vacation and
                      travel healthcare providers may seek furnished properties.
                    </li>
                  </ul>
                </ul>
                <ul className="text-gry list-disc">
                  <li className="text-black list-disc text-semibold">
                    <strong>Consider Tenant Needs:</strong>
                  </li>
                  <li className="list-disc mt-5 ">
                    For medical learners during clinical rotations, offering{" "}
                    furnished properties is generally preferable.
                  </li>
                  <li className="list-disc">
                    Ensure convenience and comfort for healthcare{" "}
                  </li>
                  <li className="list-disc">
                    professionals with varying durations of stay.
                  </li>
                </ul>
              </div>
            </>
          }
        />
        <LandlordFaq
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                Q: Should I offer my property to a medical learner for short or
                long-term?
              </h3>
            </>
          }
          linkText={
            <>
              <div
                className="p-10"
                style={{ width: "41.2vw", fontWeight: "lighter" }}
              >
                <ul className="text-black">
                  <li className="text-black list-disc text-semibold">
                    <strong>Location Matters:</strong>
                  </li>
                </ul>
                <ul className="mt-5 text-gry">
                  <li className="list-disc">
                    In major teaching cities near universities, consider
                    long-term rentals (2 to 5+ years) for students
                  </li>
                  <li className="list-disc">
                    Urban centers attract short and long-term healthcare
                    providers based on clinical rotations.
                  </li>
                  <ul className="text-gry">
                    <li className="text-black list-disc text-semibold">
                      <strong>Flexibility:</strong>
                    </li>
                    <li className="list-disc mt-5 ">
                      Offer the flexibility of furnished or unfurnished options
                      based on tenant needs and preferences.
                    </li>
                    <li className="list-disc ">
                      Exercise caution and refrain from sending money to
                      overseas accounts as it is a common scam.
                    </li>
                    <li className="text-black list-disc text-semibold">
                      <strong>Smaller or Rural Areas:.</strong>
                    </li>
                    <li className="list-disc mt-5">
                      In smaller or rural communities near teaching hospitals:
                    </li>
                    <li className="list-disc ">
                      Short-term accommodations (2 to 6 weeks) are common for
                      clinical placements.
                    </li>
                    <li className="list-disc ">
                      Locum replacements for local physicians on vacation and
                      travel healthcare providers may seek furnished properties.
                    </li>
                  </ul>
                </ul>
                <ul className="text-gry list-disc">
                  <li className="text-black list-disc text-semibold">
                    <strong>Consider Tenant Needs:</strong>
                  </li>
                  <li className="list-disc mt-5 ">
                    For medical learners during clinical rotations, offering{" "}
                    furnished properties is generally preferable.
                  </li>
                  <li className="list-disc">
                    Ensure convenience and comfort for healthcare{" "}
                  </li>
                  <li className="list-disc">
                    professionals with varying durations of stay.
                  </li>
                </ul>
              </div>
            </>
          }
        />
        <LandlordFaq
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                Q: How do I change the rental price for my listing?
              </h3>
            </>
          }
          linkText={
            <>
              <div
                className="p-10"
                style={{ width: "41.2vw", fontWeight: "lighter" }}
              >
                <ul className="text-gry p-9">
                  <li className="list-disc list-black">
                    Q: I have an inquiry about my listing in the 'My Listing
                    Inquiries' tab of my Dashboard, but I am unsure how to
                    respond to them.
                  </li>
                  <li className="list-disc list-black mt-9">
                    Make sure you have added{" "}
                    <Link to="/" className="text-customBlue hover:underline">
                      info@medirent.com
                    </Link>{" "}
                    to your contacts and address book to prevent automatic
                    filing to trash and junk.
                  </li>
                  <li className="list-disc list-black mt-7">
                    {" "}
                    Google 'how to white list an email address') Photo
                  </li>
                  <li className="list-disc list-black">
                    Are you in the price range of other properties: too high?
                    Too low?
                  </li>
                  <li className="list-disc list-black">
                    Enough short brief points highlighting the home,
                    neighbourhood and commute to medical facilities.
                  </li>
                  <li>Do the pictures look inviting and show well?</li>
                  <li className="list-disc list-black">
                    Too much clutter? Toilet seat up? Curtains half open, messy.
                  </li>
                  <li className="list-disc list-black">
                    Ask a friend to objectively look at your listing. Is it
                    straight to the point? Key features highlighted?
                  </li>
                  <li className="list-disc list-black">
                    Often medical trainees book site unseen due to their
                    rigourous schedules.
                  </li>
                  <li className="list-disc list-black">
                    there are specific times of the year medical trainees search
                    for housing.
                  </li>
                  <li className="list-disc list-black">
                    July generally the start of internship, residency and
                    fellowship (longer term 1-2+ years)
                  </li>
                  <li className="list-disc list-black">
                    August Sept new medical students gernerally start their year
                    (Some medical schools have varied intake dates)
                  </li>
                  <li className="list-disc list-black">
                    various times of the year medical trainees do short term
                    electives, away rotations, observerships, requiring
                    furnished accommodations away from their home medical
                    schools
                  </li>

                  <li className="list-disc list-black">
                    Medical trainees can be sporadic with their commiunication.
                    Often exams, night rotations, on call, application deadlines
                    etc get in ther way of their ability to reach out ansd
                    search. Make it easy for them. Facetime. Skype, Zoom, Teams.
                    (Don't be surprised if you receive followup communication in
                    the middle of the night after radio silence for weeks. They
                    are probably in panic mode, worried they have not secured a
                    place to stay)
                  </li>
                </ul>
              </div>
            </>
          }
        />
        <LandlordFaq
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                What exactly is medirent.com
              </h3>
            </>
          }
          linkText={
            <>
              <div
                className="p-10"
                style={{ width: "41.2vw", fontWeight: "lighter" }}
              >
                <ul className="text-gry p-9">
                  <li className="list-disc list-black">
                    There could be a few reasons you have't received a good
                    response.
                  </li>
                  <li className="list-disc list-black mt-9">
                    Make sure you have added{" "}
                    <Link to="/" className="text-customBlue hover:underline">
                      info@medirent.com
                    </Link>{" "}
                    to your contacts and address book to prevent automatic
                    filing to trash and junk.
                  </li>
                  <li className="list-disc list-black mt-7">
                    {" "}
                    Google 'how to white list an email address') Photo
                  </li>
                  <li className="list-disc list-black">
                    Are you in the price range of other properties: too high?
                    Too low?
                  </li>
                  <li className="list-disc list-black">
                    Enough short brief points highlighting the home,
                    neighbourhood and commute to medical facilities.
                  </li>
                  <li>Do the pictures look inviting and show well?</li>
                  <li className="list-disc list-black">
                    Too much clutter? Toilet seat up? Curtains half open, messy.
                  </li>
                  <li className="list-disc list-black">
                    Ask a friend to objectively look at your listing. Is it
                    straight to the point? Key features highlighted?
                  </li>
                  <li className="list-disc list-black">
                    Often medical trainees book site unseen due to their
                    rigourous schedules.
                  </li>
                  <li className="list-disc list-black">
                    there are specific times of the year medical trainees search
                    for housing.
                  </li>
                  <li className="list-disc list-black">
                    July generally the start of internship, residency and
                    fellowship (longer term 1-2+ years)
                  </li>
                  <li className="list-disc list-black">
                    August Sept new medical students gernerally start their year
                    (Some medical schools have varied intake dates)
                  </li>
                  <li className="list-disc list-black">
                    various times of the year medical trainees do short term
                    electives, away rotations, observerships, requiring
                    furnished accommodations away from their home medical
                    schools
                  </li>

                  <li className="list-disc list-black">
                    Medical trainees can be sporadic with their commiunication.
                    Often exams, night rotations, on call, application deadlines
                    etc get in ther way of their ability to reach out ansd
                    search. Make it easy for them. Facetime. Skype, Zoom, Teams.
                    (Don't be surprised if you receive followup communication in
                    the middle of the night after radio silence for weeks. They
                    are probably in panic mode, worried they have not secured a
                    place to stay)
                  </li>
                </ul>
              </div>
            </>
          }
        />
        <LandlordFaq
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                Q: I have an inquiry about my listing in the 'My Listing
                Inquiries' tab of my Dashboard, but I am unsure how to respond
                to them.
              </h3>
            </>
          }
          linkText={
            <>
              <div
                className="p-10"
                style={{ width: "41.2vw", fontWeight: "lighter" }}
              >
                <ul className="text-gry p-9">
                  <li className="list-disc list-black">
                    There could be a few reasons you have't received a good
                    response.
                  </li>
                  <li className="list-disc list-black mt-9">
                    Make sure you have added{" "}
                    <Link to="/" className="text-customBlue hover:underline">
                      info@medirent.com
                    </Link>{" "}
                    to your contacts and address book to prevent automatic
                    filing to trash and junk.
                  </li>
                  <li className="list-disc list-black mt-7">
                    {" "}
                    Google 'how to white list an email address') Photo
                  </li>
                  <li className="list-disc list-black">
                    Are you in the price range of other properties: too high?
                    Too low?
                  </li>
                  <li className="list-disc list-black">
                    Enough short brief points highlighting the home,
                    neighbourhood and commute to medical facilities.
                  </li>
                  <li>Do the pictures look inviting and show well?</li>
                  <li className="list-disc list-black">
                    Too much clutter? Toilet seat up? Curtains half open, messy.
                  </li>
                  <li className="list-disc list-black">
                    Ask a friend to objectively look at your listing. Is it
                    straight to the point? Key features highlighted?
                  </li>
                  <li className="list-disc list-black">
                    Often medical trainees book site unseen due to their
                    rigourous schedules.
                  </li>
                  <li className="list-disc list-black">
                    there are specific times of the year medical trainees search
                    for housing.
                  </li>
                  <li className="list-disc list-black">
                    July generally the start of internship, residency and
                    fellowship (longer term 1-2+ years)
                  </li>
                  <li className="list-disc list-black">
                    August Sept new medical students gernerally start their year
                    (Some medical schools have varied intake dates)
                  </li>
                  <li className="list-disc list-black">
                    various times of the year medical trainees do short term
                    electives, away rotations, observerships, requiring
                    furnished accommodations away from their home medical
                    schools
                  </li>

                  <li className="list-disc list-black">
                    Medical trainees can be sporadic with their commiunication.
                    Often exams, night rotations, on call, application deadlines
                    etc get in ther way of their ability to reach out ansd
                    search. Make it easy for them. Facetime. Skype, Zoom, Teams.
                    (Don't be surprised if you receive followup communication in
                    the middle of the night after radio silence for weeks. They
                    are probably in panic mode, worried they have not secured a
                    place to stay)
                  </li>
                </ul>
              </div>
            </>
          }
        />
        <LandlordFaq
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                Q: Is there any way of reporting a no-show so other landlords
                have a heads up?
              </h3>
            </>
          }
          linkText={
            <>
              <div
                className="p-10"
                style={{ width: "41.2vw", fontWeight: "lighter" }}
              >
                <ul className="text-gry p-9">
                  <li className="list-disc list-black">
                    There could be a few reasons you have't received a good
                    response.
                  </li>
                  <li className="list-disc list-black mt-9">
                    Make sure you have added{" "}
                    <Link to="/" className="text-customBlue hover:underline">
                      info@medirent.com
                    </Link>{" "}
                    to your contacts and address book to prevent automatic
                    filing to trash and junk.
                  </li>
                  <li className="list-disc list-black mt-7">
                    {" "}
                    Google 'how to white list an email address') Photo
                  </li>
                  <li className="list-disc list-black">
                    Are you in the price range of other properties: too high?
                    Too low?
                  </li>
                  <li className="list-disc list-black">
                    Enough short brief points highlighting the home,
                    neighbourhood and commute to medical facilities.
                  </li>
                  <li>Do the pictures look inviting and show well?</li>
                  <li className="list-disc list-black">
                    Too much clutter? Toilet seat up? Curtains half open, messy.
                  </li>
                  <li className="list-disc list-black">
                    Ask a friend to objectively look at your listing. Is it
                    straight to the point? Key features highlighted?
                  </li>
                  <li className="list-disc list-black">
                    Often medical trainees book site unseen due to their
                    rigourous schedules.
                  </li>
                  <li className="list-disc list-black">
                    there are specific times of the year medical trainees search
                    for housing.
                  </li>
                  <li className="list-disc list-black">
                    July generally the start of internship, residency and
                    fellowship (longer term 1-2+ years)
                  </li>
                  <li className="list-disc list-black">
                    August Sept new medical students gernerally start their year
                    (Some medical schools have varied intake dates)
                  </li>
                  <li className="list-disc list-black">
                    various times of the year medical trainees do short term
                    electives, away rotations, observerships, requiring
                    furnished accommodations away from their home medical
                    schools
                  </li>

                  <li className="list-disc list-black">
                    Medical trainees can be sporadic with their commiunication.
                    Often exams, night rotations, on call, application deadlines
                    etc get in ther way of their ability to reach out ansd
                    search. Make it easy for them. Facetime. Skype, Zoom, Teams.
                    (Don't be surprised if you receive followup communication in
                    the middle of the night after radio silence for weeks. They
                    are probably in panic mode, worried they have not secured a
                    place to stay)
                  </li>
                </ul>
              </div>
            </>
          }
        />
        <LandlordFaq
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                Q: Can I remove one property listing and replace it with another
                under the same subscription fee? I have successfully found a
                tenant and would like to post another property.
              </h3>
            </>
          }
          linkText={
            <>
              <div
                className="p-10"
                style={{ width: "41.2vw", fontWeight: "lighter" }}
              >
                <ul className="text-gry p-9">
                  <li className="list-disc list-black">
                    There could be a few reasons you have't received a good
                    response.
                  </li>
                  <li className="list-disc list-black mt-9">
                    Make sure you have added{" "}
                    <Link to="/" className="text-customBlue hover:underline">
                      info@medirent.com
                    </Link>{" "}
                    to your contacts and address book to prevent automatic
                    filing to trash and junk.
                  </li>
                  <li className="list-disc list-black mt-7">
                    {" "}
                    Google 'how to white list an email address') Photo
                  </li>
                  <li className="list-disc list-black">
                    Are you in the price range of other properties: too high?
                    Too low?
                  </li>
                  <li className="list-disc list-black">
                    Enough short brief points highlighting the home,
                    neighbourhood and commute to medical facilities.
                  </li>
                  <li>Do the pictures look inviting and show well?</li>
                  <li className="list-disc list-black">
                    Too much clutter? Toilet seat up? Curtains half open, messy.
                  </li>
                  <li className="list-disc list-black">
                    Ask a friend to objectively look at your listing. Is it
                    straight to the point? Key features highlighted?
                  </li>
                  <li className="list-disc list-black">
                    Often medical trainees book site unseen due to their
                    rigourous schedules.
                  </li>
                  <li className="list-disc list-black">
                    there are specific times of the year medical trainees search
                    for housing.
                  </li>
                  <li className="list-disc list-black">
                    July generally the start of internship, residency and
                    fellowship (longer term 1-2+ years)
                  </li>
                  <li className="list-disc list-black">
                    August Sept new medical students gernerally start their year
                    (Some medical schools have varied intake dates)
                  </li>
                  <li className="list-disc list-black">
                    various times of the year medical trainees do short term
                    electives, away rotations, observerships, requiring
                    furnished accommodations away from their home medical
                    schools
                  </li>

                  <li className="list-disc list-black">
                    Medical trainees can be sporadic with their commiunication.
                    Often exams, night rotations, on call, application deadlines
                    etc get in ther way of their ability to reach out ansd
                    search. Make it easy for them. Facetime. Skype, Zoom, Teams.
                    (Don't be surprised if you receive followup communication in
                    the middle of the night after radio silence for weeks. They
                    are probably in panic mode, worried they have not secured a
                    place to stay)
                  </li>
                </ul>
              </div>
            </>
          }
        />
        <LandlordFaq
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                Q: Does medirent collect rent and submit it to the landlord,
                similar to AirBNB?
              </h3>
            </>
          }
          linkText={
            <>
              <div
                className="p-10"
                style={{ width: "41.2vw", fontWeight: "lighter" }}
              >
                <ul className="text-gry p-9">
                  <li className="list-disc list-black">
                    There could be a few reasons you have't received a good
                    response.
                  </li>
                  <li className="list-disc list-black mt-9">
                    Make sure you have added{" "}
                    <Link to="/" className="text-customBlue hover:underline">
                      info@medirent.com
                    </Link>{" "}
                    to your contacts and address book to prevent automatic
                    filing to trash and junk.
                  </li>
                  <li className="list-disc list-black mt-7">
                    {" "}
                    Google 'how to white list an email address') Photo
                  </li>
                  <li className="list-disc list-black">
                    Are you in the price range of other properties: too high?
                    Too low?
                  </li>
                  <li className="list-disc list-black">
                    Enough short brief points highlighting the home,
                    neighbourhood and commute to medical facilities.
                  </li>
                  <li>Do the pictures look inviting and show well?</li>
                  <li className="list-disc list-black">
                    Too much clutter? Toilet seat up? Curtains half open, messy.
                  </li>
                  <li className="list-disc list-black">
                    Ask a friend to objectively look at your listing. Is it
                    straight to the point? Key features highlighted?
                  </li>
                  <li className="list-disc list-black">
                    Often medical trainees book site unseen due to their
                    rigourous schedules.
                  </li>
                  <li className="list-disc list-black">
                    there are specific times of the year medical trainees search
                    for housing.
                  </li>
                  <li className="list-disc list-black">
                    July generally the start of internship, residency and
                    fellowship (longer term 1-2+ years)
                  </li>
                  <li className="list-disc list-black">
                    August Sept new medical students gernerally start their year
                    (Some medical schools have varied intake dates)
                  </li>
                  <li className="list-disc list-black">
                    various times of the year medical trainees do short term
                    electives, away rotations, observerships, requiring
                    furnished accommodations away from their home medical
                    schools
                  </li>

                  <li className="list-disc list-black">
                    Medical trainees can be sporadic with their commiunication.
                    Often exams, night rotations, on call, application deadlines
                    etc get in ther way of their ability to reach out ansd
                    search. Make it easy for them. Facetime. Skype, Zoom, Teams.
                    (Don't be surprised if you receive followup communication in
                    the middle of the night after radio silence for weeks. They
                    are probably in panic mode, worried they have not secured a
                    place to stay)
                  </li>
                </ul>
              </div>
            </>
          }
        />
        <LandlordFaq
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                Q: My listing has been up for one month but I have not received
                any interest so I posted on a student website and have rented my
                property. I would like to cancel my listing.
              </h3>
            </>
          }
          linkText={
            <>
              <div
                className="p-10"
                style={{ width: "41.2vw", fontWeight: "lighter" }}
              >
                <ul className="text-gry p-9">
                  <li className="list-disc list-black">
                    There could be a few reasons you have't received a good
                    response.
                  </li>
                  <li className="list-disc list-black mt-9">
                    Make sure you have added{" "}
                    <Link to="/" className="text-customBlue hover:underline">
                      info@medirent.com
                    </Link>{" "}
                    to your contacts and address book to prevent automatic
                    filing to trash and junk.
                  </li>
                  <li className="list-disc list-black mt-7">
                    {" "}
                    Google 'how to white list an email address') Photo
                  </li>
                  <li className="list-disc list-black">
                    Are you in the price range of other properties: too high?
                    Too low?
                  </li>
                  <li className="list-disc list-black">
                    Enough short brief points highlighting the home,
                    neighbourhood and commute to medical facilities.
                  </li>
                  <li>Do the pictures look inviting and show well?</li>
                  <li className="list-disc list-black">
                    Too much clutter? Toilet seat up? Curtains half open, messy.
                  </li>
                  <li className="list-disc list-black">
                    Ask a friend to objectively look at your listing. Is it
                    straight to the point? Key features highlighted?
                  </li>
                  <li className="list-disc list-black">
                    Often medical trainees book site unseen due to their
                    rigourous schedules.
                  </li>
                  <li className="list-disc list-black">
                    there are specific times of the year medical trainees search
                    for housing.
                  </li>
                  <li className="list-disc list-black">
                    July generally the start of internship, residency and
                    fellowship (longer term 1-2+ years)
                  </li>
                  <li className="list-disc list-black">
                    August Sept new medical students gernerally start their year
                    (Some medical schools have varied intake dates)
                  </li>
                  <li className="list-disc list-black">
                    various times of the year medical trainees do short term
                    electives, away rotations, observerships, requiring
                    furnished accommodations away from their home medical
                    schools
                  </li>

                  <li className="list-disc list-black">
                    Medical trainees can be sporadic with their commiunication.
                    Often exams, night rotations, on call, application deadlines
                    etc get in ther way of their ability to reach out ansd
                    search. Make it easy for them. Facetime. Skype, Zoom, Teams.
                    (Don't be surprised if you receive followup communication in
                    the middle of the night after radio silence for weeks. They
                    are probably in panic mode, worried they have not secured a
                    place to stay)
                  </li>
                </ul>
              </div>
            </>
          }
        />
        <LandlordFaq
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                Q: How do I change my pictures for an existing posting?
              </h3>
            </>
          }
          linkText={
            <>
              <div
                className="p-10"
                style={{ width: "41.2vw", fontWeight: "lighter" }}
              >
                <ul className="text-gry p-9">
                  <li className="list-disc list-black">
                    There could be a few reasons you have't received a good
                    response.
                  </li>
                  <li className="list-disc list-black mt-9">
                    Make sure you have added{" "}
                    <Link to="/" className="text-customBlue hover:underline">
                      info@medirent.com
                    </Link>{" "}
                    to your contacts and address book to prevent automatic
                    filing to trash and junk.
                  </li>
                  <li className="list-disc list-black mt-7">
                    {" "}
                    Google 'how to white list an email address') Photo
                  </li>
                  <li className="list-disc list-black">
                    Are you in the price range of other properties: too high?
                    Too low?
                  </li>
                  <li className="list-disc list-black">
                    Enough short brief points highlighting the home,
                    neighbourhood and commute to medical facilities.
                  </li>
                  <li>Do the pictures look inviting and show well?</li>
                  <li className="list-disc list-black">
                    Too much clutter? Toilet seat up? Curtains half open, messy.
                  </li>
                  <li className="list-disc list-black">
                    Ask a friend to objectively look at your listing. Is it
                    straight to the point? Key features highlighted?
                  </li>
                  <li className="list-disc list-black">
                    Often medical trainees book site unseen due to their
                    rigourous schedules.
                  </li>
                  <li className="list-disc list-black">
                    there are specific times of the year medical trainees search
                    for housing.
                  </li>
                  <li className="list-disc list-black">
                    July generally the start of internship, residency and
                    fellowship (longer term 1-2+ years)
                  </li>
                  <li className="list-disc list-black">
                    August Sept new medical students gernerally start their year
                    (Some medical schools have varied intake dates)
                  </li>
                  <li className="list-disc list-black">
                    various times of the year medical trainees do short term
                    electives, away rotations, observerships, requiring
                    furnished accommodations away from their home medical
                    schools
                  </li>

                  <li className="list-disc list-black">
                    Medical trainees can be sporadic with their commiunication.
                    Often exams, night rotations, on call, application deadlines
                    etc get in ther way of their ability to reach out ansd
                    search. Make it easy for them. Facetime. Skype, Zoom, Teams.
                    (Don't be surprised if you receive followup communication in
                    the middle of the night after radio silence for weeks. They
                    are probably in panic mode, worried they have not secured a
                    place to stay)
                  </li>
                </ul>
              </div>
            </>
          }
        />
        <LandlordFaq
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                Q: As a new landlord, can medirent provide me with template
                rental agreement forms or contracts?
              </h3>
            </>
          }
          linkText={
            <>
              <div
                className="p-10"
                style={{ width: "41.2vw", fontWeight: "lighter" }}
              >
                <ul className="text-gry p-9">
                  <li className="list-disc list-black">
                    There could be a few reasons you have't received a good
                    response.
                  </li>
                  <li className="list-disc list-black mt-9">
                    Make sure you have added{" "}
                    <Link to="/" className="text-customBlue hover:underline">
                      info@medirent.com
                    </Link>{" "}
                    to your contacts and address book to prevent automatic
                    filing to trash and junk.
                  </li>
                  <li className="list-disc list-black mt-7">
                    {" "}
                    Google 'how to white list an email address') Photo
                  </li>
                  <li className="list-disc list-black">
                    Are you in the price range of other properties: too high?
                    Too low?
                  </li>
                  <li className="list-disc list-black">
                    Enough short brief points highlighting the home,
                    neighbourhood and commute to medical facilities.
                  </li>
                  <li>Do the pictures look inviting and show well?</li>
                  <li className="list-disc list-black">
                    Too much clutter? Toilet seat up? Curtains half open, messy.
                  </li>
                  <li className="list-disc list-black">
                    Ask a friend to objectively look at your listing. Is it
                    straight to the point? Key features highlighted?
                  </li>
                  <li className="list-disc list-black">
                    Often medical trainees book site unseen due to their
                    rigourous schedules.
                  </li>
                  <li className="list-disc list-black">
                    there are specific times of the year medical trainees search
                    for housing.
                  </li>
                  <li className="list-disc list-black">
                    July generally the start of internship, residency and
                    fellowship (longer term 1-2+ years)
                  </li>
                  <li className="list-disc list-black">
                    August Sept new medical students gernerally start their year
                    (Some medical schools have varied intake dates)
                  </li>
                  <li className="list-disc list-black">
                    various times of the year medical trainees do short term
                    electives, away rotations, observerships, requiring
                    furnished accommodations away from their home medical
                    schools
                  </li>

                  <li className="list-disc list-black">
                    Medical trainees can be sporadic with their commiunication.
                    Often exams, night rotations, on call, application deadlines
                    etc get in ther way of their ability to reach out ansd
                    search. Make it easy for them. Facetime. Skype, Zoom, Teams.
                    (Don't be surprised if you receive followup communication in
                    the middle of the night after radio silence for weeks. They
                    are probably in panic mode, worried they have not secured a
                    place to stay)
                  </li>
                </ul>
              </div>
            </>
          }
        />
        <LandlordFaq
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                Q: I'm interested in using your platform to list my properties
                on your site and would like to know if I need to pay per
                listing?
              </h3>
            </>
          }
          linkText={
            <>
              <div
                className="p-10"
                style={{ width: "41.2vw", fontWeight: "lighter" }}
              >
                <ul className="text-gry p-9">
                  <li className="list-disc list-black">
                    There could be a few reasons you have't received a good
                    response.
                  </li>
                  <li className="list-disc list-black mt-9">
                    Make sure you have added{" "}
                    <Link to="/" className="text-customBlue hover:underline">
                      info@medirent.com
                    </Link>{" "}
                    to your contacts and address book to prevent automatic
                    filing to trash and junk.
                  </li>
                  <li className="list-disc list-black mt-7">
                    {" "}
                    Google 'how to white list an email address') Photo
                  </li>
                  <li className="list-disc list-black">
                    Are you in the price range of other properties: too high?
                    Too low?
                  </li>
                  <li className="list-disc list-black">
                    Enough short brief points highlighting the home,
                    neighbourhood and commute to medical facilities.
                  </li>
                  <li>Do the pictures look inviting and show well?</li>
                  <li className="list-disc list-black">
                    Too much clutter? Toilet seat up? Curtains half open, messy.
                  </li>
                  <li className="list-disc list-black">
                    Ask a friend to objectively look at your listing. Is it
                    straight to the point? Key features highlighted?
                  </li>
                  <li className="list-disc list-black">
                    Often medical trainees book site unseen due to their
                    rigourous schedules.
                  </li>
                  <li className="list-disc list-black">
                    there are specific times of the year medical trainees search
                    for housing.
                  </li>
                  <li className="list-disc list-black">
                    July generally the start of internship, residency and
                    fellowship (longer term 1-2+ years)
                  </li>
                  <li className="list-disc list-black">
                    August Sept new medical students gernerally start their year
                    (Some medical schools have varied intake dates)
                  </li>
                  <li className="list-disc list-black">
                    various times of the year medical trainees do short term
                    electives, away rotations, observerships, requiring
                    furnished accommodations away from their home medical
                    schools
                  </li>

                  <li className="list-disc list-black">
                    Medical trainees can be sporadic with their commiunication.
                    Often exams, night rotations, on call, application deadlines
                    etc get in ther way of their ability to reach out ansd
                    search. Make it easy for them. Facetime. Skype, Zoom, Teams.
                    (Don't be surprised if you receive followup communication in
                    the middle of the night after radio silence for weeks. They
                    are probably in panic mode, worried they have not secured a
                    place to stay)
                  </li>
                </ul>
              </div>
            </>
          }
        />
        <LandlordFaq
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                Q: I'm interested in using your platform to list my properties
                on your site and would like to know if I need to pay per
                listing?
              </h3>
            </>
          }
          linkText={
            <>
              <div
                className="p-10"
                style={{ width: "41.2vw", fontWeight: "lighter" }}
              >
                <ul className="text-gry p-9">
                  <li className="list-disc list-black">
                    There could be a few reasons you have't received a good
                    response.
                  </li>
                  <li className="list-disc list-black mt-9">
                    Make sure you have added{" "}
                    <Link to="/" className="text-customBlue hover:underline">
                      info@medirent.com
                    </Link>{" "}
                    to your contacts and address book to prevent automatic
                    filing to trash and junk.
                  </li>
                  <li className="list-disc list-black mt-7">
                    {" "}
                    Google 'how to white list an email address') Photo
                  </li>
                  <li className="list-disc list-black">
                    Are you in the price range of other properties: too high?
                    Too low?
                  </li>
                  <li className="list-disc list-black">
                    Enough short brief points highlighting the home,
                    neighbourhood and commute to medical facilities.
                  </li>
                  <li>Do the pictures look inviting and show well?</li>
                  <li className="list-disc list-black">
                    Too much clutter? Toilet seat up? Curtains half open, messy.
                  </li>
                  <li className="list-disc list-black">
                    Ask a friend to objectively look at your listing. Is it
                    straight to the point? Key features highlighted?
                  </li>
                  <li className="list-disc list-black">
                    Often medical trainees book site unseen due to their
                    rigourous schedules.
                  </li>
                  <li className="list-disc list-black">
                    there are specific times of the year medical trainees search
                    for housing.
                  </li>
                  <li className="list-disc list-black">
                    July generally the start of internship, residency and
                    fellowship (longer term 1-2+ years)
                  </li>
                  <li className="list-disc list-black">
                    August Sept new medical students gernerally start their year
                    (Some medical schools have varied intake dates)
                  </li>
                  <li className="list-disc list-black">
                    various times of the year medical trainees do short term
                    electives, away rotations, observerships, requiring
                    furnished accommodations away from their home medical
                    schools
                  </li>

                  <li className="list-disc list-black">
                    Medical trainees can be sporadic with their commiunication.
                    Often exams, night rotations, on call, application deadlines
                    etc get in ther way of their ability to reach out ansd
                    search. Make it easy for them. Facetime. Skype, Zoom, Teams.
                    (Don't be surprised if you receive followup communication in
                    the middle of the night after radio silence for weeks. They
                    are probably in panic mode, worried they have not secured a
                    place to stay)
                  </li>
                </ul>
              </div>
            </>
          }
        />
        <LandlordFaq
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                Q: I'm interested in using your platform to list my properties
                on your site and would like to know if I need to pay per
                listing?
              </h3>
            </>
          }
          linkText={
            <>
              <div
                className="p-10"
                style={{ width: "41.2vw", fontWeight: "lighter" }}
              >
                <ul className="text-gry p-9">
                  <li className="list-disc list-black">
                    There could be a few reasons you have't received a good
                    response.
                  </li>
                  <li className="list-disc list-black mt-9">
                    Make sure you have added{" "}
                    <Link to="/" className="text-customBlue hover:underline">
                      info@medirent.com
                    </Link>{" "}
                    to your contacts and address book to prevent automatic
                    filing to trash and junk.
                  </li>
                  <li className="list-disc list-black mt-7">
                    {" "}
                    Google 'how to white list an email address') Photo
                  </li>
                  <li className="list-disc list-black">
                    Are you in the price range of other properties: too high?
                    Too low?
                  </li>
                  <li className="list-disc list-black">
                    Enough short brief points highlighting the home,
                    neighbourhood and commute to medical facilities.
                  </li>
                  <li>Do the pictures look inviting and show well?</li>
                  <li className="list-disc list-black">
                    Too much clutter? Toilet seat up? Curtains half open, messy.
                  </li>
                  <li className="list-disc list-black">
                    Ask a friend to objectively look at your listing. Is it
                    straight to the point? Key features highlighted?
                  </li>
                  <li className="list-disc list-black">
                    Often medical trainees book site unseen due to their
                    rigourous schedules.
                  </li>
                  <li className="list-disc list-black">
                    there are specific times of the year medical trainees search
                    for housing.
                  </li>
                  <li className="list-disc list-black">
                    July generally the start of internship, residency and
                    fellowship (longer term 1-2+ years)
                  </li>
                  <li className="list-disc list-black">
                    August Sept new medical students gernerally start their year
                    (Some medical schools have varied intake dates)
                  </li>
                  <li className="list-disc list-black">
                    various times of the year medical trainees do short term
                    electives, away rotations, observerships, requiring
                    furnished accommodations away from their home medical
                    schools
                  </li>

                  <li className="list-disc list-black">
                    Medical trainees can be sporadic with their commiunication.
                    Often exams, night rotations, on call, application deadlines
                    etc get in ther way of their ability to reach out ansd
                    search. Make it easy for them. Facetime. Skype, Zoom, Teams.
                    (Don't be surprised if you receive followup communication in
                    the middle of the night after radio silence for weeks. They
                    are probably in panic mode, worried they have not secured a
                    place to stay)
                  </li>
                </ul>
              </div>
            </>
          }
        />
        <LandlordFaq
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                Q: I'm interested in using your platform to list my properties
                on your site and would like to know if I need to pay per
                listing?
              </h3>
            </>
          }
          linkText={
            <>
              <div
                className="p-10"
                style={{ width: "41.2vw", fontWeight: "lighter" }}
              >
                <ul className="text-gry p-9">
                  <li className="list-disc list-black">
                    There could be a few reasons you have't received a good
                    response.
                  </li>
                  <li className="list-disc list-black mt-9">
                    Make sure you have added{" "}
                    <Link to="/" className="text-customBlue hover:underline">
                      info@medirent.com
                    </Link>{" "}
                    to your contacts and address book to prevent automatic
                    filing to trash and junk.
                  </li>
                  <li className="list-disc list-black mt-7">
                    {" "}
                    Google 'how to white list an email address') Photo
                  </li>
                  <li className="list-disc list-black">
                    Are you in the price range of other properties: too high?
                    Too low?
                  </li>
                  <li className="list-disc list-black">
                    Enough short brief points highlighting the home,
                    neighbourhood and commute to medical facilities.
                  </li>
                  <li>Do the pictures look inviting and show well?</li>
                  <li className="list-disc list-black">
                    Too much clutter? Toilet seat up? Curtains half open, messy.
                  </li>
                  <li className="list-disc list-black">
                    Ask a friend to objectively look at your listing. Is it
                    straight to the point? Key features highlighted?
                  </li>
                  <li className="list-disc list-black">
                    Often medical trainees book site unseen due to their
                    rigourous schedules.
                  </li>
                  <li className="list-disc list-black">
                    there are specific times of the year medical trainees search
                    for housing.
                  </li>
                  <li className="list-disc list-black">
                    July generally the start of internship, residency and
                    fellowship (longer term 1-2+ years)
                  </li>
                  <li className="list-disc list-black">
                    August Sept new medical students gernerally start their year
                    (Some medical schools have varied intake dates)
                  </li>
                  <li className="list-disc list-black">
                    various times of the year medical trainees do short term
                    electives, away rotations, observerships, requiring
                    furnished accommodations away from their home medical
                    schools
                  </li>

                  <li className="list-disc list-black">
                    Medical trainees can be sporadic with their commiunication.
                    Often exams, night rotations, on call, application deadlines
                    etc get in ther way of their ability to reach out ansd
                    search. Make it easy for them. Facetime. Skype, Zoom, Teams.
                    (Don't be surprised if you receive followup communication in
                    the middle of the night after radio silence for weeks. They
                    are probably in panic mode, worried they have not secured a
                    place to stay)
                  </li>
                </ul>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default App;
