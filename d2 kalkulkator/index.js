const amazonPick=document.querySelector("#amazonPick");
const assassinPick=document.querySelector("#assassinPick");
const necromancerPick=document.querySelector("#necromancerPick");
const barbarianPick=document.querySelector("#barbarianPick");
const paladinPick=document.querySelector("#paladinPick");
const sorceressPick=document.querySelector("#sorceressPick");
const druidPick=document.querySelector("#druidPick");
const classChoice=document.querySelector("#classChoice");
$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
  });
amazonPick.addEventListener("click",e=>{
    window.location.href = 'amazon.html';
});
assassinPick.addEventListener("click",e=>{
    window.location.href = 'assassin.html';
});
necromancerPick.addEventListener("click",e=>{
    window.location.href = 'necromancer.html';
});
barbarianPick.addEventListener("click",e=>{
    window.location.href = 'barbarian.html';
});
paladinPick.addEventListener("click",e=>{
    window.location.href = 'paladin.html';
});
sorceressPick.addEventListener("click",e=>{
    window.location.href = 'sorceress.html';
});
druidPick.addEventListener("click",e=>{
    window.location.href = 'druid.html';
});
const patchImg=document.querySelector("#patchImg");

patchImg.addEventListener("click",e=>{
    window.location.href = 'https://news.blizzard.com/en-us/diablo2/23814050/diablo-ii-resurrected-patch-2-4-3-now-live';
});