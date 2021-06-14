(this["webpackJsonpcovid-tracker-app"]=this["webpackJsonpcovid-tracker-app"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__2XqFC",card:"Cards_card__1ak5A",active:"Cards_active__3_M63",recovered:"Cards_recovered__1wTBM",deaths:"Cards_deaths__1YvrA"}},182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(57),s=a.n(c),o=(a(77),a(9)),d=a.n(o),i=a(12),u=a(58),l=a(59),j=a(70),h=a(68),p=a(200),b=a(204),v=a(201),f=a(202),x=a(28),O=a.n(x),y=a(29),m=a.n(y),g=a(13),_=a.n(g),C=a(2),w=function(e){var t=e.data,a=t.cases,n=t.recovered,r=t.deaths,c=t.updated;return a?Object(C.jsx)("div",{className:_.a.container,children:Object(C.jsxs)(p.a,{container:!0,spacing:3,justify:"center",alignItems:"center",children:[Object(C.jsx)(p.a,{item:!0,component:b.a,xs:12,md:3,className:m()(_.a.card,_.a.active),children:Object(C.jsxs)(v.a,{children:[Object(C.jsx)(f.a,{color:"textSecondary",variant:"subtitle1",children:"Infected"}),Object(C.jsx)(f.a,{variant:"h5",children:Object(C.jsx)(O.a,{start:0,end:a,duration:2.5,separator:","})}),Object(C.jsx)(f.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(C.jsx)(f.a,{variant:"body2",children:"Number of cases of COVID-19."})]})}),Object(C.jsx)(p.a,{item:!0,component:b.a,xs:12,md:3,className:m()(_.a.card,_.a.recovered),children:Object(C.jsxs)(v.a,{children:[Object(C.jsx)(f.a,{color:"textSecondary",variant:"subtitle1",children:"Recovered"}),Object(C.jsx)(f.a,{variant:"h5",children:Object(C.jsx)(O.a,{start:0,end:n,duration:2.5,separator:","})}),Object(C.jsx)(f.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(C.jsx)(f.a,{variant:"body2",children:"Number of recoveries from COVID-19."})]})}),Object(C.jsx)(p.a,{item:!0,component:b.a,xs:12,md:3,className:m()(_.a.card,_.a.deaths),children:Object(C.jsxs)(v.a,{children:[Object(C.jsx)(f.a,{color:"textSecondary",variant:"subtitle1",children:"Deaths"}),Object(C.jsx)(f.a,{variant:"h5",children:Object(C.jsx)(O.a,{start:0,end:r,duration:2.5,separator:","})}),Object(C.jsx)(f.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(C.jsx)(f.a,{variant:"body2",children:"Number of deaths caused by COVID-19."})]})})]})}):""},S=a(65),k=a(66),D=a.n(k),I=function(e){var t=e.data,a=t.cases,n=t.recovered,r=t.deaths,c=e.country,s=a?Object(C.jsx)(S.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{data:[a,n,r],label:"People",backgroundColor:["rgb(122, 127, 243)","rgb(186, 252, 165)","rgb(245, 153, 145)"],borderWidth:0}]},options:{title:{display:!0,text:"".concat(c," Reports"),fontSize:16},legend:{display:!1}}}):null;return Object(C.jsx)("div",{className:D.a.container,children:s})},N=a(69),A=a(205),F=a(203),M="https://disease.sh/v3/covid-19",B=function(){var e=Object(i.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(M,"/all"));case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,n={cases:a.cases,recovered:a.recovered,deaths:a.deaths,updated:a.updated},e.abrupt("return",n);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(i.a)(d.a.mark((function e(t){var a,n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(M,"/countries/"),t&&(a="".concat(M,"/countries/").concat(t)),e.prev=2,e.next=5,fetch(a);case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,c=t?{cases:r.cases,recovered:r.recovered,deaths:r.deaths,updated:r.updated,country:r.country,countryInfo:r.countryInfo}:r.map((function(e){return{cases:e.cases,recovered:e.recovered,deaths:e.deaths,updated:e.updated,country:e.country,countryInfo:e.countryInfo}})),e.abrupt("return",c);case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),H=a(67),V=a.n(H),P=function(e){var t=e.countryChangeHandler,a=Object(n.useState)([]),r=Object(N.a)(a,2),c=r[0],s=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,G();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),Object(C.jsx)(A.a,{className:V.a.formControl,children:Object(C.jsxs)(F.a,{defaultValue:"",onChange:t,children:[Object(C.jsx)("option",{value:"global",children:"Global"}),c?c.map((function(e,t){return Object(C.jsx)("option",{value:e.country,children:e.country},t)})):null]})})},R=a(30),T=a.n(R),q=a.p+"static/media/headerImage.9e5d4fc7.png",E=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:"Global"},e.countryChangeHandler=function(){var t=Object(i.a)(d.a.mark((function t(a){var n,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("global"!==a.target.value){t.next=7;break}return t.next=3,B();case 3:n=t.sent,e.setState({data:n,country:"Global"}),t.next=12;break;case 7:return t.next=9,G(a.target.value);case 9:r=t.sent,c={cases:r.cases,recovered:r.recovered,deaths:r.deaths,updated:r.updated},e.setState({data:c,country:a.target.value});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(C.jsxs)("div",{className:T.a.container,children:[Object(C.jsxs)("div",{className:T.a.headerContainer,children:[Object(C.jsx)("img",{className:T.a.image,src:q,alt:"Covid-19"}),Object(C.jsx)(P,{countryChangeHandler:this.countryChangeHandler})]}),Object(C.jsx)(w,{data:t}),Object(C.jsx)(I,{data:t,country:a})]})}}]),a}(r.a.Component),J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,206)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(E,{})}),document.getElementById("root")),J()},30:function(e,t,a){e.exports={container:"App_container__1MQN3",headerContainer:"App_headerContainer__qCdWC",image:"App_image__3byI1"}},66:function(e,t,a){e.exports={container:"Chart_container__2bxln"}},67:function(e,t,a){e.exports={formControl:"Dropdown_formControl__3dG4a"}},77:function(e,t,a){}},[[182,1,2]]]);
//# sourceMappingURL=main.4c33da8a.chunk.js.map