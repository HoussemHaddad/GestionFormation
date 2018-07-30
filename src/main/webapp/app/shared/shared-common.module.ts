import { NgModule } from '@angular/core';

import { GestionFormationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GestionFormationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GestionFormationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GestionFormationSharedCommonModule {}
