webpackJsonp([0],{1403:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"PagesModule",function(){return i});var a=n(2),s=n(5),r=n(12),o=n(196),c=n(1411),l=n(1407),u=n(1408),d=n(282),i=function(){function PagesModule(){}return PagesModule=a.a([Object(s.M)({imports:[r.b,o.b,o.c,o.d,o.e,o.f,o.g,o.h,o.j,o.l,o.m,o.n,o.o,o.p,o.q,o.r,o.s,o.t,o.u,o.v,o.w,o.x,o.y,o.A,o.z,o.B,o.C,o.E,o.F,o.G,o.H,o.D,c.a],declarations:[l.a,u.a],providers:[d.a]})],PagesModule)}()},1407:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(2),s=n(5),r=function(){function PagesComponent(){}return PagesComponent=a.a([Object(s.o)({selector:"my-pages",styles:[],template:"<router-outlet></router-outlet>"})],PagesComponent)}()},1408:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(2),s=n(5),r=n(283),o=function(){function PageUsersComponent(e){this.userService=e}return PageUsersComponent.prototype.ngOnInit=function(){var e=this;this.userService.find({}).subscribe(function(t){e.userList=t},function(e){})},PageUsersComponent=a.a([Object(s.o)({selector:"my-page-users",template:n(1412)}),a.c("design:paramtypes",[r.a])],PageUsersComponent)}()},1411:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(82),s=n(1407),r=n(1408),o=n(282),c=[{path:"",component:s.a,children:[{path:"",redirectTo:"/app/dashboard",pathMatch:"full"},{path:"users",component:r.a,canActivate:[o.a]}]}],l=a.f.forChild(c)},1412:function(e,t){e.exports=' <div class="container-fluid no-breadcrumbs page-users">\n\n  <div class="box box-default table-box mdl-shadow--2dp">\n    <table class="mdl-data-table">\n      <thead>\n        <tr>\n          <th class="mdl-data-table__cell--non-numeric">Id</th>\n          <th class="mdl-data-table__cell--non-numeric">Email</th>\n          <th class="mdl-data-table__cell--non-numeric">Created at</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor="let user of userList">\n          <td class="mdl-data-table__cell--non-numeric">{{user.id}}</td>\n          <td class="mdl-data-table__cell--non-numeric">{{user.email}}</td>\n          <td class="mdl-data-table__cell--non-numeric">{{user.createdAt | date:\'medium\'}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n</div>'}});
//# sourceMappingURL=0.b86aaf49798749943bab.chunk.js.map