import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatInputModule, MatCardModule, MatProgressSpinnerModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatProgressSpinnerModule],
    exports: [MatButtonModule, MatToolbarModule, MatInputModule,MatCardModule, MatProgressSpinnerModule]
})

// tslint:disable-next-line:eofline
export class MaterialModule { }