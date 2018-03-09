import {
    ModuleWithProviders, Optional, SkipSelf, NgModule, SystemJsNgModuleLoader
} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { ClarityModule } from '@clr/angular';
import { DragulaModule } from 'ng2-dragula';
import { SharedModule } from '../shared/shared.module';

import { DatabaseService } from './database.service';
import { TimersService } from './timers.service';
import { EventBusService } from './event-bus.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DynamicWidgetComponent } from './dynamic-widget/dynamic-widget.component';
import { DashboardContainerResizeFormComponent } from './dashboard/dashboard-container-resize-form/dashboard-container-resize-form.component';

@NgModule({
    imports: [
        HttpClientModule,
        ClarityModule.forRoot(),
        FormsModule,
        DragulaModule,
        SharedModule
    ],
    declarations: [
        DashboardComponent,
        DynamicWidgetComponent,
        DashboardContainerResizeFormComponent,
    ],
    providers: [
        SystemJsNgModuleLoader,
        DatabaseService,
        TimersService,
        EventBusService
    ],
    exports: [
        DashboardComponent
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('Tried loading CoreModule more than once.')
        }
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: []
        }
    }
}
