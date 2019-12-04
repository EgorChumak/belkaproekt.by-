import React ,{Fragment,Component} from "react";
import {connect} from 'react-redux';
import Body from '../../../includes/body/index';
import AboutMenu from '../../../includes/AboutMenu/index';
import './index.scss';
import { Link } from "react-router-dom";
import LicenziiImage from "../../../components/imagesbox/licenziiimages";


class LicenziiPage extends Component{
    constructor(props){
        super(props);
    }


    render(){
        console.log(this.props.items);
        return(
            <Fragment>
                <Body>

                      <AboutMenu />



                          <div className="content">
                              <h1>Лицензии и сертификаты</h1>
                            <LicenziiImage />
                          </div>
                </Body>
            </Fragment>
        )
    }
}



export default (LicenziiPage)
