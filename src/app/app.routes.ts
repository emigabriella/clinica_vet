import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorComponent } from './error/error.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';
import { DatosPCComponent } from './datos-p-c/datos-p-c.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { ResgistroSesionComponent } from './componentes/resgistro-sesion/resgistro-sesion.component';
import { LoginComponent } from './login/login.component';
import { ServiciosVComponent } from './componentes/servicios-v/servicios-v.component';
import { RegistroDatosComponent } from './registro-datos/registro-datos.component';


export const routes: Routes = [
  {path: "", component: InicioComponent},
  {path:"servicios", component: ServiciosVComponent},
  {path: "sobre_nosotros", component: SobreNosotrosComponent},
  {path:"contacto", component: ContactoComponent},

  {path:"registro", component: RegistroComponent},
  {path:"datos", component: DatosPCComponent},
  {path:"registro-datos", component: RegistroDatosComponent},

  {path:"login", component: LoginComponent},
  {path:"registro_sesion", component: ResgistroSesionComponent},

  {path:"eliminar/:id", component: EliminarComponent},
  {path:"actualizar/:id", component: ActualizarComponent},


  {path: "**", component: ErrorComponent}
];
