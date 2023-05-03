import logo from "./images/react.png";
const Header = () => {
  return (
    <div className="pt-3 pl-2 " style={{ borderBottom: "1px solid #777" }}>
      <img
        src={logo}
        alt="react"
        style={{ height: "35px", verticalAlign: "top" }}></img>
      <span className="m-2 h2 pt-4 text-white-50">CountOpedia</span>
    </div>
  );
};

export default Header;
