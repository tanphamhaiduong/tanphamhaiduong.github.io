webpackJsonp([6],{2595:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(2673);n.default=r.a},2601:function(t,n,e){"use strict";var r,a=e(111),u=e.n(a),s=e(157),o=this&&this.__makeTemplateObject||function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},i=u()(r||(r=o(["\n  ","\n  query StatusGroupsQuery {\n    statusGroups {\n      ...StatusGroup\n      company {\n        id\n        name\n      }\n    }\n  }\n"],["\n  ","\n  query StatusGroupsQuery {\n    statusGroups {\n      ...StatusGroup\n      company {\n        id\n        name\n      }\n    }\n  }\n"])),s.i);n.a=i},2673:function(t,n,e){"use strict";var r,a=e(0),u=(e.n(a),e(36)),s=e(142),o=(e.n(s),e(98)),i=e(143),p=e(2601),c=e(2674),d=e(2675),l=e(2676),m=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])},function(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),f=this&&this.__assign||Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var a in n=arguments[e])Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t},y=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.onCancel=function(){n.props.history.push("/status-groups")},n}return m(n,t),n.prototype.render=function(){var t=f({name:"/status-group/edit",label:"Ch\u1ec9nh s\u1eeda tr\u1ea1ng th\xe1i",breadCumData:[{id:1,text:"Trang Ch\u1ee7",link:"/"},{id:2,text:"Tr\u1ea1ng th\xe1i",link:"/status-groups"},{id:3,text:""+this.props.match.params.id,link:"/status-group/edit/"+this.props.match.params.id}]},c.a),n=this.props.data,e=n.loading,r=n.statusGroup,s=n.statuses,p=n.companies,d={};if(!e){d=Object(i.y)(r);var l=Object(i.b)(p),m=Object(i.b)(s);Object(i.a)(t,l),Object(i.f)(t,m)}return a.createElement("div",null,a.createElement(u.Row,{className:"content-header"},t.label,a.createElement(o.c,{breadCumData:t.breadCumData})),a.createElement(u.Row,{className:"content-body animated fadeIn"},e?a.createElement(o.q,{size:"large"}):a.createElement("div",null,a.createElement(o.o,{formValues:d,fields:t.fields,objectId:this.props.match.params.id,onSubmit:this.props.editStatusGroup,onCancel:this.onCancel}))))},n}(a.PureComponent);n.a=Object(s.compose)(Object(s.graphql)(d.a,{options:function(t){return{variables:{id:t.match.params.id}}}}),Object(s.graphql)(l.b,{options:{errorPolicy:"all"},props:function(t){var n=t.mutate;t.ownProps;return{editStatusGroup:function(t){return n&&n({variables:{statusGroup:t},update:function(t,n){var e=n.data,r=t.readQuery({query:p.a});if(e&&e.editStatusGroup&&r&&r.statusGroups){var a=r.statusGroups.findIndex(function(t){return t.id===e.editStatusGroup.id});r.statusGroups[a]=e.editStatusGroup}t.writeQuery({query:p.a,data:r})}})}}}}),Object(s.graphql)(l.a,{options:{errorPolicy:"all"},props:function(t){var n=t.mutate;t.ownProps;return{deleteStatusGroup:function(t){return n&&n({variables:{id:t},update:function(t,n){var e=n.data,r=t.readQuery({query:p.a});e&&e.deleteStatusGroup&&r&&r.statusGroups&&(r.statusGroups=r.statusGroups.filter(function(t){return t.id!==e.deleteStatusGroup.id})),t.writeQuery({query:p.a,data:r})}})}}}}))(y)},2674:function(t,n,e){"use strict";n.a={fields:[{name:"name",label:"\xa0Tr\u1ea1ng th\xe1i",placeholder:"Tr\u1ea1ng th\xe1i",options:{rules:[{required:!0,message:"H\xe3y nh\u1eadp tr\u1ea1ng th\xe1i"}]}},{name:"companyId",label:"C\xf4ng ty",type:"select",placeholder:"C\xf4ng ty",options:{rules:[{required:!0,message:"H\xe3y nh\u1eadp c\xf4ng ty"}]},select:{mode:"default",selectOptions:[]}},{name:"statusesInGroup",label:"Tr\u1ea1ng th\xe1i",type:"select",placeholder:"Tr\u1ea1ng th\xe1i",options:{rules:[{required:!0,message:"H\xe3y nh\u1eadp tr\u1ea1ng th\xe1i"}]},select:{mode:"multiple",selectOptions:[]}}]}},2675:function(t,n,e){"use strict";var r,a=e(111),u=e.n(a),s=e(157),o=this&&this.__makeTemplateObject||function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},i=u()(r||(r=o(["\n  ","\n  ","\n  query StatusGroupEditQueries($id: ID!) {\n    statusGroup(id: $id) {\n      ...StatusGroup\n      company {\n        id\n        name\n      }\n    }\n    companies {\n      id\n      name\n    }\n    statuses {\n      ...Status\n    }\n  }\n"],["\n  ","\n  ","\n  query StatusGroupEditQueries($id: ID!) {\n    statusGroup(id: $id) {\n      ...StatusGroup\n      company {\n        id\n        name\n      }\n    }\n    companies {\n      id\n      name\n    }\n    statuses {\n      ...Status\n    }\n  }\n"])),s.i,s.h);n.a=i},2676:function(t,n,e){"use strict";e.d(n,"b",function(){return p}),e.d(n,"a",function(){return c});var r,a,u=e(111),s=e.n(u),o=e(157),i=this&&this.__makeTemplateObject||function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},p=s()(r||(r=i(["\n  ","\n  mutation StatusGroupEditMutations($statusGroup: StatusGroupInput!) {\n    editStatusGroup(statusGroup: $statusGroup) {\n      ...StatusGroup\n      company {\n        id\n        name\n      }\n    }\n  }\n"],["\n  ","\n  mutation StatusGroupEditMutations($statusGroup: StatusGroupInput!) {\n    editStatusGroup(statusGroup: $statusGroup) {\n      ...StatusGroup\n      company {\n        id\n        name\n      }\n    }\n  }\n"])),o.i),c=s()(a||(a=i(["\n  mutation StatusGroupDeleteMutations($id: ID!) {\n    deleteStatusGroup(id: $id) {\n      id\n    }\n  }\n"],["\n  mutation StatusGroupDeleteMutations($id: ID!) {\n    deleteStatusGroup(id: $id) {\n      id\n    }\n  }\n"])))}});