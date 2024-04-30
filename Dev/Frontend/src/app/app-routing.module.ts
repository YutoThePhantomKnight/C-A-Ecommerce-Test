import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Componentes
import { ListProductsComponent } from "./components/list-products/list-products.component";

const routes: Routes= [
    {path:'/', component: ListProductsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}