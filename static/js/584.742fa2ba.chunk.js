"use strict";(self.webpackChunkgetin_bengaluru=self.webpackChunkgetin_bengaluru||[]).push([[584],{3777:(e,a,n)=>{n.r(a),n.d(a,{default:()=>h});var i=n(5043);const s=n.p+"static/media/Review-page-banner.f452e84fc60c1f1b6c44.png";var r=n(3519),t=n(1072),l=n(8602),o=n(3814),c=n(4282),d=n(9522),m=n(9980);const u=[{name:"Arun",course:"Python FullStack",review:"Getin Technologies is hands down the best software training institute in Bangalore! The instructors are incredibly knowledgeable and patient, ensuring that every student understands the concepts thoroughly.",rating:"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f",gender:"male",img:d},{name:"Devi",course:"Java FullStack",review:"I'm so glad I chose Getin Technologies for my software training. The curriculum is well-structured, up-to-date, and taught in a way that's easy to grasp even for beginners.",rating:"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f",gender:"female",img:m},{name:"Krishna",course:"Digital Marketing",review:"The support team at Getin Technologies is top-notch. They are always available to answer questions, provide guidance, and offer assistance whenever needed. Truly commendable!",rating:"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f",gender:"male",img:d},{name:"Subashini",course:"Java",review:"Attending courses at Getin Technologies has been a game-changer for my career. The practical approach to learning and the emphasis on real-world applications have immensely boosted my confidence.",rating:"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f",gender:"female",img:m},{name:"Mahalakshmi",course:"C++",review:"The ambiance at Getin Technologies is conducive to learning, with modern facilities and comfortable classrooms. It's a pleasure to study in such a positive and motivating environment.",rating:"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f",gender:"female",img:m}];var g=n(579);const h=()=>{(0,i.useEffect)((()=>{window.scrollTo(0,0)}),[]);const[e,a]=(0,i.useState)(u,(()=>{const e=localStorage.getItem("reviews");return e?JSON.parse(e):[]})),[n,h]=(0,i.useState)({name:"",course:"",review:"",rating:"",gender:"male",img:null}),v=e=>{if("img"===e.target.name){const a=e.target.files[0],i=new FileReader;i.onloadend=()=>{h({...n,img:i.result})},a&&i.readAsDataURL(a)}else h({...n,[e.target.name]:e.target.value})};return(0,i.useEffect)((()=>{localStorage.setItem("reviews",JSON.stringify(e))}),[e]),(0,g.jsxs)("div",{style:{},children:[(0,g.jsx)("img",{src:s,alt:"",style:{width:"100%"}}),(0,g.jsxs)(r.A,{children:[(0,g.jsxs)("section",{style:{textAlign:"center"},children:[(0,g.jsx)("h2",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing."}),(0,g.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque atque non officiis. Quia, facilis. Fugiat similique, a inventore ullam error veniam qui iusto nihil recusandae velit? At facere autem rerum?"})]}),(0,g.jsxs)(t.A,{children:[(0,g.jsx)(l.A,{xs:12,md:12,xl:8,children:e.map(((n,i)=>(0,g.jsxs)("div",{className:"review_card",children:[(0,g.jsx)(t.A,{children:(0,g.jsx)("div",{className:"review_card_top",children:(0,g.jsxs)("div",{style:{display:"flex"},children:[(0,g.jsx)("img",{src:n.img,alt:"",className:"img"}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h4",{style:{margin:0},children:n.name}),(0,g.jsx)("span",{children:n.course}),(0,g.jsx)("p",{children:n.rating})]})]})})}),(0,g.jsx)(t.A,{children:(0,g.jsxs)("p",{children:[n.review,(0,g.jsx)("p",{style:{color:"black",cursor:"pointer",display:"inline"},onClick:()=>(n=>{if(0===n){const i=[...e];i.splice(n,1),a(i)}else alert("You do not have permission to delete reviews.")})(i),children:"."})]})})]},i)))}),(0,g.jsx)(l.A,{xs:12,xl:4,children:(0,g.jsxs)("form",{onSubmit:i=>{i.preventDefault();const s={img:n.img||("male"===n.gender?d:m),name:n.name,course:n.course,review:n.review,rating:n.rating};a([...e,s]),h({name:"",course:"",review:"",rating:"",gender:"male"})},className:"review-form",children:[(0,g.jsx)("h3",{children:"Post Your Reviews"}),(0,g.jsxs)("div",{className:"review-in",children:[(0,g.jsx)("input",{className:"review-input",type:"text",name:"name",value:n.name,onChange:v,required:!0,id:"name"}),(0,g.jsx)("label",{className:"review-label",for:"name",children:"Name"})]}),(0,g.jsxs)("div",{className:"review-in",children:[(0,g.jsx)("input",{className:"review-input",type:"text",name:"course",value:n.course,onChange:v,required:!0,id:"course",placeholder:""}),(0,g.jsx)("label",{className:"review-label-co",for:"course",children:"Course"})]}),(0,g.jsx)("input",{type:"file",placeholder:"Enter your course",name:"img",onChange:v}),(0,g.jsx)("div",{children:(0,g.jsx)("teaxtaera",{rows:3,placeholder:"",name:"review",value:n.review,onChange:v,required:!0,className:"ta"})}),(0,g.jsx)(o.A.Group,{controlId:"rating",children:(0,g.jsxs)(o.A.Control,{as:"select",name:"rating",value:n.rating,onChange:v,children:[(0,g.jsx)("option",{value:"\u2b50\ufe0f",children:"\u2b50\ufe0f"}),(0,g.jsx)("option",{value:"\u2b50\ufe0f\u2b50\ufe0f",children:"\u2b50\ufe0f\u2b50\ufe0f"}),(0,g.jsx)("option",{value:"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f",children:"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f"}),(0,g.jsx)("option",{value:"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f",children:"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f"}),(0,g.jsx)("option",{value:"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f",children:"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f"})]})}),(0,g.jsx)(o.A.Group,{controlId:"gender",children:(0,g.jsxs)(o.A.Control,{as:"select",name:"gender",value:n.gender,onChange:v,children:[(0,g.jsx)("option",{value:"male",children:"Male"}),(0,g.jsx)("option",{value:"female",children:"Female"})]})}),(0,g.jsx)(c.A,{variant:"danger",type:"post",className:"mt-3",children:"Submit"})]})})]})]})]})}},4282:(e,a,n)=>{n.d(a,{A:()=>d});var i=n(8139),s=n.n(i),r=n(5043),t=n(4140),l=n(7852),o=n(579);const c=r.forwardRef(((e,a)=>{let{as:n,bsPrefix:i,variant:r="primary",size:c,active:d=!1,disabled:m=!1,className:u,...g}=e;const h=(0,l.oU)(i,"btn"),[v,{tagName:p}]=(0,t.Am)({tagName:n,disabled:m,...g}),x=p;return(0,o.jsx)(x,{...v,...g,ref:a,disabled:m,className:s()(u,h,d&&"active",r&&"".concat(h,"-").concat(r),c&&"".concat(h,"-").concat(c),g.href&&m&&"disabled")})}));c.displayName="Button";const d=c},1072:(e,a,n)=>{n.d(a,{A:()=>c});var i=n(8139),s=n.n(i),r=n(5043),t=n(7852),l=n(579);const o=r.forwardRef(((e,a)=>{let{bsPrefix:n,className:i,as:r="div",...o}=e;const c=(0,t.oU)(n,"row"),d=(0,t.gy)(),m=(0,t.Jm)(),u="".concat(c,"-cols"),g=[];return d.forEach((e=>{const a=o[e];let n;delete o[e],null!=a&&"object"===typeof a?({cols:n}=a):n=a;const i=e!==m?"-".concat(e):"";null!=n&&g.push("".concat(u).concat(i,"-").concat(n))})),(0,l.jsx)(r,{ref:a,...o,className:s()(i,c,...g)})}));o.displayName="Row";const c=o},9522:(e,a,n)=>{e.exports=n.p+"static/media/man logo.91602993d8d38094e527.png"},9980:(e,a,n)=>{e.exports=n.p+"static/media/women logo.9be9572a36ec46ac18d0.png"}}]);
//# sourceMappingURL=584.742fa2ba.chunk.js.map