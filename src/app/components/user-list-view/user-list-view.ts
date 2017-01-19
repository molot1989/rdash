import {Component, OnInit} from '@angular/core';

import {UserListService} from '../../services/user-list.service';

@Component({
    selector: 'user-list-view',
    templateUrl: './user-list-view.html',
})
export class UserListView implements OnInit{

    model:any[];

    constructor(private userListService:UserListService) {
    }

    ngOnInit() {
        this.model = this.userListService.all();    
    }
}
