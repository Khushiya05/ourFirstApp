import { Component, OnInit } from "@angular/core";



@Component({
    selector:"app-products",
    templateUrl:'./products.component.html',
    styleUrls:['./products.component.scss']
})
export class  productsComponent implements OnInit{
isDisable:boolean=true;
cartProductStatus:string=`  No product is added to the cart.`;
noofProductsAdded:number=0;
searchProduct:string='No product is search';
newsearchProduct:string='No product is search';
ngOnInit(): void {
    setTimeout(()=>{
this.isDisable=false; 
    },3000)
}
updateCartStatus(){
    console.log("clicked")
    this.noofProductsAdded++;;
    this.cartProductStatus=`${this.noofProductsAdded} product is added to the cart`;
}
removeCartStatus(){
    console.log("clicked")
    this.noofProductsAdded--;;
    if(this.noofProductsAdded<1){
        this.cartProductStatus=`no product is added to the cart`;
    }else{
        this.cartProductStatus=`${this.noofProductsAdded} product is added to the cart`;
    }
}
onProductSearch(eve:Event){
    let val=(eve.target as HTMLInputElement).value;
    // console.log(val)
    this.searchProduct=val;
}
}