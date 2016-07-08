/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from './tree-view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/common/src/directives/ng_for';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/core/src/linker/template_ref';
import * as import10 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/common/src/directives/ng_if';
import * as import13 from '@angular/core/src/linker/component_factory';
const styles_TreeView:any[] = [];
var renderType_TreeView:import0.RenderComponentType = null;
class _View_TreeView0 extends import1.AppView<import2.TreeView> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  private _appEl_2:import3.AppElement;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import4.NgFor;
  _text_3:any;
  _text_4:any;
  private _expr_0:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement) {
    super(_View_TreeView0,renderType_TreeView,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ul',null);
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',null);
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,null);
    this._appEl_2 = new import3.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import9.TemplateRef_(this._appEl_2,viewFactory_TreeView1);
    this._NgFor_2_6 = new import4.NgFor(this._appEl_2.vcRef,this._TemplateRef_2_5,this.parentInjector.get(import10.IterableDiffers),this.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n',null);
    this._text_4 = this.renderer.createText(parentRenderNode,'\n\n',null);
    this._expr_0 = import8.uninitialized;
    this.init([],[
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._text_4
    ]
    ,[],[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import4.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.directories;
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgFor_2_6.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (!throwOnChange) { this._NgFor_2_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_TreeView0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement):import1.AppView<import2.TreeView> {
  if ((renderType_TreeView === null)) { (renderType_TreeView = viewUtils.createRenderComponentType('/Users/tor/Development/angular2-offline-compiler/src/app/treeview/tree-view.html',0,import11.ViewEncapsulation.None,styles_TreeView)); }
  return new _View_TreeView0(viewUtils,parentInjector,declarationEl);
}
class _View_TreeView1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _anchor_6:any;
  private _appEl_6:import3.AppElement;
  _TemplateRef_6_5:any;
  _NgIf_6_6:import12.NgIf;
  _text_7:any;
  private _expr_1:any;
  private _expr_3:any;
  private _expr_4:any;
  private _expr_5:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement) {
    super(_View_TreeView1,renderType_TreeView,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement(null,'li',null);
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',null);
    this._el_2 = this.renderer.createElement(this._el_0,'span',null);
    this.renderer.setElementAttribute(this._el_2,'class','iconButton');
    this._text_3 = this.renderer.createText(this._el_2,'',null);
    this._el_4 = this.renderer.createElement(this._el_0,'input',null);
    this.renderer.setElementAttribute(this._el_4,'type','checkbox');
    this._text_5 = this.renderer.createText(this._el_0,'',null);
    this._anchor_6 = this.renderer.createTemplateAnchor(this._el_0,null);
    this._appEl_6 = new import3.AppElement(6,0,this,this._anchor_6);
    this._TemplateRef_6_5 = new import9.TemplateRef_(this._appEl_6,viewFactory_TreeView2);
    this._NgIf_6_6 = new import12.NgIf(this._appEl_6.vcRef,this._TemplateRef_6_5);
    this._text_7 = this.renderer.createText(this._el_0,'\n    ',null);
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this._expr_1 = import8.uninitialized;
    this._expr_3 = import8.uninitialized;
    var disposable_1:Function = this.renderer.listen(this._el_4,'click',this.eventHandler(this._handle_click_4_0.bind(this)));
    this._expr_4 = import8.uninitialized;
    this._expr_5 = import8.uninitialized;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._anchor_6,
      this._text_7
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.TemplateRef) && (6 === requestNodeIndex))) { return this._TemplateRef_6_5; }
    if (((token === import12.NgIf) && (6 === requestNodeIndex))) { return this._NgIf_6_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_5:any = this.context.$implicit.expanded;
    if (import5.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgIf_6_6.ngIf = currVal_5;
      this._expr_5 = currVal_5;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = import5.interpolate(1,'',this.context.$implicit.getIcon(),'');
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_3,currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_3:any = this.context.$implicit.checked;
    if (import5.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementProperty(this._el_4,'checked',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = import5.interpolate(1,' ',this.context.$implicit.name,'\n        ');
    if (import5.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_5,currVal_4);
      this._expr_4 = currVal_4;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.$implicit.toggle()) !== false);
    return (true && pd_0);
  }
  private _handle_click_4_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.$implicit.check()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_TreeView1(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_TreeView1(viewUtils,parentInjector,declarationEl);
}
class _View_TreeView2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _anchor_4:any;
  private _appEl_4:import3.AppElement;
  _TemplateRef_4_5:any;
  _NgFor_4_6:import4.NgFor;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  private _appEl_7:import3.AppElement;
  _TreeView_7_4:import2.TreeView;
  _text_8:any;
  private _expr_0:any;
  private _expr_1:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement) {
    super(_View_TreeView2,renderType_TreeView,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement(null,'div',null);
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',null);
    this._el_2 = this.renderer.createElement(this._el_0,'ul',null);
    this._text_3 = this.renderer.createText(this._el_2,'\n                ',null);
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2,null);
    this._appEl_4 = new import3.AppElement(4,2,this,this._anchor_4);
    this._TemplateRef_4_5 = new import9.TemplateRef_(this._appEl_4,viewFactory_TreeView3);
    this._NgFor_4_6 = new import4.NgFor(this._appEl_4.vcRef,this._TemplateRef_4_5,this.parent.parent.parentInjector.get(import10.IterableDiffers),this.parent.parent.ref);
    this._text_5 = this.renderer.createText(this._el_2,'\n            ',null);
    this._text_6 = this.renderer.createText(this._el_0,'\n            ',null);
    this._el_7 = this.renderer.createElement(this._el_0,'tree-view',null);
    this._appEl_7 = new import3.AppElement(7,0,this,this._el_7);
    var compView_7:any = viewFactory_TreeView0(this.viewUtils,this.injector(7),this._appEl_7);
    this._TreeView_7_4 = new import2.TreeView();
    this._appEl_7.initComponent(this._TreeView_7_4,[],compView_7);
    compView_7.create(this._TreeView_7_4,[],null);
    this._text_8 = this.renderer.createText(this._el_0,'\n        ',null);
    this._expr_0 = import8.uninitialized;
    this._expr_1 = import8.uninitialized;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._anchor_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8
    ]
    ,[],[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import4.NgFor) && (4 === requestNodeIndex))) { return this._NgFor_4_6; }
    if (((token === import2.TreeView) && (7 === requestNodeIndex))) { return this._TreeView_7_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.parent.context.$implicit.files;
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgFor_4_6.ngForOf = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (!throwOnChange) { this._NgFor_4_6.ngDoCheck(); }
    const currVal_1:any = this.parent.context.$implicit.directories;
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._TreeView_7_4.directories = currVal_1;
      this._expr_1 = currVal_1;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_TreeView2(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_TreeView2(viewUtils,parentInjector,declarationEl);
}
class _View_TreeView3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  private _expr_0:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement) {
    super(_View_TreeView3,renderType_TreeView,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement(null,'li',null);
    this._text_1 = this.renderer.createText(this._el_0,'',null);
    this._expr_0 = import8.uninitialized;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return null;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import5.interpolate(1,'',this.context.$implicit,'');
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_1,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_TreeView3(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_TreeView3(viewUtils,parentInjector,declarationEl);
}
var renderType_TreeView_Host:import0.RenderComponentType = null;
class _View_TreeView_Host0 extends import1.AppView<any> {
  _el_0:any;
  private _appEl_0:import3.AppElement;
  _TreeView_0_4:import2.TreeView;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement) {
    super(_View_TreeView_Host0,renderType_TreeView_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('tree-view',rootSelector,null);
    this._appEl_0 = new import3.AppElement(0,null,this,this._el_0);
    var compView_0:any = viewFactory_TreeView0(this.viewUtils,this.injector(0),this._appEl_0);
    this._TreeView_0_4 = new import2.TreeView();
    this._appEl_0.initComponent(this._TreeView_0_4,[],compView_0);
    compView_0.create(this._TreeView_0_4,this.projectableNodes,null);
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import2.TreeView) && (0 === requestNodeIndex))) { return this._TreeView_0_4; }
    return notFoundResult;
  }
}
function viewFactory_TreeView_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_TreeView_Host === null)) { (renderType_TreeView_Host = viewUtils.createRenderComponentType('',0,null,[])); }
  return new _View_TreeView_Host0(viewUtils,parentInjector,declarationEl);
}
export const TreeViewNgFactory:import13.ComponentFactory<import2.TreeView> = new import13.ComponentFactory<import2.TreeView>('tree-view',viewFactory_TreeView_Host0,import2.TreeView);