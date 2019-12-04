import React ,{Fragment,Component} from "react";
import Body from '../../includes/body/index';
import AboutMenu from '../../includes/AboutMenu/index';

import {connect} from "react-redux";


class ZakupkiPage extends Component{
    constructor(props){
        super(props);
        
    }


    render(){
        return(
            <Fragment>
                <Body>
                    <AboutMenu />
                    <h1>Закупки</h1>
               
                </Body>
            </Fragment>
        )
    }
    
}

    


    export default (ZakupkiPage)