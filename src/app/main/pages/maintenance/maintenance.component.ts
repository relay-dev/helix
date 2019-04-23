import { Component, ViewEncapsulation } from '@angular/core';

import { HelixConfigService } from '@helix/services/config.service';
import { helixAnimations } from '@helix/animations';

@Component({
    selector     : 'maintenance',
    templateUrl  : './maintenance.component.html',
    styleUrls    : ['./maintenance.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : helixAnimations
})
export class MaintenanceComponent
{
    /**
     * Constructor
     *
     * @param {HelixConfigService} _helixConfigService
     */
    constructor(
        private _helixConfigService: HelixConfigService
    )
    {
        // Configure the layout
        this._helixConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }
}
