import { Pipe, PipeTransform } from '@angular/core';
import { Util } from '../util/util';

@Pipe({ name: 'dataFormatter' })
export class DataFormatterPipe implements PipeTransform {

    transform(value: string | number, formatoSaida?: string): string {
        return Util.formatarData(value, formatoSaida);
    }

}
