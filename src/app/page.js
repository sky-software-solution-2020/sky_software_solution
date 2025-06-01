"use client";

import { useAppContext } from "@/components/context/AppContext";
import { ProductCard } from "@/components/homepagecard/cards";
import ImageCarousel from "@/components/homepagecard/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FocusCards } from "@/components/ui/focus-cards";
import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@mui/material";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";


const items = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dm4yt4r0k/image/upload/v1748761540/1699551909901_i9qlyo.png",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dm4yt4r0k/image/upload/v1748761540/is-programming-hard-a-guide-to-getting-started-in-2022-scaled-1-scaled_ypjeqm.jpg",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dm4yt4r0k/image/upload/v1748761540/programming-languages-1_kfrfw5.jpg",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dm4yt4r0k/image/upload/v1748761539/06fe5053-c83d-46bd-bf7e-8559e6a08773_wvdyh5.jpg",
  },
];

const placements = [
  {
    image: "https://codebetter.in/images/placements-imgs/Praveen-Kumar-Sen.jpg",
    name: "Shubham Pandey",
    jobPalce: "ThoughtWin IT Solutions Pvt. Ltd. Indore",
  },
  {
    image: "https://codebetter.in/images/placements-imgs/Praveen-Kumar-Sen.jpg",
    name: "Shubham Pandey",
    jobPalce: "ThoughtWin IT Solutions Pvt. Ltd. Indore",
  },
  {
    image: "https://codebetter.in/images/placements-imgs/Praveen-Kumar-Sen.jpg",
    name: "Shubham Pandey",
    jobPalce: "ThoughtWin IT Solutions Pvt. Ltd. Indore",
  },
  {
    image: "https://codebetter.in/images/placements-imgs/Praveen-Kumar-Sen.jpg",
    name: "Shubham Pandey",
    jobPalce: "ThoughtWin IT Solutions Pvt. Ltd. Indore",
  },
  {
    image: "https://codebetter.in/images/placements-imgs/Praveen-Kumar-Sen.jpg",
    name: "Shubham Pandey",
    jobPalce: "ThoughtWin IT Solutions Pvt. Ltd. Indore",
  },
  {
    image: "https://codebetter.in/images/placements-imgs/Praveen-Kumar-Sen.jpg",
    name: "Shubham Pandey",
    jobPalce: "ThoughtWin IT Solutions Pvt. Ltd. Indore",
  },
];

export default function Home() {
  const { setIsScroll, courses,testimonials } = useAppContext();
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const socialRef = useRef(null);
  const router = useRouter()

  const getRandomItem = (array, count) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr.slice(0, count);
  };

  const randomCourse = getRandomItem(courses, 10)
  const randomTestimonial = getRandomItem(testimonials, 6)

  useEffect(() => {
    function handleClickOutside(event) {
      if (socialRef.current && !socialRef.current.contains(event.target)) {
        setIsSocialOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsScroll]);

  return (
    <div className="scrollBar w-screen overflow-x-hidden">
      <div className=" pt-13 xl:pt-20 w-screen">
        <div className="relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>


          <ImageCarousel images={items} />
        </div>

        <div>
          <div className="w-screen flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white uppercase">
              Our Courses
            </h1>
          </div>
          <div>
            <div className="w-screen flex justify-center px-[15vw] md:px-[8vw] mt-10">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent>
                  {randomCourse.map((course, index) => (
                    <CarouselItem
                      key={index}
                      className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                    >
                      <ProductCard course={course} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>

        <div className="w-screen p-5 mt-10">
          <div className="w-full flex items-center justify-center">
            <h1 className="lg:text-5xl sm:text-3xl text-xl font-bold text-blue-600 mb-10 underline">
              Message from Students
            </h1>
          </div>
          <FocusCards cards={randomTestimonial} />
          <div className="w-full flex items-center justify-center p-5">
            <Button onClick={() => router.push("/testimonials")} className="bg-blue-600! text-white! font-bold! text-xl! capitalize!">
              View More
            </Button>
          </div>
        </div>

        {/* <div className="w-screen py-5 rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <h1 className="text-4xl pb-3 px-3 pt-2 font-bold text-red-600 bg-yellow-200 rounded-4xl">
            Our Placements
          </h1>

          <InfiniteMovingCards
            items={placements}
            speed="normal"
          />
        </div> */}
      </div>

      <div
        ref={socialRef}
        onClick={() => setIsSocialOpen(true)}
        className={`flex flex-col items-center justify-center gap-2 fixed top-[30%] transition-all duration-300 ease-in-out py-3 ${
          isSocialOpen ? "px-1" : "px-3"
        } hover:px-1 rounded-l-2xl z-50 bg-white ${
          isSocialOpen ? "right-0" : "-right-14"
        }  hover:right-0`}
      >
        <Link href="https://wa.me/919575113506" target="_black">
          <img
            width={45}
            src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
            alt="whatsappicon"
          />
        </Link>
        <Link
          href="https://www.facebook.com/SkySoftwareSolution1"
          target="_black"
        >
          <img
            width={45}
            src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
            alt="facebookicon"
          />
        </Link>
        <Link
          href="https://www.instagram.com/skysoftwaresolution"
          target="_blank"
        >
          <img
            width={40}
            src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
            alt="instagramicon"
          />
        </Link>
        <Link href="mailto:skysoftware2020@gmail.com">
          <img
            width={35}
            src="https://img.icons8.com/?size=100&id=8126&format=png&color=000000"
            alt="gmailicon"
          />
        </Link>
      </div>
    </div>
  );
}
