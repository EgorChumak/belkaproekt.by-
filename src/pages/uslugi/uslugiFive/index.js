import React ,{Fragment,Component} from "react";
import {connect} from 'react-redux';
import Body from '../../../includes/body/index';
import UslugiMenu from '../../../includes/UslugiMenu/index';
import './../uslugi.scss';
import img from '../../../images/pie.jpg';
import { Link } from "react-router-dom";


class UslugiPageFive extends Component{
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
                              <h1>Копировально множительные услуги</h1>
                              <div className="text">Печать чертежей 8(017)-354-45-78 Отдел АСП и ВП В нашей организации вы можете заказать полный комплекс услуг: от сканирования или копирования чертежей любых форматов до распечатки и упаковки.</div>
                              <table>
    <tbody><tr className="">
      <td className="tabletop">№ ПП</td>
      <td className="tabletop">Наименование услуг</td>
      <td className="tabletop"> Еденица изм.</td>
      <td className="tabletop"> Цена,руб.</td>
      <td className="tabletop"> Примечание</td>
    </tr>
      <tr className="">
      <th className="tabletopleft"></th>
      <th className="coloredname">Сканирование ч/б<p></p></th>
      <th className="coloredname"><p></p></th>
      <th className="coloredname"><p></p></th>
      <th className="tabletopright"><p></p></th>
      </tr>
      <tr className="">
        <td className="tabletop"></td>
        <td className="tabletop">Сканирование формата A0</td>
        <td className="tabletop">Лист</td>
        <td className="tabletop">1,40</td>
        <td className="tabletop"> </td>
      </tr>
    <tr className="">
      <td className="tabletop colored"></td>
      <td className="tabletop colored">Сканирование формата A1</td>
      <td className="tabletop colored">Лист</td>
      <td className="tabletop colored">0,95</td>
      <td className="tabletop colored"> </td>
    </tr>
  <tr className="">
    <td className="tabletop"></td>
    <td className="tabletop">Сканирование формата A2</td>
    <td className="tabletop">Лист</td>
    <td className="tabletop">0,75</td>
    <td className="tabletop"> </td>
  </tr>
  <tr className="">
    <td className="tabletop colored"></td>
    <td className="tabletop colored">Сканирование формата A3</td>
    <td className="tabletop colored">Лист</td>
    <td className="tabletop colored">0,30</td>
    <td className="tabletop colored"> </td>
  </tr>
  <tr className="">
    <td className="tabletop"></td>
    <td className="tabletop">Сканирование формата A4</td>
    <td className="tabletop">Лист</td>
    <td className="tabletop">0,20</td>
    <td className="tabletop"> </td>
  </tr>
  <tr className="">
  <th className="tabletopleft"><p></p></th>
  <th className="coloredname">Сканирование цвет.<p></p></th>
  <th className="coloredname"><p></p></th>
  <th className="coloredname"><p></p></th>
  <th className="tabletopright"><p></p></th>
  </tr>
  <tr className="">
    <td className="tabletop"></td>
    <td className="tabletop">Сканирование формата A0</td>
    <td className="tabletop">Лист</td>
    <td className="tabletop">1,80</td>
    <td className="tabletop"> </td>
  </tr>
<tr className="">
  <td className="tabletop colored"></td>
  <td className="tabletop colored">Сканирование формата A1</td>
  <td className="tabletop colored">Лист</td>
  <td className="tabletop colored">1,20</td>
  <td className="tabletop colored"> </td>
</tr>
<tr className="">
<td className="tabletop"></td>
<td className="tabletop">Сканирование формата A2</td>
<td className="tabletop">Лист</td>
<td className="tabletop">0,90</td>
<td className="tabletop"> </td>
</tr>
<tr>
<td className="tabletop colored"></td>
<td className="tabletop colored">Сканирование формата A3</td>
<td className="tabletop colored">Лист</td>
<td className="tabletop colored">0,50</td>
<td className="tabletop colored"> </td>
</tr>
<tr>
<td className="tabletop"></td>
<td className="tabletop">Сканирование формата A4</td>
<td className="tabletop">Лист</td>
<td className="tabletop">0,30</td>
<td className="tabletop"> </td>
</tr>
<tr>
<th className="tabletopleft"><p></p></th>
<th className="coloredname">Печать/копирование ч/б<p></p></th>
<th className="coloredname"><p></p></th>
<th className="coloredname"><p></p></th>
<th className="tabletopright"><p></p></th>
</tr>
<tr>
  <td className="tabletop"></td>
  <td className="tabletop">80 г/м2. на бумагу формата A0</td>
  <td className="tabletop">Лист</td>
  <td className="tabletop">2,25</td>
  <td className="tabletop"> </td>
</tr>
<tr>
<td className="tabletop colored"></td>
<td className="tabletop colored">80 г/м2. на бумагу формата A1</td>
<td className="tabletop colored">Лист</td>
<td className="tabletop colored">1,20</td>
<td className="tabletop colored"> </td>
</tr>
<tr>
<td className="tabletop"></td>
<td className="tabletop">80 г/м2. на бумагу формата A2</td>
<td className="tabletop">Лист</td>
<td className="tabletop">0,85</td>
<td className="tabletop"> </td>
</tr>
<tr>
<td className="tabletop colored"></td>
<td className="tabletop colored">80 г/м2. на бумагу формата A3</td>
<td className="tabletop colored">Лист</td>
<td className="tabletop colored">0,25</td>
<td className="tabletop colored"> </td>
</tr>
<tr>
<td className="tabletop"></td>
<td className="tabletop">80 г/м2. на бумагу формата A3 2-х стор</td>
<td className="tabletop">Лист</td>
<td className="tabletop">0,50</td>
<td className="tabletop"> </td>
</tr>
<tr>
<td className="tabletop colored"></td>
<td className="tabletop colored">80 г/м2. на бумагу формата A3 (не формат).</td>
<td className="tabletop colored">Лист</td>
<td className="tabletop colored">0,55</td>
<td className="tabletop colored"> </td>
</tr>
<tr>
<td className="tabletop"></td>
<td className="tabletop">80 г/м2. на бумагу формата A4</td>
<td className="tabletop">Лист</td>
<td className="tabletop">0,15</td>
<td className="tabletop"> </td>
</tr>
<tr>
<td className="tabletop colored"></td>
<td className="tabletop colored">80 г/м2. на бумагу формата A4 2-х стор.</td>
<td className="tabletop colored">Лист</td>
<td className="tabletop colored">0,30</td>
<td className="tabletop colored"> </td>
</tr>
<tr>
<td className="tabletop"></td>
<td className="tabletop">80 г/м2. на бумагу формата A4 (не формат)</td>
<td className="tabletop">Лист</td>
<td className="tabletop">0,40</td>
<td className="tabletop"> </td>
</tr>
<tr><th className="tabletopleft"><p></p></th>
<th className="coloredname">Печать/копирование цвет.<p></p></th>
<th className="coloredname"><p></p></th>
<th className="coloredname"><p></p></th>
<th className="tabletopright"><p></p></th>
</tr>
<tr>
  <td className="tabletop"></td>
  <td className="tabletop">80 г/м2. на бумагу формата A0</td>
  <td className="tabletop">Лист</td>
  <td className="tabletop">6.80</td>
  <td className="tabletop"> Струйная печать</td>
</tr>
<tr>
<td className="tabletop colored"></td>
<td className="tabletop colored">80 г/м2. на бумагу формата A1</td>
<td className="tabletop colored">Лист</td>
<td className="tabletop colored">3,00</td>
<td className="tabletop colored"> Струйная печать</td>
</tr>
<tr>
<td className="tabletop"></td>
<td className="tabletop">80 г/м2. на бумагу формата A2</td>
<td className="tabletop">Лист</td>
<td className="tabletop">1,95</td>
<td className="tabletop">Струйная печать </td>
</tr>
<tr>
<td className="tabletop colored"></td>
<td className="tabletop colored">80 г/м2. на бумагуе формата A3</td>
<td className="tabletop colored">Лист</td>
<td className="tabletop colored">1,50</td>
<td className="tabletop colored"> </td>
</tr>
<tr>
<td className="tabletop"></td>
<td className="tabletop">80 г/м2. на бумагу формата A3 2-х стор.</td>
<td className="tabletop">Лист</td>
<td className="tabletop">2,80</td>
<td className="tabletop"> </td>
</tr>
<tr>
<td className="tabletop colored"></td>
<td className="tabletop colored">80 г/м2. на бумагу формата A3 (рулон).</td>
<td className="tabletop colored">Лист</td>
<td className="tabletop colored">1,50</td>
<td className="tabletop colored">Струйная печать </td>
</tr>
<tr>
<td className="tabletop"></td>
<td className="tabletop">80 г/м2. на бумагу формата A4</td>
<td className="tabletop">Лист</td>
<td className="tabletop">0,90</td>
<td className="tabletop"> </td>
</tr>
<tr>
<td className="tabletop colored"></td>
<td className="tabletop colored">80 г/м2. на бумагуа A4 2-х стор.</td>
<td className="tabletop colored">Лист</td>
<td className="tabletop colored">1,60</td>
<td className="tabletop colored"> </td>
</tr>
<tr>
<td className="tabletop"></td>
<td className="tabletop">80 г/м2. на бумагу A4 (рулон)</td>
<td className="tabletop">Лист</td>
<td className="tabletop">1,00</td>
<td className="tabletop">Струйная печать </td>
</tr>
<tr>
<th className="tabletopleft"><p></p></th>
<th className="coloredname"> Масштабирование<p></p></th>
<th className="coloredname"><p></p></th>
<th className="coloredname"><p></p></th>
<th className="tabletopright"><p></p></th>
</tr>
<tr>
  <td className="tabletop"></td>
  <td className="tabletop">Уменьшение</td>
  <td className="tabletop">Лист</td>
  <td className="tabletop">0,10</td>
  <td className="tabletop"> </td>
</tr>
<tr>
<td className="tabletop colored"></td>
<td className="tabletop colored">Увелечение</td>
<td className="tabletop colored">Лист</td>
<td className="tabletop colored">0,15</td>
<td className="tabletop colored"> </td>
</tr>
<tr><th className="tabletopleft"><p></p></th>
<th className="coloredname">Фальцовка, подборка<p></p></th>
<th className="coloredname"><p></p></th>
<th className="coloredname"><p></p></th>
<th className="tabletopright"><p></p></th>
</tr>
<tr>
  <td className="tabletop colored"></td>
  <td className="tabletop colored">Подборка листов формата А3</td>
  <td className="tabletop colored">Лист</td>
  <td className="tabletop colored">0,03</td>
  <td className="tabletop colored"> </td>
</tr>
<tr>
<td className="tabletop"></td>
<td className="tabletop">Подборка листов формата А4</td>
<td className="tabletop">Лист</td>
<td className="tabletop">0,025</td>
<td className="tabletop"> </td>
</tr>
<tr>
<td className="tabletop colored"></td>
<td className="tabletop colored">Фальцовка формат А0</td>
<td className="tabletop colored">Лист</td>
<td className="tabletop colored">0,20</td>
<td className="tabletop colored"> </td>
</tr>
<tr>
<td className="tabletop"></td>
<td className="tabletop">Фальцовка формат А1</td>
<td className="tabletop">Лист</td>
<td className="tabletop">0,15</td>
<td className="tabletop"> </td>
</tr>
<tr>
<td className="tabletop colored"></td>
<td className="tabletop colored">Фальцовка формат А2</td>
<td className="tabletop colored">Лист</td>
<td className="tabletop colored">0,10</td>
<td className="tabletop colored"> </td>
</tr>
<tr>
<td className="tabletop"></td>
<td className="tabletop">Фальцовка формат А3</td>
<td className="tabletop">Лист</td>
<td className="tabletop">0,05</td>
<td className="tabletop"> </td>
</tr>
<tr>
<td className="tabletop colored"></td>
<td className="tabletop colored">Фальцовка под переплет формат А0</td>
<td className="tabletop colored">Лист</td>
<td className="tabletop colored">0,35</td>
<td className="tabletop colored"> </td>
</tr>
<tr>
<td className="tabletop"></td>
<td className="tabletop">Фальцовка под переплет формат А1</td>
<td className="tabletop">Лист</td>
<td className="tabletop">0,20</td>
<td className="tabletop"> </td>
</tr>
<tr>
<td className="tabletop colored"></td>
<td className="tabletop colored">Фальцовка под переплет формат А2</td>
<td className="tabletop colored">Лист</td>
<td className="tabletop colored">0,18</td>
<td className="tabletop colored"> </td>
</tr>
<tr>
<td className="tabletop"></td>
<td className="tabletop">Фальцовка под переплет формат А3</td>
<td className="tabletop">Лист</td>
<td className="tabletop">0,10</td>
<td className="tabletop"> </td>
</tr>
<tr><th className="tabletopleft"><p></p></th>
<th className="coloredname">Переплет<p></p></th>
<th className="coloredname"><p></p></th>
<th className="coloredname"><p></p></th>
<th className="tabletopright"><p></p></th>
</tr>
<tr>
  <td className="tabletop"></td>
  <td className="tabletop">Переплет форамт А3 на пластик. пружину 12 мм</td>
  <td className="tabletop">Шт.</td>
  <td className="tabletop">1,70</td>
  <td className="tabletop"> </td>
</tr>
<tr>
<td className="tabletop colored"></td>
<td className="tabletop colored">Переплет форамт А3 на пластик. пружину 19 мм</td>
<td className="tabletop colored">Шт.</td>
<td className="tabletop colored">1,90</td>
<td className="tabletop colored"> </td>
</tr>
<tr>
<td className="tabletop"></td>
<td className="tabletop">Переплет форамт А3 на пластик. пружину 25 мм</td>
<td className="tabletop">Шт.</td>
<td className="tabletop">2,10</td>
<td className="tabletop"> </td>
</tr>
<tr>
<td className="tabletop colored"></td>
<td className="tabletop colored">Переплет форамт А3 на пластик. пружину 38 мм</td>
<td className="tabletop colored">Шт.</td>
<td className="tabletop colored">2,30</td>
<td className="tabletop colored"> </td>
</tr>
<tr><td className="tabletop"></td>
<td className="tabletop">Переплет форамт А3 на пластик. пружину 51 мм</td>
<td className="tabletop">Шт.</td>
<td className="tabletop">3,00</td>
<td className="tabletop"> </td>
</tr>
  </tbody></table>
                           </div>
                </Body>
            </Fragment>
        )
    }
}



export default (UslugiPageFive)
