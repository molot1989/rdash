import { Component, Input } from '@angular/core';
@Component({
    selector: 'rd-widget-body',
    templateUrl: './rd-widget-body.html'
})
export class RdWidgetBody {
    @Input()
    loading:boolean;

    @Input()
    classes:string;

    constructor() {
        this.loading = false;
        this.classes = '';
    }
}
