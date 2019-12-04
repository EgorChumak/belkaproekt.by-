import React ,{Fragment,Component} from "react";
import {connect} from 'react-redux';
import Body from '../../../includes/body/index';
import UslugiMenu from '../../../includes/UslugiMenu/index';
import './../uslugi.scss';
import img from '../../../images/pie.jpg';
import { Link } from "react-router-dom";


class UslugiPageSeven extends Component{
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
                              <h1>Фонд инженерно-геологических изысканий</h1>
                              <div className="text"><p>Адрес: ул. Чичерина,21 каб.511</p>
                              <p>Телефон: +345172631788</p>
                              </div>
                              
                           </div>
                </Body>
            </Fragment>
        )
    }
}



export default (UslugiPageSeven)
