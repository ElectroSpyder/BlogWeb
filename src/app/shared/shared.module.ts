import { NgModule } from "@angular/core";
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
declarations:[
    NopagefoundComponent,    
    HeaderComponent,
    SidebarComponent
],
exports :[
    NopagefoundComponent,    
    HeaderComponent,
    SidebarComponent
]
})


export class SharedModule{

}