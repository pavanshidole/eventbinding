import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector:"app-product",
    templateUrl:"./product.component.html",
    styleUrls:["./product.component.scss"],
})

export class ProductComponent{
    @ViewChild("productName") pn !:ElementRef
    onKeyForm(eve:Event){
        let val:string=(eve.target as HTMLInputElement).value;
        console.log(val);
    }

    onBtnClick(pavan: HTMLInputElement){
        console.log(pavan.value);
        // console.log(this.pn.nativeElement.value)
    }

    onShowBtn(show:HTMLElement){
        show.classList.remove("d-none");
    }

    onHideBtn(hide:HTMLElement){
        hide.classList.add("d-none");
    }


    onToggleBtn(toggle:HTMLElement){
        toggle.classList.toggle("d-none");
    }

    onHideShowBtn(hideShow:HTMLElement, btn:Event){
        if(hideShow.classList.contains("d-none")){
            hideShow.classList.remove("d-none");
           let val:string = (btn.target as HTMLElement).innerHTML="hide";
        }else{
            hideShow.classList.add("d-none");
            let val:string = (btn.target as HTMLElement).innerHTML="show"
        }
    }
}