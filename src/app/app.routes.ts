import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ErrorComponent } from './componentes/error/error.component';


export const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "**", component: ErrorComponent}
];
