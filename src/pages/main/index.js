import React ,{Fragment,Component} from "react";
import Body from '../../includes/body/index';
import CarouselMain from "../../components/carousel/index";
import { Container, Row, Col } from "reactstrap"; 
import {Link} from "react-router-dom";
import {Nav, NavItem} from 'reactstrap';
import "./../../includes/header/style.scss";
import "./index.scss";

export default class HomePage extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      
        <Fragment>
         
          <CarouselMain className={"body_carousel"}/>
          
        
        <Body>
            <Container>
                <Row className="main">
                  <Col xs="6" sm="4" ><strong>Услуги</strong></Col>
                  <Col xs="6" sm="4"><strong>О нас</strong></Col>
                  <Col sm="4"><strong>Профсоюз</strong></Col>
                 </Row>
                 <Row className="main">
                  <Col xs="6" sm="4"><p>1. Обследование технического состояния строительных конструкций зданий и сооружений </p> <p>2. Проектирование инженерных сетей и систем</p><p>3. Разработка градостроительных паспортов</p><p>4. Фонд инженерно-геодезических изысканий</p><Link to="/uslugi" className="color">Подробнее</Link></Col>
                  <Col xs="6" sm="4">ОАО «Белкомплекспроект» - это предприятие с более чем 50-летней историей, за время которой оно неоднократно переименовывалось и реорганизовывалось. Cилами специалистов предприятия были созданы проекты реконструкции кварталов жилищной застройки, капитального ремонта жилого фонда практически всех районов города Минска, реконструкции культурно-исторических центров городов Гродно, Витебска, Минска и пр. <Link to="/about" className="color">Подробнее</Link></Col>
                  <Col sm="4">Первичная профсоюзная организация работников (ППО)ОАО «Белкомплекспроект» является организационной структурой Белорусского профессионального союза работников государственных и других учреждений. <Link to="/about" className="color">Подробнее</Link></Col>
                 </Row>
             </Container>
         </Body>
         </Fragment>

    )
  }


}
