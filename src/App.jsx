import Navbar from "./component/Navbar/Navbar";
import React from "react";
import FacebookIcon from "./assets/icon-facebook.svg?react";
import PinterestIcon from "./assets/icon-pinterest.svg?react";
import InstagramIcon from "./assets/icon-instagram.svg?react";
import TwitterIcon from "./assets/icon-twitter.svg?react";

function App() {
  return (
    <>
      <main className="h-full w-full">
        <div className="relative text-white ">
          <Navbar />
          <div className="w-full h-full absolute  flex flex-col justify-center items-center font-fraunces">
            <h1 className="text-wrap text-center text-[40px] md:text-[56px] tracking-[8.75px] font-bold animate-movedown">
              WE ARE CREATIVES
            </h1>
            <div className=" mt-18 sm:mt-10 animate-movedown hover:animate-bounce">
              <svg
                width="36"
                height="114"
                viewBox="0 0 36 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group">
                  <path
                    id="Path 7"
                    d="M18 3V103"
                    stroke="white"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Path 8"
                    d="M3 95.4843L18 110.484L33 95.4843"
                    stroke="white"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>
          <picture>
            <source
              media="(min-width:640px)"
              srcSet="/images/desktop/image-header.jpg"
            />
            <img
              className="w-full sm:h-screen sm:object-cover"
              src="/images/mobile/image-header.jpg"
              alt="orange_background"
            />
          </picture>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-[repeat(2,minmax(0,50%))] font-fraunces">
          <picture className="md:order-2">
            <source
              media="(min-width:768px)"
              srcSet="/images/desktop/image-transform.jpg"
            />
            <img
              className="w-full h-full"
              src="/images/mobile/image-transform.jpg"
              alt="orange_background"
            />
          </picture>
          <div className="md:order-1 w-full flex justify-center md:justify-start">
            <div className="flex flex-col text-center md:text-start justify-center items-center md:items-start px-6 py-16 gap-10 max-w-[500px]">
              <h1 className="text-[40px] text-[#24303E] font-bold tracking-[-0.29px] animate-movedown">
                Transform your brand
              </h1>
              <p className="font-barlow font-semibold text-[#808397] leading-7 tracking-[-0.13px] animate-movedown">
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>
              <a
                className="relative w-fit font-bold text-[#24303E] leading-6 tracking-[1px]  before:absolute before:-left-1 before:bottom-0 before:-z-1 before:content-[' '] before:w-[110px] before:h-[10px] before:rounded-3xl before:bg-yellow-100 hover:before:bg-yellow-300 animate-movedown"
                href="#"
              >
                Learn more
              </a>
            </div>
          </div>

          <picture className="md:order-3">
            <source
              media="(min-width:768px)"
              srcSet="/images/desktop/image-stand-out.jpg"
            />
            <img
              className="w-full h-full"
              src="/images/mobile/image-stand-out.jpg"
              alt="orange_background"
            />
          </picture>
          <div className="md:order-4 w-full flex justify-center md:justify-start">
            <div className="flex flex-col text-center md:text-start justify-center items-center md:items-start px-6 py-16 gap-10 max-w-[500px] animate-movedown">
              <h1 className="text-[40px] text-[#24303E] font-bold tracking-[-0.29px]">
                Stand out to the right audience
              </h1>
              <p className="font-barlow font-semibold text-[#808397] leading-7 tracking-[-0.13px]">
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we’ll build and
                extend your brand in digital places.
              </p>
              <a
                className="relative w-fit font-bold text-[#24303E] leading-6 tracking-[1px]  before:absolute before:-left-1 before:bottom-0 before:-z-1 before:content-[' '] before:w-[110px] before:h-[10px] before:rounded-3xl before:bg-red-300 hover:before:bg-red-500"
                href="#"
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="md:order-5 relative">
            <div className="absolute bottom-8 w-full flex justify-center items-center text-center">
              <div className="max-w-85 animate-movedown">
                <h1 className="font-fraunces text-3xl font-bold text-[#24554A] mb-5">
                  Graphic Design
                </h1>
                <p className="font-barlow font-semibold leading-7 tracking-[-0.11px] text-[#3E7467]">
                  Great design makes you memorable. We deliver artwork that
                  underscores your brand message and captures potential clients’
                  attention.
                </p>
              </div>
            </div>
            <picture>
              <source
                media="(min-width:768px)"
                srcSet="/images/desktop/image-graphic-design.jpg"
              />
              <img
                className="w-full max-h-150 object-cover object-center"
                src="/images/mobile/image-graphic-design.jpg"
                alt="orange_background"
              />
            </picture>
          </div>
          <div className="md:order-6 relative">
            <div className="absolute bottom-8 w-full flex justify-center items-center text-center">
              <div className="max-w-85 animate-movedown">
                <h1 className="font-fraunces text-3xl font-bold text-[#052C3B] mb-5">
                  Photography
                </h1>
                <p className="font-barlow font-semibold leading-7 tracking-[-0.11px] text-[#19536C]">
                  Increase your credibility by getting the most stunning,
                  high-quality photos that improve your business image.
                </p>
              </div>
            </div>
            <picture>
              <source
                media="(min-width:768px)"
                srcSet="/images/desktop/image-photography.jpg"
              />
              <img
                className="w-full max-h-150 object-cover object-center"
                src="/images/mobile/image-photography.jpg"
                alt="orange_background"
              />
            </picture>
          </div>
        </section>
        <section className="px-6 py-16 md:py-40 text-center flex flex-col justify-center items-center">
          <h1 className="mb-16 font-fraunces font-bold tracking-[5px] uppercase text-[#A7AAAD]">
            Client testimonials
          </h1>
          <div className="grid md:grid-cols-[repeat(3,minmax(0,340px))] gap-16 md:gap-8">
            <div className="flex flex-col items-center gap-8 font-barlow">
              <img
                className="w-18 h-18 rounded-[50%]"
                src="/images/image-emily.jpg"
                alt=""
              />
              <p className="font-semibold leading-6 md:leading-8 tracking-[-0.13px] text-[#5B636D]">
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
              <div>
                <p className="font-fraunces font-bold">Emily R.</p>
                <p className="font-semibold text-[14px] leading-7 tracking-[-0.1px] text-[#A7AAAD]">
                  Marketing Director
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-8 font-barlow">
              <img
                className="w-18 h-18 rounded-[50%]"
                src="/images/image-jennie.jpg"
                alt=""
              />
              <p className="font-semibold leading-6 md:leading-8 tracking-[-0.13px] text-[#5B636D]">
                Sunnyside’s enthusiasm coupled with their keen interest in our
                brand’s success made it a satisfying and enjoyable experience.
              </p>
              <div>
                <p className="font-fraunces font-bold">Thomas S.</p>
                <p className="font-semibold text-[14px] leading-7 tracking-[-0.1px] text-[#A7AAAD]">
                  Chief Operating Officer
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-8 font-barlow">
              <img
                className="w-18 h-18 rounded-[50%]"
                src="/images/image-thomas.jpg"
                alt=""
              />
              <p className="font-semibold leading-6 md:leading-8 tracking-[-0.13px] text-[#5B636D]">
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </p>
              <div>
                <p className="font-fraunces font-bold">Jennie F.</p>
                <p className="font-semibold text-[14px] leading-7 tracking-[-0.1px] text-[#A7AAAD]">
                  Business Owner
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-rows-2 grid-cols-2 md:grid-cols-4 md:grid-rows-none">
          <div>
            <picture>
              <source
                media="(min-width:768px)"
                srcSet="/images/desktop/image-gallery-milkbottles.jpg"
              />
              <img
                src="/images/mobile/image-gallery-milkbottles.jpg"
                alt="orange_background"
              />
            </picture>
          </div>
          <div>
            <picture>
              <source
                media="(min-width:768px)"
                srcSet="/images/desktop/image-gallery-orange.jpg"
              />
              <img
                src="/images/mobile/image-gallery-orange.jpg"
                alt="orange_background"
              />
            </picture>
          </div>
          <div>
            <picture>
              <source
                media="(min-width:768px)"
                srcSet="/images/desktop/image-gallery-cone.jpg"
              />
              <img
                src="/images/mobile/image-gallery-cone.jpg"
                alt="orange_background"
              />
            </picture>
          </div>
          <div>
            <picture>
              <source
                media="(min-width:768px)"
                srcSet="/images/desktop/image-gallery-sugarcubes.jpg"
              />
              <img
                src="/images/mobile/image-gallery-sugar-cubes.jpg"
                alt="orange_background"
              />
            </picture>
          </div>
        </section>
      </main>

      <footer className="w-full flex justify-center items-center flex-col bg-[#90D4C6] font-barlow">
        <div className="flex flex-col justify-center items-center gap-10 max-w-75 mx-10 my-16 md:my-18">
          <h1 className="text-[#2C7566] text-4xl font-bold">sunnyside</h1>
          <div className="flex gap-10 [&>a]:hover:text-white font-semibold text-[#458D7E]">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
          </div>
          <div className="flex gap-7 [&>svg]:hover:text-white text-[#2C7566] [&>svg]:hover:cursor-pointer">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <PinterestIcon />
          </div>
        </div>
        <div className="text-[#2C7566] text-center font-bold mb-2">
          Challenge by{" "}
          <a
            className="focus:outline-none underline decoration-red-400 focus:decoration-yellow-500 decoration-2"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            className="focus:outline-none underline decoration-red-400 focus:decoration-yellow-500 decoration-2"
            href="https://www.frontendmentor.io/profile/TusharKaundal"
            target="_blank"
          >
            @TusharKaundal
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default App;
