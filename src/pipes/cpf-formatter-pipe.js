"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CpfFormatterPipe = (function () {
    function CpfFormatterPipe() {
    }
    CpfFormatterPipe.prototype.transform = function (value) {
        if (!value) {
            return '';
        }
        if (value.replace(/\D/g, '').length <= 11) {
            value = value.replace(/\D/g, '');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1-$2');
            return value;
        }
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{4})(\d)/, '$1.$2');
        value = value.replace(/(\d{4})(\d)/, '$1.$2');
        value = value.replace(/(\d{4})(\d)/, '$1.$2');
        return value;
    };
    CpfFormatterPipe = __decorate([
        core_1.Pipe({ name: 'cpfFormatter' })
    ], CpfFormatterPipe);
    return CpfFormatterPipe;
}());
exports.CpfFormatterPipe = CpfFormatterPipe;
