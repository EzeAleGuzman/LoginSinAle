import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RecoveryComponent } from './componentes/recovery/recovery.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { EnviarMailComponent } from './componentes/enviar-mail/enviar-mail.component';
import { EnviadoComponent } from './enviado/enviado.component';

export const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
    },

    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'recovery',
        component: RecoveryComponent,
    }, 
    {
        path: 'Menu',
        component: MenuPrincipalComponent,
    },
    {
        path: 'enviarEmail',
        component: EnviarMailComponent,
    },
    {
        path: 'enviado',
        component: EnviadoComponent,
    },
];
