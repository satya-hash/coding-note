import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="max-w-screen-xl bg-bg-primary mx-auto px-4 py-6 fixed w-full bottom-0 left-1/2 translate-x-[-50%]">
        {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
        <div className="flex flex-wrap justify-between md:flex-row flex-col items-center">
          <span className="text-base  sm:text-center ">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline text-link-primary">
              Coding Note
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex gap-2 mt-4 sm:justify-center sm:mt-0 text-link-primary">
            <a
              href="https://github.com/satya-hash/"
              target="_blank"
              className=""
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://www.linkedin.com/in/satya-surendra/"
              target="_blank"
              className=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0,0,256,256"
                className="w-6 h-6"
                fill="currentColor"
              >
                <g
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M8,3.00977c-3.47,0 -5.99023,2.07945 -5.99023,4.93945c0,2.87 2.58023,5.04102 5.99023,5.04102c3.47,0 5.99023,-2.11961 5.99023,-5.09961c-0.16,-2.87 -2.63023,-4.88086 -5.99023,-4.88086zM3,15c-0.55,0 -1,0.45 -1,1v29c0,0.55 0.45,1 1,1h10c0.55,0 1,-0.45 1,-1v-29c0,-0.55 -0.45,-1 -1,-1zM18,15c-0.55,0 -1,0.45 -1,1v29c0,0.55 0.45,1 1,1h9c0.552,0 1,-0.448 1,-1v-15v-0.25v-0.25c0,-2.37 1.82062,-4.30047 4.14063,-4.48047c0.12,-0.02 0.23938,-0.01953 0.35938,-0.01953c0.12,0 0.23938,-0.00047 0.35938,0.01953c2.32,0.18 4.14063,2.11047 4.14063,4.48047v15.5c0,0.552 0.448,1 1,1h9c0.55,0 1,-0.45 1,-1v-17c0,-6.47 -3.47094,-13 -11.21094,-13c-3.52,0 -6.17906,1.36023 -7.78906,2.49023v-1.49023c0,-0.55 -0.45,-1 -1,-1z"></path>
                  </g>
                </g>
              </svg>
              <span className="sr-only">Linkedin</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
