import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Test from '../pages/Test';
import Page404 from '../pages/Page404';
import HighScore from '../pages/HighScore';
import Memoria from '../pages/Memoria';
import Dogrun from '../pages/Dogrun';
import playDog from '../pages/Dogrun/game';
import playMemory from '../pages/Memoria/game';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/test" component={Test} />
      <MyRoute exact path="/score" component={HighScore} />
      <MyRoute exact path="/memoria" component={Memoria} />
      <MyRoute exact path="/playMemory" component={playMemory} />
      <MyRoute exact path="/playDog" component={playDog} />

      <MyRoute exact path="/dog" component={Dogrun} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
