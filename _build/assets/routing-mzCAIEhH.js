const d={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return Re(this.context.count)},getNextContextId(){return Re(this.context.count++)}};function Re(e){const t=String(e),n=t.length-1;return d.context.id+(n?String.fromCharCode(96+n):"")+t}function I(e){d.context=e}function ct(){return{...d.context,id:d.getNextContextId(),count:0}}const at=(e,t)=>e===t,ae=Symbol("solid-proxy"),Ve=typeof Proxy=="function",de={equals:at};let Z=null,dt=Qe;const k=1,te=2,De={owned:null,cleanups:null,context:null,owner:null},be={};var y=null;let f=null,ht=null,m=null,v=null,O=null,ge=0;function Ue(e,t){const n=m,s=y,r=e.length===0,i=t===void 0?s:t,o=r?De:{owned:null,cleanups:null,context:i?i.context:null,owner:i},l=r?e:()=>e(()=>$(()=>M(o)));y=o,m=null;try{return R(l,!0)}finally{m=n,y=s}}function N(e,t){t=t?Object.assign({},de,t):de;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(f&&f.running&&f.sources.has(n)?r=r(n.tValue):r=r(n.value)),ze(n,r));return[Xe.bind(n),s]}function je(e,t,n){const s=pe(e,t,!0,k);ie(s)}function H(e,t,n){const s=pe(e,t,!1,k);ie(s)}function C(e,t,n){n=n?Object.assign({},de,n):de;const s=pe(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,ie(s),Xe.bind(s)}function gt(e){return e&&typeof e=="object"&&"then"in e}function yt(e,t,n){let s,r,i;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,r=e,i={}):(s=e,r=t,i={});let o=null,l=be,u=null,a=!1,c=!1,h="initialValue"in i,g=typeof s=="function"&&C(s);const p=new Set,[w,E]=(i.storage||N)(i.initialValue),[T,j]=N(void 0),[B,q]=N(void 0,{equals:!1}),[V,X]=N(h?"ready":"unresolved");d.context&&(u=d.getNextContextId(),i.ssrLoadFrom==="initial"?l=i.initialValue:d.load&&d.has(u)&&(l=d.load(u)));function _(S,P,A,F){return o===S&&(o=null,F!==void 0&&(h=!0),(S===l||P===l)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(F,{value:P})),l=be,f&&S&&a?(f.promises.delete(S),a=!1,R(()=>{f.running=!0,z(P,A)},!1)):z(P,A)),P}function z(S,P){R(()=>{P===void 0&&E(()=>S),X(P!==void 0?"errored":h?"ready":"unresolved"),j(P);for(const A of p.keys())A.decrement();p.clear()},!1)}function J(){const S=ne&&re(ne),P=w(),A=T();if(A!==void 0&&!o)throw A;return m&&!m.user&&S&&je(()=>{B(),o&&(S.resolved&&f&&a?f.promises.add(o):p.has(S)||(S.increment(),p.add(S)))}),P}function K(S=!0){if(S!==!1&&c)return;c=!1;const P=g?g():s;if(a=f&&f.running,P==null||P===!1){_(o,$(w));return}f&&o&&f.promises.delete(o);const A=l!==be?l:$(()=>r(P,{value:w(),refetching:S}));return gt(A)?(o=A,"value"in A?(A.status==="success"?_(o,A.value,void 0,P):_(o,void 0,Ae(A.value),P),A):(c=!0,queueMicrotask(()=>c=!1),R(()=>{X(h?"refreshing":"pending"),q()},!1),A.then(F=>_(A,F,void 0,P),F=>_(A,void 0,Ae(F),P)))):(_(o,A,void 0,P),A)}return Object.defineProperties(J,{state:{get:()=>V()},error:{get:()=>T()},loading:{get(){const S=V();return S==="pending"||S==="refreshing"}},latest:{get(){if(!h)return J();const S=T();if(S&&!o)throw S;return w()}}}),g?je(()=>K(!1)):K(!1),[J,{refetch:K,mutate:E}]}function pt(e){return R(e,!1)}function $(e){if(m===null)return e();const t=m;m=null;try{return e()}finally{m=t}}function Ke(e,t,n){const s=Array.isArray(e);let r,i=n&&n.defer;return o=>{let l;if(s){l=Array(e.length);for(let a=0;a<e.length;a++)l[a]=e[a]()}else l=e();if(i)return i=!1,o;const u=$(()=>t(l,r,o));return r=l,u}}function Ye(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function mt(e,t){Z||(Z=Symbol("error")),y=pe(void 0,void 0,!0),y.context={...y.context,[Z]:[t]},f&&f.running&&f.sources.add(y);try{return e()}catch(n){oe(n)}finally{y=y.owner}}function We(){return y}function Ge(e,t){const n=y,s=m;y=e,m=null;try{return R(t,!0)}catch(r){oe(r)}finally{y=n,m=s}}function wt(e){if(f&&f.running)return e(),f.done;const t=m,n=y;return Promise.resolve().then(()=>{m=t,y=n;let s;return ne&&(s=f||(f={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(r=>s.resolve=r)),s.running=!0),R(e,!1),m=y=null,s?s.done:void 0})}const[dn,Le]=N(!1);function bt(e){O.push.apply(O,e),e.length=0}function ye(e,t){const n=Symbol("context");return{id:n,Provider:At(n),defaultValue:e}}function re(e){let t;return y&&y.context&&(t=y.context[e.id])!==void 0?t:e.defaultValue}function xt(e){const t=C(e),n=C(()=>Ce(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let ne;function St(){return ne||(ne=ye())}function Xe(){const e=f&&f.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===k)ie(this);else{const t=v;v=null,R(()=>he(this),!1),v=t}if(m){const t=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(t)):(m.sources=[this],m.sourceSlots=[t]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return e&&f.sources.has(this)?this.tValue:this.value}function ze(e,t,n){let s=f&&f.running&&f.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,t)){if(f){const r=f.running;(r||!n&&f.sources.has(e))&&(f.sources.add(e),e.tValue=t),r||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&R(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],o=f&&f.running;o&&f.disposed.has(i)||((o?!i.tState:!i.state)&&(i.pure?v.push(i):O.push(i),i.observers&&Ze(i)),o?i.tState=k:i.state=k)}if(v.length>1e6)throw v=[],new Error},!1)}return t}function ie(e){if(!e.fn)return;M(e);const t=ge;ke(e,f&&f.running&&f.sources.has(e)?e.tValue:e.value,t),f&&!f.running&&f.sources.has(e)&&queueMicrotask(()=>{R(()=>{f&&(f.running=!0),m=y=e,ke(e,e.tValue,t),m=y=null},!1)})}function ke(e,t,n){let s;const r=y,i=m;m=y=e;try{s=e.fn(t)}catch(o){return e.pure&&(f&&f.running?(e.tState=k,e.tOwned&&e.tOwned.forEach(M),e.tOwned=void 0):(e.state=k,e.owned&&e.owned.forEach(M),e.owned=null)),e.updatedAt=n+1,oe(o)}finally{m=i,y=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ze(e,s,!0):f&&f.running&&e.pure?(f.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=n)}function pe(e,t,n,s=k,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:y?y.context:null,pure:n};return f&&f.running&&(i.state=0,i.tState=s),y===null||y!==De&&(f&&f.running&&y.pure?y.tOwned?y.tOwned.push(i):y.tOwned=[i]:y.owned?y.owned.push(i):y.owned=[i]),i}function Je(e){const t=f&&f.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===te)return he(e);if(e.suspense&&$(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ge);){if(t&&f.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let s=n.length-1;s>=0;s--){if(e=n[s],t){let r=e,i=n[s+1];for(;(r=r.owner)&&r!==i;)if(f.disposed.has(r))return}if((t?e.tState:e.state)===k)ie(e);else if((t?e.tState:e.state)===te){const r=v;v=null,R(()=>he(e,n[0]),!1),v=r}}}function R(e,t){if(v)return e();let n=!1;t||(v=[]),O?n=!0:O=[],ge++;try{const s=e();return Pt(n),s}catch(s){n||(O=null),v=null,oe(s)}}function Pt(e){if(v&&(Qe(v),v=null),e)return;let t;if(f){if(!f.promises.size&&!f.queue.size){const s=f.sources,r=f.disposed;O.push.apply(O,f.effects),t=f.resolve;for(const i of O)"tState"in i&&(i.state=i.tState),delete i.tState;f=null,R(()=>{for(const i of r)M(i);for(const i of s){if(i.value=i.tValue,i.owned)for(let o=0,l=i.owned.length;o<l;o++)M(i.owned[o]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}Le(!1)},!1)}else if(f.running){f.running=!1,f.effects.push.apply(f.effects,O),O=null,Le(!0);return}}const n=O;O=null,n.length&&R(()=>dt(n),!1),t&&t()}function Qe(e){for(let t=0;t<e.length;t++)Je(e[t])}function he(e,t){const n=f&&f.running;n?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];if(r.sources){const i=n?r.tState:r.state;i===k?r!==t&&(!r.updatedAt||r.updatedAt<ge)&&Je(r):i===te&&he(r,t)}}}function Ze(e){const t=f&&f.running;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(t?!s.tState:!s.state)&&(t?s.tState=te:s.state=te,s.pure?v.push(s):O.push(s),s.observers&&Ze(s))}}function M(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),o=n.observerSlots.pop();s<r.length&&(i.sourceSlots[o]=s,r[s]=i,n.observerSlots[s]=o)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)M(e.tOwned[t]);delete e.tOwned}if(f&&f.running&&e.pure)et(e,!0);else if(e.owned){for(t=e.owned.length-1;t>=0;t--)M(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}f&&f.running?e.tState=0:e.state=0}function et(e,t){if(t||(e.tState=0,f.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)et(e.owned[n])}function Ae(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Ie(e,t,n){try{for(const s of t)s(e)}catch(s){oe(s,n&&n.owner||null)}}function oe(e,t=y){const n=Z&&t&&t.context&&t.context[Z],s=Ae(e);if(!n)throw s;O?O.push({fn(){Ie(s,n,t)},state:k}):Ie(s,n,t)}function Ce(e){if(typeof e=="function"&&!e.length)return Ce(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=Ce(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function At(e,t){return function(s){let r;return H(()=>r=$(()=>(y.context={...y.context,[e]:s.value},xt(()=>s.children))),void 0),r}}let tt=!1;function Ct(){tt=!0}function nt(e,t){if(tt&&d.context){const n=d.context;I(ct());const s=$(()=>e(t||{}));return I(n),s}return $(()=>e(t||{}))}function fe(){return!0}const Ee={get(e,t,n){return t===ae?n:e.get(t)},has(e,t){return t===ae?!0:e.has(t)},set:fe,deleteProperty:fe,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:fe,deleteProperty:fe}},ownKeys(e){return e.keys()}};function xe(e){return(e=typeof e=="function"?e():e)?e:{}}function Et(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function hn(...e){let t=!1;for(let o=0;o<e.length;o++){const l=e[o];t=t||!!l&&ae in l,e[o]=typeof l=="function"?(t=!0,C(l)):l}if(Ve&&t)return new Proxy({get(o){for(let l=e.length-1;l>=0;l--){const u=xe(e[l])[o];if(u!==void 0)return u}},has(o){for(let l=e.length-1;l>=0;l--)if(o in xe(e[l]))return!0;return!1},keys(){const o=[];for(let l=0;l<e.length;l++)o.push(...Object.keys(xe(e[l])));return[...new Set(o)]}},Ee);const n={},s=Object.create(null);for(let o=e.length-1;o>=0;o--){const l=e[o];if(!l)continue;const u=Object.getOwnPropertyNames(l);for(let a=u.length-1;a>=0;a--){const c=u[a];if(c==="__proto__"||c==="constructor")continue;const h=Object.getOwnPropertyDescriptor(l,c);if(!s[c])s[c]=h.get?{enumerable:!0,configurable:!0,get:Et.bind(n[c]=[h.get.bind(l)])}:h.value!==void 0?h:void 0;else{const g=n[c];g&&(h.get?g.push(h.get.bind(l)):h.value!==void 0&&g.push(()=>h.value))}}}const r={},i=Object.keys(s);for(let o=i.length-1;o>=0;o--){const l=i[o],u=s[l];u&&u.get?Object.defineProperty(r,l,u):r[l]=u?u.value:void 0}return r}function gn(e,...t){if(Ve&&ae in e){const r=new Set(t.length>1?t.flat():t[0]),i=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},Ee));return i.push(new Proxy({get(o){return r.has(o)?void 0:e[o]},has(o){return r.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!r.has(o))}},Ee)),i}const n={},s=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,r),o=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let l=!1,u=0;for(const a of t)a.includes(r)&&(l=!0,o?s[u][r]=i.value:Object.defineProperty(s[u],r,i)),++u;l||(o?n[r]=i.value:Object.defineProperty(n,r,i))}return[...s,n]}function yn(e){let t,n;const s=r=>{const i=d.context;if(i){const[l,u]=N();d.count||(d.count=0),d.count++,(n||(n=e())).then(a=>{!d.done&&I(i),d.count--,u(()=>a.default),I()}),t=l}else if(!t){const[l]=yt(()=>(n||(n=e())).then(u=>u.default));t=l}let o;return C(()=>(o=t())?$(()=>{if(!i||d.done)return o(r);const l=d.context;I(i);const u=o(r);return I(l),u}):"")};return s.preload=()=>n||((n=e()).then(r=>t=()=>r.default),n),s}const Ot=e=>`Stale read from <${e}>.`;function pn(e){const t=e.keyed,n=C(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return C(()=>{const s=n();if(s){const r=e.children;return typeof r=="function"&&r.length>0?$(()=>r(t?s:()=>{if(!$(n))throw Ot("Show");return e.when})):r}return e.fallback},void 0,void 0)}let G;function vt(){G&&[...G].forEach(e=>e())}function mn(e){let t;d.context&&d.load&&(t=d.load(d.getContextId()));const[n,s]=N(t,void 0);return G||(G=new Set),G.add(s),Ye(()=>G.delete(s)),C(()=>{let r;if(r=n()){const i=e.fallback;return typeof i=="function"&&i.length?$(()=>i(r,()=>s())):i}return mt(()=>e.children,s)},void 0,void 0)}const $t=ye();function wn(e){let t=0,n,s,r,i,o;const[l,u]=N(!1),a=St(),c={increment:()=>{++t===1&&u(!0)},decrement:()=>{--t===0&&u(!1)},inFallback:l,effects:[],resolved:!1},h=We();if(d.context&&d.load){const w=d.getContextId();let E=d.load(w);if(E&&(typeof E!="object"||E.status!=="success"?r=E:d.gather(w)),r&&r!=="$$f"){const[T,j]=N(void 0,{equals:!1});i=T,r.then(()=>{if(d.done)return j();d.gather(w),I(s),j(),I()},B=>{o=B,j()})}}const g=re($t);g&&(n=g.register(c.inFallback));let p;return Ye(()=>p&&p()),nt(a.Provider,{value:c,get children(){return C(()=>{if(o)throw o;if(s=d.context,i)return i(),i=void 0;s&&r==="$$f"&&I();const w=C(()=>e.children);return C(E=>{const T=c.inFallback(),{showContent:j=!0,showFallback:B=!0}=n?n():{};if((!T||r&&r!=="$$f")&&j)return c.resolved=!0,p&&p(),p=s=r=void 0,bt(c.effects),w();if(B)return p?E:Ue(q=>(p=q,s&&(I({id:s.id+"F",count:0}),s=void 0),e.fallback),h)})})}})}const Tt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Nt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Tt]),Rt=new Set(["innerHTML","textContent","innerText","children"]),jt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Lt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function kt(e,t){const n=Lt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const It=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]);function _t(e,t,n){let s=n.length,r=t.length,i=s,o=0,l=0,u=t[r-1].nextSibling,a=null;for(;o<r||l<i;){if(t[o]===n[l]){o++,l++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===o){const c=i<s?l?n[l-1].nextSibling:n[i-l]:u;for(;l<i;)e.insertBefore(n[l++],c)}else if(i===l)for(;o<r;)(!a||!a.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[l]===t[r-1]){const c=t[--r].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--i],c),t[r]=n[i]}else{if(!a){a=new Map;let h=l;for(;h<i;)a.set(n[h],h++)}const c=a.get(t[o]);if(c!=null)if(l<c&&c<i){let h=o,g=1,p;for(;++h<r&&h<i&&!((p=a.get(t[h]))==null||p!==c+g);)g++;if(g>c-l){const w=t[o];for(;l<c;)e.insertBefore(n[l++],w)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const _e="_$DX_DELEGATE";function qe(e,t,n,s={}){let r;return Ue(i=>{r=i,t===document?e():Ut(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function bn(e,t,n){let s;const r=()=>{const o=document.createElement("template");return o.innerHTML=e,o.content.firstChild},i=()=>(s||(s=r())).cloneNode(!0);return i.cloneNode=i,i}function qt(e,t=window.document){const n=t[_e]||(t[_e]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,st))}}function Oe(e,t,n){U(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function Ft(e,t,n){U(e)||(n?e.setAttribute(t,""):e.removeAttribute(t))}function Ht(e,t){U(e)||(t==null?e.removeAttribute("class"):e.className=t)}function Mt(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n,typeof n!="function"&&n)}function Bt(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let i,o;for(i=0,o=r.length;i<o;i++){const l=r[i];!l||l==="undefined"||t[l]||(Fe(e,l,!1),delete n[l])}for(i=0,o=s.length;i<o;i++){const l=s[i],u=!!t[l];!l||l==="undefined"||n[l]===u||!u||(Fe(e,l,!0),n[l]=u)}return n}function Vt(e,t,n){if(!t)return n?Oe(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)r=t[i],r!==n[i]&&(s.setProperty(i,r),n[i]=r);return n}function xn(e,t={},n,s){const r={};return s||H(()=>r.children=se(e,t.children,r.children)),H(()=>typeof t.ref=="function"&&Dt(t.ref,e)),H(()=>Kt(e,t,n,!0,r,!0)),r}function Dt(e,t,n){return $(()=>e(t,n))}function Ut(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return se(e,t,s,n);H(r=>se(e,t(),r,n),s)}function Kt(e,t,n,s,r={},i=!1){t||(t={});for(const o in r)if(!(o in t)){if(o==="children")continue;r[o]=He(e,o,null,r[o],n,i,t)}for(const o in t){if(o==="children")continue;const l=t[o];r[o]=He(e,o,l,r[o],n,i,t)}}function Yt(e,t,n={}){if(globalThis._$HY.done)return qe(e,t,[...t.childNodes],n);d.completed=globalThis._$HY.completed,d.events=globalThis._$HY.events,d.load=s=>globalThis._$HY.r[s],d.has=s=>s in globalThis._$HY.r,d.gather=s=>Be(t,s),d.registry=new Map,d.context={id:n.renderId||"",count:0};try{return Be(t,n.renderId),qe(e,t,[...t.childNodes],n)}finally{d.context=null}}function Sn(e){let t,n;return!U()||!(t=d.registry.get(n=Gt()))?e():(d.completed&&d.completed.add(t),d.registry.delete(n),t)}function Pn(e){let t=e,n=0,s=[];if(U(e))for(;t;){if(t.nodeType===8){const r=t.nodeValue;if(r==="$")n++;else if(r==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function An(){d.events&&!d.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=d;if(t){for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;t.shift(),st(s)}d.done&&(d.events=_$HY.events=null,d.completed=_$HY.completed=null)}}),d.events.queued=!0)}function U(e){return!!d.context&&!d.done&&(!e||e.isConnected)}function Wt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Fe(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,i=s.length;r<i;r++)e.classList.toggle(s[r],n)}function He(e,t,n,s,r,i,o){let l,u,a,c,h;if(t==="style")return Vt(e,n,s);if(t==="classList")return Bt(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const g=t.slice(3);s&&e.removeEventListener(g,s,typeof s!="function"&&s),n&&e.addEventListener(g,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const g=t.slice(10);s&&e.removeEventListener(g,s,!0),n&&e.addEventListener(g,n,!0)}else if(t.slice(0,2)==="on"){const g=t.slice(2).toLowerCase(),p=It.has(g);if(!p&&s){const w=Array.isArray(s)?s[0]:s;e.removeEventListener(g,w)}(p||n)&&(Mt(e,g,n,p),p&&qt([g]))}else if(t.slice(0,5)==="attr:")Oe(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")Ft(e,t.slice(5),n);else if((h=t.slice(0,5)==="prop:")||(a=Rt.has(t))||(c=kt(t,e.tagName))||(u=Nt.has(t))||(l=e.nodeName.includes("-")||"is"in o)){if(h)t=t.slice(5),u=!0;else if(U(e))return n;t==="class"||t==="className"?Ht(e,n):l&&!u&&!a?e[Wt(t)]=n:e[c||t]=n}else Oe(e,jt[t]||t,n);return n}function st(e){if(d.registry&&d.events&&d.events.find(([u,a])=>a===e))return;let t=e.target;const n=`$$${e.type}`,s=e.target,r=e.currentTarget,i=u=>Object.defineProperty(e,"target",{configurable:!0,value:u}),o=()=>{const u=t[n];if(u&&!t.disabled){const a=t[`${n}Data`];if(a!==void 0?u.call(t,a,e):u.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&i(t.host),!0},l=()=>{for(;o()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),d.registry&&!d.done&&(d.done=_$HY.done=!0),e.composedPath){const u=e.composedPath();i(u[0]);for(let a=0;a<u.length-2&&(t=u[a],!!o());a++){if(t._$host){t=t._$host,l();break}if(t.parentNode===r)break}}else l();i(s)}function se(e,t,n,s,r){const i=U(e);if(i){!n&&(n=[...e.childNodes]);let u=[];for(let a=0;a<n.length;a++){const c=n[a];c.nodeType===8&&c.data.slice(0,2)==="!$"?c.remove():u.push(c)}n=u}for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(i||o==="number"&&(t=t.toString(),t===n))return n;if(l){let u=n[0];u&&u.nodeType===3?u.data!==t&&(u.data=t):u=document.createTextNode(t),n=W(e,n,s,u)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(i)return n;n=W(e,n,s)}else{if(o==="function")return H(()=>{let u=t();for(;typeof u=="function";)u=u();n=se(e,u,n,s)}),()=>n;if(Array.isArray(t)){const u=[],a=n&&Array.isArray(n);if(ve(u,t,n,r))return H(()=>n=se(e,u,n,s,!0)),()=>n;if(i){if(!u.length)return n;if(s===void 0)return n=[...e.childNodes];let c=u[0];if(c.parentNode!==e)return n;const h=[c];for(;(c=c.nextSibling)!==s;)h.push(c);return n=h}if(u.length===0){if(n=W(e,n,s),l)return n}else a?n.length===0?Me(e,u,s):_t(e,n,u):(n&&W(e),Me(e,u));n=u}else if(t.nodeType){if(i&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=W(e,n,s,t);W(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ve(e,t,n,s){let r=!1;for(let i=0,o=t.length;i<o;i++){let l=t[i],u=n&&n[e.length],a;if(!(l==null||l===!0||l===!1))if((a=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))r=ve(e,l,u)||r;else if(a==="function")if(s){for(;typeof l=="function";)l=l();r=ve(e,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||r}else e.push(l),r=!0;else{const c=String(l);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return r}function Me(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function W(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(r!==l){const u=l.parentNode===e;!i&&!o?u?e.replaceChild(r,l):e.insertBefore(r,n):u&&l.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}function Be(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const r=n[s],i=r.getAttribute("data-hk");(!t||i.startsWith(t))&&!d.registry.has(i)&&d.registry.set(i,r)}}function Gt(){return d.getNextContextId()}const Xt=!1,Cn=(...e)=>(Ct(),Yt(...e));function zt(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,i){if(n)return!(n=!1);const o={to:r,options:i,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const l of e)l.listener({...o,from:l.location,retry:u=>{u&&(n=!0),l.navigate(r,{...i,resolve:!1})}});return!o.defaultPrevented}return{subscribe:t,confirm:s}}let $e;function rt(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),$e=window.history.state._depth}rt();function En(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function On(e,t){let n=!1;return()=>{const s=$e;rt();const r=s==null?null:$e-s;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const Jt=/^(?:[a-z0-9]+:)?\/\//i,Qt=/^\/+|(\/)\/+$/g,Zt="http://sr";function ee(e,t=!1){const n=e.replace(Qt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ce(e,t,n){if(Jt.test(t))return;const s=ee(e),r=n&&ee(n);let i="";return!r||t.startsWith("/")?i=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?i=s+r:i=r,(i||"/")+ee(t,!i)}function en(e,t){if(e==null)throw new Error(t);return e}function tn(e,t){return ee(e).replace(/\/*(\*.*)?$/g,"")+ee(t)}function it(e){const t={};return e.searchParams.forEach((n,s)=>{s in t?Array.isArray(t[s])?t[s].push(n):t[s]=[t[s],n]:t[s]=n}),t}function nn(e,t,n){const[s,r]=e.split("/*",2),i=s.split("/").filter(Boolean),o=i.length;return l=>{const u=l.split("/").filter(Boolean),a=u.length-o;if(a<0||a>0&&r===void 0&&!t)return null;const c={path:o?"":"/",params:{}},h=g=>n===void 0?void 0:n[g];for(let g=0;g<o;g++){const p=i[g],w=p[0]===":",E=w?u[g]:u[g].toLowerCase(),T=w?p.slice(1):p.toLowerCase();if(w&&Se(E,h(T)))c.params[T]=E;else if(w||!Se(E,T))return null;c.path+=`/${E}`}if(r){const g=a?u.slice(-a).join("/"):"";if(Se(g,h(r)))c.params[r]=g;else return null}return c}}function Se(e,t){const n=s=>s===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function sn(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,i)=>r+(i.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function ot(e){const t=new Map,n=We();return new Proxy({},{get(s,r){return t.has(r)||Ge(n,()=>t.set(r,C(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function lt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return lt(s).reduce((i,o)=>[...i,...r.map(l=>l+o)],[])}const rn=100,on=ye(),ut=ye(),Te=()=>en(re(on),"<A> and 'use' router primitives can be only used inside a Route."),ln=()=>re(ut)||Te().base,vn=e=>{const t=ln();return C(()=>t.resolvePath(e()))},$n=e=>{const t=Te();return C(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Tn=()=>Te().location;function un(e,t=""){const{component:n,preload:s,load:r,children:i,info:o}=e,l=!i||Array.isArray(i)&&!i.length,u={key:e,component:n,preload:s||r,info:o};return ft(e.path).reduce((a,c)=>{for(const h of lt(c)){const g=tn(t,h);let p=l?g:g.split("/*",1)[0];p=p.split("/").map(w=>w.startsWith(":")||w.startsWith("*")?w:encodeURIComponent(w)).join("/"),a.push({...u,originalPath:c,pattern:p,matcher:nn(p,!l,e.matchFilters)})}return a},[])}function fn(e,t=0){return{routes:e,score:sn(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const i=e[r],o=i.matcher(n);if(!o)return null;s.unshift({...o,route:i})}return s}}}function ft(e){return Array.isArray(e)?e:[e]}function cn(e,t="",n=[],s=[]){const r=ft(e);for(let i=0,o=r.length;i<o;i++){const l=r[i];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const u=un(l,t);for(const a of u){n.push(a);const c=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!c)cn(l.children,a.pattern,n,s);else{const h=fn([...n],s.length);s.push(h)}n.pop()}}}return n.length?s:s.sort((i,o)=>o.score-i.score)}function Pe(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function an(e,t,n){const s=new URL(Zt),r=C(c=>{const h=e();try{return new URL(h,s)}catch{return console.error(`Invalid path ${h}`),c}},s,{equals:(c,h)=>c.href===h.href}),i=C(()=>r().pathname),o=C(()=>r().search,!0),l=C(()=>r().hash),u=()=>"",a=Ke(o,()=>it(r()));return{get pathname(){return i()},get search(){return o()},get hash(){return l()},get state(){return t()},get key(){return u()},query:n?n(a):ot(a)}}let D;function Nn(){return D}function Rn(e){}function jn(e,t,n,s={}){const{signal:[r,i],utils:o={}}=e,l=o.parsePath||(b=>b),u=o.renderPath||(b=>b),a=o.beforeLeave||zt(),c=ce("",s.base||"");if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!r().value&&i({value:c,replace:!0,scroll:!1});const[h,g]=N(!1);let p;const w=(b,x)=>{x.value===E()&&x.state===j()||(p===void 0&&g(!0),D=b,p=x,wt(()=>{p===x&&(T(p.value),B(p.state),vt(),X[1]([]))}).finally(()=>{p===x&&pt(()=>{D=void 0,b==="navigate"&&A(p),g(!1),p=void 0})}))},[E,T]=N(r().value),[j,B]=N(r().state),q=an(E,j,o.queryWrapper),V=[],X=N([]),_=C(()=>typeof s.transformUrl=="function"?Pe(t(),s.transformUrl(q.pathname)):Pe(t(),q.pathname)),z=()=>{const b=_(),x={};for(let L=0;L<b.length;L++)Object.assign(x,b[L].params);return x},J=o.paramsWrapper?o.paramsWrapper(z,t):ot(z),K={pattern:c,path:()=>c,outlet:()=>null,resolvePath(b){return ce(c,b)}};return H(Ke(r,b=>w("native",b),{defer:!0})),{base:K,location:q,params:J,isRouting:h,renderPath:u,parsePath:l,navigatorFactory:P,matches:_,beforeLeave:a,preloadRoute:F,singleFlight:s.singleFlight===void 0?!0:s.singleFlight,submissions:X};function S(b,x,L){$(()=>{if(typeof x=="number"){x&&(o.go?o.go(x):console.warn("Router integration does not support relative routing"));return}const le=!x||x[0]==="?",{replace:me,resolve:Y,scroll:we,state:Q}={replace:!1,resolve:!le,scroll:!0,...L},ue=Y?b.resolvePath(x):ce(le&&q.pathname||"",x);if(ue===void 0)throw new Error(`Path '${x}' is not a routable path`);if(V.length>=rn)throw new Error("Too many redirects");const Ne=E();(ue!==Ne||Q!==j())&&(Xt||a.confirm(ue,L)&&(V.push({value:Ne,replace:me,scroll:we,state:j()}),w("navigate",{value:ue,state:Q})))})}function P(b){return b=b||re(ut)||K,(x,L)=>S(b,x,L)}function A(b){const x=V[0];x&&(i({...b,replace:x.replace,scroll:x.scroll}),V.length=0)}function F(b,x){const L=Pe(t(),b.pathname),le=D;D="preload";for(let me in L){const{route:Y,params:we}=L[me];Y.component&&Y.component.preload&&Y.component.preload();const{preload:Q}=Y;x&&Q&&Ge(n(),()=>Q({params:we,location:{pathname:b.pathname,search:b.search,hash:b.hash,query:it(b),state:null,key:""},intent:"preload"}))}D=le}}function Ln(e,t,n,s){const{base:r,location:i,params:o}=e,{pattern:l,component:u,preload:a}=s().route,c=C(()=>s().path);u&&u.preload&&u.preload();const h=a?a({params:o,location:i,intent:D||"initial"}):void 0;return{parent:t,pattern:l,path:c,outlet:()=>u?nt(u,{params:o,location:i,data:h,get children(){return n()}}):n(),resolvePath(p){return ce(r.path(),p,c())}}}export{An as A,bn as B,yn as C,Tn as D,H as E,Ht as F,wn as G,mn as H,Cn as I,Pn as J,gn as K,vn as L,$n as M,ee as N,on as R,pn as S,C as a,cn as b,xt as c,jn as d,nt as e,Nn as f,We as g,ut as h,Ue as i,Ln as j,N as k,Ye as l,d as m,qt as n,Ke as o,Zt as p,En as q,rt as r,Rn as s,zt as t,$ as u,On as v,Sn as w,xn as x,hn as y,Ut as z};