import React, { Component } from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Home from './pages/home';
import Buttons from './pages/ui/buttons'
import NoMatch from './pages/nomatch';
class IRouter extends Component {
    render() {
        return (
           <HashRouter>
               <App>
                    <Route path="/login" component={Login} />
                    {/* <Route path="/admin" component={Admin} /> */}
                    <Route path="/" render={()=>
                        <Admin>
                            <Switch>
                                <Route path='/home' component={Home} />
                                <Route path="/ui/buttons" component={Buttons} /> 
                                <Route component={NoMatch} />
                            </Switch>
                            
                        </Admin>
                    } /> 
               </App>
           </HashRouter>
        );
    }
}

export default IRouter;