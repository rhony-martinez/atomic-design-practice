import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.page';
import { CategoriasPageComponent } from './pages/categorias/categorias.page';
import { ProductosPageComponent } from './pages/productos/productos.page';
import { SolicitudesPageComponent } from './pages/solicitudes/solicitudes.page';
import { MedicosPageComponent } from './pages/medicos/medicos.page';

export const routes: Routes = [
    { path: '', component: HomePageComponent},
    { path: 'categorias', component: CategoriasPageComponent},
    { path: 'productos', component: ProductosPageComponent},
    { path: 'solicitudes', component: SolicitudesPageComponent},
    { path: 'medicos', component: MedicosPageComponent},
    { path: '**', redirectTo: '' },
];
