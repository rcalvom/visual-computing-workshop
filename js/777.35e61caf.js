(self["webpackChunkvisual_computing_workshop"]=self["webpackChunkvisual_computing_workshop"]||[]).push([[777],{1472:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return l}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"mt-4"},[r("b-row",{attrs:{"align-content":"center","align-h":"center","align-v":"center"}},[r("h1",{staticClass:"mt-4"},[t._v("Shader Graphs")])]),r("b-row",[r("h2",{staticClass:"mt-4"},[t._v("Introduction")])]),r("b-row",{attrs:{"align-h":"left","align-v":"left"}},[r("p",{staticClass:"text-justify"},[t._v("Shader Graph enables you to build shaders visually. Instead of writing code, you create and connect nodes in a graph framework.")])]),r("b-row",{attrs:{"align-h":"left","align-v":"left"}},[r("p",{staticClass:"text-justify"},[t._v("Shader Graph gives instant feedback that reflects your changes, and it's simple enough for users who are new to shader creation.")])]),r("b-row",{attrs:{"align-h":"left","align-v":"left"}},[r("p",[t._v(" Shader Graph is available through the Package Manger window in Unity versions 2018.1 and higher. If you install a prebuilt Scriptable Render Pipeline (SRP) such as the Universal Render Pipeline (URP) or the High Definition Render Pipeline (HDRP), Unity automatically installs Shader Graph in your project.")])]),r("b-row",{attrs:{"align-content":"center","align-h":"center","align-v":"center"}},[r("b-col",[r("b-img",{staticClass:"mt-4",attrs:{thumbnail:"",src:"https://blog.undefinist.com/assets/posts/2020-05-06-writing-a-shader-graph/unity_shadergraph.jpg"}})],1),r("b-col",[r("b-img",{staticClass:"mt-4",attrs:{thumbnail:"",src:"https://4experience.co/wp-content/uploads/2020/08/Foto12.png"}})],1)],1),r("b-row",[r("h2",{staticClass:"mt-4"},[t._v("Literature review")])]),r("b-row",[r("p",[t._v("Shader development requires a significantly high learning curve, it is difficult to start making shaders with a high level of detail, it is because of this problem that Unity has developed a complete framework for shaders based on graphs, where each node represents a basic operation and each edge represents the flow of information.")])]),r("b-row",[r("p",[t._v("Unity claims that this Shader graph framework is the correct way to visualize a shader, because if we only see its location on a texture, we are losing all the work behind it.")])]),r("b-row",[r("h2",{staticClass:"mt-4"},[t._v("Methods")])]),r("b-row",{staticClass:"mt-4"},[r("p",[t._v("Now we are going to see a small development of a shader graph to show the great level of detail that this framework allows us to obtain.")]),r("p",[r("ol",[r("li",[t._v(" The first thing is to create a shader graph, with this we will be able to visualize the vertex and the fragment shader as nodes of the graph ")]),r("li",[t._v(" Then we will notice that by implementing Unity's default Render Pipeline, we will have attributes on the vertex and fragment nodes which will allow us to customize the data they will display or process in the shader. ")]),r("li",[t._v(" For this example I have downloaded from the official sahder graph examples a subgraph that recreates the texturization of some bricks, as we can see these have some input parameters that will allow to customize the final behavior of this subgraph ")]),r("li",[t._v(" This subgraph outputs a floating value that will indicate whether the corresponding point belongs to a brick or a border, this value will correspond to the color of the grayscale fragment shader. ")]),r("li",[t._v(" Likewise, the X position of the mouse is placed as input parameter and this will be connected directly to the tiling variable of the brick subgraph, in order to have a dynamic animation in the shader. ")]),r("li",[t._v(" Now the corresponding material is created with this shader and applied to a cube. ")])])])]),r("b-row",{staticClass:"mt-4"},[r("p",[t._v("Let's see this graph in action!")])]),r("b-row",[r("h2",{staticClass:"mt-4"},[t._v("Code and Results")])]),r("b-row",{attrs:{"align-content":"center","align-h":"center","align-v":"center"}},[r("SketchUnity",{attrs:{dataPath:"scketch/Bricks/Build/Unity.data",loaderPath:"scketch/Bricks/Build/Unity.loader.js",frameworkPath:"scketch/Bricks/Build/Unity.framework.js",codePath:"scketch/Bricks/Build/Unity.wasm",streamingAssetsPath:"scketch/Bricks/StreamingAssets",companyName:"Visual Computing",productName:"Diffuse Reflection",productVersion:"1.0",width:"960",height:"600"}})],1),r("b-row",{staticClass:"mt-4"},[r("p",[t._v("The following are the images of the resulting graphs")])]),r("b-row",{attrs:{"align-content":"center","align-h":"center","align-v":"center"}},[r("b-col",[r("b-img",{staticClass:"mt-4",attrs:{thumbnail:"",src:"images/shader1.png"}})],1)],1),r("b-row",{attrs:{"align-content":"center","align-h":"center","align-v":"center"}},[r("b-col",[r("b-img",{staticClass:"mt-4",attrs:{thumbnail:"",src:"images/shader2.png"}})],1)],1),r("b-row",[r("h2",{staticClass:"mt-4"},[t._v("Discussion")])]),r("b-row",[r("p",[t._v("The shader graph is a really useful framework that allows us to develop shaders without doing a single line of code in HLSL or GLSL, however this tool is not designed to generate optimized code. It would be interesting to measure times in which is faster, if designing a graph of a complex shader or writing the code directly in HLSL of the same shader.")])]),r("b-row",[r("h2",[t._v("Conclusion")])]),r("b-row",[r("p",[t._v("This framework is great! it is very interesting how a shader can be seen as a graph, it is a good way to learn all the basic concepts of these artifacts, however we must not neglect the development directly in HLSL because that way we can optimize the code and create shaders more according to the devices in which we are designing.")])])],1)},i=[],n=r(6596),o={name:"VisualIllusion",components:{SketchUnity:n.Z},data(){return{}},created(){}},s=o,h=r(1001),c=(0,h.Z)(s,a,i,!1,null,"7fbc4df0",null),l=c.exports},4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,r){"use strict";var a,i,n,o=r(4019),s=r(9781),h=r(7854),c=r(614),l=r(111),p=r(2597),d=r(648),u=r(6330),f=r(8880),g=r(1320),y=r(3070).f,w=r(7976),v=r(9518),m=r(7674),b=r(5112),A=r(9711),_=h.Int8Array,k=_&&_.prototype,T=h.Uint8ClampedArray,R=T&&T.prototype,C=_&&v(_),U=k&&v(k),S=Object.prototype,x=h.TypeError,P=b("toStringTag"),I=A("TYPED_ARRAY_TAG"),E=A("TYPED_ARRAY_CONSTRUCTOR"),B=o&&!!m&&"Opera"!==d(h.opera),O=!1,L={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},D={BigInt64Array:8,BigUint64Array:8},V=function(t){if(!l(t))return!1;var e=d(t);return"DataView"===e||p(L,e)||p(D,e)},Y=function(t){if(!l(t))return!1;var e=d(t);return p(L,e)||p(D,e)},j=function(t){if(Y(t))return t;throw x("Target is not a typed array")},F=function(t){if(c(t)&&(!m||w(C,t)))return t;throw x(u(t)+" is not a typed array constructor")},G=function(t,e,r,a){if(s){if(r)for(var i in L){var n=h[i];if(n&&p(n.prototype,t))try{delete n.prototype[t]}catch(o){try{n.prototype[t]=e}catch(c){}}}U[t]&&!r||g(U,t,r?e:B&&k[t]||e,a)}},N=function(t,e,r){var a,i;if(s){if(m){if(r)for(a in L)if(i=h[a],i&&p(i,t))try{delete i[t]}catch(n){}if(C[t]&&!r)return;try{return g(C,t,r?e:B&&C[t]||e)}catch(n){}}for(a in L)i=h[a],!i||i[t]&&!r||g(i,t,e)}};for(a in L)i=h[a],n=i&&i.prototype,n?f(n,E,i):B=!1;for(a in D)i=h[a],n=i&&i.prototype,n&&f(n,E,i);if((!B||!c(C)||C===Function.prototype)&&(C=function(){throw x("Incorrect invocation")},B))for(a in L)h[a]&&m(h[a],C);if((!B||!U||U===S)&&(U=C.prototype,B))for(a in L)h[a]&&m(h[a].prototype,U);if(B&&v(R)!==U&&m(R,U),s&&!p(U,P))for(a in O=!0,y(U,P,{get:function(){return l(this)?this[I]:void 0}}),L)h[a]&&f(h[a],I,a);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:B,TYPED_ARRAY_CONSTRUCTOR:E,TYPED_ARRAY_TAG:O&&I,aTypedArray:j,aTypedArrayConstructor:F,exportTypedArrayMethod:G,exportTypedArrayStaticMethod:N,isView:V,isTypedArray:Y,TypedArray:C,TypedArrayPrototype:U}},8544:function(t,e,r){var a=r(7293);t.exports=!a((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},9518:function(t,e,r){var a=r(7854),i=r(2597),n=r(614),o=r(7908),s=r(6200),h=r(8544),c=s("IE_PROTO"),l=a.Object,p=l.prototype;t.exports=h?l.getPrototypeOf:function(t){var e=o(t);if(i(e,c))return e[c];var r=e.constructor;return n(r)&&e instanceof r?r.prototype:e instanceof l?p:null}},4590:function(t,e,r){var a=r(7854),i=r(3002),n=a.RangeError;t.exports=function(t,e){var r=i(t);if(r%e)throw n("Wrong offset");return r}},3002:function(t,e,r){var a=r(7854),i=r(9303),n=a.RangeError;t.exports=function(t){var e=i(t);if(e<0)throw n("The argument can't be less than 0");return e}},8675:function(t,e,r){"use strict";var a=r(260),i=r(6244),n=r(9303),o=a.aTypedArray,s=a.exportTypedArrayMethod;s("at",(function(t){var e=o(this),r=i(e),a=n(t),s=a>=0?a:r+a;return s<0||s>=r?void 0:e[s]}))},3462:function(t,e,r){"use strict";var a=r(7854),i=r(6916),n=r(260),o=r(6244),s=r(4590),h=r(7908),c=r(7293),l=a.RangeError,p=a.Int8Array,d=p&&p.prototype,u=d&&d.set,f=n.aTypedArray,g=n.exportTypedArrayMethod,y=!c((function(){var t=new Uint8ClampedArray(2);return i(u,t,{length:1,0:3},1),3!==t[1]})),w=y&&n.NATIVE_ARRAY_BUFFER_VIEWS&&c((function(){var t=new p(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));g("set",(function(t){f(this);var e=s(arguments.length>1?arguments[1]:void 0,1),r=h(t);if(y)return i(u,this,r,e);var a=this.length,n=o(r),c=0;if(n+e>a)throw l("Wrong length");while(c<n)this[e+c]=r[c++]}),!y||w)}}]);
//# sourceMappingURL=777.35e61caf.js.map