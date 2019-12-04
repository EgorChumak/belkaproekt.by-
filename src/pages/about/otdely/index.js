import React ,{Fragment,Component} from "react";
import {connect} from 'react-redux';
import Body from '../../../includes/body/index';
import AboutMenu from '../../../includes/AboutMenu/index';
import './index.scss';
import { Link } from "react-router-dom";


class OtdelyPage extends Component{
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
                              <h1>Отделы</h1>
                              <table>
      <tbody><tr className="">
        <td className="tabletop">Каб.</td>
        <td className="tabletop">Отдел</td>
        <td className="tabletop"> Ф.И.О</td>
        <td className="tabletop"> Телефон</td>
        </tr><tr className="">
        <th className="tabletopleft"><p></p></th>
        <th className="coloredname">Управление<p></p></th>
        <th className="coloredname"><p></p></th>
        <th className="tabletopright"><p></p></th>
        </tr>

        <tr className="">
          <td className="tabletop">513</td>
          <td className="tabletop">Директор</td>
          <td className="tabletop"> Кричко Светлана Вячеславовна</td>
          <td className="tabletop"> 350-45-09</td>
        </tr>
        <tr className="">
          <td className="tabletop colored">513</td>
          <td className="tabletop colored">Главный Инженер</td>
          <td className="tabletop colored"> Крайко Юрий Александрович</td>
          <td className="tabletop colored"> 353-80-83</td>
        </tr>
        <tr className="">
          <td className="tabletop">513</td>
          <td className="tabletop">Приемная</td>
          <td className="tabletop"> Гукало Марина Александровна</td>
          <td className="tabletop"> 337-44-00</td>
        </tr>
        <tr className="">
        <th className="tabletopleft"><p></p></th>
        <th className="coloredname">Бюро ГИПов<p></p></th>
        <th className="coloredname"><p></p></th>
        <th className="tabletopright"><p></p></th>
        </tr>
        <tr className="">
          <td className="tabletop">501</td>
          <td className="tabletop">Главный инженер проекта</td>
          <td className="tabletop"> Смирнов Александр Евгеньевич</td>
          <td className="tabletop"> 350-64-26</td>
        </tr>
        <tr className="">
          <td className="tabletop colored">501</td>
          <td className="tabletop colored">Главный инженер проекта</td>
          <td className="tabletop colored"> Двинский Леониид Петрович</td>
          <td className="tabletop colored"> 350-64-26</td>
        </tr>
        <tr>
          <td className="tabletop">502</td>
          <td className="tabletop">Главный инженер проекта</td>
          <td className="tabletop"> Паленый Владимир Леонидович</td>
          <td className="tabletop"> 350-64-99</td>
        </tr>
        <tr>
          <td className="tabletop colored">502</td>
          <td className="tabletop colored">Ведущий инженер </td>
          <td className="tabletop colored"> Какареко Светлана Ростиславовна</td>
          <td className="tabletop colored"> 350-64-99</td>
        </tr>

        <tr>
        <th className="tabletopleft"><p></p></th>
        <th className="coloredname">Инженер по ОТ <p></p></th>
        <th className="coloredname"><p></p></th>
        <th className="tabletopright"><p></p></th>
        </tr>
        <tr>
          <td className="tabletop colored">507</td>
          <td className="tabletop colored">Инженер по ОТ</td>
          <td className="tabletop colored"> Кричко Владимир Ильич</td>
          <td className="tabletop colored"> 350-64-99</td>
        </tr>
        <tr><th className="tabletopleft"><p></p></th>
        <th className="coloredname">Конструкторский сектор<p></p></th>
        <th className="coloredname"><p></p></th>
        <th className="tabletopright"><p></p></th>
        </tr>
        <tr>
          <td className="tabletop colored">503</td>
          <td className="tabletop colored">Конструктор</td>
          <td className="tabletop colored"> Ахмирова Нина Кальмидовна</td>
          <td className="tabletop colored"> 396-79-58</td>
        </tr>
        <tr>
          <td className="tabletop">503</td>
          <td className="tabletop">Конструктор</td>
          <td className="tabletop">Дорофеева Татьяна Геннадьевна</td>
          <td className="tabletop"> 396-79-58</td>
        </tr>
        <tr>
          <td className="tabletop colored">503</td>
          <td className="tabletop colored">Конструктор</td>
          <td className="tabletop colored">Броневицкая Екатерина Владимировна</td>
          <td className="tabletop colored"> 396-79-58</td>
        </tr>
        <tr>
          <td className="tabletop">503</td>
          <td className="tabletop">Конструктор</td>
          <td className="tabletop">Маринич Анна Александровна</td>
          <td className="tabletop"> 396-79-58</td>
        </tr>
        <tr>
          <td className="tabletop colored">503</td>
          <td className="tabletop colored">Конструктор</td>
          <td className="tabletop colored">Лапицкая Кристина Михайловна</td>
          <td className="tabletop colored"> 396-79-58</td>
        </tr>
        <tr><th className="tabletopleft"><p></p></th>
        <th className="coloredname">Архитектурный сектор<p></p></th>
        <th className="coloredname"><p></p></th>
        <th className="tabletopright"><p></p></th>
        </tr>
        <tr>
          <td className="tabletop colored">503</td>
          <td className="tabletop colored">Главный архитектор проекта</td>
          <td className="tabletop colored"> Сульдина Елена Николевна</td>
          <td className="tabletop colored"> Тел/Факс 359-50-29</td>
        </tr>
        <tr>
          <td className="tabletop">503</td>
          <td className="tabletop">Главный архитектор проекта</td>
          <td className="tabletop"> Шабан Игорь Владимирович</td>
          <td className="tabletop"> Тел/Факс 359-50-29</td>
        </tr>
        <tr><th className="tabletopleft"><p></p></th>
        <th className="coloredname">Электротехнический сектор<p></p></th>
        <th className="coloredname"><p></p></th>
        <th className="tabletopright"><p></p></th>
        </tr>
        <tr>
          <td className="tabletop">505</td>
          <td className="tabletop">Электрик</td>
          <td className="tabletop"> Куцер Анатолий Борисович</td>
          <td className="tabletop"> 350-45-98</td>
        </tr>
        <tr>
          <td className="tabletop colored">505</td>
          <td className="tabletop colored">Электрик</td>
          <td className="tabletop colored"> Северук Анна Николевна</td>
          <td className="tabletop colored"> 350-45-98</td>
        </tr>
        <tr><th className="tabletopleft"><p></p></th>
        <th className="coloredname">Сектор теплогазоснабжения, отопления и вентиляции<p></p></th>
        <th className="coloredname"><p></p></th>
        <th className="tabletopright"><p></p></th>
        </tr>
        <tr>
          <td className="tabletop colored">506</td>
          <td className="tabletop colored">ГСВ</td>
          <td className="tabletop colored"> Абарикна Галина Александровна</td>
          <td className="tabletop colored"> 343-45-92</td>
        </tr>
        <tr>
          <td className="tabletop">506</td>
          <td className="tabletop">ОВ, ТМ</td>
          <td className="tabletop">Дасюкевич Елена Петровна</td>
          <td className="tabletop"> 343-45-92</td>
        </tr>
        <tr><th className="tabletopleft"><p></p></th>
        <th className="coloredname">Бюро диагностики<p></p></th>
        <th className="coloredname"><p></p></th>
        <th className="tabletopright"><p></p></th>
        </tr>
        <tr>
          <td className="tabletop">505</td>
          <td className="tabletop">Гланвый специалист</td>
          <td className="tabletop"> Кузьмин Сергей Леонидович</td>
          <td className="tabletop"> 355-45-08</td>
        </tr>
        <tr>
          <td className="tabletop colored">505</td>
          <td className="tabletop colored">Ведущий Архитектор</td>
          <td className="tabletop colored"> Бурых Андрей Анатольевич</td>
          <td className="tabletop colored"> 355-45-08</td>
        </tr>
        <tr>
          <td className="tabletop">505</td>
          <td className="tabletop">Инженер</td>
          <td className="tabletop"> Рассказёнок Николай Геннадьевич</td>
          <td className="tabletop"> 355-45-08</td>
        </tr>
        <tr>
          <td className="tabletop colored">505</td>
          <td className="tabletop colored">Инженер</td>
          <td className="tabletop colored"> Бутько Михаил Викторович</td>
          <td className="tabletop colored"> 355-45-08</td>
        </tr>
        <tr><th className="tabletopleft"><p></p></th>
        <th className="coloredname">Сектор водопровода и канализации<p></p></th>
        <th className="coloredname"><p></p></th>
        <th className="tabletopright"><p></p></th>
        </tr>
        <tr>
          <td className="tabletop colored">506</td>
          <td className="tabletop colored">ВК</td>
          <td className="tabletop colored"> Должникова Ольга Ивановна</td>
          <td className="tabletop colored"> 343-45-92</td>
        </tr>
        <tr><th className="tabletopleft"><p></p></th>
        <th className="coloredname">Сектор генплана, вертикальной планировки и благоустройства <p></p></th>
        <th className="coloredname"><p></p></th>
        <th className="tabletopright"><p></p></th>
        </tr>
        <tr>
          <td className="tabletop colored">508</td>
          <td className="tabletop colored">Главный специалист</td>
          <td className="tabletop colored"> Янковская Наталья Тадеушевна</td>
          <td className="tabletop colored"> 343-45-92</td>
        </tr>
        <tr><th className="tabletopleft"><p></p></th>
        <th className="coloredname">Сектор сметного ценооброзования <p></p></th>
        <th className="coloredname"><p></p></th>
        <th className="tabletopright"><p></p></th>
        </tr>
        <tr>
          <td className="tabletop colored">508</td>
          <td className="tabletop colored">Главный специалист</td>
          <td className="tabletop colored"> Губчик Людмила Николевна</td>
          <td className="tabletop colored"> 352-46-68</td>
        </tr>
        <tr>
          <td className="tabletop">508</td>
          <td className="tabletop">Главный специалист</td>
          <td className="tabletop"> Крупко Валентина Михайловна</td>
          <td className="tabletop"> 352-46-68</td>
        </tr>
        <tr>
          <td className="tabletop colored">508</td>
          <td className="tabletop colored">Главный специалист</td>
          <td className="tabletop colored"> Игнатьева Надежда Георгиевна</td>
          <td className="tabletop colored"> 352-46-68</td>
        </tr>
        <tr><th className="tabletopleft"><p></p></th>
        <th className="coloredname">Бухгалтерия <p></p></th>
        <th className="coloredname"><p></p></th>
        <th className="tabletopright"><p></p></th>
        </tr>
        <tr>
          <td className="tabletop colored">510</td>
          <td className="tabletop colored">Главный бухгалтер</td>
          <td className="tabletop colored"> Папанова Татьяна Николевна</td>
          <td className="tabletop colored">Факс/телефон 356-02-10</td>
        </tr>
        <tr>
          <td className="tabletop">510</td>
          <td className="tabletop">Бухгалтер</td>
          <td className="tabletop"> Петюшик Анастасия Михайловна</td>
          <td className="tabletop">Факс/телефон 356-02-10</td>
        </tr>
        <tr><th className="tabletopleft"><p></p></th>
        <th className="coloredname">Планово-экономический и сметно-договроной отдел <p></p></th>
        <th className="coloredname"><p></p></th>
        <th className="tabletopright"><p></p></th>
        </tr>
        <tr>
          <td className="tabletop">509</td>
          <td className="tabletop">Начальник отдела</td>
          <td className="tabletop"> Лещенко Мария Александровна</td>
          <td className="tabletop"> Факс/телефон 352-45-88</td>
        </tr>
        <tr><th className="tabletopleft"><p></p></th>
        <th className="coloredname">Юридический отдел <p></p></th>
        <th className="coloredname"><p></p></th>
        <th className="tabletopright"><p></p></th>
        </tr>
        <tr>
          <td className="tabletop">514А</td>
          <td className="tabletop">Ведущий юрисконсульт</td>
          <td className="tabletop"> Малахова Ирина Александровна</td>
          <td className="tabletop"> 356-63-03</td>
        </tr>
        <tr><th className="tabletopleft"><p></p></th>
        <th className="coloredname">Отдел маркетинга и информации <p></p></th>
        <th className="coloredname"><p></p></th>
        <th className="tabletopright"><p></p></th>
        </tr>
        <tr>
          <td className="tabletop">514А</td>
          <td className="tabletop">Начальник ОМ</td>
          <td className="tabletop"> Ольшанская Людмила Михайловна</td>
          <td className="tabletop"> 356-63-03</td>
        </tr>
        <tr>
          <td className="tabletop colored">514А</td>
          <td className="tabletop colored">Специалист</td>
          <td className="tabletop colored"> Чумак Никита Александрович</td>
          <td className="tabletop colored"> 356-63-03</td>
        </tr>
        <tr><th className="tabletopleft"><p></p></th>
        <th className="coloredname">Отдел автомат. систем проект. и вып. проектов <p></p></th>
        <th className="coloredname"><p></p></th>
        <th className="tabletopright"><p></p></th>
        </tr>
        <tr>
          <td className="tabletop colored">514Б</td>
          <td className="tabletop colored">Начальник отдела</td>
          <td className="tabletop colored"> Кислый Михаил Валерьевич </td>
          <td className="tabletop colored"> 354-45-78</td>
        </tr>
        <tr>
          <td className="tabletop">514Б</td>
          <td className="tabletop">Администратор сетей</td>
          <td className="tabletop"> Малахов Антон Дмитриевич </td>
          <td className="tabletop"> 354-45-78</td>
        </tr>
        <tr>
          <td className="tabletop colored">514Б</td>
          <td className="tabletop colored">Главный специалист</td>
          <td className="tabletop colored"> Календа-Голубева Диана Борисовна </td>
          <td className="tabletop colored"> 354-45-78</td>
        </tr>

        <tr><th className="tabletopleft"><p></p></th>
        <th className="coloredname">Геослужба Я.Колоса, 59 кор.2 <p>регистрация инженерно-геодезических изысканий по Минской области</p></th>
        <th className="coloredname"><p></p></th>
        <th className="tabletopright"><p></p></th>
        </tr>
        <tr>
          <td className="tabletop colored"></td>
          <td className="tabletop colored">Начальник Геослужбы</td>
          <td className="tabletop colored"> Нестерович Нина Игоревна <p>geosluzba@gmail.com</p></td>
          <td className="tabletop colored"> 377-68-42</td>
        </tr>

        <tr><th className="tabletopleft"><p></p></th>
        <th className="coloredname">Геослужба Чичерина, 21 <p>регистрация инженерно-геологических изысканий по Минской области</p></th>
        <th className="coloredname"><p></p></th>
        <th className="tabletopright"><p></p></th>
        </tr>
        <tr>
          <td className="tabletop colored">511</td>
          <td className="tabletop colored">Инженер-геолог</td>
          <td className="tabletop colored"> Полубятко Александр Владимирович </td>
          <td className="tabletop colored"> 263-17-88</td>
        </tr>
      </tbody></table>
                          </div>
                </Body>
            </Fragment>
        )
    }
}



export default (OtdelyPage)
