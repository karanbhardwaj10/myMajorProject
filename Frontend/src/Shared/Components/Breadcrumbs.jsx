import { useLocation, Link } from "react-router-dom";

const Breadcrumnbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  console.log(pathnames, "location ");
  let breadcrumbsPath = "";
  // through keys react is able to identify the update or uniqueness of elementt and makes it easier for react to identify where it wants to do updation and DOm manipulation if required
  // so use always provide a unique key
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        {pathnames.map((name, index) => {
          breadcrumbsPath += `/${name}`;
          console.log(breadcrumbsPath, "breadcrumbspath after pathname.map");
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <span key={breadcrumbsPath}>/{name}</span>
          ) : (
            <span key={breadcrumbsPath}>
              /<Link to={breadcrumbsPath}>{name}</Link>
            </span>
          );
        })}
      </div>
    </>
  );
};
export default Breadcrumnbs;
