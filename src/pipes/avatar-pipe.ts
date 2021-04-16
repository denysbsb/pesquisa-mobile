import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'avatar' })
export class AvatarPipe implements PipeTransform {

    transform(value: any): any {
        if (!value) {
            return;
        }
        value = value.substr(0, 2).toLocaleUpperCase();

        return value;
    }

}
