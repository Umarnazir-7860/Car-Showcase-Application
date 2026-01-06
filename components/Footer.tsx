import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@constants";
import { link } from "fs";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 p-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            width={118}
            height={18}
            alt="logo"
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2023 <br /> all right reserved &copy;{" "}
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>

              {/* Inner loop for sub-links */}
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url} // Note: link.links ki jagah item.url hona chahiye
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
              {/* Yahan se semicolon (;) hata diya gaya hai */}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
