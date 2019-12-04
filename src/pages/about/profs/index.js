import React ,{Fragment,Component} from "react";
import {connect} from 'react-redux';
import Body from '../../../includes/body/index';
import AboutMenu from '../../../includes/AboutMenu/index';
import './index.scss';
import { Link } from "react-router-dom";


class ProfsPage extends Component{
    constructor(props){
        super(props);
    }


    render(){
        console.log(this.props.items);
        return(
            <Fragment>
                <Body>

                      <AboutMenu />


                            <div className="prof" >
                              
                          <div className="content" >
                              <h1 >Профсоюз</h1>
                              
                              </div>
                             
                            <div className="text" className="profs">
                                  <h2>Первичная профсоюзная организация работников ОАО «Белкомплекспроект»</h2>
                                  </div>
                                  <div className="text">
                                    <strong>Председатель первичной профсоюзной организации работников ОАО «Белкомплекспроект»:</strong> Гукало Марина Александровна
                                     
                                  </div>
                                  <div className="text">
                                    <strong>Заместитель председателя:</strong> Кагальняк Екатерина Аркадьевна
                                     
                                  </div>
                                  <div className="text">
                                    <strong>Казначей:</strong>  Петюшик Анастасия Михайловна
                                   
                                  </div>
                                  <div  className="text">
                                    <strong>Адрес:</strong>  220029 г.Минск, ул.Чичерина, 21, каб.513
                                   
                                  </div>
                                  <div  className="text">
                                    <strong>Тел/факс:</strong>  337-44-00, +375 29 617-07-26
                                   
                                  </div>
                                  <div  className="text">
                                    <strong>E-mail:</strong>
                                     <a href="#" className="color"> belkomplexproekt@tut.by</a>
                                  </div>
                                  <div className="text">
                                    <strong>Первичная профсоюзная организация работников (ППО) </strong>
                                  ОАО «Белкомплекспроект» является организационной структурой <a href="https://profgos.1prof.by"  target="_blank" className="color">Белорусского профессионального союза работников государственных и других учреждений.</a>
                                  </div>
                                  <div className="text">
                                  Профком работников ОАО «Белкомплекспроект» обеспечивает защиту прав и законных интересов членов профсоюза.
                                  </div>


                          </div>

                </Body>
            </Fragment>
        )
    }
}



export default (ProfsPage)
