import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: "app-product",
    templateUrl: './product.components.html',
    template: `<p>this is the product <strong>{{ productName }}</strong> with id <strong>{{ productId }}</strong></p>`,
    styleUrls:['./product.components.scss']
})
export class ProductComponent implements OnInit,OnDestroy {
    productName: string = "Samsung";
    productId: string = "p-123";
    productStatus:string="Dispatched";
    res:string=`<strong>I Love Angular</strong>`;
    ngOnInit(): void {
        console.log("the product is init")
    }
    ngOnDestroy(): void {
         
    }
}