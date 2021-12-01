import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardDemoComponent } from "./card-demo/card-demo.component";
import { HomeComponent } from "./home/home.component";


const routes:Routes=[
{path:'',component:HomeComponent},
{path:'cardDemo',component:CardDemoComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
