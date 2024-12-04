import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ErrorComponent } from './componentes/error/error.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { DatosPCComponent } from './componentes/datos-p-c/datos-p-c.component';
import { EliminarComponent } from './componentes/eliminar/eliminar.component';
import { ActualizarComponent } from './componentes/actualizar/actualizar.component';
import { LoginComponent } from './componentes/login/login.component';
import { ServiciosVComponent } from './componentes/servicios-v/servicios-v.component';
import { RegistroDatosComponent } from './componentes/registro-datos/registro-datos.component';
import { LoginGuardian } from './componentes/login/login-guardian';



export const routes: Routes = [
  {path: "", component: InicioComponent},
  {path:"servicios", component: ServiciosVComponent},
  {path: "sobre_nosotros", component: SobreNosotrosComponent},
  {path:"contacto", component: ContactoComponent},
  {path:"registro", component: RegistroComponent, canActivate: [LoginGuardian]},
  {path:"datos", component: DatosPCComponent,canActivate: [LoginGuardian]},
  {path:"registro-datos", component: RegistroDatosComponent,canActivate: [LoginGuardian]},
  {path:"actualizar/:id", component: ActualizarComponent,canActivate: [LoginGuardian]},
  {path:"eliminar/:id", component: EliminarComponent,canActivate: [LoginGuardian]},
  {path:"login", component: LoginComponent},
  {path: "**", component: ErrorComponent}
];
