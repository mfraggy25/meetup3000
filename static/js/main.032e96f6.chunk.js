(this.webpackJsonpmeetup3000=this.webpackJsonpmeetup3000||[]).push([[0],{22:function(e,t,n){e.exports=n(47)},27:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(20),r=n.n(i),s=(n(27),n(1)),l=n(6),c=n(3),u=n(2),h=n(4),d=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).getStyle=function(){return{color:n.color}},n.color=null,n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Alert"},o.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),t}(a.Component),p=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).color="blue",n}return Object(h.a)(t,e),t}(d),m=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).color="red",n}return Object(h.a)(t,e),t}(d),f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={query:32},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t}),t<=0?n.setState({infoText:"Must be at least 1"}):(n.setState({infoText:""}),n.props.updateEvents(null,null,t))},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"numberOfEvents"},o.a.createElement("div",{className:"text-alert"},o.a.createElement(m,{text:this.state.infoText})),o.a.createElement("label",null,"Number of results"),o.a.createElement("input",{type:"text",id:"numberOfEventsInput",placeholder:"32",value:this.state.query,onChange:this.handleInputChanged}))}}]),t}(a.Component),g=n(7),v=n.n(g),b=n(8),w=n(9),y=n.n(w),k=[{created:1581676443e3,duration:54e5,id:"268705764",name:"Running Kubernetes on Azure",rsvp_limit:80,date_in_series_pattern:!1,status:"upcoming",time:15834294e5,local_date:"2020-03-05",local_time:"18:30",updated:1581927279e3,utc_offset:36e5,waitlist_count:0,yes_rsvp_count:36,venue:{id:25766821,name:"medialesson - B\xfcro M\xfcnchen",lat:48.153099060058594,lon:11.583580017089844,repinned:!0,address_1:"Leopoldstr. 8-10",address_2:"c/o Nutrion Coworking Space",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1520252901e3,name:"Software, Technology & Design Meetup M\xfcnchen",id:27731423,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Software-Technology-Meetup-Munchen",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Software-Technology-Meetup-Munchen/events/268705764/",description:"In this session Mohit Chhabra will give you insights how to run real apps on the most popular container orchestrator in Azure. We\u2019ll review a high-level overview of the Azure Kubernetes Service (AKS) service and Azure Container Registry (ACR). We will start with the basic concepts of Kubernetes followed by understanding how AKS is different from the vanilla Kubernetes. Finally we'll be setting up and deploying a real world app on AKS. Feel free to follow along! Our speaker Mohit is working as Software Engineer at medialesson GmbH, Germany. He is currently Microsoft Most Valuable Professional for Microsoft Azure and former leader of BDotnet (India's Biggest offline community). He has delivered more than 50 sessions in the community and international conferences. Prior to this, Mohit was Microsoft Student Partner and Mozilla Student Representative. He was also India's first Azure Champion and the first person to intern in Microsoft Technology Center. This meetup will be hosted by medialesson, food and drinks will be provided. The session language is English. Please make sure you update your RSVP status 24h in advance so we don't waste any food!",how_to_find_us:"The entry to building No. 8 is directly accessible from Leopoldstr. near Siegestor, walk down the broad spiral stairs down to the basement and enter trough the first glass door on the right hand.",visibility:"public",member_pay_fee:!1},{created:1581605836e3,duration:9e6,id:"268682611",name:"TW presents: Lean backends using functional Kotlin",rsvp_limit:140,date_in_series_pattern:!1,status:"upcoming",time:15834294e5,local_date:"2020-03-05",local_time:"18:30",updated:1581606039e3,utc_offset:36e5,waitlist_count:3,yes_rsvp_count:140,venue:{id:25852478,name:"ThoughtWorks Munich ",lat:48.135501861572266,lon:11.613557815551758,repinned:!0,address_1:"Bothestra\xdfe 11",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1413448074e3,name:"ThoughtWorks Munich",id:17658472,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"ThoughtWorks-Muenchen",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/ThoughtWorks-Muenchen/events/268682611/",description:"Join us for our first meetup in March with our colleagues Srishti and Mario! In this talk we are going to talk about building lean backends in Kotlin, using a functional approach. The language is well suited for this, as it is pragmatic, not afraid of borrowing ideas and has a burgeoning ecosystem. Many talks focus on Android development, but we want to go in the other direction and speak about server side code. Specifically, our focus will be on small services that interact with other services using REST APIs and JSON, in a microservices ecosystem. Kotlin is already quite functional, supporting things like immutability and null safety out of the box. Starting from there we will expand on these and other patterns, like avoiding exceptions and expressing logic as a sequence of transformations, with the help of the excellent Arrow library. We will show code that runs in our production applications that is both elegant and maintainable. You will be able to adopt some of our ideas incrementally and see the benefits for yourself. ABOUT SRISHTI:Srishti is a software developer and tech enthusiast. She is passionate about clean code, problem-solving, test-driven development, and constantly learning topics that help her to develop quality software. ABOUT MARIO:Mario develops software for a living. Then he goes home and continues reading about software because he just cannot get enough.At some point, somebody thought it was a good idea to make him the technical lead of an agile team. He quickly discovered that building things himself is not the same as helping somebody else figure it out.He learned, somewhat to his surprise, that he really enjoys sharing ideas. According to their feedback, other developers have managed to learn something from Mario. At least they don't tend to run away screaming, which is, as he thinks, a good thing. SNACKS:As always we are offering various snacks and, beer and soft drinks. No full meal, but something to nibble on. AGENDA:18:30 Doors open for snacks, drinks and mingle19:00 Talk and questions20:00 More questions, drinks and mingle ",how_to_find_us:"The entrance is right next to the entrance of the big bike shop \u201cStadler\u201d. If you are standing in front of the entrance of Holiday Inn you have to go around the whole building to find our entrance.",visibility:"public",member_pay_fee:!1},{created:15819304e5,duration:126e5,id:"268770204",name:"Find the common language between business and IT (with Zs\xf3fia Herendi)",rsvp_limit:60,date_in_series_pattern:!1,status:"upcoming",time:1583946e6,local_date:"2020-03-11",local_time:"18:00",updated:1582043298e3,utc_offset:36e5,waitlist_count:0,yes_rsvp_count:40,group:{created:1510734921e3,name:"DDD MUC",id:26604821,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"DDD-MUC",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/DDD-MUC/events/268770204/",description:"IMPORTANT:We're still checking who can host this event, so there will be updates! --- Zs\xf3fia Herendi, IBM Zs\xf3fia is a product manager who has spent more than 14 years bringing developers and business people together, 10+ years working on different teams and 6+ years working in an agile environment. She is a skilled modeler with a passion for diagramming and an addiction to optimizing flow. --- Find the common language between business and IT Did you know that there are large corporates out there with hundreds of customised versions of the same ERP system built by different teams serving the same purpose? Or, have you observed shadow IT, where business departments take matters into their own hands when not getting attention in the IT department?Complex legacy architecture all too often reduce the competitive edge and business agility in large organisations, as well as becoming both more costly to maintain and expand upon. Resolving service problems takes a long time and new initiatives to fix and improve takes too long to realise, if at all.Value stream mapping and business process diagrams may provide some insight, but they will not necessarily give you the proper context as duplications and bias in your ecosystem often is well hidden. You lack the necessary situational awareness.When walking out of this session you will have the tools needed to gain a holistic view of your company, including the ability to map out IT\u2019s current situation. ",visibility:"public",member_pay_fee:!1}];function _(){return E.apply(this,arguments)}function E(){return(E=Object(b.a)(v.a.mark((function e(){var t,n,a,o,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token")){e.next=8;break}if(n=new URLSearchParams(window.location.search),a=n.get("code")){e.next=7;break}return window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=he1k2l2636m6akrde4o968joim&response_type=code&redirect_uri=https://lucianmurmurache.github.io/meetup3000/",e.abrupt("return",null);case 7:return e.abrupt("return",S("get",a));case 8:if(o=localStorage.getItem("last_saved_time"),!(t&&Date.now()-o<36e5)){e.next=11;break}return e.abrupt("return",t);case 11:return i=localStorage.getItem("refresh_token"),e.abrupt("return",S("renew",i));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return O.apply(this,arguments)}function O(){return(O=Object(b.a)(v.a.mark((function e(t,n){var a,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://wy7dt8cy34.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://wy7dt8cy34.execute-api.eu-central-1.amazonaws.com/dev/api/refresh/"+n),e.next=3,y.a.get(a);case 3:return o=e.sent,localStorage.setItem("access_token",o.data.access_token),localStorage.setItem("refresh_token",o.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",o.data.access_token);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t,n){return M.apply(this,arguments)}function M(){return(M=Object(b.a)(v.a.mark((function e(t,n,a){var o,i,r,s,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",k);case 2:if(navigator.onLine){e.next=5;break}return o=localStorage.getItem("lastEvents"),e.abrupt("return",JSON.parse(o));case 5:return e.next=7,_();case 7:if(!(i=e.sent)){e.next=18;break}return r="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+i,t&&n&&(r+="&lat="+t+"&lon="+n),a&&(r+="&page="+a),e.next=14,y.a.get(r);case 14:return s=e.sent,(l=s.data.events).length&&localStorage.setItem("lastEvents",JSON.stringify(l)),e.abrupt("return",l);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return A.apply(this,arguments)}function A(){return(A=Object(b.a)(v.a.mark((function e(t){var n,a,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,_();case 4:if(!(n=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,y.a.get(a);case 9:return o=e.sent,e.abrupt("return",o.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",suggestions:[]},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t}),x(t).then((function(e){n.setState({suggestions:e}),t&&0===e.length?n.setState({infoText:"Unable to find this city, check the spelling or try another city"}):n.setState({infoText:""})}))},n.handleItemClicked=function(e,t,a){n.setState({query:e,suggestions:[]}),n.props.updateEvents(t,a)},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"CitySearch"},o.a.createElement("div",{class:"text-alert"},o.a.createElement(p,{text:this.state.infoText})),o.a.createElement("input",{type:"text",className:"city",placeholder:"Search for a location...",value:this.state.query,onChange:this.handleInputChanged}),o.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return o.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))))}}]),t}(a.Component),N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={event:{},showDetails:!1},n.handleShowDetails=function(){n.state.showDetails?n.setState({showDetails:!1}):n.setState({showDetails:!0})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showDetails;return o.a.createElement("div",{className:"event"},o.a.createElement("div",{className:"event-overview"},o.a.createElement("div",{className:"event-overview-name"},this.props.event.name),o.a.createElement("div",{className:"event-overview-date"},o.a.createElement("span",null,"Event date: "),this.props.event.local_date),o.a.createElement("div",{className:"event-overview-time"},o.a.createElement("span",null,"Event time: "),this.props.event.local_time),o.a.createElement("button",{className:"event-details-btn",onClick:function(){return e.handleShowDetails()}},"Show more")),t&&o.a.createElement("div",{className:"event-details"},o.a.createElement("div",{className:"event-details-venue"},o.a.createElement("span",null,"Venue name: "),this.props.event.venue&&this.props.event.venue.name),o.a.createElement("div",{className:"event-details-max"},o.a.createElement("span",null,"Max capacity: "),this.props.event.rsvp_limit),o.a.createElement("div",{className:"event-details-going"},o.a.createElement("span",null,"Going: "),this.props.event.yes_rsvp_count),o.a.createElement("div",{className:"event-details-waitlist"},o.a.createElement("span",null,"Waitlist: "),this.props.event.waitlist_count),o.a.createElement("div",{className:"event-details-description"},this.props.event.description)))}}]),t}(a.Component),I=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(N,{event:e}))})))}}]),t}(a.Component),C=(n(45),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={events:[],page:32,lat:null,lon:null},n.updateEvents=function(e,t,a){e&&t?j(e,t,n.state.page).then((function(a){return n.setState({events:a,lat:e,lon:t})})):a?j(n.state.lat,n.state.lon,a).then((function(e){return n.setState({events:e,page:a})})):console.log("nothing changed, nothing to update")},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateEvents()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Meetup3000"),o.a.createElement(T,{updateEvents:this.updateEvents}),o.a.createElement(f,{updateEvents:this.updateEvents}),o.a.createElement(I,{events:this.state.events}))}}]),t}(a.Component)),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var W=n(21);r.a.render(o.a.createElement(C,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetup3000",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetup3000","/service-worker.js");D?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):z(t,e)}))}}(),W.config("bd058f834d8445a4b0e1db819a318dee").install()}},[[22,1,2]]]);
//# sourceMappingURL=main.032e96f6.chunk.js.map