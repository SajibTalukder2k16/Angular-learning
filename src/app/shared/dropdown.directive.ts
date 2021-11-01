import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropDown]'
})
export class DropDownDirective{
    
    @HostBinding('class.open') isOpen = false
    @HostListener('click') toggleOpen(){
        if(this.isOpen===false)
        {
            this.isOpen=true;
        }
        else{
            this.isOpen=false;
        }
        console.log("Sajib Talukder",this.isOpen);
    }
}