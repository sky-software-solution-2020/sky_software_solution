import { Button } from "@mui/material";
import Link from "next/link";
import { useAppContext } from "../context/AppContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useEffect, useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";

export default function Header({ home }) {
  const { isScroll } = useAppContext();
  const [isShow, setIsShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    message: "",
  });
  const [status, setStatus] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(true);

    const res = await fetch("/api/v1/form-submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 1000);
  }, []);

  return (
    <div className={`w-screen fixed pt-2 z-50 ${!home ? "bg-white" : ""}`}>
      {home === true ? (
        <div className="hidden xl:block">
          <div
            className={`h-17 flex items-center justify-between py-4 px-5 ${
              isScroll &&
              "bg-gradient-to-b from-[#155DFC] to-[#1E64FD] shadow-2xl"
            } mx-4 w-auto rounded-4xl`}
          >
            {isScroll ? (
              <div className="flex items-center gap-3">
                <img
                  className="w-15 "
                  src="https://res.cloudinary.com/dhelke9k1/image/upload/v1745390515/Screenshot_2022-06-20_100555_1_unxj7n.png"
                />
                <div className="flex flex-col items-center text-white">
                  <p className="text-xl font-bold">Sky Software Solution</p>
                  <p className="text-[11px] font-semibold">
                    "Elevating Ideas with Smart Technology"
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                {isShow && (
                  <img
                    className={`w-30 translate-y-5 transition-all duration-500 ease-in-out
          ${
            !isScroll
              ? "translate-x-0 translate-y-0 opacity-100"
              : "-translate-x-full -translate-y-full opacity-0"
          }`}
                    src="https://res.cloudinary.com/dhelke9k1/image/upload/v1745390515/Screenshot_2022-06-20_100555_1_unxj7n.png"
                  />
                )}

                <div
                  className="text-5xl font-bold z-20 text-blue-900"
                  style={{ fontFamily: "algerian" }}
                >
                  Sky Software Solution
                </div>
              </div>
            )}

            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center gap-5">
                <Link className="text-xl font-bold text-white" href="/">
                  Home
                </Link>
                <Link className="text-xl font-bold text-white" href="/courses">
                  Course
                </Link>
                <Link
                  className="text-xl font-bold text-white"
                  href="/create-resume"
                >
                  Resume
                </Link>
                <Link className="text-xl font-bold text-white" href="events">
                  Event
                </Link>
                <Link className="text-xl font-bold text-white" href="about-us">
                  About Us
                </Link>
              </div>

              <Sheet>
                <SheetTrigger className="bg-white cursor-pointer text-blue-600 font-bold p-2 rounded-2xl">
                  Enquiry Now!
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Contact Form</SheetTitle>

                    <form
                      className="flex flex-col gap-5 mt-5"
                      onSubmit={handleSubmit}
                    >
                      <div className="flex flex-col gap-2">
                        <label className="text-[18px] font-semibold text-gray-600">
                          Name
                        </label>
                        <input
                          type="text"
                          className="border-2 border-gray-300 rounded-md p-2 w-full"
                          placeholder="Enter your name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[18px] font-semibold text-gray-600">
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-2 border-gray-300 rounded-md p-2 w-full"
                          placeholder="Enter your name"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[18px] font-semibold text-gray-600">
                          Mobile No.
                        </label>
                        <input
                          type="tel"
                          className="scrollButton border-2 border-gray-300 rounded-md p-2 w-full"
                          placeholder="Enter your name"
                          required
                          maxLength={10}
                          minLength={10}
                          name="mobileNumber"
                          value={form.mobileNumber}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[18px] font-semibold text-gray-600">
                          Message
                        </label>
                        <textarea
                          type="text"
                          className="h-20 border-2 border-gray-300 rounded-md p-2 w-full resize-none"
                          placeholder="Type your message here..."
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="bg-blue-600! text-white! font-bold! capitalize! text-xl!"
                      >
                        Submit
                      </Button>
                    </form>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden xl:block">
          <div
            className={`h-17 relative flex items-center justify-between py-4 px-5 bg-gradient-to-b from-[#155DFC] to-[#1E64FD] shadow-2xl" mx-4 w-auto rounded-4xl`}
          >
            <div className="flex items-center gap-3">
              <img
                className="w-15 "
                src="https://res.cloudinary.com/dhelke9k1/image/upload/v1745390515/Screenshot_2022-06-20_100555_1_unxj7n.png"
              />
              <div className="flex flex-col items-center text-white">
                <p className="text-xl font-bold">Sky Software Solution</p>
                <p className="text-[11px] font-semibold">
                  "Elevating Ideas with Smart Technology"
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center gap-5">
                <Link className="text-xl font-bold text-white" href="/">
                  Home
                </Link>
                <Link className="text-xl font-bold text-white" href="/courses">
                  Course
                </Link>
                <Link
                  className="text-xl font-bold text-white"
                  href="/create-resume"
                >
                  Resume
                </Link>
                <Link className="text-xl font-bold text-white" href="events">
                  Event
                </Link>
                <Link className="text-xl font-bold text-white" href="about-us">
                  About Us
                </Link>
              </div>

              <Sheet>
                <SheetTrigger className="bg-white cursor-pointer text-blue-600 font-bold p-2 rounded-2xl">
                  Enquiry Now!
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Contact Form</SheetTitle>

                    <form className="flex flex-col gap-5 mt-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[18px] font-semibold text-gray-600">
                          Name
                        </label>
                        <input
                          type="text"
                          className="border-2 border-gray-300 rounded-md p-2 w-full"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[18px] font-semibold text-gray-600">
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-2 border-gray-300 rounded-md p-2 w-full"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[18px] font-semibold text-gray-600">
                          Mobile No.
                        </label>
                        <input
                          type="tel"
                          className="scrollButton border-2 border-gray-300 rounded-md p-2 w-full"
                          placeholder="Enter your name"
                          required
                          maxLength={10}
                          minLength={10}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[18px] font-semibold text-gray-600">
                          Message
                        </label>
                        <textarea
                          type="text"
                          className="h-20 border-2 border-gray-300 rounded-md p-2 w-full resize-none"
                          placeholder="Type your message here..."
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="bg-blue-600! text-white! font-bold! capitalize! text-xl!"
                      >
                        Submit
                      </Button>
                    </form>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      )}

      <div
        className={` p-2 relative flex items-center justify-between ${
          home === true
            ? isScroll &&
              "bg-gradient-to-b from-[#0f49c6] to-[#1358ec] shadow-2xl"
            : "bg-gradient-to-b from-[#0f49c6] to-[#1358ec] shadow-2xl"
        } mx-1 w-auto rounded-4xl xl:hidden`}
      >
        <div className="flex w-full items-center justify-between gap-5">
          <Sheet>
            <SheetTrigger className="bg-white cursor-pointer text-blue-600 font-bold p-1 rounded-full">
              <MdOutlineMenuOpen className="text-3xl" />
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex justify-center items-center gap-3 border-b-2 border-blue-600 pb-5">
                    <img
                      className="w-15"
                      src="https://res.cloudinary.com/dhelke9k1/image/upload/v1745390515/Screenshot_2022-06-20_100555_1_unxj7n.png"
                    />
                    <div className="flex flex-col items-center text-blue-600">
                      <p className="text-xl font-bold">Sky Software Solution</p>
                      <p className="text-[11px] font-semibold">
                        "Elevating Ideas with Smart Technology"
                      </p>
                    </div>
                  </div>
                </SheetTitle>

                <div className="flex flex-col p-5  justify-center gap-5">
                  <Link className="text-xl font-bold text-blue-600" href="/">
                    Home
                  </Link>
                  <Link
                    className="text-xl font-bold text-blue-600"
                    href="/courses"
                  >
                    Course
                  </Link>
                  <Link
                    className="text-xl font-bold text-blue-600"
                    href="/create-resume"
                  >
                    Resume
                  </Link>
                  <Link
                    className="text-xl font-bold text-blue-600"
                    href="events"
                  >
                    Event
                  </Link>
                  <Link
                    className="text-xl font-bold text-blue-600"
                    href="about-us"
                  >
                    About Us
                  </Link>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger className="bg-white text-sm cursor-pointer text-blue-600 font-bold p-2 rounded-2xl">
              Enquiry Now!
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Contact Form</SheetTitle>

                <form className="flex flex-col gap-5 mt-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[18px] font-semibold text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-2 border-gray-300 rounded-md p-2 w-full"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[18px] font-semibold text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-2 border-gray-300 rounded-md p-2 w-full"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[18px] font-semibold text-gray-600">
                      Mobile No.
                    </label>
                    <input
                      type="tel"
                      className="scrollButton border-2 border-gray-300 rounded-md p-2 w-full"
                      placeholder="Enter your name"
                      required
                      maxLength={10}
                      minLength={10}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[18px] font-semibold text-gray-600">
                      Message
                    </label>
                    <textarea
                      type="text"
                      className="h-20 border-2 border-gray-300 rounded-md p-2 w-full resize-none"
                      placeholder="Type your message here..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-blue-600! text-white! font-bold! capitalize! text-xl!"
                  >
                    Submit
                  </Button>
                </form>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
