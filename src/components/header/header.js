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

export default function Header() {
  const { isScroll } = useAppContext();
  return (
    <div className="w-screen fixed mt-4 z-50">
      <div
        className={`h-17 relative flex items-center justify-between py-4 px-5 ${
          isScroll && "bg-gradient-to-b from-[#155DFC] to-[#1E64FD] shadow-2xl"
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
            <img
              className={`w-60 absolute top-2 transition-all duration-500 ease-in-out
          ${
            !isScroll
              ? "translate-x-0 translate-y-0 opacity-100"
              : "-translate-x-full -translate-y-full opacity-0"
          }`}
              src="https://res.cloudinary.com/dhelke9k1/image/upload/v1745390515/Screenshot_2022-06-20_100555_1_unxj7n.png"
            />
          </div>
        )}

        <div className="flex items-center gap-5">
          <div className="flex items-center justify-center gap-5">
            <Link className="text-xl font-bold text-white" href="#">
              Home
            </Link>
            <Link className="text-xl font-bold text-white" href="#">
              Course
            </Link>
            <Link className="text-xl font-bold text-white" href="#">
              Placement
            </Link>
            <Link className="text-xl font-bold text-white" href="#">
              Event
            </Link>
            <Link className="text-xl font-bold text-white" href="#">
              About Us
            </Link>
          </div>

          <Sheet>
            <SheetTrigger className="bg-white cursor-pointer text-blue-600 font-bold p-2 rounded-2xl">
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
