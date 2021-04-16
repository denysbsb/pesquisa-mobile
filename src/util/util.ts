import * as moment from 'moment';

export class Util {

    // static PATH_SD_CARD:string = 'file://mnt/sdcard/Download/';
    // static PATH_SD_CARD:string = 'file://mnt/sdcard/outros/json/';
    // static PATH_SD_CARD:string = 'file://mnt/sdcard/Download/teste/';
    static PATH_SD_CARD: any = 'file://mnt/sdcard/outros/';

    static indexOfSemAcentos(variavel1: any, variavel2: any) {
        variavel1 = this.removerAcentos(variavel1.toLowerCase());
        variavel2 = this.removerAcentos(variavel2.toLowerCase());
        return variavel1.indexOf(variavel2) > -1;
    }

    static removerAcentos(value: any) {
        value = value.replace(/[âáã]/g, 'a');
        value = value.replace(/[êé]/g, 'e');
        value = value.replace(/[îí]/g, 'i');
        value = value.replace(/[ôóõ]/g, 'o');
        value = value.replace(/ú/g, 'u');
        value = value.replace(/ç/g, 'c');

        return value;
    }

    static removerCharacteresNaoNumericos(valor: any) {
        return valor.replace(/\D/g, '');
    }

    static getDescricao(obj: any) {
        let retorno = ' - ';

        if (obj && obj.length > 0) {
            retorno = obj[0].descricao;
        }

        return retorno;
    }

    static convertListToMap(lista: any) {
        let result = null;

        if (lista) {
            result = lista.reduce(function(map: any, obj: any) {
                map[obj.id] = obj;
                return map;
            }, {});
        }

        return result;
    }

    static formatarData(value: string | number, formatoSaida?: string): string {
        if (!value) {
            return '';
        }

        if (formatoSaida == null) {
            formatoSaida = 'DD/MM/YYYY';
        }

        if (typeof value === 'number') {
            return moment(new Date(value)).format(formatoSaida);
        }

        if (value.length > 10) {
            return moment(value, 'YYYY-MM-DD HH:mm:ss').format(formatoSaida);
        }

        return moment(value, 'YYYY-MM-DD').format(formatoSaida);
    }

    static transformarDataStringToMillis(data: any) {
        let dataCadastroLong, parts, dataCadastro;

        if (data.indexOf('-')) {
            parts = data.split('-');
            dataCadastro = new Date(parts[0], parts[1] - 1, parts[2]);
        } else {
            parts = data.split('/');
            dataCadastro = new Date(parts[2], parts[1], parts[0]);
        }

        dataCadastroLong = dataCadastro.getTime();

        return dataCadastroLong;
    }

    static transformarDataStringToDate(data: any) {
        let parts, dataCadastro;

        if (data.indexOf('-')) {
            parts = data.split('-');
            dataCadastro = new Date(parts[0], parts[1] - 1, parts[2]);
        } else {
            parts = data.split('/');
            dataCadastro = new Date(parts[2], parts[1], parts[0]);
        }

        return dataCadastro;
    }

    static transformarMillisToData(dataMillis: any, formatoSaida?: any) {
        if (formatoSaida == null) {
            formatoSaida = 'YYYY-MM-DD';
        }
        return Util.formatarData(dataMillis, formatoSaida);
    }

    static contains(array: any, element: any) {
        if (array) {
            let i = array.length;
            while (i--) {
                if (array[i] === element) {
                    return true;
                }
            }
        }

        return false;
    }

    static treatAsUTC(date: any): any {
        var result = new Date(date);
        result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
        return result;
    }

    static daysBetween(startDate: any, endDate: any) {
        var millisecondsPerDay = 24 * 60 * 60 * 1000;
        return Math.round((endDate - startDate) / millisecondsPerDay);
    }

    static showToast(toastCtrl: any, msg: any) {
        Util.showToastByPosition(toastCtrl, msg, null);
    }

    static showToastWithCloseButtonAndPosition(toastCtrl: any, msg: any, position: any) {
        if (!position) {
            position = 'top';
        }

        let css = '';

        if (msg.indexOf('sucesso') !== -1) {
            css = 'toast-sucesso';
        } else if (msg.indexOf('Info') !== -1) {
            css = 'toast-info';
        } else {
            css = 'toast-erro';
        }

        const toast = toastCtrl.create({
            message: msg,
            showCloseButton: true,
            closeButtonText: 'Ok',
            position: position,
            cssClass: css,
        });

        toast.present();
    }

    static showToastWithCloseButton(toastCtrl: any, msg: any) {

        let css = '';

        if (msg.indexOf('sucesso') !== -1) {
            css = 'toast-sucesso';
        } else if (msg.indexOf('Info') !== -1) {
            css = 'toast-info';
        } else {
            css = 'toast-erro';
        }

        const toast = toastCtrl.create({
            message: msg,
            showCloseButton: true,
            closeButtonText: 'Ok',
            position: 'top',
            cssClass: css,
        });

        toast.present();
    }

    static showToastByPosition(toastCtrl: any, msg: any, position: any) {
        if (!position) {
            position = 'top';
        }

        let toast = toastCtrl.create({
            message: msg,
            duration: 2000,
            position: position
        });

        toast.present(toast);
    }

    static definirStatusNumeroProcesso(processoOriginal: any) {
        let statusProcesso = processoOriginal.atributos.status;
        let colorProcesso  = '';

        let sigiloso = statusProcesso.documentoSigiloso;
        // let acessadoUnidade  = statusProcesso.processoAcessadoUnidade;
        let acessadoUsuario  = statusProcesso.processoAcessadoUsuario;

        if (sigiloso && sigiloso === 'S') {
            colorProcesso = 'sigiloso-';
        } else  {
            colorProcesso = 'nao-sigiloso-';
        }

        if (acessadoUsuario && acessadoUsuario === 'S') {
            colorProcesso += 'acessado-usuario';
        } else  {
            colorProcesso += 'nao-acessado-usuario';
        }

        return colorProcesso;
    }

    static getDiretorioArquivosHtml() {
        return 'seiFilesHtml';
    }

    static exibirComponente(atributo: any) {
        if (Util.isAtributoValorPositivo(atributo)) {
            return false;
        }

        return true;
    }

    static isAtributoValorPositivo(atributo: any) {
        return (atributo && atributo === 'S');
    }

  static getPathSDCard() {
    return Util.PATH_SD_CARD;
  }

  static isUseServiceByJsonFile(platform: any) {
    return (platform.is('core') || platform.is('mobileweb'));
  }

  static isTablet(platform: any) {
    return (platform.is('ipad') || platform.is('phablet') || platform.is('tablet') );
  }
}
