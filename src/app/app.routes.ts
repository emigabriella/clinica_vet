import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorComponent } from './error/error.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';
import { DatosPCComponent } from './datos-p-c/datos-p-c.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { ResgistroSesionComponent } from './resgistro-sesion/resgistro-sesion.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "sobre_nosotros", component: SobreNosotrosComponent},
  {path:"contacto", component: ContactoComponent},
  {path:"registro", component: RegistroComponent},
  {path:"inicio_sesion", component: LoginComponent},
  {path:"datos", component: DatosPCComponent},
  {path:"eliminar", component: EliminarComponent},
  {path:"actualizar", component: ActualizarComponent},
  {path:"registro_sesion", component: ResgistroSesionComponent},
  {path: "**", component: ErrorComponent}
];
