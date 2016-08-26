import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TreeViewDemo } from './treeview/tree-view-demo';
import { TreeView } from './treeview/tree-view';
export class AppModule {
}
/** @nocollapse */
AppModule.decorators = [
    { type: NgModule, args: [{
                imports: [BrowserModule],
                declarations: [AppComponent, TreeViewDemo, TreeView],
                bootstrap: [AppComponent]
            },] },
];
