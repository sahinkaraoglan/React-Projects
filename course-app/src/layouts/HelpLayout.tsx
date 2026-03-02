import { Link, NavLink, Outlet } from "react-router";

export default function HelpLayout() {
  return (
    <div id="help-layout">
      <h1>Help</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dolorem eveniet, quod natus voluptates nulla ea ad officiis ipsam quos veniam, voluptate doloremque? Facilis nihil pariatur aliquam cum amet eaque?
        </p>
        <nav>
          <NavLink to="contact">Contact</NavLink>
          <NavLink to="faq">FAQ</NavLink>
        </nav>
        <Outlet/>
    </div>
  );
}