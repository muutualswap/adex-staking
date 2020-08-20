(this["webpackJsonpadex-staking-ui"]=this["webpackJsonpadex-staking-ui"]||[]).push([[0],{218:function(e,t,a){e.exports=a.p+"static/media/adex-staking.bf64bad2.svg"},244:function(e,t,a){e.exports=a(399)},249:function(e,t,a){},255:function(e,t){},263:function(e,t){},265:function(e,t){},296:function(e,t){},351:function(e,t){},353:function(e,t){},399:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),f=a.n(o),c=(a(249),a(34)),i=a(7),s=a.n(i),l=a(17),u=a(456),d=a(227),b=a(465),m=a(214),p=a.n(m),g=a(212),w=a.n(g),h=a(213),y=a.n(h),v=a(215),x=a.n(v),E={primary:{main:"#1B75BC",contrastText:"#fff"},accentOne:{main:"#57467B",contrastText:"#fff"},accentTwo:{main:"#7CB4B8",contrastText:"#fff"},grey:{main:"#3f3e3e",contrastText:"#fff"},error:w.a,warning:y.a,first:p.a,contrastThreshold:3,tonalOffset:.2,text:x.a},k=Object(d.a)({typography:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:14},palette:Object(c.a)({},E),overrides:{MuiButton:{root:{borderRadius:0},outlined:{borderRadius:0}},MuiTableCell:{head:{whiteSpace:"nowrap"},root:{whiteSpace:"nowrap"}},MuiPaper:{rounded:{borderRadius:0}},MuiTooltip:{tooltip:{borderRadius:0,fontSize:"0.9em",backgroundColor:"rgba(0,0,0, 0.69)"},arrow:{color:"rgba(0,0,0, 0.69)"}}}}),j=Object(b.a)(k,{options:["xs","sm","md","lg","xl"],factor:3}),A=a(457),O=a(458),C=a(401),S=a(400),D=a(459),B=a(226),T=a.n(B),U=a(232),P=a(466),R=a(462),I=a(434),X=a(229),F=a(217),M=a.n(F),N=a(438),_=a(467),q=a(218),L=a.n(q),Y=a(26),W=a(19),z=a(219),V=a(220),J=a.n(V),H=a(106),G=a(221),Z=a(222),$=a(107),K=a(223),Q=a(68),ee=a(228),te=a(441),ae=a(442),ne=a(440),re=a(443),oe=a(444),fe=a(445),ce=a(446),ie=a(447),se=a(231),le=a(439),ue=a(137);function de(e){var t=e.title,a=e.subtitle,n=e.extra,o=e.loaded,f=e.actions,c="string"===typeof n?r.a.createElement(ue.a,{color:"primary",variant:"h6"},n):n||r.a.createElement(r.a.Fragment,null);return r.a.createElement(se.a,{elevation:3,style:{height:"100%"}},r.a.createElement("div",{style:{padding:j.spacing(2),minHeight:"85px"}},r.a.createElement(ue.a,{variant:a.length>16?"h6":"h5"},a),c,r.a.createElement(ue.a,{color:"textSecondary",variant:"subtitle2"},t),f||r.a.createElement(r.a.Fragment,null)),o?r.a.createElement(r.a.Fragment,null):r.a.createElement(le.a,null))}var be=a(6),me=a(461);function pe(e){return Object(W.formatUnits)(e,18)}function ge(e){return Object(W.formatUnits)(e.div("100000000000000"),4)}function we(e){return Object(W.parseUnits)(e,18)}function he(e,t){var a=(e&&e.nonce?e.nonce.toNumber():Date.now()/1e3)<1597276800&&Date.now()<16093728e5,n=6e6/parseFloat(pe(t),10)*(365/145),r=1e6/parseFloat(pe(t),10)*(365/30);return n+(a?r:0)}var ye=function(e){return be.f.find((function(t){return t.id===e}))};function ve(e){var t=e.owner,a=e.amount,n=e.poolId,r=e.nonce;return Object(W.keccak256)(W.defaultAbiCoder.encode(["address","address","uint","bytes32","uint"],[be.c,t,a,n,r]))}function xe(e){var t=e.stats,a=e.onRequestUnbond,o=e.onUnbond,f=e.onClaimRewards,c=e.onRestake,i=t.userBonds.filter((function(e){return"Active"===e.status})).map((function(e){return e.currentAmount})).reduce((function(e,t){return e.add(t)}),be.j),s=Object(n.useState)({}),u=Object(l.a)(s,2),d=u[0],b=u[1];Object(n.useEffect)((function(){fetch(be.g).then((function(e){return e.json()})).then(b).catch(console.error)}),[]);var m=function(e){if(!e)return null;if(!d.USD)return null;var t=parseFloat(pe(e),10)*d.USD;return"".concat(t.toFixed(2)," USD")},p="This table will show all your individual ADX deposits (bonds), along\n\t\twith information as status, amount and earned reward. By using the\n\t\taction buttons, you will be able to request unbonding and withdraw your\n\t\tADX after the ".concat(be.i," day lock-up period."),g=!t.loaded||t.userBonds.length?r.a.createElement(r.a.Fragment,null):r.a.createElement(re.a,{item:!0,xs:12,style:{marginTop:j.spacing(2)}},r.a.createElement(R.a,{square:!0,elevation:6,variant:"filled",severity:"info"},p)),w={fontWeight:"bold"};return r.a.createElement(re.a,{container:!0,alignItems:"stretch",style:{padding:j.spacing(4),maxWidth:"1200px",margin:"auto"},spacing:2},r.a.createElement(re.a,{item:!0,md:3,sm:6,xs:12},function(e){var t=e.rewardChannels,a=e.userBonds,n=e.onClaimRewards,o=e.onRestake,f="Your total unclaimed reward",c=null!=t;if(!c)return de({loaded:c,title:f,extra:"0.00 USD",subtitle:"0.00 DAI"});var i,s=function(e){return e.map((function(e){return e.outstandingReward})).reduce((function(e,t){return e.add(t)}),be.j)},l=s(t.filter((function(e){return e.channelArgs.tokenAddr===be.a}))),u=s(t.filter((function(e){return e.channelArgs.tokenAddr!==be.a}))),d=l.gt(be.j)&&a.find((function(e){return"Unbonded"!==e.status}));return de({loaded:!0,title:f,actions:r.a.createElement(me.a,{display:"flex",flexDirection:"row",paddingTop:1},r.a.createElement(ne.a,{size:"small",variant:"contained",color:"secondary",disabled:l.add(u).eq(be.j),onClick:function(){return n(t)}},"claim"),r.a.createElement(me.a,{ml:1},r.a.createElement(ne.a,{size:"small",variant:"contained",color:"secondary",disabled:!d,onClick:function(){return o(l)}},"re-stake"))),subtitle:u.gt(be.j)?"".concat(ge(l)," ADX, ").concat((i=u,Object(W.formatUnits)(i.div("10000000000000000"),2))," DAI"):"".concat(ge(l)," ADX")})}({rewardChannels:t.rewardChannels,userBonds:t.userBonds,onClaimRewards:f,onRestake:c})),r.a.createElement(re.a,{item:!0,md:3,sm:6,xs:12},de({loaded:t.loaded,title:"Total ADX staked",extra:m(t.totalStake),subtitle:ge(t.totalStake)+" ADX"})),r.a.createElement(re.a,{item:!0,md:3,sm:6,xs:12},de({loaded:t.loaded,title:"Your total active stake",extra:m(i),subtitle:ge(i)+" ADX"})),r.a.createElement(re.a,{item:!0,md:3,sm:6,xs:12},de({loaded:t.loaded,title:"Your balance",subtitle:t.userBalance?ge(t.userBalance)+" ADX":"",extra:m(t.userBalance)})),r.a.createElement(oe.a,{xs:12},r.a.createElement(fe.a,{"aria-label":"Bonds table",style:{marginTop:j.spacing(2)}},r.a.createElement(ce.a,null,r.a.createElement(te.a,null,r.a.createElement(ae.a,{style:w},"Bond amount"),r.a.createElement(ae.a,{style:w,align:"right"},"Pool"),r.a.createElement(ae.a,{style:w,align:"right"},"Created"),r.a.createElement(ae.a,{style:w,align:"right"},"Status"),r.a.createElement(ae.a,{style:w,align:"right"},"Actions"))),r.a.createElement(ie.a,null,Object(ee.a)(t.userBonds||[]).filter((function(e){return"Unbonded"!==e.status})).reverse().map((function(e){var n,f=ye(e.poolId),c=f?f.label:e.poolId,i=new Date(1e3*(e.nonce.gt(be.j)?e.nonce:e.time).toNumber());return r.a.createElement(te.a,{key:ve(e)},r.a.createElement(ae.a,null,ge(e.currentAmount)," ADX"),r.a.createElement(ae.a,{align:"right"},c),r.a.createElement(ae.a,{align:"right"},"".concat((n=i).getDate()," ").concat(n.toLocaleString("default",{month:"short"})," ").concat(n.getFullYear())),r.a.createElement(ae.a,{align:"right"},function(e){if("UnbondRequested"===e.status){var a=e.willUnlock.getTime(),n=Date.now();if(a>n){var r=Math.ceil((a-n)/864e5);return"Can unbond in ".concat(r," days")}return"Can unbond"}return"Active"===e.status?"Active, earning ".concat((100*he(e,t.totalStake)).toFixed(2),"% APY"):e.status}(e)),r.a.createElement(ae.a,{align:"right"},"Active"===e.status?r.a.createElement(ne.a,{color:"primary",onClick:function(){return a(e)}},"Request Unbond"):r.a.createElement(ne.a,{disabled:"Unbonded"===e.status||!e.willUnlock||e.willUnlock.getTime()>Date.now(),onClick:function(){return o(e)},color:"secondary"},"Unbond")))}))))),g)}var Ee=a(468),ke=a(450),je=a(470),Ae=a(463),Oe=a(451),Ce=a(464);function Se(e){var t=e.maxAmount,a=e.onNewBond,o=e.totalStake,f=e.pools,i=Object(n.useState)(be.d),s=Object(l.a)(i,2),u=s[0],d=s[1],b=Object(n.useState)(0),m=Object(l.a)(b,2),p=m[0],g=m[1],w=Object(n.useState)(!1),h=Object(l.a)(w,2),y=h[0],v=h[1],x=Object(n.useState)(""),E=Object(l.a)(x,2),k=E[0],A=E[1],O=Object(n.useState)(!1),C=Object(l.a)(O,2),S=C[0],D=C[1],B=Object(n.useState)(""),T=Object(l.a)(B,2),U=T[0],P=T[1],R={minWidth:"180px"},I=ye(U),X=be.h?r.a.createElement(r.a.Fragment,null,"\xa0and"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:be.h},"staking conditions")):r.a.createElement(r.a.Fragment,null),F=r.a.createElement(r.a.Fragment,null,"I understand I am locking up my ADX for at least ",be.i," days and I am familiar with the\xa0",r.a.createElement("a",{href:"https://www.adex.network/tos/",target:"_blank",rel:"noopener noreferrer"},"Terms and conditions"),X,"."),M=function(e){var a=e.amountBN,n=e.poolToValidate,r=n?we(n.minStakingAmount):be.j;return a.gt(t)?(v(!0),void A("Insufficient ADX amount!")):n&&a.lt(r)?(v(!0),void A("ADX amount less than minimum required for selected pool!")):void v(!1)},N=function(e){M({amountBN:e,poolToValidate:I}),g(pe(e)),d(Object(c.a)({},u,{amount:e}))},q=r.a.createElement("span",{role:"img","aria-label":"farmer"},"\ud83c\udf3e");return r.a.createElement(se.a,{elevation:2,style:{width:"500px",padding:j.spacing(2,4,3)}},r.a.createElement("h2",null,"Create a bond"),r.a.createElement(re.a,{container:!0,spacing:2},r.a.createElement(re.a,{item:!0,xs:6},r.a.createElement(Ee.a,{required:!0,label:"ADX amount",type:"number",style:R,value:p,error:y,onChange:function(e){var t=Math.max(0,e.target.value),a=we(t.toString(10));N(a),g(t.toString(10))},helperText:y?k:null}),r.a.createElement(ue.a,{variant:"subtitle2"},"Max amount:",r.a.createElement(ne.a,{onClick:function(){N(t)}},ge(t)," ADX"))),r.a.createElement(re.a,{item:!0,xs:6},r.a.createElement(ke.a,{required:!0},r.a.createElement(je.a,null,"Pool"),r.a.createElement(Ae.a,{style:R,value:U,onChange:function(e){return function(e){var t=we(p),a=ye(e);M({amountBN:t,poolToValidate:a}),P(e),d(Object(c.a)({},u,{poolId:e}))}(e.target.value)}},r.a.createElement(_.a,{value:""},r.a.createElement("em",null,"None")),f.map((function(e){var t=e.label,a=e.id;return r.a.createElement(_.a,{key:a,value:a},t)}))))),I?r.a.createElement(re.a,{item:!0,xs:12},r.a.createElement(re.a,{item:!0,xs:12},r.a.createElement(ue.a,{variant:"h6"},"Pool reward policy:"),r.a.createElement(ue.a,{variant:"body1"},I.rewardPolicy)),r.a.createElement(re.a,{item:!0,xs:12,style:{marginTop:j.spacing(2)}},r.a.createElement(ue.a,{variant:"h6"},"Pool slashing policy:"),r.a.createElement(ue.a,{variant:"body1"},I.slashPolicy)),r.a.createElement(re.a,{item:!0,xs:12,style:{marginTop:j.spacing(2)}},r.a.createElement(ue.a,{variant:"h6"},"Pool APY:"),r.a.createElement(ue.a,{variant:"body1"},q," Current annual yield of"," ",(100*he(null,o)).toFixed(2),"% ",q)),r.a.createElement(re.a,{item:!0,xs:12,style:{marginTop:j.spacing(2)}},r.a.createElement(ue.a,{variant:"body1"},r.a.createElement("b",null,"Please sign ALL Metamask transactions that pop up.")))):"",r.a.createElement(re.a,{item:!0,xs:12},r.a.createElement(Oe.a,{style:{userSelect:"none"},label:F,control:r.a.createElement(Ce.a,{checked:S,onChange:function(e){return D(e.target.checked)}})})),r.a.createElement(re.a,{item:!0,xs:12},r.a.createElement(ke.a,{style:{display:"flex"}},r.a.createElement(ne.a,{disabled:!(u.poolId&&S&&u.amount.gt(be.j)&&!y),color:"primary",variant:"contained",onClick:function(){D(!1),a(u)}},"Stake ADX")))))}var De=a(452),Be=a(453),Te=a(454),Ue=a(455);function Pe(e){var t=e.isOpen,a=e.onDeny,n=e.onConfirm,o=e.content,f=e.title,c=void 0===f?"Are you sure?":f,i=e.confirmActionName;return r.a.createElement(De.a,{open:t,onClose:a},r.a.createElement(Be.a,{id:"alert-dialog-title"},c),r.a.createElement(Te.a,null,o),r.a.createElement(Ue.a,null,r.a.createElement(ne.a,{onClick:a,color:"primary"},"Cancel"),r.a.createElement(ne.a,{onClick:n,variant:"contained",color:"primary"},i)))}var Re="0x4470BB87d77b963A013DB939BE332f927f2b992e",Ie=Object(Y.getDefaultProvider)(),Xe=new Y.Contract(Re,Q,Ie);function Fe(e,t){var a=Object(n.useState)(be.j),o=Object(l.a)(a,2),f=o[0],c=o[1],i=Object(n.useState)(!1),u=Object(l.a)(i,2),d=u[0],b=u[1];Object(n.useEffect)((function(){if(e){(function(){var t,a;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(e());case 2:if(t=n.sent){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,s.a.awrap(t.getAddress());case 7:return a=n.sent,n.t0=c,n.next=11,s.a.awrap(Xe.balanceOf(a));case 11:n.t1=n.sent,(0,n.t0)(n.t1);case 13:case"end":return n.stop()}}))})().catch((function(e){return console.error(e)}))}}),[e]);var m=r.a.createElement("div",null,r.a.createElement("p",null,"The ADX token completed a"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.adex.network/blog/token-upgrade-defi-features/"},"successful upgrade")," ","to a new smart contract. You are currently holding"," ",r.a.createElement("b",null,f.gt(be.j)?Object(W.formatUnits)(f,4):""," legacy ADX"),"."),r.a.createElement("p",null,"Starting August 21st 2020, the"," ",r.a.createElement("b",null,"legacy ADX will be deprecated and will no longer be traded on exchanges"),"."),r.a.createElement("p",null,"We recommend that you swap your legacy ADX right now by clicking the"," ",r.a.createElement("i",null,r.a.createElement("b",null,"Swap now"))," ","button and signing the MetaMask transactions.")),p=t(Me.bind(null,c,f,e)),g=Pe({isOpen:f.gt(be.j),onDeny:function(){return c(be.j)},onConfirm:function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(p());case 2:return e=t.sent,b(!0),t.next=6,s.a.awrap(Promise.all(e.map((function(e){return e.wait()}))));case 6:b(!1);case 7:case"end":return t.stop()}}))},confirmActionName:"Swap now",title:"ADX Token ugprade",content:m});return r.a.createElement(r.a.Fragment,null,g,r.a.createElement(P.a,{open:d},r.a.createElement(R.a,{elevation:6,variant:"filled",severity:"success"},"Token swap is in progress! It will be completed once all your pending transactions have been confirmed.")))}function Me(e,t,a){var n,r,o,f,c,i,l,u;return s.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return e(be.j),d.next=3,s.a.awrap(a());case 3:return n=d.sent,d.next=6,s.a.awrap(n.getAddress());case 6:return r=d.sent,o=new Y.Contract(Re,Q,n),f=new Y.Contract(be.a,["function swap(uint prevTokenAmount) external"],n),d.next=11,s.a.awrap(o.allowance(r,be.a));case 11:if(c=d.sent,i=[],l=!1,u=function(e){return l?{gasLimit:e}:(l=!0,{})},!c.lt(t)){d.next=27;break}if(!c.gt(be.j)){d.next=22;break}return d.t0=i,d.next=20,s.a.awrap(o.approve(be.a,be.j,u(6e4)));case 20:d.t1=d.sent,d.t0.push.call(d.t0,d.t1);case 22:return d.t2=i,d.next=25,s.a.awrap(o.approve(be.a,t,u(6e4)));case 25:d.t3=d.sent,d.t2.push.call(d.t2,d.t3);case 27:return d.t4=i,d.next=30,s.a.awrap(f.swap(t,u(1e5)));case 30:return d.t5=d.sent,d.t4.push.call(d.t4,d.t5),d.abrupt("return",i);case 33:case"end":return d.stop()}}))}var Ne=a(57),_e="0x333420fc6a897356e69b62417cd17ff012177d2b",qe=Object(Y.getDefaultProvider)(),Le=new Y.Contract(be.c,G,qe),Ye=new Y.Contract(be.a,Q,qe),We=new Y.Contract(_e,$,qe),ze=Object(W.bigNumberify)("1000000000000000000"),Ve=Object(W.bigNumberify)("200000000000000000"),Je={loaded:!1,userBonds:[],userBalance:be.j,totalStake:be.j};function He(e){return r.a.createElement(R.a,Object.assign({elevation:6,variant:"filled"},e))}function Ge(){var e,t;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if("undefined"===typeof window.ethereum){a.next=3;break}return a.next=3,s.a.awrap(window.ethereum.enable());case 3:if(window.web3){a.next=5;break}return a.abrupt("return",null);case 5:return e=new z.Web3Provider(window.web3.currentProvider),t=e.getSigner(),a.abrupt("return",t);case 8:case"end":return a.stop()}}))}function Ze(){var e,t,a,n,r,o;return s.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,s.a.awrap(Ge());case 2:if(e=f.sent){f.next=5;break}return f.abrupt("return",{loaded:!0,userBonds:[],userBalance:be.j,rewardChannels:[]});case 5:return f.next=7,s.a.awrap(e.getAddress());case 7:return t=f.sent,f.next=10,s.a.awrap(Promise.all([$e(t),Ke(t)]));case 10:return a=f.sent,n=Object(l.a)(a,2),r=n[0],o=n[1],f.abrupt("return",Object(c.a)({},r,{loaded:!0,rewardChannels:o}));case 15:case"end":return f.stop()}}))}function $e(e){var t,a,n,r,o,f,i,u,d;return s.a.async((function(b){for(;;)switch(b.prev=b.next){case 0:return t=Object(Ne.a)(e).addr,b.next=3,s.a.awrap(Promise.all([Promise.all([Ye.balanceOf(e),Ye.balanceOf(t)]),qe.getLogs({fromBlock:0,address:be.c,topics:[null,Object(W.hexZeroPad)(t,32)]}),qe.getLogs(Object(c.a)({fromBlock:0},Le.filters.LogSlash(null,null)))]));case 3:return a=b.sent,n=Object(l.a)(a,3),r=n[0],o=n[1],f=n[2],i=r.reduce((function(e,t){return e.add(t)})),u=f.reduce((function(e,t){var a=Le.interface.parseLog(t).values,n=a.poolId,r=a.newSlashPts;return e[n]=r,e}),{}),d=o.reduce((function(e,t){var a=t.topics[0],n=Le.interface.events;if(a===n.LogBond.topic){var r=Le.interface.parseLog(t).values,o=r.owner,f=r.amount,i=r.poolId,s=r.nonce,l=r.slashedAtStart,d={owner:o,amount:f,poolId:i,nonce:s,slashedAtStart:l,time:r.time};e.push(Object(c.a)({id:ve(d),status:"Active",currentAmount:d.amount.mul(ze.sub(u[i]||be.j)).div(ze.sub(l))},d))}else if(a===n.LogUnbondRequested.topic){var b=Le.interface.parseLog(t).values,m=b.bondId,p=b.willUnlock,g=e.find((function(e){return e.id===m}));g.status="UnbondRequested",g.willUnlock=new Date(1e3*p)}else if(a===n.LogUnbonded.topic){var w=Le.interface.parseLog(t).values.bondId;e.find((function(e){return e.id===w})).status="Unbonded"}return e}),[]),b.abrupt("return",{userBonds:d,userBalance:i});case 12:case"end":return b.stop()}}))}function Ke(e){var t,a,n,r,o,f;return s.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=Object(Ne.a)(e).addr,a=be.f[0],i.next=4,s.a.awrap(fetch("".concat(a.url,"/fee-rewards")));case 4:return n=i.sent,i.next=7,s.a.awrap(n.json());case 7:return r=i.sent,o=Math.floor(Date.now()/1e3),i.next=11,s.a.awrap(Promise.all(r.map((function(a){var n,r,f;return s.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(!(a.channelArgs.validUntil<o)){i.next=2;break}return i.abrupt("return",null);case 2:if(n=a.balances[e]?e:t,a.balances[n]){i.next=5;break}return i.abrupt("return",null);case 5:return r=new J.a(a.balances),i.t0=Object(W.bigNumberify)(a.balances[n]),i.next=9,s.a.awrap(We.withdrawnPerUser(a.channelId,n));case 9:if(i.t1=i.sent,!(f=i.t0.sub.call(i.t0,i.t1)).lt(Ve)){i.next=13;break}return i.abrupt("return",null);case 13:return i.abrupt("return",Object(c.a)({},a,{outstandingReward:f,claimFrom:n,proof:r.getProof(n),stateRoot:r.mTree.getRoot(),amount:a.balances[n]}));case 14:case"end":return i.stop()}}))}))));case 11:return f=i.sent,i.abrupt("return",f.filter((function(e){return e})));case 13:case"end":return i.stop()}}))}function Qe(e,t){var a,n,r,o,f,c,i,u,d,b,m,p,g,w,h,y,v,x,E;return s.a.async((function(k){for(;;)switch(k.prev=k.next){case 0:if(a=t.amount,n=t.poolId,r=t.nonce,n){k.next=3;break}return k.abrupt("return");case 3:if(e.userBalance){k.next=5;break}return k.abrupt("return");case 5:if(!a.gt(e.userBalance)){k.next=7;break}throw new Error("amount too large");case 7:return k.next=9,s.a.awrap(Ge());case 9:if(o=k.sent){k.next=12;break}throw new Error("failed to get signer");case 12:return k.next=14,s.a.awrap(o.getAddress());case 14:return f=k.sent,c=Object(Ne.a)(f),i=c.addr,u=[a,n,r||Object(W.bigNumberify)(Math.floor(Date.now()/1e3))],k.next=19,s.a.awrap(Promise.all([Ye.allowance(f,i),Ye.allowance(i,Le.address),Ye.balanceOf(i)]));case 19:if(d=k.sent,b=Object(l.a)(d,3),m=b[0],p=b[1],g=b[2],w=a.sub(g),!(h=w.gt(be.j)&&!m.gte(a))){k.next=30;break}return y=new Y.Contract(be.a,Q,o),k.next=30,s.a.awrap(y.approve(i,be.e));case 30:return v=[],w.gt(be.j)&&v.push([Ye.address,Ye.interface.functions.transferFrom.encode([f,i,a])]),p.lt(a)&&v.push([Ye.address,Ye.interface.functions.approve.encode([Le.address,be.e])]),x=e.userBonds.find((function(e){return"Active"===e.status&&e.poolId===n})),E=x?Le.interface.functions.replaceBond.encode([x,[x.amount.add(a),n,x.nonce]]):Le.interface.functions.addBond.encode([u]),v.push([Le.address,E]),k.next=38,s.a.awrap(rt(v,h?{gasLimit:35e4}:{}));case 38:case"end":return k.stop()}}))}function et(e,t){var a,n,r,o,f,c;return s.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=t.amount,n=t.poolId,r=t.nonce,o=[a,n,r||be.j],!e){i.next=15;break}return i.next=5,s.a.awrap(Ge());case 5:if(f=i.sent){i.next=8;break}throw new Error("failed to get signer");case 8:return i.next=10,s.a.awrap(f.getAddress());case 10:return c=i.sent,i.next=13,s.a.awrap(rt([[Le.address,Le.interface.functions.unbond.encode([o])],[Ye.address,Ye.interface.functions.transfer.encode([c,a])]]));case 13:i.next=17;break;case 15:return i.next=17,s.a.awrap(rt([[Le.address,Le.interface.functions.requestUnbond.encode([o])]]));case 17:case"end":return i.stop()}}))}function tt(e){var t,a,n,r,o,f,c,i,u,d,b,m,p,g;return s.a.async((function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,s.a.awrap(Ge());case 2:if(t=w.sent){w.next=5;break}throw new Error("failed to get signer");case 5:return w.next=7,s.a.awrap(t.getAddress());case 7:a=w.sent,n=new Y.Contract(_e,$,t),r=e.filter((function(e){return e.claimFrom===a})),o=!0,f=!1,c=void 0,w.prev=13,i=r[Symbol.iterator]();case 15:if(o=(u=i.next()).done){w.next=23;break}return d=u.value,b=nt(d.channelArgs),w.next=20,s.a.awrap(n.channelWithdraw(b,d.stateRoot,d.signatures,d.proof,d.amount));case 20:o=!0,w.next=15;break;case 23:w.next=29;break;case 25:w.prev=25,w.t0=w.catch(13),f=!0,c=w.t0;case 29:w.prev=29,w.prev=30,o||null==i.return||i.return();case 32:if(w.prev=32,!f){w.next=35;break}throw c;case 35:return w.finish(32);case 36:return w.finish(29);case 37:if(m=e.filter((function(e){return e.claimFrom!==a})),p={},m.forEach((function(e){var t=e.channelArgs.tokenAddr,a=p[t]||be.j;p[t]=a.add(e.outstandingReward)})),!(g=m.map((function(e){var t=nt(e.channelArgs);return[We.address,We.interface.functions.channelWithdraw.encode([t,e.stateRoot,e.signatures,e.proof,e.amount])]})).concat(Object.entries(p).map((function(e){var t=Object(l.a)(e,2),n=t[0],r=t[1];return[n,Ye.interface.functions.transfer.encode([a,r])]})))).length){w.next=44;break}return w.next=44,s.a.awrap(rt(g));case 44:case"end":return w.stop()}}),null,null,[[13,25,29,37],[30,,32,36]])}function at(e){var t,a,n,r,o,f,c,i,l,u,d;return s.a.async((function(b){for(;;)switch(b.prev=b.next){case 0:if(t=e.rewardChannels,a=e.userBonds,(n=t.filter((function(e){return e.channelArgs.tokenAddr===be.a}))).length){b.next=4;break}throw new Error("no channels to earn from");case 4:if(r=n.map((function(e){return e.outstandingReward})).reduce((function(e,t){return e.add(t)})),o=a.find((function(e){return"Active"===e.status}))||a.find((function(e){return"UnbondRequested"===e.status}))){b.next=8;break}throw new Error("You have no active bonds");case 8:return f=o.amount,c=o.poolId,i=o.nonce,l=[f,c,i],u=[f.add(r),c,i],d=n.map((function(e){var t=nt(e.channelArgs);return[We.address,We.interface.functions.channelWithdraw.encode([t,e.stateRoot,e.signatures,e.proof,e.amount])]})).concat([[Ye.address,Ye.interface.functions.approve.encode([Le.address,u[0]])],[Le.address,Le.interface.functions.replaceBond.encode([l,u])]]),b.next=14,s.a.awrap(rt(d));case 14:case"end":return b.stop()}}))}function nt(e){return[e.creator,e.tokenAddr,e.tokenAmount,e.validUntil,e.validators,e.spec]}function rt(e){var t,a,n,r,o,f,c,i,u,d,b,m,p,g,w,h=arguments;return s.a.async((function(y){for(;;)switch(y.prev=y.next){case 0:return t=h.length>1&&void 0!==h[1]?h[1]:{},y.next=3,s.a.awrap(Ge());case 3:if(a=y.sent){y.next=6;break}throw new Error("failed to get signer");case 6:return y.next=8,s.a.awrap(a.getAddress());case 8:return n=y.sent,r=Object(Ne.a)(n),o=r.addr,f=r.bytecode,c=new Y.Contract(o,Z,a),y.next=13,s.a.awrap(qe.getCode(c.address));case 13:if(y.t0=y.sent,!(i="0x"===y.t0)){y.next=19;break}y.t1=be.j,y.next=22;break;case 19:return y.next=21,s.a.awrap(c.nonce());case 21:y.t1=y.sent;case 22:if(u=y.t1,d=function(e){return function(t,a){var n=Object(l.a)(t,2),r=n[0],o=n[1];return Object(Ne.b)(c.address,u.add(a+e),r,o).toSolidityTuple()}},i){y.next=30;break}return b=e.map(d(0)),y.next=28,s.a.awrap(c.executeBySender(b,t));case 28:y.next=38;break;case 30:return m=new Y.Contract(be.b,K,a),p=e.map(d(1)),g=Object(Ne.b)(c.address,u,c.address,c.interface.functions.executeBySender.encode([p])),y.next=35,s.a.awrap(a.signMessage(g.hash()));case 35:return w=y.sent,y.next=38,s.a.awrap(m.deployAndExecute(f,0,[g.toSolidityTuple()],[Object(H.splitSig)(w)],t));case 38:case"end":return y.stop()}}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));f.a.render(r.a.createElement((function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],o=t[1],f=Object(n.useState)(null),i=Object(l.a)(f,2),d=i[0],b=i[1],m=Object(n.useState)(null),p=Object(l.a)(m,2),g=p[0],w=p[1],h=Object(n.useState)(!1),y=Object(l.a)(h,2),v=y[0],x=y[1],E=Object(n.useState)(!1),k=Object(l.a)(E,2),B=k[0],R=k[1],F=Object(n.useState)("Error! Unspecified error occured."),q=Object(l.a)(F,2),Y=q[0],W=q[1],z=Object(n.useState)(Je),V=Object(l.a)(z,2),J=V[0],H=V[1],G=function(){return function(){var e,t,a,n;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.a.awrap(Promise.all([Ye.balanceOf(be.c),Ze()]));case 2:return e=r.sent,t=Object(l.a)(e,2),a=t[0],n=t[1],r.abrupt("return",Object(c.a)({totalStake:a},n));case 7:case"end":return r.stop()}}))}().then(H).catch((function(e){console.error("loadStats",e),x(!0),4001===e.code&&W("Error! User denied authorization!")}))};Object(n.useEffect)((function(){G();var e=setInterval(G,2e4);return function(){return clearInterval(e)}}),[]);var Z=function(e){return function(){var t,a,n,r,o=arguments;return s.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:for(f.prev=0,R(!0),x(!1),t=o.length,a=new Array(t),n=0;n<t;n++)a[n]=o[n];return f.next=6,s.a.awrap(e.apply(null,a));case 6:return r=f.sent,R(!1),f.abrupt("return",r);case 11:f.prev=11,f.t0=f.catch(0),console.error(f.t0),R(!1),x(!0),W(f.t0.message||"Unknown error");case 17:case"end":return f.stop()}}),null,null,[[0,11]])}},$=Z(et.bind(null,!1)),K=Z(et.bind(null,!0)),Q=Z(tt),ee=Z(at.bind(null,J)),te=function(e,t){"clickaway"!==t&&x(!1)};return r.a.createElement(u.a,{theme:j},r.a.createElement(A.a,{position:"static"},r.a.createElement(O.a,null,r.a.createElement("img",{height:"40vh",src:L.a,alt:"logo"}),r.a.createElement(D.a,{disabled:!J.loaded,onClick:function(){return o(!0)},variant:"extended",color:"secondary",style:{position:"absolute",right:"5%",top:"50%"}},r.a.createElement(T.a,{style:{margin:j.spacing(1)}}),"Stake your ADX"),function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],o=t[1],f=function(){o(null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{style:{position:"absolute",right:"1.25%",top:"10%"},onClick:function(e){o(e.currentTarget)}},r.a.createElement(M.a,{style:{fontSize:"1.5em",color:"white"}})),r.a.createElement(X.a,{id:"simple-menu",anchorEl:a,open:Boolean(a),keepMounted:!0,onClose:f,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(N.a,{href:"https://www.adex.network/tos",target:"_blank"},r.a.createElement(_.a,{onClick:f},"Terms of Service")),r.a.createElement(N.a,{href:"https://help.adex.network/hc/en-us/categories/360002707720-Staking",target:"_blank"},r.a.createElement(_.a,{onClick:f},"User Guide")),r.a.createElement(N.a,{href:"https://github.com/adexnetwork/adex-protocol-eth",target:"_blank"},r.a.createElement(_.a,{onClick:f},"Source Code")),r.a.createElement(N.a,{href:"https://github.com/adexnetwork/adex-protocol-eth#audits",target:"_blank"},r.a.createElement(_.a,{onClick:f},"Audits")),r.a.createElement(N.a,{href:"https://coinmarketcap.com/currencies/adx-net/markets/",target:"_blank"},r.a.createElement(_.a,{onClick:f},"Where to buy ADX"))))}())),xe({stats:J,onRequestUnbond:b,onUnbond:K,onClaimRewards:Q,onRestake:w}),Fe(J.loaded?Ge:null,Z),Pe({isOpen:!!d,onDeny:function(){return b(null)},onConfirm:function(){d&&$(d),b(null)},confirmActionName:"Unbond",content:r.a.createElement(r.a.Fragment,null,"Are you sure you want to request unbonding of"," ",ge(d?d.currentAmount:be.j)," ADX?",r.a.createElement("br",null),r.a.createElement("br",null),"Please be aware:",r.a.createElement("ol",null,r.a.createElement("li",null,"It will take ",be.i," days before you will be able to withdraw your ADX!"),r.a.createElement("li",null,"You will not receive staking rewards for this amount in this"," ",be.i," day period.")))}),Pe({isOpen:!!g,onDeny:function(){return w(null)},onConfirm:function(){g&&ee(),w(null)},confirmActionName:"Re-stake",content:r.a.createElement(r.a.Fragment,null,"Are you sure you want to stake your earnings of"," ",ge(g||be.j)," ADX?",r.a.createElement("br",null),r.a.createElement("br",null),"Please be aware that this means that this amount will be locked up for at least ",be.i," days.",r.a.createElement("br",null),J.userBonds.find((function(e){return"Active"===e.status}))?"":"Your bond will be re-activated, meaning that your request to unbond will be cancelled but it will start earning rewards again.")}),r.a.createElement(P.a,{open:B},r.a.createElement(He,{severity:"info"},"Please sign all pending MetaMask actions!")),r.a.createElement(P.a,{open:v,autoHideDuration:1e4,onClose:te},r.a.createElement(He,{onClose:te,severity:"error"},Y)),r.a.createElement(C.a,{open:a,onClose:function(){return o(!1)},style:{display:"flex",alignItems:"center",justifyContent:"center"},closeAfterTransition:!0,BackdropComponent:S.a,BackdropProps:{timeout:300}},r.a.createElement(U.a,{in:a},Se({pools:be.f.filter((function(e){return e.selectable})),totalStake:J.totalStake,maxAmount:J.userBalance,onNewBond:function(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!1),t.next=3,s.a.awrap(Z(Qe.bind(null,J,e))());case 3:case"end":return t.stop()}}))}}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},57:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return i}));var n=a(136),r=a(19),o=a(106),f=a(6);function c(t){var a=function(e){var t=e.slice(2).toLowerCase();return"0x608060405234801561001057600080fd5b5060026000803073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360ff160217905550600260008073".concat(t,"73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360ff1602179055506000734470bb87d77b963a013db939be332f927f2b992e9050600073ade00c28244d5ce17d72e40330b1c318cd12b7c3905060008273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016101429190610501565b60206040518083038186803b15801561015a57600080fd5b505afa15801561016e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610192919061045a565b90506000811115610276578273ffffffffffffffffffffffffffffffffffffffff1663095ea7b383836040518363ffffffff1660e01b81526004016101d892919061051c565b600060405180830381600087803b1580156101f257600080fd5b505af1158015610206573d6000803e3d6000fd5b505050508173ffffffffffffffffffffffffffffffffffffffff166394b918de826040518263ffffffff1660e01b81526004016102439190610560565b600060405180830381600087803b15801561025d57600080fd5b505af1158015610271573d6000803e3d6000fd5b505050505b60008273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016102b19190610501565b60206040518083038186803b1580156102c957600080fd5b505afa1580156102dd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610301919061045a565b9050600081111561043c576000734846c6837ec670bbd1f5b485471c8f64ecb9c53490508373ffffffffffffffffffffffffffffffffffffffff1663095ea7b382846040518363ffffffff1660e01b815260040161036092919061051c565b600060405180830381600087803b15801561037a57600080fd5b505af115801561038e573d6000803e3d6000fd5b505050508073ffffffffffffffffffffffffffffffffffffffff1663b4dca72460405180606001604052808581526020017f2ce0c96383fb229d9776f33846e983a956a7d95844fac57b180ed0071d93bb2860001b8152602001428152506040518263ffffffff1660e01b81526004016104089190610545565b600060405180830381600087803b15801561042257600080fd5b505af1158015610436573d6000803e3d6000fd5b50505050505b505050506105d8565b600081519050610454816105c1565b92915050565b60006020828403121561046c57600080fd5b600061047a84828501610445565b91505092915050565b61048c8161057b565b82525050565b61049b8161058d565b82525050565b6060820160008201516104b760008501826104e3565b5060208201516104ca6020850182610492565b5060408201516104dd60408501826104e3565b50505050565b6104ec816105b7565b82525050565b6104fb816105b7565b82525050565b60006020820190506105166000830184610483565b92915050565b60006040820190506105316000830185610483565b61053e60208301846104f2565b9392505050565b600060608201905061055a60008301846104a1565b92915050565b600060208201905061057560008301846104f2565b92915050565b600061058682610597565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6105ca816105b7565b81146105d557600080fd5b50565b6101b7806105e76000396000f3fe608060405234801561001057600080fd5b506004361061002f5760003560e01c8063c066a5b11461007357610030565b5b60007396e3cb4b4632ed45363ff2c9f0fbec9b583d9d3a90503660008037600080366000846127105a03f43d6000803e806000811461006e573d6000f35b3d6000fd5b61008d600480360381019061008891906100d8565b6100a3565b60405161009a9190610110565b60405180910390f35b60006020528060005260406000206000915054906101000a900460ff1681565b6000813590506100d28161016a565b92915050565b6000602082840312156100ea57600080fd5b60006100f8848285016100c3565b91505092915050565b61010a8161015d565b82525050565b60006020820190506101256000830184610101565b92915050565b60006101368261013d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600060ff82169050919050565b6101738161012b565b811461017e57600080fd5b5056fea26469706673582212200e40aa3025d54e828fb973089b64ce06688fedcd71b98ae68521a0217652c59564736f6c634300060c0033")}(t);return{bytecode:a,addr:Object(r.getAddress)("0x".concat(Object(n.generateAddress2)(f.b,e.alloc(32),a).toString("hex")))}}function i(e,t,a,n){return new o.Transaction({identityContract:e,nonce:t.toString(10),feeTokenAddr:"0x6b175474e89094c44da98b954eedeac495271d0f",feeAmount:0,to:a,data:n})}}).call(this,a(9).Buffer)},6:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"j",(function(){return o})),a.d(t,"g",(function(){return f})),a.d(t,"i",(function(){return c})),a.d(t,"h",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return l})),a.d(t,"e",(function(){return u})),a.d(t,"d",(function(){return d})),a.d(t,"f",(function(){return b}));var n=a(19),r="0x4846c6837ec670bbd1f5b485471c8f64ecb9c534",o=Object(n.bigNumberify)(0),f="https://min-api.cryptocompare.com/data/price?fsym=ADX&tsyms=BTC,USD,EUR",c=30,i=null,s="0xADE00C28244d5CE17D72E40330B1c318cD12B7c3",l="0x9fe0d438e3c29c7cff949ad8e8da9403a531cc1a",u=Object(n.bigNumberify)("115792089237316195423570985008687907853269984665640564039457584007913129639935"),d={poolId:"",amount:o},b=[{label:"Validator Tom",id:Object(n.id)("validator:0x2892f6C41E0718eeeDd49D98D648C789668cA67d"),selectable:!0,minStakingAmount:"0.0",rewardPolicy:'The "Validator Tom" pool will distribute its fee earnings proportionally to each staker. The fee earnings will be 7% of the total volume, which you can track on our Explorer. There is an additional incentive reward of 7 million ADX to be distributed by the end of 2020.',slashPolicy:"No slashing.",url:"https://tom.adex.network",estimatedAnnualFeeYield:182500,estimatedAnnualADXYield:15103448.2758,estimatedAnnualADXEarlyYield:12166666.6666},{label:"Validator Jerry",id:Object(n.id)("validator:0xce07CbB7e054514D590a0262C93070D838bFBA2e"),selectable:!1,minStakingAmount:0,rewardPolicy:"",slashPolicy:""}];Object(n.bigNumberify)("100000000000000")},68:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')}},[[244,1,2]]]);
//# sourceMappingURL=main.3905eadd.chunk.js.map