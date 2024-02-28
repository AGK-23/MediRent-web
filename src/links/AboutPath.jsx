import { Link } from "react-router-dom";
import waitinRoom from "../assets/slider_1.jpg";

const AboutPath = () => {
  return (
    <div className="aboutpath">
      {" "}
      <div className="">
        <img
          src={waitinRoom}
          alt="firstImage"
          className="w-full h-80 object-cover"
          style={{ marginTop: "10vw" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-4xl mb-20">ABOUT US</p>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-black text-3xl text-center">
          <strong>medirent.com</strong> <br />{" "}
          <strong className="pt-20">ABOUT US</strong>{" "}
        </h3>

        <div className="mt-10 text-black opacity-70">
          <p className="mt-10 text-black opacity-90">
            medirent.com ABOUT US Welcome to{" "}
            <Link to="/" className="hover:underline text-b ">
              medirent.com{" "}
            </Link>{" "}
            your destination for fostering connections between healthcare
            professionals and their ideal housing solutions near hospitals,
            clinics, and educational institutions. Our platform is dedicated to
            simplifying the process of finding suitable homes for medical
            learners and practitioners, spanning major teaching cities and
            smaller rural communities alike. Whether you're a resident, nursing,
            midwifery, medical student, or practitioner in search of the perfect
            home, or a landlord eager to connect with trustworthy healthcare
            tenants, rest assured, we've got you covered.
          </p>
        </div>
        <div className="mt-10 ">
          <h3 className="text-black font-semibold">
            For Healthcare Professionals:
          </h3>
          <p className="mt-10 text-black opacity-70">
            medirent is your trusted partner in finding the ideal living
            space tailored to your unique needs. Beyond just housing, we
            understand the challenges to find suitable housing and are here to
            support you in navigating these challenges. Join our community to
            discover a straightforward way to secure housing, ensuring you have
            the stability and comfort you need to thrive in your medical career.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-black font-semibold">For Landlords:</h3>
          <p className="mt-10 text-black opacity-70">
            Welcome to a community that values the crucial role landlords play
            in providing quality housing to healthcare professionals.
            medirent is your platform to connect with a pool of responsible
            and reliable tenants from the healthcare field. By listing your
            property with us, you become an essential part of addressing housing
            challenges during critical times. Join us in creating a supportive
            living environment for healthcare professionals, while also ensuring
            the success of your rental venture.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-black font-semibold">For Partners:</h3>
          <p className="mt-10 text-black opacity-70 ">
            medirent is a platform dedicated to facilitating the search for
            suitable housing for medical professionals during their training,
            locums and post graduation. It is a shared commitment to addressing
            the unique challenges faced by the medical community when
            relocating. By working together, we aim to provide a comprehensive
            one-stop-shop platform that streamlines the process of finding
            housing for medical learners/professionals. This collaboration not
            only supports the needs of healthcare professionals but also
            contributes to a seamless transition during a period that is often
            marked by challenges in securing suitable accommodations.
          </p>
        </div>
        <div className="mt-10">
          <p className="mt-10 text-black opacity-70">
            medirent.com is actively seeking partnerships for its "Housing
            for Healthcare" initiative. We believe in the power of collective
            efforts to make a meaningful impact, and your involvement in this
            initiative would contribute significantly to our shared goal of
            providing accessible and reliable housing solutions for the medical
            community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPath;
