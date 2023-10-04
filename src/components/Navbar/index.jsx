import React from "react";
import st from "./navstyles.module.css";
import { listenerCount } from "process";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={st.navbar}>
        <ul>
            <li>
                <Link href='/'>
                HOME
                </Link>
            </li>
            <li><input type="text" name="" id="" placeholder={'search your pokemon'} className="py-2 border-2 border-gray/30 px-2 rounded-xl"/></li>
        </ul>
    </nav>
  );
};

export default Navbar;
