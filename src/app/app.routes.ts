import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {PrivateComponent} from "./private/private.component";

export const routes =[
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'private', component: PrivateComponent }
];
