import { NavLink, useMatch } from "react-router-dom";

function NavItem({ to, label }: any) {
  const match = useMatch(to);

  return (
    <div>
      <NavLink
        to={to}
        className={match ? "text-black-400 font-semibold" : "text-gray-700"}
      >
        {label}
      </NavLink>
    </div>
  );
}

export default NavItem;
