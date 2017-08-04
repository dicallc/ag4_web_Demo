import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Product, ProdcutService, Comment} from "../share/prodcut.service";
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  protected comment_ratting: number;
  product: Product;
  comments: Comment[];
  productTitle: string;
  newComment: string;

  constructor(private  routeInfo: ActivatedRoute, private productService: ProdcutService) {
  }

  ngOnInit() {
    let productId: number = this.routeInfo.snapshot.params['productId'];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }

  addComment() {
    console.log("asdasdad");

    let comment = new Comment(0, this.product.id, new Date().toString(), 'someone', this.comment_ratting, this.newComment);
    this.comments.unshift(comment);

    let sum=this.comments.reduce((sum,comment)=>sum+comment.rating,0);
    this.product.rating=sum/this.comments.length;
  }
}
