import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-name">
        Horror House
      </Link>
      <ul>
        <CustomLink to="/administration">Administration</CustomLink>
        <CustomLink to="/gallery">Gallery</CustomLink>
        <CustomLink to="/tickets">Tickets</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
const resolvedPath = useResolvedPath(to)
const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}