import { PipeTransform,Pipe } from "@angular/core";


@Pipe({
    name:'custom'
})
export class CustomPipe implements PipeTransform{

    transform(value:any)
    {
        return value.substr(0,3);
    }

}