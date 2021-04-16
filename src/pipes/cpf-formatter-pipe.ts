import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cpfFormatter' })
export class CpfFormatterPipe implements PipeTransform {

    transform(value: string): string {
        if (!value) {
            return '';
        }

        if (value.replace(/\D/g,'').length <= 11) {
            value = value.replace(/\D/g,'');
            value = value.replace(/(\d{3})(\d)/,'$1.$2');
            value = value.replace(/(\d{3})(\d)/,'$1.$2');
            value = value.replace(/(\d{3})(\d)/,'$1-$2');
            return value;
        }

        value = value.replace(/\D/g,'');
        value = value.replace(/(\d{4})(\d)/,'$1.$2');
        value = value.replace(/(\d{4})(\d)/,'$1.$2');
        value = value.replace(/(\d{4})(\d)/,'$1.$2');
        return value;
    }

}
