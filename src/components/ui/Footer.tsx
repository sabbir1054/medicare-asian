import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const footerData = {
  sections: [
    {
      title: "Medicine",
      img: "/footer-logo.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      licenses: {
        tradeLicense: "TRAD/DNCC/057777/2024",
        othersLicense: "Others License: 180000",
        img: "/stamp.png",
      },
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Terms and Conditions",
        "Refund and Return Policy",
        "Privacy Policy",
      ],
    },
    {
      title: "Useful Links",
      links: ["Account", "Best Selling Products", "Contact Us", "Blogs"],
    },

    {
      title: "Contact Info",
      info: {
        address: "Sirajganj Sadar, Sirajganj",
        hotline: "09620000000",
        mobile: "01700000000",
        email: "medicine@gmail.com",
      },

      socialMedia: [
        {
          platform: "Facebook",
          icon: "FacebookOutlined",
          link: "https://facebook.com",
        },
        {
          platform: "Twitter",
          icon: "TwitterOutlined",
          link: "https://twitter.com",
        },
        {
          platform: "Instagram",
          icon: "InstagramOutlined",
          link: "https://instagram.com",
        },
        {
          platform: "Linkedin",
          icon: "LinkedinOutlined",
          link: "https://linkedin.com",
        },
      ],
    },
  ],
  copyright: "©2021-2024 Poonno.com. All rights reserved.",
};

const FooterSection = () => {
  return (
    <footer className="bg-teal-700 text-white py-10" style={{ zIndex: "40" }}>
      <div className="container:md mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {footerData.sections.map((section, index) => (
            <div key={index}>
              {section.img && (
                <Image src={section.img} alt="logo" width={150} height={40} />
              )}

              {section.content && (
                <p className="mt-2 text-sm">{section.content}</p>
              )}
              {section.licenses && (
                <div className="mt-4 flex">
                  <Image
                    alt="icon"
                    src={`${section.licenses.img}`}
                    width={120}
                    height={60}
                  />
                  <div className="ml-3">
                    <h3 className="font-bold text-lg">Trade License</h3>
                    <p className="py-2">{section.licenses.tradeLicense}</p>
                    <p>{section.licenses.othersLicense}</p>
                  </div>
                </div>
              )}

              {section.links && (
                <div>
                  <h3 className="font-bold">{section.title}</h3>
                  <ul className="mt-2 space-y-2">
                    {section.links.map((link, idx) => (
                      <li key={idx} className="py-1">
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {section.info && (
                <div>
                  <h3 className="font-bold">{section.title}</h3>
                  <ul className="mt-2 space-y-2">
                    <li>Address: {section.info.address}</li>
                    <li>Hot Line: {section.info.hotline}</li>
                    <li>Mobile: {section.info.mobile}</li>
                    <li>Email: {section.info.email}</li>
                  </ul>
                  <div className="flex space-x-4 mt-4">
                    {section.socialMedia.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.platform === "Facebook" && (
                          <FacebookOutlined className="text-2xl" />
                        )}
                        {social.platform === "Twitter" && (
                          <TwitterOutlined className="text-2xl" />
                        )}
                        {social.platform === "Instagram" && (
                          <InstagramOutlined className="text-2xl" />
                        )}
                        {social.platform === "Linkedin" && (
                          <LinkedinOutlined className="text-2xl" />
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className=" text-center">Pay with</h3>
          <Image src={"/paysslc.png"} alt="logo" width={400} height={150} />
        </div>
        <div className="border-t border-gray-100 mt-10 pt-4 text-center">
          <p className="text-sm">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
