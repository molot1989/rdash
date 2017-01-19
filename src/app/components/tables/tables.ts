import {Component, OnInit} from '@angular/core';

import {ServerListService} from '../../services/server-list.service';


@Component({
    selector: 'tables',
    templateUrl: './tables.html',
})
export class Tables implements OnInit{
    servers:any[];

    constructor(private serverListService:ServerListService) {
    }
    
    ngOnInit() {
        this.servers = this.serverListService.all();
    }
}
