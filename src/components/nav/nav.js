import React ,{Fragment,Component} from "react";
import {Nav, NavItem} from 'reactstrap'
import {Link} from "react-router-dom";
import "./index.scss";



export default class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

                <Nav className={"header_nav"}>
                    <NavItem className={"active"}>
                        <Link to="/">Главная</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about">О нас</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/uslugi">Услуги</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/object">Обьекты</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/zakupki">Закупки</Link>
                    </NavItem>
                </Nav>


                )
        }
}




export default (Nav)