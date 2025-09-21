import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconPhoneCall,
} from "@tabler/icons-react";
function Contact() {
  return (
    <div className="flex flex-col text-white h-screen">
      <div className="w-full h-[70vh] text-center place-content-center">
        <h2 className="text-2xl md:text-4xl font-bold text-center md:mb-12 mb-8 text-white">
          Contact
        </h2>
      </div>
      <div className="flex flex-col w-full h-[30vh] justify-center items-center border border-white/10 bg-white/10 backdrop-blur-md">
        <div className="flex flex-col gap-2">
          <span className="flex flex-row">
            <IconBrandInstagram />
            <a href="https://www.instagram.com/1210t._riq" target="blank">
              My Instagram
            </a>
          </span>
          <span className="flex flex-row">
            <IconBrandLinkedin />
            <a
              href="https://www.linkedin.com/in/tariq-roja-abdullah-78009422a"
              target="blank"
            >
              My LinkedIn
            </a>
          </span>
          <span className="flex flex-row">
            <IconPhoneCall />
            <a href="#" target="blank">
              085714613967
            </a>
          </span>
        </div>
        <div className="mt-8">
          &copy; 2025 Tariq Roja Abdullah. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Contact;
