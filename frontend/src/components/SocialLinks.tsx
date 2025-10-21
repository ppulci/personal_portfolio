import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="text-center mt-6 px-4">
      <p className="text-gray-600 mb-6 text-base sm:text-lg">Or connect with me on</p>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        <a
          href="https://www.linkedin.com/in/peter-pulcini/"
          title="@peter-pulcini"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white hover:bg-blue-50 rounded-md shadow-md hover:shadow-lg transition-all duration-200 border-2 border-gray-300 hover:border-blue-500 text-blue-500 text-sm sm:text-base"
        >
          <FaLinkedin className="text-blue-500 text-lg" />
          <span className="font-semibold">LinkedIn</span>
        </a>

        <a
          href="https://github.com/ppulci"
          title="@ppulci"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white hover:bg-gray-50 rounded-md shadow-md hover:shadow-lg transition-all duration-200 border-2 border-gray-300 hover:border-gray-500 text-gray-700 text-sm sm:text-base"
        >
          <FaGithub className="text-gray-700 text-lg" />
          <span className="font-semibold">GitHub</span>
        </a>
      </div>
    </div>
  );
}
