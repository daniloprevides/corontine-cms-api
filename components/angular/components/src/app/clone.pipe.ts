import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clone'
})
export class ClonePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return Object.assign({} as any, value);
  }

}
