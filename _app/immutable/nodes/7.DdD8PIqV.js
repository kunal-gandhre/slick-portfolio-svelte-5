import{s as bt,e as te,f as de,a as b,d as st,b as $,t as Ke,c as Me}from"../chunks/disclose-version.D_0R5w7p.js";import{al as Mt,an as wn,am as ln,p as Ce,F as G,b as ot,z as U,g,G as It,f as K,t as Z,N as Tn,a as Oe,H as At,c as we,r as he,_ as ze,s as se,n as je,D as Wt,d as mt,e as Yt}from"../chunks/utils.6KhQ9vBw.js";import{l as be,a as v,i as Ee,b as Ye,s as Vt,p as Bt}from"../chunks/index-client.CzxfyyCv.js";import{t as wt,c as un,r as cn,g as dn,o as En,I as Tt,e as Et,d as Cn}from"../chunks/stores.BG00hXMk.js";import{E as On}from"../chunks/empty-result.DQ2Vi5zv.js";import{F as Pn,a as An,C as In,S as Sn}from"../chunks/fancy-card.-PEnZkwV.js";import{l as nt,q as p,w as ve,r as vt,E as fn,y as Ae,m as ke,n as pt,F as Mn,k as Se,C as S,K as Gt,D as ie,S as Ft,L as Be,M as qt,z as et,A as Dn,N as Ct,o as Ut,e as Fn,j as Ge,d as Le,a as fe,f as Rt,s as Ot,G as Rn,g as $t,c as Nn,h as Kn}from"../chunks/base.DsKxNz_q.js";import{M as _t,A as jn}from"../chunks/assets.BMcNlMJ8.js";import{e as Bn}from"../chunks/index.DDBfyhzG.js";import{i as We}from"../chunks/legacy.WUkXPhl2.js";import{B as gn}from"../chunks/button.D0lHXaGt.js";import{u as zn,g as Ln,R as mn,T as vn,a as hn}from"../chunks/index.BVmcTsWB.js";import{S as Wn}from"../chunks/skill-badge.Ce1iv-7U.js";import{A as Vn,a as Un,b as Hn}from"../chunks/avatar-fallback.DVvA9Jq1.js";import{B as Jt}from"../chunks/index.rkhfMG6i.js";import{d as ht,w as ce,g as Xn}from"../chunks/paths.xzweYAaK.js";import{u as bn,g as Qt,a as Zt,o as Pt,c as Nt,t as yt}from"../chunks/events.Blv7vJkp.js";import{s as rt,w as Yn,c as Gn,u as qn,h as $n,r as Jn}from"../chunks/action.TAmsA99w.js";import{c as Qn,S as en}from"../chunks/separator.BpLG0h-f.js";import{b as De}from"../chunks/misc.DY5zbGlJ.js";import{c as Zn}from"../chunks/index.CWViJA_U.js";import{P as zt}from"../chunks/projects.DpDSjUh3.js";import{S as er}from"../chunks/skills.BoUI_uh9.js";function tr(n){n.setAttribute("data-highlighted","")}function gt(n){n.removeAttribute("data-highlighted")}function nr(n,e=500){let o=null;return function(...a){const d=()=>{o=null,n(...a)};o&&clearTimeout(o),o=setTimeout(d,e)}}function tn(n){const{open:e,forceVisible:o,activeTrigger:a}=n;return ht([e,o,a],([d,c,s])=>(d||c)&&s!==null)}function me(n){nt&&rt(1).then(()=>{const e=document.activeElement;!p(e)||e===n||(e.tabIndex=-1,n&&(n.tabIndex=0,n.focus()))})}function pn(){return Array.from(document.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'))}function rr(n){const e=pn(),a=e.indexOf(n)+1,d=e[a];return a<e.length&&p(d)?d:null}function sr(n){const e=pn(),a=e.indexOf(n)-1,d=e[a];return a>=0&&p(d)?d:null}const or=new Set(["Shift","Control","Alt","Meta","CapsLock","NumLock"]),ar={onMatch:me,getCurrentItem:()=>document.activeElement};function ir(n={}){const e={...ar,...n},o=ve(ce([])),a=nr(()=>{o.update(()=>[])});return{typed:o,resetTyped:a,handleTypeaheadSearch:(c,s)=>{if(or.has(c))return;const r=e.getCurrentItem(),u=Xn(o);if(!Array.isArray(u))return;u.push(c.toLowerCase()),o.set(u);const h=s.filter(m=>!(m.getAttribute("disabled")==="true"||m.getAttribute("aria-disabled")==="true"||m.hasAttribute("data-disabled"))),k=u.length>1&&u.every(m=>m===u[0])?u[0]:u.join(""),I=p(r)?h.indexOf(r):-1;let R=Yn(h,Math.max(I,0));k.length===1&&(R=R.filter(m=>m!==r));const B=R.find(m=>(m==null?void 0:m.innerText)&&m.innerText.toLowerCase().startsWith(k.toLowerCase()));p(B)&&B!==r&&e.onMatch(B),a()}}}const lr={floating:{},focusTrap:{},modal:{},escapeKeydown:{},portal:"body"},nn=(n,e)=>{n.dataset.escapee="";const{anchorElement:o,open:a,options:d}=e;if(!o||!a||!d)return{destroy:vt};const c={...lr,...d},s=[];if(c.portal!==null&&s.push(bn(n,c.portal).destroy),s.push(zn(o,n,c.floating).destroy),c.focusTrap!==null){const{useFocusTrap:u}=Gn({immediate:!0,escapeDeactivates:!1,allowOutsideClick:!0,returnFocusOnDeactivate:!1,fallbackFocus:n,...c.focusTrap});s.push(u(n).destroy)}c.modal!==null&&s.push(qn(n,{onClose:()=>{p(o)&&(a.set(!1),o.focus())},shouldCloseOnInteractOutside:u=>!(u.defaultPrevented||p(o)&&o.contains(u.target)),...c.modal}).destroy),c.escapeKeydown!==null&&s.push(fn(n,{enabled:a,handler:()=>{a.set(!1)},...c.escapeKeydown}).destroy);const r=Ae(...s);return{destroy(){r()}}},ur={ltr:[...Ft,ie.ARROW_RIGHT],rtl:[...Ft,ie.ARROW_LEFT]},cr={ltr:[ie.ARROW_LEFT],rtl:[ie.ARROW_RIGHT]},rn=["menu","trigger"],dr={arrowSize:8,positioning:{placement:"bottom"},preventScroll:!0,closeOnEscape:!0,closeOnOutsideClick:!0,portal:void 0,loop:!1,dir:"ltr",defaultOpen:!1,typeahead:!0,closeOnItemClick:!0,onOutsideClick:void 0};function fr(n){const{name:e,selector:o}=Dn(n.selector),{preventScroll:a,arrowSize:d,positioning:c,closeOnEscape:s,closeOnOutsideClick:r,portal:u,forceVisible:h,typeahead:x,loop:k,closeFocus:I,disableFocusFirstItem:R,closeOnItemClick:j,onOutsideClick:B}=n.rootOptions,m=n.rootOpen,N=n.rootActiveTrigger,_=n.nextFocusable,V=n.prevFocusable,w=ve.writable(!1),C=ve(ce(0)),z=ve(ce(null)),L=ve(ce("right")),T=ve(ce(null)),X=ve(ht([L,z],([t,i])=>l=>t===(i==null?void 0:i.side)&&gr(l,i==null?void 0:i.area))),{typed:Y,handleTypeaheadSearch:H}=ir(),ee=wt({...Qt(rn),...n.ids}),le=tn({open:m,forceVisible:h,activeTrigger:N}),pe=ke(e(),{stores:[le,u,ee.menu,ee.trigger],returned:([t,i,l,f])=>({role:"menu",hidden:t?void 0:!0,style:pt({display:t?void 0:"none"}),id:l,"aria-labelledby":f,"data-state":t?"open":"closed","data-portal":Mn(i),tabindex:-1}),action:t=>{let i=vt;const l=Se([le,N,c,r,u,s],([E,J,ye,q,P,D])=>{i(),!(!E||!J)&&Mt().then(()=>{i(),kt(t,o),i=nn(t,{anchorElement:J,open:m,options:{floating:ye,modal:{closeOnInteractOutside:q,shouldCloseOnInteractOutside:O=>{var A;return(A=B.get())==null||A(O),!(O.defaultPrevented||p(J)&&J.contains(O.target))},onClose:()=>{m.set(!1),J.focus()},open:E},portal:Zt(t,P),escapeKeydown:D?void 0:null}}).destroy})}),f=Ae(S(t,"keydown",E=>{const J=E.target,ye=E.currentTarget;if(!p(J)||!p(ye)||!(J.closest('[role="menu"]')===ye))return;if(Gt.includes(E.key)&&on(E,k.get()??!1),E.key===ie.TAB){E.preventDefault(),m.set(!1),sn(E,_,V);return}const P=E.key.length===1;!(E.ctrlKey||E.altKey||E.metaKey)&&P&&x.get()===!0&&H(E.key,tt(ye))}));return{destroy(){l(),f(),i()}}}}),Pe=ke(e("trigger"),{stores:[m,ee.menu,ee.trigger],returned:([t,i,l])=>({"aria-controls":i,"aria-expanded":t,"data-state":t?"open":"closed",id:l,tabindex:0}),action:t=>(Dt(t),N.update(l=>l||t),{destroy:Ae(S(t,"click",l=>{const f=m.get(),E=l.currentTarget;p(E)&&(re(E),f||l.preventDefault())}),S(t,"keydown",l=>{const f=l.currentTarget;if(!p(f)||!(Ft.includes(l.key)||l.key===ie.ARROW_DOWN))return;l.preventDefault(),re(f);const E=f.getAttribute("aria-controls");if(!E)return;const J=document.getElementById(E);if(!J)return;const ye=tt(J);ye.length&&me(ye[0])}))})}),Te=ke(e("arrow"),{stores:d,returned:t=>({"data-arrow":!0,style:pt({position:"absolute",width:`var(--arrow-size, ${t}px)`,height:`var(--arrow-size, ${t}px)`})})}),at=ke(e("overlay"),{stores:[le],returned:([t])=>({hidden:t?void 0:!0,tabindex:-1,style:pt({display:t?void 0:"none"}),"aria-hidden":"true","data-state":hr(t)}),action:t=>{let i=vt;if(s.get()){const f=fn(t,{handler:()=>{m.set(!1);const E=N.get();E&&E.focus()}});f&&f.destroy&&(i=f.destroy)}const l=Se([u],([f])=>{if(f===null)return vt;const E=Zt(t,f);return E===null?vt:bn(t,E).destroy});return{destroy(){i(),l()}}}}),Ve=ke(e("item"),{returned:()=>({role:"menuitem",tabindex:-1,"data-orientation":"vertical"}),action:t=>(kt(t,o),Dt(t),{destroy:Ae(S(t,"pointerdown",l=>{const f=l.currentTarget;if(p(f)&&Be(f)){l.preventDefault();return}}),S(t,"click",l=>{const f=l.currentTarget;if(p(f)){if(Be(f)){l.preventDefault();return}if(l.defaultPrevented){me(f);return}j.get()&&rt(1).then(()=>{m.set(!1)})}}),S(t,"keydown",l=>{_e(l)}),S(t,"pointermove",l=>{He(l)}),S(t,"pointerleave",l=>{Qe(l)}),S(t,"focusin",l=>{Re(l)}),S(t,"focusout",l=>{Ne(l)}))})}),it=ke(e("group"),{returned:()=>t=>({role:"group","aria-labelledby":t})}),Ie=ke(e("group-label"),{returned:()=>t=>({id:t})}),Fe={defaultChecked:!1,disabled:!1},qe=t=>{const i={...Fe,...t},l=i.checked??ce(i.defaultChecked??null),f=Pt(l,i.onCheckedChange),E=ce(i.disabled),J=ke(e("checkbox-item"),{stores:[f,E],returned:([P,D])=>({role:"menuitemcheckbox",tabindex:-1,"data-orientation":"vertical","aria-checked":ct(P)?"mixed":P?"true":"false","data-disabled":Ct(D),"data-state":jt(P)}),action:P=>(kt(P,o),Dt(P),{destroy:Ae(S(P,"pointerdown",O=>{const A=O.currentTarget;if(p(A)&&Be(A)){O.preventDefault();return}}),S(P,"click",O=>{const A=O.currentTarget;if(p(A)){if(Be(A)){O.preventDefault();return}if(O.defaultPrevented){me(A);return}f.update(Xe=>ct(Xe)?!0:!Xe),j.get()&&Mt().then(()=>{m.set(!1)})}}),S(P,"keydown",O=>{_e(O)}),S(P,"pointermove",O=>{const A=O.currentTarget;if(p(A)){if(Be(A)){Ue(O);return}He(O,A)}}),S(P,"pointerleave",O=>{Qe(O)}),S(P,"focusin",O=>{Re(O)}),S(P,"focusout",O=>{Ne(O)}))})}),ye=ht(f,P=>P===!0),q=ht(f,P=>P==="indeterminate");return{elements:{checkboxItem:J},states:{checked:f},helpers:{isChecked:ye,isIndeterminate:q},options:{disabled:E}}},lt=(t={})=>{const i=t.value??ce(t.defaultValue??null),l=Pt(i,t.onValueChange),f=ke(e("radio-group"),{returned:()=>({role:"group"})}),E={disabled:!1},J=ke(e("radio-item"),{stores:[l],returned:([q])=>P=>{const{value:D,disabled:O}={...E,...P},A=q===D;return{disabled:O,role:"menuitemradio","data-state":A?"checked":"unchecked","aria-checked":A,"data-disabled":Ct(O),"data-value":D,"data-orientation":"vertical",tabindex:-1}},action:q=>(kt(q,o),{destroy:Ae(S(q,"pointerdown",D=>{const O=D.currentTarget;if(!p(O))return;const A=q.dataset.value;if(q.dataset.disabled||A===void 0){D.preventDefault();return}}),S(q,"click",D=>{const O=D.currentTarget;if(!p(O))return;const A=q.dataset.value;if(q.dataset.disabled||A===void 0){D.preventDefault();return}if(D.defaultPrevented){if(!p(O))return;me(O);return}l.set(A),j.get()&&Mt().then(()=>{m.set(!1)})}),S(q,"keydown",D=>{_e(D)}),S(q,"pointermove",D=>{const O=D.currentTarget;if(!p(O))return;const A=q.dataset.value;if(q.dataset.disabled||A===void 0){Ue(D);return}He(D,O)}),S(q,"pointerleave",D=>{Qe(D)}),S(q,"focusin",D=>{Re(D)}),S(q,"focusout",D=>{Ne(D)}))})}),ye=ht(l,q=>P=>q===P);return{elements:{radioGroup:f,radioItem:J},states:{value:l},helpers:{isChecked:ye}}},{elements:{root:ge}}=Qn({orientation:"horizontal"}),ut={...dr,disabled:!1,positioning:{placement:"right-start",gutter:8}},$e=t=>{const i={...ut,...t},l=i.open??ce(!1),f=Pt(l,i==null?void 0:i.onOpenChange),E=wt(Ut(i,"ids")),{positioning:J,arrowSize:ye,disabled:q}=E,P=ve(ce(null)),D=ve(ce(null)),O=ve(ce(0)),A=wt({...Qt(rn),...i.ids});qt(()=>{const M=document.getElementById(A.trigger.get());M&&P.set(M)});const Xe=tn({open:f,forceVisible:h,activeTrigger:P}),yn=ke(e("submenu"),{stores:[Xe,A.menu,A.trigger],returned:([M,ae,xe])=>({role:"menu",hidden:M?void 0:!0,style:pt({display:M?void 0:"none"}),id:ae,"aria-labelledby":xe,"data-state":M?"open":"closed","data-id":ae,tabindex:-1}),action:M=>{let ae=vt;const xe=Se([Xe,J],([y,W])=>{if(ae(),!y)return;const Q=P.get();Q&&Mt().then(()=>{ae();const ne=Ht(Q);ae=nn(M,{anchorElement:Q,open:f,options:{floating:W,portal:p(ne)?ne:void 0,modal:null,focusTrap:null,escapeKeydown:null}}).destroy})}),F=Ae(S(M,"keydown",y=>{if(y.key===ie.ESCAPE)return;const W=y.target,Q=y.currentTarget;if(!p(W)||!p(Q)||!(W.closest('[role="menu"]')===Q))return;if(Gt.includes(y.key)){y.stopImmediatePropagation(),on(y,k.get()??!1);return}const dt=cr.ltr.includes(y.key),ft=y.ctrlKey||y.altKey||y.metaKey,St=y.key.length===1;if(dt){const Xt=P.get();y.preventDefault(),f.update(()=>(Xt&&me(Xt),!1));return}if(y.key===ie.TAB){y.preventDefault(),m.set(!1),sn(y,_,V);return}!ft&&St&&x.get()===!0&&H(y.key,tt(Q))}),S(M,"pointermove",y=>{ue(y)}),S(M,"focusout",y=>{const W=P.get();if(w.get()){const Q=y.target,ne=document.getElementById(A.menu.get());if(!p(ne)||!p(Q))return;!ne.contains(Q)&&Q!==W&&f.set(!1)}else{const Q=y.currentTarget,ne=y.relatedTarget;if(!p(ne)||!p(Q))return;!Q.contains(ne)&&ne!==W&&f.set(!1)}}));return{destroy(){xe(),ae(),F()}}}}),xn=ke(e("subtrigger"),{stores:[f,q,A.menu,A.trigger],returned:([M,ae,xe,F])=>({role:"menuitem",id:F,tabindex:-1,"aria-controls":xe,"aria-expanded":M,"data-state":M?"open":"closed","data-disabled":Ct(ae),"aria-haspopop":"menu"}),action:M=>{kt(M,o),Dt(M),P.update(F=>F||M);const ae=()=>{Lt(D),window.clearTimeout(O.get()),z.set(null)},xe=Ae(S(M,"click",F=>{if(F.defaultPrevented)return;const y=F.currentTarget;!p(y)||Be(y)||(me(y),f.get()||f.update(W=>W||(P.set(y),!W)))}),S(M,"keydown",F=>{const y=Y.get(),W=F.currentTarget;if(!(!p(W)||Be(W)||y.length>0&&F.key===ie.SPACE)&&ur.ltr.includes(F.key)){if(!f.get()){W.click(),F.preventDefault();return}const ne=W.getAttribute("aria-controls");if(!ne)return;const dt=document.getElementById(ne);if(!p(dt))return;const ft=tt(dt)[0];me(ft)}}),S(M,"pointermove",F=>{if(!xt(F)||(oe(F),F.defaultPrevented))return;const y=F.currentTarget;if(!p(y))return;vr(A.menu.get())||me(y);const W=D.get();!f.get()&&!W&&!Be(y)&&D.set(window.setTimeout(()=>{f.update(()=>(P.set(y),!0)),Lt(D)},100))}),S(M,"pointerleave",F=>{if(!xt(F))return;Lt(D);const y=document.getElementById(A.menu.get()),W=y==null?void 0:y.getBoundingClientRect();if(W){const Q=y==null?void 0:y.dataset.side,ne=Q==="right",dt=ne?-5:5,ft=W[ne?"left":"right"],St=W[ne?"right":"left"];z.set({area:[{x:F.clientX+dt,y:F.clientY},{x:ft,y:W.top},{x:St,y:W.top},{x:St,y:W.bottom},{x:ft,y:W.bottom}],side:Q}),window.clearTimeout(O.get()),O.set(window.setTimeout(()=>{z.set(null)},300))}else{if(Je(F),F.defaultPrevented)return;z.set(null)}}),S(M,"focusout",F=>{const y=F.currentTarget;if(!p(y))return;gt(y);const W=F.relatedTarget;if(!p(W))return;const Q=y.getAttribute("aria-controls");if(!Q)return;const ne=document.getElementById(Q);ne&&!ne.contains(W)&&f.set(!1)}),S(M,"focusin",F=>{Re(F)}));return{destroy(){ae(),xe()}}}}),kn=ke(e("subarrow"),{stores:ye,returned:M=>({"data-arrow":!0,style:pt({position:"absolute",width:`var(--arrow-size, ${M}px)`,height:`var(--arrow-size, ${M}px)`})})});return Se([m],([M])=>{M||(P.set(null),f.set(!1))}),Se([z],([M])=>{!nt||M||window.clearTimeout(O.get())}),Se([f],([M])=>{if(nt&&(M&&w.get()&&rt(1).then(()=>{const ae=document.getElementById(A.menu.get());if(!ae)return;const xe=tt(ae);xe.length&&me(xe[0])}),!M)){const ae=T.get(),xe=document.getElementById(A.trigger.get());if(ae&&rt(1).then(()=>{const F=document.getElementById(A.menu.get());F&&F.contains(ae)&&gt(ae)}),!xe||document.activeElement===xe)return;gt(xe)}}),{ids:A,elements:{subTrigger:xn,subMenu:yn,subArrow:kn},states:{subOpen:f},options:E}};qt(()=>{const t=document.getElementById(ee.trigger.get());p(t)&&m.get()&&N.set(t);const i=[],l=()=>w.set(!1),f=()=>{w.set(!0),i.push(Ae(et(document,"pointerdown",l,{capture:!0,once:!0}),et(document,"pointermove",l,{capture:!0,once:!0})))},E=J=>{if(J.key===ie.ESCAPE&&s.get()){m.set(!1);return}};return i.push(et(document,"keydown",f,{capture:!0})),i.push(et(document,"keydown",E)),()=>{i.forEach(J=>J())}}),Se([m,T],([t,i])=>{!t&&i&&gt(i)}),Se([m],([t])=>{if(nt&&!t){const i=N.get();if(!i)return;const l=I.get();!t&&i&&$n({prop:l,defaultEl:i})}}),Se([m,a],([t,i])=>{if(!nt)return;const l=[];return t&&i&&l.push(Jn()),rt(1).then(()=>{const f=document.getElementById(ee.menu.get());if(f&&t&&w.get()){if(R.get()){me(f);return}const E=tt(f);if(!E.length)return;me(E[0])}}),()=>{l.forEach(f=>f())}}),Se(m,t=>{if(!nt)return;const i=()=>w.set(!1),l=f=>{if(w.set(!0),f.key===ie.ESCAPE&&t&&s.get()){m.set(!1);return}};return Ae(et(document,"pointerdown",i,{capture:!0,once:!0}),et(document,"pointermove",i,{capture:!0,once:!0}),et(document,"keydown",l,{capture:!0}))});function re(t){m.update(i=>{const l=!i;return l&&(_.set(rr(t)),V.set(sr(t)),N.set(t)),l})}function Re(t){const i=t.currentTarget;if(!p(i))return;const l=T.get();l&&gt(l),tr(i),T.set(i)}function Ne(t){const i=t.currentTarget;p(i)&&gt(i)}function oe(t){Ze(t)&&t.preventDefault()}function Ue(t){if(Ze(t))return;const i=t.target;if(!p(i))return;const l=Ht(i);l&&me(l)}function Je(t){Ze(t)&&t.preventDefault()}function ue(t){if(!xt(t))return;const i=t.target,l=t.currentTarget;if(!p(l)||!p(i))return;const f=C.get(),E=f!==t.clientX;if(l.contains(i)&&E){const J=t.clientX>f?"right":"left";L.set(J),C.set(t.clientX)}}function He(t,i=null){if(!xt(t)||(oe(t),t.defaultPrevented))return;if(i){me(i);return}const l=t.currentTarget;p(l)&&me(l)}function Qe(t){xt(t)&&Ue(t)}function _e(t){if(Y.get().length>0&&t.key===ie.SPACE){t.preventDefault();return}if(Ft.includes(t.key)){t.preventDefault();const f=t.currentTarget;if(!p(f))return;f.click()}}function ct(t){return t==="indeterminate"}function jt(t){return ct(t)?"indeterminate":t?"checked":"unchecked"}function Ze(t){return X.get()(t)}function Ht(t){const i=t.closest('[role="menu"]');return p(i)?i:null}return{elements:{trigger:Pe,menu:pe,overlay:at,item:Ve,group:it,groupLabel:Ie,arrow:Te,separator:ge},builders:{createCheckboxItem:qe,createSubmenu:$e,createMenuRadioGroup:lt},states:{open:m},helpers:{handleTypeaheadSearch:H},ids:ee,options:n.rootOptions}}function sn(n,e,o){if(n.shiftKey){const a=o.get();a&&(n.preventDefault(),rt(1).then(()=>a.focus()),o.set(null))}else{const a=e.get();a&&(n.preventDefault(),rt(1).then(()=>a.focus()),e.set(null))}}function tt(n){return Array.from(n.querySelectorAll(`[data-melt-menu-id="${n.id}"]`)).filter(e=>p(e))}function Dt(n){!n||!Be(n)||(n.setAttribute("data-disabled",""),n.setAttribute("aria-disabled","true"))}function Lt(n){if(!nt)return;const e=n.get();e&&(window.clearTimeout(e),n.set(null))}function xt(n){return n.pointerType==="mouse"}function kt(n,e){if(!n)return;const o=n.closest(`${e()}, ${e("submenu")}`);p(o)&&n.setAttribute("data-melt-menu-id",o.id)}function on(n,e){n.preventDefault();const o=document.activeElement,a=n.currentTarget;if(!p(o)||!p(a))return;const d=tt(a);if(!d.length)return;const c=d.filter(u=>!(u.hasAttribute("data-disabled")||u.getAttribute("disabled")==="true")),s=c.indexOf(o);let r;switch(n.key){case ie.ARROW_DOWN:e?r=s<c.length-1?s+1:0:r=s<c.length-1?s+1:s;break;case ie.ARROW_UP:e?r=s>0?s-1:c.length-1:r=s<0?c.length-1:s>0?s-1:0;break;case ie.HOME:r=0;break;case ie.END:r=c.length-1;break;default:return}me(c[r])}function gr(n,e){if(!e)return!1;const o={x:n.clientX,y:n.clientY};return mr(o,e)}function mr(n,e){const{x:o,y:a}=n;let d=!1;for(let c=0,s=e.length-1;c<e.length;s=c++){const r=e[c].x,u=e[c].y,h=e[s].x,x=e[s].y;u>a!=x>a&&o<(h-r)*(a-u)/(x-u)+r&&(d=!d)}return d}function vr(n){const e=document.activeElement;if(!p(e))return!1;const o=e.closest(`[data-id="${n}"]`);return p(o)}function hr(n){return n?"open":"closed"}const br={arrowSize:8,positioning:{placement:"bottom"},preventScroll:!0,closeOnEscape:!0,closeOnOutsideClick:!0,portal:void 0,loop:!1,dir:"ltr",defaultOpen:!1,forceVisible:!1,typeahead:!0,closeFocus:void 0,disableFocusFirstItem:!1,closeOnItemClick:!0,onOutsideClick:void 0};function pr(n){const e={...br,...n},o=wt(Ut(e,"ids")),a=e.open??ce(e.defaultOpen),d=Pt(a,e==null?void 0:e.onOpenChange),c=ve(ce(null)),s=ve(ce(null)),r=ve(ce(null)),{elements:u,builders:h,ids:x,states:k,options:I}=fr({rootOptions:o,rootOpen:d,rootActiveTrigger:ve(c),nextFocusable:ve(s),prevFocusable:ve(r),selector:"dropdown-menu",removeScroll:!0,ids:e.ids});return{ids:x,elements:u,states:k,builders:h,options:I}}const _r={defaultPressed:!1,disabled:!1};function yr(n){const e={..._r,...n},o=wt(Ut(e,"pressed")),{disabled:a}=o,d=e.pressed??ce(e.defaultPressed),c=Pt(d,e==null?void 0:e.onPressedChange);function s(){a.get()||c.update(h=>!h)}return{elements:{root:ke("toggle",{stores:[c,a],returned:([u,h])=>({"data-disabled":Ct(h),disabled:Ct(h),"data-state":u?"on":"off","aria-pressed":u,type:"button"}),action:u=>({destroy:Ae(S(u,"click",()=>{s()}),S(u,"keydown",x=>{x.key!==ie.ENTER&&x.key!==ie.SPACE||(x.preventDefault(),s())}))})})},states:{pressed:c},options:o}}function _n(){return{NAME:"menu",SUB_NAME:"menu-submenu",RADIO_GROUP_NAME:"menu-radiogroup",CHECKBOX_ITEM_NAME:"menu-checkboxitem",RADIO_ITEM_NAME:"menu-radioitem",GROUP_NAME:"menu-group",PARTS:["arrow","checkbox-indicator","checkbox-item","content","group","item","label","radio-group","radio-item","radio-indicator","separator","sub-content","sub-trigger","trigger"]}}function Kt(){const{NAME:n}=_n();return wn(n)}function xr(n){const{NAME:e,PARTS:o}=_n(),a=un("menu",o),d={...pr({...cn(n),forceVisible:!0}),getAttrs:a};return ln(e,d),{...d,updateOption:dn(d.options)}}function kr(n){const o={...{side:"bottom",align:"center"},...n},{options:{positioning:a}}=Kt();Ln(a)(o)}function wr(n,e){const o=be(e,["children","$$slots","$$events","$$legacy"]),a=be(o,["href","asChild","disabled","el"]);Ce(e,!1);const d=bt(),c=()=>st(I,"$item",d),s=At(),r=At();let u=v(e,"href",24,()=>{}),h=v(e,"asChild",8,!1),x=v(e,"disabled",8,!1),k=v(e,"el",28,()=>{});const{elements:{item:I},getAttrs:R}=Kt(),j=Nt();G(()=>c(),()=>{ot(s,c())}),G(()=>U(x()),()=>{ot(r,{...R("item"),...En(x())})}),G(()=>(g(s),g(r)),()=>{Object.assign(g(s),g(r))}),It(),We();var B=te(),m=K(B);Ee(m,h,N=>{var _=te(),V=K(_);fe(V,e,"default",{get builder(){return g(s)}}),b(N,_)},N=>{var _=te(),V=K(_);Fn(V,()=>u()?"a":"div",!1,(w,C)=>{Ye(w,X=>k(X),()=>k()),Ge(w,X=>g(s).action(X));let z;Z(()=>z=Le(w,z,{href:u(),...g(s),...a},void 0,w.namespaceURI===Tn,w.nodeName.includes("-"))),de("m-click",w,j),de("m-focusin",w,j),de("m-focusout",w,j),de("m-keydown",w,j),de("m-pointerdown",w,j),de("m-pointerleave",w,j),de("m-pointermove",w,j),de("pointerenter",w,function(X){De.call(this,e,X)});var L=te(),T=K(L);fe(T,e,"default",{get builder(){return g(s)}}),b(C,L)}),b(N,_)}),b(n,B),Oe()}function Tr(n,e){Ce(e,!1);const o=bt(),a=()=>st(w,"$idValues",o);let d=v(e,"closeOnOutsideClick",24,()=>{}),c=v(e,"closeOnEscape",24,()=>{}),s=v(e,"portal",24,()=>{}),r=v(e,"open",28,()=>{}),u=v(e,"onOpenChange",24,()=>{}),h=v(e,"preventScroll",24,()=>{}),x=v(e,"loop",24,()=>{}),k=v(e,"dir",24,()=>{}),I=v(e,"typeahead",24,()=>{}),R=v(e,"closeFocus",24,()=>{}),j=v(e,"disableFocusFirstItem",24,()=>{}),B=v(e,"closeOnItemClick",24,()=>{}),m=v(e,"onOutsideClick",24,()=>{});const{states:{open:N},updateOption:_,ids:V}=xr({closeOnOutsideClick:d(),closeOnEscape:c(),portal:s(),forceVisible:!0,defaultOpen:r(),preventScroll:h(),loop:x(),dir:k(),typeahead:I(),closeFocus:R(),disableFocusFirstItem:j(),closeOnItemClick:B(),onOutsideClick:m(),onOpenChange:({next:L})=>{var T;return r()!==L&&((T=u())==null||T(L),r(L)),L}}),w=ht([V.menu,V.trigger],([L,T])=>({menu:L,trigger:T}));G(()=>U(r()),()=>{r()!==void 0&&N.set(r())}),G(()=>U(d()),()=>{_("closeOnOutsideClick",d())}),G(()=>U(c()),()=>{_("closeOnEscape",c())}),G(()=>U(s()),()=>{_("portal",s())}),G(()=>U(h()),()=>{_("preventScroll",h())}),G(()=>U(x()),()=>{_("loop",x())}),G(()=>U(k()),()=>{_("dir",k())}),G(()=>U(R()),()=>{_("closeFocus",R())}),G(()=>U(j()),()=>{_("disableFocusFirstItem",j())}),G(()=>U(I()),()=>{_("typeahead",I())}),G(()=>U(B()),()=>{_("closeOnItemClick",B())}),G(()=>U(m()),()=>{_("onOutsideClick",m())}),It(),We();var C=te(),z=K(C);fe(z,e,"default",{get ids(){return a()}}),b(n,C),Oe()}var Er=$("<div><!></div>"),Cr=$("<div><!></div>"),Or=$("<div><!></div>"),Pr=$("<div><!></div>"),Ar=$("<div><!></div>");function Ir(n,e){const o=be(e,["children","$$slots","$$events","$$legacy"]),a=be(o,["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","id","side","align","sideOffset","alignOffset","collisionPadding","avoidCollisions","collisionBoundary","sameWidth","fitViewport","strategy","overlap","el"]);Ce(e,!1);const d=bt(),c=()=>st(ee,"$menu",d),s=()=>st(le,"$open",d),r=At();let u=v(e,"transition",24,()=>{}),h=v(e,"transitionConfig",24,()=>{}),x=v(e,"inTransition",24,()=>{}),k=v(e,"inTransitionConfig",24,()=>{}),I=v(e,"outTransition",24,()=>{}),R=v(e,"outTransitionConfig",24,()=>{}),j=v(e,"asChild",8,!1),B=v(e,"id",24,()=>{}),m=v(e,"side",8,"bottom"),N=v(e,"align",8,"center"),_=v(e,"sideOffset",8,0),V=v(e,"alignOffset",8,0),w=v(e,"collisionPadding",8,8),C=v(e,"avoidCollisions",8,!0),z=v(e,"collisionBoundary",24,()=>{}),L=v(e,"sameWidth",8,!1),T=v(e,"fitViewport",8,!1),X=v(e,"strategy",8,"absolute"),Y=v(e,"overlap",8,!1),H=v(e,"el",28,()=>{});const{elements:{menu:ee},states:{open:le},ids:pe,getAttrs:Pe}=Kt(),Te=Nt(),at=Pe("content");G(()=>U(B()),()=>{B()&&pe.menu.set(B())}),G(()=>c(),()=>{ot(r,c())}),G(()=>g(r),()=>{Object.assign(g(r),at)}),G(()=>(s(),U(m()),U(N()),U(_()),U(V()),U(w()),U(C()),U(z()),U(L()),U(T()),U(X()),U(Y())),()=>{s()&&kr({side:m(),align:N(),sideOffset:_(),alignOffset:V(),collisionPadding:w(),avoidCollisions:C(),collisionBoundary:z(),sameWidth:L(),fitViewport:T(),strategy:X(),overlap:Y()})}),It(),We();var Ve=te(),it=K(Ve);Ee(it,()=>j()&&s(),Ie=>{var Fe=te(),qe=K(Fe);fe(qe,e,"default",{get builder(){return g(r)}}),b(Ie,Fe)},Ie=>{var Fe=te(),qe=K(Fe);Ee(qe,()=>u()&&s(),lt=>{var ge=Er();let ut;var $e=we(ge);fe($e,e,"default",{get builder(){return g(r)}}),he(ge),Ye(ge,re=>H(re),()=>H()),Ge(ge,re=>g(r).action(re)),ze(()=>de("m-keydown",ge,Te)),Z(()=>ut=Le(ge,ut,{...g(r),...a})),yt(3,ge,u,h),b(lt,ge)},lt=>{var ge=te(),ut=K(ge);Ee(ut,()=>x()&&I()&&s(),$e=>{var re=Cr();let Re;var Ne=we(re);fe(Ne,e,"default",{get builder(){return g(r)}}),he(re),Ye(re,oe=>H(oe),()=>H()),Ge(re,oe=>g(r).action(oe)),ze(()=>de("m-keydown",re,Te)),Z(()=>Re=Le(re,Re,{...g(r),...a})),yt(1,re,x,k),yt(2,re,I,R),b($e,re)},$e=>{var re=te(),Re=K(re);Ee(Re,()=>x()&&s(),Ne=>{var oe=Or();let Ue;var Je=we(oe);fe(Je,e,"default",{get builder(){return g(r)}}),he(oe),Ye(oe,ue=>H(ue),()=>H()),Ge(oe,ue=>g(r).action(ue)),ze(()=>de("m-keydown",oe,Te)),Z(()=>Ue=Le(oe,Ue,{...g(r),...a})),yt(1,oe,x,k),b(Ne,oe)},Ne=>{var oe=te(),Ue=K(oe);Ee(Ue,()=>I()&&s(),Je=>{var ue=Pr();let He;var Qe=we(ue);fe(Qe,e,"default",{get builder(){return g(r)}}),he(ue),Ye(ue,_e=>H(_e),()=>H()),Ge(ue,_e=>g(r).action(_e)),ze(()=>de("m-keydown",ue,Te)),Z(()=>He=Le(ue,He,{...g(r),...a})),yt(2,ue,I,R),b(Je,ue)},Je=>{var ue=te(),He=K(ue);Ee(He,s,Qe=>{var _e=Ar();let ct;var jt=we(_e);fe(jt,e,"default",{get builder(){return g(r)}}),he(_e),Ye(_e,Ze=>H(Ze),()=>H()),Ge(_e,Ze=>g(r).action(Ze)),ze(()=>de("m-keydown",_e,Te)),Z(()=>ct=Le(_e,ct,{...g(r),...a})),b(Qe,_e)},null,!0),b(Je,ue)},!0),b(Ne,oe)},!0),b($e,re)},!0),b(lt,ge)},!0),b(Ie,Fe)}),b(n,Ve),Oe()}var Sr=$("<button><!></button>");function Mr(n,e){const o=be(e,["children","$$slots","$$events","$$legacy"]),a=be(o,["asChild","id","el"]);Ce(e,!1);const d=bt(),c=()=>st(x,"$trigger",d),s=At();let r=v(e,"asChild",8,!1),u=v(e,"id",24,()=>{}),h=v(e,"el",28,()=>{});const{elements:{trigger:x},ids:k,getAttrs:I}=Kt(),R=Nt(),j=I("trigger");G(()=>U(u()),()=>{u()&&k.trigger.set(u())}),G(()=>c(),()=>{ot(s,c())}),G(()=>g(s),()=>{Object.assign(g(s),j)}),It(),We();var B=te(),m=K(B);Ee(m,r,N=>{var _=te(),V=K(_);fe(V,e,"default",{get builder(){return g(s)}}),b(N,_)},N=>{var _=Sr();let V;var w=we(_);fe(w,e,"default",{get builder(){return g(s)}}),he(_),Ye(_,C=>h(C),()=>h()),Ge(_,C=>g(s).action(C)),ze(()=>de("m-keydown",_,R)),ze(()=>de("m-pointerdown",_,R)),Z(()=>V=Le(_,V,{...g(s),type:"button",...a})),b(N,_)}),b(n,B),Oe()}function Dr(){return{NAME:"toggle",PARTS:["root","input"]}}function Fr(n){const{NAME:e,PARTS:o}=Dr(),a=un(e,o),d={...yr(cn(n)),getAttrs:a};return ln(e,d),{...d,updateOption:dn(d.options)}}var Rr=$("<button><!></button>");function Nr(n,e){const o=be(e,["children","$$slots","$$events","$$legacy"]),a=be(o,["disabled","pressed","onPressedChange","asChild","el"]);Ce(e,!1);const d=bt(),c=()=>st(I,"$root",d),s=At();let r=v(e,"disabled",24,()=>{}),u=v(e,"pressed",28,()=>{}),h=v(e,"onPressedChange",24,()=>{}),x=v(e,"asChild",8,!1),k=v(e,"el",28,()=>{});const{elements:{root:I},states:{pressed:R},updateOption:j,getAttrs:B}=Fr({disabled:r(),defaultPressed:u(),onPressedChange:({next:w})=>{var C;return u()!==w&&((C=h())==null||C(w),u(w)),w}}),m=Nt(),N=B("root");G(()=>U(u()),()=>{u()!==void 0&&R.set(u())}),G(()=>U(r()),()=>{j("disabled",r())}),G(()=>c(),()=>{ot(s,c())}),G(()=>g(s),()=>{Object.assign(g(s),N)}),It(),We();var _=te(),V=K(_);Ee(V,x,w=>{var C=te(),z=K(C);fe(z,e,"default",{get builder(){return g(s)}}),b(w,C)},w=>{var C=Rr();let z;var L=we(C);fe(L,e,"default",{get builder(){return g(s)}}),he(C),Ye(C,T=>k(T),()=>k()),Ge(C,T=>g(s).action(T)),ze(()=>de("m-click",C,m)),ze(()=>de("m-keydown",C,m)),Z(()=>z=Le(C,z,{...g(s),type:"button",...a})),b(w,C)}),b(n,_),Oe()}var Kr=$("<div><!></div>");function jr(n,e){const o=be(e,["children","$$slots","$$events","$$legacy"]),a=be(o,["class"]);Ce(e,!1);let d=v(e,"class",8,void 0);We();var c=Kr();let s;var r=we(c);fe(r,e,"default",{}),he(c),Z(()=>s=Le(c,s,{class:Rt("flex flex-col space-y-1.5 p-6 pb-0",d()),...a})),b(n,c),Oe()}var Br=$("<!> <!>",1),zr=$("<a><!></a>");function an(n,e){Ce(e,!0);var o=zr(),a=we(o);mn(a,{openDelay:300,children:(d,c)=>{var s=Br(),r=K(s);vn(r,{children:(h,x)=>{gn(h,{size:"icon",variant:"outline",children:(k,I)=>{Tt(k,{icon:"i-carbon-link"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=se(r,2);hn(u,{children:(h,x)=>{je();var k=Ke();Z(()=>Me(k,e.link.label)),b(h,k)},$$slots:{default:!0}}),b(d,s)},$$slots:{default:!0}}),he(o),Z(()=>{Ot(o,"href",e.link.to),Ot(o,"target",e.link.newTab?"_blank":void 0)}),b(n,o),Oe()}function Lr(n,e){const o=be(e,["children","$$slots","$$events","$$legacy"]),a=be(o,["class","inset"]);Ce(e,!1);let d=v(e,"class",8,void 0),c=v(e,"inset",8,void 0);We();var s=Wt(()=>Rt("data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",c()&&"pl-8",d()));wr(n,Vt({get class(){return g(s)}},()=>a,{$$events:{click(r){De.call(this,e,r)},keydown(r){De.call(this,e,r)},focusin(r){De.call(this,e,r)},focusout(r){De.call(this,e,r)},pointerdown(r){De.call(this,e,r)},pointerleave(r){De.call(this,e,r)},pointermove(r){De.call(this,e,r)}},children:(r,u)=>{var h=te(),x=K(h);fe(x,e,"default",{}),b(r,h)},$$slots:{default:!0}})),Oe()}function Wr(n,e){const o=be(e,["children","$$slots","$$events","$$legacy"]),a=be(o,["class","sideOffset","transition","transitionConfig"]);Ce(e,!1);let d=v(e,"class",8,void 0),c=v(e,"sideOffset",8,4),s=v(e,"transition",8,Rn),r=v(e,"transitionConfig",8,void 0);We();var u=Wt(()=>Rt("bg-popover text-popover-foreground z-50 min-w-[8rem] rounded-md border p-1 shadow-md focus:outline-none",d()));Ir(n,Vt({get transition(){return s()},get transitionConfig(){return r()},get sideOffset(){return c()},get class(){return g(u)}},()=>a,{$$events:{keydown(h){De.call(this,e,h)}},children:(h,x)=>{var k=te(),I=K(k);fe(I,e,"default",{}),b(h,k)},$$slots:{default:!0}})),Oe()}const Vr=Tr,Ur=Mr;var Hr=$("<img>"),Xr=$("<!> <!>",1),Yr=$("<!> <!>",1),Gr=$('<a target="_blank"><!></a>'),qr=$("<!> <!>",1),$r=$("<!> <!>",1),Jr=$('<!> <div class="flex w-full flex-row items-center gap-1 overflow-x-hidden"><!> <!></div> <!>',1),Qr=$("<!> <!>",1),Zr=$("<!> <!>",1),es=$('<!> <!> <!> <div class="flex w-full flex-row items-center justify-between"><!> <!></div> <!> <div class="flex flex-row flex-wrap items-center gap-2"></div>',1),ts=$("<!> <!>",1);function ns(n,e){Ce(e,!0);const o=bt(),a=()=>st(Cn,"$mode",o);let d=mt(()=>$t(e.project.period.from)),c=mt(()=>$t(e.project.period.to)),s=mt(()=>Nn(e.project.period.from,e.project.period.to));var r=mt(()=>Kn(`/projects/${e.project.slug}`));Pn(n,{get color(){return e.project.color},class:"flex h-full flex-col",get href(){return g(r)},children:(u,h)=>{var x=ts(),k=K(x);jr(k,{class:"flex w-full flex-col gap-4",children:(R,j)=>{var B=Jr(),m=K(B);Vn(m,{children:(C,z)=>{var L=Xr(),T=K(L);Un(T,{children:(H,ee)=>{var le=Hr();Z(()=>{Ot(le,"src",jn.Unknown.light),Ot(le,"alt",e.project.name)}),b(H,le)},$$slots:{default:!0}});var X=se(T,2),Y=mt(()=>a()==="dark"?e.project.logo.dark:e.project.logo.light);Hn(X,{get src(){return g(Y)}}),b(C,L)},$$slots:{default:!0}});var N=se(m,2),_=we(N);An(_,{class:"h-auto min-w-0 flex-1 overflow-x-hidden",children:(C,z)=>{mn(C,{children:(L,T)=>{var X=Yr(),Y=K(X);vn(Y,{class:"w-full overflow-y-auto overflow-x-hidden truncate text-ellipsis text-nowrap text-left",children:(ee,le)=>{je();var pe=Ke();Z(()=>Me(pe,e.project.name)),b(ee,pe)},$$slots:{default:!0}});var H=se(Y,2);hn(H,{children:(ee,le)=>{je();var pe=Ke();Z(()=>Me(pe,e.project.name)),b(ee,pe)},$$slots:{default:!0}}),b(L,X)},$$slots:{default:!0}})},$$slots:{default:!0}});var V=se(_,2);Ee(V,()=>e.project.links.length>2,C=>{var z=$r(),L=K(z);an(L,{get link(){return e.project.links[0]}});var T=se(L,2);Vr(T,{children:(X,Y)=>{var H=qr(),ee=K(H);Ur(ee,{children:(pe,Pe)=>{gn(pe,{size:"icon",variant:"outline",children:(Te,at)=>{Tt(Te,{icon:"i-carbon-overflow-menu-vertical"})},$$slots:{default:!0}})},$$slots:{default:!0}});var le=se(ee,2);Wr(le,{children:(pe,Pe)=>{var Te=te(),at=K(Te);Et(at,17,()=>e.project.links.slice(1),Ve=>Ve.to,(Ve,it)=>{var Ie=Gr(),Fe=we(Ie);Lr(Fe,{children:(qe,lt)=>{je();var ge=Ke();Z(()=>Me(ge,g(it).label)),b(qe,ge)},$$slots:{default:!0}}),he(Ie),Z(()=>Ot(Ie,"href",g(it).to)),b(Ve,Ie)}),b(pe,Te)},$$slots:{default:!0}}),b(X,H)},$$slots:{default:!0}}),b(C,z)},C=>{var z=te(),L=K(z);Et(L,17,()=>e.project.links,T=>T.to,(T,X)=>{an(T,{get link(){return g(X)}})}),b(C,z)}),he(N);var w=se(N,2);en(w,{}),b(R,B)},$$slots:{default:!0}});var I=se(k,2);In(I,{class:"flex flex-1 flex-col gap-4",children:(R,j)=>{var B=es(),m=K(B);_t(m,{className:"flex flex-row gap-2 items-center",children:(T,X)=>{var Y=Qr(),H=K(Y);Tt(H,{icon:"i-carbon-assembly-cluster"});var ee=se(H,2);_t(ee,{children:(le,pe)=>{je();var Pe=Ke();Z(()=>Me(Pe,e.project.type)),b(le,Pe)},$$slots:{default:!0}}),b(T,Y)},$$slots:{default:!0}});var N=se(m,2);_t(N,{className:"flex flex-row gap-2 items-center",children:(T,X)=>{var Y=Zr(),H=K(Y);Tt(H,{icon:"i-carbon-time"});var ee=se(H,2);_t(ee,{children:(le,pe)=>{je();var Pe=Ke();Z(()=>Me(Pe,g(s))),b(le,Pe)},$$slots:{default:!0}}),b(T,Y)},$$slots:{default:!0}});var _=se(N,2);_t(_,{className:"py-4 md:py-2 md:min-h-[100px] md:max-h-[100px]",children:(T,X)=>{je();var Y=Ke();Z(()=>Me(Y,Bn(e.project.shortDescription,100))),b(T,Y)},$$slots:{default:!0}});var V=se(_,2),w=we(V);Jt(w,{variant:"outline",children:(T,X)=>{je();var Y=Ke();Z(()=>Me(Y,g(d))),b(T,Y)},$$slots:{default:!0}});var C=se(w,2);Jt(C,{variant:"outline",children:(T,X)=>{je();var Y=Ke();Z(()=>Me(Y,g(c))),b(T,Y)},$$slots:{default:!0}}),he(V);var z=se(V,2);en(z,{});var L=se(z,2);Et(L,21,()=>e.project.skills,T=>T.slug,(T,X)=>{Wn(T,{get skill(){return g(X)}})}),he(L),b(R,B)},$$slots:{default:!0}}),b(u,x)},$$slots:{default:!0}}),Oe()}const rs=Zn({base:"ring-offset-background hover:bg-muted hover:text-muted-foreground focus-visible:ring-ring data-[state=on]:bg-accent data-[state=on]:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",variants:{variant:{default:"bg-transparent",outline:"border-input hover:bg-accent hover:text-accent-foreground border bg-transparent"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}});function ss(n,e){const o=be(e,["children","$$slots","$$events","$$legacy"]),a=be(o,["class","variant","size","pressed"]);Ce(e,!1);let d=v(e,"class",8,void 0),c=v(e,"variant",8,"default"),s=v(e,"size",8,"default"),r=v(e,"pressed",12,void 0);We();var u=Wt(()=>Rt(rs({variant:c(),size:s(),className:d()})));Nr(n,Vt({get pressed(){return r()},set pressed(h){r(h)},get class(){return g(u)}},()=>a,{$$events:{click(h){De.call(this,e,h)}},children:(h,x)=>{var k=te(),I=K(k);fe(I,e,"default",{}),b(h,k)},$$slots:{default:!0},$$legacy:!0})),Oe()}var os=$("<!> ",1),as=$('<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"></div>'),is=$('<div class="flex flex-1 flex-col gap-8"><div class="flex flex-row flex-wrap gap-2"></div> <!></div>');function Ss(n,e){Ce(e,!0);let o=Yt(Bt(er.items.filter(r=>zt.items.some(u=>u.skills.some(h=>h.slug===r.slug))))),a=Yt(""),d=mt(()=>zt.items.filter(r=>{const u=g(o).every(x=>!x.isSelected)||r.skills.some(x=>g(o).some(k=>k.isSelected&&k.slug===x.slug)),h=g(a).trim().length===0||r.name.trim().toLowerCase().includes(g(a).trim().toLowerCase());return u&&h}));const c=r=>{ot(o,Bt(g(o).map(u=>u.slug===r?{...u,isSelected:!u.isSelected}:u)))};Sn(n,{get title(){return zt.title},onSearch:r=>ot(a,Bt(r)),children:(r,u)=>{var h=is(),x=we(h);Et(x,21,()=>g(o),I=>I.slug,(I,R)=>{ss(I,{get pressed(){return g(R).isSelected},variant:"outline",class:"flex flex-row items-center gap-2 rounded-lg",$$events:{click:()=>c(g(R).slug)},children:(j,B)=>{var m=os(),N=K(m);Ee(N,()=>g(R).isSelected,V=>{Tt(V,{icon:"i-carbon-close"})});var _=se(N);Z(()=>Me(_,` ${g(R).name??""}`)),b(j,m)},$$slots:{default:!0}})}),he(x);var k=se(x,2);Ee(k,()=>g(d).length===0,I=>{On(I)},I=>{var R=as();Et(R,21,()=>g(d),j=>j.slug,(j,B)=>{ns(j,{get project(){return g(B)}})}),he(R),b(I,R)}),he(h),b(r,h)},$$slots:{default:!0}}),Oe()}export{Ss as component};
