"use strict";(self.webpackChunktweets_cards=self.webpackChunktweets_cards||[]).push([[260],{260:function(t,e,r){r.r(e),r.d(e,{default:function(){return N}});var n=r(433),s=r(439),a=r(791),c=r(87),l=r(861),u=r(757),o=r.n(u),i=r(243);function f(){return(f=(0,l.Z)(o().mark((function t(e,r,n){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.put("/users/".concat(e),{followers:r,status:n});case 3:t.next=8;break;case 5:return t.prev=5,t.t0=t.catch(0),t.abrupt("return",t.t0.message);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}var p={item:"Card_item__C00cL",wrapperItem:"Card_wrapperItem__XjhWm",wrapperImage:"Card_wrapperImage__2mX30",imageAvatar:"Card_imageAvatar__jQHz5",wrapperUserDescr:"Card_wrapperUserDescr__ob9-8",btnFollow:"Card_btnFollow__Zhzej",following:"Card_following__J3bSi"},w=r(182),d=r(184),h=function(t){var e=t.id,r=t.followers,n=t.avatar,c=t.user,l=t.tweets,u=t.status,o=(0,a.useState)(u),i=(0,s.Z)(o,2),h=i[0],m=i[1],_=(0,a.useState)(r),v=(0,s.Z)(_,2),g=v[0],b=v[1],Z=(0,a.useState)(!0),x=(0,s.Z)(Z,2),j=x[0],k=x[1];(0,a.useEffect)((function(){j||function(t,e,r){f.apply(this,arguments)}(e,g,h)}),[h,j,g,e]);return(0,d.jsxs)("li",{className:p.item,children:[(0,d.jsx)("div",{className:p.wrapperItem}),(0,d.jsxs)("div",{className:p.wrapperUserDescr,children:[(0,d.jsx)("div",{className:p.wrapperImage,children:(0,d.jsx)("img",{className:p.imageAvatar,src:n,alt:c})}),(0,d.jsxs)("h3",{className:p.tweets,children:[l," Tweets"]}),(0,d.jsxs)("h3",{className:p.followers,children:[function(t){var e=[t].toString().split("");return 6===e.length?(e.splice(3,0,","),e.join("")):t}(g)," Followers"]}),(0,d.jsx)("button",{className:(0,w.Z)("".concat(p.btnFollow),h&&"".concat(p.following)),type:"button",onClick:function(){return m(!h),k(!1),void b(h?function(t){return t-1}:function(t){return t+1})},children:h?"Following":"Follow"})]})]})},m=r(942),_="FilterIsers_wrapperFilter__tfvEb",v="FilterIsers_btnChoose__PrkCg",g="FilterIsers_isSelected__Qlj9u",b=function(t){var e=t.selected,r=void 0===e?"all":e,n=t.filter;return(0,d.jsxs)("div",{className:_,children:[(0,d.jsx)("button",{type:"button",className:(0,w.Z)(v,(0,m.Z)({},g,"all"===r)),onClick:function(){return n("all")},children:"ALL"}),(0,d.jsx)("button",{type:"button",className:(0,w.Z)(v,(0,m.Z)({},g,"follow"===r)),onClick:function(){return n("follow")},children:"FOLLOW"}),(0,d.jsx)("button",{type:"button",className:(0,w.Z)(v,(0,m.Z)({},g,"followings"===r)),onClick:function(){return n("followings")},children:"FOLLOWINGS"})]})},Z=function(){var t=(0,l.Z)(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("/users?page=".concat(e,"&limit=3"));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();i.Z.defaults.baseURL="https://6442a8ce33997d3ef9165f47.mockapi.io";var x=function(){var t=(0,l.Z)(o().mark((function t(e,r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("/users?page=".concat(e,"&limit=3"),{params:{status:"".concat(r)}});case 3:return n=t.sent,t.abrupt("return",n.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}(),j="Tweets_listTweets__AfSxK",k="Tweets_btnBack__vEb9o",C="Tweets_btnLoadMore__XzH+5",N=function(){var t=(0,a.useState)([]),e=(0,s.Z)(t,2),r=e[0],l=e[1],u=(0,a.useState)(1),o=(0,s.Z)(u,2),i=o[0],f=o[1],p=(0,a.useState)(null),w=(0,s.Z)(p,2),m=w[0],_=w[1],v=(0,a.useState)("all"),g=(0,s.Z)(v,2),N=g[0],S=g[1],F=(0,a.useState)(!0),L=(0,s.Z)(F,2),I=L[0],y=L[1];(0,a.useEffect)((function(){if(I&&"follow"!==N&&"followings"!==N)return Z(i).then((function(t){return l(t)})),void y(!1);i>1&&"all"===N&&Z(i).then((function(t){_(t.length),0!==t.length&&l((function(e){return[].concat((0,n.Z)(e),(0,n.Z)(t))}))})),"follow"===N&&x(i,!1).then((function(t){_(t.length),0!==t.length&&l((function(e){return[].concat((0,n.Z)(e),(0,n.Z)(t))}))})),"followings"===N&&x(i,!0).then((function(t){_(t.length),0!==t.length&&l((function(e){return[].concat((0,n.Z)(e),(0,n.Z)(t))}))}))}),[i,N,I]);return(0,d.jsxs)("div",{children:[(0,d.jsx)(b,{selected:N,filter:function(t){l([]),f(1),_(null),S(t),y(!0)}}),(0,d.jsx)(c.OL,{to:"/",children:(0,d.jsx)("button",{className:k,children:"Back"})}),(0,d.jsx)("ul",{className:j,children:r&&r.map((function(t){var e=t.id,r=t.followers,n=t.avatar,s=t.user,a=t.tweets,c=t.status;return(0,d.jsx)(h,{user:s,followers:r,avatar:n,tweets:a,id:e,status:c},e)}))}),0!==m&&(0,d.jsx)("button",{className:C,type:"button",onClick:function(){f((function(t){return t+1}))},children:"Load More"})]})}}}]);
//# sourceMappingURL=260.e979c7db.chunk.js.map