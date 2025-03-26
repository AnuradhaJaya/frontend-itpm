import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <aside className="z-20 hidden w-64 overflow-y-auto bg-white md:block flex-shrink-0">
      <div className="py-8 text-gray-500 ">
        <Link to="/" className="ml-6 text-4xl font-bold text-c-green-300">
          EcoBin
        </Link>
        <ul className="mt-28">
          <li className="relative px-6 py-3">
            {/* <span className="absolute inset-y-0 left-0 w-1 bg-c-green-600 rounded-tr-lg rounded-br-lg" aria-hidden="true"></span> */}
            <Link to="/admin/dashboard" className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800">
              {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg> */}
              <span className="ml-4">Dashboard</span>
            </Link>
          </li>
        </ul>
        <ul>
          {[
            { name: "User", href: "all-user" },
            { name: "Message", href: "collector-message" },
            {/* { name: "Charts", href: "/charts" },
            { name: "Buttons", href: "/buttons" },
            { name: "Modals", href: "/modals" },
            { name: "Tables", href: "/tables" } */}
          ].map((item, index) => (
            <li key={index} className="relative px-6 py-3">
              <Link to={item.href} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
                <span className="ml-4">{item.name}</span>
              </Link>
            </li>
          ))}
          {/* <li className="relative px-6 py-3">
            <button className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800" onClick={() => setIsPagesMenuOpen(!isPagesMenuOpen)}>
              <span className="inline-flex items-center">
                <span className="ml-4">Pages</span>
              </span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {isPagesMenuOpen && (
              <ul className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50">
                {[
                  { name: "Login", href: "/pages/login" },
                  { name: "Create Account", href: "/pages/create-account" },
                  { name: "Forgot Password", href: "/pages/forgot-password" },
                  { name: "404", href: "/pages/404" },
                  { name: "Blank", href: "/pages/blank" }
                ].map((page, index) => (
                  <li key={index} className="px-2 py-1 transition-colors duration-150 hover:text-gray-800">
                    <Link to={page.href} className="w-full">{page.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li> */}
        </ul>
        <div className="px-6 my-6">
          <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-c-green-600 border border-transparent rounded-lg active:bg-c-green-600 hover:bg-c-green-700 focus:outline-none focus:shadow-outline-purple">
            Create account
            <span className="ml-2" aria-hidden="true">+</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
