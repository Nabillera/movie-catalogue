import Logo from "../assets/logo.svg";
import All from "../assets/all-icon.svg";
import Movies from "../assets/movies-icon.svg";
import Series from "../assets/series-icon.svg";
import Bookmark from "../assets/bookmark.svg";
import Profile from "../assets/profile.jpg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div id="navbar">
      <img src={Logo} />
      <div id="navbar-category-container">
        <img className="navbar-category" src={All} />
        <img className="navbar-category" src={Movies} />
        <img className="navbar-category" src={Series} />
        <img className="navbar-category" src={Bookmark} />
      </div>
      <img id="profile-picture" src={Profile} />
    </div>
  );
}
