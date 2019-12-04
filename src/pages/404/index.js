import React ,{Fragment,Component} from "react";
import Body from '../../includes/body/index';
import AboutMenu from "../../includes/AboutMenu";

export default class NotFound extends Component{
  constructor(props){
    super(props);

  }


  render(){
    return(
      <Fragment>
        <Body>
            <AboutMenu />
          <div className="content">
          <h1>{"Страница находиться в разработке"}</h1>
          </div>
        </Body>
      </Fragment>
    )
  }






}
