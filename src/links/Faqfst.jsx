import React, { useState } from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Faqfst = ({ title, linkText }) => {
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
    <div className="text-black font-semibold flex ml-2 mt-10">
      <div>
        <Faqfst
          title={
            <>
              <h3 className="p-3 font-semibold" style={{ width: "40vw" }}>
                Landlord FAQs
              </h3>
            </>
          }
          linkText={
            <>
              <ul className="p-3 text-sm " style={{ width: "41.2vw" }}>
                <li>
                  view our
                  <Link to="/" className="text-customBlue hover:underline">
                    {" "}
                    FAQ section specifically made for landlords.
                  </Link>
                </li>
              </ul>
            </>
          }
        />

        <Faqfst
          title={
            <>
              <h3 className="p-3" style={{ width: "40vw" }}>
                Tenant FAQs
              </h3>
            </>
          }
          linkText={
            <>
              <ul className="p-3 text-sm" style={{ width: "41.2vw" }}>
                <li>
                  view our
                  <Link to="/" className="text-customBlue hover:underline">
                    FAQ section specifically made for tenants.
                  </Link>
                </li>
              </ul>
            </>
          }
        />
        <Faqfst
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                What is your Local Medical School or Hospital
              </h3>
            </>
          }
          linkText={
            <>
              <ul className="text-gry text-sm p-7">
                <li className="list-disc list-black">
                  Check the various names for the local medical school or
                  hospital nearby with a quick google: 'Medical School or
                  hospital near me'
                </li>
                <li className="list-disc list-black">
                  Often Medical Schools have the offical name changed after
                  large donations etc. Keep this in mind. More recently medical
                  schools send their trainees to remote rural locations or they
                  have several campuses leaners are sent out to for various
                  lengths of time. Ask your local health care connections.
                </li>
                <li className="list-disc list-black">
                  <Link to="/" className="text-customBlue hover:underline">
                    medirent.com{" "}
                  </Link>
                  <li>
                    caters to Medical Professional learners, short term locums,
                    contract Medical Professionals and long term permanent
                    placments of Medical Professionals. Can't find what
                    school(s) and hospital(s) service your area? Pop us an email
                    and we'll try to find out for you{" "}
                  </li>
                  <Link to="/" className="text-customBlue hover:underline">
                    {" "}
                    info@medirent.com
                  </Link>
                </li>
                <li className="list-disc list-black">
                  First time landlord for the medical community and wanting to
                  help out with 'Housing for Healthcare'? Send us an email if
                  you are needing some guidance.
                  <Link to="/" className="text-customBlue hover:underline">
                    info@medirent.com
                  </Link>
                </li>
              </ul>
            </>
          }
        />
      </div>
      <div>
        <Faqfst
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                What exactly is medirent.com
              </h3>
            </>
          }
          linkText={
            <>
              <ul className="list-disc text-gry p-7 text-sm ">
                <li>
                  <Link to="/" className="text-customBlue hover:underline">
                    medirent.com{" "}
                  </Link>
                  <li className="list-disc list-black">
                    is a global platform founded by a dedicated team of medical
                    community members who aim to alleviate the housing search
                    stress experienced during medical training and for Medical
                    Professionals seeking accommodations near their workplaces.
                    Our platform also provides an avenue for landlords with
                    properties in proximity to clinics, medical schools, and
                    hospitals to connect with the medical community.
                  </li>
                </li>
                <li className="list-disc list-black mt-5">
                  The need for housing solutions for medical students and
                  professionals extends across urban centers, rural communities,
                  and remote locations. We are committed to addressing
                  healthcare shortages by offering 'Housing for Healthcare' in
                  smaller and more remote communities. We actively invite
                  landlords who are interested in contributing to this
                  initiative by providing their homes and rentals in rural and
                  urban areas to join us.
                </li>
                <li className="list-disc list-black mt-5">
                  At{" "}
                  <Link to="/" className="hover:underline">
                    medirent.com,
                  </Link>
                  you can discover listings in major teaching centers worldwide,
                  and our platform continues to expand daily. Whether you're in
                  search of short-term or long-term housing, you can find
                  options that are:
                </li>
                <li className="list-disc list-black mt-5">
                  Located near hospitals and clinics
                </li>
                <li className="list-disc list-black">
                  Close to medical school campuses
                </li>
                <li className="list-disc list-black">
                  Ideal for rural placements
                </li>
                <li className="list-disc list-black">
                  Near satellite medical school campuses
                </li>
                <li className="list-disc list-black">
                  Available in furnished and unfurnished conditions
                </li>
                <li className="list-disc list-black">
                  {" "}
                  Suitable for away rotations Explore our platform to find the
                  perfect housing solution tailored to your needs.
                </li>
              </ul>
            </>
          }
        />
        <Faqfst
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                What exactly is medirent.com
              </h3>
            </>
          }
          linkText={
            <>
              <ul className="text-gry p-9 text-sm ">
                <li className="list-disc list-black">
                  There could be a few reasons you have't received a good
                  response.
                </li>
                <li className="list-disc list-black mt-9">
                  Make sure you have added{" "}
                  <Link to="/" className="text-customBlue hover:underline">
                    info@medirent.com
                  </Link>{" "}
                  to your contacts and address book to prevent automatic filing
                  to trash and junk.
                </li>
                <li className="list-disc list-black mt-7">
                  {" "}
                  Google 'how to white list an email address') Photo
                </li>
                <li className="list-disc list-black">
                  Are you in the price range of other properties: too high? Too
                  low?
                </li>
                <li className="list-disc list-black">
                  Enough short brief points highlighting the home, neighbourhood
                  and commute to medical facilities.
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
                  Often medical trainees book site unseen due to their rigourous
                  schedules.
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
                  electives, away rotations, observerships, requiring furnished
                  accommodations away from their home medical schools
                </li>

                <li className="list-disc list-black">
                  Medical trainees can be sporadic with their commiunication.
                  Often exams, night rotations, on call, application deadlines
                  etc get in ther way of their ability to reach out ansd search.
                  Make it easy for them. Facetime. Skype, Zoom, Teams. (Don't be
                  surprised if you receive followup communication in the middle
                  of the night after radio silence for weeks. They are probably
                  in panic mode, worried they have not secured a place to stay)
                </li>
              </ul>
            </>
          }
        />
        <Faqfst
          title={
            <>
              <h3 style={{ width: "40vw" }} className="p-3">
                Are your Contact emails going into spam
              </h3>
            </>
          }
          linkText={
            <>
              <ul className="p-4 text-sm ">
                <li>
                  <span className="text-red">
                    Make sure you add
                    <Link to="/" className="hover:underline">
                      info@medirent.com{" "}
                    </Link>
                    to your contacts or address book. This helps to eliminate
                    losing important messages from prospectivve landlords or
                    tenants.{" "}
                  </span>
                  <span className="text-gry">
                    Check your Spam folder every few days. Make sure you do not
                    miss an opportunity.. Many institutional servers have
                    agressive spam filters. (for good reason!)
                  </span>
                </li>
              </ul>
            </>
          }
        />
      </div>
    </div>
  );
};

export default App;
