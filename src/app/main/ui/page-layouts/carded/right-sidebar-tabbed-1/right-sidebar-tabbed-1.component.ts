import { Component } from '@angular/core';

import { HelixSidebarService } from '@helix/components/sidebar/sidebar.service';

@Component({
    selector   : 'carded-right-sidebar-tabbed-1',
    templateUrl: './right-sidebar-tabbed-1.component.html',
    styleUrls  : ['./right-sidebar-tabbed-1.component.scss']
})
export class CardedRightSidebarTabbed1Component
{
    /**
     * Constructor
     *
     * @param {HelixSidebarService} _helixSidebarService
     */
    constructor(
        private _helixSidebarService: HelixSidebarService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar
     *
     * @param name
     */
    toggleSidebar(name): void
    {
        this._helixSidebarService.getSidebar(name).toggleOpen();
    }
}
