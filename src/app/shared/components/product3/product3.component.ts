import { Component } from "@angular/core";



@Component({
    selector:"app-product3",
    templateUrl:"./product3.component.html",
    styleUrls:["./product3.component.scss"],
})

export class Product3Component{
    onMouse(eve:any){
        let val:string=(eve.target as HTMLElement).style.backgroundColor=`rgb(255, ${eve.offsetX}, ${eve.offsetY})`

        // console.log(eve);
    }
}