import { Component, OnInit } from '@angular/core';

import {Alerts} from '../alerts/alerts';

import {RdLoading} from '../rd-loading/rd-loading';
import {RdWidget} from '../rd-widget/rd-widget';

import {RdWidgetHeader} from '../rd-widget-header/rd-widget-header';
import {RdWidgetBody} from '../rd-widget-body/rd-widget-body';
import {RdWidgetFooter} from '../rd-widget-footer/rd-widget-footer';

import {ServerListView} from '../server-list-view/server-list-view';
import {ServerListService} from '../../services/server-list.service';

import {UserListView} from '../user-list-view/user-list-view';
import {UserListService} from '../../services/user-list.service';


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit{
    servers:any[];
    users:any[];

    constructor(private serverListService:ServerListService, private userListService:UserListService) {
        // this.serverListService = serverListService;
        // this.userListService = userListService;
    }

    ngOnInit() {
        this.servers = this.serverListService.all();
        this.users = this.userListService.all();
        
    }
}
