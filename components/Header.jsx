import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { urlFor } from "../sanity";
function Navbar({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log("Passed to header", data);
  return (
    <header>
      <div>
        <nav className="bg-white shadow-md flex-col w-full z-10 sm:px-10">
          <div className="w-full">
            <div className="flex items-center h-20 w-full">
              <div className=" flex items items-center mx-20 justify-between w-full">
                <div className=" flex justify-center items-center flex-shrink-0">
                  <Link href="/">
                    <img
                      className="h-12 w-12 rounded-full cursor-pointer"
                      src={urlFor(data.logo).url()}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4 ">
                    <Link href="/" smooth={true} offset={50} duration={500}>
                      <h1 className="cursor-pointer text-sky-600 font-semibold px-3 py-2 text-md hover:font-black">
                        Home
                      </h1>
                    </Link>
                    <Link href="/Profil">
                      <h1 className="cursor-pointer hover:bg-sky-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Profil
                      </h1>
                    </Link>
                    <Link href="/#berita" duration={500}>
                      <h1 className="cursor-pointer hover:bg-sky-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Berita
                      </h1>
                    </Link>

                    <Link href="/Prestasi" duration={500}>
                      <h1 className="cursor-pointer hover:bg-sky-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Prestasi
                      </h1>
                    </Link>
                    <Link href="/Hubungi">
                      <h1 className="cursor-pointer hover:bg-sky-600 text-black hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
                        Kontak
                      </h1>
                    </Link>
                    <Link href="/Kunjungi">
                      <h1 className="cursor-pointer hover:bg-sky-600 text-black hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
                        Kunjungi
                      </h1>
                    </Link>
                    <Link href="https://mim2sidomlangean.sanity.studio/">
                      <a
                        target="_blank"
                        className="cursor-pointer bg-sky-600 text-white px-3 py-2 hover:bg-black rounded-md text-sm font-medium"
                      >
                        Admin
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mr-10 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-sky-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-sky-600 focus:outline-none focus:ring-offset-sky-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http:www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http:www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden id=mobile-menu">
                <div
                  ref={ref}
                  className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
                >
                  <Link href="/">
                    <h1 className="cursor-pointer hover:bg-sky-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Home
                    </h1>
                  </Link>

                  <Link href="/Profil">
                    <h1 className="cursor-pointer hover:bg-sky-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Profil
                    </h1>
                  </Link>

                  <Link href="/#berita">
                    <h1 className="cursor-pointer hover:bg-sky-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Berita
                    </h1>
                  </Link>
                  <Link href="/Hubungi">
                    <h1 className="cursor-pointer hover:bg-sky-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Kontak
                    </h1>
                  </Link>
                  <Link href="/Kunjungi">
                    <h1 className="cursor-pointer hover:bg-sky-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Kunjungi
                    </h1>
                  </Link>
                  <Link href="https://mim2sidomlangean.sanity.studio/">
                    <a
                      target="_blank"
                      className="cursor-pointer hover:bg-sky-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Admin
                    </a>
                  </Link>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
