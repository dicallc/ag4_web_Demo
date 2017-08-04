import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;

  constructor() {
  }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，我在学习金融杠杆', ['电子产品', '硬件产品', '美容产品']),
      new Product(2, '第2个商品', 1.99, 3.5, '这是第一个商品，我在学习金融杠杆', ['电子产品', '硬件产品', '美容产品']),
      new Product(3, '第3个商品', 1.99, 3.5, '这是第一个商品，我在学习金融杠杆', ['电子产品', '硬件产品', '美容产品']),
      new Product(4, '第4个商品', 1.99, 3.5, '这是第一个商品，我在学习金融杠杆', ['电子产品', '硬件产品', '美容产品']),
      new Product(5, '第5个商品', 1.99, 3.5, '这是第一个商品，我在学习金融杠杆', ['电子产品', '硬件产品', '美容产品']),
      new Product(6, '第6个商品', 1.99, 3.5, '这是第一个商品，我在学习金融杠杆', ['电子产品', '硬件产品', '美容产品']),
    ];
  }

}

export class Product {
  constructor(public id: number, public title: String,
              public price: number,
              public ratting: number, public desc: string, public categories: Array<string>) {
  }
}
