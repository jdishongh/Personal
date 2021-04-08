1.
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

The float: left and the display: block make the links display in a horizontal fashion.
2.
<a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
3.
@media screen and (max-width: 600px) {
  .topnav a:not(:first-child), .dropdown .dropbtn {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}
When the width of the pixels is 600 pixels, all of the anchor tags except for the home anchor are removed from the nav bar. At the same time, the icon of the hamburger menu appears and the links become visible inside the menu
