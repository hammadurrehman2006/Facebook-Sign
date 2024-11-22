const FbFooter = () => {
  return (
    <footer className="bg-white py-4 text-[12px] text-gray-500">
      <div className="container mx-auto px-4 mt-8">
        {/* Language Links */}
        <div className="flex flex-wrap justify-start mx-28 gap-2 mb-4">
          {["English (UK)", "اردو", "हिन्दी", "বাংলা", "ਪੰਜਾਬੀ", "فارسی", "ગુજરાતી", "Deutsch", "Español"].map((language, index) => (
            <a
              key={index}
              href="#"
              className="hover:underline"
            >
              {language}
            </a>
          ))}
          <button className="ml-2 text-blue-600 hover:underline">+</button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-start mx-28 gap-4 mb-4">
          {[
            "Sign Up",
            "Log In",
            "Messenger",
            "Facebook Lite",
            "Video",
            "Places",
            "Games",
            "Marketplace",
            "Meta Pay",
            "Meta Store",
            "Ray-Ban Meta",
            "Meta AI",
            "Instagram",
            "Threads",
            "Fundraisers",
            "Services",
            "Voting Information Centre",
            "Privacy Policy",
            "Privacy Centre",
            "Groups",
            "About",
            "Create ad",
            "Create Page",
            "Developers",
            "Careers",
            "Cookies",
            "AdChoices",
            "Terms",
            "Help",
            "Contact uploading and non-users",
          ].map((link, index) => (
            <a
              key={index}
              href="#"
              className="hover:underline"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-start mx-28 text-gray-500">
          Meta © 2024
        </div>
      </div>
    </footer>
  );
};

export default FbFooter;
