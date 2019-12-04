import React, {Fragment, Component} from "react";
import {Nav, NavItem, Container, Row, Col} from 'reactstrap';
import {Link} from "react-router-dom";
import './style.scss';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Container  className="footer">
            <Row>
                <Col xs="6" sm="4"><p></p><p>© 2019 «Белкомплекспроект»</p></Col>
                <Col xs="6" sm="4">
                    <div>Республика Беларусь, 222029,</div>
                    <div> г.Минск, ул.Чичерина, 21</div>
                    <div> Тел.: +375 (17) 337-44-00</div>
                    <div >  e-mail: <a href="#" className="color">belkomplexproekt@tut.by</a></div>
                </Col>
                <Col sm="4">SOMETHINGELSE</Col>
            </Row>
          </Container>
        )
    }
}
