import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';

const routes: Routes = [
    { path: '', component: CadastroUsuarioComponent}
]

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})

export class CadastroUsuarioRoutingModule {}