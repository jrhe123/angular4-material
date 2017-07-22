// Default Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { MyFormComponent } from './components/my-form/my-form.component';
// Dialog component
import { DialogResultExampleComponent, DialogResultExampleDialogComponent } from './components/dialog-result-example/dialog-result-example.component';

// Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';


// Services



// Material
import 'hammerjs';



@NgModule({
	// Components
	declarations: [
		AppComponent,
		MyFormComponent,
		DialogResultExampleComponent,
		DialogResultExampleDialogComponent
	],
	// Modules
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,

		// Material Modules
		BrowserAnimationsModule,
		MdInputModule,
		MdButtonModule,
		MdCheckboxModule,
		MdDatepickerModule,
		MdNativeDateModule,
		MdAutocompleteModule,
		MdRadioModule,
		MdSelectModule,
		MdMenuModule,
		MdSlideToggleModule,
		MdListModule,
		MdGridListModule,
		MdCardModule,
		MdTabsModule,
		MdChipsModule,
		MdIconModule,
		MdProgressSpinnerModule,
		MdProgressBarModule,
		MdDialogModule,
		MdTooltipModule
	],
	// Services
	providers: [

	],
	bootstrap: [
		AppComponent, 
		
	],
	// Dialog compoent
	entryComponents: [
		DialogResultExampleDialogComponent
	]
})
export class AppModule { }
