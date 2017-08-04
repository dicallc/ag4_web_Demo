import { ProdcutService } from './share/prodcut.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {SearchComponent} from './search/search.component';
import {CarouselComponent} from './carousel/carousel.component';
import {ProductComponent} from './product/product.component';
import {StarsComponent} from './stars/stars.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { FilterPipe } from './pipe/filter.pipe';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

const routeConfig: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:productId', component: ProductDetailComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ProdcutService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
