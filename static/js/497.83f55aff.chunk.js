"use strict";(self.webpackChunkprotask_techteam=self.webpackChunkprotask_techteam||[]).push([[497],{3439:function(e,n,a){a(2791);n.Z=a.p+"static/media/icons.4cc36313b3fdca6c089cc7d1057fae05.svg"},5497:function(e,n,a){a.r(n),a.d(n,{default:function(){return me}});var r=a(7689),i=function(){},t="createNewBoard_createNewBoardTitle__jQTKd",s=a(3329),c=function(){return(0,s.jsx)("p",{className:t,children:"Create a new board"})},o="logoComponent_logoComponent__R14ne",d="logoComponent_logo__35VmF",l="logoComponent_logoTitle__b1FJl",u=function(){return(0,s.jsxs)("div",{className:o,children:[(0,s.jsx)("img",{src:"",alt:"logo",className:d}),(0,s.jsx)("h2",{className:l,children:"Task Pro"})]})},_=function(){},h="logout_block__eGWb1",m="logout_logoutBtn__6rzno",p="logout_logoutIcon__+IZ8k",x="logout_logoutText__BNOz2",f=a(4420),j=a(5029),g=function(){var e=(0,f.I0)();return(0,s.jsx)("div",{className:h,children:(0,s.jsxs)("button",{onClick:function(){return e((0,j.kS)())},className:m,children:[(0,s.jsx)("svg",{className:p,width:"32",height:"32",children:(0,s.jsx)("use",{href:""})}),(0,s.jsx)("p",{className:x,children:"Log out"})]})})},v=function(){},N="sidebar_sidebar__e6PpP",y="sidebar_openSidebar__OiJhz",b="sidebar_myBoardsTitle__PM2wf",w="sidebar_myBoards__dfOjI",C=a(2791),T=function(e){var n=e.setIsMenuOpen,a=e.isMenuOpen,r=(0,C.useRef)(null),i=function(e){r.current&&!r.current.contains(e.target)&&window.innerWidth<1440&&n(!1)};return(0,C.useEffect)((function(){return document.addEventListener("mousedown",i),function(){document.removeEventListener("mousedown",i)}})),(0,s.jsxs)("div",{style:{display:"none"},className:a?y:N,ref:r,children:[(0,s.jsx)(u,{}),(0,s.jsxs)("div",{className:w,children:[(0,s.jsx)("h3",{className:b,children:"My boards"}),(0,s.jsx)(c,{}),(0,s.jsx)(_,{})]}),(0,s.jsx)(v,{}),(0,s.jsx)(g,{})]})},I=a(3439),L="filters_filterButtonWrap__-Z3a1",B="filters_filterButton__BTl08",H="filters_filterIcon__YJITZ",P=function(){return(0,s.jsx)("div",{className:L,children:(0,s.jsxs)("button",{className:B,children:[(0,s.jsx)("svg",{className:H,children:(0,s.jsx)("use",{href:"".concat(I.Z,"#filter-icon")})}),"Filters"]})})},D="headerDashboard_headerDashboardSection__dnRBd",k="headerDashboard_titleDashboard__B-0dC",S=function(e){var n=e.boardName;return(0,s.jsxs)("section",{className:D,children:[(0,s.jsx)("h3",{className:k,children:n}),(0,s.jsx)(P,{})]})},W="addColumn_addColumnBtn__8B6k7",Z="addColumn_plus__PqY0S",M="addColumn_plusIcon__n5K7e",z=function(){return(0,s.jsxs)("button",{className:W,children:[(0,s.jsx)("span",{className:Z,children:(0,s.jsx)("svg",{className:M,children:(0,s.jsx)("use",{href:"".concat(I.Z,"#plus-icon")})})}),"Add another column"]})},Y="addCard_addCardBtn__Fvz99",A="addCard_plus__Hbcmn",q="addCard_plusIcon__zt0ni",F=function(){return(0,s.jsxs)("button",{className:Y,children:[(0,s.jsx)("span",{className:A,children:(0,s.jsx)("svg",{className:q,children:(0,s.jsx)("use",{href:"".concat(I.Z,"#plus-icon")})})}),"Add another card"]})},O="cardBtnList_cardBtnList__s4UqY",E="cardBtnList_cardBtn__tAHE+",K="cardBtnList_cardBtnItem__9KYyt",J="cardBtnList_cardIcon__H0Jk+",Q="cardBtnList_bellIcon__NbFjA",U=function(e){var n=e.deadline===function(){var e=new Date,n=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0"),r=e.getFullYear();return"".concat(n,"/").concat(a,"/").concat(r)}();return(0,s.jsxs)("ul",{className:O,children:[n&&(0,s.jsx)("li",{className:K,children:(0,s.jsx)("svg",{className:J+" "+Q,children:(0,s.jsx)("use",{href:"".concat(I.Z,"#bell-icon")})})},"3"),["arrow-circle-icon","pencil-icon","trash-icon"].map((function(e,n){return(0,s.jsx)("li",{className:K,children:(0,s.jsx)("button",{className:E,children:(0,s.jsx)("svg",{className:J,children:(0,s.jsx)("use",{href:"".concat(I.Z,"#").concat(e)})})})},n)}))]})},R={card:"card_card__+BZ4H",cardPriorityHigh:"card_cardPriorityHigh__wV0TZ",cardPriorityMedium:"card_cardPriorityMedium__ene2K",cardPriorityLow:"card_cardPriorityLow__p8Dvz",cardPriorityWithout:"card_cardPriorityWithout__Y0D+i",cardTitle:"card_cardTitle__v+9lj",cardText:"card_cardText__orPWe",wrapPriorityDeadline:"card_wrapPriorityDeadline__-KPlC",wrapLeft:"card_wrapLeft__zqdx-",wrapCardInfo:"card_wrapCardInfo__CLabp",infoText:"card_infoText__8xSga",info:"card_info__-3BnX",prioritySpanText:"card_prioritySpanText__d9G6v",colorSpan:"card_colorSpan__k4ZQR",priorityHigh:"card_priorityHigh__T-PwJ",priorityMedium:"card_priorityMedium__aamH3",priorityLow:"card_priorityLow__EUQFU",priorityWithout:"card_priorityWithout__SeN6g"},G=function(e){var n=e.item,a=(n.id,n.title),r=n.description,i=n.priority,t=n.deadline;function c(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";switch(e){case"High":return R["".concat(n,"High")];case"Medium":return R["".concat(n,"Medium")];case"Low":return R["".concat(n,"Low")];default:return R["".concat(n,"Without")]}}return(0,s.jsxs)("li",{className:"".concat(R.card," ").concat(c(i,"cardPriority")),children:[(0,s.jsx)("h4",{className:R.cardTitle,children:a}),(0,s.jsx)("p",{className:R.cardText,children:r}),(0,s.jsxs)("div",{className:R.wrapCardInfo,children:[(0,s.jsxs)("div",{className:R.wrapPriorityDeadline,children:[(0,s.jsxs)("div",{className:R.wrapLeft,children:[(0,s.jsx)("h6",{className:R.infoText,children:"Priority"}),(0,s.jsxs)("div",{className:R.prioritySpanText,children:[(0,s.jsx)("span",{className:"".concat(R.colorSpan," ").concat(c(i,"priority"))}),(0,s.jsx)("p",{className:R.info,children:i})]})]}),(0,s.jsxs)("div",{className:R.wrapLeft,children:[(0,s.jsx)("h6",{className:R.infoText,children:"Deadline"}),(0,s.jsx)("p",{className:R.info,children:t})]})]}),(0,s.jsx)(U,{deadline:t})]})]})},V="cardList_list__aNMm2",X=function(e){var n=e.columnId,a=e.cardArr.filter((function(e){return e.fatherColumnId===n}));return(0,s.jsx)("ul",{className:V,children:a.map((function(e){return(0,s.jsx)(G,{item:e},e.id)}))})},$={columnHeader:"columnHeader_columnHeader__LJCue",btnList:"columnHeader_btnList__Otuud",columnTiltle:"columnHeader_columnTiltle__3EQFj",columnHeaderIcon:"columnHeader_columnHeaderIcon__fBQgh"},ee=function(e){var n=e.columnTitle;return(0,s.jsxs)("div",{className:$.columnHeader,children:[(0,s.jsx)("h4",{className:$.columnTiltle,children:n}),(0,s.jsxs)("ul",{className:$.btnList,children:[(0,s.jsx)("li",{children:(0,s.jsx)("button",{className:$.columnHeaderBtn,children:(0,s.jsx)("svg",{className:$.columnHeaderIcon,children:(0,s.jsx)("use",{href:"".concat(I.Z,"#pencil-icon")})})})}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{className:$.columnHeaderBtn,children:(0,s.jsx)("svg",{className:$.columnHeaderIcon,children:(0,s.jsx)("use",{href:"".concat(I.Z,"#trash-icon")})})})})]})]})},ne="column_item__4U993",ae="column_itemCardPresent__ygp1u",re="column_wrap__glHDC",ie=function(e){var n=e.item,a=n.id,r=n.title,i=[{fatherColumnId:"123",id:"11",title:"The Watch Spot Design",description:"Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",priority:"Low",deadline:"12/05/2024"},{fatherColumnId:"123",id:"1111111",title:"The Watch Spot Design",description:"Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",priority:"Low",deadline:"12/05/2024"},{fatherColumnId:"123",id:"111",title:"Research and Analysis",description:"Conduct in-depth research and analysis on the project's topic, gather relevant data, and identify key insights to inform decision-making and project planning.",priority:"Medium",deadline:"11/05/2024"},{fatherColumnId:"123",id:"1111",title:"Concept Development",description:"Brainstorm and develop creative concepts and ideas that align with the project's objectives, considering factors such as target audience, messaging, and visual representation.",priority:"Without",deadline:"10/05/2024"},{fatherColumnId:"234",id:"22",title:"Design and Prototyping SoYummy",description:"Create visually appealing and functional design prototypes based on the approved concepts, ensuring seamless user experience and incorporating feedback for iterative improvements.",priority:"Low",deadline:"07/05/2024"},{fatherColumnId:"234",id:"222",title:"Content Creation",description:"Generate engaging and persuasive content for various project deliverables, such as presentations, reports, website copy, social media posts, and other communication channels.",priority:"High",deadline:"08/05/2024"},{fatherColumnId:"234",id:"2222",title:"Quiz Creation",description:"Create engaging and interactive quizzes using Kahoot's intuitive quiz builder. Design questions, provide multiple-choice answers, and include multimedia elements such as images and videos.",priority:"Without",deadline:"07/05/2024"}],t=void 0!==i.filter((function(e){return e.fatherColumnId===a}))[0]?ne+" "+ae:ne;return(0,s.jsxs)("li",{className:t,children:[(0,s.jsxs)("div",{className:re,children:[(0,s.jsx)(ee,{columnTitle:r}),(0,s.jsx)(X,{columnId:a,cardArr:i})]}),(0,s.jsx)(F,{})]})},te="columnList_list__OL4y3",se=function(){return(0,s.jsx)("ul",{className:te,children:[{id:"123",title:"To Do"},{id:"234",title:"Done"}].map((function(e){return(0,s.jsx)(ie,{item:e},e.id)}))})},ce="mainDashboard_mainDashboardSection__EHlHv",oe=function(){return(0,s.jsxs)("section",{className:ce,children:[(0,s.jsx)(se,{}),(0,s.jsx)(z,{})]})},de="screensPage_screensPage__YAMro",le="screensPage_noDashboardWrap__rKy8y",ue="screensPage_noDashboardText__YrU3r",_e="screensPage_createDashboardText__YH3V9",he=function(){var e=(0,r.UO)().boardName;return(0,s.jsxs)("div",{className:de,children:[(0,s.jsx)(S,{boardName:e}),e?(0,s.jsx)(oe,{}):(0,s.jsx)("div",{className:le,children:(0,s.jsxs)("p",{className:ue,children:["Before starting your project, it is essential"," ",(0,s.jsx)("span",{className:_e,children:"to create a board"})," ","to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})]})},me=function(){return(0,s.jsxs)("div",{style:{height:"100%"},children:[(0,s.jsx)(i,{}),(0,s.jsx)(T,{}),(0,s.jsxs)(r.Z5,{children:[(0,s.jsx)(r.AW,{path:"/",element:(0,s.jsx)(he,{})}),(0,s.jsx)(r.AW,{path:"/:boardName",element:(0,s.jsx)(he,{})})]})]})}}}]);
//# sourceMappingURL=497.83f55aff.chunk.js.map