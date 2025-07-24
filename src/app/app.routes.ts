import { Routes } from '@angular/router';
import { ScoreComponent} from './components/score/score.component';
import { HistoryComponent } from './components/history/history.component';
import { PortComponent } from './components/port/port.component';


export const routes: Routes = [
  { path: 'score', component: ScoreComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'port', component: PortComponent },
];
