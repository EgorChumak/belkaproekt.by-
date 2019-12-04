import React, {Fragment, Component} from "react";
import {Nav, NavItem} from 'reactstrap';
import {Link} from "react-router-dom";
import './style.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <header className={"header"}>
                <div className={"header_logo"}><Link to="/"></Link></div>
                <Link to="/about/otdely"><button className={"button"}>Все контакты</button></Link>
            </header>
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
            
            </div>
        )
    }
}
