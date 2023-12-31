"use client";
import { navLinks } from "../lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="h-[5rem] w-[100%] flex items-center px-10 bg-cyan-500 shadow-[0_1px_15px_rgba(0,0,0,.5)]">
      <div className="gen">
        {navLinks.map((navLink) => {
          let isLogin = navLink.name == "Login";
          let isSignin = navLink.name == "Signin";
          if (!(isLogin || isSignin)) {
            return (
              <Link
                className="h-[2.5rem] text-[1.3rem] font-semibold mx-3 p-[5px] relative"
                key={navLink.name}
                href={navLink.src}
              >
                {navLink.name}
                {pathname == navLink.src ? (
                  <span className="active aniBord"></span>
                ) : (
                  ""
                )}
              </Link>
            );
          } else {
            return;
          }
        })}
      </div>
      <div className="auth ml-auto">
        {navLinks.map((navLink) => {
          let isLogin = navLink.name == "Login";
          let isSignin = navLink.name == "Signin";
          if (isLogin || isSignin) {
            return (
              <Link
                className="h-[2.5rem] text-[1.3rem] font-semibold mx-3 p-[5px] relative"
                key={navLink.name}
                href={navLink.src}
              >
                {navLink.name}
                {pathname == navLink.src ? (
                  <span className="active aniBord"></span>
                ) : (
                  ""
                )}
              </Link>
            );
          } else {
            return;
          }
        })}
      </div>
    </nav>
  );
}
