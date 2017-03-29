import { PipeTransform,Pipe } from '@angular/core'

@Pipe({
    name: 'reverseOrderText'
})

export class ReverseCustomPipe implements PipeTransform {

    transform(value:string):string {
        return (value != null) ? value.split("").reverse().join(""): "";
    }


}