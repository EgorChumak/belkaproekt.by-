import React ,{Fragment,Component} from "react";
import {connect} from 'react-redux';
import Body from '../../includes/body/index';
import AboutMenu from '../../includes/AboutMenu/index';
import Objectimage from "../../components/imagesbox/objectimages";


import './index.scss';
import { Link } from "react-router-dom";

class ObjectPage extends Component{
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
                              <h1>Обьекты</h1>
                            <Objectimage />
                          </div>

                </Body>
                
            </Fragment>
        )
    }
}



export default (ObjectPage)
