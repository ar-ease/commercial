import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { ModeToggle } from "./theme-button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full  border-b shadow-sm bg-slate-800">
      <div className="container flex items-center justify-between h-20 px-4 mx-auto">
        {/* Left side - Logo and Title */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAkFBMVEUAAAD////7/PuhoaHz9PMUFRP5+fnOz80MDAxQUk+lp6RoameNjoz29vbu7+5/gX7c3dtKTErh4+BAQkBYWVevsK9gYV/U1dSIiIdwcW/Mysq9v70AAAd0d3gmKCY7PDuXlpMaHBoyNDEECAAuLSwhISE0MSsiIBhsaWIZFxFKRUUYERJ6eHNXUVE3NDUnIybKcu7CAAAEYklEQVR4nO2c6XKjOhCFAWOwMRabWTVJlMSeJdt9/7e7ZBJPbOGlAo0PuPr7TRV9SupWq9WSYTAMwzAMwzAMwzAMwzAMwzAMwzAMA+N2tbhD20BDEngyjH20GRRknivMGg9tSHfmMrZM8yrETCfC3DJ2MVFomtciJtiRYloKbU4n1K4W0y7Q9nTg3tvTYsYLtEXtmWpaTPcBbVJ7/KUmJkVb1J6F0LSIAG1Sa+4qTYuZj3eW+ZamxRnvKjMP9YERox2YmdK1jHj5j2Jdi402qT1FY2DGu2CuXV2LRJvUnkQPZeEj2qT2lJqWOEJb1AEtKwsztEEdmO27TDhe56+Z7QXmao62pxMz+0uKo9Zoc7qxI8ZNZmhrOvJvmuUjimKbh9LLhb20beF65XqzHYRZbjpLkfu32w+nm7mfxsK2TFvE6UuyARl8lGkSuPtrY66ihw89q2CR/PvwPilTbaOWB9E9yu5DrJS+k/zrIn62n+k/Jgvv0Ie2l01BljeIVCMt3lop/TL5tHOalMrVM5svOQMJ2S+NRHIXUaXKLwpfpZV96rvcH8BcWx+cOPs4S9s5/1GanP9bv0Ty2Mz5Pi44a1vlZFJMdN7WrFR0QwDHJiHWUquBZQkPpHPsUw0oCkwlvRZYfcDvQYoAxefo/NLxbcISIsUw6B3GkSj3b5Zcu2JJVNPGz2O5ZXskrJiuyD0mhJUHfpF7jPUTpcUIzqfK3+Q3TItBvl66OC0J+Sz7hRNDPsuQJ2kTYi0WcJP5JyUWI2/P/7QvImqXQXY4LIiXf7ECign0RpiOuMhOWuqdjIcsN1OLUciTDur0H+n/M+Jlxnq5IjHOzTWJuaaRsa7JZ0zkHQdyMRPkuRm1mBSYZ5KvMyHyUJ06A7CRiWazta8jPjCfKal3zTmwpSYjP2QCzrOnRgN5V4Bdm8/UNQDTfMWpoV5ooEXAxgWS7uCSTeqKRo14Qol5I48AdXhGiaEvnJvAiKbonQZ3c+uV3mlq5BtGzckes9bkmN6ZSQ9dADVCIc4DXsnPAT+pCsBc66EJ6AOrUhev1iq6DkCd+NJajOd+nOadycXF9LJu/sW5vBbjrS8xgIHpLwQgtBiv/WgBnaL3MjTWfxgx+jU/EiAeU7PpYVcjQLlmL0ODKweuydeaCjYwB16T6IiN6p59h/qkxnsGiiHuosmBpcB3ipPXlb4H/pEgwhiAfybgjuxEYAivtxREVSd7EM/qEB0JDOPBkz8kEa0ayLXTJ4KlMx7MS5SLzlqcAb1FEZw39yQWsq+pQcfOgEEEsi+6qHEGpqWeaYfzGsfOpQrK8qWYVGJ5sHAoBjXHPiibqcAyluVuj0+k3Gbgg12aO0kk9y0VrmomKKXcP9kREn7X/AjBjpxYFofr31maL7+kDHCKbflx40k3DMNKTrLjm/nIT6s8DF3p3fy4oHEtWEerbJWceXXh8W6eZdHIH9RhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhmOHwP34XRAkShhNwAAAAAElFTkSuQmCC"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
          <h1 className="text-white hidden sm:block  text-xl font-semibold text-gray-900">
            Perfect Paper and Boards
          </h1>
        </div>

        {/* Right side - Navigation and WhatsApp */}
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/about"
              className=" text-gray-200 hover:text-gray-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-200 hover:text-gray-500 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-200 hover:text-gray-500 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* WhatsApp Number */}
          <a
            href="https://wa.me/1234566890"
            className="flex items-center space-x-2 text-green-400 hover:text-green-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span className="hidden md:inline">+91 6291222232</span>
          </a>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
