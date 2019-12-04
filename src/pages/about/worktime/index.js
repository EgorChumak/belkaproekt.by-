import React ,{Fragment,Component} from "react";
import {connect} from 'react-redux';
import Body from '../../../includes/body/index';
import AboutMenu from '../../../includes/AboutMenu/index';
import './index.scss';
import { Link } from "react-router-dom";


class WorktimePage extends Component{
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
                              <h1>Режим работы</h1>
                              <table>
  <tbody><tr className="">
    <td className="border"><p>День</p></td>
    <td className="border"><p>Время работы</p></td>
  </tr>
  <tr className="">
    <td className="border colored">Понедельник</td>
    <td className="border colored">08:00 - 17:00 (перерыв: 12:30 - 13:15)</td>
  </tr>
  <tr className="">
    <td className="border">Вторник</td>
    <td className="border">08:00 - 17:00 (перерыв: 12:30 - 13:15)</td>
  </tr>
  <tr className="">
    <td className="border colored">Среда</td>
    <td className="border colored">08:00 - 17:00 (перерыв: 12:30 - 13:15)</td>
  </tr>
  <tr className="">
    <td className="border">Четверг</td>
    <td className="border">08:00 - 17:00 (перерыв: 12:30 - 13:15)</td>
  </tr>
  <tr className="">
    <td className="border colored">Пятница</td>
    <td className="border colored">08:00 - 15:00 (перерыв: 12:30 - 13:15)</td>
  </tr>
  <tr className="">
    <td className="border">Суббота</td>
    <td className="border">Выходной</td>
  </tr>
  <tr className="">
    <td className="border colored">Воскресенье</td>
    <td className="border colored">Выходной</td>
  </tr>

</tbody></table>
                          </div>
                </Body>
            </Fragment>
        )
    }
}



export default (WorktimePage)
