import React, { Component } from 'react';
import {HashRouter,Redirect,Route,Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Home from './pages/home';
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'

import NoMatch from './pages/nomatch';
import Loadings from './pages/ui/loadings';
import Notice from './pages/ui/notice';
import Messages from './pages/ui/messages';
import  Tabs  from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousel from './pages/ui/carousel';
import FormLogin from'./pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import HighTable from './pages/table/highTable';
import City from './pages/city'
import Common from './common'
import OrderDetail from './pages/order/detail'
import Order from './pages/order';
import User from './pages/user';
import BikeMap from './pages/map/bikeMap';
import Bar from './pages/echarts/bar/index';
import Line from './pages/echarts/line/index';
import Pie from './pages/echarts/pie/index';
import Permission from './pages/permission';
class IRouter extends Component {
    render() {
        return (
           <HashRouter>
               <App>
                <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/common" render={() =>
                            <Common>
                                <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                            </Common>
                        }
                            />
                        {/* <Route path="/admin" component={Admin} /> */}
                        <Route path="/" render={()=>
                            <Admin>
                                <Switch>
                                   
                                    <Route path='/home' component={Home} />
                                    <Route path="/ui/buttons" component={Buttons} /> 
                                    <Route path="/ui/modals" component={Modals} />
                                    <Route path="/ui/loadings" component={Loadings} />
                                    <Route path="/ui/notification" component={Notice} />
                                    <Route path="/ui/messages" component={Messages} />
                                    <Route path="/ui/tabs" component={Tabs} />
                                    <Route path="/ui/gallery" component={Gallery} />
                                    <Route path="/ui/carousel" component={Carousel} />
                                    <Route path="/form/login" component={FormLogin} />
                                    <Route path="/form/register" component={FormRegister} />
                                    <Route path="/table/basic" component={BasicTable} />
                                    <Route path="/table/high" component={HighTable} />
                                    <Route path="/city" component={City} />
                                    <Route path="/order" component={Order} />
                                    <Route path='/user' component={User} />
                                    <Route path='/bikeMap' component={BikeMap} />
                                    <Route path="/charts/bar" component={Bar} />
                                    <Route path="/charts/line" component={Line} />
                                    <Route path="/charts/pie" component={Pie} />
                                    <Route path="/permission" component={ Permission} />
                                    <Route component={NoMatch} />
                                    <Redirect to="/home" />
                                </Switch>
                                
                            </Admin>
                        } /> 
                    </Switch>
               </App>
           </HashRouter>
        );
    }
}

export default IRouter;