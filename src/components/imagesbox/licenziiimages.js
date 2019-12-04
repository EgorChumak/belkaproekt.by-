import React ,{Fragment,Component} from "react";
import {connect} from 'react-redux';
import {Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody} from "reactstrap";

import izisk from '../../images/licenzii/izisk.png';
import grad from '../../images/licenzii/grad.png';
import obsled from '../../images/licenzii/obsled.png';
import predproekt from '../../images/licenzii/predproekt.png';
import genproekt from '../../images/licenzii/genproekt.png';
import docproektone from '../../images/licenzii/docproektone.png';
import docproekttwo from '../../images/licenzii/docproekttwo.png';
import isoone from '../../images/licenzii/isoone.png';
import isotwo from '../../images/licenzii/isotwo.png';

import './index.scss';
import { Link } from "react-router-dom";

class LicenziiImage extends Component{
    constructor(props){
        super(props);
    }


    render(){
        console.log(this.props.items);
        return(
           
                
          <Fragment>
                      
                        

                        <CardDeck>
      <Card>
        <CardImg top width="40%" src={izisk} alt="Card image cap" />
        <CardBody>
          <CardTitle>Аттестат соответствия на изыскания</CardTitle>
          
           
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="40%" src={grad} alt="Card image cap" />
        <CardBody>
          <CardTitle>Аттестат соответствия на право осуществления градостроительной деятельности</CardTitle>
         
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="40%" src={obsled} alt="Card image cap" />
        <CardBody>
          <CardTitle>Аттестат соответствия на право осуществления обследования зданий и сооружений   </CardTitle>
         
        </CardBody>
      </Card>
      
    </CardDeck>



          
    <CardDeck>
      <Card>
        <CardImg top width="40%" src={predproekt} alt="Card image cap" />
        <CardBody>
          <CardTitle>Аттестат соответствия на право осуществления предпроектной (предынвестиционной) документации</CardTitle>
          
           
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="40%" src={genproekt} alt="Card image cap" />
        <CardBody>
          <CardTitle>Аттестат соответствия на право осуществления функций генерального проектировщика</CardTitle>
         
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="40%" src={docproektone} alt="Card image cap" />
        <CardImg top width="40%" src={docproekttwo} alt="Card image cap" />
        <CardBody>
          <CardTitle>Аттестат-соответствия-на-право-осуществления-разработки-разделов-проектной-документации  </CardTitle>
         
        </CardBody>
      </Card>
      
    </CardDeck>

           
    <CardDeck>
      <Card>
        <CardImg top width="40%" src={isoone} alt="Card image cap" />
        <CardBody>
          <CardTitle>СЕРТИФИКАТ-соответствия-СТБ-ISO-9001-2015</CardTitle>
          
           
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="40%" src={isotwo} alt="Card image cap" />
        <CardBody>
          <CardTitle>СЕРТИФИКАТ-соответствия-СТБ-ISO-9001-2015</CardTitle>
         
        </CardBody>
      </Card>
      
      
    </CardDeck>



     
    </Fragment>      
            
        )
    }
}



export default (LicenziiImage)
