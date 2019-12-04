import React, {Component, Fragment} from "react";
import Header from '../includes/header/header'
import Footer from "../includes/footer/footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./../pages/main/index";
import AboutPage from "./../pages/about/index";
import ObjectPage from "./../pages/object/index";
import NewsPage from "./../pages/news/index";
import NotFound from "./../pages/404/index";
import NewsItemPage from "./../pages/news/itemInfo";
import ZakupkiPage from "./../pages/zakupki/index";
import OtdelyPage from "./../pages/about/otdely/index";
import WorktimePage from "./../pages/about/worktime/index";
import ProfsPage from "./../pages/about/profs/index";
import LicenziiPage from "./../pages/about/licenzii/index";
import UslugiPage from "./../pages/uslugi/index";
import UslugiPageOne from "./../pages/uslugi/uslugiOne/index";
import UslugiPageTwo from "./../pages/uslugi/uslugiTwo/index";
import UslugiPageThree from "./../pages/uslugi/uslugiThree/index";
import UslugiPageFour from "./../pages/uslugi/uslugiFour/index";
import UslugiPageFive from "./../pages/uslugi/uslugiFive/index";
import UslugiPageSix from "./../pages/uslugi/uslugiSix/index";
import UslugiPageSeven from "./../pages/uslugi/uslugiSeven/index";


export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items : [

            ]
        }
    }

    // f3b3675c-c7bf-453e-ab4b-c70537a72ccd

    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/object" component={ObjectPage}/>
                        <Route exact path="/about" component={AboutPage}/>
                        <Route exact path="/about/otdely" component={OtdelyPage}/>
                        <Route exact path="/about/worktime" component={WorktimePage}/>
                        <Route exact path="/about/profs" component={ProfsPage}/>
                        <Route exact path="/about/licenzii" component={LicenziiPage}/>
                        <Route exact path="/news" component={NewsPage}/>
                        <Route exact path="/uslugi" component={UslugiPage}/>
                        <Route exact path="/uslugi/uslugiOne" component={UslugiPageOne}/>
                        <Route exact path="/uslugi/uslugiTwo" component={UslugiPageTwo}/>
                        <Route exact path="/uslugi/uslugiThree" component={UslugiPageThree}/>
                        <Route exact path="/uslugi/uslugiFour" component={UslugiPageFour}/>
                        <Route exact path="/uslugi/uslugiFive" component={UslugiPageFive}/>
                        <Route exact path="/uslugi/uslugiSix" component={UslugiPageSix}/>
                        <Route exact path="/uslugi/uslugiSeven" component={UslugiPageSeven}/>
                        <Route exact path="/news/post/:id" component={NewsItemPage}/>
                        <Route exact path="/zakupki" component={ZakupkiPage}/>
                        <Route component={NotFound}/>
                    </Switch>
                    <Footer />

                </BrowserRouter>
            </Fragment>
        )
    }
}
