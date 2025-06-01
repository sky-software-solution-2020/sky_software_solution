import Link from 'next/link';

const AboutUs = () => {
  return (
    <section className="px-6 py-12 w-screen mt-10 xl:mt-20">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="md:w-1/2">
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-blue-800">About Sky Software Solution</h1>
          <p className="text-gray-700 text-lg text-justify">
            Sky Software Solution is Neemuch’s trusted hub for IT training, software development, and digital transformation.
            We are dedicated to equipping students and professionals with in-demand skills in programming, web development,
            accounting software, and digital marketing.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://res.cloudinary.com/dm4yt4r0k/image/upload/v1748763175/WhatsApp_Image_2025-05-14_at_5.16.23_PM_n0c7jw.jpg"
            alt="Training at Sky Software"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Our Mission</h2>
          <p className="text-gray-600 text-justify">
            Our mission is to bridge the gap between academic education and real-world IT demands. We aim to provide
            affordable, practical, and career-oriented learning to students in smaller towns like Neemuch, helping them compete
            on a global stage.
          </p>
          <p className="mt-2 text-gray-600 text-justify">
            Whether you&apos;re a beginner or a tech enthusiast looking to upskill, our structured courses and live projects
            ensure that you gain both theoretical knowledge and hands-on experience.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://res.cloudinary.com/dm4yt4r0k/image/upload/v1748763278/WhatsApp_Image_2025-05-15_at_10.20.15_AM_qjengr.jpg"
            alt="Students learning"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* What We Offer */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Web & App Development', desc: 'HTML, CSS, JavaScript, React, PHP, Android (Kotlin/Java)', img: 'https://res.cloudinary.com/dm4yt4r0k/image/upload/v1748763789/Website-Mobile-App-Design-Development-009_bbccmj.jpg' },
            { title: 'Programming Courses', desc: 'Python, Java, C++, Data Structures', img: 'https://res.cloudinary.com/dm4yt4r0k/image/upload/v1748763518/top-programming-languages_e2sqlg.jpg' },
            { title: 'Basic Computer', desc: 'Ms Office, Excel, Powerpoint, Word, Notepad, Wordpad, Paint', img: 'https://res.cloudinary.com/dm4yt4r0k/image/upload/v1748764099/Top-11-Basic-Computer-Courses-To-Upskill-Yourself_zubhzm.png' },
            
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition">
              <div className='h-[250px] overflow-hidden'>
                <img
                src={item.img}
                alt={item.title}
                className="rounded-md mb-4 w-full"
              />
              </div>
              <Link href={'/courses'} className="font-semibold text-lg mb-2 text-blue-600">{item.title}</Link>
              <p className="text-gray-600 mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-blue-50 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Experienced mentors with industry background</li>
          <li>Live project training and real-time applications</li>
          <li>Flexible batch timings for students and professionals</li>
          <li>Affordable fee structure and installment plans</li>
          <li>Career guidance, resume building, and placement assistance</li>
        </ul>
      </div>

      {/* Closing Section */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-blue-700 mb-2">Join the Digital Future</h3>
        <p className="text-gray-700 mb-6">
          Be part of a growing community of learners and tech leaders. Let&apos;s build skills that create opportunities.
        </p>
        <Link href={'/courses'} className="bg-blue-600 font-bold text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Explore Courses
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
