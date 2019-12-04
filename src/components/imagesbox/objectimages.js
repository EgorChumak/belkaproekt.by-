import React ,{Fragment,Component} from "react";
import {connect} from 'react-redux';
import {Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody} from "reactstrap";

import azs_slavneft from '../../images/object/azs_slavneft.png';
import vesta_abk from '../../images/object/vesta_abk.png';
import objectone from '../../images/object/objectone.png';
import objecttwo from '../../images/object/objecttwo.png';
import belneftehim from '../../images/object/belneftehim.png';
import borovlyany from '../../images/object/borovlyany.png';
import vesta from '../../images/object/vesta.png';
import dva from '../../images/object/dva.png';
import eterika from '../../images/object/eterika.png';
import etnograficheskiy_centr from '../../images/object/etnograficheskiy_centr.png';
import etnograficheskiy_centrtwo from '../../images/object/etnograficheskiy_centrtwo.png';
import kolodishchi_vip from '../../images/object/kolodishchi_vip.png';
import krupki from '../../images/object/krupki.png';
import maryalivo from '../../images/object/maryalivo.png';
import smolevichi from '../../images/object/smolevichi.png';
import stankovo from '../../images/object/stankovo.png';
import start from '../../images/object/start.png';
import vishnevka from '../../images/object/vishnevka.png';




etnograficheskiy_centr

import './index.scss';
import { Link } from "react-router-dom";

class ObjectImage extends Component{
    constructor(props){
        super(props);
    }


    render(){
        console.log(this.props.items);
        return(
            <Fragment>
                

                      
                        

                        <CardDeck>
      <Card>
        <CardImg top width="100%" src={vesta_abk} alt="Card image cap" />
        
      </Card>
      <Card>
        <CardImg top width="100%" src={objectone} alt="Card image cap" />
        
      </Card>
            

      <Card>
        <CardImg top width="100%" src={objecttwo} alt="Card image cap" />
        
      </Card>
    </CardDeck>



    
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={vesta} alt="Card image cap" />
        
      </Card>
      <Card>
        <CardImg top width="100%" src={azs_slavneft} alt="Card image cap" />
        
      </Card>
      <Card>
        <CardImg top width="100%" src={belneftehim} alt="Card image cap" />
        
      </Card>
    </CardDeck>



    
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={borovlyany} alt="Card image cap" />
        
      </Card>
      <Card>
        <CardImg top width="100%" src={dva} alt="Card image cap" />
        
      </Card>
      <Card>
        <CardImg top width="100%" src={eterika} alt="Card image cap" />
        
      </Card>
    </CardDeck>



            
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={etnograficheskiy_centr} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          
           
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={etnograficheskiy_centrtwo} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
         
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={kolodishchi_vip} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
         
        </CardBody>
      </Card>
    </CardDeck>



            
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={krupki} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          
           
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={start} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
         
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={vishnevka} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
         
        </CardBody>
      </Card>
    </CardDeck>


            
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={stankovo} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          
           
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={maryalivo} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
         
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={smolevichi} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
         
        </CardBody>
      </Card>
    </CardDeck>


    
                
       
            </Fragment>
        )
    }
}



export default (ObjectImage)
