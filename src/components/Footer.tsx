import { FaRegCopyright } from "react-icons/fa";
import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={Logo} alt="Dev Stack" className="h-9 w-auto" />

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-5 flex gap-5 text-sm font-medium text-slate-500">
              <a href="#" className="transition hover:text-pink-600">
                GitHub
              </a>
              <a href="#" className="transition hover:text-pink-600">
                Twitter
              </a>
              <a href="#" className="transition hover:text-pink-600">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-10 md:col-span-2 md:grid-cols-3 md:gap-16">
            {/* Product */}
            <div>
              <h3 className="text-sm font-bold tracking-wide text-slate-700">
                PRODUCT
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                <li className="cursor-pointer transition hover:text-pink-600">
                  Home
                </li>
                <li className="cursor-pointer transition hover:text-pink-600">
                  Technologies
                </li>
                <li className="cursor-pointer transition hover:text-pink-600">
                  Projects
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-bold tracking-wide text-slate-700">
                COMPANY
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                <li className="cursor-pointer transition hover:text-pink-600">
                  About
                </li>
                <li className="cursor-pointer transition hover:text-pink-600">
                  Contact
                </li>
                <li className="cursor-pointer transition hover:text-pink-600">
                  Careers
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-bold tracking-wide text-slate-700">
                LEGAL
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                <li className="cursor-pointer transition hover:text-pink-600">
                  Privacy Policy
                </li>
                <li className="cursor-pointer transition hover:text-pink-600">
                  Terms of Service
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-gray-100 pt-6 text-xs text-slate-400 sm:flex-row">
          <p className="flex items-center gap-1">
            <FaRegCopyright />
            2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
