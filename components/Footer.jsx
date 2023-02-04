import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer({ data }) {
  console.log("FOOTER FETCH : ", data);
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              MIM 2 <span className="text-blue-600">Sidomlangean</span>
            </p>
            <div className="flex gap-6 pb-5">
              <a href={data.instagram} target="_blank" rel="noreferrer">
                <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              </a>
              <a href={data.youtube} target="_blank" rel="noreferrer">
                <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
              </a>
              <a href={data.youtube} target="_blank" rel="noreferrer">
                <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
              </a>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">
              Pranala Luar
            </p>
            <a
              href="https://emis.kemenag.go.id/"
              rel="noreferrer"
              target="_blank"
            >
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Emis 4.0
              </li>
            </a>
            <a
              href="https://simpatika.kemenag.go.id/madrasah"
              rel="noreferrer"
              target="_blank"
            >
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                SIMPATIKA
              </li>
            </a>
            <a
              href="https://pdum.kemenag.go.id/"
              rel="noreferrer"
              target="_blank"
            >
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                PDUM
              </li>
            </a>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">
              Media Sosial
            </p>
            <a href={data.facebook} target="_blank" rel="noreferrer">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Facebook
              </li>
            </a>

            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Instagram
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Kanal Youtube
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Alamat</p>
            <li className="text-gray-500 text-md pb-2 font-semibold">
              {data.alamat}
            </li>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.632879080895!2d112.23239731410138!3d-7.168368172327805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e778b2b97ba219d%3A0xa4a70d7722e8cfb2!2sMI%20Muhammadiyah%2002%20Sidomlangean!5e0!3m2!1sen!2sid!4v1675099177557!5m2!1sen!2sid"
              width="400"
              height="300"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          © 2023 All rights reserved | Built with ❤ by{" "}
          <a
            href="https://github.com/baguscodes/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="hover:text-blue-600 font-semibold cursor-pointer">
              baguscodes{" "}
            </span>
          </a>
        </h1>
      </div>
    </>
  );
}
