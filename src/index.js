import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';

// const Pagina404 = () => (<div>Página 404</div>) *Ideal

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={() => (<div>Página 404</div>)}/> {/*forma simples */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);