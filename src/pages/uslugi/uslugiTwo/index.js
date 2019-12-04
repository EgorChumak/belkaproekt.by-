import React ,{Fragment,Component} from "react";
import {connect} from 'react-redux';
import Body from '../../../includes/body/index';
import UslugiMenu from '../../../includes/UslugiMenu/index';
import './../uslugi.scss';
import img from '../../../images/home.jpg';
import { Link } from "react-router-dom";


class UslugiPageTwo extends Component{
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
                              <h1>Разработка проектной документации на перепланировку квартир (раздел архитектурные решения)</h1>
                              
                              <div className="img"><img src={img} /></div>
                           </div>
                </Body>
            </Fragment>
        )
    }
}



export default (UslugiPageTwo)
