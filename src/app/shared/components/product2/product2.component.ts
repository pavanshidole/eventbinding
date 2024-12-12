import { Component } from "@angular/core";


@Component({
    selector:"app-product2",
    templateUrl:"./product2.component.html",
    styleUrls:["./product2.component.scss"],
})

export class Product2Component{
    onMouse(eve:Event){
        let val:string=(eve.target as HTMLElement).style.backgroundColor= "green";
        let val1:string=(eve.target as HTMLElement).style.borderRadius="50%";
    }

    mouseOut(eve:Event){
        let val:string=(eve.target as HTMLElement).style.backgroundColor="orange";
        let val1:string=(eve.target as HTMLElement).style.borderRadius="0"
    }
}