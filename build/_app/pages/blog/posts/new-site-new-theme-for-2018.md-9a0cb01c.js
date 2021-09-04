import{S as e,i as t,s as a,j as o,k as s,e as r,t as i,m as l,n,c as h,a as d,g as c,d as f,b as m,_ as g,o as p,f as u,F as y,x as w,u as b,v}from"../../../chunks/vendor-d39b8e67.js";/* empty css                                                             */import{S as I}from"../../../chunks/SideNote-6b324693.js";function k(e){let t;return{c(){t=i("This site is no longer on WordPress, so the theme described here can't actually be seen anywhere, and the features described mostly aren't on this website any longer.")},l(e){t=c(e,"This site is no longer on WordPress, so the theme described here can't actually be seen anywhere, and the features described mostly aren't on this website any longer.")},m(e,a){u(e,t,a)},d(e){e&&f(t)}}}function P(e){let t,a,P,E,S,x,A,C,T,F,j,W,$,_,H,L,B,G,N,q,D,M,R,z,K,O,J,U,Y,Q,V,X,Z,ee,te,ae,oe,se,re,ie,le,ne,he,de,ce,fe,me,ge,pe,ue,ye,we,be,ve,Ie,ke,Pe,Ee,Se,xe,Ae,Ce,Te,Fe,je,We,$e,_e,He,Le,Be,Ge,Ne,qe,De,Me,Re,ze,Ke,Oe,Je,Ue,Ye,Qe,Ve,Xe,Ze,et,tt,at,ot,st,rt,it,lt,nt,ht,dt,ct,ft,mt,gt,pt,ut,yt,wt,bt,vt,It,kt,Pt,Et,St,xt,At,Ct,Tt,Ft,jt,Wt,$t,_t,Ht,Lt,Bt,Gt,Nt,qt,Dt,Mt;return t=new I({props:{$$slots:{default:[k]},$$scope:{ctx:e}}}),{c(){o(t.$$.fragment),a=s(),P=r("p"),E=i("It’s been a goal of mine for a very long time to completely redesign my WordPress theme from scratch. Finally, that goal is a reality!"),S=s(),x=r("p"),A=i("The first time I built my own site, back in (I’d guess) 2013, I used "),C=r("a"),T=i("Adobe Muse"),F=i(", which was a good fit for my lack of skill at the time, but a tool that lost relevance as I learned to code."),j=s(),W=r("p"),$=i("In 2014, I launched a portfolio site that I coded (mostly) from scratch. Looking back at it now makes me cringe a bit; knowing how to make something work and how to build it correctly are two very different things."),_=s(),H=r("p"),L=i("I built a WordPress site on the "),B=r("a"),G=i("Divi"),N=i(" theme roughly three years ago. At first, it was built entirely on Divi’s visual page builder, and that was handy for creating new layouts quickly. But the more I learned about WordPress (and child themes in particular), the less necessary it was to have the parent theme around. It was extra bloat for mostly features I didn’t use at all. So for a very long time, starting over with my own theme, built from scratch and completely personalized just for this site, has been a goal—and now I finally get to check it off."),q=s(),D=r("h2"),M=i("About the theme"),R=s(),z=r("p"),K=i("Rather than beginning with a parent theme or a starter theme like "),O=r("a"),J=i("Underscores"),U=i(", I wanted this theme to be built completely from scratch. No borrowed or pre-written code at all; 100% original."),Y=s(),Q=r("p"),V=i("For building, I began with "),X=r("a"),Z=i("Local by Flywheel"),ee=i(". Yes, I work for "),te=r("a"),ae=i("Flywheel"),oe=i(", but I honestly don’t believe there’s a better tool for running WordPress sites locally—particularly given that my live site is hosted on Flywheel already, which means that pulling a copy of my live site to my local machine for development (and then pushing it back live when ready) was all as easy as a click of a button, thanks to the Push to Flywheel feature."),se=s(),re=r("p"),ie=i("I also implemented "),le=r("a"),ne=i("CodeKit"),he=i(", for minification, auto browser refreshing, and "),de=r("a"),ce=i("Sass"),fe=i(" compilation. Bonus: CodeKit works with Local seamlessly."),me=s(),ge=r("p"),pe=i("Speaking of Sass: it’s invaluable. During theme development, I set up variables for breakpoint widths, colors, some font families, and created a mixin for flexbox settings."),ue=s(),ye=r("p"),we=r("a"),be=r("img"),Ie=s(),ke=r("p"),Pe=i("(That’s the "),Ee=r("a"),Se=i("ColorHelper"),xe=i(" Sublime extension creating the color boxes, by the way.)"),Ae=s(),Ce=r("p"),Te=i("I also got to take the opportunity to finally learn and implement "),Fe=r("a"),je=i("Timber"),We=i(". I’d been hearing too many good things for too long to ignore it any more."),$e=s(),_e=r("p"),He=i("I love the way Timber makes template files so much cleaner, abstracting output code to bare minimums and eliminating the need to deal with the loop directly. Like any framework, though, there’s a little bit of a learning curve, particularly for some of WordPress’s more complex functionality, like comments and pagination. It’s very well documented, though. I would recommend it, and look forward to using it again. I’ll have to add it to my "),Le=r("a"),Be=i("essential tools"),Ge=i(" for WordPress development."),Ne=s(),qe=r("p"),De=i("The theme runs mostly off a single index.php file which dynamically pulls in the appropriate Timber .twig files based on context. In fact, aside from the index file, the theme’s only PHP template files are the footer and header, the functions file, and a sidebar file."),Me=s(),Re=r("h2"),ze=i("Advanced Custom Fields + CSS Grid"),Ke=s(),Oe=r("p"),Je=i("I also took this opportunity to use CSS grid on a project for the first time—specifically, on the "),Ue=r("a"),Ye=i("design"),Qe=i(" page. It turns out, CSS grid mixes really well with "),Ve=r("a"),Xe=i("Advanced Custom Fields"),Ze=i(", particularly the Pro Repeater field. I set up fields for images, height and width, to control the size of images in the grid:"),et=s(),tt=r("p"),at=r("a"),ot=r("img"),rt=s(),it=r("p"),lt=i("The width and height have max values, and a Sass loop (and a media query) sets CSS for those values with classes:"),nt=s(),ht=r("p"),dt=r("img"),ft=s(),mt=r("p"),gt=i("I’ve been using the same logo for myself since I was in school. On a whim, I decided to create a new one that more closely matches where I am now; more focused on development and applying design principles to the web."),pt=s(),ut=r("p"),yt=r("img"),bt=s(),vt=r("p"),It=i("As in the header, the logo’s “icon” form simply removes the lettering, leaving only two sets of brackets, implying code (particularly delving into objects or arrays), with the middle two characters highlighted and in the vague shape of a “J” and a “C” (my initials, of course). I like to think it also hints at my own duality of designer/developer."),kt=s(),Pt=r("h2"),Et=i("The fonts"),St=s(),xt=r("p"),At=i("I’ve owned "),Ct=r("a"),Tt=i("AmsiPro"),Ft=i(" for years, and I’ve been waiting to use it on a project since I first saw it. I finally decided its personality was right for this project. It’s bold and friendly (particularly the ultra weight used for this site’s headers), but completely utilitarian and readable at lighter weights, as body copy."),jt=s(),Wt=r("p"),$t=i("I wanted to keep the font load fairly light, so only occasional splashes of "),_t=r("a"),Ht=i("Sagona"),Lt=i(" Book Italic are used in places to highlight text. I’ve liked Sagona for a long time. I appreciate the hints of happiness in this Clarendon-esque serif, and I feel that makes it pair well with Amsi Pro."),Bt=s(),Gt=r("p"),Nt=r("strong"),qt=i("Thanks for reading!"),Dt=i(" It’s a personal goal to blog more this year and share some of the things I’ve learned over the past few, so this should just be the first of many new posts in the new year. Happy 2018!"),this.h()},l(e){l(t.$$.fragment,e),a=n(e),P=h(e,"P",{});var o=d(P);E=c(o,"It’s been a goal of mine for a very long time to completely redesign my WordPress theme from scratch. Finally, that goal is a reality!"),o.forEach(f),S=n(e),x=h(e,"P",{});var s=d(x);A=c(s,"The first time I built my own site, back in (I’d guess) 2013, I used "),C=h(s,"A",{href:!0,rel:!0});var r=d(C);T=c(r,"Adobe Muse"),r.forEach(f),F=c(s,", which was a good fit for my lack of skill at the time, but a tool that lost relevance as I learned to code."),s.forEach(f),j=n(e),W=h(e,"P",{});var i=d(W);$=c(i,"In 2014, I launched a portfolio site that I coded (mostly) from scratch. Looking back at it now makes me cringe a bit; knowing how to make something work and how to build it correctly are two very different things."),i.forEach(f),_=n(e),H=h(e,"P",{});var m=d(H);L=c(m,"I built a WordPress site on the "),B=h(m,"A",{href:!0,rel:!0});var g=d(B);G=c(g,"Divi"),g.forEach(f),N=c(m," theme roughly three years ago. At first, it was built entirely on Divi’s visual page builder, and that was handy for creating new layouts quickly. But the more I learned about WordPress (and child themes in particular), the less necessary it was to have the parent theme around. It was extra bloat for mostly features I didn’t use at all. So for a very long time, starting over with my own theme, built from scratch and completely personalized just for this site, has been a goal—and now I finally get to check it off."),m.forEach(f),q=n(e),D=h(e,"H2",{});var p=d(D);M=c(p,"About the theme"),p.forEach(f),R=n(e),z=h(e,"P",{});var u=d(z);K=c(u,"Rather than beginning with a parent theme or a starter theme like "),O=h(u,"A",{href:!0,rel:!0});var y=d(O);J=c(y,"Underscores"),y.forEach(f),U=c(u,", I wanted this theme to be built completely from scratch. No borrowed or pre-written code at all; 100% original."),u.forEach(f),Y=n(e),Q=h(e,"P",{});var w=d(Q);V=c(w,"For building, I began with "),X=h(w,"A",{href:!0,rel:!0});var b=d(X);Z=c(b,"Local by Flywheel"),b.forEach(f),ee=c(w,". Yes, I work for "),te=h(w,"A",{href:!0,rel:!0});var v=d(te);ae=c(v,"Flywheel"),v.forEach(f),oe=c(w,", but I honestly don’t believe there’s a better tool for running WordPress sites locally—particularly given that my live site is hosted on Flywheel already, which means that pulling a copy of my live site to my local machine for development (and then pushing it back live when ready) was all as easy as a click of a button, thanks to the Push to Flywheel feature."),w.forEach(f),se=n(e),re=h(e,"P",{});var I=d(re);ie=c(I,"I also implemented "),le=h(I,"A",{href:!0,rel:!0});var k=d(le);ne=c(k,"CodeKit"),k.forEach(f),he=c(I,", for minification, auto browser refreshing, and "),de=h(I,"A",{href:!0,rel:!0});var ve=d(de);ce=c(ve,"Sass"),ve.forEach(f),fe=c(I," compilation. Bonus: CodeKit works with Local seamlessly."),I.forEach(f),me=n(e),ge=h(e,"P",{});var st=d(ge);pe=c(st,"Speaking of Sass: it’s invaluable. During theme development, I set up variables for breakpoint widths, colors, some font families, and created a mixin for flexbox settings."),st.forEach(f),ue=n(e),ye=h(e,"P",{});var ct=d(ye);we=h(ct,"A",{href:!0});var wt=d(we);be=h(wt,"IMG",{src:!0,alt:!0}),wt.forEach(f),ct.forEach(f),Ie=n(e),ke=h(e,"P",{});var Mt=d(ke);Pe=c(Mt,"(That’s the "),Ee=h(Mt,"A",{href:!0,rel:!0});var Rt=d(Ee);Se=c(Rt,"ColorHelper"),Rt.forEach(f),xe=c(Mt," Sublime extension creating the color boxes, by the way.)"),Mt.forEach(f),Ae=n(e),Ce=h(e,"P",{});var zt=d(Ce);Te=c(zt,"I also got to take the opportunity to finally learn and implement "),Fe=h(zt,"A",{href:!0,rel:!0});var Kt=d(Fe);je=c(Kt,"Timber"),Kt.forEach(f),We=c(zt,". I’d been hearing too many good things for too long to ignore it any more."),zt.forEach(f),$e=n(e),_e=h(e,"P",{});var Ot=d(_e);He=c(Ot,"I love the way Timber makes template files so much cleaner, abstracting output code to bare minimums and eliminating the need to deal with the loop directly. Like any framework, though, there’s a little bit of a learning curve, particularly for some of WordPress’s more complex functionality, like comments and pagination. It’s very well documented, though. I would recommend it, and look forward to using it again. I’ll have to add it to my "),Le=h(Ot,"A",{href:!0,rel:!0});var Jt=d(Le);Be=c(Jt,"essential tools"),Jt.forEach(f),Ge=c(Ot," for WordPress development."),Ot.forEach(f),Ne=n(e),qe=h(e,"P",{});var Ut=d(qe);De=c(Ut,"The theme runs mostly off a single index.php file which dynamically pulls in the appropriate Timber .twig files based on context. In fact, aside from the index file, the theme’s only PHP template files are the footer and header, the functions file, and a sidebar file."),Ut.forEach(f),Me=n(e),Re=h(e,"H2",{});var Yt=d(Re);ze=c(Yt,"Advanced Custom Fields + CSS Grid"),Yt.forEach(f),Ke=n(e),Oe=h(e,"P",{});var Qt=d(Oe);Je=c(Qt,"I also took this opportunity to use CSS grid on a project for the first time—specifically, on the "),Ue=h(Qt,"A",{href:!0,rel:!0});var Vt=d(Ue);Ye=c(Vt,"design"),Vt.forEach(f),Qe=c(Qt," page. It turns out, CSS grid mixes really well with "),Ve=h(Qt,"A",{href:!0,rel:!0});var Xt=d(Ve);Xe=c(Xt,"Advanced Custom Fields"),Xt.forEach(f),Ze=c(Qt,", particularly the Pro Repeater field. I set up fields for images, height and width, to control the size of images in the grid:"),Qt.forEach(f),et=n(e),tt=h(e,"P",{});var Zt=d(tt);at=h(Zt,"A",{href:!0});var ea=d(at);ot=h(ea,"IMG",{src:!0,alt:!0}),ea.forEach(f),Zt.forEach(f),rt=n(e),it=h(e,"P",{});var ta=d(it);lt=c(ta,"The width and height have max values, and a Sass loop (and a media query) sets CSS for those values with classes:"),ta.forEach(f),nt=n(e),ht=h(e,"P",{});var aa=d(ht);dt=h(aa,"IMG",{src:!0,alt:!0}),aa.forEach(f),ft=n(e),mt=h(e,"P",{});var oa=d(mt);gt=c(oa,"I’ve been using the same logo for myself since I was in school. On a whim, I decided to create a new one that more closely matches where I am now; more focused on development and applying design principles to the web."),oa.forEach(f),pt=n(e),ut=h(e,"P",{});var sa=d(ut);yt=h(sa,"IMG",{src:!0,alt:!0}),sa.forEach(f),bt=n(e),vt=h(e,"P",{});var ra=d(vt);It=c(ra,"As in the header, the logo’s “icon” form simply removes the lettering, leaving only two sets of brackets, implying code (particularly delving into objects or arrays), with the middle two characters highlighted and in the vague shape of a “J” and a “C” (my initials, of course). I like to think it also hints at my own duality of designer/developer."),ra.forEach(f),kt=n(e),Pt=h(e,"H2",{});var ia=d(Pt);Et=c(ia,"The fonts"),ia.forEach(f),St=n(e),xt=h(e,"P",{});var la=d(xt);At=c(la,"I’ve owned "),Ct=h(la,"A",{href:!0,rel:!0});var na=d(Ct);Tt=c(na,"AmsiPro"),na.forEach(f),Ft=c(la," for years, and I’ve been waiting to use it on a project since I first saw it. I finally decided its personality was right for this project. It’s bold and friendly (particularly the ultra weight used for this site’s headers), but completely utilitarian and readable at lighter weights, as body copy."),la.forEach(f),jt=n(e),Wt=h(e,"P",{});var ha=d(Wt);$t=c(ha,"I wanted to keep the font load fairly light, so only occasional splashes of "),_t=h(ha,"A",{href:!0,rel:!0});var da=d(_t);Ht=c(da,"Sagona"),da.forEach(f),Lt=c(ha," Book Italic are used in places to highlight text. I’ve liked Sagona for a long time. I appreciate the hints of happiness in this Clarendon-esque serif, and I feel that makes it pair well with Amsi Pro."),ha.forEach(f),Bt=n(e),Gt=h(e,"P",{});var ca=d(Gt);Nt=h(ca,"STRONG",{});var fa=d(Nt);qt=c(fa,"Thanks for reading!"),fa.forEach(f),Dt=c(ca," It’s a personal goal to blog more this year and share some of the things I’ve learned over the past few, so this should just be the first of many new posts in the new year. Happy 2018!"),ca.forEach(f),this.h()},h(){m(C,"href","http://www.adobe.com/products/muse.html"),m(C,"rel","nofollow"),m(B,"href","https://www.elegantthemes.com/gallery/divi/"),m(B,"rel","nofollow"),m(O,"href","http://underscores.me"),m(O,"rel","nofollow"),m(X,"href","https://local.getflywheel.com"),m(X,"rel","nofollow"),m(te,"href","https://getflywheel.com"),m(te,"rel","nofollow"),m(le,"href","https://codekitapp.com/"),m(le,"rel","nofollow"),m(de,"href","http://sass-lang.com/"),m(de,"rel","nofollow"),g(be.src,ve="/images/post_images/sass-variables.png")||m(be,"src","/images/post_images/sass-variables.png"),m(be,"alt","A list of Sass variables used for colors, breakpoints, fonts and Flexbox settings"),m(we,"href","/images/post_images/sass-variables.png"),m(Ee,"href","https://packagecontrol.io/packages/ColorHelper"),m(Ee,"rel","nofollow"),m(Fe,"href","https://wordpress.org/plugins/timber-library/"),m(Fe,"rel","nofollow"),m(Le,"href","https://api.joshcollinsworth.com/essential-tools-wordpress-development/"),m(Le,"rel","nofollow"),m(Ue,"href","https://api.joshcollinsworth.com/design/"),m(Ue,"rel","nofollow"),m(Ve,"href","https://www.advancedcustomfields.com/"),m(Ve,"rel","nofollow"),g(ot.src,st="/images/post_images/acf-fields-1-1024x797.png")||m(ot,"src","/images/post_images/acf-fields-1-1024x797.png"),m(ot,"alt","Custom fields that allow for a width and height property to use in the image grid"),m(at,"href","/images/post_images/acf-fields-1.png"),g(dt.src,ct="/images/post_images/sass-grid.png")||m(dt,"src","/images/post_images/sass-grid.png"),m(dt,"alt","A Sass @for loop to set classes for each possible width and height, and add CSS accordingly."),g(yt.src,wt="/images/post_images/Full-Logo-2018.svg")||m(yt,"src","/images/post_images/Full-Logo-2018.svg"),m(yt,"alt","2018 logo"),m(Ct,"href","https://www.myfonts.com/fonts/stawix/amsi-pro/"),m(Ct,"rel","nofollow"),m(_t,"href","https://www.myfonts.com/fonts/rene-bieder/sagona/"),m(_t,"rel","nofollow")},m(e,o){p(t,e,o),u(e,a,o),u(e,P,o),y(P,E),u(e,S,o),u(e,x,o),y(x,A),y(x,C),y(C,T),y(x,F),u(e,j,o),u(e,W,o),y(W,$),u(e,_,o),u(e,H,o),y(H,L),y(H,B),y(B,G),y(H,N),u(e,q,o),u(e,D,o),y(D,M),u(e,R,o),u(e,z,o),y(z,K),y(z,O),y(O,J),y(z,U),u(e,Y,o),u(e,Q,o),y(Q,V),y(Q,X),y(X,Z),y(Q,ee),y(Q,te),y(te,ae),y(Q,oe),u(e,se,o),u(e,re,o),y(re,ie),y(re,le),y(le,ne),y(re,he),y(re,de),y(de,ce),y(re,fe),u(e,me,o),u(e,ge,o),y(ge,pe),u(e,ue,o),u(e,ye,o),y(ye,we),y(we,be),u(e,Ie,o),u(e,ke,o),y(ke,Pe),y(ke,Ee),y(Ee,Se),y(ke,xe),u(e,Ae,o),u(e,Ce,o),y(Ce,Te),y(Ce,Fe),y(Fe,je),y(Ce,We),u(e,$e,o),u(e,_e,o),y(_e,He),y(_e,Le),y(Le,Be),y(_e,Ge),u(e,Ne,o),u(e,qe,o),y(qe,De),u(e,Me,o),u(e,Re,o),y(Re,ze),u(e,Ke,o),u(e,Oe,o),y(Oe,Je),y(Oe,Ue),y(Ue,Ye),y(Oe,Qe),y(Oe,Ve),y(Ve,Xe),y(Oe,Ze),u(e,et,o),u(e,tt,o),y(tt,at),y(at,ot),u(e,rt,o),u(e,it,o),y(it,lt),u(e,nt,o),u(e,ht,o),y(ht,dt),u(e,ft,o),u(e,mt,o),y(mt,gt),u(e,pt,o),u(e,ut,o),y(ut,yt),u(e,bt,o),u(e,vt,o),y(vt,It),u(e,kt,o),u(e,Pt,o),y(Pt,Et),u(e,St,o),u(e,xt,o),y(xt,At),y(xt,Ct),y(Ct,Tt),y(xt,Ft),u(e,jt,o),u(e,Wt,o),y(Wt,$t),y(Wt,_t),y(_t,Ht),y(Wt,Lt),u(e,Bt,o),u(e,Gt,o),y(Gt,Nt),y(Nt,qt),y(Gt,Dt),Mt=!0},p(e,[a]){const o={};1&a&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){Mt||(w(t.$$.fragment,e),Mt=!0)},o(e){b(t.$$.fragment,e),Mt=!1},d(e){v(t,e),e&&f(a),e&&f(P),e&&f(S),e&&f(x),e&&f(j),e&&f(W),e&&f(_),e&&f(H),e&&f(q),e&&f(D),e&&f(R),e&&f(z),e&&f(Y),e&&f(Q),e&&f(se),e&&f(re),e&&f(me),e&&f(ge),e&&f(ue),e&&f(ye),e&&f(Ie),e&&f(ke),e&&f(Ae),e&&f(Ce),e&&f($e),e&&f(_e),e&&f(Ne),e&&f(qe),e&&f(Me),e&&f(Re),e&&f(Ke),e&&f(Oe),e&&f(et),e&&f(tt),e&&f(rt),e&&f(it),e&&f(nt),e&&f(ht),e&&f(ft),e&&f(mt),e&&f(pt),e&&f(ut),e&&f(bt),e&&f(vt),e&&f(kt),e&&f(Pt),e&&f(St),e&&f(xt),e&&f(jt),e&&f(Wt),e&&f(Bt),e&&f(Gt)}}}const E={title:"New Site, New Theme for 2018",date:"2018-01-02",updated:"2020-05-18",categories:["design","web","php","wordpress"],coverImage:"2018-logo.jpg",excerpt:"Building a WordPress theme (and a new brand) from scratch."};class S extends e{constructor(e){super(),t(this,e,null,P,a,{})}}export{S as default,E as metadata};
