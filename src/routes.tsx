import React from 'react';  // nesta versão sempre se deve importar o react para ver o componente em tela
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/landing';
import OrphanagesMap from './pages/orphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component= {Landing} />
          <Route path="/app" component= {OrphanagesMap} />
          <Route path="/orphanages/create" exact component= {CreateOrphanage} />
          <Route path="/orphanages/:id" component= {Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;