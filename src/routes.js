import Login from 'pages/Login';
import Feira from 'pages/Feira';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Carrinho from 'pages/Carrinho';
import { UsuarioProvider } from 'shared/context/Usuario';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <UsuarioProvider>
                        <Login />
                    </UsuarioProvider>
                </Route>
                <Route path='/feira'>
                    <Feira />
                </Route>
                <Route path='/carrinho'>
                    <Carrinho />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;