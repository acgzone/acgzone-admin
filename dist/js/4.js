(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{113:function(e,t,a){"use strict";var n,s=a(3),r=a.n(s),i=a(4),c=a.n(i),u=a(5),o=a.n(u),l=a(6),p=a.n(l),h=a(7),m=a.n(h),d=a(0),v=a.n(d),f=(a(114),a(141)),E=Object(f.a)(n=function(e){function t(e){var a;return r()(this,t),(a=o()(this,p()(t).call(this,e))).state={v:""},a}return m()(t,e),c()(t,[{key:"selectInput",value:function(){this.props.history.push("".concat(this.props.prefix).concat(this.state.v))}},{key:"handleChange",value:function(e){this.setState({v:e})}},{key:"render",value:function(){var e=this;return v.a.createElement("div",{className:"reach-box"},v.a.createElement("input",{type:"text",placeholder:this.props.text,onChange:function(t){return e.handleChange(t.target.value)}}),v.a.createElement("button",{onClick:this.selectInput.bind(this)},"跳转"))}}]),t}(v.a.Component))||n;t.a=E},114:function(e,t,a){},128:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n,s=a(3),r=a.n(s),i=a(4),c=a.n(i),u=a(5),o=a.n(u),l=a(6),p=a.n(l),h=a(7),m=a.n(h),d=a(0),v=a.n(d),f=a(15),E=a(141),y=a(132),g=a(113),k=(a(128),Object(E.a)(n=function(e){function t(e){var a;return r()(this,t),(a=o()(this,p()(t).call(this,e))).state={users:[],uid:""},a}return m()(t,e),c()(t,[{key:"componentDidMount",value:function(){var e=this;Object(f.i)(this.props.match.params.level).then(function(t){200===t.data.code&&e.setState({users:t.data.users})})}},{key:"render",value:function(){return v.a.createElement("div",{className:"user-list"},v.a.createElement("div",{className:"role"},v.a.createElement(y.a,{to:"/users/user",style:{padding:"20px"}},"用户"),v.a.createElement(y.a,{to:"/users/author"},"作者"),v.a.createElement(y.a,{to:"/users/editor",style:{padding:"20px"}},"审核")),v.a.createElement("ul",null,"/users/user"===this.props.location.pathname?v.a.createElement(g.a,{text:"请输入qq",prefix:"/editor-user/"}):this.state.users.map(function(e){var t="http://q2.qlogo.cn/headimg_dl?dst_uin="+e.qq+"&spec=100";return v.a.createElement("li",{key:e.id},v.a.createElement(y.a,{to:"/editor-user/"+e.name},v.a.createElement("div",{className:"avatar"},v.a.createElement("img",{src:t,alt:""})),v.a.createElement("div",{className:"name"},e.name)))})))}}]),t}(v.a.Component))||n);t.default=k}}]);