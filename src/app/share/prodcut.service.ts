import {Injectable} from '@angular/core';

@Injectable()
export class ProdcutService {
  getCommentsForProductId(id: number): Comment[] {

    return this._comments.filter((comment: Comment) => comment.productId == id);
  }

  set comments(value: Comment[]) {
    this._comments = value;
  }

  getAllCategories():string[]{
    return ['电子产品', '硬件产品', '美容产品']
  }

  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，我在学习金融杠杆', ['电子产品', '硬件产品', '美容产品']),
    new Product(2, '第2个商品', 1.99, 3.5, '这是第一个商品，我在学习金融杠杆', ['电子产品', '硬件产品', '美容产品']),
    new Product(3, '第3个商品', 1.99, 3.5, '这是第一个商品，我在学习金融杠杆', ['电子产品', '美容产品']),
    new Product(4, '第4个商品', 1.99, 3.5, '这是第一个商品，我在学习金融杠杆', ['电子产品', '美容产品']),
    new Product(5, '第5个商品', 1.99, 3.5, '这是第一个商品，我在学习金融杠杆', ['电子产品', '硬件产品', '美容产品']),
    new Product(6, '第6个商品', 1.99, 3.5, '这是第一个商品，我在学习金融杠杆', ['电子产品', '硬件产品', '美容产品']),
  ];
  private _comments: Comment[] = [
    new Comment(1, 1, '2017-02-02 22:22:22', '张三', 3, '东西不错'),
    new Comment(2, 2, '2017-02-02 22:22:22', '张三', 3, '东西不错'),
    new Comment(3, 3, '2017-02-02 22:22:22', '张三', 3, '东西不错'),
    new Comment(4, 4, '2017-02-02 22:22:22', '张三', 3, '东西不错'),
    new Comment(1, 1, '2017-03-03 22:22:22', '李四', 3, '东西真的不错'),
    new Comment(2, 2, '2017-03-03 22:22:22', '李四', 3, '东西真的不错'),
    new Comment(3, 3, '2017-03-03 22:22:22', '李四', 3, '东西真的不错'),
    new Comment(4, 4, '2017-03-03 22:22:22', '李四', 3, '东西真的不错'),
  ];

  constructor() {
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }
}

export class Product {
  constructor(public id: number, public title: String,
              public price: number,
              public rating: number, public desc: string, public categories: Array<string>) {
  }
}
export class Comment {
  constructor(public id: number, public productId: number,
              public timestamp: string,
              public user: string, public rating: number, public content: string) {
  }
}
