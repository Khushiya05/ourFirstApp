import { Component, OnInit } from "@angular/core";



@Component({
    selector:"app-products",
    templateUrl:'./products.component.html',
    styleUrls:['./products.component.scss']
})
export class  productsComponent implements OnInit{
isDisable:boolean=true;
ngOnInit(): void {
    setTimeout(()=>{
this.isDisable=false;
    },3000)
}
}