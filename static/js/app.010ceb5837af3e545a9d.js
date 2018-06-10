webpackJsonp([0],{"/oiM":function(t,e,n){"use strict";e.a={}},"1too":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Sign Up")]),t._v(" "),n("h4",{attrs:{id:"message"}}),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.accountType,expression:"accountType"}],attrs:{id:"accountType"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.accountType=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"null"}},[t._v("Select Account Type")]),t._v(" "),n("option",{attrs:{value:"Client"}},[t._v("Client")]),t._v(" "),n("option",{attrs:{value:"Tutor"}},[t._v("Tutor")])]),t._v(" "),"Client"==t.accountType?n("div",[t._v("\n    Are you a parent? "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.isParent,expression:"isParent"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isParent)?t._i(t.isParent,null)>-1:t.isParent},on:{change:function(e){var n=t.isParent,o=e.target,s=!!o.checked;if(Array.isArray(n)){var a=t._i(n,null);o.checked?a<0&&(t.isParent=n.concat([null])):a>-1&&(t.isParent=n.slice(0,a).concat(n.slice(a+1)))}else t.isParent=s}}})]):t._e(),t._v("\n  first name: "),n("input",{attrs:{id:"firstName"}}),t._v("\n  last name: "),n("input",{attrs:{id:"lastName"}}),t._v("\n  Email: "),n("input",{attrs:{id:"email"}}),t._v("\n  Phone Number: "),n("input",{attrs:{id:"phone"}}),t._v("\n  Password: "),n("input",{attrs:{id:"password",type:"password"}}),t._v("\n  Confirm password: "),n("input",{attrs:{id:"confirmPassword",type:"password"}}),t._v(" "),t.isParent&&"Client"==t.accountType?n("div",[t._v("\n    Children Names:\n    "),t._l(t.students,function(e,o){return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.students[o],expression:"students[index]"}],attrs:{id:"student"},domProps:{value:t.students[o]},on:{input:function(e){e.target.composing||t.$set(t.students,o,e.target.value)}}}),n("button",{on:{click:function(e){t.removeStudent(o)}}},[t._v("-")])])}),t._v(" "),n("button",{on:{click:function(e){t.addStudent()}}},[t._v("Add Student")])],2):t._e(),t._v(" "),n("button",{on:{click:function(e){t.signUp()}}},[t._v("SignUp")]),t._v(" "),n("router-link",{attrs:{to:"login"}},[t._v("Login")])],1)},s=[],a={render:o,staticRenderFns:s};e.a=a},"2Zye":function(t,e){},"3UO3":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Account")]),t._v(" "),n("h1",[t._v(t._s(t.account.firstName)+" "+t._s(t.account.lastName))]),t._v(" "),n("h4",[t._v("Phone: "+t._s(t.account.phone))]),t._v(" "),n("h4",[t._v("Email: "+t._s(t.account.email))])])},s=[],a={render:o,staticRenderFns:s};e.a=a},ApaE:function(t,e,n){"use strict";function o(t){n("chj3")}var s=n("SwRy"),a=n("1too"),i=n("VU/8"),r=o,c=i(s.a,a.a,!1,r,null,null);e.a=c.exports},B3Ix:function(t,e,n){"use strict";var o=n("D/V5"),s=n("mtWM"),a=n.n(s);e.a={components:{Tutor:o.a},data:function(){return{tutors:[]}},created:function(){var t=this;a.a.get("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/getTutors").then(function(e){console.log(e),t.tutors=e.data.tutors}).catch(function(t){console.log(t)})}}},"D/V5":function(t,e,n){"use strict";function o(t){n("lGHs")}var s=n("oq3Y"),a=n("U0iU"),i=n("VU/8"),r=o,c=i(s.a,a.a,!1,r,"data-v-384a4278",null);e.a=c.exports},FnhZ:function(t,e,n){"use strict";var o=n("/oiM"),s=n("jUw9"),a=n("VU/8"),i=a(o.a,s.a,!1,null,null,null);e.a=i.exports},Fs8J:function(t,e,n){"use strict";e.a={name:"Home",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},GE84:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Owl Tutoring")]),t._v(" "),n("router-link",{attrs:{to:"Home"}},[t._v("Home")]),t._v(" "),n("router-link",{attrs:{to:"Tutors"}},[t._v("Tutors")]),t._v(" "),n("router-link",{attrs:{to:"contact"}},[t._v("Contact")]),t._v(" "),t.LoginStateStore.loggedIn?n("div",[n("router-link",{attrs:{to:"account"}},[t._v("Account")]),t._v(" "),n("router-link",{attrs:{to:"sessions"}},[t._v("Sessions")]),t._v(" "),n("button",{on:{click:function(e){t.logout()}}},[t._v("logout")])],1):n("div",[n("router-link",{attrs:{to:"login"}},[t._v("Login")])],1),t._v(" "),n("router-view")],1)},s=[],a={render:o,staticRenderFns:s};e.a=a},JXCk:function(t,e){},LhKp:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Login")]),t._v(" "),n("h4",{attrs:{id:"message"}}),t._v("\n  Email: "),n("input",{attrs:{id:"email"}}),n("br"),t._v("\n  Password: "),n("input",{attrs:{type:"password",id:"password"}}),n("br"),t._v(" "),n("button",{on:{click:function(e){t.login()}}},[t._v("Login")]),n("br"),t._v(" "),n("router-link",{attrs:{to:"signUp"}},[t._v("Sign Up")])],1)},s=[],a={render:o,staticRenderFns:s};e.a=a},M93x:function(t,e,n){"use strict";function o(t){n("SecF")}var s=n("xJD8"),a=n("GE84"),i=n("VU/8"),r=o,c=i(s.a,a.a,!1,r,null,null);e.a=c.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),s=n("M93x"),a=n("YaEn");o.a.config.productionTip=!1,new o.a({el:"#app",router:a.a,template:"<App/>",components:{App:s.a}})},NZjL:function(t,e,n){"use strict";var o=n("xVQp"),s=n("mtWM"),a=n.n(s);e.a={components:{Session:o.a},data:function(){return{sessions:[]}},mounted:function(){this.$route.query.addNew&&this.makeSession()},created:function(){var t=this;a.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/getSessions",{token:localStorage.getItem("token")}).then(function(e){console.log(e),t.sessions.concat(e.data.sessions)}).catch(function(t){console.log(t)})},methods:{makeSession:function(){this.sessions.push({isnew:!0,startTime:(new Date).getTime()})}}}},O3Ir:function(t,e,n){"use strict";function o(t){n("JXCk")}var s=n("B3Ix"),a=n("OjtL"),i=n("VU/8"),r=o,c=i(s.a,a.a,!1,r,null,null);e.a=c.exports},OjtL:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Tutors")]),t._v(" "),t._l(t.tutors,function(t,e){return n("div",[n("Tutor",{attrs:{tutor:t}})],1)})],2)},s=[],a={render:o,staticRenderFns:s};e.a=a},"RUI/":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Sessions")]),t._v(" "),n("button",{on:{click:function(e){t.makeSession()}}},[t._v("New Session")]),t._v(" "),t._l(t.sessions,function(t,e){return n("div",[n("Session",{attrs:{session:t}})],1)})],2)},s=[],a={render:o,staticRenderFns:s};e.a=a},SecF:function(t,e){},SugB:function(t,e){},SwRy:function(t,e,n){"use strict";var o=n("mtWM"),s=n.n(o);e.a={data:function(){return{accountType:null,isParent:!1,students:[""]}},methods:{getStudentInputs:function(){var t=[];for(student in students)t.push({S:student});return console.log(t),t},removeStudent:function(t){this.students.splice(t,1)},addStudent:function(){this.students.push("")},signUp:function(){return document.getElementById("password").value!=document.getElementById("confirmPassword").value?void(document.getElementById("message").innerHTML="Error, Passwords don't match"):"none"==document.getElementById("accountType").value?void(document.getElementById("message").innerHTML="please select an account type"):void s.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/signUp",{accountType:document.getElementById("accountType").value,email:document.getElementById("email").value,password:document.getElementById("password").value,firstName:document.getElementById("firstName").value,lastName:document.getElementById("lastName").value,phone:document.getElementById("phone").value}).then(function(t){console.log(t),document.getElementById("message").innerHTML=t.data.message}).catch(function(t){console.log(t),document.getElementById("message").innerHTML=t.response.data.message})}}}},U0iU:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.tutor.firstName)+" "+t._s(t.tutor.lastName))]),t._v(" "),n("h3",[t._v("$"+t._s(t.tutor.rate))]),t._v(" "),n("h3",[t._v(t._s(t.tutor.grade)+"th Grade")]),t._v(" "),n("h4",[t._v("Subjects: "+t._s(t.subjectList))]),t._v(" "),n("h4",[t._v("Levels: "+t._s(t.levelsList))]),t._v(" "),n("h4",[t._v("Town: "+t._s(t.tutor.town))]),t._v(" "),n("button",{on:{click:function(e){t.chosseTutor()}}},[t._v("Schedule a Lesson")]),t._v(" "),n("button",{on:{click:function(e){t.toggleMore()}}},[t._v("more info")]),t._v(" "),t.expanded?n("div",[n("h4",[t._v("Phone: "),n("a",{attrs:{href:"sms:"+t.tutor.phone}},[t._v(" "+t._s(t.tutor.phone))])]),t._v(" "),n("h4",[t._v("Email:"),n("a",{attrs:{href:"mailto:"+t.tutor.email}},[t._v(" "+t._s(t.tutor.email))])]),t._v(" "),n("p",[n("b",[t._v("Experience:")]),t._v(" "+t._s(t.tutor.experience))]),t._v(" "),n("p",[n("b",[t._v("Bio:")]),t._v(" "+t._s(t.tutor.bio))])]):t._e()])},s=[],a={render:o,staticRenderFns:s};e.a=a},YaEn:function(t,e,n){"use strict";var o=n("7+uW"),s=n("/ocq"),a=n("lO7g"),i=n("uK6g"),r=n("FnhZ"),c=n("O3Ir"),u=(n("D/V5"),n("xJsL")),l=n("ApaE"),d=n("nSX0");o.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"Home",component:a.a},{path:"/Tutors/",name:"Tutors",component:c.a},{path:"/contact",name:"Contact",component:r.a},{path:"/account",name:"Account",component:i.a},{path:"/login",name:"Login",component:u.a},{path:"/signup",name:"SignUp",component:l.a},{path:"/sessions",name:"sessions",component:d.a}]})},chj3:function(t,e){},fg4R:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"session-container"},[t.editing?n("div",[n("div",{attrs:{id:"message"}},[t._v("New Session")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.hour,expression:"hour"}],attrs:{id:"hour"},domProps:{value:t.hour},on:{input:function(e){e.target.composing||(t.hour=e.target.value)}}}),t._v(":"),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.minute,expression:"minute",modifiers:{lazy:!0}}],attrs:{id:"minute"},domProps:{value:t.minute},on:{change:function(e){t.minute=e.target.value}}}),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.AMPM,expression:"AMPM"}],attrs:{id:"AMPM"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.AMPM=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"AM"}},[t._v("AM")]),t._v(" "),n("option",{attrs:{value:"PM"}},[t._v("PM")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.calendar.selected,expression:"calendar.selected"}],attrs:{id:"day"},domProps:{value:t.calendar.selected},on:{input:function(e){e.target.composing||t.$set(t.calendar,"selected",e.target.value)}}}),t._v("/"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.calendar.month,expression:"calendar.month"}],attrs:{id:"month"},domProps:{value:t.calendar.month},on:{input:function(e){e.target.composing||t.$set(t.calendar,"month",e.target.value)}}}),t._v("/"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.calendar.year,expression:"calendar.year"}],attrs:{id:"year"},domProps:{value:t.calendar.year},on:{input:function(e){e.target.composing||t.$set(t.calendar,"year",e.target.value)}}}),t._v(" "),t.showCalander?n("div",{staticClass:"calendar-container"},[n("h2",[n("button",{on:{click:function(e){t.backMonth()}}},[t._v(" < ")]),t._v(t._s(t.getMonth)),n("button",{on:{click:function(e){t.forwardMonth()}}},[t._v(" > ")])]),t._l(t.days,function(e){return n("div",{staticClass:"calendar-day",class:{selected:e==t.calendar.selected},on:{click:function(n){t.selectDay(e)}}},[t._v(t._s(e))])})],2):t._e(),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.length,expression:"length"}],attrs:{id:"length"},domProps:{value:t.length},on:{input:function(e){e.target.composing||(t.length=e.target.value)}}}),t._v("hr(s)\n    "),n("select",{attrs:{id:"tutor"}},[n("option",{attrs:{value:"none"}},[t._v(t._s(t.session.tutorName))])]),t._v(" "),t.session.isnew?n("div",[n("button",{on:{click:function(e){t.scheduleLesson()}}},[t._v("Schedule Lesson")])]):n("div",[n("button",{on:{click:function(e){t.editLesson()}}},[t._v("Save Changes")])]),t._v(" "),n("button",{on:{click:function(e){t.cancelEdit()}}},[t._v("Cancel")])]):n("div",[n("h2",[t._v(t._s(t.dateTimeString))]),t._v("\n  "+t._s(t.session.name)+"\n  "),n("button",{on:{click:function(e){t.changeToEdit()}}},[t._v("Edit")])])])},s=[],a={render:o,staticRenderFns:s};e.a=a},iE3y:function(t,e,n){"use strict";var o=n("mtWM"),s=n.n(o);e.a={props:{session:{type:Object,edit:!1}},name:"Session",data:function(){return{editing:!1,showCalander:!0,calendar:{selected:this.session.isnew?(new Date).getDate()+1:new Date(parseInt(this.session.startTime)).getDate()+1,month:this.session.isnew?(new Date).getMonth()+1:new Date(parseInt(this.session.startTime)).getMonth()+1,year:this.session.isnew?(new Date).getFullYear():new Date(parseInt(this.session.startTime)).getFullYear()},hour:this.session.isnew?5:new Date(parseInt(this.session.startTime)).getHours(),minuteVal:this.session.isnew?0:new Date(parseInt(this.session.startTime)).getMinutes(),AMPM:"PM",length:1}},created:function(){this.session.isnew&&(this.editing=!0)},computed:{relatedAccounts:function(){s.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/getRelatedAccountInfo",{token:localStorage.getItem("token")}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},minute:{get:function(){return this.minuteVal<10?"0"+this.minuteVal:this.minuteVal},set:function(t){this.minuteVal=t}},days:function(){var t=[31,this.calendar.year%4==0&&this.calendar.year%100!=0||this.calendar.year%400==0?29:28,31,30,31,30,31,31,30,31,30,31];return console.log(t[this.calendar.month-1]),t[this.calendar.month-1]},getMonth:function(){var t=["January","February","March","April","May","June","July","August","September","October","November","December"];return console.log(t[this.calendar.month-1]),t[this.calendar.month-1]},dateTimeString:function(){var t=new Date(parseInt(this.session.startTime)),e=["Mon","Tue","Wed","Thurs","Fri","Sat","Sun"],n="AM",o=t.getHours();return o>12&&(n="PM",o-=12),0==o&&(o=12),o+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+n+" "+e[t.getDay()]+" "+t.getMonth()+"/"+t.getDate()+"/"+t.getFullYear()}},methods:{scheduleLesson:function(){s.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/createSession",{token:localStorage.getItem("token"),clientID:1,tutorID:1,startTime:1,endTime:1,sessionLocation:1}).then(function(t){console.log(t),document.getElementById("message").innerHTML=t.data.message}).catch(function(t){console.log(t),document.getElementById("message").innerHTML=t.response.data.message})},cancelEdit:function(){this.editing=!1},changeToEdit:function(){console.log(this.editing),this.editing=!0,console.log(this.editing)},toggleMore:function(){console.log(this.expanded),this.expanded?this.expanded=!1:this.expanded=!0},selectDay:function(t){console.log(t),this.calendar.selected=t,document.getElementById("day").value=t},backMonth:function(){1==this.calendar.month?(this.calendar.month=12,this.calendar.year--):this.calendar.month--},forwardMonth:function(){12==this.calendar.month?(this.calendar.month=1,this.calendar.year++):this.calendar.month++}}}},idJT:function(t,e,n){"use strict";const o={data:{loggedIn:!1},methods:{logout:function(){localStorage.setItem("token",null),o.data.loggedIn=!1,console.log("logged OUT!")},login:function(t){localStorage.setItem("token",t),o.data.loggedIn=!0,console.log("logged IN!")},refresh:function(){o.data.loggedIn=null!=localStorage.getItem("token")}}};e.a=o},jUw9:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",[t._v("Contact Us")])},s=[],a={render:o,staticRenderFns:s};e.a=a},lGHs:function(t,e){},lO7g:function(t,e,n){"use strict";function o(t){n("SugB")}var s=n("Fs8J"),a=n("sO1t"),i=n("VU/8"),r=o,c=i(s.a,a.a,!1,r,"data-v-1eaf3a60",null);e.a=c.exports},mBTV:function(t,e){},"nKb+":function(t,e,n){"use strict";var o=n("idJT"),s=n("mtWM"),a=n.n(s);e.a={data:function(){return{}},created:function(){},methods:{login:function(){a.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/login",{email:document.getElementById("email").value,password:document.getElementById("password").value}).then(function(t){console.log(t),o.a.methods.login(t.data.token),document.getElementById("message").innerHTML=t.data.message}).catch(function(t){console.log(t),document.getElementById("message").innerHTML=t.response.data.message})}}}},nSX0:function(t,e,n){"use strict";function o(t){n("mBTV")}var s=n("NZjL"),a=n("RUI/"),i=n("VU/8"),r=o,c=i(s.a,a.a,!1,r,null,null);e.a=c.exports},oq3Y:function(t,e,n){"use strict";function o(t){for(var e="",n=0;n<t.length;n++)n==t.length-1&&t.length>1&&(e+="and "),e+=t[n].S,n<t.length-1&&(t.length>2?e+=", ":e+=" ");return e}var s=n("mtWM"),a=n.n(s);e.a={props:["tutor"],name:"Tutor",data:function(){return{expanded:!1}},computed:{subjectList:function(){return o(this.tutor.subjects)},levelsList:function(){return o(this.tutor.levels)}},methods:{chosseTutor:function(){var t=this;a.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/connectAccounts",{token:localStorage.getItem("token"),otherID:this.tutor.ID}).then(function(e){console.log(e),t.$router.push({path:"Sessions",query:{addNew:!0}})}).catch(function(t){console.log(t)})},toggleMore:function(){console.log(this.expanded),this.expanded?this.expanded=!1:this.expanded=!0}}}},qDI4:function(t,e,n){"use strict";var o=n("mtWM"),s=n.n(o);e.a={data:function(){return{account:{}}},created:function(){var t=this;s.a.post("https://z9yqr69kvh.execute-api.us-west-2.amazonaws.com/dev/getAccountInfo",{token:localStorage.getItem("token")}).then(function(e){console.log(e),t.account=e.data}).catch(function(t){console.log(t)})}}},sO1t:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"home"})},s=[],a={render:o,staticRenderFns:s};e.a=a},uK6g:function(t,e,n){"use strict";var o=n("qDI4"),s=n("3UO3"),a=n("VU/8"),i=a(o.a,s.a,!1,null,null,null);e.a=i.exports},un1e:function(t,e){},xJD8:function(t,e,n){"use strict";var o=n("idJT");e.a={name:"app",data:function(){return{LoginStateStore:o.a.data}},methods:{logout:function(){o.a.methods.logout()}},created:function(){o.a.methods.refresh()}}},xJsL:function(t,e,n){"use strict";function o(t){n("un1e")}var s=n("nKb+"),a=n("LhKp"),i=n("VU/8"),r=o,c=i(s.a,a.a,!1,r,null,null);e.a=c.exports},xVQp:function(t,e,n){"use strict";function o(t){n("2Zye")}var s=n("iE3y"),a=n("fg4R"),i=n("VU/8"),r=o,c=i(s.a,a.a,!1,r,"data-v-232d7eac",null);e.a=c.exports}},["NHnr"]);
//# sourceMappingURL=app.010ceb5837af3e545a9d.js.map