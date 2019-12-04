import React, {Fragment, Component} from "react";
import {Link} from "react-router-dom";
import './index.scss';

export default class AboutMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="menu">
            <ul>
              <Link to="/about/news"><li>Новости</li></Link>
              <Link to="/about/otdely"><li>Отделы</li></Link>
              <Link to="/about/licenzii"><li>Лицензии и сертификаты</li></Link>
              <Link to="/about/worktime"><li>Режим работы</li></Link>
              <Link to="/about/partners"><li>Партнеры</li></Link>
              <Link to="/about/vakansii"><li>Вакансии</li></Link>
              <Link to="/about/zakupki"><li>Закупки</li></Link>
              <Link to="/about/profs"><li>Профсоюз</li></Link>
            </ul>
          </div>
        )
    }
}
