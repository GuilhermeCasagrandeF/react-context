import Login from 'pages/Login';
import Feira from 'pages/Feira';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Carrinho from 'pages/Carrinho';
import { UsuarioProvider } from 'shared/context/Usuario';
import { CarrinhoProvider } from 'shared/context/Carrinho';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <UsuarioProvider>
                    <Route exact path='/'>
                        <Login />
                    </Route>

                    <CarrinhoProvider>
                        <Route path='/feira'>
                            <Feira />
                        </Route>
                    </CarrinhoProvider>
                </UsuarioProvider>

                <Route path='/carrinho'>
                    <Carrinho />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;