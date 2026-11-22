import{mkdirSync as M,readdirSync as R,readFileSync as F,writeFileSync as W}from"node:fs";
const T='0Aq46:;?~~~~~~~~999999959995999~999~~~~~~~~~~~~~PTTP0~~~~~~~~~~~58~~~~~~~~~~~~~~4414';
const A=[(a,b)=>a+b|0,(a,b)=>a-b|0,Math.imul,(a,b)=>a/b|0,(a,b)=>a%b|0,(a,b)=>(a>>>0)/(b>>>0)|0,(a,b)=>(a>>>0)%(b>>>0)|0,0,(a,b)=>a&b,(a,b)=>a|b,(a,b)=>a^b,0,(a,b)=>a<<b,(a,b)=>a>>b,(a,b)=>a>>>b|0,0,(a,b)=>a==b?1:0,(a,b)=>a<b?1:0,(a,b)=>(a>>>0)-(b>>>0)<0?1:0];
function run(p,q){
let D=new Int32Array(512),C=new Int32Array(64),O=new Uint8Array(65536),s=0,c=0,o=0,i=0,x=0,n=0,z=p.length;
let e=t=>[O.slice(0,o),t];
for(;;){
if(n==1e6)return e(10);
if(x<0||x>=z)return e(9);
let k=p[x],v=T.charCodeAt(k)-48;
if(k>83||v>65)return e(5);
let j=v%16,u=(v/16)|0,f=(j/4)|0,h=j%4;
if(x+u>=z)return e(9);
n++;
let w=x+1+u;
if(s<f)return e(2);
if(s-f+h>256)return e(3);
x=w;
if(k<8){
if(!k)return e(0);
if(k==1)D[s++]=(p[w-1]<<24)>>24;
else if(k==2)D[s++]=p[w-4]|p[w-3]<<8|p[w-2]<<16|p[w-1]<<24;
else if(k==3)s--;
else if(k==4){D[s]=D[s-1];s++;}
else if(k==5){let t=D[s-1];D[s-1]=D[s-2];D[s-2]=t;}
else if(k==6){D[s]=D[s-2];s++;}
else{let a=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=a;}
}else if(k<35){
if(k==23)D[s-1]=-D[s-1]|0;
else if(k==27)D[s-1]=~D[s-1];
else{
if(k>18&&k<23&&D[s-1]==0)return e(4);
let b=D[s-1],a=D[s-2];
s-=2;D[s++]=A[k-16](a,b);
}
}else if(k<53){
if(k<51){
let r=((p[w-2]|p[w-1]<<8)<<16)>>16,t=1;
if(k!=48){let y=D[--s];t=k==49?y==0:y!=0;}
if(t)x=w+r;
}else if(k==51){
if(c==64)return e(7);
C[c++]=w;x=p[w-2]|p[w-1]<<8;
}else{
if(!c)return e(8);
x=C[--c];
}
}else if(k<66){
let d=D[s-1];
if(d<0||d>255)return e(6);
if(k==64)D[s-1]=D[256+d];
else{let a=D[s-2];s-=2;D[256+d]=a;}
}else{
if(k==80){
let y=String(D[s-1]);
if(o+y.length>65536)return e(11);
s--;
for(let l=0;l<y.length;l++)O[o++]=y.charCodeAt(l);
}else if(k==81){
if(o+1>65536)return e(11);
O[o++]=D[--s]&255;
}else if(k==82){
D[s++]=i<q.length?q[i++]:-1;
}else return e(D[--s]&255);
}
}
}
const I=process.env.MAKEFUN_INPUT_DIR??'/input',U=process.env.MAKEFUN_OUTPUT_DIR??'/output';
for(const d of R(I).sort()){
let[o,t]=run(F(I+'/'+d+'/program.bin'),F(I+'/'+d+'/input.bin'));
M(U+'/'+d,{recursive:true});
W(U+'/'+d+'/stdout.bin',o);
W(U+'/'+d+'/exit.txt',t+'\n');
}
