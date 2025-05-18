import Link from "next/link";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-screen bg-blue-600">
      <div className="flex flex-col gap-10 items-center">
        <div className="flex items-center justify-center w-full">
          <img
            className="w-25"
            src="https://res.cloudinary.com/dhelke9k1/image/upload/v1745390515/Screenshot_2022-06-20_100555_1_unxj7n.png"
          />
          <div
            className="flex flex-col items-center text-3xl font-semibold text-white"
            style={{ fontFamily: "cursive" }}
          >
            <p className="">Sky Software</p>
            <p>Solution</p>
          </div>
        </div>

        <div className="flex w-full justify-between sm:justify-evenly">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold text-yellow-300">Quick Links</h1>
            <div className="flex flex-col gap-2">
              <Link
                href="#"
                className="text-xl font-semibold text-white hover:text-blue-800"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-xl font-semibold text-white hover:text-blue-800"
              >
                Courses
              </Link>
              <Link
                href="#"
                className="text-xl font-semibold text-white hover:text-blue-800"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-xl font-semibold text-white hover:text-blue-800"
              >
                Privacy Policy
              </Link>
            </div>
          </div>


          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold text-yellow-300">Pupular Course</h1>
            <div className="flex flex-col gap-2">
              <Link
                href="#"
                className="text-xl font-semibold text-white hover:text-blue-800"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-xl font-semibold text-white hover:text-blue-800"
              >
                Courses
              </Link>
              <Link
                href="#"
                className="text-xl font-semibold text-white hover:text-blue-800"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-xl font-semibold text-white hover:text-blue-800"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-3xl flex flex-col items-center justify-center">
        <div className="flex gap-5 items-center border-b-2 border-gray-300 pb-3">
          <p className="text-gray-500 text-[18px] py-2">
            Office No. 25, 3rd Floor Jaroli Trade Center, Neemuch, Madhya
            Pradesh 458441
          </p>
        </div>

        <div className="flex w-full gap-2 items-center justify-start border-b-2 border-gray-300 py-5">
          <BiSolidPhoneCall className="text-blue-600 text-4xl" />
          <div className="flex flex-col sm:flex-row items-center gap-2 text-[16px]">
            <Link href="tel:919691113506" className="text-gray-500">
              +919691113506,
            </Link>
            <Link href="tel:919575113506" className="text-gray-500">
              +919575113506
            </Link>
          </div>
        </div>

        <div className=" w-full flex justify-start items-center gap-3 border-b-2 border-gray-300 py-5">
          <MdAlternateEmail className="text-blue-600 text-4xl" />
          <Link
            href="mailto:skysoftware2020@gmail.com"
            className="text-[16px] text-gray-500"
          >
            skysoftware2020@gmail.com
          </Link>
        </div>

        <div className=" w-full flex justify-evenly items-center pt-3">
          <Link href="https://wa.me/919575113506" target="_black">
            <img
              width="50px"
              src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
            />
          </Link>
          <Link
            href="https://www.facebook.com/SkySoftwareSolution1"
            target="_black"
          >
            <img
              width="45px"
              src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
            />
          </Link>
          <Link
            href="https://www.instagram.com/skysoftwaresolution"
            target="_blank"
          >
            <img
              width="45px"
              src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
            />
          </Link>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d657.9506342323746!2d74.87139933791742!3d24.45614752540449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396673ee398fcd2b%3A0xbdb65792efa81d4f!2sSky%20Software%20Solution!5e0!3m2!1sen!2sin!4v1745517203292!5m2!1sen!2sin"
        
        className="border-0 rounded-3xl w-full h-[300px] xl:h-full md:col-span-2 xl:col-span-1"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
