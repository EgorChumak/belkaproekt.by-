import React, {Fragment, Component} from "react";
import {Link} from "react-router-dom";
import './uslugi.scss';

export default class UslugiMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="Umenu">
            <ul>
              <Link to="/uslugi"><li>Обследование технического состояния строительных конструкций зданий и сооружений</li></Link>
              <Link to="/uslugi/uslugiOne"><li>Проектирование инженерных сетей и систем</li></Link>
              <Link to="/uslugi/uslugiTwo"><li>Разработка проектной документации на перепланировку квартир</li></Link>
              <Link to="/uslugi/uslugiThree"><li>Архитектурное проектирование</li></Link>
              <Link to="/uslugi/uslugiFour"><li>Разработка градостроительных паспортов</li></Link>
              <Link to="/uslugi/uslugiFive"><li>Копировально множительные услуги</li></Link>
              <Link to="/uslugi/uslugiSix"><li>Фонд инженерно-геодезических изысканий</li></Link>
              <Link to="/uslugi/uslugiSeven"><li>Фонд инженерно-геологических изысканий</li></Link>
            </ul>
          </div>
        )
    }
}
