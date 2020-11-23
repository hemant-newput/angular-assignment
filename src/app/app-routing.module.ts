import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FormComponent } from './form/form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IsbnComponent } from './isbn/isbn.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"isbn/:isbn",component:IsbnComponent},
  {path:"category/:name",component:ContentComponent},
  {path:"login-form",component:FormComponent},
  {path:"**",component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
