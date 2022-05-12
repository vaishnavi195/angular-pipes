import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class AppCustomPipe implements PipeTransform {
  transform(value, text) {
    return value + 'vaishu' + text;
  }
}

@Pipe({
  name: 'impure',
  pure: false,
})
export class AppimpurePipe implements PipeTransform {
  transform(value, field,filtervalue) {
    if (value && value.length>0){
      return value.filter(x=>x[field]==filtervalue)
    }
    else
    return[]
  }
}
