import React ,{Fragment,Component} from "react";
import {connect} from 'react-redux';
import Body from '../../../includes/body/index';
import UslugiMenu from '../../../includes/UslugiMenu/index';
import './../uslugi.scss';
import img from '../../../images/homearh.jpg';
import { Link } from "react-router-dom";


class UslugiPageThree extends Component{
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
                              <h1>Архитектурное проектирование</h1>
                              <div className="text">Архитектурно-планировочное решение (генеральный план и благоустройство) Объёмно-планировочное решение.</div>
                              <div className="img"><img src={img} /></div>
                           </div>
                </Body>
            </Fragment>
        )
    }
}



export default (UslugiPageThree)
