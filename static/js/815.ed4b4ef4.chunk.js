"use strict";(self.webpackChunkspardha23=self.webpackChunkspardha23||[]).push([[815],{6065:(e,s,t)=>{t.r(s),t.d(s,{default:()=>k});var a=t(2791),n=(t(7632),t(4569)),l=t.n(n),r=t(7356);const i="Events_events-table__ZnuDA",c="Events_middle-column__cnNRe",d="Events_left-column__iwSTX",o="Events_right-column__ePkhI",h="Events_modal-table__dQ41t",g="Events_modal-body__8gYUd",m="Events_register-now__7JNIy",x="Events_modal-header__ICAiJ",u="Events_login-header__fybga",j="Events_modal-footer__JGY8C",_="Events_cancel__zpRY3",p="Events_form-control__IMpa8";var b=t(1087),N=t(577),f=(t(5462),t(184));const y=()=>{const e=localStorage.getItem("token"),[s,t]=(0,a.useState)({Athletics_B:!1,Athletics_G:!1,Badminton_B:!1,Badminton_G:!1,Basketball_B:!1,Basketball_G:!1,Boxing_B:!1,Boxing_G:!1,Chess_M:!1,Cycling_M:!1,Cricket_B:!1,Football_B:!1,Football_G:!1,Handball_B:!1,Handball_G:!1,Hockey_B:!1,"Lawn Tennis_B":!1,"Lawn Tennis_G":!1,Kabaddi_B:!1,Kabaddi_G:!1,"Kho-Kho_B":!1,"Kho-Kho_G":!1,Powerlifting_B:!1,Squash_B:!1,Squash_G:!1,"Table Tennis_B":!1,"Table Tennis_G":!1,Taekwondo_B:!1,Taekwondo_G:!1,Volleyball_B:!1,Volleyball_G:!1,Weightlifting_B:!1}),[n,y]=(0,a.useState)({}),[k,S]=(0,a.useState)({}),[B,T]=(0,a.useState)({}),[v,$]=(0,a.useState)({}),[C,A]=(0,a.useState)({}),[E,G]=(0,a.useState)({}),[P,O]=(0,a.useState)({}),[w,I]=(0,a.useState)({}),[L,R]=(0,a.useState)({}),[W,M]=(0,a.useState)({}),[z,H]=(0,a.useState)({}),[K,D]=(0,a.useState)({}),[U,Y]=(0,a.useState)({}),[F,V]=(0,a.useState)({}),[X,q]=(0,a.useState)({}),[Z,J]=(0,a.useState)({}),[Q,ee]=(0,a.useState)({}),[se,te]=(0,a.useState)({}),[ae,ne]=(0,a.useState)({}),[le,re]=(0,a.useState)({}),[ie,ce]=(0,a.useState)({}),[de,oe]=(0,a.useState)({}),[he,ge]=(0,a.useState)({}),[me,xe]=(0,a.useState)({}),[ue,je]=(0,a.useState)({}),[_e,pe]=(0,a.useState)({}),[be,Ne]=(0,a.useState)({}),[fe,ye]=(0,a.useState)({}),[ke,Se]=(0,a.useState)({}),[Be,Te]=(0,a.useState)({}),[ve,$e]=(0,a.useState)({}),[Ce,Ae]=(0,a.useState)({}),[Ee,Ge]=(0,a.useState)([]),[Pe,Oe]=(0,a.useState)([]),[we,Ie]=(0,a.useState)([]),Le={Athletics_G:[n,y],Boxing_G:[k,S],Taekwondo_G:[B,T],Volleyball_B:[v,$],Volleyball_G:[C,A],"Lawn Tennis_G":[L,R],"Lawn Tennis_B":[w,I],"Table Tennis_B":[P,O],"Table Tennis_G":[E,G],"Kho-Kho_G":[W,M],"Kho-Kho_B":[z,H],Kabaddi_B:[K,D],Kabaddi_G:[U,Y],Badminton_G:[F,V],Badminton_B:[X,q],Squash_B:[Z,J],Squash_G:[Q,ee],Weightlifting_B:[se,te],Hockey_B:[ae,ne],Handball_B:[le,re],Handball_G:[ie,ce],Football_B:[de,oe],Football_G:[he,ge],Cricket_B:[me,xe],Taekwondo_B:[ue,je],Boxing_B:[_e,pe],Athletics_B:[be,Ne],Chess_M:[fe,ye],Cycling_M:[ke,Se],Basketball_G:[Be,Te],Basketball_B:[ve,$e],Powerlifting_B:[Ce,Ae]},Re={Boxing:["Leader info:    ","46kg-49kg:      ","49kg-52kg:      ","52kg-56kg:      ","56kg-60kg:      ","60kg-64kg:      ","64kg-69kg:      ","69kg-75kg:      ","75kg-81kg:      ","81kg-91kg:      ","91kg and above: "],Weightlifting:["Leader info:    ","Below 56kg:     ","56kg-62kg:      ","62kg-69kg:      ","69kg-77kg:      ","77kg-85kg:      "],Taekwondo:["Leader info:    ","Below 54kg:    ","54kg-58kg:     ","58kg-63kg:     ","63kg-67kg:     ","67kg-72kg:     ","72kg-78kg:     ","Above 78kg:    ","Heavy :        "]},We={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BASE_URL;(0,a.useEffect)((()=>{l().get(`${We}teams/`,{headers:{Authorization:`Token ${e}`}}).then((e=>{let{data:s}=e;for(const t of s){const e=t.players.reduce((function(e,s,t){return(t%2===0?e.push([s]):e[e.length-1].push(s))&&e}),[]);t.players=e,Le[t.game][1](t),t.game.endsWith("_B")?Ge((e=>{const s=[...e];return s.push(t),s})):t.game.endsWith("_G")?Oe((e=>{const s=[...e];return s.push(t),s})):Ie((e=>{const s=[...e];return s.push(t),s}))}})).catch((e=>{console.error(e)}))}),[]);const Me=e=>{t((s=>{const t={...s};return t[`${e}`]=!s[`${e}`],t}))},ze=e=>{const s=e.target.attributes["data-game"].value,t=e.target.name;if(isNaN(t))Le[s][1]((s=>{const a={...s};return a[t]=e.target.value,a}));else{const a=Math.floor(Number(t)/2),n=Number(t)%2;Le[s][1]((s=>{const t={...s};return t.players[a][n]=e.target.value,t}))}},He=s=>{const a=Le[s][0],n={};n.captain_name=a.captain_name,n.captain_phone=a.captain_phone,n.players=[];for(const e of a.players)for(const s of e)n.players.push(s);l().put(`${We}teams/${s}/`,n,{headers:{Authorization:`Token ${e}`}}).then((e=>{s.endsWith("_B")?Ge((e=>{const t=[...e];for(let n=0;n<t.length;n++)if(t[n].game===s){t[n]=a;break}return t})):s.endsWith("_G")?Oe((e=>{const t=[...e];for(let n=0;n<t.length;n++)if(t[n].game===s){t[n]=a;break}return t})):Ie((e=>{const t=[...e];for(let n=0;n<t.length;n++)if(t[n].game===s){t[n]=a;break}return t})),t((e=>{const t={...e};return t[`${s}`]=!e[`${s}`],t}))})).catch((e=>{console.error(e),t((e=>{const t={...e};return t[`${s}`]=!e[`${s}`],t}))}))};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"sub_details",children:[(0,f.jsxs)("div",{className:"heading-register",children:[(0,f.jsx)("div",{className:"events-heading",children:"BOYS"}),(0,f.jsx)("div",{className:"edit_button",children:(0,f.jsx)(b.rU,{onClick:()=>{N.Am.error("Registrations are closed",{position:N.Am.POSITION.BOTTOM_RIGHT})},style:{textDecoration:"none",color:"rgba(2, 0, 33, 1)"},children:"Edit"})})]}),(0,f.jsxs)("table",{className:`${i}`,align:"center",cellpadding:"20",border:"1",children:[(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{className:`${d}`,style:{textAlign:"center"},children:"Event Name"}),(0,f.jsx)("th",{className:`${c}`,style:{textAlign:"center"},children:"Players Name / Count"}),(0,f.jsx)("th",{className:`${o}`,style:{textAlign:"center"},children:"Edit Players"})]}),0===Ee.length?(0,f.jsxs)("tr",{style:{textAlign:"center"},children:[(0,f.jsx)("td",{children:"-"}),(0,f.jsx)("td",{children:"-"}),(0,f.jsx)("td",{children:"-"})]}):Ee.map(((e,t)=>(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:(0,f.jsx)("b",{children:e.game.substr(0,e.game.length-2)})}),(0,f.jsxs)("td",{children:[e.captain_name&&(0,f.jsxs)("b",{children:["Captain / Leader: ",e.captain_name," ",e.captain_phone&&(0,f.jsxs)("span",{children:["(",e.captain_phone,")"]}),(0,f.jsx)("br",{})]}),e.players.some((e=>e.some((e=>e.length))))&&(0,f.jsx)("b",{children:(0,f.jsx)("span",{children:"Players Name: "})}),e.players.reduce(((e,s)=>[...e.filter((e=>e.length)),...s.filter((e=>e.length))])).slice(0,e.players.reduce(((e,s)=>[...e.filter((e=>e.length)),...s.filter((e=>e.length))])).length-1).map(((e,s)=>(0,f.jsxs)("span",{children:[e,", "]},s))),0!==e.players.reduce(((e,s)=>[...e.filter((e=>e.length)),...s.filter((e=>e.length))])).length&&(0,f.jsx)("span",{children:e.players.reduce(((e,s)=>[...e.filter((e=>e.length)),...s.filter((e=>e.length))])).slice(-1)[0]})]}),(0,f.jsxs)("td",{children:[(0,f.jsx)(r.zx,{className:`${m}`,"data-toggle":e.game,onClick:()=>Me(e.game),children:"Add\xa0/\xa0Edit"}),(0,f.jsxs)(r.u_,{isOpen:s[`${e.game}`],toggle:()=>Me(e.game),centered:!0,scrollable:!0,keyboard:!0,size:"lg",children:[(0,f.jsxs)(r.xB,{className:`${x} ${u}`,children:["Players - ",e.game.substr(0,e.game.length-2)," [",e.game.endsWith("B")&&"BOYS",e.game.endsWith("G")&&"GIRLS",e.game.endsWith("M")&&"MIXED","]"]}),(0,f.jsxs)(r.fe,{className:`${g}`,children:[(0,f.jsxs)(r.bZ,{color:"warning",style:{fontSize:"16px",paddingTop:"10px",paddingBottom:"10px"},children:[" ","Your changes are not saved unless you submit them."]}),(0,f.jsxs)("table",{align:"center",cellPadding:"20",className:`${h}`,children:[["Taekwondo","Boxing"].includes(e.game.substr(0,e.game.length-2))&&(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:(0,f.jsx)("b",{children:" "})}),(0,f.jsx)("td",{colSpan:"2",className:"text-danger text-center",children:(0,f.jsxs)("b",{children:["MAXIMUM PLAYERS:"," ","Boxing"===e.game.substr(0,e.game.length-2)?(0,f.jsx)("span",{children:"10"}):(0,f.jsx)("span",{children:"15"})]})})]}),["Taekwondo","Weightlifting","Boxing"].includes(e.game.substr(0,e.game.length-2))&&(0,f.jsxs)("tr",{children:[" ",(0,f.jsx)("td",{children:(0,f.jsx)("b",{children:" "})}),(0,f.jsx)("td",{colSpan:"2",className:"text-danger text-center",children:(0,f.jsx)("b",{children:"Maximum 2 players are allowed in each weight category"})})]}),(0,f.jsxs)("tr",{children:[["Taekwondo","Weightlifting","Boxing"].includes(e.game.substr(0,e.game.length-2))&&(0,f.jsx)("td",{children:(0,f.jsx)("b",{children:Re[e.game.substr(0,e.game.length-2)][0]})}),(0,f.jsx)("td",{children:(0,f.jsx)("input",{type:"text",className:"form-control",placeholder:"Captain / Leader Name","data-game":e.game,name:"captain_name",value:Le[`${e.game}`][0].captain_name,onChange:ze})}),(0,f.jsx)("td",{children:(0,f.jsx)("input",{type:"tel",className:"form-control","data-game":e.game,name:"captain_phone",placeholder:"Captain / Leader Phone No.",value:Le[`${e.game}`][0].captain_phone,onChange:ze})})]})]}),(0,f.jsx)("table",{align:"center",cellpadding:"20",className:`${h}`,children:e.players.map(((s,t)=>(0,f.jsxs)("tr",{children:[["Taekwondo","Weightlifting","Boxing"].includes(e.game.substr(0,e.game.length-2))&&(0,f.jsx)("td",{children:(0,f.jsx)("b",{children:Re[e.game.substr(0,e.game.length-2)][t+1]})}),s.map(((s,a)=>(0,f.jsx)("td",{children:(0,f.jsx)("input",{type:"text",className:"form-control",placeholder:`Player ${2*t+a+1}`,"data-game":e.game,name:`${2*t+a}`,value:Le[`${e.game}`][0].players[t][a],onChange:ze})})))]})))})]}),(0,f.jsxs)(r.mz,{className:`${j}`,children:[(0,f.jsx)(r.zx,{className:`${_}`,onClick:()=>Me(e.game),children:"Cancel"}),(0,f.jsx)(r.zx,{className:`${m}`,onClick:()=>{He(e.game)},children:"Submit"})]})]})]})]},t)))]})]}),(0,f.jsx)("br",{}),(0,f.jsxs)("div",{className:"sub_details",children:[(0,f.jsxs)("div",{className:"heading-register",children:[(0,f.jsx)("div",{className:"events-heading",children:"Girls"}),(0,f.jsx)("div",{className:"edit_button",children:(0,f.jsx)(b.rU,{onClick:()=>{N.Am.error("Registrations are closed",{position:N.Am.POSITION.BOTTOM_RIGHT})},style:{textDecoration:"none",color:"rgba(2, 0, 33, 1)"},children:"Edit"})})]}),(0,f.jsxs)("table",{className:`${i}`,align:"center",cellpadding:"20",border:"1",children:[(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{className:`${d}`,style:{textAlign:"center"},children:"Event Name"}),(0,f.jsx)("th",{className:`${c}`,style:{textAlign:"center"},children:"Players Name / Count"}),(0,f.jsx)("th",{className:`${o}`,style:{textAlign:"center"},children:"Edit Players"})]}),0===Pe.length?(0,f.jsxs)("tr",{style:{textAlign:"center"},children:[(0,f.jsx)("td",{children:"-"}),(0,f.jsx)("td",{children:"-"}),(0,f.jsx)("td",{children:"-"})]}):Pe.map(((e,t)=>(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:(0,f.jsx)("b",{children:e.game.substr(0,e.game.length-2)})}),(0,f.jsxs)("td",{children:[e.captain_name&&(0,f.jsxs)("b",{children:["Captain / Leader: ",e.captain_name," ",e.captain_phone&&(0,f.jsxs)("span",{children:["(",e.captain_phone,")"]}),(0,f.jsx)("br",{})]}),e.players.some((e=>e.some((e=>e.length))))&&(0,f.jsx)("b",{children:(0,f.jsx)("span",{children:"Players Name: "})}),e.players.reduce(((e,s)=>[...e.filter((e=>e.length)),...s.filter((e=>e.length))])).slice(0,e.players.reduce(((e,s)=>[...e.filter((e=>e.length)),...s.filter((e=>e.length))])).length-1).map(((e,s)=>(0,f.jsxs)("span",{children:[e,", "]},s))),0!==e.players.reduce(((e,s)=>[...e.filter((e=>e.length)),...s.filter((e=>e.length))])).length&&(0,f.jsx)("span",{children:e.players.reduce(((e,s)=>[...e.filter((e=>e.length)),...s.filter((e=>e.length))])).slice(-1)[0]})]}),(0,f.jsxs)("td",{children:[(0,f.jsx)(r.zx,{className:`${m}`,"data-toggle":e.game,onClick:()=>Me(e.game),children:"Add\xa0/\xa0Edit"}),(0,f.jsxs)(r.u_,{isOpen:s[`${e.game}`],toggle:()=>Me(e.game),centered:!0,scrollable:!0,keyboard:!0,size:"lg",children:[(0,f.jsxs)(r.xB,{className:`${x} ${u}`,children:["Players - ",e.game.substr(0,e.game.length-2)," [",e.game.endsWith("B")&&"BOYS",e.game.endsWith("G")&&"GIRLS",e.game.endsWith("M")&&"MIXED","]"]}),(0,f.jsxs)(r.fe,{className:`${g}`,children:[(0,f.jsxs)(r.bZ,{color:"warning",style:{fontSize:"16px",paddingTop:"10px",paddingBottom:"10px"},children:[" ","Your changes are not saved unless you submit them."]}),(0,f.jsxs)("table",{align:"center",cellPadding:"20",className:`${h}`,children:[["Taekwondo","Boxing"].includes(e.game.substr(0,e.game.length-2))&&(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:(0,f.jsx)("b",{children:" "})}),(0,f.jsx)("td",{colSpan:"2",className:"text-danger text-center",children:(0,f.jsxs)("b",{children:["MAXIMUM PLAYERS:"," ","Boxing"===e.game.substr(0,e.game.length-2)?(0,f.jsx)("span",{children:"10"}):(0,f.jsx)("span",{children:"15"})]})})]}),["Taekwondo","Weightlifting","Boxing"].includes(e.game.substr(0,e.game.length-2))&&(0,f.jsxs)("tr",{children:[" ",(0,f.jsx)("td",{children:(0,f.jsx)("b",{children:" "})}),(0,f.jsx)("td",{colSpan:"2",className:"text-danger text-center",children:(0,f.jsx)("b",{children:"Maximum 2 players are allowed in each weight category"})})]}),(0,f.jsxs)("tr",{children:[["Taekwondo","Boxing"].includes(e.game.substr(0,e.game.length-2))&&(0,f.jsx)("td",{children:(0,f.jsx)("b",{children:Re[e.game.substr(0,e.game.length-2)][0]})}),(0,f.jsx)("td",{children:(0,f.jsx)("input",{type:"text",className:"form-control",placeholder:"Captain / Leader Name","data-game":e.game,name:"captain_name",value:Le[`${e.game}`][0].captain_name,onChange:ze})}),(0,f.jsx)("td",{children:(0,f.jsx)("input",{type:"tel",className:"form-control","data-game":e.game,name:"captain_phone",placeholder:"Captain / Leader Phone No.",value:Le[`${e.game}`][0].captain_phone,onChange:ze})})]})]}),(0,f.jsx)("table",{align:"center",cellpadding:"20",className:`${h}`,children:e.players.map(((s,t)=>(0,f.jsxs)("tr",{children:[["Taekwondo","Boxing"].includes(e.game.substr(0,e.game.length-2))&&(0,f.jsx)("td",{children:(0,f.jsx)("b",{children:Re[e.game.substr(0,e.game.length-2)][t+1]})}),s.map(((s,a)=>(0,f.jsx)("td",{children:(0,f.jsx)("input",{type:"text",className:"form-control",placeholder:`Player ${2*t+a+1}`,"data-game":e.game,name:`${2*t+a}`,value:Le[`${e.game}`][0].players[t][a],onChange:ze})})))]})))})]}),(0,f.jsxs)(r.mz,{className:`${j}`,children:[(0,f.jsx)(r.zx,{className:`${_}`,onClick:()=>Me(e.game),children:"Cancel"}),(0,f.jsx)(r.zx,{className:`${m}`,onClick:()=>{He(e.game)},children:"Submit"})]})]})]})]},t)))]})]}),(0,f.jsx)("br",{}),(0,f.jsxs)("div",{className:"sub_details",children:[(0,f.jsxs)("div",{className:"heading-register",children:[(0,f.jsx)("div",{className:"events-heading",children:"Mixed"}),(0,f.jsx)("div",{className:"edit_button",children:(0,f.jsx)(b.rU,{onClick:()=>{N.Am.error("Registrations are closed",{position:N.Am.POSITION.BOTTOM_RIGHT})},style:{textDecoration:"none",color:"rgba(2, 0, 33, 1)"},children:"Edit"})})]}),(0,f.jsxs)("table",{className:`${i}`,align:"center",cellpadding:"20",border:"1",children:[(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{className:`${d}`,style:{textAlign:"center"},children:"Event Name"}),(0,f.jsx)("th",{className:`${c}`,style:{textAlign:"center"},children:"Players Name / Count"}),(0,f.jsx)("th",{className:`${o}`,style:{textAlign:"center"},children:"Edit Players"})]}),0===we.length?(0,f.jsxs)("tr",{style:{textAlign:"center"},children:[(0,f.jsx)("td",{children:"-"}),(0,f.jsx)("td",{children:"-"}),(0,f.jsx)("td",{children:"-"})]}):we.map(((e,t)=>(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:(0,f.jsx)("b",{children:e.game.substr(0,e.game.length-2)})}),(0,f.jsxs)("td",{children:[e.captain_name&&(0,f.jsxs)("b",{children:["Captain / Leader: ",e.captain_name," ",e.captain_phone&&(0,f.jsxs)("span",{children:["(",e.captain_phone,")"]}),(0,f.jsx)("br",{})]}),e.players.some((e=>e.some((e=>e.length))))&&(0,f.jsx)("b",{children:(0,f.jsx)("span",{children:"Players Name: "})}),e.players.reduce(((e,s)=>[...e.filter((e=>e.length)),...s.filter((e=>e.length))])).slice(0,e.players.reduce(((e,s)=>[...e.filter((e=>e.length)),...s.filter((e=>e.length))])).length-1).map(((e,s)=>(0,f.jsxs)("span",{children:[e,", "]},s))),0!==e.players.reduce(((e,s)=>[...e.filter((e=>e.length)),...s.filter((e=>e.length))])).length&&(0,f.jsx)("span",{children:e.players.reduce(((e,s)=>[...e.filter((e=>e.length)),...s.filter((e=>e.length))])).slice(-1)[0]})]}),(0,f.jsxs)("td",{children:[(0,f.jsx)(r.zx,{className:`${m}`,"data-toggle":e.game,onClick:()=>Me(e.game),children:"Add\xa0/\xa0Edit"}),(0,f.jsxs)(r.u_,{isOpen:s[`${e.game}`],toggle:()=>Me(e.game),centered:!0,scrollable:!0,keyboard:!0,size:"lg",children:[(0,f.jsxs)(r.xB,{className:`${x} ${u}`,children:["Players - ",e.game.substr(0,e.game.length-2)," [",e.game.endsWith("B")&&"BOYS",e.game.endsWith("G")&&"GIRLS",e.game.endsWith("M")&&"MIXED","]"]}),(0,f.jsxs)(r.fe,{className:`${g}`,children:[(0,f.jsx)("div",{style:{backgroundColor:"red"},children:(0,f.jsxs)(r.bZ,{style:{fontSize:"16px",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"red"},children:[" ","Your changes are not saved unless you submit them."]})}),(0,f.jsx)("table",{align:"center",cellPadding:"20",children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:(0,f.jsx)("input",{type:"text",style:{border:"2px solid #760e53"},className:`${p}`,placeholder:"Captain / Leader Name","data-game":e.game,name:"captain_name",value:Le[`${e.game}`][0].captain_name,onChange:ze})}),(0,f.jsx)("td",{children:(0,f.jsx)("input",{type:"tel",className:"form-control","data-game":e.game,name:"captain_phone",placeholder:"Captain / Leader Phone No.",value:Le[`${e.game}`][0].captain_phone,onChange:ze})})]})}),(0,f.jsx)("table",{align:"center",cellpadding:"20",children:e.players.map(((s,t)=>(0,f.jsx)("tr",{children:s.map(((s,a)=>(0,f.jsx)("td",{children:(0,f.jsx)("input",{type:"text",className:"form-control",placeholder:`Player ${2*t+a+1}`,"data-game":e.game,name:`${2*t+a}`,value:Le[`${e.game}`][0].players[t][a],style:{border:"1px solid #760e53"},onChange:ze})})))})))})]}),(0,f.jsxs)(r.mz,{className:`${j}`,children:[(0,f.jsx)(r.zx,{className:`${_}`,onClick:()=>Me(e.game),children:"Cancel"}),(0,f.jsx)(r.zx,{className:`${m}`,onClick:()=>{He(e.game)},children:"Submit"})]})]})]})]},t)))]})]}),(0,f.jsx)("br",{})]})},k=()=>{const[e,s]=(0,a.useState)({num_of_boys:"-",num_of_girls:"-",college_rep:"-",leader_name:"-",leader_contact_num:"-",num_of_faculty_members:"-",num_of_coaches_pti:"-",num_of_supporting_staff:"-"}),t=localStorage.getItem("token"),n={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BASE_URL;return(0,a.useEffect)((()=>{l().get(`${n}teams/contingent/details/`,{headers:{Authorization:`Token ${t}`}}).then((e=>{s(e.data)})).catch((e=>{console.log("error=",e)}))}),[]),(0,f.jsx)("div",{className:"user-dashboard regn_Pad",children:(0,f.jsx)("div",{className:"row_dbRegistration",children:(0,f.jsx)("div",{className:"col-xs-12 gutter2 widthAdjust",children:(0,f.jsx)("div",{className:"welcome-text2",children:(0,f.jsx)("div",{className:"text-justify",children:(0,f.jsxs)("h2",{children:[(0,f.jsx)("br",{}),(0,f.jsxs)("div",{className:"sub_details",children:[(0,f.jsxs)("div",{className:"contingent",children:[(0,f.jsx)("div",{className:"events-heading",children:"CONTINGENT DETAILS"}),(0,f.jsx)("div",{className:"edit_button",children:(0,f.jsx)(b.rU,{onClick:()=>{N.Am.error("Registrations are closed",{position:N.Am.POSITION.BOTTOM_RIGHT})},style:{textDecoration:"none",color:"rgba(2, 0, 33, 1)"},children:"Edit"})})]}),(0,f.jsxs)("table",{align:"center",cellpadding:"20",className:"events-table",children:[(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{className:"left-column",style:{textAlign:"left"},children:[(0,f.jsx)("b",{children:"Total Number of Boys"})," "]}),(0,f.jsx)("td",{className:"right-column",children:e.num_of_boys})]}),(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{className:"left-column",style:{textAlign:"left"},children:[(0,f.jsx)("b",{children:"Total Number of Girls"})," "]}),(0,f.jsx)("td",{className:"right-column",children:e.num_of_girls})]}),(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{className:"left-column",style:{textAlign:"left",lineHeight:"1.5"},children:[(0,f.jsx)("b",{children:"Total Number of Faculty members accompanying the contingent"})," "]}),(0,f.jsx)("td",{className:"right-column",children:e.num_of_faculty_members})]}),(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{className:"left-column",style:{textAlign:"left",lineHeight:"1.5"},children:[(0,f.jsx)("b",{children:"Total Number of Coaches & PTI accompanying the contingent"})," "]}),(0,f.jsx)("td",{className:"right-column",children:e.num_of_coaches_pti})]}),(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{className:"left-column",style:{textAlign:"left",lineHeight:"1.5"},children:[(0,f.jsx)("b",{children:"Total Number of Supporting Staff accompanying the contingent"})," "]}),(0,f.jsx)("td",{className:"right-column",children:e.num_of_supporting_staff})]}),(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{className:"left-column",style:{textAlign:"left",lineHeight:"1.5"},children:[(0,f.jsx)("b",{children:"Full Name of Contingent Leader"})," "]}),(0,f.jsx)("td",{className:"right-column",children:e.leader_name})]}),(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{className:"left-column",style:{textAlign:"left",lineHeight:"1.5"},children:[(0,f.jsx)("b",{children:"Contact Number of Contingent Leader"})," "]}),(0,f.jsx)("td",{className:"right-column",children:e.leader_contact_num})]})]})]}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsx)(y,{})]})})})})})})}}}]);
//# sourceMappingURL=815.ed4b4ef4.chunk.js.map