import {Component} from '@angular/core';
import {ServerListService} from '../../services/server-list.service';

@Component({
    selector: 'server-list-view',
    templateUrl: './server-list-view.html'
})
export class ServerListView {

    model:any[];


    constructor(private serverListService:ServerListService) {
    }
    
    ngOnInit() {
        this.model = this.serverListService.all();
    }
}
