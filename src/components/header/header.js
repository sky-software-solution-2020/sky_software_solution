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
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";


export default function Header({ home }) {
  const { isScroll } = useAppContext();
  const [isDisabled, setIsDisabled] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    message: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true)
    const response = await axios.post("/api/v1/form-submit", { form }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (response.status === 200) {
      Swal.fire({
        title: 'Success!',
        icon: 'success',
        text: 'Form Submitted Successfully.',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          setIsDisabled(false)
        }
      })
    }
  };


  return (
    <div className={`w-screen fixed z-50 ${!home ? "bg-white" : ""}`}>

      <div className="hidden xl:block">
        <div
          className={`h-20 relative flex items-center justify-between py-4 px-5 bg-gradient-to-b from-[#155DFC] to-[#1E64FD] shadow-2xl"`}
        >
          <div className="flex items-center gap-3">
            <img
              className="w-15 "
              src="https://res.cloudinary.com/dhelke9k1/image/upload/v1745390515/Screenshot_2022-06-20_100555_1_unxj7n.png"
              alt="logo"
            />
            <div className="flex flex-col items-center text-white">
              <p className="text-xl font-bold">Sky Software Solution</p>
              <p className="text-[11px] font-semibold">
                &quot;Elevating Ideas with Smart Technology&quot;
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
              <Link className="text-xl font-bold text-white" href="/events">
                Event
              </Link>
              <Link className="text-xl font-bold text-white" href="/about-us">
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

            <Link href={'/users/login-register'} className="bg-white text-blue-600 font-bold p-2  rounded-2xl cursor-pointer">
                Login / Register
              </Link>
          </div>
        </div>
      </div>

      <div
        className={` p-2 relative flex items-center justify-between bg-gradient-to-b from-[#155DFC] to-[#1E64FD] shadow-2xl xl:hidden`}
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
                      alt="logo"
                    />
                    <div className="flex flex-col items-center text-blue-600">
                      <p className="text-xl font-bold">Sky Software Solution</p>
                      <p className="text-[11px] font-semibold">
                        &quot;Elevating Ideas with Smart Technology&quot;
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
                    href="/events"
                  >
                    Event
                  </Link>
                  <Link
                    className="text-xl font-bold text-blue-600"
                    href="/about-us"
                  >
                    About Us
                  </Link>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>

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
                    disabled={isDisabled}
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
