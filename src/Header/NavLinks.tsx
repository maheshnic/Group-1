import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Home", url: " " },
    { name: "About Us", url: "aboutus" },
    { name: "Contact Us", url: "contactus" },
    { name: "FAQs", url: "faqs" },
    { name: "Login", url: "login" },
    { name: "Register", url: "register" },
    { name: "Terms", url: "terms" },
  ];

  const location = useLocation();

  return (
    <div className="flex gap-7 text-base h-full items-center">
      {links.map((link, index) => {
        const path = `/${link.url}`;
        const isActive = location.pathname === path;

        return (
          <div
            key={index}
            className={`border-t-[3px] h-full flex items-center ${
              isActive ? "border-white text-white" : "border-transparent text-gray-300"
            }`}
          >
            <Link to={path} className="px-2">
              {link.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavLinks;
