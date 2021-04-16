import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/timeout';

@Injectable()
export class BaseService  {

  urlBase: any;

    private TIMEOUT: number = 20000;

    private arrParams: any = [];
    private urlOficial: string;

    private mensagemSemConexao: string = 'Sem conexão de dados.';
    private mensagemServicoIndisponivel: string = 'O acesso ao serviço está impossibilitado no momento.';
    private mensagemErroSalvarDados: string = 'Não foi possível salvar os dados.';
    private mensagemErroExcluirDados: string = 'Não foi possível excluir os dados.';
    private mensagemTimeout: string = 'Não foi possível realizar sua solicitação. Tente novamente mais tarde';

    constructor(
      private http: Http,
      private storage: Storage
    ) {
        this.arrParams = [];
    }

    get(url: string, options?: RequestOptions) {
        if (!this.isOnline()) {
            return new Promise((resolve: any, reject: any) => {
              resolve(null);
              reject(this.mensagemSemConexao);
            });
        }

        options = this.montarOptions(options);

        return new Promise((resolve: any, reject: any) => {
                this.http.get(this.getUrl() + url, options).subscribe((data: any) => {
                    try {
                        this.storage.set(url, JSON.stringify(data.json()));
                        resolve(data.json());
                    } catch (error) {
                        console.log('Erro = ', error);
                        reject(error);
                    }
                }, (error: any) => {
                    console.log('Erro = ', error);
                    reject('Não foi possível recuperar os dados.');
                });
        });
    }

    post(url: string, body: any, options?: RequestOptions) {
        if (!this.isOnline()) {
            return new Promise((resolve: any, reject: any) => {
              resolve(null);
              reject(this.mensagemSemConexao);
            });
        }

        options = this.montarOptions(options);

        this.arrParams.push(url);
        this.arrParams.push(body);
        this.arrParams.push(options);

        return new Promise((resolve, reject) => {
            this.http.post(this.getUrl() + url, body, options).timeout(this.TIMEOUT).subscribe((data) => {
                try {
                    let dados = data.json();
                    if (dados.sucesso) {
                        resolve(dados);
                    } else {
                        reject(dados.mensagem);
                    }
                } catch (error) {
                    console.log('Erro = ', error);
                    reject(error);
                }
            }, (error) => {
                console.log('POST error = ', error);

                if (typeof error === 'string' && error.toLowerCase().indexOf('timeout') !== -1) {
                    reject(this.mensagemTimeout);
                    return;
                } else if (error && error.status === 403) {
                } else {
                    console.log('ERROR GERAL ');
                    reject(this.mensagemErroSalvarDados);
                }
            });
        });
    }

    delete(url: string, options?: RequestOptions) {
        if (!this.isOnline()) {
            return new Promise((resolve: any, reject: any) => {
              resolve(null);
              reject(this.mensagemSemConexao);
            });
        }

        options = this.montarOptions(options);

        this.arrParams.push(url);
        this.arrParams.push(options);

        return new Promise((resolve, reject) => {
            this.http.delete(this.getUrl() + url, options).timeout(this.TIMEOUT).subscribe(() => {
                resolve();
            }, (error) => {

                if (typeof error === 'string' && error.toLowerCase().indexOf('timeout') !== -1) {
                    reject(this.mensagemTimeout);
                    return;
                } else if (error && error.status === 403) {
                } else {
                    console.log('ERROR GERAL ');
                    reject(this.mensagemErroExcluirDados);
                }
            });
        });
    }

    put(url: string, body: any, options?: RequestOptions) {
        if (!this.isOnline()) {
            return new Promise((resolve: any, reject: any) => {
              resolve(null);
              reject(this.mensagemSemConexao);
            });
        }

        options = this.montarOptions(options);

        this.arrParams.push(url);
        this.arrParams.push(body);
        this.arrParams.push(options);

        return new Promise((resolve, reject) => {
            this.http.put(this.getUrl() + url, body, options).timeout(this.TIMEOUT).subscribe(() => {
                resolve();
            }, (error) => {

                if (typeof error === 'string' && error.toLowerCase().indexOf('timeout') !== -1) {
                    reject(this.mensagemTimeout);
                    return;
                } else if (error && error.status === 403) {
                } else {
                    console.log('ERROR GERAL ');
                    reject(this.mensagemServicoIndisponivel);
                }
            });
        });
    }

    public montarOptions(options: any) {
        if (!options) {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            options = new RequestOptions({ headers: headers });
        }
        return options;
    }

    public isOnline() {
        /*if (this.network.type === 'unknown' || this.network.type === 'none') {
            return false;
        }*/
        return true;
    }

    getUrl() {
        this.urlOficial = this.urlBase;
        return this.urlOficial;
    }

}
