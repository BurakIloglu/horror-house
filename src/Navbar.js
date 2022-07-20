export default function Navbar() {
  const paths = [
    {
      name: "Administration",
      route: "/administration",
    },
    {
      name: "Gallery",
      route: "/gallery",
    },
    {
      name: "Tickets",
      route: "/tickets",
    },
  ];
  const currentPath = window.location.pathname;
  return (
    <nav className="nav">
      <a href="/" className="site-name">
        Horror House
      </a>
      <ul>
        {paths.map((path) => {
          const isActive = currentPath === path.route;
          return (
            <li key={path.route} className={isActive ? "active" : ""}>
              <a href={`${path.route}`}>{path.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
