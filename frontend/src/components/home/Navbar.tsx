import { HamburgerMenu } from "./Hamburger";
import { Logo } from "./Logo";
import { navigation } from "../../exports";
import { MenuProps } from "../../interface";
import { Link } from "react-router-dom";
import { Login } from "../login/Login";
import { Logout } from "../login/Logout";
import { auth } from "../../firebase/firebase";

export const Navbar = (props: MenuProps) => {
  return (
    <nav
      className="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <Logo />
      <HamburgerMenu
        onPress={(value) => {
          props.onPress(value);
        }}
      />
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="text-sm font-semibold leading-6 text-gray-900 motion-reduce:transition ease-out delay-100 hover:scale-125 duration-150 active:scale-95"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end group/item">
        {auth.currentUser ? <Logout /> : <Login />}
      </div>
    </nav>
  );
};
