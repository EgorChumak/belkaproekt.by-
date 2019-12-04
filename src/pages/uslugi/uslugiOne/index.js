import React ,{Fragment,Component} from "react";
import {connect} from 'react-redux';
import Body from '../../../includes/body/index';
import UslugiMenu from '../../../includes/UslugiMenu/index';
import './../uslugi.scss';
import img from '../../../images/house.png';
import { Link } from "react-router-dom";


class UslugiPageOne extends Component{
    constructor(props){
        super(props);
    }


    render(){
        console.log(this.props.items);
        return(
            <Fragment>
                <Body>

                      <UslugiMenu />



                          <div className="Ucontent">
                              <h1>Проектирование инженерных сетей и систем</h1>
                              <div>Отопление и вентиляция;</div>
                              <div>Водоснабжение и канализация;</div>
                              <div>Газоснабжение;</div>
                              <div>Электрическое освещение;</div>
                              <div>Электротехническое оборудование;</div>
                              <div>Автоматизация;</div>
                              <div><img src={img} /></div>
                           </div>
                </Body>
            </Fragment>
        )
    }
}



export default (UslugiPageOne)
