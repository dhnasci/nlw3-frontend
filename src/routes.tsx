import React from 'react';  // nesta versão sempre se deve importar o react para ver o componente em tela
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/landing';
import OrphanagesMap from './pages/orphanagesMap';

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component= {Landing} />
          <Route path="/app" component= {OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;