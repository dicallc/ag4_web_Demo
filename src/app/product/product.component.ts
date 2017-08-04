import { ProdcutService, Product } from './../share/prodcut.service';
import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import 'rxjs/Rx'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  protected products:Product[];
  private keyword:string;

  private titleFilter:FormControl=new FormControl();

  constructor(private service:ProdcutService) {
    this.titleFilter.valueChanges.debounceTime(500).subscribe(
      value=>this.keyword=value
    );
  }

  ngOnInit() {
    this.products=this.service.getProducts();
  }

}


