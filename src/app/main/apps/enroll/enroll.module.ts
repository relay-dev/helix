import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule, MatSlideToggleModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

import { HelixSharedModule } from '@helix/shared.module';

import { EnrollComponent } from 'app/main/apps/enroll/enroll.component';

const routes = [
    {
        path     : '**',
        component: EnrollComponent
    }
];

@NgModule({
    declarations: [
        EnrollComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,

        HelixSharedModule,
    ],
    exports     : [
        EnrollComponent
    ]
})

export class EnrollModule
{
}
