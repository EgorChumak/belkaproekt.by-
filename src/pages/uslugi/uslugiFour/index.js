import React ,{Fragment,Component} from "react";
import {connect} from 'react-redux';
import Body from '../../../includes/body/index';
import UslugiMenu from '../../../includes/UslugiMenu/index';
import './../uslugi.scss';
import img from '../../../images/pie.jpg';
import { Link } from "react-router-dom";


class UslugiPageFour extends Component{
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
                              <h1>Разработка градостроительных паспортов</h1>
                              <div className="text">Разработка градостроительного паспорта земельного участка для строительства и обслуживания жилого дома, с проведением необходимых согласований со всеми ведомствами и заинтересованными организациями для продажи участка с аукциона.</div>
                              <div className="img"><img src={img} /></div>
                           </div>
                </Body>
            </Fragment>
        )
    }
}



export default (UslugiPageFour)
