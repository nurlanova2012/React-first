import React from "react";
import {Link} from "react-router-dom";
import logoImg from "../../assets/img/logo.svg"
import {Logo, Button} from "../Index/index";




function Header () {
    return (
        <div className="header">
        <div className="container">
          <Link to ="/">
          <Logo src={logoImg} alt={"kids"}/>
          </Link>
          <div className="header__cart">
            <Link to ="/cart">
            <Button className={"button--cart"}/>
            </Link>
          </div>          
        </div>
      </div>
    );
}
export default Header;