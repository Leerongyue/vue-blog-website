webpackJsonp([6],{Wp93:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("J2Tj"),s={data:function(){return{blogs:[],page:1,total:0}},created:function(){var t=this;this.page=parseInt(this.$route.query.page||"1")||"1",n.a.getBlogs({page:this.page}).then(function(a){t.blogs=a.data,t.total=a.total,t.page=a.page})},methods:{onPageChange:function(t){var a=this;n.a.getBlogs({page:t}).then(function(e){a.blogs=e.data,a.total=e.total,a.page=e.page,a.$router.push({path:"/",query:{page:t}})})}}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"index"}},[e("section",{staticClass:"blog-posts"},t._l(t.blogs,function(a){return e("div",{key:a.id,staticClass:"item"},[e("figure",{staticClass:"avatar"},[e("router-link",{attrs:{to:"/user/"+a.user.id}},[e("img",{attrs:{src:a.user.avatar,alt:"blog.user.username"}}),t._v(" "),e("figcaption",[t._v(t._s(a.user.username))])])],1),t._v(" "),e("h3",[e("router-link",{staticClass:"h3Link",attrs:{to:"/detail/"+a.id}},[t._v("\n          "+t._s(a.title)+"\n        ")]),t._v(" "),e("span",[t._v(t._s(t.friendlyDate(a.updatedAt)))])],1),t._v(" "),e("p",[t._v(t._s(a.description))])])}),0),t._v(" "),e("section",[e("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page},on:{"current-change":t.onPageChange}})],1)])},staticRenderFns:[]};var i=e("VU/8")(s,r,!1,function(t){e("oBAh")},"data-v-54cfb5d7",null);a.default=i.exports},oBAh:function(t,a){}});
//# sourceMappingURL=6.2b15271822f3daf274da.js.map