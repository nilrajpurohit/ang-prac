import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropBindComponent } from './prop-bind/prop-bind.component';
import { ClassBindComponent } from './class-bind/class-bind.component';
import { StyleBindComponent } from './style-bind/style-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { TempRefComponent } from './temp-ref/temp-ref.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { IfElseStatComponent } from './if-else-stat/if-else-stat.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { ParentComponent } from './component-interaction/parent/parent.component';
import { ChildComponent } from './component-interaction/child/child.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { ReverseStringPipe } from './reverse-string.pipe';

@NgModule({
  declarations:[
    AppComponent,
    PropBindComponent,
    ClassBindComponent,
    StyleBindComponent,
    EventBindComponent,
    TempRefComponent,
    TwoWayBindComponent,
    IfElseStatComponent,
    SwitchCaseComponent,
    ForLoopComponent,
    ParentComponent,
    ChildComponent,
    BuiltInPipesComponent,
    CustomPipeComponent,
    ReverseStringPipe
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers:[],
  bootstrap:[AppComponent]  
})

export class AppModule{}