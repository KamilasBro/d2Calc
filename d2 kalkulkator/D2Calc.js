//Pre building
{   
    document.getElementById("refresh").style.display="block";
    document.getElementById("refresh2").style.display="block";
    $(window).on("load",function(){
        $(".loader-wrapper").fadeOut("slow");
      });
    document.getElementById("refresh").style.display="none";
    document.getElementById("refresh2").style.display="none";
var classPicked=document.getElementById("classPicked").textContent;
var skillRequirements;
dependOnCLass();
function dependOnCLass()
{
    switch(classPicked)
    {
        case "Amazon":
            skillRequirements=[1,12,24,6,18,30,1,6,12,30, 1,12,24,30,6,12,24,1,18,30, 6,18,30,1,6,18,24,1,12,24];
        break;
        case "Assassin":
            skillRequirements=[6,18,24,1,12,30,1,6,18,24, 6,18,30,1,12,18,30,1,12,24, 6,12,24,30,1,12,24,6,18,30];
        break;
        case "Necromancer":
            skillRequirements=[1,12,24,6,18,24,30,1,12,30,   6,18,30,1,6,18,30,1,12,24,  6,18,24,1,12,18,30,6,12,24];
        break;
        case "Barbarian":
            skillRequirements=[1,6,18,30,6,24,30,1,12,24,    1,6,12,24,1,6,1,6,18,30,   6,18,30,1,12,18,30,6,12,24];
        break;
        case "Paladin":
            skillRequirements=[1,12,24,6,18,30,1,6,12,30, 1,12,18,30,6,18,24,6,24,30, 1,12,18,24,6,18,30,1,12,24];
        break;
        case "Sorceress":
            skillRequirements=[6,24,30,1,6,18,30,1,12,24,    6,12,24,1,12,18,30,6,18,24,    6,12,18,1,12,24,30,1,18,30];
        break;
        case "Druid":
            skillRequirements=[1,6,12,24,30,18,24,30,6,12,    1,12,18,30,1,18,24,6,12,24,   6,18,30,1,6,18,30,1,12,24];
        break;
    }
}
}

// Navigation bar
{
const Menulink=document.querySelector("#Menulink");
const Skills=document.querySelector("#Skills");
const Equipment=document.querySelector("#Equipment");
const Statistics=document.querySelector("#Statistics");
const Mercenary=document.querySelector("#Mercenary");

Menulink.addEventListener("click",e=>{
    window.location.href = 'D2RCalc.html';
});
Skills.addEventListener("click",e=>{
    document.getElementById("skillTreePage").style.display="block";
    document.getElementById("eqPage").style.display="none";
    document.getElementById("statPage").style.display="none";
    document.getElementById("mercPage").style.display="none";
});
Equipment.addEventListener("click",e=>{
    document.getElementById("skillTreePage").style.display="none";
    document.getElementById("eqPage").style.display="block";
    document.getElementById("statPage").style.display="none";
    document.getElementById("mercPage").style.display="none";
});
Statistics.addEventListener("click",e=>{
    document.getElementById("skillTreePage").style.display="none";
    document.getElementById("eqPage").style.display="none";
    document.getElementById("statPage").style.display="block";
    document.getElementById("mercPage").style.display="none";
});
Mercenary.addEventListener("click",e=>{
    document.getElementById("skillTreePage").style.display="none";
    document.getElementById("eqPage").style.display="none";
    document.getElementById("statPage").style.display="none";
    document.getElementById("mercPage").style.display="block";
});
}

//Reminder window
{
var reminderDelaycostam=true;
function reminder1()
{   
    reminderDelaycostam=false;
    document.getElementById("reminder").style.display="block";
    document.getElementById("reminderText2").innerHTML="You must set your level first!";
    setTimeout(reminderClose,2000);

}
function reminder2()
{   
    reminderDelaycostam=false;
    document.getElementById("reminder").style.display="block";
    document.getElementById("reminderText2").innerHTML="You don't have any Skill Points left!";
    setTimeout(reminderClose,2000);

}
function reminder3()
{   
    reminderDelaycostam=false;
    document.getElementById("reminder").style.display="block";
    document.getElementById("reminderText2").innerHTML="This skill is already maxed!";
    setTimeout(reminderClose,2000);

}
function reminder4()
{   
    reminderDelaycostam=false;
    document.getElementById("reminder").style.display="block";
    document.getElementById("reminderText2").innerHTML="You don't match level requirements for this skill!";
    setTimeout(reminderClose,2000);

}
function reminder5()
{   
    reminderDelaycostam=false;
    document.getElementById("reminder").style.display="block";
    document.getElementById("reminderText2").innerHTML="You need to unlock paths for this skill!";
    setTimeout(reminderClose,2000);

}
function reminder6()
{   
    reminderDelaycostam=false;
    document.getElementById("reminder").style.display="block";
    document.getElementById("reminderText2").innerHTML="You have less than 10 Skill Points left!";
    setTimeout(reminderClose,2000);

}
function reminder7()
{   
    reminderDelaycostam=false;
    document.getElementById("reminder").style.display="block";
    document.getElementById("reminderText2").innerHTML="You need to remove Skill Points from further skills!";
    setTimeout(reminderClose,2000);

}
function reminder8()
{   
    reminderDelaycostam=false;
    document.getElementById("reminder").style.display="block";
    document.getElementById("reminderText2").innerHTML="There is no Skill Points invested in that skill!";
    setTimeout(reminderClose,2000);

}
function reminder9()
{   
    reminderDelaycostam=false;
    document.getElementById("reminder").style.display="block";
    document.getElementById("reminderText2").innerHTML="Insert level value between 1 and 99!";
    setTimeout(reminderClose,2000);

}
function reminder10()
{   
    reminderDelaycostam=false;
    document.getElementById("reminder").style.display="block";
    document.getElementById("reminderText2").innerHTML="Release control button!";
    setTimeout(reminderClose,2000);

}
function reminderClose()
{
    reminderDelaycostam=true;
    document.getElementById("reminder").style.display="none";
}
}

// Skills buttons
{
{
const skillButton1=document.querySelector("#skillButton1");
const skillButton2=document.querySelector("#skillButton2");
const skillButton3=document.querySelector("#skillButton3");
const skillButton4=document.querySelector("#skillButton4");
const skillButton5=document.querySelector("#skillButton5");
const skillButton6=document.querySelector("#skillButton6");
const skillButton7=document.querySelector("#skillButton7");
const skillButton8=document.querySelector("#skillButton8");
const skillButton9=document.querySelector("#skillButton9");
const skillButton10=document.querySelector("#skillButton10");
const skillButton11=document.querySelector("#skillButton11");
const skillButton12=document.querySelector("#skillButton12");
const skillButton13=document.querySelector("#skillButton13");
const skillButton14=document.querySelector("#skillButton14");
const skillButton15=document.querySelector("#skillButton15");
const skillButton16=document.querySelector("#skillButton16");
const skillButton17=document.querySelector("#skillButton17");
const skillButton18=document.querySelector("#skillButton18");
const skillButton19=document.querySelector("#skillButton19");
const skillButton20=document.querySelector("#skillButton20");
const skillButton21=document.querySelector("#skillButton21");
const skillButton22=document.querySelector("#skillButton22");
const skillButton23=document.querySelector("#skillButton23");
const skillButton24=document.querySelector("#skillButton24");
const skillButton25=document.querySelector("#skillButton25");
const skillButton26=document.querySelector("#skillButton26");
const skillButton27=document.querySelector("#skillButton27");
const skillButton28=document.querySelector("#skillButton28");
const skillButton29=document.querySelector("#skillButton29");
const skillButton30=document.querySelector("#skillButton30");
var baseSkillPoints1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var plusToSkills=0, lvl=1;
var avalibleSkillPoints=lvl-1;
document.getElementById("plusToSkills").innerHTML=plusToSkills;
}
avalibleSkillPointsUpdate();
//skill events
var keyName;
document.addEventListener('keydown', (event) => {
    keyName = event.key;
}, false);
document.addEventListener('keyup', (event) => {
    keyName = "none";
}, false);
{
skillButton1.addEventListener("click",e=>{
    skillAdding(0);
});
skillButton1.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(0);
});
skillButton1.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton1.oncontextmenu = function () {
    skillRemoving(0);
    return false;
};

skillButton2.addEventListener("click",e=>{
    skillAdding(1);
});
skillButton2.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(1);
});
skillButton2.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton2.oncontextmenu = function () {
    skillRemoving(1);
    return false;
};

skillButton3.addEventListener("click",e=>{
    skillAdding(2);
});
skillButton3.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(2);
});
skillButton3.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton3.oncontextmenu = function () {
    skillRemoving(2);
    return false;
};

skillButton4.addEventListener("click",e=>{
    skillAdding(3);
});
skillButton4.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(3);
});
skillButton4.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton4.oncontextmenu = function () {
    skillRemoving(3);
    return false;
};

skillButton5.addEventListener("click",e=>{
    skillAdding(4);
});
skillButton5.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(4);
});
skillButton5.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton5.oncontextmenu = function () {
    skillRemoving(4);
    return false;
};

skillButton6.addEventListener("click",e=>{
    skillAdding(5);
});
skillButton6.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(5);
});
skillButton6.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton6.oncontextmenu = function () {
    skillRemoving(5);
    return false;
};

skillButton7.addEventListener("click",e=>{
    skillAdding(6);
});
skillButton7.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(6);
});
skillButton7.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton7.oncontextmenu = function () {
    skillRemoving(6);
    return false;
};

skillButton8.addEventListener("click",e=>{
    skillAdding(7);
});
skillButton8.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(7);
});
skillButton8.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton8.oncontextmenu = function () {
    skillRemoving(7);
    return false;
};

skillButton9.addEventListener("click",e=>{
    skillAdding(8);
});
skillButton9.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(8);
});
skillButton9.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton9.oncontextmenu = function () {
    skillRemoving(8);
    return false;
};

skillButton10.addEventListener("click",e=>{
    skillAdding(9);
});
skillButton10.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(9);
});
skillButton10.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton10.oncontextmenu = function () {
    skillRemoving(9);
    return false;
};

skillButton11.addEventListener("click",e=>{
    skillAdding(10);
});
skillButton11.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(10);
});
skillButton11.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton11.oncontextmenu = function () {
    skillRemoving(10);
    return false;
};

skillButton12.addEventListener("click",e=>{
    skillAdding(11);
});
skillButton12.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(11);
});
skillButton12.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton12.oncontextmenu = function () {
    skillRemoving(11);
    return false;
};

skillButton13.addEventListener("click",e=>{
    skillAdding(12);
});
skillButton13.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(12);
});
skillButton13.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton13.oncontextmenu = function () {
    skillRemoving(12);
    return false;
};

skillButton14.addEventListener("click",e=>{
    skillAdding(13);
});
skillButton14.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(13);
});
skillButton14.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton14.oncontextmenu = function () {
    skillRemoving(13);
    return false;
};

skillButton15.addEventListener("click",e=>{
    skillAdding(14);
});
skillButton15.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(14);
});
skillButton15.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton15.oncontextmenu = function () {
    skillRemoving(14);
    return false;
};

skillButton16.addEventListener("click",e=>{
    skillAdding(15);
});
skillButton16.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(15);
});
skillButton16.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton16.oncontextmenu = function () {
    skillRemoving(15);
    return false;
};

skillButton17.addEventListener("click",e=>{
    skillAdding(16);
});
skillButton17.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(16);
});
skillButton17.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton17.oncontextmenu = function () {
    skillRemoving(16);
    return false;
};

skillButton18.addEventListener("click",e=>{
    skillAdding(17);
});
skillButton18.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(17);
});
skillButton18.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton18.oncontextmenu = function () {
    skillRemoving(17);
    return false;
};

skillButton19.addEventListener("click",e=>{
    skillAdding(18);
});
skillButton19.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(18);
});
skillButton19.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton19.oncontextmenu = function () {
    skillRemoving(18);
    return false;
};

skillButton20.addEventListener("click",e=>{
    skillAdding(19);
});
skillButton20.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(19);
});
skillButton20.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton20.oncontextmenu = function () {
    skillRemoving(19);
    return false;
};

skillButton21.addEventListener("click",e=>{
    skillAdding(20);
});
skillButton21.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(20);
});
skillButton21.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton21.oncontextmenu = function () {
    skillRemoving(20);
    return false;
};

skillButton22.addEventListener("click",e=>{
    skillAdding(21);
});
skillButton22.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(21);
});
skillButton22.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton22.oncontextmenu = function () {
    skillRemoving(21);
    return false;
};

skillButton23.addEventListener("click",e=>{
    skillAdding(22);
});
skillButton23.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(22);
});
skillButton23.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton23.oncontextmenu = function () {
    skillRemoving(22);
    return false;
};

skillButton24.addEventListener("click",e=>{
    skillAdding(23);
});
skillButton24.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(23);
});
skillButton24.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton24.oncontextmenu = function () {
    skillRemoving(23);
    return false;
};

skillButton25.addEventListener("click",e=>{
    skillAdding(24);
});
skillButton25.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(24);
});
skillButton25.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton25.oncontextmenu = function () {
    skillRemoving(24);
    return false;
};

skillButton26.addEventListener("click",e=>{
    skillAdding(25);
});
skillButton26.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(25);
});
skillButton26.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton26.oncontextmenu = function () {
    skillRemoving(25);
    return false;
};

skillButton27.addEventListener("click",e=>{
    skillAdding(26);
});
skillButton27.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(26);
});
skillButton27.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton27.oncontextmenu = function () {
    skillRemoving(26);
    return false;
};

skillButton28.addEventListener("click",e=>{
    skillAdding(27);
});
skillButton28.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(27);
});
skillButton28.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton28.oncontextmenu = function () {
    skillRemoving(27);
    return false;
};

skillButton29.addEventListener("click",e=>{
    skillAdding(28);
});
skillButton29.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(28);
});
skillButton29.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton29.oncontextmenu = function () {
    skillRemoving(28);
    return false;
};

skillButton30.addEventListener("click",e=>{
    skillAdding(29);
});
skillButton30.addEventListener("mouseover",e=>{
    document.getElementById("descriptionContent").style.display="block";
    descriptionUpdate(29);
});
skillButton30.addEventListener("mouseleave",e=>{
    document.getElementById("descriptionContent").style.display="none";
});
skillButton30.oncontextmenu = function () {
    skillRemoving(29);
    return false;
};
}
function skillAdding(i)
{
    if(isLvlSet==true)
    {
    skillAdding1(i)
    if(baseSkillPoints1[i]>0)
    document.getElementById("skillCounter"+(i+1)).innerHTML=baseSkillPoints1[i]+plusToSkills;
    }
    else
    {   
        if(reminderDelaycostam==true)
        reminder1()
    }
    function skillAdding1(i)
{   
    switch(classPicked)
    {
        case "Amazon":
            switch(i)
            {
                case 0:
                    skillAdding2(i);

                break;
                case 1:
                    if(baseSkillPoints1[0]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 2:
                    if(baseSkillPoints1[1]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 3:
                    if(baseSkillPoints1[0]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 4:
                    if(baseSkillPoints1[3]>=1&&baseSkillPoints1[7]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 5:
                    if(baseSkillPoints1[4]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 6:
                    skillAdding2(i);
                break;
                case 7:
                    if(baseSkillPoints1[6]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 8:
                    if(baseSkillPoints1[7]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 9:
                    if(baseSkillPoints1[8]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 10:
                    skillAdding2(i);
                break;
                case 11:
                    if(baseSkillPoints1[10]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 12:
                    if(baseSkillPoints1[11]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 13:
                    if(baseSkillPoints1[12]>=1&&baseSkillPoints1[16]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 14:
                    skillAdding2(i);
                break;
                case 15:
                    if(baseSkillPoints1[14]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 16:
                    if(baseSkillPoints1[15]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 17:
                    skillAdding2(i);
                break;
                case 18:
                    if(baseSkillPoints1[17]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 19:
                    if(baseSkillPoints1[18]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 20:
                    skillAdding2(i);
                break;
                case 21:
                    if(baseSkillPoints1[20]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 22:
                    if(baseSkillPoints1[21]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 23:
                    skillAdding2(i);
                break;
                case 24:
                    if(baseSkillPoints1[23]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 25:
                    if(baseSkillPoints1[24]>=1&&baseSkillPoints1[20]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 26:
                    if(baseSkillPoints1[25]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 27:
                    skillAdding2(i);
                break;
                case 28:
                    if(baseSkillPoints1[27]>=1&&baseSkillPoints1[24]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 29:
                    if(baseSkillPoints1[28]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
            }
        break;   
        case "Assassin":
            switch(i)
            {
                case 0:
                    skillAdding2(i);

                break;
                case 1:
                    if(baseSkillPoints1[0]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 2:
                    if(baseSkillPoints1[1]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 3:
                    skillAdding2(i);

                break;
                case 4:
                    if(baseSkillPoints1[3]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 5:
                    if(baseSkillPoints1[4]>=1&&baseSkillPoints1[2]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 6:
                    skillAdding2(i);
                break;
                case 7:
                    if(baseSkillPoints1[6]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 8:
                    if(baseSkillPoints1[7]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 9:
                    if(baseSkillPoints1[8]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 10:
                    if(baseSkillPoints1[13]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 11:
                    if(baseSkillPoints1[10]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 12:
                    if(baseSkillPoints1[11]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 13:
                    skillAdding2(i);
                break;
                case 14:
                    if(baseSkillPoints1[13]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 15:
                    if(baseSkillPoints1[14]>=1&&baseSkillPoints1[18]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 16:
                    if(baseSkillPoints1[15]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 17:
                    skillAdding2(i);
                break;
                case 18:
                    if(baseSkillPoints1[17]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 19:
                    if(baseSkillPoints1[18]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 20:
                    if(baseSkillPoints1[24]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 21:
                    if(baseSkillPoints1[20]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 22:
                    if(baseSkillPoints1[21]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 23:
                    if(baseSkillPoints1[22]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 24:
                    skillAdding2(i);
                break;
                case 25:
                    if(baseSkillPoints1[24]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 26:
                    if(baseSkillPoints1[25]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 27:
                    skillAdding2(i);
                break;
                case 28:
                    if(baseSkillPoints1[27]>=1&&baseSkillPoints1[24]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 29:
                    if(baseSkillPoints1[28]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
            }
        break;
        case "Necromancer":
            switch(i)
            {
                case 0:
                    if(baseSkillPoints1[7]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 1:
                    if(baseSkillPoints1[3]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 2:
                    if(baseSkillPoints1[1]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 3:
                    skillAdding2(i);

                break;
                case 4:
                    if(baseSkillPoints1[3]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 5:
                    if(baseSkillPoints1[4]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 6:
                    if(baseSkillPoints1[5]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 7:
                    skillAdding2(i);
                break;
                case 8:
                    if(baseSkillPoints1[7]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 9:
                    if(baseSkillPoints1[8]>=1&&baseSkillPoints1[5]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 10:
                    skillAdding2(i);
                break;
                case 11:
                    if(baseSkillPoints1[10]>=1&&baseSkillPoints1[14]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 12:
                    if(baseSkillPoints1[11]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 13:
                    skillAdding2(i);
                break;
                case 14:
                    if(baseSkillPoints1[13]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 15:
                    if(baseSkillPoints1[14]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 16:
                    if(baseSkillPoints1[15]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 17:
                    skillAdding2(i);
                break;
                case 18:
                    if(baseSkillPoints1[17]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 19:
                    if(baseSkillPoints1[18]>=1&&baseSkillPoints1[15]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 20:
                    skillAdding2(i);
                break;
                case 21:
                    if(baseSkillPoints1[20]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 22:
                    if(baseSkillPoints1[21]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 23:
                    skillAdding2(i);
                break;
                case 24:
                    if(baseSkillPoints1[23]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 25:
                    if(baseSkillPoints1[24]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 26:
                    if(baseSkillPoints1[25]>=1&&baseSkillPoints1[29]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 27:
                    if(baseSkillPoints1[23]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 28:
                    if(baseSkillPoints1[27]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 29:
                    if(baseSkillPoints1[28]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
            }
        break;        
        case "Barbarian":
            switch(i)
            {
                case 0:
                    skillAdding2(i);
                break;
                case 1:
                    if(baseSkillPoints1[0]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 2:
                    if(baseSkillPoints1[1]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 3:
                    if(baseSkillPoints1[2]>=1&&baseSkillPoints1[5]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 4:
                    if(baseSkillPoints1[0]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 5:
                    if(baseSkillPoints1[4]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 6:
                    if(baseSkillPoints1[5]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 7:
                    skillAdding2(i);
                break;
                case 8:
                    if(baseSkillPoints1[7]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 9:
                    if(baseSkillPoints1[8]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 10:
                    skillAdding2(i);
                break;
                case 11:
                    skillAdding2(i);
                break;
                case 12:
                    skillAdding2(i);
                break;
                case 13:
                    if(baseSkillPoints1[12]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 14:
                    skillAdding2(i);
                break;
                case 15:
                    skillAdding2(i);
                break;
                case 16:
                    skillAdding2(i);
                break;
                case 17:
                    skillAdding2(i);
                break;
                case 18:
                    skillAdding2(i);
                break;
                case 19:
                    if(baseSkillPoints1[18]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 20:
                    skillAdding2(i);
                break;
                case 21:
                    if(baseSkillPoints1[20]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 22:
                    if(baseSkillPoints1[21]>=1&&baseSkillPoints1[25]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 23:
                    skillAdding2(i);
                break;
                case 24:
                    if(baseSkillPoints1[23]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 25:
                    if(baseSkillPoints1[24]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 26:
                    if(baseSkillPoints1[25]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 27:
                    if(baseSkillPoints1[23]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 28:
                    if(baseSkillPoints1[27]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 29:
                    if(baseSkillPoints1[28]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
            }
        break;
        case "Paladin":
            switch(i)
            {
                case 0:
                    skillAdding2(i);

                break;
                case 1:
                    if(baseSkillPoints1[0]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 2:
                    if(baseSkillPoints1[1]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 3:
                    skillAdding2(i);
                break;
                case 4:
                    if(baseSkillPoints1[3]>=1&&baseSkillPoints1[1]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 5:
                    if(baseSkillPoints1[4]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 6:
                    skillAdding2(i);
                break;
                case 7:
                    skillAdding2(i);
                break;
                case 8:
                    skillAdding2(i);
                break;
                case 9:
                    skillAdding2(i);
                break;
                case 10:
                    skillAdding2(i);
                break;
                case 11:
                    if(baseSkillPoints1[10]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 12:
                    if(baseSkillPoints1[11]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 13:
                    if(baseSkillPoints1[12]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 14:
                    if(baseSkillPoints1[10]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 15:
                    if(baseSkillPoints1[14]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 16:
                    if(baseSkillPoints1[15]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 17:
                    skillAdding2(i);
                break;
                case 18:
                    if(baseSkillPoints1[17]>=1&&baseSkillPoints1[15]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 19:
                    if(baseSkillPoints1[18]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 20:
                    skillAdding2(i);
                break;
                case 21:
                    if(baseSkillPoints1[20]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 22:
                    if(baseSkillPoints1[21]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 23:
                    if(baseSkillPoints1[22]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 24:
                    skillAdding2(i);
                break;
                case 25:
                    if(baseSkillPoints1[24]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 26:
                    if(baseSkillPoints1[25]>=1&&baseSkillPoints1[23]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 27:
                    skillAdding2(i);
                break;
                case 28:
                    if(baseSkillPoints1[27]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 29:
                    if(baseSkillPoints1[25]>=1&&baseSkillPoints1[28]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
            }
        break;   
        case "Sorceress":
            switch(i)
            {
                case 0:
                    skillAdding2(i);
                break;
                case 1:
                    if(baseSkillPoints1[0]>=1&&baseSkillPoints1[5]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 2:
                    if(baseSkillPoints1[1]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 3:
                    skillAdding2(i);
                break;
                case 4:
                    if(baseSkillPoints1[3]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 5:
                    if(baseSkillPoints1[4]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 6:
                    skillAdding2(i);
                break;
                case 7:
                    skillAdding2(i);
                break;
                case 8:
                    if(baseSkillPoints1[7]>=1&&baseSkillPoints1[4]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 9:
                    if(baseSkillPoints1[8]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 10:
                    skillAdding2(i);
                break;
                case 11:
                    if(baseSkillPoints1[10]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 12:
                    if(baseSkillPoints1[11]>=1&&baseSkillPoints1[15]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 13:
                    skillAdding2(i);
                break;
                case 14:
                    if(baseSkillPoints1[13]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 15:
                    if(baseSkillPoints1[14]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 16:
                    skillAdding2(i);
                break;
                case 17:
                    skillAdding2(i);
                break;
                case 18:
                    if(baseSkillPoints1[17]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 19:
                    if(baseSkillPoints1[18]>=1&&baseSkillPoints1[15]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 20:
                    skillAdding2(i);
                break;
                case 21:
                    if(baseSkillPoints1[20]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 22:
                    if(baseSkillPoints1[21]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 23:
                    skillAdding2(i);
                break;
                case 24:
                    if(baseSkillPoints1[23]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 25:
                    if(baseSkillPoints1[24]>=1&&baseSkillPoints1[22]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 26:
                    skillAdding2(i);
                break;
                case 27:
                    skillAdding2(i);
                break;
                case 28:
                    if(baseSkillPoints1[27]>=1&&baseSkillPoints1[24]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 29:
                    if(baseSkillPoints1[28]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
            }
        break;   
        case "Druid":
            switch(i)
            {
                case 0:
                    skillAdding2(i);
                break;
                case 1:
                    if(baseSkillPoints1[0]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 2:
                    if(baseSkillPoints1[1]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 3:
                    if(baseSkillPoints1[2]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 4:
                    if(baseSkillPoints1[3]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 5:
                    if(baseSkillPoints1[9]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 6:
                    if(baseSkillPoints1[5]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 7:
                    if(baseSkillPoints1[6]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 8:
                    skillAdding2(i);
                break;
                case 9:
                    if(baseSkillPoints1[8]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 10:
                    skillAdding2(i);
                break;
                case 11:
                    if(baseSkillPoints1[10]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 12:
                    if(baseSkillPoints1[11]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 13:
                    if(baseSkillPoints1[12]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 14:
                    if(baseSkillPoints1[10]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 15:
                    if(baseSkillPoints1[11]>=1&&baseSkillPoints1[18]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 16:
                    if(baseSkillPoints1[15]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 17:
                    skillAdding2(i);
                break;
                case 18:
                    if(baseSkillPoints1[17]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 19:
                    if(baseSkillPoints1[18]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 20:
                    skillAdding2(i);
                break;
                case 21:
                    if(baseSkillPoints1[20]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 22:
                    if(baseSkillPoints1[21]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 23:
                    skillAdding2(i);
                break;
                case 24:
                    if(baseSkillPoints1[23]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 25:
                    if(baseSkillPoints1[24]>=1&&baseSkillPoints1[20]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 26:
                    if(baseSkillPoints1[25]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 27:
                    skillAdding2(i);
                break;
                case 28:
                    if(baseSkillPoints1[27]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
                case 29:
                    if(baseSkillPoints1[28]>=1)
                    {
                        skillAdding2(i);
                    }
                    else
                    {
                        if(reminderDelaycostam==true)
                        reminder5()
                    }
                break;
            }
        break;   
    }
    function skillAdding2(i){
        if(avalibleSkillPoints>0)
        {
            if(baseSkillPoints1[i]<20)
            {   
                if(skillRequirements[i]<lvl)
                {   
                    if(keyName=='Control')
                    {   
                        if(avalibleSkillPoints<10)
                        {
                            if(reminderDelaycostam==true)
                            reminder6()
                        }
                        else
                        {
                            if(baseSkillPoints1[i]>10)
                            {
                                avalibleSkillPoints=avalibleSkillPoints-(20-baseSkillPoints1[i]);
                                skillRequirements[i]=skillRequirements[i]+(20-baseSkillPoints1[i]);
                            }
                            else
                            {
                                avalibleSkillPoints-=10;
                                skillRequirements[i]+=10;
                            }
                            baseSkillPoints1[i]+=10;
                            if(baseSkillPoints1[i]>20)
                            {
                                baseSkillPoints1[i]=20;
                            }
                            avalibleSkillPointsUpdate();
                            plusToSkillsColor();
                            descriptionUpdate(i);
                        } 
                    }
                    else
                    {
                        baseSkillPoints1[i]++;
                        skillRequirements[i]++;
                        avalibleSkillPoints--;
                        avalibleSkillPointsUpdate();
                        plusToSkillsColor();
                        descriptionUpdate(i);
                    }
                }
                else if(skillRequirements[i]==1)
                {
                    if(keyName=='Control')
                    {   
                        if(avalibleSkillPoints<10)
                        {
                            console.log("siema");
                        }
                        else
                        {
                        if(baseSkillPoints1[i]>10)
                        {
                            avalibleSkillPoints=avalibleSkillPoints-(20-baseSkillPoints1[i]);
                            skillRequirements[i]=skillRequirements[i]+(20-baseSkillPoints1[i]);
                        }
                        else
                        {
                            avalibleSkillPoints-=10;
                            skillRequirements[i]+=10;
                        }
                        baseSkillPoints1[i]+=10;
                        if(baseSkillPoints1[i]>20)
                        {
                            baseSkillPoints1[i]=20;
                        }
                        avalibleSkillPointsUpdate();
                        plusToSkillsColor()
                        descriptionUpdate(i);
                    }
                    }
                    else
                    {
                        baseSkillPoints1[i]++;
                        skillRequirements[i]++;
                        avalibleSkillPoints--;
                        avalibleSkillPointsUpdate();
                        plusToSkillsColor()
                        descriptionUpdate(i);
                    }
                }
                else
                {
                    if(reminderDelaycostam==true)
                    reminder4()
                }
            }
            else
            {
                if(reminderDelaycostam==true)
                reminder3()
            }
        }
        else
        {
            if(reminderDelaycostam==true)
            reminder2()
        }
    }
}
}
function skillRemoving(i)
{   
    if(isLvlSet==true)
    {
    skillRemoving1(i);
    if(baseSkillPoints1[i]>=0)
    document.getElementById("skillCounter"+(i+1)).innerHTML=baseSkillPoints1[i]+plusToSkills;
    if(baseSkillPoints1[i]==0)
    {
        document.getElementById("skillCounter"+(i+1)).innerHTML="";
    }
    }
    else
    {   
        if(reminderDelaycostam==true)
        reminder1()
    }
    function skillRemoving1(i)
    {
        switch(classPicked)
    {
        case "Amazon":
            switch(i)
            {
                case 0:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[1]>=1||baseSkillPoints1[3]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 1:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[2]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 2:
                    skillRemoving2(i);
                break;
                case 3:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[4]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 4:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[5]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 5:
                    skillRemoving2(i);
                break;
                case 6:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[5]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 7:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[4]>=1||baseSkillPoints1[8]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 8:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[9]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 9:
                    skillRemoving2(i);
                break;
                case 10:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[11]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 11:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[12]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 12:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[13]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 13:
                    skillRemoving2(i);
                break;
                case 14:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[15]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 15:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[16]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 16:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[13]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 17:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[18]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 18:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[19]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 19:
                    skillRemoving2(i);
                break;
                case 20:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[21]>=1||baseSkillPoints1[25]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 21:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[22]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 22:
                    skillRemoving2(i);
                break;
                case 23:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[24]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 24:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[25]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 25:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[26]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 26:
                    skillRemoving2(i);
                break;
                case 27:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[28]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 28:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[29]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 29:
                    skillRemoving2(i);
                break;
            }
        break;   
        case "Assassin":
            switch(i)
            {
                case 0:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[1]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 1:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[2]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 2:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[5]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 3:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[4]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 4:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[5]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 5:
                    skillRemoving2(i);
                break;
                case 6:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[7]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 7:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[8]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 8:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[9]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 9:
                    skillRemoving2(i);
                break;
                case 10:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[11]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 11:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[12]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 12:
                    skillRemoving2(i);
                break;
                case 13:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[10]>=1||baseSkillPoints1[14]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 14:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[15]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 15:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[16]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 16:
                    skillRemoving2(i);
                break;
                case 17:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[18]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 18:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[19]>=1||baseSkillPoints1[15]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 19:
                    skillRemoving2(i);
                break;
                case 20:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[21]>=1||baseSkillPoints1[25]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 21:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[22]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 22:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[24]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 23:
                    skillRemoving2(i);
                break;
                case 24:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[25]>=1||baseSkillPoints1[20]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 25:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[26]>=1||baseSkillPoints1[28]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 26:
                    skillRemoving2(i);
                break;
                case 27:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[28]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 28:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[29]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 29:
                    skillRemoving2(i);
                break;
            }
        break;
        case "Necromancer":
            switch(i)
            {
                case 0:
                    skillRemoving2(i);
                break;
                case 1:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[2]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 2:
                    skillRemoving2(i);
                break;
                case 3:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[1]>=1||baseSkillPoints1[4]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 4:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[5]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 5:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[6]>=1||baseSkillPoints1[9]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 6:
                    skillRemoving2(i);
                break;
                case 7:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[0]>=1||baseSkillPoints1[8]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 8:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[9]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 9:
                    skillRemoving2(i);
                break;
                case 10:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[11]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 11:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[12]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 12:
                    skillRemoving2(i);
                break;
                case 13:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[14]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 14:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[11]>=1||baseSkillPoints1[15]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 15:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[16]>=1||baseSkillPoints1[19]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 16:
                    skillRemoving2(i);
                break;
                case 17:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[18]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 18:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[19]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 19:
                    skillRemoving2(i);
                break;
                case 20:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[21]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 21:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[22]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 22:
                    skillRemoving2(i);
                break;
                case 23:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[24]>=1|baseSkillPoints1[27]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 24:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[25]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 25:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[26]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 26:
                    skillRemoving2(i);
                break;
                case 27:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[28]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 28:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[29]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 29:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[29]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
            }
        break;        
        case "Barbarian":
            switch(i)
            {
                case 0:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[1]>=1||baseSkillPoints1[4]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 1:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[2]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 2:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[3]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 3:
                    skillRemoving2(i);
                break;
                case 4:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[5]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 5:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[3]>=1||baseSkillPoints1[6]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 6:
                    skillRemoving2(i);
                break;
                case 7:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[8]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 8:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[9]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 9:
                    skillRemoving2(i);
                break;
                case 10:
                    skillRemoving2(i);
                break;
                case 11:
                    skillRemoving2(i);
                break;
                case 12:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[13]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 13:
                    skillRemoving2(i);
                break;
                case 14:
                    skillRemoving2(i);
                break;
                case 15:
                    skillRemoving2(i);
                break;
                case 16:
                    skillRemoving2(i);
                break;
                case 17:
                    skillRemoving2(i);
                break;
                case 18:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[19]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 19:
                    skillRemoving2(i);
                break;
                case 20:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[21]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 21:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[22]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 22:
                    skillRemoving2(i);
                break;
                case 23:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[24]>=1|baseSkillPoints1[27]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 24:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[25]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 25:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[26]>=1||baseSkillPoints1[22]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 26:
                    skillRemoving2(i);
                break;
                case 27:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[28]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 28:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[29]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 29:
                    skillRemoving2(i);
                break;
            }
        break;
        case "Paladin":
            switch(i)
            {
                case 0:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[1]>=1||baseSkillPoints1[4]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 1:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[2]>=1||baseSkillPoints1[4]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 2:
                    skillRemoving2(i);
                break;
                case 3:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[4]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 4:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[5]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 5:
                    skillRemoving2(i);
                break;
                case 6:
                    skillRemoving2(i);
                break;
                case 7:
                    skillRemoving2(i);
                break;
                case 8:
                    skillRemoving2(i);
                break;
                case 9:
                    skillRemoving2(i);
                break;
                case 10:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[11]>=1||baseSkillPoints1[14]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 11:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[12]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 12:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[13]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 13:
                    skillRemoving2(i);
                break;
                case 14:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[15]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 15:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[16]>=1||baseSkillPoints1[18]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 16:
                    skillRemoving2(i);
                break;
                case 17:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[18]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 18:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[19]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 19:
                    skillRemoving2(i);
                break;
                case 20:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[21]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 21:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[22]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 22:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[23]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 23:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[26]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 24:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[25]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 25:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[26]>=1||baseSkillPoints1[29]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 26:
                    skillRemoving2(i);
                break;
                case 27:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[28]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 28:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[29]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 29:
                    skillRemoving2(i);
                break;
            }
        break;   
        case "Sorceress":
            switch(i)
            {
                case 0:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[1]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 1:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[2]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 2:
                    skillRemoving2(i);
                break;
                case 3:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[4]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 4:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[5]>=1||baseSkillPoints1[8]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 5:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[1]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 6:
                    skillRemoving2(i);
                break;
                case 7:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[8]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 8:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[9]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 9:
                    skillRemoving2(i);
                break;
                case 10:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[11]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 11:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[12]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 12:
                    skillRemoving2(i);
                break;
                case 13:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[14]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 14:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[15]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 15:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[12]>=1||baseSkillPoints1[19]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 16:
                    skillRemoving2(i);
                break;
                case 17:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[18]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 18:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[19]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 19:
                    skillRemoving2(i);
                break;
                case 20:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[21]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 21:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[22]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 22:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[25]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 23:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[24]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 24:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[25]>=1||baseSkillPoints1[28]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 25:
                    skillRemoving2(i);
                break;
                case 26:
                    skillRemoving2(i);
                break;
                case 27:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[28]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 28:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[29]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 29:
                    skillRemoving2(i);
                break;
            }
        break;   
        case "Druid":
            switch(i)
            {
                case 0:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[1]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 1:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[2]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 2:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[3]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 3:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[4]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 4:
                    skillRemoving2(i);
                break;
                case 5:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[6]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 6:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[7]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 7:
                    skillRemoving2(i);
                break;
                case 8:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[9]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 9:
                    skillRemoving2(i);
                break;
                case 10:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[11]>=1||baseSkillPoints1[14]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 11:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[12]>=1||baseSkillPoints1[15]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 12:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[13]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 13:
                    skillRemoving2(i);
                break;
                case 14:
                    skillRemoving2(i);
                break;
                case 15:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[16]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 16:
                    skillRemoving2(i);
                break;
                case 17:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[18]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 18:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[15]>=1||baseSkillPoints1[19]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 19:
                    skillRemoving2(i);
                break;
                case 20:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[21]>=1||baseSkillPoints1[25]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 21:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[22]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 22:
                    skillRemoving2(i);
                break;
                case 23:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[24]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 24:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[25]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 25:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[26]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 26:
                    skillRemoving2(i);
                break;
                case 27:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[28]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 28:
                    if(baseSkillPoints1[i]==1)
                    {
                        if(baseSkillPoints1[29]>=1)
                        {
                            reminder7();
                        }
                        else
                        {
                            skillRemoving2(i);
                        }
                    }
                    else
                    {
                        skillRemoving2(i);
                    }
                break;
                case 29:
                    skillRemoving2(i);
                break;
            }
        break;   
    }
        function skillRemoving2(i)
        {   
            if(keyName=='Control')
            {
                if(baseSkillPoints1[i]>0)
                {   
                    if(baseSkillPoints1[i]<=10)
                    {   
                        if(baseSkillPoints1[i]==1)
                        {
                            reminder10();
                        }
                        else
                        {
                        avalibleSkillPoints=avalibleSkillPoints+baseSkillPoints1[i]-1;
                        skillRequirements[i]=skillRequirements[i]-baseSkillPoints1[i]+1;
                        baseSkillPoints1[i]=1;
                        avalibleSkillPointsUpdate();
                        plusToSkillsColor()
                        descriptionUpdate(i);
                        }
                    }
                    else
                    {
                        skillRequirements[i]-=10;
                        avalibleSkillPoints+=10;
                        baseSkillPoints1[i]-=10;
                        avalibleSkillPointsUpdate();
                        plusToSkillsColor()
                        descriptionUpdate(i);
                    }
                }
            }
            else
            {
                if(baseSkillPoints1[i]>0)
                {
                    baseSkillPoints1[i]--;
                    skillRequirements[i]--;
                    avalibleSkillPoints++;
                    avalibleSkillPointsUpdate();
                    plusToSkillsColor()
                    descriptionUpdate(i);
                }
                else
                {
                    reminder8()
                }
            }
        }
    }
}
function avalibleSkillPointsUpdate()
{
document.getElementById("avalibleSkillPoints").innerHTML=avalibleSkillPoints;
}
function plusToSkillsColor()
{
    if(plusToSkills>0)
    {
        for(let i=1;i<=30;i++)
        {
            document.getElementById("skillCounter"+i).style.color="rgb(18, 88, 240)";
        }
    }
}
}

// Level
{
    var isLvlSet=false;
    document.getElementById("lvlButton").onclick=function()
    {
        
        lvl=document.getElementById("level").value;
        if(lvl<=99&&lvl>=1)
        {
        isLvlSet=true;
        avalibleSkillPoints=lvl-1;
        avalibleSkillPointsUpdate();
        document.getElementById("lvlButton").style.display="none";
        document.getElementById("level").style.display="none";
        document.getElementById("lvlCounter").style.display="inline";
        document.getElementById("lvlCounter").innerHTML=" "+lvl;
        }
        else
        {
            reminder9()
        }
    }
}

// Reset
{
const reset=document.querySelector("#reset");

reset.addEventListener("click",e=>{
    for(let i=0;i<20;i++)
    {
        baseSkillPoints1[i]=0;
    }
    resetClear();
    avalibleSkillPoints=lvl-1;
    avalibleSkillPointsUpdate();
});

function resetClear()
{
    document.getElementById("skillCounter1").innerHTML="";
    document.getElementById("skillCounter2").innerHTML="";
    document.getElementById("skillCounter3").innerHTML="";
    document.getElementById("skillCounter4").innerHTML="";
    document.getElementById("skillCounter5").innerHTML="";
    document.getElementById("skillCounter6").innerHTML="";
    document.getElementById("skillCounter7").innerHTML="";
    document.getElementById("skillCounter8").innerHTML="";
    document.getElementById("skillCounter9").innerHTML="";
    document.getElementById("skillCounter10").innerHTML="";
    document.getElementById("skillCounter11").innerHTML="";
    document.getElementById("skillCounter12").innerHTML="";
    document.getElementById("skillCounter13").innerHTML="";
    document.getElementById("skillCounter14").innerHTML="";
    document.getElementById("skillCounter15").innerHTML="";
    document.getElementById("skillCounter16").innerHTML="";
    document.getElementById("skillCounter17").innerHTML="";
    document.getElementById("skillCounter18").innerHTML="";
    document.getElementById("skillCounter19").innerHTML="";
    document.getElementById("skillCounter20").innerHTML="";
    document.getElementById("skillCounter21").innerHTML="";
    document.getElementById("skillCounter22").innerHTML="";
    document.getElementById("skillCounter23").innerHTML="";
    document.getElementById("skillCounter24").innerHTML="";
    document.getElementById("skillCounter25").innerHTML="";
    document.getElementById("skillCounter26").innerHTML="";
    document.getElementById("skillCounter27").innerHTML="";
    document.getElementById("skillCounter28").innerHTML="";
    document.getElementById("skillCounter29").innerHTML="";
    document.getElementById("skillCounter30").innerHTML="";

    isLvlSet=false;
    lvl=1;
    avalibleSkillPoints=lvl-1;
    dependOnCLass()
    for(let i=0;i<30;i++)
    {
        baseSkillPoints1[i]=0;
    }
    document.getElementById("lvlButton").style.display="inline";
    document.getElementById("level").style.display="inline";
    document.getElementById("lvlCounter").style.display="none";

    for(let i=0;i<9;i++)
    {
        questDone[i]=false;
    }
    document.getElementById("normalDenofEvil").style.color="rgba(255, 255, 255, 0.808)";
    document.getElementById("normalRadament").style.color="rgba(255, 255, 255, 0.808)";
    document.getElementById("normalAngel").style.color="rgba(255, 255, 255, 0.808)";
    document.getElementById("nightmareDenofEvil").style.color="rgba(255, 255, 255, 0.808)";
    document.getElementById("nightmareRadament").style.color="rgba(255, 255, 255, 0.808)";
    document.getElementById("nightmareAngel").style.color="rgba(255, 255, 255, 0.808)";
    document.getElementById("hellDenofEvil").style.color="rgba(255, 255, 255, 0.808)";
    document.getElementById("hellRadament").style.color="rgba(255, 255, 255, 0.808)";
    document.getElementById("hellAngel").style.color="rgba(255, 255, 255, 0.808)";
}
}

// Quests
{
const normalDenofEvil=document.querySelector("#normalDenofEvil");
const normalRadament=document.querySelector("#normalRadament");
const normalAngel=document.querySelector("#normalAngel");
const nightmareDenofEvil=document.querySelector("#nightmareDenofEvil");
const nightmareRadament=document.querySelector("#nightmareRadament");
const nightmareAngel=document.querySelector("#nightmareAngel");
const hellDenofEvil=document.querySelector("#hellDenofEvil");
const hellRadament=document.querySelector("#hellRadament");
const hellAngel=document.querySelector("#hellAngel");

var questDone=[false,false,false,false,false,false,false,false,false];

normalDenofEvil.addEventListener("click",e=>{
    if(isLvlSet==true)
    {
    if(questDone[0]==true)
    {
        if(avalibleSkillPoints<=0)
        {
            reminder2();
        }
        else
        {
        document.getElementById("normalDenofEvil").style.color="rgba(255, 255, 255, 0.808)";
        questDone[0]=false;
        avalibleSkillPoints-=1;
        avalibleSkillPointsUpdate();
        }
    }
    else
    {   
        document.getElementById("normalDenofEvil").style.color="rgb(72, 245, 66)";
        questDone[0]=true;
        avalibleSkillPoints+=1;
        avalibleSkillPointsUpdate();
    }
    }
    else
    {
        if(reminderDelaycostam==true)
        reminder1()
    }
});
normalRadament.addEventListener("click",e=>{
    if(isLvlSet==true)
    {
    if(questDone[1]==true)
    {
        if(avalibleSkillPoints<=0)
        {
            reminder2();
        }
        else
        {
        document.getElementById("normalRadament").style.color="rgba(255, 255, 255, 0.808)";
        questDone[1]=false;
        avalibleSkillPoints--;
        avalibleSkillPointsUpdate();
        }
    }
    else
    {
        document.getElementById("normalRadament").style.color="rgb(72, 245, 66)";
        questDone[1]=true;
        avalibleSkillPoints++;
        avalibleSkillPointsUpdate();
    }
    }
    else
    {
        if(reminderDelaycostam==true)
        reminder1()
    }
});
normalAngel.addEventListener("click",e=>{
    if(isLvlSet==true)
    {
    if(questDone[2]==true)
    {
        if(avalibleSkillPoints<=0)
        {
            reminder2();
        }
        else
        {
        document.getElementById("normalAngel").style.color="rgba(255, 255, 255, 0.808)";
        questDone[2]=false;
        avalibleSkillPoints-=2;
        avalibleSkillPointsUpdate();
        }
    }
    else
    {
        document.getElementById("normalAngel").style.color="rgb(72, 245, 66)";
        questDone[2]=true;
        avalibleSkillPoints+=2;
        avalibleSkillPointsUpdate();
    }
    }
    else
    {
        if(reminderDelaycostam==true)
        reminder1()
    }
});
nightmareDenofEvil.addEventListener("click",e=>{
    if(isLvlSet==true)
    {
    if(questDone[3]==true)
    {
        if(avalibleSkillPoints<=0)
        {
            reminder2();
        }
        else
        {
        document.getElementById("nightmareDenofEvil").style.color="rgba(255, 255, 255, 0.808)";
        questDone[3]=false;
        avalibleSkillPoints-=1;
        avalibleSkillPointsUpdate();
        }
    }
    else
    {
        document.getElementById("nightmareDenofEvil").style.color="rgb(72, 245, 66)";
        questDone[3]=true;
        avalibleSkillPoints+=1;
        avalibleSkillPointsUpdate();
    }
    }
    else
    {
        if(reminderDelaycostam==true)
        reminder1()
    }
});
nightmareRadament.addEventListener("click",e=>{
    if(isLvlSet==true)
    {
    if(questDone[4]==true)
    {
        if(avalibleSkillPoints<=0)
        {
            reminder2();
        }
        else
        {
        document.getElementById("nightmareRadament").style.color="rgba(255, 255, 255, 0.808)";
        questDone[4]=false;
        avalibleSkillPoints-=1;
        avalibleSkillPointsUpdate();
        }
    }
    else
    {
        document.getElementById("nightmareRadament").style.color="rgb(72, 245, 66)";
        questDone[4]=true;
        avalibleSkillPoints+=1;
        avalibleSkillPointsUpdate();
    }
    }
    else
    {
        if(reminderDelaycostam==true)
        reminder1()
    }
});
nightmareAngel.addEventListener("click",e=>{
    if(isLvlSet==true)
    {
    if(questDone[5]==true)
    {
        if(avalibleSkillPoints<=0)
        {
            reminder2();
        }
        else
        {
        document.getElementById("nightmareAngel").style.color="rgba(255, 255, 255, 0.808)";
        questDone[5]=false;
        avalibleSkillPoints-=2;
        avalibleSkillPointsUpdate();
        }
    }
    else
    {
        document.getElementById("nightmareAngel").style.color="rgb(72, 245, 66)";
        questDone[5]=true;
        avalibleSkillPoints+=2;
        avalibleSkillPointsUpdate();
    }
    }
    else
    {
        if(reminderDelaycostam==true)
        reminder1()
    }
});
hellDenofEvil.addEventListener("click",e=>{
    if(isLvlSet==true)
    {
    if(questDone[6]==true)
    {
        if(avalibleSkillPoints<=0)
        {
            reminder2();
        }
        else
        {
        document.getElementById("hellDenofEvil").style.color="rgba(255, 255, 255, 0.808)";
        questDone[6]=false;
        avalibleSkillPoints-=1;
        avalibleSkillPointsUpdate();
        }
    }
    else
    {
        document.getElementById("hellDenofEvil").style.color="rgb(72, 245, 66)";
        questDone[6]=true;
        avalibleSkillPoints+=1;
        avalibleSkillPointsUpdate();
    }
    }
    else
    {
        if(reminderDelaycostam==true)
        reminder1()
    }
});
hellRadament.addEventListener("click",e=>{
    if(isLvlSet==true)
    {
    if(questDone[7]==true)
    {
        if(avalibleSkillPoints<=0)
        {
            reminder2();
        }
        else
        {
        document.getElementById("hellRadament").style.color="rgba(255, 255, 255, 0.808)";
        questDone[7]=false;
        avalibleSkillPoints-=1;
        avalibleSkillPointsUpdate();
        }
    }
    else
    {
        document.getElementById("hellRadament").style.color="rgb(72, 245, 66)";
        questDone[7]=true;
        avalibleSkillPoints+=1;
        avalibleSkillPointsUpdate();
    }
    }
    else
    {
        if(reminderDelaycostam==true)
        reminder1()
    }
});
hellAngel.addEventListener("click",e=>{
    if(isLvlSet==true)
    {
    if(questDone[8]==true)
    {
        if(avalibleSkillPoints<=0)
        {
            reminder2();
        }
        else
        {
        document.getElementById("hellAngel").style.color="rgba(255, 255, 255, 0.808)";
        questDone[8]=false;
        avalibleSkillPoints-=2;
        avalibleSkillPointsUpdate();
        }
    }
    else
    {
        document.getElementById("hellAngel").style.color="rgb(72, 245, 66)";
        questDone[8]=true;
        avalibleSkillPoints+=2;
        avalibleSkillPointsUpdate();
    }
    }
    else
    {
        if(reminderDelaycostam==true)
        reminder1()
    }
});
}

//Data
{
    //Amazon
    {
        //Javelin And Spear
        {
            class Jab
            {
                constructor(manaCost, damagePrecent, attackRating)
                {
                    this.manaCost=[2,2.2,2.5,2.7,3,3.2,3.5,3.7,4,4.2,     4.5,4.7,5,5.2,5.5,5.7,6,6.2,6.5,6.7];
                    this.damagePrecent=[-15,-12,-9,-6,-3,0,3,6,9,12,     15,18,21,24,27,30,33,36,39,42];
                    this.attackRating=[10,19,28,37,46,55,64,73,82,91,       100,109,118,127,136,145,154,163,172,181];
                }
            }
            class Impale
            {
                constructor(attackRating, weaponDurability, damagePrecent, slow)
                {
                    this.attackRating=[100,125,150,175,200,225,250,275,300,325,    350,375,400,425,450,475,500,525,550,575];
                    this.weaponDurability=[46,42,40,37,35,34,33,32,31,30,     29,29,28,27,27,26,26,26,26,25];
                    this.damagePrecent=[300,325,350,375,400,425,450,475,500,525,    550,575,600,625,650,675,700,725,750,775];
                    this.slow=[11,20,27,33,37,41,44,46,49,51,   53,54,56,57,58,60,60,61,62,63,];
                }
            }
            class Fend
            {
                constructor(attackRating, damagePrecent)
                {
                    this.attackRating=[40,50,60,70,80,90,100,110,120,130,    140,150,160,170,180,190,200,210,220,230];
                    this.damagePrecent=[70,80,90,10,110,120,130,140,150,160,        170,180,190,200,210,220,230,240,250,260];
                }
            }
            class PowerStrike
            {
                constructor(manaCost, attackRating, lightDmg)
                {
                    this.manaCost=[2,2.2,2.5,2.7,3,3.2,3.5,3.7,4,4.2,   4.5,4.7,5,5.2,5.5,5.7,6,6.2,6.5,6.7];
                    this.attackRating=[20,32,44,56,68,80,92,104,116,128,   140,152,164,176,188,200,212,224,236,248];
                    this.lightDmg=[16,34,52,70,88,106,124,142,178,214,      250,286,322,358,394,430,484,538,592,646];
                }
            }
            class ChargedStrike
            {
                constructor(manaCost, lightDmg, numOfBolts)
                {
                    this.manaCost=[4,4.2,4.5,4.7,5,5.2,5.5,5.7,6,6.2,   6.5,6.7,7,7.2,7.5,7.7,8,8.2,8.5,8.7];
                    this.lightDmg=[30,42,54,66,78,90,102,114,130,146,     162,178,194,210,226,242,262,282,302,322];
                    this.numOfBolts=[3,3,3,3,4,4,4,4,4,5,    5,5,5,5,6,6,6,6,6,7];
                }
            }
            class LightningStrike
            {
                constructor(lightDmg, numOfHits)
                {
                    this.lightDmg=[25,35,45,55,65,75,85,95,110,125,      140,155,170,185,200,215,235,255,275,295];
                    this.numOfHits=[2,3,4,5,6,7,8,9,10,11,   12,13,14,15,16,17,18,19,20,21];
                }
            }
            class PoisonJavelin
            {
                constructor(manaCost, minPoisonDmg, maxPoisonDmg, duration)
                {
                    this.manaCost=[4,4.2,4.5,4.7,5,5.2,5.5,5.7,6,6.2,   6.5,6.7,7,7.2,7.5,7.7,8,8.2,8.5,8.7];
                    this.minPoisonDmg=[25,46,75,109,150,196,250,309,412,528,   656,796,950,1115,1293,1484,1750,2034,2337,2659];
                    this.maxPoisonDmg=[37,62,93,131,175,225,281,343,459,589,   732,890,1062,1248,1448,1662,1953,2264,2595,2946];
                    this.duration=[8,10,12,14,16,18,20,22,24,26,    28,30,32,34,36,38,40,42,44,46];
                }
            }
            class LightningBolt
            {
                constructor(manaCost, lightDmg)
                {
                    this.manaCost=[6,6.2,6.5,6.7,7,7.2,7.5,7.7,8,8.2,    8.5,8.7,9,9.2,9.5,9.7,10,10.2,10.5,10.7];
                    this.lightDmg=[40,52,64,76,88,100,112,124,142,160,    178,196,214,232,250,268,296,324,352,380];
                }
            }
            class PlagueJavelin
            {
                constructor(manaCost, minPoisonDmg, maxPoisonDmg, duration, attackRating)
                {
                    this.manaCost=[7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,   12,12.5,13,13.5,14,14.5,15,15.5,16,16.5];
                    this.minPoisonDmg=[23,42,65,91,122,156,194,135,310,391,   481,578,682,794,913,1040,1233,1439,1657,1888];
                    this.maxPoisonDmg=[37,58,83,111,143,179,219,262,339,422,   514,612,718,833,953,1082,1277,1485,1705,1937];
                    this.duration=[3,3.4,3.8,4.2,4.6,5,5.4,5.8,6.2,6.6,     7,7.4,7.8,8.2,8.6,9,9.4,9.8,10.2,10.6];
                    this.attackRating=[30,39,48,57,66,75,84,93,102,111,    120,129,138,147,156,165,174,183,192,200];
                }
            }
            class LightningFury
            {
                constructor(manaCost, lightDmg, numOfBolts)
                {
                    this.manaCost=[10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,    15,15.5,16,16.5,17,17.5,18,18.5,19,19.5];
                    this.lightDmg=[40,60,80,100,120,140,160,180,210,240,    270,300,330,360,390,420,460,500,540,580];
                    this.numOfBolts=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
                }
            }
            var jab=new Jab, impale=new Impale, fend=new Fend, powerStrike=new PowerStrike,
            chargedStrike=new ChargedStrike, lightningStrike=new LightningStrike, poisonJavelin=new PoisonJavelin,
            lightningBolt=new LightningBolt, plagueJavelin=new PlagueJavelin, lightningFury=new LightningFury;
        }
        //Passive And Magic
        {
            class InnerSight
            {
                constructor(duration, monsterArmor)
                {
                    this.duration=[8,12,16,20,24,28,32,36,40,44,   48,52,56,60,64,68,72,76,80,84];
                    this.monsterArmor=[-40,-65,-90,-115,-140,-165,-190,-215,-260,-305,   -350,-395,-440,-485,-530,-575,-635,-695,-755,-815];
                }
            }
            class SlowMissles
            {
                constructor(duration)
                {
                    this.duration=[12,18,24,30,36,42,48,54,60,66,    72,78,84,90,96,102,108,114,120,126];
                }
            }
            class Decoy
            {
                constructor(manaCost, duration, bonusLife)
                {
                    this.manaCost=[19,18,17,16,16,15,14,13,13,12,   11.5,10.7,10,9.2,8.5,7.7,7,6.2,5.5,4.7];
                    this.duration=[10,15,20,25,30,35,40,45,50,55,    60,65,70,75,80,85,90,95,100,105];
                    this.bonusLife=[10,20,30,40,50,60,70,80,90,100,    110,120,130,140,150,160,170,180,190,200];
                }
            }
            class Valkyrie
            {
                constructor(manaCost, hitPoints, damagePrecent, attackRating, defensePrecent)
                {
                    this.manaCost=[25,26,27,28,29,30,31,32,32,34,   35,36,37,38,39,40,41,42,43,44];
                    this.hitPoints=[528,616,704,792,880,968,1056,1144,1232,1320,     1408,1496,1584,1672,1760,1848,1936,2024,2112,2200];
                    this.damagePrecent=[0,25,50,75,100,125,150,175,200,225,     250,275,300,325,350,375,400,425,450,475];
                    this.attackRating=[40,80,120,160,200,240,280,320,360,400,    440,480,520,560,600,640,680,720,760,800];
                    this.defensePrecent=[0,10,20,30,40,50,60,70,80,90,    100,110,120,130,140,150,160,170,180,190];
                }
            }
            class Dodge
            {
                constructor(chanceToDodge)
                {
                    this.chanceToDodge=[18,24,29,34,37,40,42,44,46,47,    49,50,51,52,52,54,54,55,55,56];
                }
            }
            class Avoid
            {
                constructor(chanceToAvoid)
                {
                    this.chanceToAvoid=[24,31,36,41,45,48,50,52,54,55,   57,58,60,61,61,63,63,64,64,65];
                }
            }
            class Evade
            {
                constructor(chanceToEvade)
                {
                    this.chanceToEvade=[18,24,29,34,37,40,42,44,46,47,    49,50,51,52,52,54,54,55,55,56];
                }
            }
            class CriticalStrike
            {
                constructor(chanceToCrit)
                {
                    this.chanceToCrit=[16,25,32,38,42,46,49,51,54,56,     58,59,61,62,63,65,65,66,67,68];
                }
            }
            class Penetrate
            {
                constructor(attackRating)
                {
                    this.attackRating=[35,45,55,65,75,85,95,105,115,125,    135,145,155,165,175,185,195,205,215,225];
                }
            }
            class Pierce
            {
                constructor(chanceToPierce)
                {
                    this.chanceToPierce=[23,34,42,49,55,59,63,65,69,71,    73,75,77,79,80,82,82,83,84,85];
                }
            }
            var innerSight=new InnerSight, slowMissles=new SlowMissles, decoy=new Decoy, 
            valkyrie=new Valkyrie,dodge=new Dodge, avoid=new Avoid, evade=new Evade, 
            criticalStrike=new CriticalStrike, penetrate=new Penetrate, pierce=new Pierce;
        }
        //Bow And Crossbow
        {
            class ColdArrow
            {
                constructor(manaCost, minColdDmg, maxColdDmg, coldLenght, dmgToCold, attackRating)
                {
                    this.manaCost=[3.5,3.6,3.7,3.8,4,4.1,4.2,4.3,4.5,4.6,    4.7,4.8,5,5.1,5.2,5.3,5.5,5.6,5.7,5.8];
                    this.minColdDmg=[3,5,7,9,11,13,15,17,19,22,     24,27,29,32,34,37,41,45,49,53];
                    this.maxColdDmg=[4,6,8,10,12,14,16,18,20,23,    25,28,30,33,35,38,42,47,51,56];
                    this.coldLenght=[4,5.2,6.4,7.6,8.8,10,11.2,12.4,13.6,14.8,    16,17.2,18.4,19.6,20.8,22,23.2,24.6,25.6,26.8];
                    this.dmgToCold=[3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41];
                    this.attackRating=[10,19,28,37,46,55,64,73,82,91,     100,109,118,127,136,145,154,163,172,181];
                }
            }
            class IceArrow
            {
                constructor(manaCost, duration, minColdDmg, maxColdDmg, attackRating)
                {
                    this.manaCost=[4,4.2,4.5,4.7,5,5.2,5.5,5.7,6,6.2,   6.5,6.7,7,7.2,7.5,7.7,8,8.2,8.5,8.7];
                    this.duration=[2,2.2,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,     4,4.2,4.4,4.6,4.8,5,5.2,5.4,5.6,5.8];
                    this.minColdDmg=[6,12,19,25,32,38,45,51,64,77,   90,103,116,129,142,155,174,194,213,233];
                    this.maxColdDmg=[10,17,23,30,36,43,49,56,70,84,   98,112,126,140,154,168,189,209,230,250];
                    this.attackRating=[20,29,38,47,56,65,74,83,92,101,    110,119,128,137,146,155,164,173,182,191];
                }
            }
            class FreezingArrow
            {
                constructor(manaCost, minColdDmg, maxColdDmg, attackRating)
                {
                    this.manaCost=[9,9.25,9.5,9.75,10,10.25,10.5,10.75,11,11.25,11.5,    11.75,12,12.25,12.5,12.75,13,13.25,13.5,13.75,14];
                    this.minColdDmg=[40,50,60,70,80,90,100,110,125,140,     155,170,185,200,215,230,250,270,290,310];
                    this.maxColdDmg=[50,60,70,80,90,100,110,120,135,150,    165,180,195,210,225,240,260,280,300,320];
                    this.attackRating=[40,49,58,67,76,85,94,103,112,121,    130,139,148,157,166,175,184,193,202,211];
                }
            }
            class MagicArrow
            {
                constructor(manaCost, dmgToMagic, attackRating, magicDmg)
                {
                    this.manaCost=[1.5,1.3,1.2,1,0.8,0,7,0.6,0.5,0.3,   0.2,0.1,0,0,0,0,0,0,0,0];
                    this.dmgToMagic=[1,2,3,4,5,6,7,8,9,10,   11,12,13,14,15,16,17,18,19,20];
                    this.attackRating=[10,19,28,37,46,55,64,73,82,91,  100,109,118,127,136,145,154,163,172,181];
                    this.magicDmg=[1,2,3,4,5,6,7,8,9,10,   11,12,13,14,15,16,17,18,19,20];
                }
            }
            class MultipleShot
            {
                constructor(manaCost, numOfArrows)
                {
                    this.manaCost=[4,5,6,7,8,9,10,11,12,13,   14,15,16,17,18,19,20,21,22,23];
                    this.numOfArrows=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
                }
            }
            class GuidedArrow
            {
                constructor(manaCost, damagePrecent)
                {
                    this.manaCost=[8,7.7,7.5,7.2,7,6.7,6.5,6.2,6,5.7,    5.5,5.2,5,4.7,4.5,4.2,4,3.7,3.5,3.2];
                    this.damagePrecent=[0,7,14,21,28,35,42,49,56,67,    70,77,84,91,98,105,112,119,126,133];
                }
            }
            class Strafe
            {
                constructor(numOfAttacks, damagePrecent, attackRating)
                {
                    this.numOfAttacks=[5,6,7,8,9,10,10,10,10,10,    10,10,10,10,10,10,10,10,10,10];
                    this.damagePrecent=[5,10,15,120,25,30,35,40,45,50,    55,60,65,70,75,80,85,90,95,100];
                    this.attackRating=[30,39,48,57,66,75,84,93,102,111,    120,129,138,147,156,165,174,183,192,201];
                }
            }
            class FireArrow
            {
                constructor(minFireDmg, maxFireDmg, dmgToFire, attackRating)
                {
                    this.minFireDmg=[1,3,5,7,9,11,13,15,18,21,    24,27,30,33,36,39,45,51,57,63];
                    this.maxFireDmg=[4,6,8,10,12,13,16,18,21,24,   27,30,33,36,39,42,49,46,63,70];
                    this.dmgToFire=[3,5,7,9,11,13,15,17,19,21,    23,25,27,29,31,33,35,37,39,41];
                    this.attackRating=[10,19,28,37,46,55,64,73,82,91,   100,109,118,127,136,145,154,163,172,181];
                }
            }
            class ExplodingArrow
            {
                constructor(manaCost, minFireDmg, maxFireDmg, attackRating)
                {
                    this.manaCost=[5,5.25,5.5,5.75,6,6.25,6.5,6.75,7,7.25,    7.5,7.75,8,8.25,8.5,8.75,9,9.25,9.5,9.75];
                    this.minFireDmg=[2,7,12,17,22,27,32,37,44,51,    58,65,72,79,86,93,102,111,120,129];
                    this.maxFireDmg=[6,11,16,21,26,31,36,41,49,57,   65,73,81,89,97,105,116,127,138,149];
                    this.attackRating=[20,29,38,47,56,65,74,83,92,101,   110,119,128,137,146,155,164,173,182,191];
                }
            }
            class ImmolationArrow
            {
                constructor(manaCost, minFireDmg, maxFireDmg, minDuration, maxDuration, attackRating)
                {
                    this.manaCost=[6,6.25,6.5,6.75,7,7.25,7.5,7.75,8,8.25,    8.5,8.75,9,9.25,9.5,9.75,10,10.25,10.5,10.75];
                    this.minFireDmg=[13,26,39,52,66,79,92,105,130,156,    181,206,232,257,282,308,345,382,420,457];
                    this.maxFireDmg=[25,38,51,64,78,91,104,117,143,168,   193,218,244,269,294,320,357,394,432,469];
                    this.minDuration=[8,14,19,26,32,38,44,51,57,63,    69,76,82,87,93,100,106,107,112,118];
                    this.maxDuration=[10,16,22,29,35,41,46,53,59,65,   71,78,84,90,96,103,108,110,114,120];
                    this.attackRating=[30,39,48,57,66,75,84,93,102,111,   120,129,138,147,156,165,174,183,192,201];
                }
            }
            var coldArrow=new ColdArrow, iceArrow=new IceArrow, freezingArrow=new FreezingArrow,
            magicArrow=new MagicArrow, multipleShot=new MultipleShot, guidedArrow=new GuidedArrow,
            strafe=new Strafe, fireArrow=new FireArrow, explodingArrow=new ExplodingArrow, immolationArrow=new ImmolationArrow;
        }
    }
    //Assassin
    {
        //Martial Arts
        {
            class FistOfFire
            {
                constructor(attackRating, minFireDmg1, maxFireDmg1, minFireDmg3, maxFireDmg3)
                {
                    this.attackRating=[25,35,45,55,65,75,85,95,105,115,   125,135,145,155,165,175,185,195,205,215];
                    this.minFireDmg1=[6,11,16,21,26,31,36,41,51,61,   71,81,91,101,111,121,141,161,181,201];
                    this.maxFireDmg1=[10,15,20,25,30,35,40,45,56,67,  78,89,100,111,122,133,155,177,199,221];
                    this.minFireDmg3=[9,17,25,32,40,48,56,64,79,95,   110,126,142,157,173,189,214,239,264,289];
                    this.maxFireDmg3=[15,23,31,39,46,54,62,70,85,101,  117,132,148,164,179,195,221,248,275,301];
                }
            }
            class ClawsOfThunder
            {
                constructor(attackRating, lightDmg1, lightDmg2, lightDmg3)
                {
                    this.attackRating=[25,35,45,55,65,75,85,95,105,115,   125,135,145,155,165,175,185,195,205,215];
                    this.lightDmg1=[80,100,120,140,160,180,200,220,260,300,  340,380,420,460,500,540,600,660,720,780];
                    this.lightDmg2=[20,45,60,75,90,105,120,135,160,185,  210,235,260,285,310,335,370,405,440,475];
                    this.lightDmg3=[40,60,80,100,120,140,160,180,220,260,  300,340,380,420,460,500,560,620,680,740];
                }
            }
            class BladesOfIce
            {
                constructor(attackRating, minColdDmg1, maxColdDmg1, duration)
                {
                    this.attackRating=[25,35,45,55,65,75,85,95,105,115,   125,135,145,155,165,175,185,195,205,215];
                    this.minColdDmg1=[15,23,31,39,47,55,63,71,81,91,   101,111,121,131,141,151,171,191,211,231];
                    this.maxColdDmg1=[35,43,51,59,67,75,83,91,101,111,   121,131,141,151,161,171,193,215,237,259];
                    this.duration=[4,4.4,4.8,5.2,5.6,6,6.4,6.8,7.2,7.6,   8,8.4,8.8,9.2,9.6,10,10.4,10.8,11.2,11.6];
                }
            }
            class TigerStrike
            {
                constructor(attackRating, damagePrecent1, damagePrecent2, damagePrecent3)
                {
                    this.attackRating=[25,35,45,55,65,75,85,95,105,115,   125,135,145,155,165,175,185,195,205,215];
                    this.damagePrecent1=[100,120,140,160,180,200,220,240,260,280,   300,320,340,360,380,400,420,440,460,480];
                    this.damagePrecent2=[200,240,280,320,360,400,440,480,520,560,   600,640,680,720,760,800,840,880,920,960];
                    this.damagePrecent3=[300,360,420,480,540,600,660,720,780,840,   900,960,1020,1080,1140,1200,1260,1320,1380,1440];
                }
            }
            class CobraStrike
            {
                constructor(attackRating, lifeSteal1, manaSteal2, lifeManaSteal3)
                {
                    this.attackRating=[25,35,45,55,65,75,85,95,105,115,   125,135,145,155,165,175,185,195,205,215];
                    this.lifeSteal1=[40,45,50,55,60,65,70,75,80,85,  90,95,100,105,110,115,120,125,130,135];
                    this.manaSteal2=[40,45,50,55,60,65,70,75,80,85,  90,95,100,105,110,115,120,125,130,135];
                    this.lifeManaSteal3=[80,90,100,110,120,130,140,150,160,170,   180,190,200,210,220,230,240,250,260,270];
                }
            }
            class PhoenixStrike
            {
                constructor(attackRating, minMeteorDmg, maxMeteorDmg, minFireDmg1, maxFireDmg1, lightDmg2, minColdDmg3, maxColdDmg3)
                {
                    this.attackRating=[25,35,45,55,65,75,85,95,105,115,   125,135,145,155,165,175,185,195,205,215];
                    this.minMeteorDmg=[22,35,44,55,66,77,88,99,119,140,   161,182,203,224,245,266,298,330,361,393];
                    this.maxMeteorDmg=[44,55,66,77,88,99,110,121,144,157, 190,213,236,259,282,305,342,378,414,451];
                    this.minFireDmg1=[14,25,37,51,63,75,89,100,126,150,   175,199,225,250,274,300,339,379,419,459];
                    this.maxFireDmg1=[23,35,49,60,72,86,98,110,135,159,   185,210,234,260,283,309,351,393,435,478];
                    this.lightDmg2=[45,67,90,113,135,158,180,203,248,293, 339,384,429,474,519,565,632,700,768,836];
                    this.minColdDmg3=[17,22,26,30,35,39,44,48,57,66,   74,83,92,101,110,118,132,145,158,171];
                    this.maxColdDmg3=[35,39,44,48,52,57,61,66,74,83,   92,101,110,118,127,136,150,165,179,193];
                }
            }
            class DragonTalon
            {
                constructor(attackRating, damagePrecent, numOfKicks)
                {
                    this.attackRating=[5,12,19,26,33,40,47,54,61,68,    75,82,89,96,103,110,117,124,131,138];
                    this.damagePrecent=[20,55,90,125,160,195,230,265,300,335,    370,405,440,475,510,545,580,615,650,685];
                    this.numOfKicks=[1,1,1,1,1,2,2,2,2,2,  2,3,3,3,3,3,3,4,4,4,];
                }
            }
            class DragonClaw
            {
                constructor(attackRating, damagePrecent)
                {
                    this.attackRating=[40,65,90,115,140,165,190,215,240,265,   290,315,340,365,390,415,440,465,390,515];
                    this.damagePrecent=[50,65,80,95,110,125,140,155,170,185,    200,215,230,245,260,275,290,305,320,335];
                }
            }
            class DragonTail
            {
                constructor(fireDmg, attackRating)
                {
                    this.fireDmg=[50,70,90,110,130,150,170,190,210,230,   250,270,290,310,330,350,370,390,410,430];
                    this.attackRating=[20,35,50,65,80,95,110,125,140,155,    170,185,200,215,230,245,260,275,290,305];
                }
            }
            class DragonFlight
            {
                constructor(attackRating, damagePrecent)
                {
                    this.attackRating=[100,120,140,160,180,200,220,240,260,280,   300,320,340,360,380,400,420,440,460,480];
                    this.damagePrecent=[100,135,170,205,240,275,315,340,375,410,    445,480,515,550,585,605,640,675,710,745];
                }
            }
            var fistOfFire=new FistOfFire, clawsOfThunder= new ClawsOfThunder, bladesOfIce=new BladesOfIce,
            tigerStrike=new TigerStrike, cobraStrike=new CobraStrike, phoenixStrike=new PhoenixStrike,
            dragonTalon=new DragonTalon, dragonClaw=new DragonClaw, dragonTail=new DragonTail, dragonFlight=new DragonFlight; 
        }
        //Shadow Disciplines
        {
            class BurstOfSpeed
            {
                constructor(attackSpeed, walkRunSpeed, duration)
                {
                    this.attackSpeed=[21,27,31,34,37,41,42,44,44,45,    46,47,49,50,51,51,51,52,52,52];
                    this.walkRunSpeed=[23,29,34,39,42,45,47,49,51,52,   54,55,56,57,57,59,59,60,60,61];
                    this.duration=[120,132,144,156,168,180,192,204,216,228,   240,252,264,276,288,300,312,324,336,348];
                }
            }
            class Fade
            {
                constructor(curseReduction, resistAll, duration, physicalReduction)
                {
                    this.curseReduction=[47,53,58,62,65,67,69,71,73,74,   75,76,77,78,79,80,80,81,81,82];
                    this.resistAll=[19,27,33,38,42,45,47,50,52,54,    56,57,58,60,60,62,62,63,63,64];
                    this.duration=[120,132,144,156,168,180,192,204,216,228,    240,252,264,276,288,300,312,324,336,348];
                    this.physicalReduction=[1,2,3,4,5,6,7,8,9,10,    11,12,13,14,15,16,17,18,19,20];
                }
            }
            class Venom
            {
                constructor(minPoisonDmg, maxPoisonDmg, duration)
                {
                    this.minPoisonDmg=[60,75,95,105,120,135,150,165,185,205,    225,245,265,285,305,325,350,375,400,425];
                    this.maxPoisonDmg=[80,95,110,125,140,155,170,185,205,225,   245,265,285,305,325,345,370,395,320,425];
                    this.duration=[120,132,144,156,168,180,192,214,226,238,     250,262,274,286,298,310,322,334,346,458];
                }
            }
            class ClawMastery
            {
                constructor(attackRating, damagePrecent, chanceToCrit)
                {
                    this.attackRating=[30,40,50,60,70,80,90,100,110,120,    130,140,150,160,170,180,190,200,210,220];
                    this.damagePrecent=[35,39,43,47,51,55,59,63,67,71,    75,79,83,87,91,95,99,103,107,111];
                    this.chanceToCrit=[3,6,9,11,12,13,14,15,16,17,   17,18,18,19,19,20,20,20,20,21];
                }
            }
            class WeaponBlock
            {
                constructor(chanceToBlock)
                {
                    this.chanceToBlock=[26,32,36,30,42,44,46,47,49,50,   51,52,53,54,55,56,56,56,57,57];
                }
            }
            class ShadowWarrior
            {
                constructor(manaCost, hitPoints, attackRating)
                {
                    this.manaCost=[27,27,28,28,29,29,30,30,31,31,     32,32,33,33,34,34,35,35,36,36];
                    this.hitPoints=[376,432,488,545,601,658,714,770,827,883,    940,996,1052,1109,1165,1222,1278,1334,1391,1447];
                    this.attackRating=[40,80,120,160,200,240,280,320,360,400,   440,480,520,560,600,640,680,720,760,800];
                }
            }
            class ShadowMaster
            {
                constructor(manaCost, hitPoints, attackRating, resistAll)
                {
                    this.manaCost=[35,35,36,36,37,37,38,38,39,49,   40,40,41,41,42,42,43,43,44,44];
                    this.hitPoints=[376,432,488,545,601,658,714,770,827,883,    940,996,1052,1109,1165,1222,1278,1334,1391,1447];
                    this.attackRating=[40,80,120,160,200,240,280,320,360,400,   440,480,520,560,600,640,680,720,760,800];
                    this.resistAll=[5,17,27,35,42,47,51,55,57,61,    62,65,67,68,70,71,73,73,74,75];
                }
            }
            class PsychicHammer
            {
                constructor(manaCost, minPhysicalDamage, maxPhysicalDamage, minMagicDmg, maxMagicDmg)
                {
                    this.manaCost=[4,4.2,4.5,4.7,5,5.2,5.5,5.7,6,6.2,    6.5,6.7,7,7.2,7.5,7.7,8,8.2,8.5,8.7];
                    this.minPhysicalDamage=[2,3,4,5,6,7,8,9,10,12,    13,15,16,18,19,21,23,25,27,29];
                    this.maxPhysicalDamage=[5,6,7,8,9,10,11,12,13,15,    16,18,19,21,22,24,26,28,30,32];
                    this.minMagicDmg=[2,3,4,5,6,7,8,9,10,12,    13,15,16,18,19,21,23,25,27,29];
                    this.maxMagicDmg=[5,6,7,8,9,10,11,12,13,15,    16,18,19,21,22,24,26,28,30,32];
                }
            }
            class CloakOfShadows
            {
                constructor(defensePrecent, monsterArmor, duration)
                {
                    this.defensePrecent=[10,13,16,19,22,25,28,31,34,37,     40,43,46,49,52,55,58,61,64,67];
                    this.monsterArmor=[-15,-18,-21,-24,-27,-30,-33,-36,-39,-42,   -45,-48,-51,-54,-57,-60,-63,-66,-69,-72];
                    this.duration=[8,9,10,11,12,13,14,15,16,17,    18,19,20,21,22,23,24,25,26,27];
                }
            }
            class MindBlast
            {
                constructor(minPhysicalDamage, maxPhysicalDamage, chanceToConvert, stunDuration)
                {
                    this.minPhysicalDamage=[10,12,14,16,18,20,22,24,29,34,    39,44,49,54,59,64,72,80,88,96];
                    this.maxPhysicalDamage=[20,22,24,26,28,30,32,34,39,44,    49,54,59,64,69,74,82,90,98,10];
                    this.chanceToConvert=[18,21,24,26,27,28,29,30,31,32,      32,33,33,34,34,35,35,35,35,36];
                    this.stunDuration=[2,2.2,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,     4,4.2,4.4,4.6,4.8,5,5.2,5.4,5.6,5.8];
                }
            }
            var burstOfSpeed=new BurstOfSpeed, fade=new Fade, venom=new Venom, clawMastery=new ClawMastery,
            weaponBlock=new WeaponBlock, shadowWarrior=new ShadowWarrior, shadowMaster=new ShadowMaster,
            psychicHammer=new PsychicHammer, cloakOfShadows=new CloakOfShadows, mindBlast=new MindBlast;
        }
        //Traps
        {
            class ShockWeb
            {
                constructor(numOfSpikes, lightDmg)
                {
                    this.numOfSpikes=[6,6,6,7,7,7,7,8,8,8,    8,9,9,9,9,10,10,10,10,11];
                    this.lightDmg=[10,13,16,19,22,25,28,31,37,43,   49,55,61,67,73,79,89,99,109,119];
                }
            }
            class ChargedBoltSentry
            {
                constructor(lightDmg)
                {
                    this.lightDmg=[7,10,13,16,20,23,26,29,33,38,    42,46,50,55,59,63,69,76,82,89];
                }
            }
            class LightningSentry
            {
                constructor(lightDmg)
                {
                    this.lightDmg=[24,37,49,62,74,86,99,111,131,151,    171,190,210,230,250,270,300,329,359,389];
                }
            }
            class DeathSentry
            {
                constructor(radius, lightDmg)
                {
                    this.radius=[3.3,3.6,4,4.3,4.6,5,5.3,5.6,6,6.3,    6.6,7,7.3,7.6,8,8.3,8.6,9,9.3,9.6];
                    this.lightDmg=[56,64,73,82,91,100,109,118,134,150,   165,181,197,212,228,244,268,293,318,342];
                }
            }
            class FireBlast
            {
                constructor(manaCost, minFireDmg, maxFireDmg)
                {
                    this.manaCost=[3,3.1,3.2,3.3,3.5,3.6,3.7,3.8,4,4.1,   4.2,4.3,4.5,4.6,4.7,4.8,5,5.1,5.2,5.3];
                    this.minFireDmg=[3,4,6,7,9,10,12,13,17,21,    25,29,33,37,41,45,55,65,75,85];
                    this.maxFireDmg=[4,6,9,11,14,16,19,21,27,32,   38,43,49,54,60,65,77,89,101,113];
                }
            }
            class WakeOfFire
            {
                constructor(minFireDmg, maxFireDmg)
                {
                    this.minFireDmg=[5,6,9,11,14,16,18,20,23,27,    30,33,36,39,43,46,51,57,62,68];
                    this.maxFireDmg=[10,12,15,17,19,21,23,25,29,32,  35,38,42,45,48,51,58,64,71,77];
                }
            }
            class WakeOfInferno
            {
                constructor(minFireDmg, maxFireDmg)
                {
                    this.minFireDmg=[12,22,32,43,53,63,74,84,97,110,   123,135,148,161,174,187,202,218,234,250];
                    this.maxFireDmg=[30,42,53,65,76,88,99,111,125,139,    153,167,181,195,209,223,240,257,274,291];
                }
            }
            class BladeSentinel
            {
                constructor(duration, minPhysicalDamage, maxPhysicalDamage)
                {
                    this.duration=[4,4.4,4.9,5.4,5.9,6.4,6.8,7.3,7.8,8.3,    8.8,9.2,9.7,10.2,10.7,11.2,11.6,12.1,12.6,13.1];
                    this.minPhysicalDamage=[6,9,12,15,18,21,24,27,31,35,   39,43,47,51,55,59,64,69,74,79];
                    this.maxPhysicalDamage=[10,13,16,19,22,25,28,31,35,39,    43,47,51,55,59,63,68,73,78,83];
                }
            }
            class BladeFury
            {
                constructor(manaCost, minPhysicalDamage, maxPhysicalDamage, attackRating)
                {
                    this.manaCost=[1,1.1,1.2,1.3,1.5,1.6,1.7,1.8,2,2.1,   2.2,2.3,2.5,2.6,2.7,2.8,3,3.1,3.2,3.3];
                    this.minPhysicalDamage=[8,11,14,17,20,23,26,29,34,39,   44,49,54,59,64,69,77,85,93,101];
                    this.maxPhysicalDamage=[10,13,16,19,22,25,28,31,36,41,   46,51,56,61,66,71,79,87,95,103];
                    this.attackRating=[10,20,30,40,50,60,70,80,90,100,   110,120,130,140,150,160,170,180,190,200];
                }
            }
            class BladeShield
            {
                constructor(manaCost, duration, minPhysicalDamage, maxPhysicalDamage)
                {
                    this.manaCost=[27,29,31,33,35,37,39,41,43,45,    47,49,51,53,55,57,59,61,63,65];
                    this.duration=[20,25,30,35,40,45,50,55,60,65,    70,75,80,85,90,95,100,105,110,115];
                    this.minPhysicalDamage=[1,6,11,16,21,26,31,36,42,48,   54,60,66,72,78,84,91,96,105,112];
                    this.maxPhysicalDamage=[30,35,40,45,50,55,60,65,71,77,    83,89,95,101,107,113,120,127,134,141];
                }
            }
            var shockWeb=new ShockWeb, chargedBoltSentry=new ChargedBoltSentry, lightningSentry=new LightningSentry,
            deathSentry=new DeathSentry, fireBlast=new FireBlast, wakeOfFire=new WakeOfFire, wakeOfInferno=new WakeOfInferno,
            bladeSentinel=new BladeSentinel, bladeFury=new BladeFury, bladeShield=new BladeShield;
        }
    }
    //Necromancer
    {
        //Summoning
        {
            class SkeletonMastery
            {
                constructor(skeletonLife, skeletonDamage, bonusLife, damagePrecent)
                {
                    this.skeletonLife=[8,16,24,32,40,48,56,64,72,80,   80,88,96,104,112,120,128,135,144,152,160];
                    this.skeletonDamage=[2,4,6,8,10,12,14,16,18,20,    22,24,26,28,30,32,34,36,38,40];
                    this.bonusLife=[5,10,15,120,25,30,35,40,45,50,    55,60,65,70,75,80,85,90,95,100];
                    this.damagePrecent=[10,20,30,40,50,60,70,80,90,100,   110,120,130,140,150,160,170,180,190,200];
                }
            }
            class GolemMastery
            {
                constructor(bonusLife, velocity, attackRating)
                {
                    this.bonusLife=[20,30,60,80,100,120,140,160,180,200,  220,240,260,280,300,320,340,360,380,400];
                    this.velocity=[6,10,14,17,20,22,23,24,26,27,   28,29,30,30,31,32,32,32,33,33];
                    this.attackRating=[25,50,75,100,125,150,175,200,225,250,    275,300,325,350,375,400,425,450,475,500];
                }
            }
            class SummonResist
            {
                constructor(resistAll)
                {
                    this.resistAll=[28,34,39,44,47,50,52,54,56,57,     59,60,61,62,62,64,64,65,65,66];
                }
            }
            class ClayGolem
            {
                constructor(manaCost, minPhysicalDamage, maxPhysicalDamage, hitPoints, attackRating, slow)
                {
                    this.manaCost=[15,18,21,24,27,30,33,36,39,42,   45,48,51,54,57,60,63,66,69,72];
                    this.minPhysicalDamage=[2,2,3,4,4,5,6,6,7,8,   9,9,10,11,11,12,13,13,14,15];
                    this.maxPhysicalDamage=[5,6,8,10,12,13,15,17,19,20,   22,24,26,27,29,31,33,34,36,38];
                    this.hitPoints=[100,135,170,205,240,275,310,345,380,415,    450,485,520,555,590,625,660,695,730,765];
                    this.attackRating=[80,100,120,130,160,180,200,220,240,260,   280,300,320,340,360,380,400,420,440,460];
                    this.slow=[11,20,27,33,37,41,44,46,49,51,53,54,56,57,58,60,60,61,62,63];
                }
            }
            class BloodGolem
            {
                constructor(manaCost, minPhysicalDamage, maxPhysicalDamage, lifeLeech, hitPoints)
                {
                    this.manaCost=[25,29,33,37,41,45,49,53,57,61,   65,69,73,77,81,85,89,93,97,101];
                    this.minPhysicalDamage=[6,8,10,12,14,16,18,20,22,24,    27,29,31,33,35,37,39,41,43,45];
                    this.maxPhysicalDamage=[16,21,27,32,38,44,49,55,60,66,   72,77,83,88,94,100,105,111,116,122];
                    this.lifeLeech=[86,95,102,108,112,116,119,121,124,126,   128,129,131,132,133,135,135,136,137,138];
                    this.hitPoints=[201,241,281,321,361,402,442,482,522,562,   603,643,683,723,763,804,844,884,924,964];
                }
            }
            class IronGolem
            {
                constructor(defense, defenseBonus)
                {
                    this.defense=[190,225,260,295,330,365,400,435,470,505,    540,575,610,645,680,715,750,785,820,855];
                    this.defenseBonus=[35,70,105,140,175,210,245,280,315,350,     385,420,455,490,525,560,595,630,665,700];
                }
            }
            class FireGolem
            {
                constructor(manaCost, minFireDmg, maxFireDmg, minAuraDmg, maxAuraDmg, fireAbsorbed)
                {
                    this.manaCost=[50,60,70,80,90,100,110,120,130,140,   150,160,170,180,190,200,210,220,230,240];
                    this.minFireDmg=[44,59,74,89,104,119,134,149,165,187,   203,225,241,263,279,307,330,359,382,411];
                    this.maxFireDmg=[90,106,122,138,154,170,186,202,219,242,   259,282,299,322,339,368,392,422,446,476];
                    this.minAuraDmg=[4,5,6,7,8,9,10,11,12,14,   15,17,18,20,21,24,26,29,31,34];
                    this.maxAuraDmg=[6,7,8,9,10,11,12,13,14,16,   17,19,20,22,23,26,28,31,33,36];
                    this.fireAbsorbed=[36,45,52,58,62,68,69,71,74,76,    78,79,81,82,83,85,85,86,87,88];
                }
            }
            class RaiseSkeleton
            {
                constructor(numOfSkeletons, manaCost, minPhysicalDamage, maxPhysicalDamage, attackRating, defense, hitPoints)
                {
                    this.numOfSkeletons=[1,2,3,3,3,4,4,4,5,5,    5,6,6,6,7,7,7,8,8,8,];
                    this.manaCost=[6,7,8,9,10,11,12,13,14,15,    16,17,18,19,20,21,22,23,24,25];
                    this.minPhysicalDamage=[1,1,1,1,1,1,1,2,4,6,    8,10,12,14,17,21,26,31,37,37];
                    this.maxPhysicalDamage=[2,2,2,2,2,2,2,4,5,7,    9,11,14,16,19,23,28,33,39,39];
                    this.attackRating=[20,35,50,65,80,95,110,125,140,155,    170,185,200,215,230,245,260,275,290,305];
                    this.defense=[20,35,50,65,80,95,110,125,140,155,     170,185,200,215,230,245,260,275,290,305];
                    this.hitPoints=[21,21,21,31,42,52,63,73,84,94,      105,115,126,136,147,157,168,178,189,199];
                }
            }
            class RaiseSkeletonMage
            {
                constructor(numOfSkeletons, manaCost, defense,)
                {
                    this.numOfSkeletons=[1,2,3,3,3,4,4,4,5,5,     5,6,6,6,7,7,7,8,8,8];
                    this.manaCost=[8,9,10,11,12,13,14,15,16,17,    18,19,20,21,22,23,24,25,26,27];
                    this.defense=[10,20,30,40,50,60,70,80,90,100,    110,120,130,140,150,160,170,180,190,200];
                }
            }
            class Revive
            {
                constructor(numOfMonsters)
                {
                    this.numOfMonsters=[1,2,3,4,5,6,7,8,9,10,    11,12,13,14,15,16,17,18,19,20];
                }
            }
            var skeletonMastery=new SkeletonMastery, golemMastery=new GolemMastery, summonResist=new SummonResist,
            clayGolem=new ClayGolem, bloodGolem=new BloodGolem, ironGolem=new IronGolem, fireGolem=new FireGolem,
            raiseSkeleton=new RaiseSkeleton, raiseSkeletonMage=new RaiseSkeletonMage, revive=new Revive;
        }
        //Poison And Bone
        {
            class PoisonDagger
            {
                constructor(manaCost, minPoisonDmg, maxPoisonDmg, duration, attackRating)
                {
                    this.manaCost=[3,3.2,3.5,3.7,4,4.2,4.5,4.7,5,5.2,    5.5,5.7,6,6.2,6.5,6.7,7,7.2,7.5,7.7];
                    this.minPoisonDmg=[7,13,20,30,40,53,67,82,104,129,     155,185,216,250,286,325,374,426,481,540];
                    this.maxPoisonDmg=[15,23,32,43,56,70,85,103,126,153,   181,212,245,281,319,359,410,464,521,581];
                    this.duration=[2,2.4,2.8,3.2,3.6,4,4.2,4.8,5.2,5.6,    6,6.4,6.8,7.2,7.6,8,8.4,8.8,9.2,9.6];
                    this.attackRating=[30,50,70,90,110,130,150,170,190,210,    230,250,270,290,310,330,350,370,390,310];
                }
            }
            class PoisonExplosion
            {
                constructor(minPoisonDmg, maxPoisonDmg, duration)
                {
                    this.minPoisonDmg=[28,43,60,80,103,129,158,189,242,301,    366,436,512,594,682,775,905,1043,1189,1345];
                    this.maxPoisonDmg=[86,112,140,172,206,244,284,327,392,462,    539,620,708,801,901,1006,1146,1295,1454,1620];
                    this.duration=[2,2.4,2.8,3.2,3.6,4,4.4,4.8,5.2,5.6,   6,6.4,6.8,7.2,7.6,8,8.4,8.8,9.2,9.6];
                }
            }
            class PoisonNova
            {
                constructor(minPoisonDmg, maxPoisonDmg)
                {
                    this.minPoisonDmg=[52,67,82,97,112,127,142,157,176,194,    213,232,251,269,288,307,337,367,397,427];
                    this.maxPoisonDmg=[93,108,123,138,153,168,183,198,217,236,    254,273,292,311,329,348,378,408,438,468];
                }
            }
            class Teeth
            {
                constructor(numOfTeeth, manaCost, minMagicDmg, maxMagicDmg)
                {
                    this.manaCost=[3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,    8,8.5,9,9.5,10,10.5,11,11.5,12,12.5];
                    this.numOfTeeth=[2,3,4,5,6,7,8,9,10,11,    12,13,14,15,16,17,18,19,20,21];
                    this.minMagicDmg=[2,3,4,5,6,7,8,9,10,11,    12,13,14,15,16,17,18,20,21,23];
                    this.maxMagicDmg=[4,5,6,7,8,9,10,11,12,14,   15,17,18,20,21,23,25,27,29,31];
                }
            }
            class CorpseExplosion
            {
                constructor(manaCost, radius)
                {
                    this.manaCost=[15,16,17,18,19,20,21,22,23,24,     25,26,27,28,29,30,31,32,33,34];
                    this.radius=[2.6,3,3.3,3.6,4,4.3,4.6,5,5.3,5.6,   6,6.3,6.6,7,7.3,7.6,8,8.3,8.6,9];
                }
            }
            class BoneSpear
            {
                constructor(manaCost, minMagicDmg, maxMagicDmg)
                {
                    this.manaCost=[7,7.2,7.5,7.7,8,8.2,8.5,8.7,9,9.2,    9.5,9.7,10,10.2,10.5,10.7,11,11.2,11.5,11.7];
                    this.minMagicDmg=[17,25,34,42,51,59,68,77,86,96,    105,115,125,134,144,154,166,179,192,205];
                    this.maxMagicDmg=[25,34,42,51,59,68,77,85,95,104,   114,124,133,143,153,162,176,190,204,218];
                }
            }
            class BoneSpirit
            {
                constructor(manaCost, minMagicDmg, maxMagicDmg)
                {
                    this.manaCost=[12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,    17,17.5,18,18.5,19,19.2,20,20.5,21,21.5];
                    this.minMagicDmg=[22,40,58,76,94,112,129,147,166,185,    204,224,243,262,281,300,320,340,360,380];
                    this.maxMagicDmg=[33,52,71,90,109,128,147,166,187,207,   227,247,267,287,308,328,349,370,392,413];
                }
            }
            class BoneArmor
            {
                constructor(manaCost, damageShield)
                {
                    this.manaCost=[11,12,13,14,15,16,17,18,19,20,   21,22,23,24,25,26,27,28,29,30];
                    this.damageShield=[20,35,50,65,80,95,110,125,140,155,    170,185,200,215,230,245,260,275,290,305];
                }
            }
            class BoneWall
            {
                constructor(hitPoints)
                {
                    this.hitPoints=[20,25,30,35,39,44,49,54,58,63,    68,73,77,82,87,92,96,101,106,111];
                }
            }
            class BonePrison
            {
                constructor(manaCost, hitPoints)
                {
                    this.manaCost=[27,26,25,24,23,22,21,20,19,18,    17,16,15,14,13,12,11,10,9,8];
                    this.hitPoints=[22,26,31,36,41,45,50,55,60,64,     69,74,79,83,88,93,98,102,107,112];
                }
            }
            var poisonDagger=new PoisonDagger, poisonExplosion=new PoisonExplosion, poisonNova=new PoisonNova,
            teeth=new Teeth, corpseExplosion=new CorpseExplosion, boneSpear=new BoneSpear, boneSpirit=new BoneSpirit,
            boneArmor=new BoneArmor, boneWall=new BoneWall, bonePrison=new BonePrison;
        }
        //Curses
        {
            class DimVision
            {
                constructor(radius, duration)
                {
                    this.radius=[2.6,3.3,4,4.6,5.3,6,6.6,7.3,8,8.6,   9.3,10,10.3,11.6,12,12.6,13.3,14,14.6,15.3];
                    this.duration=[7,9,11,13,15,17,19,21,23,25,   27,29,31,33,35,37,39,41,43,45];
                }
            }
            class Confuse
            {
                constructor(radius, duration)
                {
                    this.radius=[4,4.6,5.3,6,6.6,7.3,8,8.6,9.3,10,     10.6,11.3,12,12.6,13.3,14,14.6,15.3,16,16.6];
                    this.duration=[10,12,14,16,18,20,22,24,26,28,    30,32,34,36,38,40,42,44,46,48];
                }
            }
            class Attract
            {
                constructor(duration)
                {
                    this.duration=[12,15.6,19.2,22.8,26.4,30,33.6,37.2,40.8,44.4,    48,51.6,55.2,58.8,62.4,66,69.6,73.2,76.8,80.4];
                }
            }
            class AmplifyDamage
            {
                constructor(radius, duration)
                {
                    this.radius=[2,2.6,3.3,4,4.6,5.3,6,6.6,7.3,8,     8.6,9.3,10,10.6,11.3,12,12.6,13.3,14,14.6];
                    this.duration=[8,11,14,17,20,23,26,29,32,35,     38,41,44,47,50,53,56,59,52,65];
                }
            }
            class IronMaiden
            {
                constructor(dmgReturned, duration)
                {
                    this.dmgReturned=[200,225,250,275,300,325,350,375,400,425,    450,475,500,525,550,575,600,625,650,675];
                    this.duration=[12,14.4,16.8,19.2,21.6,24,26.4,28.8,31.2,33.6,   36,38.4,40.8,43.2,45.6,48,50.4,52.8,55.2,57.6];
                }
            }
            class LifeTap
            {
                constructor(radius, duration)
                {
                    this.radius=[2.6,3.3,4,4.6,5.3,6,6.6,7.3,8,8.6,    9.3,10,10.6,11.3,12,12.6,13.3,14,14.6,15.3];
                    this.duration=[16,18.4,20.8,23.2,25.6,28,30.4,32.8,35.2,37.6,     40,42.4,44.8,47.2,49.6,52,54.4,56.8,59.2,61.6];
                }
            }
            class LowerResist
            {
                constructor(radius, duration, resistAll)
                {
                    this.radius=[4.6,5.3,6,6.6,7.3,8,8.6,9.3,10,10.6,     11.3,12,12.6,13.3,14,14.6,15.3,16,16.6,17.3];
                    this.duration=[20,22,24,26,28,30,32,34,36,38,    40,42,44,46,48,50,52,54,56,58];
                    this.resistAll=[-31,-37,-41,-44,-47,-49,-51,-52,-54,-55,   -56,-57,-58,-59,-60,-61,-61,-61,-62,-62];
                }
            }
            class Weaken
            {
                constructor(radius, duration, physicalReduction)
                {
                    this.radius=[6,6.6,7.3,8,8.6,9.3,10,10.6,11.3,12,    12.6,13.3,14,14.6,15.3,16,16.6,17.3,18,18.6];
                    this.duration=[14,16.4,18.8,21.2,23.6,26,28.4,30.8,32.2,35.6,     38,40.4,42.8,45.2,47.6,50,52.4,54.8,57.2,59.6];
                    this.physicalReduction=[34,35,36,37,38,39,40,41,42,43,    44,45,46,47,48,49,50,51,52,53];
                }
            }
            class Terror
            {
                constructor(duration)
                {
                    this.duration=[8,9,10,11,12,13,14,15,16,17,    18,19,20,21,22,23,24,25,26,27];
                }
            }
            class Decrepify
            {
                constructor(duration)
                {
                    this.duration=[4,4.6,5.2,5.8,6.4,7,7.6,8.2,8.8,9.4,    10,10.6,11.2,11.8,12.4,13,13.6,14.2,14.8,15.4];
                }
            }
            var dimVision=new DimVision, confuse=new Confuse, attract=new Attract, amplifyDamage=new AmplifyDamage,
            ironMaiden=new IronMaiden, lifeTap=new LifeTap, lowerResist=new LowerResist, weaken=new Weaken,
            terror=new Terror, decrepify=new Decrepify;
        }
    }
    //Barbarian
    {
        //Warcries
        {
            class Howl
            {
                constructor(radius, duration)
                {
                    this.radius=[16,19.3,22.6,26,29.3,32.6,36,39.3,42.6,46,    49.3,52.6,56,59.3,62.6,66,69.3,72.6,76,79.3];
                    this.duration=[3,4,5,6,7,8,9,10,11,12,     13,14,15,16,17,18,19,20,21,22];
                }
            }
            class Taunt
            {
                constructor(damagePrecent, attackRating)
                {
                    this.damagePrecent=[-5,-7,-9,-11,-13,-15,-17,-19,-21,-23,    -25,-27,-29,-31,-33,-35,-37,-39,-41,-43];
                    this.attackRating=[-5,-7,-9,-11,-13,-15,-17,-19,-21,-23,    -25,-27,-29,-31,-33,-35,-37,-39,-41,-43];
                }
            }
            class BattleCry
            {
                constructor(duration, monsterArmor, damagePrecent)
                {
                    this.duration=[12,14.4,16.8,19.2,21.6,24,26.4,28.8,31.2,33.6,    36,38.4,40.8,43.2,45.6,48,50.4,52.8,55.2,57.6];
                    this.monsterArmor=[-50,-52,-54,-56,-58,-60,-62,-64,-66,-68,   -70,-72,-74,-76,-78,-80,-82,-84,-86,-88];
                    this.damagePrecent=[-25,-26,-27,-28,-29,-30,-31,-32,-33,-34,   -35,-36,-37,-38,-39,-40,-41,-42,-43,-44];
                }
            }
            class WarCry
            {
                constructor(manaCost, minPhysicalDamage, maxPhysicalDamage, duration)
                {
                    this.manaCost=[10,11,12,13,14,15,16,17,18,19,    20,21,22,23,24,25,26,27,28,29];
                    this.minPhysicalDamage=[20,26,32,38,44,50,56,62,69,76,    83,90,97,104,111,118,126,134,142,150];
                    this.maxPhysicalDamage=[30,32,42,48,54,60,66,72,79,86,    93,100,107,114,121,128,136,144,152,160];
                    this.duration=[1,1.2,1.4,1.6,1.8,2,2.2,2.4,2.6,2.8,    3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.6,4.8];
                }
            }
            class Shout
            {
                constructor(defensePrecent, duration)
                {
                    this.defensePrecent=[100,110,120,130,140,150,160,170,180,190,    200,210,220,230,240,250,260,270,280,290];
                    this.duration=[30,33,36,39,42,45,48,51,54,57,    60,63,66,69,72,75,78,81,84,87];
                }
            }
            class BattleOrders
            {
                constructor(duration, staminaLifeManaBonus)
                {
                    this.duration=[30,40,50,60,70,80,90,100,110,120,    130,140,150,160,170,180,190,200,210,220];
                    this.staminaLifeManaBonus=[35,38,41,44,47,50,53,56,59,62,     65,68,71,74,77,80,83,86,89,92];
                }
            }
            class BattleCommand
            {
                constructor(duration)
                {
                    this.duration=[30,40,50,60,70,80,90,100,110,120,   130,140,150,160,170,180,190,200,210,220];
                }
            }
            class FindPotion
            {
                constructor(chance)
                {
                    this.chance=[15,27,36,44,50,55,59,62,66,68,   71,73,75,77,78,80,81,82,83,84];
                }
            }
            class FindItem
            {
                constructor(chance)
                {
                    this.chance=[13,19,24,29,32,35,37,39,41,42,   44,45,46,47,47,49,49,50,50,51];
                }
            }
            class GrimWard
            {
                constructor(radius, slow)
                {
                    this.radius=[4,4.6,5.3,6,6.6,7.3,8,8.6,9.3,10,    10.6,11.3,12,12.6,13.3,14,14.6,15.3,16,16.6];
                    this.slow=[11,20,27,33,37,41,44,46,49,51,   53,54,56,57,58,60,60,61,62,63];
                }
            }
            var howl=new Howl, taunt=new Taunt, battleCry=new BattleCry, warCry=new WarCry,
            shout=new Shout, battleOrders=new BattleOrders, battleComand=new BattleCommand,
            findPotion=new FindPotion, findItem=new FindItem, grimWard=new GrimWard;
        }
        //Combat Masteries
        {
            class BladeMastery
            {
                constructor(damagePrecent, attackRating, chanceToCrit)
                {
                    this.damagePrecent=[28,33,38,43,48,53,58,63,68,73,    78,83,88,93,98,103,108,113,118,123];
                    this.attackRating=[28,36,44,52,60,68,76,84,92,100,    108,116,124,132,140,148,156,164,172,180];
                    this.chanceToCrit=[5,9,12,15,17,19,20,21,23,23,   24,25,26,26,27,28,28,28,29,29];
                }
            }
            class PolearmMastery
            {
                constructor(damagePrecent, attackRating, chanceToCrit)
                {
                    this.damagePrecent=[28,33,38,43,48,53,58,63,68,73,    78,83,88,93,98,103,108,113,118,123];
                    this.attackRating=[30,38,46,54,62,70,78,86,94,102,     110,118,126,134,142,150,158,166,174,182];
                    this.chanceToCrit=[5,9,12,15,17,19,20,21,23,23,   24,25,26,26,27,28,28,28,29,29];
                }
            }
            class IncreasedStamina
            {
                constructor(increasedStamina)
                {
                    this.increasedStamina=[30,45,60,75,90,105,120,135,150,165,    180,195,210,225,240,255,270,285,300,315];
                }
            }
            class IncreasedSpeed
            {
                constructor(walkRunSpeed)
                {
                    this.walkRunSpeed=[13,18,22,25,28,30,32,33,35,36,    37,38,39,40,40,41,41,42,42,43];
                }
            }
            class AxeMastery
            {
                constructor(damagePrecent, attackRating, chanceToCrit)
                {
                    this.damagePrecent=[28,33,38,43,48,53,58,63,68,73,    78,83,88,93,98,103,108,113,118,123];
                    this.attackRating=[28,36,44,52,60,68,76,84,92,100,    108,116,124,132,140,148,156,164,172,180];
                    this.chanceToCrit=[5,9,12,15,17,19,20,21,23,23,   24,25,26,26,27,28,28,28,29,29];  
                }
            }
            class ThrowingMastery
            {
                constructor(damagePrecent, attackRating, chanceToCrit, chanceToPierce, notConsume)
                {
                    this.damagePrecent=[28,33,38,43,48,53,58,63,68,73,    78,83,88,93,98,103,108,113,118,123];
                    this.attackRating=[30,38,46,54,62,70,78,86,94,102,     110,118,126,134,142,150,158,166,174,182];
                    this.chanceToCrit=[5,9,12,15,17,19,20,21,23,23,   24,25,26,26,27,28,28,28,29,29];
                    this.chanceToPierce=[8,14,19,24,27,30,32,34,36,37,   39,40,41,42,42,44,44,45,45,46];
                    this.notConsume=[9,17,23,29,33,36,38,40,43,44,   46,48,49,50,51,52,53,54,54,55];
                }
            }
            class MaceMastery
            {
                constructor(damagePrecent, attackRating, chanceToCrit)
                {
                    this.damagePrecent=[28,33,38,43,48,53,58,63,68,73,    78,83,88,93,98,103,108,113,118,123];
                    this.attackRating=[28,36,44,52,60,68,76,84,92,100,    108,116,124,132,140,148,156,164,172,180];
                    this.chanceToCrit=[5,9,12,15,17,19,20,21,23,23,   24,25,26,26,27,28,28,28,29,29];
                }
            }
            class SpearMastery
            {
                constructor(damagePrecent, attackRating, chanceToCrit)
                {
                    this.damagePrecent=[28,33,38,43,48,53,58,63,68,73,    78,83,88,93,98,103,108,113,118,123];
                    this.attackRating=[30,38,46,54,62,70,78,86,94,102,     110,118,126,134,142,150,158,166,174,182];
                    this.chanceToCrit=[5,9,12,15,17,19,20,21,23,23,   24,25,26,26,27,28,28,28,29,29];
                }
            }
            class IronSkin
            {
                constructor(defense)
                {
                    this.defense=[30,40,50,60,70,80,90,100,110,120,     130,140,150,160,170,180,190,200,210,220];
                }
            }
            class NaturalResistance
            {
                constructor(resistAll)
                {
                    this.resistAll=[12,21,28,35,40,44,47,49,52,54,    56,58,60,61,62,64,64,65,66,67];
                }
            }
            var bladeMastery=new BladeMastery, polearmMastery=new PolearmMastery, increasedStamina=new IncreasedStamina,
            increasedSpeed=new IncreasedSpeed, axeMastery=new AxeMastery, throwingMastery=new ThrowingMastery, maceMastery=new MaceMastery,
            spearMastery=new SpearMastery, ironSkin=new IronSkin, naturalResistance=new NaturalResistance;
        }
        //Combat Skills
        {
            class Leap
            {
                constructor(radius, knockbackRadius)
                {
                    this.radius=[7.3,8.6,10,11.6,12.3,13,13.6,14.3,15,15.6,   16.3,17,17.6,18.3,19,19.6,20.3,21,21.6,22.3];
                    this.knockbackRadius=[2.6,3.3,4,4.6,5.3,6,6.6,7.3,8,8.6,   9.3,10,10.6,11.3,12,12.6,13.3,14,14.6,15.3];
                }
            }
            class LeapAttack
            {
                constructor(attackRating, damagePrecent, minPhysicalDamage, maxPhysicalDamage)
                {
                    this.attackRating=[100,120,140,160,180,200,220,240,260,280,    300,320,340,360,380,400,420,440,460,480];
                    this.damagePrecent=[200,230,260,290,320,350,380,410,440,470,    500,530,560,590,620,650,680,710,740,770];
                    this.minPhysicalDamage=[12,16,21,26,31,36,40,45,55,64,     74,84,93,103,112,122,136,151,165,180];
                    this.maxPhysicalDamage=[24,33,43,52,62,72,81,91,110,129,     148,168,187,206,225,244,273,302,331,360];
                }
            }
            class Whirlwind
            {
                constructor(manaCost, damagePrecent, attackRating)
                {
                    this.manaCost=[12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,    17.5,18,18.5,19,19.5,20,20.5,21,21.5,22];
                    this.damagePrecent=[-50,-42,-34,-26,-18,-10,-2,6,14,22,    30,38,46,54,62,70,78,86,94,102];
                    this.attackRating=[0,5,10,15,20,25,30,35,40,45,    50,55,60,65,70,75,80,85,90,95];
                }
            }
            class Bash
            {
                constructor(physicalDamage, damagePrecent, attackRating)
                {
                    this.physicalDamage=[1,2,3,4,5,6,7,8,9,10,    11,12,13,14,15,16,17,18,19,20];
                    this.damagePrecent=[50,55,60,65,70,75,80,85,90,95,    100,105,110,115,120,125,130,135,140,145];
                    this.attackRating=[20,25,30,35,40,45,50,55,60,65,    70,75,80,85,90,95,100,105,110,115];
                }
            }
            class Stun
            {
                constructor(attackRating, duration)
                {
                    this.attackRating=[15,20,25,30,35,40,45,50,55,60,    65,70,75,80,85,90,95,100,105,110];
                    this.duration=[1.2,1.4,1.6,1.8,2,2.2,2.4,2.6,2.8,3,   3.2,3.4,3.6,3.8,4,4.1,4.2,4.3,4.4,4.5];
                }
            }
            class Concentrate
            {
                constructor(defense, attackRating, damagePrecent)
                {
                    this.defense=[100,110,120,130,140,150,160,170,180,190,    200,210,220,230,240,250,260,270,280,290];
                    this.attackRating=[60,70,80,90,100,110,120,130,140,150,   160,170,180,190,200,210,220,230,240,250];
                    this.damagePrecent=[70,75,80,85,90,95,100,105,110,115,    120,125,130,135,140,145,150,155,160,165];
                }
            }
            class Berserk
            {
                constructor(attackRating, magicDmg, duration)
                {
                    this.attackRating=[100,115,130,145,160,175,190,205,220,235,    250,265,280,295,310,325,340,355,370,385];
                    this.magicDmg=[150,165,180,195,210,225,240,255,270,285,    300,315,330,345,360,375,390,405,420,435];
                    this.duration=[2.7,2.4,2.2,2.1,2,1.9,1.8,1.7,1.6,1.6,    1.6,1.5,1.5,1.4,1.4,1.4,1.4,1.3,1.3,1.3];
                }
            }
            class DoubleSwing
            {
                constructor(manaCost, attackRating)
                {
                    this.manaCost=[1,0.8,0.7,0.6,0.5,0.3,0.2,0.1,0,0,     0,0,0,0,0,0,0,0,0,0];
                    this.attackRating=[15,20,25,30,35,40,45,50,55,60,    65,70,75,80,85,90,95,100,105,110];
                }
            }
            class DoubleThrow
            {
                constructor(attackRating, damagePrecent)
                {
                    this.attackRating=[20,30,40,50,60,70,80,90,100,110,    120,130,140,150,160,170,180,190,200,210];
                    this.damagePrecent=[16,24,32,40,48,56,64,72,80,88,     96,104,112,120,128,136,144,152,160,168];
                }
            }
            class Frenzy
            {
                constructor(damagePrecent, attackRating, attackSpeed, velocity)
                {
                    this.damagePrecent=[90,95,100,105,110,115,120,125,130,135,    140,145,150,155,160,165,170,175,180,185];
                    this.attackRating=[100,107,114,121,128,135,142,149,156,163,   170,177,184,191,198,205,212,219,226,233];
                    this.attackSpeed=[7,13,16,22,25,27,29,31,33,34,    35,36,37,38,39,40,40,41,41,42];
                    this.velocity=[47,68,84,99,110,119,126,131,138,142,    147,151,155,158,160,164,165,167,169,171];
                }
            }
            var leap=new Leap, leapAttack=new LeapAttack, whirlwind=new Whirlwind, bash=new Bash,
            stun=new Stun, concentrate=new Concentrate, berserk=new Berserk, doubleSwing=new DoubleSwing,
            doubleThrow=new DoubleThrow, frenzy=new Frenzy;
        }
    }
    //Paladin
    {
        //Defensive Auras
        {
            class Prayer
            {
                constructor(radius, heal, manaCost)
                {
                    this.radius=[10.6,12,13.3,14.6,16,17.3,18.6,20,21.3,22.6,    24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,  37.3,38.6,40,41.3,42.6,44,45.3,46.6,48,49.3,  50.6,52,53.3,54.6,56,57.3,58.6,60,61.3,62.6];
                    this.heal=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,21,23,25];
                    this.manaCost=[1,1.1,1.3,1.5,1.7,1.9,2.1,2.3,2.5,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.1,4.3,4.5];
    
                }
            }
            class Cleansing
            {
                constructor(radius, durationReduction)
                {
                    this.radius=[10.6,12,13.3,14.6,16,17.,18.6,20,21.3,22.6,       24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,         37.3,38.6,40,41.3,42.6,44,45.3,46.6,48,49.3,      50.6,52,53.3,54.6,56,57.3,58.6,60,61.3,62.6    ];
                    this.durationReduction=[39,46,51,56,60,63,65,67,69,70,72,73,75,76,76,78,78,79,79,80];
                }
            }
            class Meditation
            {
                constructor(radius, manaRecovery)
                {
                    this.radius=[7.3,8.6,10,11.3,12.6,14,15.3,16.6,18,19.3,   20.6,22,23.3,24.6,26,27.3,28.6,30,31.3,32.6,    ];
                    this.manaRecovery=[300,325,350,375,400,425,450,475,500,525,550,575,600,625,650,675,700,725,750,775];
                }
            }
            class Defiance
            {
                constructor(radius, defensePrecent)
                {
                    this.radius=[10.6,12,13.3,14.6,16,17.,18.6,20,21.3,22.6,       24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,         37.3,38.6,40,41.3,42.6,44,45.3,46.6,48,49.3,      50.6,52,53.3,54.6,56,57.3,58.6,60,61.3,62.6    ];
                    this.defensePrecent=[70,80,90,100,110,120,130,140,150,160,   170,180,190,200,210,220,230,240,250,260];
                }
            }
            class Vigor
            {
                constructor(radius, walkRunSpeed, maxStaminaRecovery, increasedStamina)
                {
                    this.radius=[10,12,14,16,18,20,22,24,26,28,   30,32,34,36,38,40,42,44,46,48];
                    this.walkRunSpeed=[13,18,22,25,28,30,32,33,35,36,    37,38,39,40,41,41,42,42,43,43];
                    this.maxStaminaRecovery=[50,75,100,125,150,175,200,225,250,275,    300,325,350,375,400,425,450,475,500,525];
                    this.increasedStamina=[50,75,100,125,150,175,200,225,250,275,    300,325,350,375,400,425,450,475,500,525];
                }
            }
            class Redemption
            {
                constructor(redeemChance, hpManaRecovery)
                {
                    this.redeemChance=[23,34,42,49,55,59,63,65,69,71,    73,75,77,79,80,82,82,83,84,85];
                    this.hpManaRecovery=[25,30,35,40,45,50,55,60,65,70,    75,80,85,90,95,100,105,110,115,120];
                }
            }
            class FireResist
            {
                constructor(radius, resistFire)
                {
                    this.radius=[10.6,12,13.3,14.6,16,17.3,18.6,20,21.3,22.6,    24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,  37.3,38.6,40,41.3,42.6,44,45.3,46.6,48,49.3,  50.6,52,53.3,54.6,56,57.3,58.6,60,61.3,62.6];
                    this.resistFire=[52,66,76,85,92,98,102,106,110,113,116,121,123,124,127,128,129,130,131,132,133,135,136,136,137];
                }
            }
            class ColdResist
            {
                constructor(radius, resistCold)
                {
                    this.radius=[7.3,8.6,10,11.3,12.6,14,15.3,16.6,18,19.3,    20.6,22,23.3,24.6,26,27.3,28.6,30,31.3,32.6,       ];
                    this.resistCold=[52,66,76,85,92,98,102,106,110,113,116,121,123,124,127,128,129,130,131,132,133,135,136,136,137];
                }
            }
            class LightningResist
            {
                constructor(radius, resistLight)
                {
                    this.radius=[10.6,12,13.3,14.6,16,17.3,18.6,20,21.3,22.6,    24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,  37.3,38.6,40,41.3,42.6,44,45.3,46.6,48,49.3,  50.6,52,53.3,54.6,56,57.3,58.6,60,61.3,62.6];
                    this.resistLight=[52,66,76,85,92,98,102,106,110,113,116,121,123,124,127,128,129,130,131,132,133,135,136,136,137];
                }
            }
            class Salvation
            {
                constructor(radius, resistAll)
                {
                    this.radius=[10.6,12,13.3,14.6,16,17.3,18.6,20,21.3,22.6,    24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,  37.3,38.6,40,41.3,42.6,44,45.3,46.6,48,49.3,  50.6,52,53.3,54.6,56,57.3,58.6,60,61.3,62.6];
                    this.resistAll=[60,68,75,80,85,88,91,93,96,97,99,101,102,103,104,106,106,107,108,108];
                }
            }
            var prayer=new Prayer, cleansing=new Cleansing, meditation=new Meditation, 
            defiance=new Defiance, vigor=new Vigor, redemption=new Redemption,
            fireResist=new FireResist, coldResist=new ColdResist, lightningResist=new LightningResist, salvation=new Salvation;
        }
        //Offensive Auras
        {
            class Might
            {
                constructor(radius, damagePrecent)
                {
                    this.radius=[10.6,12,13.3,14.6,16,17.3,18.6,20,21.3,22.6,    24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,  37.3,38.6,40,41.3,42.6,44,45.3,46.6,48,49.3,  50.6,52,53.3,54.6,56,57.3,58.6,60,61.3,62.6];
                    this.damagePrecent=[40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230];
                }
            }
            class BlessedAim
            {
                constructor(radius, attackRating)
                {
                    this.radius=[10.6,12,13.3,14.6,16,17.3,18.6,20,21.3,22.6,    24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,  37.3,38.6,40,41.3,42.6,44,45.3,46.6,48,49.3,  50.6,52,53.3,54.6,56,57.3,58.6,60,61.3,62.6];
                    this.attackRating=[75,90,105,120,135,150,165,180,195,210,225,240,255,270,285,300,315,330,345,360];
                }
            }
            class Concentration
            {
                constructor(radius, damagePrecent)
                {
                    this.radius=[10.6,12,13.3,14.6,16,17.3,18.6,20,21.3,22.6,    24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,  37.3,38.6,40,41.3,42.6,44,45.3,46.6,48,49.3,  50.6,52,53.3,54.6,56,57.3,58.6,60,61.3,62.6];
                    this.damagePrecent=[60,75,90,105,120,135,150,180,195,210,225,240,255,270,285,300,315,330,345];
                }
            }
            class Fanaticism
            {
                constructor(radius, partyDmg, damagePrecent, attackSpeed, attackRating)
                {
                    this.radius=[7.3,8.6,10,11.3,12.6,14,15.3,16.6,18,19.3,    20.6,22,23.3,24.6,26,27.3,28.6,30,31.3,32.6,       ];
                    this.partyDmg=[25,33,42,50,59,67,76,84,93,101,110,118,127,135,144,152,161,169,178,186];
                    this.damagePrecent=[50,67,84,101,118,135,152,169,186,203,220,237,254,271,288,305,322,339,356,373];
                    this.attackSpeed=[14,18,20,23,25,26,27,28,29,30,31,31,32,33,33,34,34,34,34,35];
                    this.attackRating=[40,45,50,55,60,65,70,75,80,85,90,95,100,105,100,115,120,125,130,135];
                }
            }
            class HolyFire
            {
                constructor(radius, minFireDmgToAttack, maxFireDmgToAttack, minFireDmg, maxFireDmg)
                {
                    this.radius=[4,4.6,5.3,6,6.6,7.3,8,8.6,9.3,10,10.6,11.3,12,12.6,13.3,14,14.6,15.3,16,16.6];
                    this.minFireDmgToAttack=[6,10,15,19,24,28,33,37,43,49,55,61,67,73,79,85,91,97,103,109];
                    this.maxFireDmgToAttack=[18,22,27,31,36,40,45,49,55,61,67,73,79,85,91,97,105,112,120,127];
                    this.minFireDmg=[1,1.5,2.5,3,4,4.5,5.5,6,7,8.5, 9,10,11,12,13,14,15,16,17,18];
                    this.maxFireDmg=[3,3.5,4.5,5,6,6.5,7.5,8,9,10.5, 11,12,13,14,15,16,17,18,19,20,21];
                }  
            }
            class HolyFreeze
            {
                constructor(radius, minColdDmgToAttack, maxColdDmgToAttack, minColdDmg, maxColdDmg, slow)
                {
                    this.radius=[4,4.6,5.3,6,6.6,7.3,8,8.6,9.3,10,10.6,11.3,12,12.6,13.3,14,14.6,15.3,16,16.6];
                    this.minColdDmgToAttack=[10,15,20,25,30,35,40,45,55,65,    75,85,95,105,115,125,140,155,170,185];
                    this.maxColdDmgToAttack=[15,20,25,30,35,40,45,50,60,70,       80,90,100,110,120,130,145,160,175,190];
                    this.minColdDmg=[2,3,4,5,6,7,8,9,11,13,   15,17,19,21,23,25,28,31,34,37];
                    this.maxColdDmg=[3,4,4,6,7,8,9,10,11,14,   16,18,20,22,24,26,29,32,35,38];
                    this.slow=[30,34,37,40,42,44,45,46,48,48,49,49,50,51,51,52,53,53,53,54,54];
                }
            }
            class HolyShock
            {
                constructor(radius, lightDmgToAttack, lightDmg)
                {
                    this.radius=[4,4.6,5.3,6,6.6,7.3,8,8.6,9.3,10,10.6,11.3,12,12.6,13.3,14,14.6,15.3,16,16.6];
                    this.lightDmgToAttack=[60,96,132,168,204,240,276,312,360,   408,456,504,552,600,648,696,756,816,876,936];
                    this.lightDmg=[10,16,22,28,34,40,46,52,60,68,     76,84,92,100,108,116,126,136,146,156];
                }
            }
            class Thorns
            {
                constructor(radius, dmgReturned, attackersTakeDmg)
                {
                    this.radius=[10.6,12,13.3,14.6,16,17.3,18.6,20,21.3,22.6,    24,25.3,26.6,28,29.3,30.6,32,33.3,34.6,36,  37.3,38.6,40,41.3,42.6,44,45.3,46.6,48,49.3,  50.6,52,53.3,54.6,56,57.3,58.6,60,61.3,62.6];
                    this.dmgReturned=[250,290,330,370,410,450,490,530,570,610,    650,690,730,810,850,890,930,970,1010,1210];
                    this.attackersTakeDmg=[4,8,12,16,20,24,28,32,40,48,     56,64,72,80,88,96,108,120,132,144,216];
                } 
            }
            class Sanctuary
            {
                constructor(radius, dmgToUndead, minMagicDmg, maxMagicDmg)
                {
                    this.radius=[3.3,4,4.6,5.3,6,6.6,7.3,8,8.6,9.3,      10,10.6,11.3,12,12.6,13.3,14,14.6,15.3,16];
                    this.dmgToUndead=[150,180,210,240,270,300,330,360,390,420,    450,480,510,540,570,600,630,660,690,720];
                    this.minMagicDmg=[8,12,16,20,24,28,32,36,40,44,    48,52,56,60,64,68,73,78,83,88];
                    this.maxMagicDmg=[16,20,24,28,32,36,40,44,49,54,     59,64,69,74,79,84,90,96,102,108];
                }  
            }
            class Conviction
            {
                constructor(defensePrecent, maxResistPrecentage)
                {
                    this.defensePrecent=[-49, -56, -61, -66, -70, -73, -75, -77, -79, -80,   -82, -83, -85, -86, -86, -88, -88, -89, -89, -90];
                    this.maxResistPrecentage=[-30,-35,-40,-45,-50,-55,-60,-65,-70,-75,    -80,-85,-90,-95,-100,-105,-110,-115,-120,-125];
                }  
            }
            var might=new Might, blessedAim=new BlessedAim, concentration=new Concentration, 
            fanaticism=new Fanaticism, holyFire=new HolyFire, holyFreeze=new HolyFreeze,
            holyShock=new HolyShock, thorns=new Thorns, sanctuary=new Sanctuary,
            conviction=new Conviction;
        }
        //Combat Skills
        {
            class Sacrifice
            {
                constructor(dmgToSelf, attackRating, damagePrecent)
                {
                    this.dmgToSelf=[7,6,5,4,3,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
                    this.damagePrecent=[180,195,210,225,240,255,270,285,300,315,    330,345,360,375,390,405,420,435,450,465];
                    this.attackRating=[20,27,34,41,48,55,62,89,76,83,    90,97,103,111,118,125,132,139,146,153];
                }
            }
            class Zeal
            {
                constructor(attackRating, numOfHits, damagePrecent)
                {
                    this.attackRating=[10,20,30,40,50,60,70,80,90,100,    110,120,130,140,150,160,170,180,190,200];
                    this.numOfHits=[2,3,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5];
                    this.damagePrecent=[0,0,0,0,6,12,18,24,30,36,      42,48,54,60,66,72,78,84,90,96];
                } 
            }
            class Vengeance
            {
                constructor(manaCost, coldLenght, fireDmg, coldDmg, lightDmg, attackRating)
                {
                    this.manaCost=[4,4.2,4.5,4.7,5,5.2,5.5,5.7,6,6.2,    6.5,6.7,7,7.2,7.5,7.7,8,8.2,8.5,8.7];
                    this.coldLenght=[1.2,1.8,2.4,3,3.6,4.2,4.8,5.4,6,6.6,         7.2,7.8,8.4,8,9.6,10.2,10.8,11.4,12,12.6];
                    this.fireDmg=[70,76,82,88,94,100,106,112,118,124,     130,136,142,148,154,160,166,172,178,184];
                    this.coldDmg=[70,76,82,88,94,100,106,112,118,124,     130,136,142,148,154,160,166,172,178,184];
                    this.lightDmg=[70,76,82,88,94,100,106,112,118,124,     130,136,142,148,154,160,166,172,178,184];
                    this.attackRating=[20,30,40,50,60,70,80,90,100,110,      120,130,140,150,160,170,180,190,200,210];
                } 
            }
            class Conversion
            {
                constructor(chanceToConvert)
                {
                    this.chanceToConvert=[7,13,18,22,25,27,29,31,33,34,35,36,37,38,39,40,40,41,41,42];
                } 
            }
            class HolyBolt
            {
                constructor(manaCost, minMagicDmg, maxMagicDmg, minHeal, maxHeal)
                {
                    this.manaCost=[2,2,2.1,2.1,2.2,2.3,2.3,2.4,2.5,2.5,    2.6,2.6,2.7,2.8,2.8,2.8,2.9,3,3,3.1,3.1];
                    this.minMagicDmg=[12,24,36,48,60,72,84,96,111,126,     141,156,171,186,201,216,235,255,274.5,294];
                    this.maxMagicDmg=[24,36,48,60,72,84,96,108,123.5,141,     157.5,174,190.5,207,223.5,240,262.5,285,307.5,441];
                    this.minHeal=[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39];
                    this.maxHeal=[6,10,14,18,22,26,30,34,38,42,46,50,54,58,62,66,70,74,78,82];
                } 
            }
            class BlessedHammer
            {
                constructor(manaCost, minMagicDmg, maxMagicDmg)
                {
                    this.manaCost=[5,5.2,5.5,5.7,6,6.2,6.5,6.7,7,7.2,    7.5,7.7,8,8.2,8.5,8.7,9,9.2,9.5,9.7];
                    this.minMagicDmg=[12,20,28,36,44,52,60,68,78,88,   98,108,118,128,138,148,160,172,184,196];
                    this.maxMagicDmg=[16,24,32,40,48,56,64,72,82,92,     102,112,122,132,142,152,164,176,188,200];
                } 
            }
            class FistOfHeavens
            {
                constructor(minLightDmg, maxLightDmg, minHolyBoltDmg, maxHolyBoltDmg)
                {
                    this.minLightDmg=[150,165,180,195,210,225,240,255,285,315,     345,375,405,435,465,495,540,585,630,675];
                    this.maxLightDmg=[200,215,230,245,260,275,290,305,335,365,     395,425,455,485,515,545,590,635,680,725];
                    this.minHolyBoltDmg=[40,46,52,58,64,70,76,82,92,102,    112,122,132,142,152,162,178,194,210,226];
                    this.maxHolyBoltDmg=[50,56,62,68,74,80,86,92,102,112,    122,132,142,152,162,172,188,204,220,236];
                }
            }
            class Smite
            {
                constructor(damagePrecent, stunDuration)
                {
                    this.damagePrecent=[15,30,45,60,75,90,105,120,135,150,        165,180,195,210,225,240,255,270,285,300];
                    this.stunDuration=[0.6,0.8,1,1.2,1.4,1.6,1.8,2,2.2,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.4];
                }
            }
            class Charge
            {
                constructor(damagePrecent, attackRating)
                {
                    this.damagePrecent=[100,125,150,175,200,225,250,275,300,325,    250,375,400,425,450,475,500,525,550,575];
                    this.attackRating=[50,65,80,95,110,125,140,155,170,185,     200,215,230,245,260,275,290,305,320,335];
                } 
            }
            class HolyShield
            {
                constructor(duration, defensePrecent, blockPrecentage, minSmiteDmg, maxSmiteDmg)
                {
                    this.duration=[30,55,80,105,130,155,180,205,230,255,    280,305,330,355,380,405,430,455,480,505];
                    this.defensePrecent=[25,40,55,70,85,100,115,130,145,160,      175,190,205,220,235,250,265,280,295,310];
                    this.blockPrecentage=[14,18,20,23,25,26,27,28,29,30,   31,31,32,33,33,34,34,34,34,35];
                    this.minSmiteDmg=[3,5,7,9,11,13,15,17,20,23,   26,29,32,35,38,41,45,49,53,57];
                    this.maxSmiteDmg=[6,8,10,12,14,16,18,20,23,26,    29,32,35,38,41,44,46,48,52,56,60];
                } 
            }
    
            var sacrifice=new Sacrifice, zeal=new Zeal, vengeance=new Vengeance, conversion=new Conversion,
            holyBolt=new HolyBolt, blessedHammer=new BlessedHammer, fistOfHeavens=new FistOfHeavens,
            smite=new Smite, charge=new Charge, holyShield=new HolyShield;
        }
    }
    //Sorceress
    {
        //Cold Spells
        {
            class FrostNova
            {
                constructor(manaCost, minColdDmg, maxColdDmg, duration)
                {
                    this.manaCost=[9,10,11,12,13,14,15,16,17,18,   19,20,21,22,23,24,25,26,27,28];
                    this.minColdDmg=[2,4,6,8,10,12,14,16,19,22,    25,28,31,34,37,40,44,48,52,56];
                    this.maxColdDmg=[4,6,9,11,14,16,19,21,25,28,   32,35,39,42,46,49,54,58,63,67];
                    this.duration=[8,9,10,11,12,13,14,15,16,17,    18,19,20,21,22,23,24,25,26,27];
                }
            }
            class Blizzard
            {
                constructor(manaCost, minColdDmg, maxColdDmg)
                {
                    this.manaCost=[23,24,25,26,27,28,29,30,31,32,    33,34,35,36,37,38,39,40,41,42];
                    this.minColdDmg=[51,69,86,103,120,138,155,172,207,241,    276,310,345,379,414,448,500,552,603,655];
                    this.maxColdDmg=[86,103,123,141,159,178,196,215,250,286,   322,357,393,428,464,500,553,606,658,711];
                }
            }
            class FrozenOrb
            {
                constructor(manaCost, minColdDmg, maxColdDmg, duration)
                {
                    this.manaCost=[25,25,26,26,27,27,28,28,29,29,   30,30,31,31,32,32,33,33,34,34];
                    this.minColdDmg=[40,50,60,70,80,90,100,110,122,134,   146,158,170,182,194,206,220,234,248,262];
                    this.maxColdDmg=[45,55,65,75,85,95,105,115,127,139,   151,163,175,187,199,211,225,239,253,267];
                    this.duration=[8,9,10,11,12,13,14,15,16,17,   18,19,20,21,22,23,24,25,26,27];
                }
            }
            class IceBolt
            {
                constructor(minColdDmg, maxColdDmg, duration)
                {
                    this.minColdDmg=[3,4,5,6,7,8,9,10,12,14,     16,18,20,22,24,26,29,32,35,38];
                    this.maxColdDmg=[5,6,8,9,11,12,14,15,18,20,  23,25,28,30,33,36,39,42,46,49];
                    this.duration=[6,7.4,8.8,10.2,11.6,13,14.4,15.8,17.2,18.6,   20,21,22.8,24.2,25.6,27,28.4,29.8,31.2,32.6];
                }
            }
            class IceBlast
            {
                constructor(manaCost, minColdDmg, maxColdDmg, duration)
                {
                    this.manaCost=[6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,   11,11.5,12,12.5,13,13.5,14,14,15,15];
                    this.minColdDmg=[8,16,23,31,38,46,54,61,76,91,   106,122,137,152,167,182,205,227,250,273];
                    this.maxColdDmg=[12,21,29,37,45,53,61,69,85,100,   116,132,147,163,179,194,218,241,264,287];
                    this.duration=[3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.6,4.8,   5,5.2,5.4,5.6,5.8,6,6.2,6.4,6.6,6.8];
                }
            }
            class GlacialSpike
            {
                constructor(manaCost, minColdDmg, maxColdDmg, duration)
                {
                    this.manaCost=[10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,    15,15.5,16,16.5,17,17.5,18,18.5,19,19.5];
                    this.minColdDmg=[17,25,33,40,48,56,63,71,85,100,    114,128,143,157,171,185,201,216,232,247];
                    this.maxColdDmg=[26,34,42,51,59,67,84,99,113,    128,143,158,173,188,202,218,234,250,266];
                    this.duration=[2,2.1,2.2,2.3,2.4,2.6,2.7,2.8,2.9,3,    3.2,3.3,3.4,3.5,3.6,3.8,3.9,4,4.1,4.2];
                }
            }
            class ColdMastery
            {
                constructor(coldResist)
                {
                    this.coldResist=[-20,-25,-30,-35,-40,-45,-50,-55,-60,-65,   -70,-75,-80,-85,-90,-95,-100,-105,-110,-115];
                }
            }
            class FrozenArmor
            {
                constructor(defense, duration, coldLenght)
                {
                    this.defense=[30,35,40,45,50,55,60,65,70,75,   80,85,90,95,100,105,110,115,120,125];
                    this.duration=[144,156,168,180,192,204,216,228,240,252,   264,276,288,300,312,324,336,348,360,372];
                    this.coldLenght=[1.2,1.3,1.3,1.5,1.6,1.8,1.9,2,2.1,2.2,   2.4,2.5,2.6,2.7,2.8,3,3.2,3.2,3.3,3.4];
                }
            }
            class ShiverArmor
            {
                constructor(defense, minColdDmg, maxColdDmg, duration)
                {
                    this.defense=[45,51,57,63,69,75,81,87,93,99,   105,111,117,123,129,135,141,147,153,159];
                    this.minColdDmg=[6,8,10,13,15,17,19,21,25,28,   31,34,38,41,44,47,52,56,61,65];
                    this.maxColdDmg=[8,11,14,16,19,22,25,27,31,35,  39,43,46,50,54,58,63,68,73,77];
                    this.duration=[144,156,168,180,192,204,216,228,240,252,   264,276,288,300,312,324,336,348,360,372];
                }
            }
            class ChillingArmor
            {
                constructor(defense, minColdDmg, maxColdDmg, duration)
                {
                    this.defense=[60,67,74,81,88,95,102,109,116,123,   130,137,144,151,158,165,172,179,186,193];
                    this.minColdDmg=[4,5,6,7,9,10,11,12,14,17,   19,21,22,26,28,30,34,37,41,44];
                    this.maxColdDmg=[6,8,10,11,13,15,17,18,21,24,   27,30,33,35,38,41,45,49,53,57];
                    this.duration=[164,176,188,200,212,224,236,248,260,272,   284,296,308,320,332,344,356,368,370,382];
                }
            }
            var frostNova=new FrostNova, blizzard=new Blizzard, frozenOrb=new FrozenOrb, iceBolt=new IceBolt,
            iceBlast=new IceBlast, glacialSpike=new GlacialSpike, coldMastery=new ColdMastery,
            frozenArmor=new FrozenArmor, shiverArmor=new ShiverArmor, chillingArmor=new ChillingArmor;
        }
        //Lightning Spells
        {
            class StaticField
            {
                constructor(radius)
                {
                    this.radius=[3.3,4,4.6,5.3,6,6.6,7.3,8,8.6,9.3,   10,10.6,11.3,12,12.6,13.3,14,14.6,15.3,16];
                }
            }
            class Nova
            {
                constructor(manaCost, minLightDmg, maxLightDmg)
                {
                    this.manaCost=[15,16,17,18,19,20,21,22,23,24,   25,26,27,28,29,30,31,32,33,34];
                    this.minLightDmg=[1,7,13,19,25,31,37,43,50,57,   64,71,78,85,92,99,107,115,123,131];
                    this.maxLightDmg=[20,28,36,44,52,60,68,76,85,93,   103,112,121,130,139,148,158,168,178,188];
                }
            }
            class ThunderStorm
            {
                constructor(minLightDmg, maxLightDmg, duration)
                {
                    this.minLightDmg=[1,11,21,31,41,51,61,71,81,91,   101,111,121,131,141,151,162,173,184,195];
                    this.maxLightDmg=[100,110,120,130,140,150,160,170,180,190,   200,210,220,230,240,250,261,272,283,294];
                    this.duration=[144,168,194,216,240,264,288,312,336,360,    384,408,432,456,480,504,528,552,576,600];
                }
            }
            class ChargedBolt
            {
                constructor(manaCost, minLightDmg, maxLightDmg, numOfBolts)
                {
                    this.manaCost=[3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12];
                    this.minLightDmg=[2,2,3,3,4,4,5,5,6,6,    7,7,8,8,9,9,10,11,12,13];
                    this.maxLightDmg=[4,4,5,5,6,6,7,7,8,8,    9,9,10,10,11,11,12,13,14,15];
                    this.numOfBolts=[3,4,5,6,7,8,9,10,11,12,   13,14,15,16,17,18,19,20,21,22];
                }
            }
            class Lightning
            {
                constructor(manaCost, lightDmg)
                {
                    this.manaCost=[8,8.5,9,9.5,10,10.5,11,11.5,12,12,    13,13,14,14,15,15,16,16,17,17];
                    this.lightDmg=[43,51,60,69,77,86,95,103,116,129,    142,155,168,181,194,207,228,250,272,293];
                }
            }
            class ChainLightning
            {
                constructor(manaCost, lightDmg, numOfTargets)
                {
                    this.manaCost=[9,10,11,12,13,14,15,16,17,18,    19,20,21,22,23,24,25,26,27,28];
                    this.lightDmg=[40,51,62,73,84,95,106,117,130,143,   156,169,182,195,208,221,236,251,266,281];
                    this.numOfTargets=[5,5,5,5,6,6,6,6,6,7,    7,7,7,7,8,8,8,8,8,9];
                }
            }
            class LightningMastery
            {
                constructor(lightDmg)
                {
                    this.lightDmg=[50,62,74,86,98,110,122,134,146,158,   170,182,194,206,218,230,242,254,266,278];
                }
            }
            class Telekinesis
            {
                constructor(minLightDmg, maxLightDmg)
                {
                    this.minLightDmg=[1,2,3,4,5,6,7,8,9,10,   11,12,13,14,15,16,17,18,19,20];
                    this.maxLightDmg=[2,3,4,5,6,7,8,9,10,11,   12,13,14,15,16,17,18,19,20,21];
                }
            }
            class Teleport
            {
                constructor(manaCost)
                {
                    this.manaCost=[24,23,22,21,20,19,18,17,16,15,   14,13,12,11,10,9,8,7,6,5];
                }
            }
            class EnergyShield
            {
                constructor(dmgAbsorbed, duration)
                {
                    this.dmgAbsorbed=[20,25,30,35,40,45,50,55,57,59,   61,63,66,67,69,71,72,73,74,75];
                    this.duration=[144,204,264,324,384,444,504,564,624,684,   744,804,864,924,984,1044,1104,1164,1224,1284];
                }
            }
            var staticField=new StaticField, nova=new Nova, thunderStorm=new ThunderStorm,
            chargedBolt=new ChargedBolt, lightning=new Lightning, chainLightning=new ChainLightning,
            lightningMastery=new LightningMastery, telekinesis=new Telekinesis, teleport=new Teleport, energyShield=new EnergyShield;
        }
        // Fire Spells
        {
            class Inferno
            {
                constructor(manaCost, minFireDmg, maxFireDmg, range)
                {
                    this.manaCost=[4,4,4,4,4,5,5,5,5,5,    5,6,6,6,6,6,7,7,7,7];
                    this.minFireDmg=[12,21,31,40,50,59,68,78,88,98,   108,118,128,139,149,159,170,181,192,203];
                    this.maxFireDmg=[25,34,43,53,62,71,81,90,101,111,    122,132,143,153,164,175,186,197,208,220];
                    this.range=[5.8,5.8,6.5,7.1,7.8,7.8,8.5,9.1,9.8,10.5,   11.1,11.8,12.5,13.1,13.8,14.5,15.1,15.8,16.5,17.1];
                }
            }
            class Blaze
            {
                constructor(manaCost, minFireDmg, maxFireDmg, duration, walkRunSpeed)
                {
                    this.manaCost=[11,11,12,12,13,13,14,14,15,15,    16,16,17,17,18,18,19,19,20,20];
                    this.minFireDmg=[18,28,37,46,56,65,75,84,98,112,   126,140,154,168,182,196,216,234,253,271];
                    this.maxFireDmg=[37,46,56,65,75,84,93,103,117,131,   145,159,173,187,201,215,234,253,271,290];
                    this.duration=[4.6,5.6,6.6,7.6,8.6,9,6,10.6,11.6,12.6,13.6,   14.6,15.6,16.6,17.6,18.6,19.6,20.6,21.6,22.6,23.6];
                    this.walkRunSpeed=[2,4,6,8,10,12,14,16,18,20,   22,24,26,28,30,32,34,36,38,40];
                }
            }
            class FireWall
            {
                constructor(manaCost, minFireDmg, maxFireDmg, radius)
                {
                    this.manaCost=[22,23,24,25,26,27,28,29,30,31,   32,33,34,35,36,37,38,39,40,41];
                    this.minFireDmg=[70,113,156,198,241,283,323,369,435,501,   568,634,700,766,833,899,998,1098,1197,1296];
                    this.maxFireDmg=[94,137,179,222,264,307,346,392,459,525,   591,658,724,790,856,923,1022,1121,1221,1320];
                    this.radius=[4,6,7,8,10,11,12,14,15,16,    18,19,20,22,23,24,26,27,28,30];
                }
            }
            class FireBolt
            {
                constructor(minFireDmg, maxFireDmg)
                {
                    this.minFireDmg=[3,4,6,7,9,10,12,13,15,17,   19,21,23,25,27,29,33,37,41,45];
                    this.maxFireDmg=[6,7,9,10,12,13,15,16,19,22,   25,28,31,34,37,40,45,50,55,60];
                }
            }
            class FireBall
            {
                constructor(manaCost, minFireDmg, maxFireDmg)
                {
                    this.manaCost=[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,   10,10.5,11,11.5,12,12.5,13,13.5,14,14.5];
                    this.minFireDmg=[6,14,21,29,36,43,51,58,71,84,   98,111,124,137,150,163,179,195,211,227];
                    this.maxFireDmg=[15,24,33,41,50,58,67,75,90,104,   118,132,147,161,175,189,206,224,241,258];
                }
            }
            class Meteor
            {
                constructor(manaCost, minFireDmg, maxFireDmg, minFireDmgPerSecond, maxFireDmgPerSecond)
                {
                    this.manaCost=[17,17,18,18,19,19,20,20,21,21,   22,22,23,23,24,24,25,25,26,26];
                    this.minFireDmg=[88,113,138,163,189,214,239,265,308,350,    393,436,479,522,565,608,696,782,869,955];
                    this.maxFireDmg=[110,137,165,192,220,247,275,302,347,392,   437,482,528,573,618,663,752,841,930,1019];
                    this.minFireDmgPerSecond=[35,44,53,63,72,84,93,103,114,126,   138,150,164,175,187,199,213,227,243,257];
                    this.maxFireDmgPerSecond=[58,67,77,89,98,107,117,126,138,150,   164,175,187,199,210,222,236,253,267,281];
                }
            }
            class FireMastery
            {
                constructor(fireDmg)
                {
                    this.fireDmg=[30,37,44,51,58,65,72,79,86,93,    100,107,114,121,128,135,142,149,156,163];
                }
            }
            class Warmth
            {
                constructor(manaRecovery)
                {
                    this.manaRecovery=[30,42,54,66,78,90,102,114,126,138,   150,162,174,186,198,210,222,234,246,258];
                }
            }
            class Enchant
            {
                constructor(manaCost, minFireDmg, maxFireDmg, duration, attackRating)
                {
                    this.manaCost=[25,26,27,28,29,30,31,32,33,34,   35,36,37,38,39,40,41,42,43,44];
                    this.minFireDmg=[8,10,11,13,15,16,18,20,23,27,   31,35,39,43,46,50,56,62,68,74];
                    this.maxFireDmg=[10,13,16,19,21,24,27,29,34,39,   44,49,54,59,64,69,76,83,90,97];
                    this.duration=[144,168,192,216,240,264,288,312,336,360,   384,408,432,456,480,504,528,552,576,600];
                    this.attackRating=[20,29,38,47,56,65,74,83,82,101,    110,119,128,137,146,155,164,173,182,191];
                }
            }
            class Hydra
            {
                constructor(manaCost, minFireDmg, maxFireDmg)
                {
                    this.manaCost=[20,20,21,21,22,22,23,23,24,24,    25,25,26,26,27,27,28,28,29,29];
                    this.minFireDmg=[14,20,26,32,38,43,49,55,63,71,   79,87,95,103,111,119,129,139,149,159];
                    this.maxFireDmg=[19,27,34,41,48,55,62,68,77,86,    95,104,113,122,131,140,152,163,174,185];
                }
            }
            var inferno=new Inferno, blaze=new Blaze, fireWall=new FireWall, fireBolt=new FireBolt,
            fireBall=new FireBall, meteor=new Meteor, fireMastery=new FireMastery, warmth=new Warmth,
            enchant=new Enchant, hydra=new Hydra;
        }
    }
    //Druid
    {
        //Elemental
        {
            class FireStorm
            {
                constructor(minFireDmg, maxFireDmg)
                {
                    this.minFireDmg=[3,7,10,14,17,21,24,28,32,37,   42,46,51,56,60,65,71,77,83,89];
                    this.maxFireDmg=[7,10,14,17,21,24,28,31,36,41,  45,50,55,59,64,69,76,83,90,97];
                }
            }
            class MoltenBoulder
            {
                constructor(manaCost, minPhysicalDamage, maxPhysicalDamage, minFireDmg, maxFireDmg, minFireDmgPerSecond, maxFireDmgPerSecond)
                {
                    this.manaCost=[10,10,11,11,12,12,13,13,14,14,     15,15,16,16,17,17,18,18,19,19];
                    this.minDamage=[6,6,10,14,18,22,26,30,34,41,   48,55,62,69,76,83,90,100,110,120];
                    this.maxDamage=[12,12,17,22,27,32,37,42,47,55,   63,71,79,87,95,103,111,122,133,144];
                    this.minFireDmg=[6,6,10,15,19,23,28,32,36,44,    51,59,66,74,82,89,97,108,118,129];
                    this.maxFireDmg=[12,12,18,23,29,34,39,45,50,59,   68,76,85,93,102,111,119,131,143,155];
                    this.minFireDmgPerSecond=[11,19,28,36,44,52,60,69,79,90,   100,111,121,132,142,153,166,179,192,205];
                    this.maxFireDmgPerSecond=[16,24,32,41,49,57,65,73,84,94,   105,116,126,137,147,158,171,183,196,209];
                }
            }
            class Fissure
            {
                constructor(minFireDmg, maxFireDmg)
                {
                    this.minFireDmg=[15,21,27,33,39,45,51,57,69,81,    93,105,117,129,141,153,165,177,189,201];
                    this.maxFireDmg=[25,31,37,43,49,55,61,67,79,91,   103,115,127,139,151,163,175,187,199,211];
                }
            }
            class Volcano
            {
                constructor(minDamage, maxDamage, minFireDmg, maxFireDmg)
                {
                    this.minDamage=[8,8,11,13,15,17,20,22,24,29,    33,38,42,47,51,56,60,67,73,80];
                    this.maxDamage=[10,11,13,15,17,20,22,24,26,31,   35,40,44,49,53,58,62,69,76,82];
                    this.minFireDmg=[8,11,13,15,17,20,22,24,29,33,   38,42,47,51,56,60,67,73,80,87];
                    this.maxFireDmg=[11,13,15,17,20,22,24,26,31,35,   40,44,49,53,58,62,69,76,82,89];
                }
            }
            class Armageddon
            {
                constructor(minDamage, maxDamage, minFireDmg, maxFireDmg, minFireDmgPerSecond, maxFireDmgPerSecond)
                {
                    this.minDamage=[18,"missing","missing","missing","missing","missing","missing","missing","missing","missing","missing","missing","missing","missing","missing","missing","missing","missing","missing","missing"];
                    this.maxDamage=[26,"missing","missing","missing","missing","missing","missing","missing","missing","missing","missing","missing","missing","missing","missing","missing","missing","missing","missing","missing"];
                    this.minFireDmg=[25,40,55,70,85,100,115,130,150,170,   190,210,230,250,270,290,315,340,365,390];
                    this.maxFireDmg=[75,91,107,123,139,155,171,187,209,231,   253,275,297,319,341,363,390,417,444,471];
                    this.minFireDmgPerSecond=[11,19,28,36,44,52,60,69,79,90,   100,111,121,132,142,153,166,179,192,205];
                    this.maxFireDmgPerSecond=[16,24,32,41,49,57,65,73,84,94,   105,116,126,137,147,158,171,183,196,209];
                }
            }
            class Twister
            {
                constructor(minPhysicalDamage, maxPhysicalDamage)
                {
                    this.minPhysicalDamage=[6,8,10,12,14,16,18,20,23,27,   30,34,37,41,44,48,52,57,61,66];
                    this.maxPhysicalDamage=[8,10,12,14,16,18,20,22,25,29,   32,36,39,43,46,50,54,59,63,68];
                }
            }
            class Tornado
            {
                constructor(minPhysicalDamage, maxPhysicalDamage)
                {
                    this.minPhysicalDamage=[25,29,38,48,57,67,76,86,95,112,    128,145,161,178,194,211,227,251,274,298];
                    this.maxPhysicalDamage=[35,41,50,60,69,79,88,97,107,125,   142,160,178,195,213,231,248,273,298,323];
                }
            }
            class Hurricane
            {
                constructor(minColdDmg, maxColdDmg)
                {
                    this.minColdDmg=[25,32,39,46,53,60,67,74,84,94,   103,114,124,134,144,154,181,195,210,224];
                    this.maxColdDmg=[50,57,64,71,78,85,92,99,109,119,   129,139,149,159,169,179,211,225,239,253];
                }
            }
            class ArcticBlast
            {
                constructor(manaCost, minColdDmg, maxColdDmg, duration, radius)
                {
                    this.manaCost=[4,5,6,7,7,8,9,10,10,11,    12,13,14,14,15,16,17,17,18,19];
                    this.minColdDmg=[8,14,20,26,33,39,45,51,58,66,    73,80,87,94,101,108,116,123,131,139];
                    this.maxColdDmg=[15,21,28,34,40,46,53,59,66,74,   81,89,96,103,111,118,126,135,143,151];
                    this.duration=[4,4.6,5.2,5.8,6.4,7,7.6,8.2,8.8,9.4,   10,10.6,11.2,11.8,12.4,13,13.6,14.2,14.8,15.4];
                    this.radius=[5.3,6,6,6.6,6.6,7.3,7.3,8,8,8.6,    8.6,9.3,9.3,10,10,10.6,10.6,11.3,11.3,12];
                }
            }
            class CycloneArmor
            {
                constructor(manaCost, dmgAbsorbed)
                {
                    this.manaCost=[5,6,7,8,9,10,11,12,13,14,    15,16,17,18,19,20,21,22,23,24];
                    this.dmgAbsorbed=[40,52,64,76,88,100,112,124,136,148,    160,172,184,196,208,220,232,244,256,268];
                }
            }
            var fireStorm=new FireStorm, moltenBoulder=new MoltenBoulder, fissure=new Fissure, volcano=new Volcano,
            armageddon=new Armageddon, twister=new Twister, tornado=new Tornado, hurricane=new Hurricane,
            arcticBlast=new ArcticBlast, cycloneArmor=new CycloneArmor;
        }
        //Shape Shifting
        {
            class Werewolf
            {
                constructor(attackSpeed, attackRating)
                {
                    this.attackSpeed=[20,28,35,40,45,48,51,53,56,57,    59,61,62,63,64,66,66,67,68,68];
                    this.attackRating=[50,65,80,95,110,125,140,155,170,185,   200,215,230,245,260,275,290,205,320,335];
                }
            }
            class FeralRage
            {
                constructor(damagePrecent, attackRating, lifeLeech, velocity)
                {
                    this.damagePrecent=[50,55,60,65,70,75,80,85,90,95,    100,105,110,115,120,125,130,135,140,145];
                    this.attackRating=[20,30,40,50,60,70,80,90,100,110,   120,130,140,150,160,170,190,190,200,210];
                    this.lifeLeech=[12,16,20,24,28,32,36,40,44,48,   52,56,60,64,68,72,76,80,84,88];
                    this.velocity=[31,36,36,40,40,43,43,45,45,47,    47,49,49,50,50,52,52,54,54,55];
                }
            }
            class Rabies
            {
                constructor(minPoisonDmg, maxPoisonDmg, duration, attackRating)
                {
                    this.minPoisonDmg=[18,34,52,73,96,121,150,180,219,261,    306,354,405,460,517,578,658,742,831,924];
                    this.maxPoisonDmg=[43,61,82,105,131,159,190,223,264,308,  356,406,460,517,577,640,723,810,901,996];
                    this.duration=[4,4.4,4.8,5.2,5.6,6,6.4,6.8,7.2,7.6,   8,8.4,8.8,9.2,9.6,10,10.4,10.8,11.2,11.6];
                    this.attackRating=[50,60,70,80,90,100,110,120,130,140,    150,160,170,180,190,200,210,220,230,240];
                }
            }
            class Fury
            {
                constructor(attackRating, damagePrecent, numOfHits)
                {
                    this.attackRating=[50,60,70,80,90,100,110,120,130,140,    150,160,170,180,190,200,210,220,230,240];
                    this.damagePrecent=[100,117,134,151,168,185,202,219,236,253,   270,287,304,321,338,355,372,389,406,423];
                    this.numOfHits=[2,3,4,5,5,5,5,5,5,5,    5,5,5,5,5,5,5,5,5,5,];
                }
            }
            class Lycanthropy
            {
                constructor(bonusLife, duration)
                {
                    this.bonusLife=[20,25,30,35,40,45,50,55,60,65,    70,75,80,85,90,95,100,105,110,115];
                    this.duration=[40,60,80,100,120,140,160,180,200,220,    240,260,280,300,320,340,360,380,400,420];
                }
            }
            class FireClaws
            {
                constructor(minFireDmg, maxFireDmg, attackRating)
                {
                    this.minFireDmg=[15,23,31,39,47,55,63,71,83,95,    107,119,131,143,155,157,187,207,227,247];
                    this.maxFireDmg=[20,28,36,44,52,60,68,76,88,100,   112,124,136,148,160,172,194,216,238,260];
                    this.attackRating=[50,65,80,95,110,125,140,155,170,185,   200,215,230,245,260,275,290,305,320,335];
                }
            }
            class Hunger
            {
                constructor(attackRating, lifeManaSteal)
                {
                    this.attackRating=[50,60,70,80,90,100,110,120,130,140,    150,160,170,180,190,200,210,220,230,240];
                    this.lifeManaSteal=[72,90,104,116,125,132,138,143,149,152,   156,159,162,165,167,170,171,173,174,176];
                }
            }
            class Werebear
            {
                constructor(damagePrecent, defense)
                {
                    this.damagePrecent=[55,63,71,79,87,95,103,111,119,127,   135,143,151,159,167,175,183,191,199,207];
                    this.defense=[25,31,37,43,49,55,61,67,73,79,   85,91,97,103,109,115,121,127,133,139];
                }
            }
            class Maul
            {
                constructor(damagePrecent, attackRating, attackSpeed, duration)
                {
                    this.damagePrecent=[60,90,120,150,180,210,240,270,300,330,   360,390,420,450,480,510,540,570,600,630];
                    this.attackRating=[40,55,60,75,80,95,110,125,140,155,   170,185,200,215,230,245,260,275,290,305];
                    this.attackSpeed=[9,12,12,15,15,18,18,21,21,24,   24,27,27,30,30,33,33,36,36,39];
                    this.duration=[0.9,1.3,1.6,1.9,2.2,2.3,2.5,2.6,2.7,2.8,    2.9,3,3,3.1,3.2,3.2,3.2,3.3,3.3,3.4];
                }
            }
            class ShockWave
            {
                constructor(minPhysicalDamage, maxPhysicalDamage, duration)
                {
                    this.minPhysicalDamage=[10,13,16,19,23,26,29,32,37,43,    48,53,48,64,69,74,81,89,96,103];
                    this.maxPhysicalDamage=[21,24,27,30,33,36,39,43,48,53,    58,64,69,74,79,85,92,99,107,114];
                    this.duration=[1.6,2.2,2.8,3.4,4,4.6,5.2,5.8,6.4,7,    7.6,8.2,8.8,9.4,10,10.6,11.2,11.8,12.4,13];
                }
            }
            var werewolf=new Werewolf, feralRage=new FeralRage, rabies=new Rabies, fury=new Fury,
            lycanthropy=new Lycanthropy, fireClaws=new FireClaws, hunger=new Hunger,
            werebear=new Werebear, maul=new Maul, shockWave=new ShockWave;
        }
        //Summoning
        {
            class OakSage
            {
                constructor(manaCost, hitPoints, bonusLife, radius)
                {
                    this.manaCost=[15,16,17,18,19,20,21,22,23,24,    25,26,27,28,29,30,31,32,33,34];
                    this.hitPoints=[60,78,96,114,132,150,168,186,204,222,    240,258,276,294,312,330,348,366,384,402];
                    this.bonusLife=[30,35,40,45,50,55,60,65,70,75,   80,85,90,95,100,105,110,115,120,125];
                    this.radius=[20,21.3,22.6,24,25.3,26.6,28,29.3,30.6,32,   33.3,34.6,36,37.3,38.6,40,41.3,42.6,44,45.3];
                }
            }
            class HeartOfWolverine
            {
                constructor(manaCost, hitPoints, damagePrecent, attackRating, radius)
                {
                    this.manaCost=[20,21,22,23,24,25,26,27,28,29,    30,31,32,33,34,35,36,37,38,39];
                    this.hitPoints=[136,170,204,238,272,306,340,374,408,442,    476,510,544,578,612,646,680,714,748,782];
                    this.damagePrecent=[20,27,34,41,48,55,62,69,76,83,   90,97,104,111,118,125,132,139,146,153];
                    this.attackRating=[25,32,39,46,53,60,67,74,81,88,    95,102,109,116,123,130,137,144,151,158];
                    this.radius=[20,21.3,22.6,24,25.3,26.6,28,29.3,30.6,32,   33.3,34.6,36,37.3,38.6,40,41.3,42.6,44,45.3];
                }
            }
            class SpiritOfBarbs
            {
                constructor(manaCost, hitPoints, dmgReturned, radius)
                {
                    this.manaCost=[25,26,27,28,29,30,31,32,33,34,    35,36,37,38,39,40,41,42,43,44];
                    this.hitPoints=[213,266,319,372,426,479,532,585,639,692,   745,798,852,905,958,1011,1065,1118,1171,1224];
                    this.dmgReturned=[50,70,90,110,130,150,170,190,210,230,   250,270,290,310,330,350,370,390,410,430];
                    this.radius=[20,21.3,22.6,24,25.3,26.6,28,29.3,30.6,32,   33.3,34.6,36,37.3,38.6,40,41.3,42.6,44,45.3];
                }
            }
            class Raven
            {
                constructor(numOfRavens, minPhysicalDamage, maxPhysicalDamage, numOfHits, attackRating)
                {
                    this.numOfRavens=[1,2,3,4,5,5,5,5,5,5,   5,5,5,5,5,5,5,5,5,5];
                    this.minPhysicalDamage=[2,3,4,5,6,7,8,9,10,11,    12,13,14,15,16,17,18,19,20,21];
                    this.maxPhysicalDamage=[4,5,6,7,8,9,10,11,12,13,  14,15,16,17,18,19,20,21,22,23];
                    this.numOfHits=[12,13,14,15,16,17,18,19,20,21,    22,23,24,25,26,27,28,29,30,31];
                    this.attackRating=[100,130,160,190,220,250,280,310,340,370,   400,430,460,490,520,550,580,610,640,670];
                }
            }
            class SummonSpiritWolf
            {
                constructor(numOfWolves, minColdDmg, maxColdDmg, attackRating, defense, hitPoints)
                {
                    this.numOfWolves=[1,2,3,4,5,5,5,5,5,5,   5,5,5,5,5,5,5,5,5,5];
                    this.minColdDmg=[2,3,4,6,7,8,9,10,13,15,   18,20,22,25,27,30,34,39,44,49];
                    this.maxColdDmg=[6,7,8,9,10,12,13,14,16,19,   21,24,26,28,31,33,38,43,48,52];
                    this.attackRating=[50,75,100,125,150,175,200,225,250,275,   300,325,350,375,400,425,450,475,500,550];
                    this.defense=[50,60,70,80,90,100,110,120,130,140,   150,160,170,180,190,200,210,220,230,240];
                    this.hitPoints=[143,156,169,182,195,208,221,234,247,260,    273,286,299,312,325,338,351,364,377,390];
                }
            }
            class SummonDireWolf
            {
                constructor(numOfWolves, bonusLife, minPhysicalDamage, maxPhysicalDamage, hitPoints, defense)
                {
                    this.numOfWolves=[1,2,3,3,3,3,3,3,3,3, 3,3,3,3,3,3,3,3,3,3];
                    this.bonusLife=[50,75,100,125,150,175,200,225,250,275,   300,325,350,375,400,425,450,475,500,525];
                    this.minPhysicalDamage=[7,9,11,13,15,17,19,21,24,27,   30,33,36,39,42,45,51,57,63,69];
                    this.maxPhysicalDamage=[12,14,16,18,20,22,24,26,29,32,  35,38,41,44,47,50,56,62,68,74];
                    this.hitPoints=[345,399,453,507,561,615,669,723,777,831,   885,939,993,1047,1101,1155,1209,1263,1317,1371];
                    this.defense=[4,8,12,16,20,24,28,32,36,40,   44,48,52,56,60,64,68,72,76,80];
                }
            }
            class SummonGrizzly
            {
                constructor(minPhysicalDamage, maxPhysicalDamage, damagePrecent, hitPoints)
                {
                    this.minPhysicalDamage=[37,54,72,93,115,140,166,195,235,279,   326,376,428,484,543,605,684,767,854,945];
                    this.maxPhysicalDamage=[75,94,116,139,165,192,222,253,297,344,   393,446,502,561,622,687,769,855,945,1039];
                    this.damagePrecent=[25,35,45,55,65,75,85,95,105,115,   125,135,1451,55,165,175,185,195,205,215];
                    this.hitPoints=[825,"missing","missing","missing","missing","missing","missing","missing","missing","missing",    "missing","missing","missing","missing","missing","missing","missing","missing","missing","missing"];
                }
            }
            class PoisonCreeper
            {
                constructor(hitPoints, minPoisonDmg, maxPoisonDmg)
                {
                    this.hitPoints=[50,62,75,87,100,112,125,137,150,162,   175,187,200,212,225,237,250,262,275,287];
                    this.minPoisonDmg=[4,7,10,12,15,18,21,23,28,33,   37,42,47,51,56,61,67,73,78,84];
                    this.maxPoisonDmg=[6,8,12,14,17,19,22,25,30,34,   39,44,48,53,58,62,68,74,80,86];
                }
            }
            class CarrionVine
            {
                constructor(hitPoints, heal)
                {
                    this.hitPoints=[95,118,142,166,190,2213,237,261,285,308,    332,356,380,403,427,451,475,498,522,546];
                    this.heal=[4,5,6,6,7,7,8,8,8,9,    9,9,9,9,10,10,10,10,10,10];
                }
            }
            class SolarCreeper
            {
                constructor(manaCost, hitPoints, manaRecovery)
                {
                    this.manaCost=[14,15,16,17,18,19,20,21,22,23,   24,25,26,27,28,29,30,31,32,33];
                    this.hitPoints=[165,198,231,264,297,330,363,396,429,462,    495,528,561,594,627,660,693,726,759,792];
                    this.manaRecovery=[3,4,5,6,7,8,9,10,11,12,   13,14,15,16,17,18,19,20,21,22];
                }
            }
            var oakSage=new OakSage, heartOfWolverine=new HeartOfWolverine, spiritsOFBarbs=new SpiritOfBarbs,
            raven=new Raven, summonSpiritWolf=new SummonSpiritWolf, summonDireWolf=new SummonDireWolf,
            summonGrizzly=new SummonGrizzly, poisonCreeper=new PoisonCreeper, carrionVine=new CarrionVine, solarCreeper=new SolarCreeper;
        }
    }
}

// Skill descriptions
{
function descriptionUpdate(i)
{
    switch(i)
    {
        case 0:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Jab";
                    document.getElementById("skillDescription").innerHTML="Attacks with a series of rapid thrusts using a javelin or spear class weapon<br>Multiple hits";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating +"+jab.attackRating[baseSkillPoints1[i]]+"%<br>Damage: "+jab.damagePrecent[baseSkillPoints1[i]]+"%<br>Mana cost: "+jab.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating +"+jab.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: "+jab.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Mana cost: "+jab.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Fist Of Fire";
                    document.getElementById("skillDescription").innerHTML="Charge-up skill<br>Consecutive hits add fire damage to finishing moves<br>Can only be used with claw class weapons<br>must use a dragon finishing move or normal attack to release charges";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating +"+fistOfFire.attackRating[baseSkillPoints1[i]]+"%<br>Charge 1 - fire damage: "+fistOfFire.minFireDmg1[baseSkillPoints1[i]]+"-"+fistOfFire.maxFireDmg3[baseSkillPoints1[i]]+"<br>Charge 2 - fire damage radius: 4 yards<br>Charge 3 - average fire damage: "+fistOfFire.minFireDmg3[baseSkillPoints1[i]]+"-"+fistOfFire.maxFireDmg3[baseSkillPoints1[i]]+" per second<br>Mana cost: 2<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating +"+fistOfFire.attackRating[baseSkillPoints1[i]-1]+"%<br>Charge 1 - fire damage: "+fistOfFire.minFireDmg1[baseSkillPoints1[i]-1]+"-"+fistOfFire.maxFireDmg3[baseSkillPoints1[i]-1]+"<br>Charge 2 - fire damage radius: 4 yards<br>Charge 3 - average fire damage: "+fistOfFire.minFireDmg3[baseSkillPoints1[i]-1]+"-"+fistOfFire.maxFireDmg3[baseSkillPoints1[i]-1]+" per second<br>Mana cost: 2<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Fist Of Fire receives bonuses from:</span><br>Phoenix Strike: +12% fire damage per level [+"+12*baseSkillPoints1[5]+"%]";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }  
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Skeleton Mastery";
                    document.getElementById("skillDescription").innerHTML="Passive - Increased life and damage of raised skeletons and revived creatures";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Skeletons life: +"+skeletonMastery.skeletonLife[baseSkillPoints1[i]]+"<br>Skeletons damage: +"+skeletonMastery.skeletonDamage[baseSkillPoints1[i]]+"<br>Monsters life: +"+skeletonMastery.bonusLife[baseSkillPoints1[i]]+"%<br>Monsters damage: +"+skeletonMastery.damagePrecent[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Skeletons life: +"+skeletonMastery.skeletonLife[baseSkillPoints1[i]-1]+"<br>Skeletons damage: +"+skeletonMastery.skeletonDamage[baseSkillPoints1[i]-1]+"<br>Monsters life: +"+skeletonMastery.bonusLife[baseSkillPoints1[i]-1]+"%<br>Monsters damage: +"+skeletonMastery.damagePrecent[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Howl";
                    document.getElementById("skillDescription").innerHTML="Sends nearby monsters scrambling away in fear<br>Mana cost: 4";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Radius: "+howl.radius[baseSkillPoints1[i]]+" yards<br>Monsters runs up to 16 yards<br>Duration: "+howl.duration[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Radius: "+howl.radius[baseSkillPoints1[i]-1]+" yards<br>Monsters runs up to 16 yards<br>Duration: "+howl.duration[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Prayer";
                    document.getElementById("skillDescription").innerHTML="When active, aura slowly regenerates the life of you and your party";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Heals: "+prayer.heal[baseSkillPoints1[i]]+" <br>Radius: "+prayer.radius[baseSkillPoints1[i]]+" yards <br>Mana cost: "+prayer.manaCost[baseSkillPoints1[0]]+" per second";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Heals: "+prayer.heal[baseSkillPoints1[i]-1]+" <br>Radius: "+prayer.radius[baseSkillPoints1[0]-1]+" yards <br>Mana cost: "+prayer.manaCost[baseSkillPoints1[i]-1]+" per second <br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Frost Nova";
                    document.getElementById("skillDescription").innerHTML="Creates an expanding ring of ice that damages and slows all nearby enemies";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Cold damage: "+frostNova.minColdDmg[baseSkillPoints1[i]]+"-"+frostNova.maxColdDmg[baseSkillPoints1[i]]+"<br>Cold lenght: "+frostNova.duration[baseSkillPoints1[i]]+" seconds<br>Mana cost: "+frostNova.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Cold damage: "+frostNova.minColdDmg[baseSkillPoints1[i]-1]+"-"+frostNova.maxColdDmg[baseSkillPoints1[i]-1]+"<br>Cold lenght: "+frostNova.duration[baseSkillPoints1[i]-1]+" seconds<br>Mana cost: "+frostNova.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Frost Nova receives bonuses from:</span><br>Blizzard: +10% cold damage per level [+"+10*baseSkillPoints1[1]+"%]<br>Frozen Orb: +10% cold damage per level [+"+10*baseSkillPoints1[2]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Fire Storm";
                    document.getElementById("skillDescription").innerHTML="Unleash fiery chaos to burn your enemies<br>Mana cost: 4";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Average fire damage: "+fireStorm.minFireDmg[baseSkillPoints1[i]]+"-"+fireStorm.maxFireDmg[baseSkillPoints1[i]]+" per second<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Average fire damage: "+fireStorm.minFireDmg[baseSkillPoints1[i]-1]+"-"+fireStorm.maxFireDmg[baseSkillPoints1[i]-1]+" per second<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Fire Storm receives bonuses from:</span><br>Molten Boulder: +23% fire damage per level [+"+23*baseSkillPoints1[1]+"%]<br>Fissure: +23% fire damage per level [+"+23*baseSkillPoints1[2]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 1:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Impale";
                    document.getElementById("skillDescription").innerHTML="Increased attack damage but rapidly degrades the weapon<br>Always hit<br>Uninterruptable";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Damage +"+impale.damagePrecent[baseSkillPoints1[i]]+"%<br>Slow enemies: "+impale.slow[baseSkillPoints1[i]]+"%<br>Chance of losing durability: "+impale.weaponDurability[baseSkillPoints1[i]]+"%<br>Mana cost: 3<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Damage +"+impale.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Slow enemies: "+impale.slow[baseSkillPoints1[i]-1]+"%<br>Chance of losing durability: "+impale.weaponDurability[baseSkillPoints1[i]-1]+"%<br>Mana cost: 3<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Claws Of Thunder";
                    document.getElementById("skillDescription").innerHTML="Charge-up skill<br>Consecutive hits add lightning damage to finishing moves<br>Can only be used with claw class weapons<br>must use a dragon finishing move or normal attack to release charges";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating +"+clawsOfThunder.attackRating[baseSkillPoints1[i]]+"%<br>Charge 1 - lightning damage: 1-"+clawsOfThunder.lightDmg1[baseSkillPoints1[i]]+"<br>Charge 2 - nova damage: 1-"+clawsOfThunder.lightDmg2[baseSkillPoints1[i]]+"<br>Charge 3 - charged bolt damage: "+clawsOfThunder.lightDmg3[baseSkillPoints1[i]]+"<br>Mana cost: 4<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating +"+clawsOfThunder.attackRating[baseSkillPoints1[i]-1]+"%<br>Charge 1 - lightning damage: 1-"+clawsOfThunder.lightDmg1[baseSkillPoints1[i]-1]+"<br>Charge 2 - nova damage: 1-"+clawsOfThunder.lightDmg2[baseSkillPoints1[i]-1]+"<br>Charge 3 - charged bolt damage: "+clawsOfThunder.lightDmg3[baseSkillPoints1[i]-1]+"<br>Mana cost: 4<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Claws Of Thunder receives bonuses from:</span><br>Phoenix Strike: +8% lightning damage per level [+"+8*baseSkillPoints1[5]+"%]";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Golem Mastery";
                    document.getElementById("skillDescription").innerHTML="Enhances speed and life of all your golems";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Life: +"+golemMastery.bonusLife[baseSkillPoints1[i]]+"%<br>Attack rating: +"+golemMastery.attackRating[baseSkillPoints1[i]]+"%<br>Run/Walk speed: +"+golemMastery.velocity[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Life: +"+golemMastery.bonusLife[baseSkillPoints1[i]-1]+"%<br>Attack rating: +"+golemMastery.attackRating[baseSkillPoints1[i]-1]+"%<br>Run/Walk speed: +"+golemMastery.velocity[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Taunt";
                    document.getElementById("skillDescription").innerHTML="Enrages a monster into relentlessly attacking<br>Mana cost: 3";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Target's attack rating: "+taunt.attackRating[baseSkillPoints1[i]]+"%<br>Enemy damage: "+taunt.damagePrecent[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Target's attack rating: "+taunt.attackRating[baseSkillPoints1[i]-1]+"%<br>Enemy damage: "+taunt.damagePrecent[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Cleansing";
                    document.getElementById("skillDescription").innerHTML="When active, aura reduces the lenght of time you and your party will remain poisoned or cursed";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Duration reduced by "+cleansing.durationReduction[baseSkillPoints1[i]]+"%<br>Radius: "+cleansing.radius[baseSkillPoints1[i]]+" yards <br>";
                    document.getElementById("currentSkillInfo").innerHTML="Prayer: +"+prayer.heal[baseSkillPoints1[0]-1]+" life healed every 2 seconds<br><br>Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Duration reduced by "+cleansing.durationReduction[baseSkillPoints1[i]-1]+"%<br>Radius: "+cleansing.radius[baseSkillPoints1[i]-1]+" yards <br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Cleansing receives bonuses from:</span><br>Prayer";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Blizzard";
                    document.getElementById("skillDescription").innerHTML="Summons massive shards of ice to destroy your enemies<br>Duration: 4 seconds";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Cold damage: "+blizzard.minColdDmg[baseSkillPoints1[i]]+"-"+blizzard.maxColdDmg[baseSkillPoints1[i]]+"<br>Mana cost: "+blizzard.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Cold damage: "+blizzard.minColdDmg[baseSkillPoints1[i]-1]+"-"+blizzard.maxColdDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: "+blizzard.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Blizzard receives bonuses from:</span><br>Ice Bolt: +5% cold damage per level [+"+5*baseSkillPoints1[3]+"%]<br>Ice Blast: +5% cold damage per level [+"+5*baseSkillPoints1[4]+"%]<br>Glacial Spike: +5% cold damage per level [+"+5*baseSkillPoints1[5]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Molten Boulder";
                    document.getElementById("skillDescription").innerHTML="Launch a boulder of flaming hot magma that kncoks back your enemies";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Damage: "+moltenBoulder.minDamage[baseSkillPoints1[i]]+"-"+moltenBoulder.maxDamage[baseSkillPoints1[i]]+"<br>Fire damage: "+moltenBoulder.minFireDmg[baseSkillPoints1[i]]+"-"+moltenBoulder.maxFireDmg[baseSkillPoints1[i]]+"<br>Average fire damage: "+moltenBoulder.minFireDmgPerSecond[baseSkillPoints1[i]]+"-"+moltenBoulder.maxFireDmgPerSecond[baseSkillPoints1[i]]+"<br>Mana cost: "+moltenBoulder.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Damage: "+moltenBoulder.minDamage[baseSkillPoints1[i]-1]+"-"+moltenBoulder.maxDamage[baseSkillPoints1[i]-1]+"<br>Fire damage: "+moltenBoulder.minFireDmg[baseSkillPoints1[i]-1]+"-"+moltenBoulder.maxFireDmg[baseSkillPoints1[i]-1]+"<br>Average fire damage: "+moltenBoulder.minFireDmgPerSecond[baseSkillPoints1[i]-1]+"-"+moltenBoulder.maxFireDmgPerSecond[baseSkillPoints1[i]-1]+"<br>Mana cost: "+moltenBoulder.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Molten Boulder receives bonuses from:</span><br>Volcano: +12% damage per level [+"+12*baseSkillPoints1[3]+"%]<br>Fire Storm: +8% fire damage per level [+"+8*baseSkillPoints1[0]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 2:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Fend";
                    document.getElementById("skillDescription").innerHTML="Attacks all adjacent targets";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating +"+fend.attackRating[baseSkillPoints1[i]]+"%<br>Damage: "+fend.damagePrecent[baseSkillPoints1[i]]+"%<br>Mana cost: 5<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating +"+fend.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: "+fend.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Mana cost: 5<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Blades Of Ice";
                    document.getElementById("skillDescription").innerHTML="Charge-up skill<br>Consecutive hits add cold damage to finishing moves<br>Can only be used with claw class weapons<br>must use a dragon finishing move or normal attack to release charges";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating +"+bladesOfIce.attackRating[baseSkillPoints1[i]]+"%<br>Charge 1 - cold damage: "+bladesOfIce.minColdDmg1[baseSkillPoints1[i]]+"-"+bladesOfIce.maxColdDmg1[baseSkillPoints1[i]]+"<br>Charge 2 - cold damage radius: 4 yards<br>Charge 3 - freezes for "+bladesOfIce.duration[baseSkillPoints1[i]]+" seconds<br>Mana cost: 3<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating +"+bladesOfIce.attackRating[baseSkillPoints1[i]-1]+"%<br>Charge 1 - cold damage: "+bladesOfIce.minColdDmg1[baseSkillPoints1[i]-1]+"-"+bladesOfIce.maxColdDmg1[baseSkillPoints1[i]-1]+"<br>Charge 2 - cold damage radius: 4 yards<br>Charge 3 - freezes for "+bladesOfIce.duration[baseSkillPoints1[i]-1]+" seconds<br>Mana cost: 3<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Blades Of Ice receives bonuses from:</span><br>Phoenix Strike: +8% cold damage per level [+"+8*baseSkillPoints1[5]+"%]";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Summon Resist";
                    document.getElementById("skillDescription").innerHTML="Passive - Increased the resistances of all summoned creatures";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Resist all: +"+summonResist.resistAll[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Resist all: +"+summonResist.resistAll[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Battle Cry";
                    document.getElementById("skillDescription").innerHTML="Fearsome cry that decrasses enemies defense and damage<br>Radius: 3.3 yards<br>Mana cost: 5";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Enemy damage: "+battleCry.damagePrecent[baseSkillPoints1[i]]+"%<br>Enemy defense: "+battleCry.monsterArmor[baseSkillPoints1[i]]+"%<br>Duration: "+battleCry.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Enemy damage: "+battleCry.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Enemy defense: "+battleCry.monsterArmor[baseSkillPoints1[i]-1]+"%<br>Duration: "+battleCry.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Meditation";
                    document.getElementById("skillDescription").innerHTML="When active, aura increased mana recovery for you and your party";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Mana recovery rate: "+meditation.manaRecovery[baseSkillPoints1[i]]+"%<br>Radius: "+meditation.radius[baseSkillPoints1[i]]+" yards <br>";
                    document.getElementById("currentSkillInfo").innerHTML="Prayer: +"+prayer.heal[baseSkillPoints1[0]-1]+" life healed every 2 seconds<br><br>Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Mana recovery rate: "+meditation.manaRecovery[baseSkillPoints1[i]-1]+"%<br>Radius: "+meditation.radius[baseSkillPoints1[i]-1]+" yards <br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Meditation receives bonuses from:</span><br>Prayer";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Frozen Orb";
                    document.getElementById("skillDescription").innerHTML="Creates a magical globe that sprays a torrent of ice bolts to lay waste to your enemies";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Cold damage: "+frozenOrb.minColdDmg[baseSkillPoints1[i]]+"-"+frozenOrb.maxColdDmg[baseSkillPoints1[i]]+"<br>Cold lenght: "+frozenOrb.duration[baseSkillPoints1[i]]+" seconds<br>Mana cost: "+frozenOrb.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Cold damage: "+frozenOrb.minColdDmg[baseSkillPoints1[i]-1]+"-"+frozenOrb.maxColdDmg[baseSkillPoints1[i]-1]+"<br>Cold lenght: "+frozenOrb.duration[baseSkillPoints1[i]-1]+" seconds<br>Mana cost: "+frozenOrb.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Frozen Orb receives bonuses from:</span><br>Ice Bolt: +2% cold damage per level [+"+2*baseSkillPoints1[3]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }  
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Fissure";
                    document.getElementById("skillDescription").innerHTML="Open volcanic vents below your enemies, burning them to a crisp<br>Duration: 1.6 seconds<br>Mana cost: 15";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Fire damage: "+fissure.minFireDmg[baseSkillPoints1[i]]+"-"+fissure.maxFireDmg[baseSkillPoints1[i]]+" per second<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Fire damage: "+fissure.minFireDmg[baseSkillPoints1[i]-1]+"-"+fissure.maxFireDmg[baseSkillPoints1[i]-1]+" per second<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Fissure receives bonuses from:</span><br>Fire Storm: +12% fire damage per level [+"+12*baseSkillPoints1[0]+"%]<br>Volcano: +12% fire damage per level [+"+12*baseSkillPoints1[3]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 3:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Power Strike";
                    document.getElementById("skillDescription").innerHTML="Adds lightning damage to attacks with javelin and spear class weapons";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating +"+powerStrike.attackRating[baseSkillPoints1[i]]+"%<br>Lightning damage: 1-"+powerStrike.lightDmg[baseSkillPoints1[i]]+"<br>Mana cost: "+powerStrike.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating +"+powerStrike.attackRating[baseSkillPoints1[i]-1]+"%<br>Lightning damage: 1-"+powerStrike.lightDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: "+powerStrike.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Power Strike receives bonuses from:</span><br>Lightning Bolt: +14% lightning damage per level [+"+14*baseSkillPoints1[7]+"%]<br>Charged Strike: +14% lightning damage per level [+"+14*baseSkillPoints1[4]+"%]<br>Lightning Strike: +14% lightning damage per level [+"+14*baseSkillPoints1[5]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Tiger Strike";
                    document.getElementById("skillDescription").innerHTML="Charge-up skill<br>Consecutive hits add damage bonuses to finishing moves<br>Can only be used with claw class weapons<br>must use a dragon finishing move or normal attack to release charges";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating +"+tigerStrike.attackRating[baseSkillPoints1[i]]+"%<br>Charge 1 - damage: "+tigerStrike.damagePrecent1[baseSkillPoints1[i]]+"%<br>Charge 2 - damage: "+tigerStrike.damagePrecent2[baseSkillPoints1[i]]+"%<br>Charge 3 - damage: "+tigerStrike.damagePrecent3[baseSkillPoints1[i]]+"%<br>Mana cost: 1<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating +"+tigerStrike.attackRating[baseSkillPoints1[i]-1]+"%<br>Charge 1 - damage: "+tigerStrike.damagePrecent1[baseSkillPoints1[i]-1]+"%<br>Charge 2 - damage: "+tigerStrike.damagePrecent2[baseSkillPoints1[i]-1]+"%<br>Charge 3 - damage: "+tigerStrike.damagePrecent3[baseSkillPoints1[i]-1]+"%<br>Mana cost: 1<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Clay Golem";
                    document.getElementById("skillDescription").innerHTML="Creates a golem from the earth to fight by your side<br>Attack rating: 60<br>Defense: 100";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Life: "+clayGolem.hitPoints[baseSkillPoints1[i]]+"<br>Attack rating: +"+clayGolem.attackRating[baseSkillPoints1[i]]+"<br>Slow enemies: "+clayGolem.slow[baseSkillPoints1[i]]+"%<br>Damage: "+clayGolem.minPhysicalDamage[baseSkillPoints1[i]]+"-"+clayGolem.maxPhysicalDamage[baseSkillPoints1[i]]+"<br>Mana cost: "+clayGolem.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Life: "+clayGolem.hitPoints[baseSkillPoints1[i]-1]+"<br>Attack rating: +"+clayGolem.attackRating[baseSkillPoints1[i]-1]+"<br>Slow enemies: "+clayGolem.slow[baseSkillPoints1[i]-1]+"%<br>Damage: "+clayGolem.minPhysicalDamage[baseSkillPoints1[i]-1]+"-"+clayGolem.maxPhysicalDamage[baseSkillPoints1[i]-1]+"<br>Mana cost: "+clayGolem.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Clay Golem receives bonuses from:</span><br>Golem mastery<br>Summon Resist<br>Blood Golem: +5% life per level [+"+5*baseSkillPoints1[4]+"%]<br>Iron Golem: +35 life per level [+"+35*baseSkillPoints1[5]+"]<br>Fire Golem: +6% damage per level [+"+6*baseSkillPoints1[6]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="War Cry";
                    document.getElementById("skillDescription").innerHTML="Injures and stun all nearby enemies<br>Radius 4.6 yards";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Damage: "+warCry.minPhysicalDamage[baseSkillPoints1[i]]+"-"+warCry.maxPhysicalDamage[baseSkillPoints1[i]]+"<br>Stun lenght: "+warCry.duration[baseSkillPoints1[i]]+"<br>Mana cost: "+warCry.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Damage: "+warCry.minPhysicalDamage[baseSkillPoints1[i]-1]+"-"+warCry.maxPhysicalDamage[baseSkillPoints1[i]-1]+"<br>Stun lenght: "+warCry.duration[baseSkillPoints1[i]-1]+"<br>Mana cost: "+warCry.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>War Cry receives bonuses from:</span><br>Howl: +6% damage per level [+"+6*baseSkillPoints1[0]+"%]<br>Taunt: +6% damage per level [+"+6*baseSkillPoints1[1]+"%]<br>Battle Cry: +6% damage per level [+"+6*baseSkillPoints1[2]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Defiance";
                    document.getElementById("skillDescription").innerHTML="When active, aura increased the defense of you and your party";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Defense: "+defiance.defensePrecent[baseSkillPoints1[i]]+"%<br>Radius: "+defiance.radius[baseSkillPoints1[i]]+" yards <br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Defense: "+defiance.defensePrecent[baseSkillPoints1[i]-1]+"%<br>Radius: "+defiance.radius[baseSkillPoints1[i]-1]+" yards <br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Ice Bolt";
                    document.getElementById("skillDescription").innerHTML="Creates a magical bolt of ice that damages and slows your enemies<br>Mana cost: 3";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Cold damage: "+iceBolt.minColdDmg[baseSkillPoints1[i]]+"-"+iceBolt.maxColdDmg[baseSkillPoints1[i]]+"<br>Cold lenght: "+iceBolt.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Cold damage: "+iceBolt.minColdDmg[baseSkillPoints1[i]-1]+"-"+iceBolt.maxColdDmg[baseSkillPoints1[i]-1]+"<br>Cold lenght: "+iceBolt.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Ice Bolt receives bonuses from:</span><br>Frost Nova: +15% cold damage per level [+"+15*baseSkillPoints1[0]+"%]<br>Ice Blast: +15% cold damage per level [+"+15*baseSkillPoints1[4]+"%]<br>Glacial Spike: +15% cold damage per level [+"+15*baseSkillPoints1[5]+"%]<br>Blizzard: +15% cold damage per level [+"+15*baseSkillPoints1[1]+"%]<br>Frozen Orb: +15% cold damage per level [+"+15*baseSkillPoints1[2]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Volcano";
                    document.getElementById("skillDescription").innerHTML="Summon forth a volcano to rain death and destruction over your enemies<br>Duration: 6 seconds<br>Mana cost: 25";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Damage: "+volcano.minDamage[baseSkillPoints1[i]]+"-"+volcano.maxDamage[baseSkillPoints1[i]]+"<br>Fire damage: "+volcano.minFireDmg[baseSkillPoints1[i]]+"-"+volcano.maxFireDmg[baseSkillPoints1[i]]+" per second<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Damage: "+volcano.minDamage[baseSkillPoints1[i]-1]+"-"+volcano.maxDamage[baseSkillPoints1[i]-1]+"<br>Fire damage: "+volcano.minFireDmg[baseSkillPoints1[i]-1]+"-"+volcano.maxFireDmg[baseSkillPoints1[i]-1]+" per second<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Volcano receives bonuses from:</span><br>Molten Boulder: +16% damage per level [+"+16*baseSkillPoints1[1]+"%]<br>Fissure: +12% fire damage per level [+"+12*baseSkillPoints1[2]+"%]<br>Armageddon: +12% fire damage per level [+"+12*baseSkillPoints1[4]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 4:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Charged Strike";
                    document.getElementById("skillDescription").innerHTML="Adds lightning damage to javelin and spear class weapons and releases charged bolts upon impact";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Releases "+chargedStrike.numOfBolts[baseSkillPoints1[i]]+" charged bolts<br>Lightning damage: 1-"+chargedStrike.lightDmg[baseSkillPoints1[i]]+"<br>Mana cost: "+chargedStrike.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Releases "+chargedStrike.numOfBolts[baseSkillPoints1[i]-1]+" charged bolts<br>Lightning damage: 1-"+chargedStrike.lightDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: "+chargedStrike.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Charged Strike receives bonuses from:</span><br>Power Strike: +14% lightning damage per level [+"+14*baseSkillPoints1[3]+"%]<br>Lightning Bolt: +14% lightning damage per level [+"+14*baseSkillPoints1[7]+"%]<br>Lightning Strike: +14% lightning damage per level [+"+14*baseSkillPoints1[5]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Cobra Strike";
                    document.getElementById("skillDescription").innerHTML="Charge-up skill<br>Consecutive hits add life and mana stealing to finishing moves<br>Can only be used with claw class weapons<br>must use a dragon finishing move or normal attack to release charges";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating +"+cobraStrike.attackRating[baseSkillPoints1[i]]+"%<br>Charge 1 - life steal: "+cobraStrike.lifeSteal1[baseSkillPoints1[i]]+"%<br>Charge 2 - life and mana steal: "+cobraStrike.manaSteal2[baseSkillPoints1[i]]+"%<br>Charge 3 - life and mana steal: "+cobraStrike.lifeManaSteal3[baseSkillPoints1[i]]+"%<br>Mana cost: 2<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating +"+cobraStrike.attackRating[baseSkillPoints1[i]-1]+"%<br>Charge 1 - life steal: "+cobraStrike.lifeSteal1[baseSkillPoints1[i]-1]+"%<br>Charge 2 - life and mana steal: "+cobraStrike.manaSteal2[baseSkillPoints1[i]-1]+"%<br>Charge 3 - life and mana steal: "+cobraStrike.lifeManaSteal3[baseSkillPoints1[i]-1]+"%<br>Mana cost: 2<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Blood Golem";
                    document.getElementById("skillDescription").innerHTML="Creates a golem that shares with you the life it steals<br>Attack rating: 60<br>Defense: 120";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Life: "+bloodGolem.hitPoints[baseSkillPoints1[i]]+"<br>Converts: "+bloodGolem.lifeLeech[baseSkillPoints1[i]]+"% damage to life<br>Damage: "+bloodGolem.minPhysicalDamage[baseSkillPoints1[i]]+"-"+bloodGolem.maxPhysicalDamage[baseSkillPoints1[i]]+"<br>Mana cost: "+bloodGolem.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Life: "+bloodGolem.hitPoints[baseSkillPoints1[i]-1]+"<br>Converts: "+bloodGolem.lifeLeech[baseSkillPoints1[i]-1]+"% damage to life<br>Damage: "+bloodGolem.minPhysicalDamage[baseSkillPoints1[i]-1]+"-"+bloodGolem.maxPhysicalDamage[baseSkillPoints1[i]-1]+"<br>Mana cost: "+bloodGolem.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Blood Golem receives bonuses from:</span><br>Golem mastery<br>Summon Resist<br>Clay Golem: +20 attack rating per level [+"+5*baseSkillPoints1[3]+"]<br>Iron Golem: +35 defense per level [+"+35*baseSkillPoints1[5]+"]<br>Fire Golem: +6% damage per level [+"+6*baseSkillPoints1[6]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Shout";
                    document.getElementById("skillDescription").innerHTML="Warns of impending danger and improves the defense rating of you and your party<br>Mana cost: 6<br>Radius 12.6 yards";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Defense: "+shout.defensePrecent[baseSkillPoints1[i]]+"%<br>Duration: "+shout.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Defense: "+shout.defensePrecent[baseSkillPoints1[i]-1]+"%<br>Duration: "+shout.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Shout receives bonuses from:</span><br>Battle Orders: +5 seconds per level <br>[+"+5*baseSkillPoints1[5]+" seconds]<br>Battle Command: +5 seconds per level <br>[+"+5*baseSkillPoints1[6]+" seconds]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Vigor";
                    document.getElementById("skillDescription").innerHTML="When active, aura increased stamina recovery rate, maximum stamina and movement speed for you and your party";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Run/walk speed: +"+vigor.walkRunSpeed[baseSkillPoints1[i]]+"%<br>Max stamina: +"+vigor.increasedStamina[baseSkillPoints1[i]]+"%<br>Stamina recovery rate: +"+vigor.maxStaminaRecovery[baseSkillPoints1[i]]+"%<br>Radius: "+vigor.radius[baseSkillPoints1[i]]+" yards <br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Run/walk speed: +"+vigor.walkRunSpeed[baseSkillPoints1[i]-1]+"%<br>Max stamina: +"+vigor.increasedStamina[baseSkillPoints1[i]-1]+"%<br>Stamina recovery rate: +"+vigor.maxStaminaRecovery[baseSkillPoints1[i]-1]+"%<br>Radius: "+vigor.radius[baseSkillPoints1[i]-1]+" yards <br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Ice Blast";
                    document.getElementById("skillDescription").innerHTML="Creates a magical sphere of ice that damages and freezes your enemy";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Cold damage: "+iceBlast.minColdDmg[baseSkillPoints1[i]]+"-"+iceBlast.maxColdDmg[baseSkillPoints1[i]]+"<br>Cold lenght: "+iceBlast.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Cold damage: "+iceBlast.minColdDmg[baseSkillPoints1[i]-1]+"-"+iceBlast.maxColdDmg[baseSkillPoints1[i]-1]+"<br>Cold lenght: "+iceBlast.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Ice Blast receives bonuses from:</span><br>Ice Bolt: +8% cold damage per level [+"+8*baseSkillPoints1[3]+"%]<br>Glacial Spike: +10% freeze lenght per level [+"+10*baseSkillPoints1[5]+"%]<br>Blizzard: +8% cold damage per level [+"+8*baseSkillPoints1[1]+"%]<br>Frozen Orb: +8% cold damage per level [+"+8*baseSkillPoints1[2]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Armageddon";
                    document.getElementById("skillDescription").innerHTML="Create a meteor shower to rain fiery destruction on nearby enemies<br>Duration: 10seconds<br>Radius: 5.3 yards<br>Mana cost: 35";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Damage: "+armageddon.minDamage[baseSkillPoints1[i]]+"-"+armageddon.maxDamage[baseSkillPoints1[i]]+"<br>Fire damage: "+armageddon.minFireDmg[baseSkillPoints1[i]]+"-"+armageddon.maxFireDmg[baseSkillPoints1[i]]+" per second<br>Average fire damage: "+armageddon.minFireDmgPerSecond[baseSkillPoints1[i]]+"-"+armageddon.maxFireDmgPerSecond[baseSkillPoints1[i]]+" per second<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Damage: "+armageddon.minDamage[baseSkillPoints1[i]-1]+"-"+armageddon.maxDamage[baseSkillPoints1[i]-1]+"<br>Fire damage: "+armageddon.minFireDmg[baseSkillPoints1[i]-1]+"-"+armageddon.maxFireDmg[baseSkillPoints1[i]-1]+" per second<br>Average fire damage: "+armageddon.minFireDmgPerSecond[baseSkillPoints1[i]-1]+"-"+armageddon.maxFireDmgPerSecond[baseSkillPoints1[i]-1]+" per second<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Armageddon receives bonuses from:</span><br>Fissure: +2 seconds per level [+"+2*baseSkillPoints1[2]+" seconds]<br>Fire Storm: +14% fire damage per level [+"+14*baseSkillPoints1[0]+"%]<br>Molten Boulder: +14% fire damage per level [+"+14*baseSkillPoints1[1]+"%]<br>Volcano: +18% damage per level [+"+18*baseSkillPoints1[3]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 5:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Lightning Strike";
                    document.getElementById("skillDescription").innerHTML="Adds lightning damage to javelin and spear class weapons and releases chain lightning upon impact";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>"+lightningStrike.numOfHits[baseSkillPoints1[i]]+" hits<br>Lightning damage: 1-"+lightningStrike.lightDmg[baseSkillPoints1[i]]+"<br>Mana cost: 11<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>"+lightningStrike.numOfHits[baseSkillPoints1[i]-1]+" hits<br>Lightning damage: 1-"+lightningStrike.lightDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: 11<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Lightning Strike receives bonuses from:</span><br>Power Strike: +11% lightning damage per level [+"+11*baseSkillPoints1[3]+"%]<br>Lightning Bolt: +11% lightning damage per level [+"+11*baseSkillPoints1[7]+"%]<br>Charged Strike: +11% lightning damage per level [+"+11*baseSkillPoints1[4]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Phoenix Strike";
                    document.getElementById("skillDescription").innerHTML="Charge-up skill<br>adds elemental novas to finishing moves<br>Can only be used with claw class weapons<br>must use a dragon finishing move or normal attack to release charges";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating +"+phoenixStrike.attackRating[baseSkillPoints1[i]]+"%<br>Charge 1 - meteor damage: "+phoenixStrike.minMeteorDmg[baseSkillPoints1[i]]+"-"+phoenixStrike.maxMeteorDmg[baseSkillPoints1[i]]+"<br>Average fire damage: "+phoenixStrike.minFireDmg1[baseSkillPoints1[i]]+"-"+phoenixStrike.maxFireDmg1[baseSkillPoints1[i]]+" per second<br>Charge 2 - chain lightning damage: 1-"+phoenixStrike.lightDmg2[baseSkillPoints1[i]]+"<br>Charge 3 - chaos ice bolt damage: "+phoenixStrike.minColdDmg3[baseSkillPoints1[i]]+"-"+phoenixStrike.maxColdDmg3[baseSkillPoints1[i]]+"<br>Mana cost: 4<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating +"+phoenixStrike.attackRating[baseSkillPoints1[i]-1]+"%<br>Charge 1 - meteor damage: "+phoenixStrike.minMeteorDmg[baseSkillPoints1[i]-1]+"-"+phoenixStrike.maxMeteorDmg[baseSkillPoints1[i]-1]+"<br>Average fire damage: "+phoenixStrike.minFireDmg1[baseSkillPoints1[i]-1]+"-"+phoenixStrike.maxFireDmg1[baseSkillPoints1[i]-1]+" per second<br>Charge 2 - chain lightning damage: 1-"+phoenixStrike.lightDmg2[baseSkillPoints1[i]-1]+"<br>Charge 3 - chaos ice bolt damage: "+phoenixStrike.minColdDmg3[baseSkillPoints1[i]-1]+"-"+phoenixStrike.maxColdDmg3[baseSkillPoints1[i]-1]+"<br>Mana cost: 4<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Phoenix Strike receives bonuses from:</span><br>Fist Of Fire: +10% fire damage per level [+"+10*baseSkillPoints1[0]+"%]<br>Fist Of Fire: +6% average fire damage per second per level [+"+6*baseSkillPoints1[0]+"%]<br>Claws Of Thunder: +13% lightning damage per level [+"+13*baseSkillPoints1[1]+"%]<br>Blades Of Ice: +10% cold damage per level [+"+10*baseSkillPoints1[2]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }   
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Iron Golem";
                    document.getElementById("skillDescription").innerHTML="Transforms a metallic item into a golem that gains the properties of the item<br>Life: 612<br>Attack rating: 100<br>damage: 7-19<br>Mana cost: 35";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Thorns damage<br>Defense: +"+ironGolem.defense[baseSkillPoints1[i]]+"<br>Base defense: "+ironGolem.defenseBonus[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Thorns damage<br>Defense: +"+ironGolem.defense[baseSkillPoints1[i]-1]+"<br>Base defense: "+ironGolem.defenseBonus[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Iron Golem receives bonuses from:</span><br>Golem mastery<br>Summon Resist<br>Clay Golem: +20 attack rating per level [+"+20*baseSkillPoints1[3]+"]<br>Blood Golem: +5 life per level [+"+35*baseSkillPoints1[5]+"%]<br>Fire Golem: +6% damage per level [+"+6*baseSkillPoints1[6]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Battle Orders";
                    document.getElementById("skillDescription").innerHTML="Improves the maximum mana, life and stamina of you and your party<br>Mana cost: 7<br>Radius: 12.6 yards";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Max life: +"+battleOrders.staminaLifeManaBonus[baseSkillPoints1[i]]+"%<br>Max mana: +"+battleOrders.staminaLifeManaBonus[baseSkillPoints1[i]]+"%<br>Max stamina: +"+battleOrders.staminaLifeManaBonus[baseSkillPoints1[i]]+"%<br>Duration: "+battleOrders.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Max life: +"+battleOrders.staminaLifeManaBonus[baseSkillPoints1[i]-1]+"%<br>Max mana: +"+battleOrders.staminaLifeManaBonus[baseSkillPoints1[i]-1]+"%<br>Max stamina: +"+battleOrders.staminaLifeManaBonus[baseSkillPoints1[i]-1]+"%<br>Duration: "+battleOrders.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Battle Orders receives bonuses from:</span><br>Shout: +5 seconds per level <br>[+"+5*baseSkillPoints1[4]+" seconds]<br>Battle Command: +5 seconds per level <br>[+"+5*baseSkillPoints1[6]+" seconds]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Redemption";
                    document.getElementById("skillDescription").innerHTML="When active, aura attempts to redeem the souls of slain enemies to give you life and mana";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Chance to redeem soul: "+redemption.redeemChance[baseSkillPoints1[i]]+"%<br>Life/mana recovered "+redemption.redeemChance[baseSkillPoints1[i]]+"<br>Radius: 10.6 yards <br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Chance to redeem soul: "+redemption.redeemChance[baseSkillPoints1[i]-1]+"%<br>Life/mana recovered "+redemption.redeemChance[baseSkillPoints1[i]-1]+"<br>Radius: 10.6 yards <br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Glacial Spike";
                    document.getElementById("skillDescription").innerHTML="Creates a magical ice comet that freezes or kills nearby enemies<br>Radius: 2.6 yards";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Cold damage: "+glacialSpike.minColdDmg[baseSkillPoints1[i]]+"-"+glacialSpike.maxColdDmg[baseSkillPoints1[i]]+"<br>Cold lenght: "+glacialSpike.duration[baseSkillPoints1[i]]+" seconds<br>Cold lenght: "+glacialSpike.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Cold damage: "+iceBlast.minColdDmg[baseSkillPoints1[i]-1]+"-"+iceBlast.maxColdDmg[baseSkillPoints1[i]-1]+"<br>Cold lenght: "+iceBlast.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Glacial Spike receives bonuses from:</span><br>Ice Bolt: +5% cold damage per level [+"+5*baseSkillPoints1[3]+"%]<br>Ice Blast: +5% cold damage per level [+"+5*baseSkillPoints1[4]+"%]<br>Blizzard: +3% freeze lenght per level [+"+3*baseSkillPoints1[1]+"%]<br>Frozen Orb: +5% cold damage per level [+"+5*baseSkillPoints1[2]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Twister";
                    document.getElementById("skillDescription").innerHTML="Release several small whirlwinds that cut a path through your enemies<br>Stun lenght: 0.4 seconds<br>Mana cost: 7";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Damage: "+twister.minPhysicalDamage[baseSkillPoints1[i]]+"-"+twister.maxPhysicalDamage[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Damage: "+twister.minPhysicalDamage[baseSkillPoints1[i]-1]+"-"+twister.maxPhysicalDamage[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Twister receives bonuses from:</span><br>Arctic Blast: +20% duration per level [+"+20*baseSkillPoints1[8]+"%]<br>Tornado: +10% damage per level [+"+10*baseSkillPoints1[6]+"%]<br>Hurricane: +10% damage per level [+"+10*baseSkillPoints1[7]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 6:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Poison Javelin";
                    document.getElementById("skillDescription").innerHTML="Magically enhances your javelin to leave a trail of posion clouds";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Poison damage: "+poisonJavelin.minPoisonDmg[baseSkillPoints1[i]]+"-"+poisonJavelin.maxPoisonDmg[baseSkillPoints1[i]]+" over "+poisonJavelin.duration[baseSkillPoints1[i]]+" seconds<br>Mana cost: "+poisonJavelin.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Poison damage: "+poisonJavelin.minPoisonDmg[baseSkillPoints1[i]-1]+"-"+poisonJavelin.maxPoisonDmg[baseSkillPoints1[i]-1]+" over "+poisonJavelin.duration[baseSkillPoints1[i]-1]+" seconds<br>Mana cost: "+poisonJavelin.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Poison Javelin receives bonuses from:</span><br>Plague Javelin: +12% poison damage per level [+"+12*baseSkillPoints1[8]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Dragon Talon";
                    document.getElementById("skillDescription").innerHTML="Finishing move<br>Kick your enemies out of your way<br>Adds charged-up bonuses to the kick";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>"+dragonTalon.numOfKicks[baseSkillPoints1[i]]+" kicks<br>Attack rating +"+dragonTalon.attackRating[baseSkillPoints1[i]]+"%<br>Kick damage: +"+dragonTalon.damagePrecent[baseSkillPoints1[i]]+"%<br>Mana cost: 6<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>"+dragonTalon.numOfKicks[baseSkillPoints1[i]-1]+" kicks<br>Attack rating +"+dragonTalon.attackRating[baseSkillPoints1[i]-1]+"%<br>Kick damage: +"+dragonTalon.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Mana cost: 6<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Fire Golem";
                    document.getElementById("skillDescription").innerHTML="Creates a golem that convers the damage it receives from fire into life";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Absorbs "+fireGolem.fireAbsorbed[baseSkillPoints1[i]]+"% fire damage<br>Fire damage: "+fireGolem.minFireDmg[baseSkillPoints1[i]]+"-"+fireGolem.maxFireDmg[baseSkillPoints1[i]]+"<br>Holy fire: "+fireGolem.minAuraDmg[baseSkillPoints1[i]]+"-"+fireGolem.maxAuraDmg[baseSkillPoints1[i]]+"<br>Mana cost: "+fireGolem.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Absorbs "+fireGolem.fireAbsorbed[baseSkillPoints1[i]-1]+"% fire damage<br>Fire damage: "+fireGolem.minFireDmg[baseSkillPoints1[i]-1]+"-"+fireGolem.maxFireDmg[baseSkillPoints1[i]-1]+"<br>Holy fire: "+fireGolem.minAuraDmg[baseSkillPoints1[i]-1]+"-"+fireGolem.maxAuraDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: "+fireGolem.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Fire Golem receives bonuses from:</span><br>Golem mastery<br>Summon Resist<br>Clay Golem: +20 attack rating per level [+"+20*baseSkillPoints1[3]+"]<br>Blood Golem: +5 life per level [+"+35*baseSkillPoints1[5]+"%]<br>Iron Golem: +35 defense per level [+"+35*baseSkillPoints1[5]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Battle Command";
                    document.getElementById("skillDescription").innerHTML="Increases all current skill levels for you and your party<br>Mana cost: 11<br>Radius: 12.6";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Duration: "+battleComand.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Duration: "+battleComand.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Battle Command receives bonuses from:</span><br>Shout: +5 seconds per level <br>[+"+5*baseSkillPoints1[4]+" seconds]<br>Battle Order: +5 seconds per level <br>[+"+5*baseSkillPoints1[5]+" seconds]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Resist Fire";
                    document.getElementById("skillDescription").innerHTML="When active, aura decreases fire damage done to you and your party";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Resist Fire: +"+fireResist.resistFire[baseSkillPoints1[i]]+"%<br>Maximum fire resist: +"+[baseSkillPoints1[i]]+"% [Active]<br>Maximum fire resist +"+baseSkillPoints1[i]*0.5+"%[Passive]<br>Radius: "+fireResist.radius[baseSkillPoints1[i]]+" yards<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Resist Fire: +"+fireResist.resistFire[baseSkillPoints1[i]-1]+"%<br>Maximum fire resist: +"+[baseSkillPoints1[i]]+"% [Active]<br>Maximum fire resist +"+baseSkillPoints1[i]*0.5+"%[Passive]<br>Radius: "+fireResist.radius[baseSkillPoints1[i]-1]+" yards<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Cold Mastery";
                    document.getElementById("skillDescription").innerHTML="Passive - increases the damage of your cold spells by piercing enemies' resistances to cold";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>"+coldMastery.coldResist[baseSkillPoints1[i]]+"% to enemy cold resistance<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>"+coldMastery.coldResist[baseSkillPoints1[i]-1]+"% to enemy cold resistance<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Tornado";
                    document.getElementById("skillDescription").innerHTML="Create a funnel of wind and debris to blast your enemies<br>Mana cost: 10";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Damage: "+tornado.minPhysicalDamage[baseSkillPoints1[i]]+"-"+tornado.maxPhysicalDamage[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Damage: "+tornado.minPhysicalDamage[baseSkillPoints1[i]-1]+"-"+tornado.maxPhysicalDamage[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Tornado receives bonuses from:</span><br>Cyclone Armor: +9% damage per level [+"+9*baseSkillPoints1[9]+"%]<br>Twister: +9% damage per level [+"+9*baseSkillPoints1[5]+"%]<br>Hurricane: +9% damage per level [+"+9*baseSkillPoints1[7]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 7:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Lightning Bolt";
                    document.getElementById("skillDescription").innerHTML="Magically converts your javelin into bolt of lightning<br>75% weapon damage<br>Converts 100%physical damage to elemental damage";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Lightning damage 1-"+lightningBolt.lightDmg[baseSkillPoints1[i]]+"<br>Mana cost: "+lightningBolt.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Lightning damage 1-"+lightningBolt.lightDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: "+lightningBolt.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Lightning Bolt receives bonuses from:</span><br>Power Strike: +3% lightning damage per level [+"+3*baseSkillPoints1[3]+"%]<br>Charged Strike: +3% lightning damage per level [+"+3*baseSkillPoints1[4]+"%]<br>Lightning Strike: +3% lightning damage per level [+"+3*baseSkillPoints1[5]+"%]<br>Lightning Fury: +3% lightning damage per level [+"+3*baseSkillPoints1[9]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Dragon Claw";
                    document.getElementById("skillDescription").innerHTML="Finishing move<br>Slice and dice your enemies with your dual claw class weapons<br>Adds charged-up bonuses to claw attacks";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating +"+dragonClaw.attackRating[baseSkillPoints1[i]]+"%<br>Damage: +"+dragonClaw.damagePrecent[baseSkillPoints1[i]]+"%<br>Mana cost: 2<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating +"+dragonClaw.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: +"+dragonClaw.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Mana cost: 2<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Raise Skeleton";
                    document.getElementById("skillDescription").innerHTML="Cast on the corpse of a slain monster, this raises a skeleton warrior that fights for you";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Damage: "+raiseSkeleton.minPhysicalDamage[baseSkillPoints1[i]]+"-"+raiseSkeleton.maxPhysicalDamage[baseSkillPoints1[i]]+"<br>Life: "+raiseSkeleton.hitPoints[baseSkillPoints1[i]]+"<br>Attack rating: "+raiseSkeleton.attackRating[baseSkillPoints1[i]]+"<br>Defense: "+raiseSkeleton.defense[baseSkillPoints1[i]]+"<br>"+raiseSkeleton.numOfSkeletons[baseSkillPoints1[i]]+" skeletons total<br>Mana cost: "+raiseSkeleton.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Damage: "+raiseSkeleton.minPhysicalDamage[baseSkillPoints1[i]-1]+"-"+raiseSkeleton.maxPhysicalDamage[baseSkillPoints1[i]-1]+"<br>Life: "+raiseSkeleton.hitPoints[baseSkillPoints1[i]-1]+"<br>Attack rating: "+raiseSkeleton.attackRating[baseSkillPoints1[i]-1]+"<br>Defense: "+raiseSkeleton.defense[baseSkillPoints1[i]-1]+"<br>"+raiseSkeleton.numOfSkeletons[baseSkillPoints1[i]-1]+" skeletons total<br>Mana cost: "+raiseSkeleton.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Raise Skeleton receives bonuses from:</span><br>Skeleton Mastery<br>Summon Resist<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Find Potion";
                    document.getElementById("skillDescription").innerHTML="Use on the corpse of a slain monster for a chance to find a potion<br>Mana cost: 2";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>"+findPotion.chance[baseSkillPoints1[i]]+"% chance<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>"+findPotion.chance[baseSkillPoints1[i]-1]+"% chance<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Resist Cold";
                    document.getElementById("skillDescription").innerHTML="When active, aura decreases cold damage done to you and your party";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Resist Cold: +"+coldResist.resistCold[baseSkillPoints1[i]]+"%<br>Maximum cold resist: +"+[baseSkillPoints1[i]]+"% [Active]<br>Maximum cold resist +"+baseSkillPoints1[i]*0.5+"%[Passive]<br>Radius: "+coldResist.radius[baseSkillPoints1[i]]+" yards<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Resist Cold: +"+coldResist.resistCold[baseSkillPoints1[i]-1]+"%<br>Maximum cold resist: +"+[baseSkillPoints1[i]]+"% [Active]<br>Maximum cold resist +"+baseSkillPoints1[i]*0.5+"%[Passive]<br>Radius: "+coldResist.radius[baseSkillPoints1[i]-1]+" yards<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Frozen Armor";
                    document.getElementById("skillDescription").innerHTML="Increases your defense and freezes enemies that hit you<br>Mana cost: 7";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Defense: +"+frozenArmor.defense[baseSkillPoints1[i]]+"%<br>Freezes for "+frozenArmor.coldLenght[baseSkillPoints1[i]]+" seconds<br>Duration: "+frozenArmor.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Defense: +"+frozenArmor.defense[baseSkillPoints1[i]-1]+"%<br>Freezes for "+frozenArmor.coldLenght[baseSkillPoints1[i]-1]+" seconds<br>Duration: "+frozenArmor.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Frozen Armor receives bonuses from:</span><br>Shiver Armor: +5% freeze lenght per level [+"+5*baseSkillPoints1[8]+"%]<br>Shiver Armor: +10 seconds per level [+"+10*baseSkillPoints1[8]+" seconds]<br>Chilling Armor: +5% freeze lenght per level [+"+5*baseSkillPoints1[9]+"%]<br>Chilling Armor: +10 seconds per level [+"+10*baseSkillPoints1[9]+" seconds]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Hurricane";
                    document.getElementById("skillDescription").innerHTML="Create a massive storm of wind and debris pound your enemies to bits<br>Duration: 10 seconds<br>Radius: 6 yards<br>Mana cost: 30";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Cold damage: "+hurricane.minColdDmg[baseSkillPoints1[i]]+"-"+hurricane.maxColdDmg[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Cold damage: "+hurricane.minColdDmg[baseSkillPoints1[i]-1]+"-"+hurricane.maxColdDmg[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Tornado receives bonuses from:</span><br>Cyclone Armor: +2 seconds per level [+"+2*baseSkillPoints1[9]+" seconds]<br>Twister: +9% damage per level [+"+9*baseSkillPoints1[5]+"%]<br>Tornado: +9% damage per level [+"+9*baseSkillPoints1[6]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 8:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Plague Javelin";
                    document.getElementById("skillDescription").innerHTML="Magically enhances your javelin to release expanding clouds of poison upon impact";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: "+plagueJavelin.attackRating[baseSkillPoints1[i]]+"<br>Poison damage: "+poisonJavelin.minPoisonDmg[baseSkillPoints1[i]]+"-"+poisonJavelin.maxPoisonDmg[baseSkillPoints1[i]]+" over "+poisonJavelin.duration[baseSkillPoints1[i]]+" seconds<br>Mana cost: "+plagueJavelin.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: "+plagueJavelin.attackRating[baseSkillPoints1[i]-1]+"<br>Poison damage: "+poisonJavelin.minPoisonDmg[baseSkillPoints1[i]-1]+"-"+poisonJavelin.maxPoisonDmg[baseSkillPoints1[i]-1]+" over "+poisonJavelin.duration[baseSkillPoints1[i]-1]+" seconds<br>Mana cost: "+plagueJavelin.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Plague Javelin receives bonuses from:</span><br>Poison Javelin: +14% poison damage per level [+"+14*baseSkillPoints1[6]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Dragon Tail";
                    document.getElementById("skillDescription").innerHTML="Finishing move<br>Knock back your enemies with an explosive kick<br>Adds charged-up bonuses to the kick<br>Radius: 4 yards";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating +"+dragonTail.attackRating[baseSkillPoints1[i]]+"%<br>Fire damage: +"+dragonTail.fireDmg[baseSkillPoints1[i]]+"%<br>Mana cost: 10<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating +"+dragonTail.attackRating[baseSkillPoints1[i]-1]+"%<br>Fire damage: +"+dragonTail.fireDmg[baseSkillPoints1[i]-1]+"%<br>Mana cost: 10<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Raise Skeleton Mage";
                    document.getElementById("skillDescription").innerHTML="Cast on the corpse of a slain monster, this raises a skeleton mage that fights for you";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Life: 61<br>Defense: "+raiseSkeletonMage.defense[baseSkillPoints1[i]]+"<br>"+raiseSkeletonMage.numOfSkeletons[baseSkillPoints1[i]]+" skeletons total<br>Mana cost: "+raiseSkeletonMage.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Life: 61<br>Defense: "+raiseSkeletonMage.defense[baseSkillPoints1[i]-1]+"<br>"+raiseSkeletonMage.numOfSkeletons[baseSkillPoints1[i]-1]+" skeletons total<br>Mana cost: "+raiseSkeletonMage.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Raise Skeleton Mage receives bonuses from:</span><br>Skeleton Mastery<br>Summon Resist<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Find Item";
                    document.getElementById("skillDescription").innerHTML="Use on the corpse of a slain monster to find hidden treasures<br>Mana cost: 7";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>"+findItem.chance[baseSkillPoints1[i]]+"% chance<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>"+findItem.chance[baseSkillPoints1[i]-1]+"% chance<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Find Item receives bonuses from:</span><br>Find potion: +1% chance per level [+"+baseSkillPoints1[7]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Resist Lightning";
                    document.getElementById("skillDescription").innerHTML="When active, aura decreases lightning damage done to you and your party";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Resist Lightning: +"+lightningResist.resistLight[baseSkillPoints1[i]]+"%<br>Maximum lightning resist: +"+[baseSkillPoints1[i]]+"% [Active]<br>Maximum lightning resist +"+baseSkillPoints1[i]*0.5+"%[Passive]<br>Radius: "+lightningResist.radius[baseSkillPoints1[i]]+" yards<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Resist Lightning: +"+lightningResist.resistLight[baseSkillPoints1[i]-1]+"%<br>Maximum lightning resist: +"+[baseSkillPoints1[i]]+"% [Active]<br>Maximum lightning resist +"+baseSkillPoints1[i]*0.5+"%[Passive]<br>Radius: "+lightningResist.radius[baseSkillPoints1[i]-1]+" yards<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Shiver Armor";
                    document.getElementById("skillDescription").innerHTML="Increases your defense, freezes and damages enemies that hit you<br>Mana cost: 11";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Defense: +"+shiverArmor.defense[baseSkillPoints1[i]]+"%<br>Cold damage: "+shiverArmor.minColdDmg[baseSkillPoints1[i]]+"-"+shiverArmor.maxColdDmg[baseSkillPoints1[i]]+"<br>Duration: "+shiverArmor.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Defense: +"+shiverArmor.defense[baseSkillPoints1[i]-1]+"%<br>Cold damage: "+shiverArmor.minColdDmg[baseSkillPoints1[i]-1]+"-"+shiverArmor.maxColdDmg[baseSkillPoints1[i]-1]+"<br>Duration: "+shiverArmor.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Shiver Armor receives bonuses from:</span><br>Frozen Armor: +9% cold damage per level [+"+9*baseSkillPoints1[7]+"%]<br>Frozen Armor: +10 seconds per level [+"+10*baseSkillPoints1[7]+" seconds]<br>Chilling Armor: +9% cold damage per level [+"+9*baseSkillPoints1[9]+"%]<br>Chilling Armor: +10 seconds per level [+"+10*baseSkillPoints1[9]+" seconds]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Arctic Blast";
                    document.getElementById("skillDescription").innerHTML="Blast a continous jet of ice to burn your enemies with frost";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Average cold damage: "+arcticBlast.minColdDmg[baseSkillPoints1[i]]+"-"+arcticBlast.maxColdDmg[baseSkillPoints1[i]]+"<br>Cold lenght: "+arcticBlast.duration[baseSkillPoints1[i]]+" seconds<br>Range: "+arcticBlast.radius[baseSkillPoints1[i]]+" yards<br>Mana cost: "+arcticBlast.manaCost[baseSkillPoints1[i]]+" per second<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Average cold damage: "+arcticBlast.minColdDmg[baseSkillPoints1[i]-1]+"-"+arcticBlast.maxColdDmg[baseSkillPoints1[i]-1]+"<br>Cold lenght: "+arcticBlast.duration[baseSkillPoints1[i]-1]+" seconds<br>Range: "+arcticBlast.radius[baseSkillPoints1[i]-1]+" yards<br>Mana cost: "+arcticBlast.manaCost[baseSkillPoints1[i]-1]+" per second<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Arctic Blast receives bonuses from:</span><br>Cyclone Armor: +15% cold damage per level [+"+15*baseSkillPoints1[9]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 9:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Lightning Fury";
                    document.getElementById("skillDescription").innerHTML="Changes a thrown javelin into powerful bolt of lightning that splits on impact";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Releases "+lightningFury.numOfBolts[baseSkillPoints1[i]]+" bolts<br>Lightning damage 1-"+lightningFury.lightDmg[baseSkillPoints1[i]]+"<br>Mana cost: "+lightningFury.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Releases "+lightningFury.numOfBolts[baseSkillPoints1[i]-1]+" bolts<br>Lightning damage 1-"+lightningFury.lightDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: "+lightningFury.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Lightning Fury receives bonuses from:</span><br>Power Strike: +1% lightning damage per level [+"+1*baseSkillPoints1[3]+"%]<br>Lightning Bolt: +1% lightning damage per level [+"+1*baseSkillPoints1[7]+"%]<br>Charged Strike: +1% lightning damage per level [+"+1*baseSkillPoints1[4]+"%]<br>Lightning Strike: +1% lightning damage per level [+"+1*baseSkillPoints1[5]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Dragon Flight";
                    document.getElementById("skillDescription").innerHTML="Finishing move<br>Teleport to your enemies and destroy them with a kick<br>Adds charged-up bonuses to the kick";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating +"+dragonFlight.attackRating[baseSkillPoints1[i]]+"%<br>Kick damage: +"+dragonFlight.damagePrecent[baseSkillPoints1[i]]+"%<br>Mana cost: 15<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating +"+dragonFlight.attackRating[baseSkillPoints1[i]-1]+"%<br>Kick damage: +"+dragonFlight.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Mana cost: 15<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Revive";
                    document.getElementById("skillDescription").innerHTML="Returns a monster to life to fight by your side<br>Life +200%<br>Duration: 180 seconds<br>Mana cost: 45";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Monsters: "+revive.numOfMonsters[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Monsters: "+revive.numOfMonsters[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Grim Ward";
                    document.getElementById("skillDescription").innerHTML="Use on the corpse of a slain monster to create a frightening totem that causes nearby monsters to flee<br>Mana cost: 4<br>Enemy damage taken: +20%<br>Duration: 40 seconds";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Radius: "+grimWard.radius[baseSkillPoints1[i]]+" yards<br>Slows enemies: "+grimWard.slow[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Radius: "+grimWard.radius[baseSkillPoints1[i]-1]+" yards<br>Slows enemies: "+grimWard.slow[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Find Item receives bonuses from:</span><br>Find potion: +5% damage taken per level [+"+5*baseSkillPoints1[7]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Salvation";
                    document.getElementById("skillDescription").innerHTML="When active, aura decreases fire, cold and lightning damage done to you and your party";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Resist All: +"+salvation.resistAll[baseSkillPoints1[i]]+"%<br>Radius: "+salvation.radius[baseSkillPoints1[i]]+" yards<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Resist All: +"+salvation.resistAll[baseSkillPoints1[i]-1]+"%<br>Radius: "+salvation.radius[baseSkillPoints1[i]-1]+" yards<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Chilling Armor";
                    document.getElementById("skillDescription").innerHTML="Increases defense and discharges an ice bolt in retalation against ranged attackers<br>Mana cost: 17";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Defense: +"+chillingArmor.defense[baseSkillPoints1[i]]+"%<br>Cold damage: "+chillingArmor.minColdDmg[baseSkillPoints1[i]]+"-"+chillingArmor.maxColdDmg[baseSkillPoints1[i]]+"<br>Duration: "+chillingArmor.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Defense: +"+chillingArmor.defense[baseSkillPoints1[i]-1]+"%<br>Cold damage: "+chillingArmor.minColdDmg[baseSkillPoints1[i]-1]+"-"+chillingArmor.maxColdDmg[baseSkillPoints1[i]-1]+"<br>Duration: "+chillingArmor.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Chilling Armor receives bonuses from:</span><br>Frozen Armor: +9% cold damage per level [+"+9*baseSkillPoints1[7]+"%]<br>Frozen Armor: +10 seconds per level [+"+10*baseSkillPoints1[7]+" seconds]<br>Shiver Armor: +9% cold damage per level [+"+9*baseSkillPoints1[8]+"%]<br>Shiver Armor: +10 seconds per level [+"+10*baseSkillPoints1[8]+" seconds]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Cyclone Armor";
                    document.getElementById("skillDescription").innerHTML="Shield yourself from damage caused by fire, cold and lightning";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Absorbs "+cycloneArmor.dmgAbsorbed[baseSkillPoints1[i]]+" damage<br>Mana cost: "+cycloneArmor.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Absorbs "+cycloneArmor.dmgAbsorbed[baseSkillPoints1[i]-1]+" damage<br>Mana cost: "+cycloneArmor.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Cyclone Armor receives bonuses from:</span><br>Twister: +7% damage per level [+"+7*baseSkillPoints1[5]+"%]<br>Tornado: +7% damage per level [+"+7*baseSkillPoints1[6]+"%]<br>Hurricane: +7% damage per level [+"+7*baseSkillPoints1[7]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 10:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Inner Sight";
                    document.getElementById("skillDescription").innerHTML="Illuminates nearby enemies making them easier to hit for you and your party<br>Radius: 18 yards<br>Mana cost: 5";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Enemy defense: "+innerSight.monsterArmor[baseSkillPoints1[i]]+"<br>Duration: "+innerSight.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Enemy defense: "+innerSight.monsterArmor[baseSkillPoints1[i]-1]+"<br>Duration: "+innerSight.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Burst Of Speed";
                    document.getElementById("skillDescription").innerHTML="Increases attack and movement speed for a period of time";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack speed +"+burstOfSpeed.attackSpeed[baseSkillPoints1[i]]+"%<br>Run/walk speed: +"+burstOfSpeed.walkRunSpeed[baseSkillPoints1[i]]+"%<br>Duration: "+burstOfSpeed.duration[baseSkillPoints1[i]]+" seconds<br>Mana cost: 10<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack speed +"+burstOfSpeed.attackSpeed[baseSkillPoints1[i]-1]+"%<br>Run/walk speed: +"+burstOfSpeed.walkRunSpeed[baseSkillPoints1[i]-1]+"%<br>Duration: "+burstOfSpeed.duration[baseSkillPoints1[i]-1]+" seconds<br>Mana cost: 10<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Poison Dagger";
                    document.getElementById("skillDescription").innerHTML="Adds poison to your dagger attacks";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+poisonDagger.attackRating[baseSkillPoints1[i]]+"%<br>Posion damage: "+poisonDagger.minPoisonDmg[baseSkillPoints1[i]]+"-"+poisonDagger.maxPoisonDmg[baseSkillPoints1[i]]+"<br>Over "+poisonDagger.duration[baseSkillPoints1[i]]+" seconds<br>Mana cost: "+poisonDagger.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+poisonDagger.attackRating[baseSkillPoints1[i]-1]+"%<br>Posion damage: "+poisonDagger.minPoisonDmg[baseSkillPoints1[i]-1]+"-"+poisonDagger.maxPoisonDmg[baseSkillPoints1[i]-1]+"<br>Over "+poisonDagger.duration[baseSkillPoints1[i]-1]+" seconds<br>Mana cost: "+poisonDagger.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Poison Dagger receives bonuses from:</span><br>Poison Explosion: +20% poison damage per level [+"+20*baseSkillPoints1[11]+"%]<br>Poison Nova: +20% poison damage per level [+"+20*baseSkillPoints1[12]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Blade Mastery";
                    document.getElementById("skillDescription").innerHTML="Passive - improves swords and daggers fighting skill";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+bladeMastery.attackRating[baseSkillPoints1[i]]+"%<br>Damage: +"+bladeMastery.damagePrecent[baseSkillPoints1[i]]+"%<br>Chance of critical strike: +"+bladeMastery.chanceToCrit[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+bladeMastery.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: +"+bladeMastery.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Chance of critical strike: +"+bladeMastery.chanceToCrit[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Might";
                    document.getElementById("skillDescription").innerHTML="When active, aura increases the damage done by you and your party";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Damage: +"+might.damagePrecent[baseSkillPoints1[i]]+"%<br>Radius: "+might.radius[baseSkillPoints1[i]]+" yards<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Damage: +"+might.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Radius: "+might.radius[baseSkillPoints1[i]-1]+" yards<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Static Field";
                    document.getElementById("skillDescription").innerHTML="Creates an electrical field that reduces life of all nearby enemies<br>Weakens enemies by 25%<br>Mana cost:9";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Radius: "+staticField.radius[baseSkillPoints1[i]]+" yards<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Radius: "+staticField.radius[baseSkillPoints1[i]-1]+" yards<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Werewolf";
                    document.getElementById("skillDescription").innerHTML="Transform into werewolf<br>Max life: +25%<br>Max stamina: +25%<br>Duration: 40 seconds<br>Mana cost: 15";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+werewolf.attackRating[baseSkillPoints1[i]]+"%<br>Attack speed: +"+werewolf.attackSpeed[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+werewolf.attackRating[baseSkillPoints1[i]-1]+"%<br>Attack speed: +"+werewolf.attackSpeed[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Werewolf receives bonuses from:</span><br>Lycanthropy";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 11:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Slow Missles";
                    document.getElementById("skillDescription").innerHTML="Illuminates nearby enemies and slows their ranged attacks<br>Ranged attacks slowed to 57%<br>Damage reduced by 14%<br>Radius: 18 yards<br>Mana cost: 5";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Duration: "+slowMissles.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Duration: "+slowMissles.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Fade";
                    document.getElementById("skillDescription").innerHTML="Raise all resistances and resist curses for a period of time";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Reduces curse duration by "+fade.curseReduction[baseSkillPoints1[i]]+"%<br>damage reduced by "+fade.physicalReduction[baseSkillPoints1[i]]+"%<br>Resist all: +"+fade.resistAll[baseSkillPoints1[i]]+"%<br>Duration: "+fade.duration[baseSkillPoints1[i]]+" seconds<br>Mana cost: 10<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Reduces curse duration by "+fade.curseReduction[baseSkillPoints1[i]-1]+"%<br>damage reduced by "+fade.physicalReduction[baseSkillPoints1[i]-1]+"%<br>Resist all: +"+fade.resistAll[baseSkillPoints1[i]-1]+"%<br>Duration: "+fade.duration[baseSkillPoints1[i]-1]+" seconds<br>Mana cost: 10<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Poison Explosion";
                    document.getElementById("skillDescription").innerHTML="Cast on the corpse of a slain monster, toxic gas is released that poison nearby monsters<br>Mana cost: 8";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Posion damage: "+poisonExplosion.minPoisonDmg[baseSkillPoints1[i]]+"-"+poisonExplosion.maxPoisonDmg[baseSkillPoints1[i]]+"<br>Over "+poisonExplosion.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Posion damage: "+poisonExplosion.minPoisonDmg[baseSkillPoints1[i]-1]+"-"+poisonExplosion.maxPoisonDmg[baseSkillPoints1[i]-1]+"<br>Over "+poisonExplosion.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Poison Explosion receives bonuses from:</span><br>Poison Dagger: +15% poison damage per level [+"+15*baseSkillPoints1[10]+"%]<br>Poison Nova: +15% poison damage per level [+"+15*baseSkillPoints1[12]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Polearm Mastery";
                    document.getElementById("skillDescription").innerHTML="Passive - improves polearm skill";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+polearmMastery.attackRating[baseSkillPoints1[i]]+"%<br>Damage: +"+polearmMastery.damagePrecent[baseSkillPoints1[i]]+"%<br>Chance of critical strike: +"+polearmMastery.chanceToCrit[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+polearmMastery.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: +"+polearmMastery.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Chance of critical strike: +"+polearmMastery.chanceToCrit[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Blessed Aim";
                    document.getElementById("skillDescription").innerHTML="When active, aura increases the attack rating for you and your party";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+blessedAim.attackRating[baseSkillPoints1[i]]+"% [Active]<br>Attack rating: +"+5*(1+baseSkillPoints1[i])+"% [Passive]<br>Radius: "+blessedAim.radius[baseSkillPoints1[i]]+" yards<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+blessedAim.attackRating[baseSkillPoints1[i]-1]+"% [Active]<br>Attack rating: +"+5*baseSkillPoints1[i]+"% [Passive]<br>Radius: "+blessedAim.radius[baseSkillPoints1[i]-1]+" yards<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Nova";
                    document.getElementById("skillDescription").innerHTML="Creates an expanding ring of lightning to shock nearby enemies";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Lightning damage: "+nova.minLightDmg[baseSkillPoints1[i]]+"-"+nova.maxLightDmg[baseSkillPoints1[i]]+"<br>Mana cost: "+nova.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Lightning damage: "+nova.minLightDmg[baseSkillPoints1[i]-1]+"-"+nova.maxLightDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: "+nova.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Nova receives bonuses from:</span><br>Static Field: +5% lightning damage per level [+"+5*baseSkillPoints1[10]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Feral Rage";
                    document.getElementById("skillDescription").innerHTML="When in werewolf form, go into a frenzied rage to steal increasing amounts of life from your enemies with successive hits<br>Mana cost: 3<br>Duration: 20 seconds";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+feralRage.attackRating[baseSkillPoints1[i]]+"%<br>Run/Walk speed: +19-"+feralRage.velocity[baseSkillPoints1[i]]+"%<br>Life steal: +4"+feralRage.lifeLeech[baseSkillPoints1[i]]+"%<br>Damage: +"+feralRage.damagePrecent[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+feralRage.attackRating[baseSkillPoints1[i]-1]+"%<br>Run/Walk speed: +19-"+feralRage.velocity[baseSkillPoints1[i]-1]+"%<br>Life steal: +4"+feralRage.lifeLeech[baseSkillPoints1[i]-1]+"%<br>Damage: +"+feralRage.damagePrecent[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 12:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Decoy";
                    document.getElementById("skillDescription").innerHTML="Creates a duplicate of yourself that draws fire from enemies";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Life: +"+decoy.bonusLife[baseSkillPoints1[i]]+"%<br>Duration: "+decoy.duration[baseSkillPoints1[i]]+" seconds<br>Mana cost: "+decoy.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Life: +"+decoy.bonusLife[baseSkillPoints1[i]-1]+"%<br>Duration: "+decoy.duration[baseSkillPoints1[i]-1]+" seconds<br>Mana cost: "+decoy.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Venom";
                    document.getElementById("skillDescription").innerHTML="Add poison damage to your weapons";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Poision damage: "+venom.minPoisonDmg[baseSkillPoints1[i]]+"-"+venom.maxPoisonDmg[baseSkillPoints1[i]]+" over 0.4 seconds<br>Duration: "+venom.duration[baseSkillPoints1[i]]+" seconds<br>Mana cost: 12<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Poision damage: "+venom.minPoisonDmg[baseSkillPoints1[i]-1]+"-"+venom.maxPoisonDmg[baseSkillPoints1[i]-1]+" over 0.4 seconds<br>Duration: "+venom.duration[baseSkillPoints1[i]-1]+" seconds<br>Mana cost: 12<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Poison Nova";
                    document.getElementById("skillDescription").innerHTML="Emits an expanding ring of concentrated poison<br>Mana cost: 20";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Posion damage: "+poisonNova.minPoisonDmg[baseSkillPoints1[i]]+"-"+poisonNova.maxPoisonDmg[baseSkillPoints1[i]]+"<br>Over 2 seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Posion damage: "+poisonNova.minPoisonDmg[baseSkillPoints1[i]-1]+"-"+poisonNova.maxPoisonDmg[baseSkillPoints1[i]-1]+"<br>Over 2 seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Poison Nova receives bonuses from:</span><br>Poison Dagger: +10% poison damage per level [+"+10*baseSkillPoints1[10]+"%]<br>Poison Explosion: +10% poison damage per level [+"+10*baseSkillPoints1[11]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Increased Stamina";
                    document.getElementById("skillDescription").innerHTML="Passive - increases your stamina";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Max stamina: +"+increasedStamina.increasedStamina[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Max stamina: +"+increasedStamina.increasedStamina[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Concentration";
                    document.getElementById("skillDescription").innerHTML="When active, aura increases the damage and decreases the chance that the attack will be interrupted for you and your party";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Chance uninterruptable: 20%<br>Damage: +"+concentration.damagePrecent[baseSkillPoints1[i]]+"%<br>Attack rating: +"+concentration.damagePrecent[baseSkillPoints1[i]]+"%<br>Radius: "+concentration.radius[baseSkillPoints1[i]]+" yards<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Chance uninterruptable: 20%<br>Damage: +"+concentration.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Attack rating: +"+concentration.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Radius: "+concentration.radius[baseSkillPoints1[i]-1]+" yards<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Thunder Storm";
                    document.getElementById("skillDescription").innerHTML="Summons a deadly thunderstorm that strikes your enemies with bolts of loghtnning<br>Radius: 11.3 yards<br>Mana cost: 19";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Lightning damage: "+thunderStorm.minLightDmg[baseSkillPoints1[i]]+"-"+thunderStorm.maxLightDmg[baseSkillPoints1[i]]+"<br>Duration: "+thunderStorm.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Lightning damage: "+thunderStorm.minLightDmg[baseSkillPoints1[i]-1]+"-"+thunderStorm.maxLightDmg[baseSkillPoints1[i]-1]+"<br>Duration: "+thunderStorm.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Thunder Storm receives bonuses from:</span><br>Static Field: +7% lightning damage per level [+"+7*baseSkillPoints1[10]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Rabies";
                    document.getElementById("skillDescription").innerHTML="When in werewolf form, bite your enemies to inflict them with disease that spreads to other monsters<br>Mana cost: 10";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+rabies.attackRating[baseSkillPoints1[i]]+"%<br>Poison damage: "+rabies.minPoisonDmg[baseSkillPoints1[i]]+"-"+rabies.maxPoisonDmg[baseSkillPoints1[i]]+" over 4 seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+rabies.attackRating[baseSkillPoints1[i]-1]+"%<br>Poison damage: "+rabies.minPoisonDmg[baseSkillPoints1[i]-1]+"-"+rabies.maxPoisonDmg[baseSkillPoints1[i]-1]+" over 4 seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Rabies reveives bonuses from:</span><br>Poison Creeper: +20% poison damage per level [+"+20*baseSkillPoints1[27]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 13:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Valkyrie";
                    document.getElementById("skillDescription").innerHTML="Summons a powerful valkyrie ally";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Life: "+valkyrie.hitPoints[baseSkillPoints1[i]]+"<br>Attack rating: +"+valkyrie.attackRating[baseSkillPoints1[i]]+"<br>Damage: +"+valkyrie.damagePrecent[baseSkillPoints1[i]]+"%<br>Defense: +"+valkyrie.defensePrecent[baseSkillPoints1[i]]+"%<br>Mana cost: "+valkyrie.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Life: "+valkyrie.hitPoints[baseSkillPoints1[i]-1]+"<br>Attack rating: +"+valkyrie.attackRating[baseSkillPoints1[i]-1]+"<br>Damage: +"+valkyrie.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Defense: +"+valkyrie.defensePrecent[baseSkillPoints1[i]-1]+"%<br>Mana cost: "+valkyrie.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Valkyrie receives bonuses from:</span><br>Decoy: +20% life per level [+"+20*baseSkillPoints1[12]+"%]<br>Penetrate: +40% attack rating per level [+"+40*baseSkillPoints1[18]+"%]<br>Critical Strike, Dodge, Avoid, Evade<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Claw Mastery";
                    document.getElementById("skillDescription").innerHTML="Passive - improves your skill with claw class weapons";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: "+clawMastery.attackRating[baseSkillPoints1[i]]+"<br>Damage: +"+clawMastery.damagePrecent[baseSkillPoints1[i]]+"%<br>"+clawMastery.chanceToCrit[baseSkillPoints1[i]]+"% Chance of critical strike<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: "+clawMastery.attackRating[baseSkillPoints1[i]-1]+"<br>Damage: +"+clawMastery.damagePrecent[baseSkillPoints1[i]-1]+"%<br>"+clawMastery.chanceToCrit[baseSkillPoints1[i]-1]+"% Chance of critical strike<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Teeth";
                    document.getElementById("skillDescription").innerHTML="Fires a barrage of summoned barbed teeth";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>"+teeth.numOfTeeth[baseSkillPoints1[i]]+" teeth<br>Magic damage: "+teeth.minMagicDmg[baseSkillPoints1[i]]+"-"+teeth.maxMagicDmg[baseSkillPoints1[i]]+"<br>Mana cost: "+teeth.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>"+teeth.numOfTeeth[baseSkillPoints1[i]-1]+" teeth<br>Magic damage: "+teeth.minMagicDmg[baseSkillPoints1[i]-1]+"-"+teeth.maxMagicDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: "+teeth.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Teeth receives bonuses from:</span><br>Bone Wall: +15% magic damage per level [+"+15*baseSkillPoints1[18]+"%]<br>Bone Spear: +15% magic damage per level [+"+15*baseSkillPoints1[15]+"%]<br>Bone Prison: +15% magic damage per level [+"+15*baseSkillPoints1[19]+"%]<br>Bone Spirit: +15% magic damage per level [+"+15*baseSkillPoints1[16]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Increased Speed";
                    document.getElementById("skillDescription").innerHTML="Passive - increases your walk and run speed";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Run/Walk speed: +"+increasedSpeed.walkRunSpeed[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Run/Walk speed: +"+increasedSpeed.walkRunSpeed[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Fanaticism";
                    document.getElementById("skillDescription").innerHTML="When active, aura increases damage, attack speed and attack rating for you and your party";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+fanaticism.attackRating[baseSkillPoints1[i]]+"%<br>Your damage: +"+fanaticism.damagePrecent[baseSkillPoints1[i]]+"%<br>Party damage: +"+fanaticism.partyDmg[baseSkillPoints1[i]]+"%<br>Attack speed: +"+fanaticism.attackSpeed[baseSkillPoints1[i]]+"%<br>Radius: "+fanaticism.radius[baseSkillPoints1[i]]+" yards<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+fanaticism.attackRating[baseSkillPoints1[i]-1]+"%<br>Your damage: +"+fanaticism.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Party damage: +"+fanaticism.partyDmg[baseSkillPoints1[i]-1]+"%<br>Attack speed: +"+fanaticism.attackSpeed[baseSkillPoints1[i]-1]+"%<br>Radius: "+fanaticism.radius[baseSkillPoints1[i]-1]+" yards<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Charged Bolt";
                    document.getElementById("skillDescription").innerHTML="Creates multiple, randomly directed bolts of eletrical energy";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>"+chargedBolt.numOfBolts[baseSkillPoints1[i]]+" bolts<br>Lightning damage: "+chargedBolt.minLightDmg[baseSkillPoints1[i]]+"-"+chargedBolt.maxLightDmg[baseSkillPoints1[i]]+"<br>Mana cost: "+chargedBolt.manaCost[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>"+chargedBolt.numOfBolts[baseSkillPoints1[i]-1]+" bolts<br>Lightning damage: "+chargedBolt.minLightDmg[baseSkillPoints1[i]-1]+"-"+chargedBolt.maxLightDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: "+chargedBolt.manaCost[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Charged Bolt receives bonuses from:</span><br>Lightning: +6% lightning damage per level [+"+6*baseSkillPoints1[14]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Fury";
                    document.getElementById("skillDescription").innerHTML="When in werewolf form, Attack either multiple adjacent targets or one target multiple times<br>Mana cost: 4";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>"+fury.numOfHits[baseSkillPoints1[i]]+" hits<br>Attack rating: +"+fury.attackRating[baseSkillPoints1[i]]+"%<br>Damage: +"+fury.damagePrecent[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>"+fury.numOfHits[baseSkillPoints1[i]-1]+" hits<br>Attack rating: +"+fury.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: +"+fury.damagePrecent[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 14:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Dodge";
                    document.getElementById("skillDescription").innerHTML="Passive - you have a chance to dodge a melee attack when attacking or standing still";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>"+dodge.chanceToDodge[baseSkillPoints1[i]]+"% chance<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>"+dodge.chanceToDodge[baseSkillPoints1[i]-1]+"% chance<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Weapon Block";
                    document.getElementById("skillDescription").innerHTML="Passive - chance to block when you are using dual claw class weapon";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>"+weaponBlock.chanceToBlock[baseSkillPoints1[i]]+" % Chance<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>"+weaponBlock.chanceToBlock[baseSkillPoints1[i]-1]+" % Chance<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Corpse Explosion";
                    document.getElementById("skillDescription").innerHTML="Cast on the corpse of a slain monster, it explodes, damaging nearby enemies<br>Damage: 70-120% of corpse life";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Radius: "+corpseExplosion.radius[baseSkillPoints1[i]]+" yards<br>Mana cost: "+corpseExplosion.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Radius: "+corpseExplosion.radius[baseSkillPoints1[i]-1]+" yards<br>Mana cost: "+corpseExplosion.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Axe Mastery";
                    document.getElementById("skillDescription").innerHTML="Passive - improves axe fighting skill";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+axeMastery.attackRating[baseSkillPoints1[i]]+"%<br>Damage: +"+axeMastery.damagePrecent[baseSkillPoints1[i]]+"%<br>Chance of critical strike: +"+axeMastery.chanceToCrit[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+axeMastery.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: +"+axeMastery.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Chance of critical strike: +"+axeMastery.chanceToCrit[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Holy Fire";
                    document.getElementById("skillDescription").innerHTML="When active, aura damages nearby enemies with heavenly flames<br>Adds fire damage to your attack<br>Area damage increases at closer range";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Fire damage: "+holyFire.minFireDmgToAttack[baseSkillPoints1[i]]+"-"+holyFire.maxFireDmgToAttack[baseSkillPoints1[i]]+" to your attack<br>Fire damage: "+holyFire.minFireDmg[baseSkillPoints1[i]]+"-"+holyFire.maxFireDmg[baseSkillPoints1[i]]+"<br>Radius: "+holyFire.radius[baseSkillPoints1[i]]+" yards<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Fire damage: "+holyFire.minFireDmgToAttack[baseSkillPoints1[i]-1]+"-"+holyFire.maxFireDmgToAttack[baseSkillPoints1[i]-1]+" to your attack<br>Fire damage: "+holyFire.minFireDmg[baseSkillPoints1[i]-1]+"-"+holyFire.maxFireDmg[baseSkillPoints1[i]-1]+"<br>Radius: "+holyFire.radius[baseSkillPoints1[i]-1]+" yards<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Holy Fire receives bonuses from:</span><br>Resist Fire: +21% fire damage per level [+"+21*baseSkillPoints1[6]+"%]<br>Salvation +10% fire damage per level [+"+10*baseSkillPoints1[9]+"%]";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Lightning";
                    document.getElementById("skillDescription").innerHTML="Creates a powerful lightning bolt to lay waste to your enemies";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Lightning damage: 1-"+lightning.lightDmg[baseSkillPoints1[i]]+"<br>Mana cost: "+lightning.manaCost[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Lightning damage: 1-"+lightning.lightDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: "+lightning.manaCost[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Lightning receives bonuses from:</span><br>Charged Bolt: +8% lightning damage per level [+"+8*baseSkillPoints1[13]+"%]<br>Nova: +8% lightning damage per level [+"+8*baseSkillPoints1[10]+"%]<br>Chain Lightning: +8% lightning damage per level [+"+8*baseSkillPoints1[15]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Lycanthropy";
                    document.getElementById("skillDescription").innerHTML="Passive - improves duration and life when werewolf or werebear form";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Max life: "+lycanthropy.bonusLife[baseSkillPoints1[i]]+"%<br>Duration: +"+lycanthropy.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Max life: "+lycanthropy.bonusLife[baseSkillPoints1[i]-1]+"%<br>Duration: +"+lycanthropy.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 15:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Avoid";
                    document.getElementById("skillDescription").innerHTML="Passive - you have a chance to dodge enemy missles when attacking or standing still";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>"+avoid.chanceToAvoid[baseSkillPoints1[i]]+"% chance<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>"+avoid.chanceToAvoid[baseSkillPoints1[i]-1]+"% chance<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Shadow Warrior";
                    document.getElementById("skillDescription").innerHTML="Summom a shadow of yourself that mimics your skills and fights by your side";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Life: "+shadowWarrior.hitPoints[baseSkillPoints1[i]]+"<br>Attack rating: "+shadowWarrior.attackRating[baseSkillPoints1[i]]+"%<br>Mana cost: "+shadowWarrior.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Life: "+shadowWarrior.hitPoints[baseSkillPoints1[i]-1]+"<br>Attack rating: "+shadowWarrior.attackRating[baseSkillPoints1[i]-1]+"%<br>Mana cost: "+shadowWarrior.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Bone Spear";
                    document.getElementById("skillDescription").innerHTML="Summons a deadly spike of bone to impale your enemies";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Magic damage: "+boneSpear.minMagicDmg[baseSkillPoints1[i]]+"-"+boneSpear.maxMagicDmg[baseSkillPoints1[i]]+"<br>Mana cost: "+boneSpear.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Magic damage: "+boneSpear.minMagicDmg[baseSkillPoints1[i]-1]+"-"+boneSpear.maxMagicDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: "+boneSpear.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Bone Spear receives bonuses from:</span><br>Teeth: +8% magic damage per level [+"+8*baseSkillPoints1[13]+"%]<br>Bone Wall: +8% magic damage per level [+"+8*baseSkillPoints1[18]+"%]<br>Bone Prison: +8% magic damage per level [+"+8*baseSkillPoints1[19]+"%]<br>Bone Spirit: +8% magic damage per level [+"+8*baseSkillPoints1[16]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Throwing Mastery";
                    document.getElementById("skillDescription").innerHTML="Passive - improves throwing weapon skill<br>Replenish quantity on critical strike";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+throwingMastery.attackRating[baseSkillPoints1[i]]+"%<br>Damage: +"+throwingMastery.damagePrecent[baseSkillPoints1[i]]+"%<br>Chance of critical strike: +"+throwingMastery.chanceToCrit[baseSkillPoints1[i]]+"%<br>"+throwingMastery.chanceToPierce[baseSkillPoints1[i]]+"% chance to pierce<br>"+throwingMastery.notConsume[baseSkillPoints1[i]]+"% chance to not consume quantity<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+throwingMastery.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: +"+throwingMastery.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Chance of critical strike: +"+throwingMastery.chanceToCrit[baseSkillPoints1[i]-1]+"%<br>"+throwingMastery.chanceToPierce[baseSkillPoints1[i]-1]+"% chance to pierce<br>"+throwingMastery.notConsume[baseSkillPoints1[i]-1]+"% chance to not consume quantity<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Holy Freeze";
                    document.getElementById("skillDescription").innerHTML="When active, aura freezes nearby monsters<br>Adds cold damage to your attack<br>Area damage increases at closer range";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Cold damage: "+holyFreeze.minColdDmgToAttack[baseSkillPoints1[i]]+"-"+holyFreeze.maxColdDmgToAttack[baseSkillPoints1[i]]+" to your attack<br>Cold damage: "+holyFreeze.minColdDmg[baseSkillPoints1[i]]+"-"+holyFreeze.maxColdDmg[baseSkillPoints1[i]]+"<br>Radius: "+holyFreeze.radius[baseSkillPoints1[i]]+" yards<br>Slow: "+holyFreeze.slow[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Cold damage: "+holyFreeze.minColdDmgToAttack[baseSkillPoints1[i]-1]+"-"+holyFreeze.maxColdDmgToAttack[baseSkillPoints1[i]-1]+" to your attack<br>Cold damage: "+holyFreeze.minColdDmg[baseSkillPoints1[i]-1]+"-"+holyFreeze.maxColdDmg[baseSkillPoints1[i]-1]+"<br>Radius: "+holyFreeze.radius[baseSkillPoints1[i]-1]+" yards<br>Slow: "+holyFreeze.slow[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Holy Freeze receives bonuses from:</span><br>Resist Cold: +15% cold damage per level [+"+15*baseSkillPoints1[7]+"%]<br>Salvation +7% cold damage per level [+"+7*baseSkillPoints1[9]+"%]";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Chain Lightning";
                    document.getElementById("skillDescription").innerHTML="Creates a bolt of lightning that arcs through several targets";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>"+chainLightning.numOfTargets[baseSkillPoints1[i]]+" hits<br>Lightning damage: 1-"+chainLightning.lightDmg[baseSkillPoints1[i]]+"<br>Mana cost: "+chainLightning.manaCost[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>"+chainLightning.numOfTargets[baseSkillPoints1[i]-1]+" hits<br>Lightning damage: 1-"+chainLightning.lightDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: "+chainLightning.manaCost[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Chain Lightning receives bonuses from:</span><br>Charged Bolt: +4% lightning damage per level [+"+4*baseSkillPoints1[13]+"%]<br>Nova: +4% lightning damage per level [+"+4*baseSkillPoints1[10]+"%]<br>Lightning: +8% lightning damage per level [+"+4*baseSkillPoints1[14]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Fire Claws";
                    document.getElementById("skillDescription").innerHTML="When in werewolf or werebear form, maul your enemies with a fiery claw attack<br>Mana cost: 4";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: "+fireClaws.attackRating[baseSkillPoints1[i]]+"%<br>Fire damage: "+fireClaws.minFireDmg[baseSkillPoints1[i]]+"-"+fireClaws.maxFireDmg[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: "+fireClaws.attackRating[baseSkillPoints1[i]-1]+"%<br>Fire damage: "+fireClaws.minFireDmg[baseSkillPoints1[i]-1]+"-"+fireClaws.maxFireDmg[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Fire Claws receives bonuses from:</span><br>Fire Storm: +22% fire damage per level [+"+22*baseSkillPoints1[0]+"%]<br>Molten Boulder: +22% fire damage per level [+"+22*baseSkillPoints1[1]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 16:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Evade";
                    document.getElementById("skillDescription").innerHTML="Passive - you have a chance to dodge a melee or missle attack when walking or running";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>"+evade.chanceToEvade[baseSkillPoints1[i]]+"% chance<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>"+evade.chanceToEvade[baseSkillPoints1[i]-1]+"% chance<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Shadow Master";
                    document.getElementById("skillDescription").innerHTML="Summom a powerful shadow of yourself that fights by your side";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Life: "+shadowMaster.hitPoints[baseSkillPoints1[i]]+"<br>Attack rating: "+shadowMaster.attackRating[baseSkillPoints1[i]]+"%<br>Resist all: "+shadowMaster.resistAll[baseSkillPoints1[i]]+"%<br>Mana cost: "+shadowMaster.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Life: "+shadowMaster.hitPoints[baseSkillPoints1[i]-1]+"<br>Attack rating: "+shadowMaster.attackRating[baseSkillPoints1[i]-1]+"%<br>Resist all: "+shadowMaster.resistAll[baseSkillPoints1[i]-1]+"%<br>Mana cost: "+shadowMaster.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Bone Spirit";
                    document.getElementById("skillDescription").innerHTML="Releases a spirit of the restless undead that tracks its tarhet or finds one of its own";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Magic damage: "+boneSpirit.minMagicDmg[baseSkillPoints1[i]]+"-"+boneSpirit.maxMagicDmg[baseSkillPoints1[i]]+"<br>Mana cost: "+boneSpirit.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Magic damage: "+boneSpirit.minMagicDmg[baseSkillPoints1[i]-1]+"-"+boneSpirit.maxMagicDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: "+boneSpirit.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Bone Spirit receives bonuses from:</span><br>Teeth: +8% magic damage per level [+"+8*baseSkillPoints1[13]+"%]<br>Bone Wall: +8% magic damage per level [+"+8*baseSkillPoints1[18]+"%]<br>Bone Prison: +8% magic damage per level [+"+8*baseSkillPoints1[19]+"%]<br>Bone Spear: +8% magic damage per level [+"+8*baseSkillPoints1[15]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Mace Mastery";
                    document.getElementById("skillDescription").innerHTML="Passive - improves mace fighting skill";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+maceMastery.attackRating[baseSkillPoints1[i]]+"%<br>Damage: +"+maceMastery.damagePrecent[baseSkillPoints1[i]]+"%<br>Chance of critical strike:+"+maceMastery.chanceToCrit[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+maceMastery.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: +"+maceMastery.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Chance of critical strike: +"+maceMastery.chanceToCrit[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Holy Shock";
                    document.getElementById("skillDescription").innerHTML="When active, aura causes pulses of electricity to damage nearby enemies<br>Adds lightning damage to your attack<br>Area damage increases at closer range";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Lightning damage: 1-"+holyShock.lightDmgToAttack[baseSkillPoints1[i]]+" to your attack<br>Lightning damage: 1-"+holyShock.lightDmg[baseSkillPoints1[i]]+"<br>Radius: "+holyShock.radius[baseSkillPoints1[i]]+" yards<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Lightning damage: 1-"+holyShock.lightDmgToAttack[baseSkillPoints1[i]-1]+" to your attack<br>Lightning damage: 1-"+holyShock.lightDmg[baseSkillPoints1[i]-1]+"<br>Radius: "+holyShock.radius[baseSkillPoints1[i]-1]+" yards<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Holy Shock receives bonuses from:</span><br>Resist Lightning: +12% lightning damage per level [+"+12*baseSkillPoints1[8]+"%]<br>Salvation +4% lighning damage per level [+"+4*baseSkillPoints1[9]+"%]";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Lightning Mastery";
                    document.getElementById("skillDescription").innerHTML="Passive - increases all damage caused by your lightning spells";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Lightning damage: "+lightningMastery.lightDmg[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Lightning damage: "+lightningMastery.lightDmg[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Hunger";
                    document.getElementById("skillDescription").innerHTML="When in werewolf or werebear form, bite your enemies to gain life and mana<br>Damage: -75%<br>Mana cost: 3";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: "+hunger.attackRating[baseSkillPoints1[i]]+"%<br>Life steal: "+hunger.lifeManaSteal[baseSkillPoints1[i]]+"%<br>Mana steal: "+hunger.lifeManaSteal[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: "+hunger.attackRating[baseSkillPoints1[i]-1]+"%<br>Life steal: "+hunger.lifeManaSteal[baseSkillPoints1[i]-1]+"%<br>Mana steal: "+hunger.lifeManaSteal[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 17:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Critical Strike";
                    document.getElementById("skillDescription").innerHTML="Passive - your attacks have a chance to do double damage";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>"+criticalStrike.chanceToCrit[baseSkillPoints1[i]]+"% chance<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>"+criticalStrike.chanceToCrit[baseSkillPoints1[i]-1]+"% chance<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Psychic Hammer";
                    document.getElementById("skillDescription").innerHTML="Use the power of your mind to create a psychic blast to crush and knock back your enemies";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Damage: "+psychicHammer.minPhysicalDamage[baseSkillPoints1[i]]+"-"+psychicHammer.maxPhysicalDamage[baseSkillPoints1[i]]+"<br>Magic damage: "+psychicHammer.minMagicDmg[baseSkillPoints1[i]]+"-"+psychicHammer.maxMagicDmg[baseSkillPoints1[i]]+"<br>Mana cost: "+psychicHammer.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Damage: "+psychicHammer.minPhysicalDamage[baseSkillPoints1[i]-1]+"-"+psychicHammer.maxPhysicalDamage[baseSkillPoints1[i]-1]+"<br>Magic damage: "+psychicHammer.minMagicDmg[baseSkillPoints1[i]-1]+"-"+psychicHammer.maxMagicDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: "+psychicHammer.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Bone Shield";
                    document.getElementById("skillDescription").innerHTML="Creates an orbiting shield of bone that absorbs melee damage";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Absorbs "+boneArmor.damageShield[baseSkillPoints1[i]]+" damage<br>Mana cost: "+boneArmor.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Absorbs "+boneArmor.damageShield[baseSkillPoints1[i]-1]+" damage<br>Mana cost: "+boneArmor.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Bone Shield receives bonuses from:</span><br>Bone Wall +15 damage absorbed per level [+"+15*baseSkillPoints1[18]+"]<br>Bone Prison +15 damage absorbed per level [+"+15*baseSkillPoints1[19]+"]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Spear Mastery";
                    document.getElementById("skillDescription").innerHTML="Passive - improves spear fighting skill";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+spearMastery.attackRating[baseSkillPoints1[i]]+"%<br>Damage: +"+spearMastery.damagePrecent[baseSkillPoints1[i]]+"%<br>Chance of critical strike:+"+spearMastery.chanceToCrit[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+spearMastery.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: +"+spearMastery.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Chance of critical strike: +"+spearMastery.chanceToCrit[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Thorns";
                    document.getElementById("skillDescription").innerHTML="When active, aura reflects melee damage taken by you and your party back at your enemies";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Damage returned: "+thorns.dmgReturned[baseSkillPoints1[i]]+"%<br>Attacker takes damage of "+thorns.attackersTakeDmg[baseSkillPoints1[i]]+"<br>Radius: "+thorns.radius[baseSkillPoints1[i]]+" yards<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Damage returned: "+thorns.dmgReturned[baseSkillPoints1[i]-1]+"%<br>Attacker takes damage of "+thorns.attackersTakeDmg[baseSkillPoints1[i]-1]+"<br>Radius: "+thorns.radius[baseSkillPoints1[i]-1]+" yards<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Telekinesis";
                    document.getElementById("skillDescription").innerHTML="Uses the power of your mind to pick up items, use objects, and knock back enemies<br>Mana cost: 7";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Lightning damage: "+telekinesis.minLightDmg[baseSkillPoints1[i]]+"-"+telekinesis.maxLightDmg[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Lightning damage: "+telekinesis.minLightDmg[baseSkillPoints1[i]-1]+"-"+telekinesis.maxLightDmg[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Werebear";
                    document.getElementById("skillDescription").innerHTML="Transform into a werebear with unstoppable attacks<br>Max life: +75%<br>Duration: 40 seconds<br>Mana cost: 15";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Damage: "+werebear.damagePrecent[baseSkillPoints1[i]]+"%<br>Defense: "+werebear.defense[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Damage: "+werebear.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Defense: "+werebear.defense[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Werebear reveives bonuses from:</span><br>Lycanthropy";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 18:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Penetrate";
                    document.getElementById("skillDescription").innerHTML="Passive - increases your attack rating";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: "+penetrate.attackRating[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: "+penetrate.attackRating[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Cloak Of Shadows";
                    document.getElementById("skillDescription").innerHTML="Cast a shadow to blind nearby enemies lowering their defenses for a peroid of time<br>Range: 20 yards";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Defense: "+cloakOfShadows.defensePrecent[baseSkillPoints1[i]]+"%<br>Enemy defense: "+cloakOfShadows.monsterArmor[baseSkillPoints1[i]]+"%<br>Duration "+cloakOfShadows.duration[baseSkillPoints1[i]]+" seconds<br>Mana cost: 13<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Defense: "+cloakOfShadows.defensePrecent[baseSkillPoints1[i]-1]+"%<br>Enemy defense: "+cloakOfShadows.monsterArmor[baseSkillPoints1[i]-1]+"%<br>Duration "+cloakOfShadows.duration[baseSkillPoints1[i]-1]+" seconds<br>Mana cost: 13<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Bone Wall";
                    document.getElementById("skillDescription").innerHTML="Creates an impassable barrier of bone and debris<br>Duration: 24 seconds<br>Mana cost: 17";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Life: "+boneWall.hitPoints[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Life: "+boneWall.hitPoints[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Bone Wall receives bonuses from:</span><br>Bone Armor +10% life per level [+"+10*baseSkillPoints1[17]+"%]<br>Bone Prison +10% life per level [+"+10*baseSkillPoints1[19]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Iron Skin";
                    document.getElementById("skillDescription").innerHTML="Passive - improves defense";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Defense: +"+ironSkin.defense[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Defense: +"+ironSkin.defense[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Sanctuary";
                    document.getElementById("skillDescription").innerHTML="When active, aura damages the undead and knocks them back<br>Area damage increases at closer range";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Damage to undead: +"+sanctuary.dmgToUndead[baseSkillPoints1[i]]+"%<br>Magic damage: "+sanctuary.minMagicDmg[baseSkillPoints1[i]]+"-"+sanctuary.maxMagicDmg[baseSkillPoints1[i]]+"<br>Radius: "+sanctuary.radius[baseSkillPoints1[i]]+" yards<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Damage to undead: +"+sanctuary.dmgToUndead[baseSkillPoints1[i]-1]+"%<br>Magic damage: "+sanctuary.minMagicDmg[baseSkillPoints1[i]-1]+"-"+sanctuary.maxMagicDmg[baseSkillPoints1[i]-1]+"<br>Radius: "+sanctuary.radius[baseSkillPoints1[i]-1]+" yards<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Sanctuary receives bonuses from</span><br>Cleansing: +7% magic damage per level [+"+7*baseSkillPoints1[1]+"%]";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Teleport";
                    document.getElementById("skillDescription").innerHTML="Instantly moves to a destination within your line of sight";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Mana cost: "+teleport.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Mana cost: "+teleport.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Maul";
                    document.getElementById("skillDescription").innerHTML="When in werebear form, maul tour enemies for increasing extra damage with successive hits<br>Mana cost: 3<br>Duration: 20 seconds";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+maul.attackRating[baseSkillPoints1[i]]+"%<br>Attack speed: +3-"+maul.attackSpeed[baseSkillPoints1[i]]+"%<br>Damage: +30-"+maul.damagePrecent[baseSkillPoints1[i]]+"%<br>Stun lenght: "+maul.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+maul.attackRating[baseSkillPoints1[i]-1]+"%<br>Attack speed: +3-"+maul.attackSpeed[baseSkillPoints1[i]-1]+"%<br>Damage: +30-"+maul.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Stun lenght: "+maul.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 19:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Pierce";
                    document.getElementById("skillDescription").innerHTML="Passive - your missiles have a chance to pass through enemies that they hit";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>"+pierce.chanceToPierce[baseSkillPoints1[i]]+"% chance<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>"+pierce.chanceToPierce[baseSkillPoints1[i]-1]+"% chance<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Mind Blast";
                    document.getElementById("skillDescription").innerHTML="Using the power of your mind stun a group of enemies and convert the feeble-minded<br>Duration: 6-10 seconds";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Damage: "+mindBlast.minPhysicalDamage[baseSkillPoints1[i]]+"-"+mindBlast.maxPhysicalDamage[baseSkillPoints1[i]]+"<br>Stun lenght: "+mindBlast.stunDuration[baseSkillPoints1[i]]+" seconds<br>Chance to convert: "+mindBlast.chanceToConvert[baseSkillPoints1[i]]+"%<br>Mana cost: 15<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Damage: "+mindBlast.minPhysicalDamage[baseSkillPoints1[i]-1]+"-"+mindBlast.maxPhysicalDamage[baseSkillPoints1[i]-1]+"<br>Stun lenght: "+mindBlast.stunDuration[baseSkillPoints1[i]-1]+" seconds<br>Chance to convert: "+mindBlast.chanceToConvert[baseSkillPoints1[i]-1]+"%<br>Mana cost: 15<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Bone Prison";
                    document.getElementById("skillDescription").innerHTML="Creates a barrier of fossilized bone around your target<br>Duration: 24 seconds";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Life: "+bonePrison.hitPoints[baseSkillPoints1[i]]+"<br>Mana cost: "+bonePrison.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Life: "+bonePrison.hitPoints[baseSkillPoints1[i]-1]+"<br>Mana cost: "+bonePrison.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Bone Prison receives bonuses from:</span><br>Bone Armor +8% life per level [+"+8*baseSkillPoints1[17]+"%]<br>Bone Wall +8% life per level [+"+8*baseSkillPoints1[18]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Natural Resistance";
                    document.getElementById("skillDescription").innerHTML="Passive - Increases natural resistances to elemental and poison damage";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Resist all: +"+naturalResistance.resistAll[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Resist all: +"+naturalResistance.resistAll[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Conviction";
                    document.getElementById("skillDescription").innerHTML="When active, aura reduces the defenses and resistances of nearby enemies";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Defense: "+conviction.defensePrecent[baseSkillPoints1[i]]+"%<br>Resist all: "+conviction.maxResistPrecentage[baseSkillPoints1[i]]+"%<br>Radius: 13.3 yards<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Defense: "+conviction.defensePrecent[baseSkillPoints1[i]-1]+"%<br>Resist all: "+conviction.maxResistPrecentage[baseSkillPoints1[i]-1]+"%<br>Radius: 13.3 yards<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Energy Shield";
                    document.getElementById("skillDescription").innerHTML="Creates a magical shield that will consumes mana instead of health when you take damage<br>Mana consumed per damage: 200%<br>Mana cost: 5";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Absorbs "+energyShield.dmgAbsorbed[baseSkillPoints1[i]]+"%<br>Duration: "+energyShield.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Absorbs "+energyShield.dmgAbsorbed[baseSkillPoints1[i]-1]+"%<br>Duration: "+energyShield.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Energy Shield receives bonuses from:</span><br>Telekinesis: -6% mana consumed per level ["+-6*baseSkillPoints1[17]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Shock Wave";
                    document.getElementById("skillDescription").innerHTML="When in werebear from, create a shock wave that stuns nearby enemies<br>Mana cost: 7";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Damage: "+shockWave.minPhysicalDamage[baseSkillPoints1[i]]+"-"+shockWave.maxPhysicalDamage[baseSkillPoints1[i]]+"<br>Stun lenght: "+shockWave.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Damage: "+shockWave.minPhysicalDamage[baseSkillPoints1[i]-1]+"-"+shockWave.maxPhysicalDamage[baseSkillPoints1[i]-1]+"<br>Stun lenght: "+shockWave.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Shock Wave receives bonuses from:</span><br>Maul: +10% damage per level [+"+10*baseSkillPoints1[18]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 20:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Cold Arrow";
                    document.getElementById("skillDescription").innerHTML="Magically enhances your arrow or bolts by adding cold damage and a slowing effect cold arrows only do half of their regular damage";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Converts "+coldArrow.dmgToCold[baseSkillPoints1[i]]+"% physical damage to elemental damage<br>Attack rating: +"+coldArrow.attackRating[baseSkillPoints1[i]]+"<br>Cold damage: "+coldArrow.minColdDmg[baseSkillPoints1[i]]+"-"+coldArrow.maxColdDmg[baseSkillPoints1[i]]+"<br>Cold lenght: "+coldArrow.coldLenght[baseSkillPoints1[i]]+" seconds<br>Mana cost: "+coldArrow.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Converts "+coldArrow.dmgToCold[baseSkillPoints1[i]-1]+"% physical damage to elemental damage<br>Attack rating: +"+coldArrow.attackRating[baseSkillPoints1[i]-1]+"<br>Cold damage: "+coldArrow.minColdDmg[baseSkillPoints1[i]-1]+"-"+coldArrow.maxColdDmg[baseSkillPoints1[i]-1]+"<br>Cold lenght: "+coldArrow.coldLenght[baseSkillPoints1[i]-1]+" seconds<br>Mana cost: "+coldArrow.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Cold Arrow receives bonuses from:</span><br>Ice Arrow: +12% cold damage per level [+"+12*baseSkillPoints1[21]+"%]";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Shock Web";
                    document.getElementById("skillDescription").innerHTML="Throw a web of lightning to shock your enemies";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Spikes: "+shockWeb.numOfSpikes[baseSkillPoints1[i]]+"<br>Average lightning damage: 1-"+shockWeb.lightDmg[baseSkillPoints1[i]]+" per second<br>Duration: 3.6<br>Mana cost: 6<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Spikes: "+shockWeb.numOfSpikes[baseSkillPoints1[i]-1]+"<br>Average lightning damage: 1-"+shockWeb.lightDmg[baseSkillPoints1[i]-1]+" per second<br>Duration: 3.6<br>Mana cost: 6<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Shock Web receives bonuses from:</span><br>Fire blast: +1 spike per 3 levels [+"+baseSkillPoints1[24]/3+"]<br>Charged Bolt Sentry: +17% Lightning damage per level [+"+17*baseSkillPoints1[21]+"%]<br>Lightning Sentry: +17% Lightning damage per level [+"+17*baseSkillPoints1[22]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Dim Vision";
                    document.getElementById("skillDescription").innerHTML="Curses a group of monsters reducing their vision radius<br>Mana cost: 9";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Radius: "+dimVision.radius[baseSkillPoints1[i]]+" yards<br>Duration: "+dimVision.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Radius: "+dimVision.radius[baseSkillPoints1[i]-1]+" yards<br>Duration: "+dimVision.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Leap";
                    document.getElementById("skillDescription").innerHTML="Jump into the air and knock back nearby enemies when you land<br>Mana cost: 2";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Range radius: "+leap.radius[baseSkillPoints1[i]]+" yards<br>Knockback radius: "+leap.knockbackRadius[baseSkillPoints1[i]]+" yards<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Range radius: "+leap.radius[baseSkillPoints1[i]-1]+" yards<br>Knockback radius: "+leap.knockbackRadius[baseSkillPoints1[i]-1]+" yards<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Sacrifice";
                    document.getElementById("skillDescription").innerHTML="Increased accuracy and damage at the cost of life";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+sacrifice.attackRating[baseSkillPoints1[i]]+"%<br>Damage: +"+sacrifice.damagePrecent[baseSkillPoints1[i]]+"%<br>"+sacrifice.dmgToSelf[baseSkillPoints1[i]]+"% damage to self<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+sacrifice.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: +"+sacrifice.damagePrecent[baseSkillPoints1[i]-1]+"%<br>"+sacrifice.dmgToSelf[baseSkillPoints1[i]-1]+"% damage to self<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Sacrifice receives bonuses from:</span><br>Redemption +15% damage per level [+"+15*baseSkillPoints1[5]+"%]<br>Fanaticism +5% damage per level [+"+5*baseSkillPoints1[13]+"%]";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Inferno";
                    document.getElementById("skillDescription").innerHTML="Creates a continuous jet of flame to scorch your enemies";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Average fire damage: "+inferno.minFireDmg[baseSkillPoints1[i]]+"-"+inferno.maxFireDmg[baseSkillPoints1[i]]+" per second<br>Range: "+inferno.range[baseSkillPoints1[i]]+" yards<br>Mana cost: "+inferno.manaCost[baseSkillPoints1[i]]+" per second<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Average fire damage: "+inferno.minFireDmg[baseSkillPoints1[i]-1]+"-"+inferno.maxFireDmg[baseSkillPoints1[i]-1]+" per second<br>Range: "+inferno.range[baseSkillPoints1[i]-1]+" yards<br>Mana cost: "+inferno.manaCost[baseSkillPoints1[i]-1]+" per second<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Inferno receives bonuses from:</span><br>Warmth: +16% fire damage per level [+"+16*baseSkillPoints1[27]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Oak Sage";
                    document.getElementById("skillDescription").innerHTML="Summon a spirit pet that increases life for you and your party";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Life: "+oakSage.hitPoints[baseSkillPoints1[i]]+"<br>Max life: +"+oakSage.bonusLife[baseSkillPoints1[i]]+"%<br>Radius: "+oakSage.radius[baseSkillPoints1[i]]+" yards<br>Mana cost: "+oakSage.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Life: "+oakSage.hitPoints[baseSkillPoints1[i]-1]+"<br>Max life: +"+oakSage.bonusLife[baseSkillPoints1[i]-1]+"%<br>Radius: "+oakSage.radius[baseSkillPoints1[i]-1]+" yards<br>Mana cost: "+oakSage.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 21:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Ice Arrow";
                    document.getElementById("skillDescription").innerHTML="Magically enhances your arrow or bolt to freeze your enemies";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+iceArrow.attackRating[baseSkillPoints1[i]]+"%<br>Cold damage: "+iceArrow.minColdDmg[baseSkillPoints1[i]]+"-"+iceArrow.maxColdDmg[baseSkillPoints1[i]]+"<br>Freezes for "+iceArrow.duration[baseSkillPoints1[i]]+" seconds<br>Mana cost: "+iceArrow.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+iceArrow.attackRating[baseSkillPoints1[i]-1]+"%<br>Cold damage: "+iceArrow.minColdDmg[baseSkillPoints1[i]-1]+"-"+iceArrow.maxColdDmg[baseSkillPoints1[i]-1]+"<br>Freezes for "+iceArrow.duration[baseSkillPoints1[i]-1]+" seconds<br>Mana cost: "+iceArrow.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Ice Arrow receives bonuses from:</span><br>Cold Arrow: +8% cold damage per level [+"+8*baseSkillPoints1[20]+"%]<br>Freezing Arrow: +5% cold damage per level [+"+5*baseSkillPoints1[22]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Charged Bolt Sentry";
                    document.getElementById("skillDescription").innerHTML="A trap that emits charged bolts at enemies that pass near<br>Shoots 5 times<br>Releases 5 charged bolts";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Lightning damage: 1-"+chargedStrike.lightDmg[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Lightning damage: 1-"+chargedStrike.lightDmg[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Charged Bolt Sentry receives bonuses from:</span><br>Shock Web: +1 bolt per 3 levels [+"+baseSkillPoints1[20]/3+"]<br>Lightning Sentry: +1 shot per 4 levels [+"+baseSkillPoints1[22]/4+"]<br>Fire Blast: +9% lightning damage per level [+"+9*baseSkillPoints1[24]+"%]<br>Lightning Sentry: +9% lightning damage per level [+"+9*baseSkillPoints1[22]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Confuse";
                    document.getElementById("skillDescription").innerHTML="Curses a monster to force it to attack random targets<br>Mana cost: 13";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Radius: "+confuse.radius[baseSkillPoints1[i]]+" yards<br>Duration: "+confuse.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Radius: "+confuse.radius[baseSkillPoints1[i]-1]+" yards<br>Duration: "+confuse.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Leap Attack";
                    document.getElementById("skillDescription").innerHTML="Leaps to and attacks target enemy and damages surrounding enemies<br>Mana cost: 10<br>Radius: 4.6 yards";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Damage: "+leapAttack.minPhysicalDamage[baseSkillPoints1[i]]+"-"+leapAttack.maxPhysicalDamage[baseSkillPoints1[i]]+"<br>Attack rating: "+leapAttack.attackRating[baseSkillPoints1[i]]+"%<br>Damage: "+leapAttack.damagePrecent[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Damage: "+leapAttack.minPhysicalDamage[baseSkillPoints1[i]-1]+"-"+leapAttack.maxPhysicalDamage[baseSkillPoints1[i]-1]+"<br>Attack rating: "+leapAttack.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: "+leapAttack.damagePrecent[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Leap Attack receives bonuses from:</span><br>Leap: +10% damage per level [+"+10*baseSkillPoints1[20]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Zeal";
                    document.getElementById("skillDescription").innerHTML="Allows you to attack multiple adjacent enemies with a single attack";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>"+zeal.numOfHits[baseSkillPoints1[i]]+" hits<br>Attack rating: +"+zeal.attackRating[baseSkillPoints1[i]]+"%<br>Damage: +"+zeal.damagePrecent[baseSkillPoints1[i]]+"%<br>Mana cost: 2<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>"+zeal.numOfHits[baseSkillPoints1[i]-1]+" hits<br>Attack rating: +"+zeal.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: +"+zeal.damagePrecent[baseSkillPoints1[i]-1]+"<br>Mana cost: 2<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Zeal receives bonuses from:</span><br>Sacrifice +12% damage per level [+"+12*baseSkillPoints1[20]+"%]";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Blaze";
                    document.getElementById("skillDescription").innerHTML="Creates a wall of fire in your wake to scorch your enemies";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Average fire damage: "+blaze.minFireDmg[baseSkillPoints1[i]]+"-"+blaze.maxFireDmg[baseSkillPoints1[i]]+" per second<br>Fire duration: "+blaze.duration[baseSkillPoints1[i]]+" seconds<br>Run/Walk speed: +"+blaze.walkRunSpeed[baseSkillPoints1[i]]+"%<br>Blaze duration: "+blaze.duration[baseSkillPoints1[i]]+" seconds<br>Mana cost: "+blaze.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Average fire damage: "+blaze.minFireDmg[baseSkillPoints1[i]-1]+"-"+blaze.maxFireDmg[baseSkillPoints1[i]-1]+" per second<br>Fire duration: "+blaze.duration[baseSkillPoints1[i]-1]+" seconds<br>Run/Walk speed: +"+blaze.walkRunSpeed[baseSkillPoints1[i]-1]+"%<br>Blaze duration: "+blaze.duration[baseSkillPoints1[i]-1]+" seconds<br>Mana cost: "+blaze.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Blaze receives bonuses from:</span><br>Warmth: +6% fire damage per level [+"+6*baseSkillPoints1[27]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Heart Of Wolverine";
                    document.getElementById("skillDescription").innerHTML="Summon a spirit pet that adds the damage and attack rating of you and your party";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Life: "+heartOfWolverine.hitPoints[baseSkillPoints1[i]]+"<br>Attack rating: +"+heartOfWolverine.attackRating[baseSkillPoints1[i]]+"%<br>Damage: +"+heartOfWolverine.damagePrecent[baseSkillPoints1[i]]+"%<br>Radius: "+oakSage.radius[baseSkillPoints1[i]]+" yards<br>Mana cost: "+oakSage.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Life: "+heartOfWolverine.hitPoints[baseSkillPoints1[i]-1]+"<br>Attack rating: +"+heartOfWolverine.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: +"+heartOfWolverine.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Radius: "+oakSage.radius[baseSkillPoints1[i]-1]+" yards<br>Mana cost: "+oakSage.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 22:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Freezing Arrow";
                    document.getElementById("skillDescription").innerHTML="Magically enhances an arrow or bolt to freeze entire groups of monsters<br>Radius: 3.3 yards";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+freezingArrow.attackRating[baseSkillPoints1[i]]+"%<br>Cold damage: "+freezingArrow.minColdDmg[baseSkillPoints1[i]]+"-"+freezingArrow.maxColdDmg[baseSkillPoints1[i]]+"<br>Freezes for 2 seconds<br>Mana cost: "+freezingArrow.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+freezingArrow.attackRating[baseSkillPoints1[i]-1]+"%<br>Cold damage: "+freezingArrow.minColdDmg[baseSkillPoints1[i]-1]+"-"+freezingArrow.maxColdDmg[baseSkillPoints1[i]-1]+"<br>Freezes for 2 seconds<br>Mana cost: "+freezingArrow.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Freezing Arrow receives bonuses from:</span><br>Cold Arrow: +12% cold damage per level [+"+12*baseSkillPoints1[20]+"%]<br>Ice Arrow: +5% freeze lenght per level [+"+5*baseSkillPoints1[21]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Lightning Sentry";
                    document.getElementById("skillDescription").innerHTML="A trap that shoots lightning to scorch passing enemies<br>Shoots 10 times";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Lightning damage: 1-"+lightningSentry.lightDmg[baseSkillPoints1[i]]+"<br>Mana cost: 20<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Lightning damage: 1-"+lightningSentry.lightDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: 20<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Lightning Sentry receives bonuses from:</span><br>Shock Web: +18% Lightning damage per level [+"+18*baseSkillPoints1[20]+"%]<br>Charged Bolt Sentry: +18% lightning damage per level [+"+18*baseSkillPoints1[21]+"%]";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Attract";
                    document.getElementById("skillDescription").innerHTML="Curses a monster ti become the target of all nearby monsters, this curse may not be overriden by another curse<br>Radius: 6 yards<br>Mana cost: 17";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Duration: "+attract.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Duration: "+attract.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Whirlwind";
                    document.getElementById("skillDescription").innerHTML="A whirling dance of death that cuts a path through the legions of your enemies";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+whirlwind.attackRating[baseSkillPoints1[i]]+"<br>Damage: "+whirlwind.damagePrecent[baseSkillPoints1[i]]+"%<br>Mana cost: "+whirlwind.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+whirlwind.attackRating[baseSkillPoints1[i]-1]+"<br>Damage: "+whirlwind.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Mana cost: "+whirlwind.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Vengeance";
                    document.getElementById("skillDescription").innerHTML="Fire, lightning and cold damage are added to each successful attack";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+vengeance.attackRating[baseSkillPoints1[i]]+"%<br>Fire damage: +"+vengeance.fireDmg[baseSkillPoints1[i]]+"%<br>Cold damage: +"+vengeance.coldDmg[baseSkillPoints1[i]]+"%<br>Lighning damage: +"+vengeance.lightDmg[baseSkillPoints1[i]]+"%<br>Cold lenght: "+vengeance.coldLenght[baseSkillPoints1[i]]+" seconds<br>Mana cost: "+vengeance.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+vengeance.attackRating[baseSkillPoints1[i]-1]+"%<br>Fire damage: +"+vengeance.fireDmg[baseSkillPoints1[i]-1]+"%<br>Cold damage: +"+vengeance.coldDmg[baseSkillPoints1[i]-1]+"%<br>Lighning damage: +"+vengeance.lightDmg[baseSkillPoints1[i]-1]+"%<br>Cold lenght: "+vengeance.coldLenght[baseSkillPoints1[i]-1]+" seconds<br>Mana cost: "+vengeance.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Vengenace receives bonuses from:</span><br>Resist Fire: +10% fire damage per level [+"+10*baseSkillPoints1[6]+"%]<br>Resist Cold: +10% cold damage per level [+"+10*baseSkillPoints1[7]+"%]<br>Resist Lightning: +10% lightning damage per level [+"+10*baseSkillPoints1[8]+"%]<br>Salvation +2% elemental damage per level [+"+2*baseSkillPoints1[9]+"%]";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Fire Wall";
                    document.getElementById("skillDescription").innerHTML="Creates a wall of flame that burns nearby enemies<br>Fire duration: 3.6 seconds";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Average fire damage: "+fireWall.minFireDmg[baseSkillPoints1[i]]+"-"+fireWall.maxFireDmg[baseSkillPoints1[i]]+" per second<br>Range: "+fireWall.radius[baseSkillPoints1[i]]+" yards<br>Mana cost: "+fireWall.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Average fire damage: "+fireWall.minFireDmg[baseSkillPoints1[i]-1]+"-"+fireWall.maxFireDmg[baseSkillPoints1[i]-1]+" per second<br>Range: "+fireWall.radius[baseSkillPoints1[i]-1]+" yards<br>Mana cost: "+fireWall.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Fire Wall receives bonuses from:</span><br>Warmth: +4% fire damage per level [+"+4*baseSkillPoints1[27]+"%]<br>Inferno: +1% fire damage per level [+"+1*baseSkillPoints1[20]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Spirit Of Barbs";
                    document.getElementById("skillDescription").innerHTML="Summon a spirit pet that reflects damage taken by you and your party";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Life: "+spiritsOFBarbs.hitPoints[baseSkillPoints1[i]]+"<br>Attacker takes damage of "+spiritsOFBarbs.dmgReturned[baseSkillPoints1[i]]+"<br>Mana cost: "+spiritsOFBarbs.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Life: "+spiritsOFBarbs.hitPoints[baseSkillPoints1[i]-1]+"<br>Attacker takes damage of "+spiritsOFBarbs.dmgReturned[baseSkillPoints1[i]-1]+"<br>Mana cost: "+spiritsOFBarbs.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 23:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Magic Arrow";
                    document.getElementById("skillDescription").innerHTML="Creates a magical arrow or bolt that does extra damage";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Converts "+magicArrow.dmgToMagic[baseSkillPoints1[i]]+"% physical damage to magic damage<br>Attack rating: +"+magicArrow.attackRating[baseSkillPoints1[i]]+"%<br>Damage: +"+magicArrow.magicDmg[baseSkillPoints1[i]]+"<br>Mana cost: "+magicArrow.dmgToMagic[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Converts "+magicArrow.dmgToMagic[baseSkillPoints1[i]-1]+"% physical damage to magic damage<br>Attack rating: +"+magicArrow.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: +"+magicArrow.magicDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: "+magicArrow.dmgToMagic[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Death Sentry";
                    document.getElementById("skillDescription").innerHTML="Trap that shoots lightning at your enemies or oxplodes nearby corpses laying waste to more enemies<br>Corpse explosion damage: 40-80% of corpse life<br>Shoots 5 times";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Lightning damage: 1-"+deathSentry.lightDmg[baseSkillPoints1[i]]+"<br>Radius: "+deathSentry.radius[baseSkillPoints1[i]]+" yards<br>Mana cost: 20<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Lightning damage: 1-"+lightningSentry.lightDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: 20<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Lightning Sentry receives bonuses from:</span><br>Fire blast: +1 shots per 3 levels [+"+baseSkillPoints1[24]/3+"]<br>Lightning Sentry: +12% lightning damage per level [+"+12*baseSkillPoints1[22]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Amplify Damage";
                    document.getElementById("skillDescription").innerHTML="Curses a group of enemiesm incrasing the non-magic damage they recieve<br>Damage taken: +100%<br>Mana cost: 4";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Radius: "+amplifyDamage.radius[baseSkillPoints1[i]]+" yards<br>Duration: "+amplifyDamage.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Radius: "+amplifyDamage.radius[baseSkillPoints1[i]-1]+" yards<br>Duration: "+amplifyDamage.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Bash";
                    document.getElementById("skillDescription").innerHTML="Powerful blow that increases the damage done to enemies and knocks them back<br>Mana cost: 2";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+bash.attackRating[baseSkillPoints1[i]]+"<br>Damage: +"+bash.damagePrecent[baseSkillPoints1[i]]+"%<br>Damage: +"+bash.physicalDamage[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+bash.attackRating[baseSkillPoints1[i]-1]+"<br>Damage: +"+bash.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Damage: +"+bash.physicalDamage[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>bash receives bonuses from:</span><br>Stun: +5% damage per level [+"+5*baseSkillPoints1[24]+"%]<br> Concentrate: +5% attack rating per level [+"+5*baseSkillPoints1[25]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Conversion";
                    document.getElementById("skillDescription").innerHTML="Converts monsters to fight against other foul demons and beasts";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Duration: 16 seconds<br>Mana cost: 4<br>Chance to convert: "+conversion.chanceToConvert[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Duration: 16 seconds<br>Mana cost: 4<br>Chance to convert: "+conversion.chanceToConvert[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Fire Bolt";
                    document.getElementById("skillDescription").innerHTML="Creates a magical flaming missile<br>Mana cost: 2.5";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Fire damage: "+fireBolt.minFireDmg[baseSkillPoints1[i]]+"-"+fireBolt.maxFireDmg[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Fire damage: "+fireBolt.minFireDmg[baseSkillPoints1[i]-1]+"-"+fireBolt.maxFireDmg[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Fire Bolt receives bonuses from:</span><br>FIre Ball: +16% fire damage per level [+"+16*baseSkillPoints1[24]+"%]<br>Meteor: +16% fire damage per level [+"+16*baseSkillPoints1[25]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Raven";
                    document.getElementById("skillDescription").innerHTML="Summon ravens to peck out the eyes of your enemies<br>Mana cost per raven: 6";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+raven.attackRating[baseSkillPoints1[i]]+"%<br>Damage: "+raven.minPhysicalDamage[baseSkillPoints1[i]]+"-"+raven.maxPhysicalDamage[baseSkillPoints1[i]]+"<br>"+raven.numOfHits[baseSkillPoints1[i]]+" hits<br>Max ravens: "+raven.numOfRavens[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+raven.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: "+raven.minPhysicalDamage[baseSkillPoints1[i]-1]+"-"+raven.maxPhysicalDamage[baseSkillPoints1[i]-1]+"<br>"+raven.numOfHits[baseSkillPoints1[i]-1]+" hits<br>Max ravens: "+raven.numOfRavens[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Raven receives bonuses from:</span><br>Summon Spirit Wolf: +12% damage per level [+"+12*baseSkillPoints1[24]+"%]<br>Summon Dire Wolf: +12% damage per level [+"+12*baseSkillPoints1[25]+"%]<br>Summon Grizzly: +12% damage per level [+"+12*baseSkillPoints1[26]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 24:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Multiple Shot";
                    document.getElementById("skillDescription").innerHTML="Magically splits one arrow or bolt into many<br>75% weapon damage";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>"+multipleShot.numOfArrows[baseSkillPoints1[i]]+" arrows<br>Mana cost: "+multipleShot.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>"+multipleShot.numOfArrows[baseSkillPoints1[i]-1]+" arrows<br>Mana cost: "+multipleShot.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Multiple Shot receives bonuses from:</span><br>Guided Arrow: +12% damage per level [+"+12*baseSkillPoints1[25]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Fire Blast";
                    document.getElementById("skillDescription").innerHTML="Throw a fire bomb to blast your enemies to bits<br>Radius: 3.3 yards";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Fire damage: "+fireBlast.minFireDmg[baseSkillPoints1[i]]+"-"+fireBlast.maxFireDmg[baseSkillPoints1[i]]+"<br>Mana cost: "+fireBlast.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Fire damage: "+fireBlast.minFireDmg[baseSkillPoints1[i]-1]+"-"+fireBlast.maxFireDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: "+fireBlast.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Lightning Sentry receives bonuses from:</span><br>Shock Web: +11% fire damage per level [+"+11*baseSkillPoints1[20]+"%]<br>Charged Bolt Sentry: +11% fire damage per level [+"+11*baseSkillPoints1[21]+"%]<br>Wake Of Fire: +11% fire damage per level [+"+11*baseSkillPoints1[25]+"%]<br>Lightning Sentry: +11% fire damage per level [+"+11*baseSkillPoints1[22]+"%]<br>Wake Of Inferno: +11% fire damage per level [+"+11*baseSkillPoints1[26]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Iron Maiden";
                    document.getElementById("skillDescription").innerHTML="Curses a group of enemies, causing them to damage themselves when damagin others<br>Radius: 4.6 yards<br>Mana cost: 5";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Damage returned: "+ironMaiden.dmgReturned[baseSkillPoints1[i]]+"%<br>Duration: "+ironMaiden.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Damage returned: "+ironMaiden.dmgReturned[baseSkillPoints1[i]-1]+"%<br>Duration: "+ironMaiden.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Stun";
                    document.getElementById("skillDescription").innerHTML="Stuns your target for a short time and increases your attack rating<br>Mana cost: 2";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+stun.attackRating[baseSkillPoints1[i]]+"<br>Stun lenght: "+stun.duration[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+stun.attackRating[baseSkillPoints1[i]-1]+"<br>Stun lenght: "+stun.duration[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Stun receives bonuses from:</span><br>Bash: +8% damage per level [+"+8*baseSkillPoints1[23]+"%]<br>Concentrate: +5% attack rating per level [+"+5*baseSkillPoints1[25]+"%]<br>War Cry: +5% duration per level [+"+5*baseSkillPoints1[3]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Holy Bolt";
                    document.getElementById("skillDescription").innerHTML="A bolt of divine energy that damages demons and undead or heals allies";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Magic damage: "+holyBolt.minMagicDmg[baseSkillPoints1[i]]+"-"+holyBolt.maxMagicDmg[baseSkillPoints1[i]]+"<br>Heals: "+holyBolt.minHeal[baseSkillPoints1[i]]+"-"+holyBolt.maxHeal[baseSkillPoints1[i]]+"<br>Mana cost: 2<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Magic damage: +"+holyBolt.minMagicDmg[baseSkillPoints1[i]-1]+"-"+holyBolt.maxMagicDmg[baseSkillPoints1[i]-1]+"<br>Heals: "+holyBolt.minHeal[baseSkillPoints1[i]-1]+"-"+holyBolt.maxHeal[baseSkillPoints1[i]-1]+"<br>Mana cost: 2<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Holy Bolt receives bonuses from:</span><br>Fist of the heavens: +50% magic damage per level [+"+50*baseSkillPoints1[26]+"%]<br>Prayer +20% life healed per level [+"+20*baseSkillPoints1[0]+"%]";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Fire Ball";
                    document.getElementById("skillDescription").innerHTML="Creates an explosive sphere of fiery death to engulf your enemies<br>Radius: 2.6 yards";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Fire damage: "+fireBall.minFireDmg[baseSkillPoints1[i]]+"-"+fireBall.maxFireDmg[baseSkillPoints1[i]]+"<br>Mana cost: "+fireBall.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Fire damage: "+fireBall.minFireDmg[baseSkillPoints1[i]-1]+"-"+fireBall.maxFireDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: "+fireBall.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Fire Ball receives bonuses from:</span><br>FIre Bolt: +14% fire damage per level [+"+14*baseSkillPoints1[23]+"%]<br>Meteor: +14% fire damage per level [+"+14*baseSkillPoints1[25]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Summon Spirit Wolf";
                    document.getElementById("skillDescription").innerHTML="Summon a wolf with teleporting ability to fight by your side<br>Mana cost: 15";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Life: "+summonSpiritWolf.hitPoints[baseSkillPoints1[i]]+"<br>Cold damage: "+summonSpiritWolf.minColdDmg[baseSkillPoints1[i]]+"-"+summonSpiritWolf.maxColdDmg[baseSkillPoints1[i]]+"<br>Max wolves: "+summonSpiritWolf.numOfWolves[baseSkillPoints1[i]]+"<br>Attack rating: "+summonSpiritWolf.attackRating[baseSkillPoints1[i]]+"%<br>Defense: "+summonSpiritWolf.defense[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Life: "+summonSpiritWolf.hitPoints[baseSkillPoints1[i]-1]+"<br>Cold damage: "+summonSpiritWolf.minColdDmg[baseSkillPoints1[i]-1]+"-"+summonSpiritWolf.maxColdDmg[baseSkillPoints1[i]-1]+"<br>Max wolves: "+summonSpiritWolf.numOfWolves[baseSkillPoints1[i]-1]+"<br>Attack rating: "+summonSpiritWolf.attackRating[baseSkillPoints1[i]-1]+"%<br>Defense: "+summonSpiritWolf.defense[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Summon Spirit Wolf receives bonuses from:</span><br>Summon Dire Wolf: +15% life per level [+"+15*baseSkillPoints1[25]+"%]<br>Summon Grizzly: +10% damage per level [+"+10*baseSkillPoints1[26]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 25:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Guided Arrow";
                    document.getElementById("skillDescription").innerHTML="Enhances your arrows and bolts to track your target or seek one of its own<br>Always hit";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Damage: +"+guidedArrow.damagePrecent[baseSkillPoints1[i]]+"%<br>Mana cost: "+guidedArrow.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Damage: +"+guidedArrow.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Mana cost: "+guidedArrow.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Guided Arrow receives bonuses from:</span><br>Multiple Shot: +12% damage per level [+"+12*baseSkillPoints1[24]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Wake Of Fire";
                    document.getElementById("skillDescription").innerHTML="A trap that emits waves of fire<br>Shoots 5 times";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Fire damage: "+wakeOfFire.minFireDmg[baseSkillPoints1[i]]+"-"+wakeOfFire.maxFireDmg[baseSkillPoints1[i]]+"<br>Mana cost: 13<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Fire damage: "+wakeOfFire.minFireDmg[baseSkillPoints1[i]-1]+"-"+wakeOfFire.maxFireDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: 13<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Wake Of Fire receives bonuses from:</span><br>Fire Blast: +10% fire damage per level [+"+10*baseSkillPoints1[24]+"%]<br>Wake Of Inferno: +10% fire damage per level [+"+10*baseSkillPoints1[26]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Life Tap";
                    document.getElementById("skillDescription").innerHTML="Curses a group of monsters so that damaging them gives the attacker life<br>Heals 50% of attack damage<br>Mana cost: 9";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Radius: "+lifeTap.radius[baseSkillPoints1[i]]+" yards<br>Duration: "+lifeTap.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Radius: "+lifeTap.radius[baseSkillPoints1[i]-1]+" yards<br>Duration: "+lifeTap.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Concentrate";
                    document.getElementById("skillDescription").innerHTML="Attack that is not interruptible and improves attack rating and defense<br>Mana cost: 2";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+concentrate.attackRating[baseSkillPoints1[i]]+"%<br>Damage: +"+concentrate.damagePrecent[baseSkillPoints1[i]]+"%<br>Defense: +"+concentrate.defense[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+concentrate.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: +"+concentrate.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Defense: +"+concentrate.defense[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Concentrate receives bonuses from:</span><br>Bash: +5% damage per level [+"+5*baseSkillPoints1[23]+"%]<br>Battle Orders: +10% magic damage per level [+"+10*baseSkillPoints1[5]+"%]<br>Berserk: +1% magic damage per level [+"+1*baseSkillPoints1[26]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Blessed Hammer";
                    document.getElementById("skillDescription").innerHTML="Summons an ethereal hammer that spirals outwards damaging enemies it hits<br>Damage to undead +50%";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Magic damage: "+blessedHammer.minMagicDmg[baseSkillPoints1[i]]+"-"+blessedHammer.maxMagicDmg[baseSkillPoints1[i]]+"<br>Mana cost: "+blessedHammer.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Magic damage: "+blessedHammer.minMagicDmg[baseSkillPoints1[i]-1]+"-"+blessedHammer.maxMagicDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: "+blessedHammer.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Blessed Hammer receives bonuses from:</span><br>Blessed Aim: +14% magic damage per level [+"+14*baseSkillPoints1[11]+"%]<br>Vigor +14% magic damage per level [+"+14*baseSkillPoints1[4]+"%]";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Meteor";
                    document.getElementById("skillDescription").innerHTML="Summons a meteor from the heavens to crush and incinerate your enemies<br>Radius: 4 yards";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Fire damage: "+meteor.minFireDmg[baseSkillPoints1[i]]+"-"+meteor.maxFireDmg[baseSkillPoints1[i]]+"<br>Average fire damage: "+meteor.minFireDmgPerSecond[baseSkillPoints1[i]]+"-"+meteor.maxFireDmgPerSecond[baseSkillPoints1[i]]+"<br>Mana cost: "+meteor.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Fire damage: "+meteor.minFireDmg[baseSkillPoints1[i]-1]+"-"+meteor.maxFireDmg[baseSkillPoints1[i]-1]+"<br>Average fire damage: "+meteor.minFireDmgPerSecond[baseSkillPoints1[i]-1]+"-"+meteor.maxFireDmgPerSecond[baseSkillPoints1[i]-1]+"<br>Mana cost: "+meteor.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Meteor receives bonuses from:</span><br>Fire Bolt: +5% fire damage per level [+"+5*baseSkillPoints1[23]+"%]<br>Fire Ball: +5% fire damage per level [+"+5*baseSkillPoints1[24]+"%]<br>Inferno: +3% average fire damage per second per level [+"+3*baseSkillPoints1[20]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Summon Dire Wolf";
                    document.getElementById("skillDescription").innerHTML="Summon a wolf that becomes enraged eating corpses to increase damage it does to enemies<br>Mana cost: 20";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Life: "+summonDireWolf.hitPoints[baseSkillPoints1[i]]+"<br>Damage: "+summonDireWolf.minPhysicalDamage[baseSkillPoints1[i]]+"-"+summonDireWolf.maxPhysicalDamage[baseSkillPoints1[i]]+"<br>Max wolves: "+summonDireWolf.numOfWolves[baseSkillPoints1[i]]+"<br>Max life: "+summonDireWolf.bonusLife[baseSkillPoints1[i]]+"%<br>Defense: "+summonDireWolf.defense[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Life: "+summonDireWolf.hitPoints[baseSkillPoints1[i]-1]+"<br>Damage: "+summonDireWolf.minPhysicalDamage[baseSkillPoints1[i]-1]+"-"+summonDireWolf.maxPhysicalDamage[baseSkillPoints1[i]-1]+"<br>Max wolves: "+summonDireWolf.numOfWolves[baseSkillPoints1[i]-1]+"<br>Max life: "+summonDireWolf.bonusLife[baseSkillPoints1[i]-1]+"%<br>Defense: "+summonDireWolf.defense[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Summon Dire Wolf receives bonuses from:</span><br>Summon Spirit Wolf: +25% attack rating per level [+"+25*baseSkillPoints1[24]+"%]<br>Summon Spirit Wolf: +10% defense per level [+"+10*baseSkillPoints1[24]+"%]<br>Summon Grizzly: +10% damage per level [+"+10*baseSkillPoints1[26]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 26:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Strafe";
                    document.getElementById("skillDescription").innerHTML="Magically splits one arrow into several that target multiple nearby enemies<br>Mana cost: 11";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+strafe.attackRating[baseSkillPoints1[i]]+"%<br>Attacks up to "+strafe.numOfAttacks[baseSkillPoints1[i]]+" targets<br>Damage: +"+strafe.damagePrecent[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+strafe.attackRating[baseSkillPoints1[i]-1]+"%<br>Attacks up to "+strafe.numOfAttacks[baseSkillPoints1[i]-1]+" targets<br>Damage: +"+strafe.damagePrecent[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Strafe receives bonuses from:</span><br>Multiple Shot: +5% damage per level [+"+5*baseSkillPoints1[24]+"%]<br>Guided Arrow +10% damage per level [+"+10*baseSkillPoints1[25]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Wake Of Inferno";
                    document.getElementById("skillDescription").innerHTML="Trap that sprays fire at passing enemies<br>Shoots 10 times<br>Range: 6.6 yards";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Average fire damage: "+wakeOfInferno.minFireDmg[baseSkillPoints1[i]]+"-"+wakeOfInferno.maxFireDmg[baseSkillPoints1[i]]+"<br>Mana cost: 20<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Average fire damage: "+wakeOfInferno.minFireDmg[baseSkillPoints1[i]-1]+"-"+wakeOfInferno.maxFireDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: 20<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Wake Of Inferno receives bonuses from:</span><br>Wake Of Fire: +0.5 yards per level [+"+baseSkillPoints1[25]/2+"%]<br>Fire Blast: +18% fire damage per level [+"+18*baseSkillPoints1[24]+"%]<br>Wake Of Fire: +18% fire damage per level [+"+18*baseSkillPoints1[25]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Lower Resist";
                    document.getElementById("skillDescription").innerHTML="Curses an enemy to take more damage from all magical attacks, lowers resistances of monsters, lowers maximum resistances of hostile players<br>Mana cost: 22<br>Mana cost: 9";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Resist all "+lowerResist.resistAll[baseSkillPoints1[i]]+"%<br>Radius: "+lowerResist.radius[baseSkillPoints1[i]]+" yards<br>Duration: "+lowerResist.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Resist all "+lowerResist.resistAll[baseSkillPoints1[i]-1]+"%<br>Radius: "+lowerResist.radius[baseSkillPoints1[i]-1]+" yards<br>Duration: "+lowerResist.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Berserk";
                    document.getElementById("skillDescription").innerHTML="A powerful but reckless attack that increases damage and attack rating but decreases defense<br>Mana cost: 4";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+berserk.attackRating[baseSkillPoints1[i]]+"%<br>Magic damage: +"+berserk.magicDmg[baseSkillPoints1[i]]+"%<br>Duration: "+berserk.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+berserk.attackRating[baseSkillPoints1[i]-1]+"%<br>Magic damage: +"+berserk.magicDmg[baseSkillPoints1[i]-1]+"%<br>Duration: "+berserk.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Berserk receives bonuses from:</span><br>Howl: +10% magic damage per level [+"+10*baseSkillPoints1[0]+"%]<br>Battle Orders: +10% magic damage per level [+"+10*baseSkillPoints1[5]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Fist Of The Heavens";
                    document.getElementById("skillDescription").innerHTML="Lightning strikes your target as holy bolts seek out nearby enemies";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Mana cost: 25<br>Lightning damage: "+fistOfHeavens.minLightDmg[baseSkillPoints1[i]]+"-"+fistOfHeavens.maxLightDmg[baseSkillPoints1[i]]+"<br>Holy bolt damage: "+fistOfHeavens.minHolyBoltDmg[baseSkillPoints1[i]]+"-"+fistOfHeavens.maxHolyBoltDmg[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Mana cost: 25<br>Lightning damage: "+fistOfHeavens.minLightDmg[baseSkillPoints1[i]-1]+"-"+fistOfHeavens.maxLightDmg[baseSkillPoints1[i]-1]+"<br>Holy bolt damage: "+fistOfHeavens.minHolyBoltDmg[baseSkillPoints1[i]-1]+"-"+fistOfHeavens.maxHolyBoltDmg[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Fist Of The Heavens receives bonuses from:</span><br>Holy Bolt: +15% "
                    +"holy bolt damage per level [+"+15*baseSkillPoints1[24]+"%]<br>Holy Shock: +7% lightning damage per level [+"+7*baseSkillPoints1[16]+"%]";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Fire Mastery";
                    document.getElementById("skillDescription").innerHTML="Passive - increases all damage caused by your fire spells";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Fire damage: +"+fireMastery.fireDmg[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Fire damage: +"+fireMastery.fireDmg[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Summon Grizzly";
                    document.getElementById("skillDescription").innerHTML="Summon a ferocious grizzly bear<br>Mana cost: 40";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Life: "+summonGrizzly.hitPoints[baseSkillPoints1[i]]+"<br>Damage: "+summonGrizzly.minPhysicalDamage[baseSkillPoints1[i]]+"-"+summonGrizzly.maxPhysicalDamage[baseSkillPoints1[i]]+"<br>Damage: +"+summonGrizzly.damagePrecent[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Life: "+summonGrizzly.hitPoints[baseSkillPoints1[i]-1]+"<br>Damage: "+summonGrizzly.minPhysicalDamage[baseSkillPoints1[i]-1]+"-"+summonGrizzly.maxPhysicalDamage[baseSkillPoints1[i]-1]+"<br>Damage: +"+summonGrizzly.damagePrecent[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Summon Grizzly receives bonuses from:</span><br>Summon Spirit Wolf: +25% attack rating per level [+"+25*baseSkillPoints1[24]+"%]<br>Summon Spirit Wolf: +10% defense per level [+"+10*baseSkillPoints1[24]+"%]<br>Summon Dire Wolf: +15% life per level [+"+15*baseSkillPoints1[25]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 27:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Fire Arrow";
                    document.getElementById("skillDescription").innerHTML="Magically enhances your arrows or bolts with fire";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Converts "+fireArrow.dmgToFire[baseSkillPoints1[i]]+"% physical damage to elemental damage<br>Attack rating: +"+fireArrow.attackRating[baseSkillPoints1[i]]+"%<br>Fire damage: "+fireArrow.minFireDmg[baseSkillPoints1[i]]+"-"+fireArrow.maxFireDmg[baseSkillPoints1[i]]+"<br>Mana cost: 3<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Converts "+fireArrow.dmgToFire[baseSkillPoints1[i]-1]+"% physical damage to elemental damage<br>Attack rating: +"+fireArrow.attackRating[baseSkillPoints1[i]-1]+"%<br>Fire damage: "+fireArrow.minFireDmg[baseSkillPoints1[i]-1]+"-"+fireArrow.maxFireDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: 3<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Fire Arrow receives bonuses from:</span><br>Exploding Arrow +12% damage per level [+"+12*baseSkillPoints1[28]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Blade Sentinel";
                    document.getElementById("skillDescription").innerHTML="Set a spinning blade to patrol between you and target point<br>75% Weapon damage";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Damage: "+bladeSentinel.minPhysicalDamage[baseSkillPoints1[i]]+"-"+bladeSentinel.maxPhysicalDamage[baseSkillPoints1[i]]+"<br>Duration: "+bladeSentinel.duration[baseSkillPoints1[i]]+" seconds<br>Mana cost: 7<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Damage: "+bladeSentinel.minPhysicalDamage[baseSkillPoints1[i]-1]+"-"+bladeSentinel.maxPhysicalDamage[baseSkillPoints1[i]-1]+"<br>Duration: "+bladeSentinel.duration[baseSkillPoints1[i]-1]+" seconds<br>Mana cost: 7<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Blade Sentinel receives bonuses from:</span><br>Blade Fury: +10% damage per level [+"+10*baseSkillPoints1[28]+"%]<br>Blade Shield: +10% damage per level [+"+10*baseSkillPoints1[29]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Weaken";
                    document.getElementById("skillDescription").innerHTML="Curses a group of enemies, reducing the amount of damage they inflict<br>Mana cost: 4";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Enemy damage: -"+weaken.physicalReduction[baseSkillPoints1[i]]+"%<br>Radius: "+weaken.radius[baseSkillPoints1[i]]+" yards<br>Duration: "+weaken.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Enemy damage: -"+weaken.physicalReduction[baseSkillPoints1[i]-1]+"%<br>Radius: "+weaken.radius[baseSkillPoints1[i]-1]+" yards<br>Duration: "+weaken.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Double Swing";
                    document.getElementById("skillDescription").innerHTML="When two weapons are equipped, attack two targets if possible, or one target twice";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+doubleSwing.attackRating[baseSkillPoints1[i]]+"%<br>Mana cost: "+doubleSwing.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+doubleSwing.attackRating[baseSkillPoints1[i]-1]+"%<br>Mana cost: "+doubleSwing.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Double Swing receives bonuses from:</span><br>bash: +10% damage per level [+"+10*baseSkillPoints1[23]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Smite";
                    document.getElementById("skillDescription").innerHTML="Temporarily stun enemy by bashing it with your shield<br>Always hit";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Mana cost: 2<br>damage: +"+smite.damagePrecent[baseSkillPoints1[i]]+"%<br>Stun lenght: "+smite.stunDuration[baseSkillPoints1[i]]+"seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Mana cost: 2<br>damage: +"+smite.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Stun lenght: "+smite.stunDuration[baseSkillPoints1[i]-1]+"seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Warmth";
                    document.getElementById("skillDescription").innerHTML="Passive - increases the rate at which you recover mana";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Mana recovery rate: "+warmth.manaRecovery[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Mana recovery rate: "+warmth.manaRecovery[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Poison Creeper";
                    document.getElementById("skillDescription").innerHTML="Summon a vine that spreads disease to all it contacts<br>Mana cost: 8";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Life: "+poisonCreeper.hitPoints[baseSkillPoints1[i]]+"<br>Poison damage: "+poisonCreeper.minPoisonDmg[baseSkillPoints1[i]]+"-"+poisonCreeper.maxPoisonDmg[baseSkillPoints1[i]]+" over 4 seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Life: "+poisonCreeper.hitPoints[baseSkillPoints1[i]-1]+"<br>Poison damage: "+poisonCreeper.minPoisonDmg[baseSkillPoints1[i]-1]+"-"+poisonCreeper.maxPoisonDmg[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Poison Creeper receives bonuses from:</span><br>Rabies: +10% poison damage per level [+"+10*baseSkillPoints1[12]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 28:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Exploding Arrow";
                    document.getElementById("skillDescription").innerHTML="Enchats an arrow or bolt that explodes on contact, damaging all nearby enemies";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+explodingArrow.attackRating[baseSkillPoints1[i]]+"%<br>Fire damage: "+explodingArrow.minFireDmg[baseSkillPoints1[i]]+"-"+explodingArrow.maxFireDmg[baseSkillPoints1[i]]+"<br>Mana cost: "+explodingArrow.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+explodingArrow.attackRating[baseSkillPoints1[i]-1]+"%<br>Fire damage: "+explodingArrow.minFireDmg[baseSkillPoints1[i]-1]+"-"+explodingArrow.maxFireDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: "+explodingArrow.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Exploding Arrow receives bonuses from:</span><br>Fire Arrow +14% damage per level [+"+14*baseSkillPoints1[27]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Blade Fury";
                    document.getElementById("skillDescription").innerHTML="Throw spinning blades to slice up your enemies<br>75% Weapon damage";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+bladeFury.attackRating[baseSkillPoints1[i]]+"%<br>Damage: "+bladeFury.minPhysicalDamage[baseSkillPoints1[i]]+"-"+bladeFury.maxPhysicalDamage[baseSkillPoints1[i]]+"<br>Mana cost: "+bladeFury.manaCost[baseSkillPoints1[i]]+" per blade<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+bladeFury.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: "+bladeFury.minPhysicalDamage[baseSkillPoints1[i]-1]+"-"+bladeFury.maxPhysicalDamage[baseSkillPoints1[i]-1]+"<br>Mana cost: "+bladeFury.manaCost[baseSkillPoints1[i]-1]+" per blade<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Blade Fury receives bonuses from:</span><br>Blade Sentinel: +10% damage per level [+"+10*baseSkillPoints1[27]+"%]<br>Blade Shield: +10% damage per level [+"+10*baseSkillPoints1[29]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Terror";
                    document.getElementById("skillDescription").innerHTML="Curses a group of monsters, causing them to flee in terror<br>Radius: 2.6 yards<br>Mana cost: 7";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Duration: "+terror.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Duration: "+terror.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Double Throw";
                    document.getElementById("skillDescription").innerHTML="Allows you to throw two different throwing weapons at the same time";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+doubleThrow.attackRating[baseSkillPoints1[i]]+"%<br>Damage: "+doubleThrow.damagePrecent[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+doubleThrow.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: "+doubleThrow.damagePrecent[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Double Throw receives bonuses from:</span><br>Double Swing: +8% damage per level [+"+8*baseSkillPoints1[27]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Charge";
                    document.getElementById("skillDescription").innerHTML="Charge into battle and attack enemy";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+charge.attackRating[baseSkillPoints1[i]]+"%<br>Damage: +"+charge.damagePrecent[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+charge.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: +"+charge.damagePrecent[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Charge receives bonuses from:</span><br>Vigor: +20% damage per level [+"+20*baseSkillPoints1[4]+"%]<br>Might: +20% damage per level [+"+20*baseSkillPoints1[10]+"%]";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Enchant";
                    document.getElementById("skillDescription").innerHTML="Enchants equipped weapon of targeted character or minion <br>Adds fire damage to melee weapons<br>Adds one-third fire damage to ranged weapons";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+enchant.attackRating[baseSkillPoints1[i]]+"%<br>Fire damage: +"+enchant.minFireDmg[baseSkillPoints1[i]]+"-"+enchant.maxFireDmg[baseSkillPoints1[i]]+"<br>Duration: "+enchant.duration[baseSkillPoints1[i]]+" seconds<br>Mana cost: "+enchant.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+enchant.attackRating[baseSkillPoints1[i]-1]+"%<br>Fire damage: +"+enchant.minFireDmg[baseSkillPoints1[i]-1]+"-"+enchant.maxFireDmg[baseSkillPoints1[i]-1]+"<br>Duration: "+enchant.duration[baseSkillPoints1[i]-1]+" seconds<br>Mana cost: "+enchant.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Enchant receives bonuses from:</span><br>Warmth: +9% fire damage per level [+"+9*baseSkillPoints1[27]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Carrion Vine";
                    document.getElementById("skillDescription").innerHTML="Summon a vine that eats corpses and replenishes your life<br>Mana cost: 10";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Life: "+carrionVine.hitPoints[baseSkillPoints1[i]]+"<br>Heal: "+carrionVine.heal[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Life: "+carrionVine.hitPoints[baseSkillPoints1[i]-1]+"<br>Heal: "+carrionVine.heal[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
        case 29:
            switch(classPicked)
            {
                case "Amazon":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Immolation Arrow";
                    document.getElementById("skillDescription").innerHTML="Enhances arrows or bolts to cause severe fire damage and creates a pyre upon impact";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+immolationArrow.attackRating[baseSkillPoints1[i]]+"%<br>Fire explosion damage: "+immolationArrow.minFireDmg[baseSkillPoints1[i]]+"-"+immolationArrow.maxFireDmg[baseSkillPoints1[i]]+"<br>Average fire damage: "+immolationArrow.minDuration[baseSkillPoints1[i]]+"-"+immolationArrow.maxDuration[baseSkillPoints1[i]]+" per second<br>Fire duration: 4 seconds<br>Mana cost: "+immolationArrow.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+immolationArrow.attackRating[baseSkillPoints1[i]-1]+"%<br>Fire explosion damage: "+immolationArrow.minFireDmg[baseSkillPoints1[i]-1]+"-"+immolationArrow.maxFireDmg[baseSkillPoints1[i]-1]+"<br>Average fire damage: "+immolationArrow.minDuration[baseSkillPoints1[i]-1]+"-"+immolationArrow.maxDuration[baseSkillPoints1[i]-1]+" per second<br>Fire duration: 4 seconds<br>Mana cost: "+immolationArrow.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Immolation Arrow receives bonuses from:</span><br>Fire Arrow: +5% average fire damage per second per level [+"+5*baseSkillPoints1[27]+"%]<br>Exploding Arrow: +10% fire damage per level [+"+10*baseSkillPoints1[28]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Assassin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Blade Shield";
                    document.getElementById("skillDescription").innerHTML="Spinning blades slice enemies who stray too close<br>75% Weapon damage<br>Radius: 4 yards";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Damage: "+bladeShield.minPhysicalDamage[baseSkillPoints1[i]]+"-"+bladeShield.maxPhysicalDamage[baseSkillPoints1[i]]+"<br>Duration: "+bladeShield.duration[baseSkillPoints1[i]]+"<br>Mana cost: "+bladeShield.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Damage: "+bladeShield.minPhysicalDamage[baseSkillPoints1[i]-1]+"-"+bladeShield.maxPhysicalDamage[baseSkillPoints1[i]-1]+"<br>Duration: "+bladeShield.duration[baseSkillPoints1[i]-1]+"<br>Mana cost: "+bladeShield.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Blade Shield receives bonuses from:</span><br>Blade Sentinel: +10% damage per level [+"+10*baseSkillPoints1[27]+"%]<br>Blade Fury: +10% damage per level [+"+10*baseSkillPoints1[28]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    } 
                break;
                case "Necromancer":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Decrepify";
                    document.getElementById("skillDescription").innerHTML="Curses a group of enemies to make them slow, weak and take amplified damage<br>Enemy damage: -50%<br>Attack speed: -50%<br>Run/Walk speed: -50%<br>Radius: 4 yards<br>Mana cost: 11";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Duration: "+decrepify.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Duration: "+decrepify.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Barbarian":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Frenzy";
                    document.getElementById("skillDescription").innerHTML="Allows you to swing two weapons at once. Each successful attack increases your overall speed<br>Requires you to equip two weapons<br>Duration: 6.4 seconds<br>Mana cost: 3";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Attack rating: +"+frenzy.attackRating[baseSkillPoints1[i]]+"%<br>Damage: +"+frenzy.damagePrecent[baseSkillPoints1[i]]+"%<br>Attack speed: +7-"+frenzy.attackSpeed[baseSkillPoints1[i]]+"%<br>Run/Walk speed: +47-"+frenzy.velocity[baseSkillPoints1[i]]+"%<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Attack rating: +"+frenzy.attackRating[baseSkillPoints1[i]-1]+"%<br>Damage: +"+frenzy.damagePrecent[baseSkillPoints1[i]-1]+"%<br>Attack speed: +7-"+frenzy.attackSpeed[baseSkillPoints1[i]-1]+"%<br>Run/Walk speed: +47-"+frenzy.velocity[baseSkillPoints1[i]-1]+"%<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Frenzy receives bonuses from:</span><br>Double Swing: +8% damage per level [+"+8*baseSkillPoints1[27]+"%]<br>Taunt: +8% damage per level [+"+8*baseSkillPoints1[1]+"%]<br>Increased Stamina: +0.4 seconds per level [+"+0.4*baseSkillPoints1[12]+" seconds]<br>Berserk: +1% magic damage per level [+"+1*baseSkillPoints1[26]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Paladin":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Holy Shield";
                    document.getElementById("skillDescription").innerHTML="Enhances your shield with divine power";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Mana cost: 35<br>Smite damage: +"+holyShield.minSmiteDmg[baseSkillPoints1[i]]+"-"+holyShield.maxSmiteDmg[baseSkillPoints1[i]]+"<br>Defense: +"+holyShield.defensePrecent[baseSkillPoints1[i]]+"%<br>Successful blocking: +"+holyShield.blockPrecentage[baseSkillPoints1[i]]+"%<br>Duration: "+holyShield.duration[baseSkillPoints1[i]]+" seconds<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Smite damage: +"+holyShield.minSmiteDmg[baseSkillPoints1[i]-1]+"-"+holyShield.maxSmiteDmg[baseSkillPoints1[i]-1]+"<br>Defense: +"+holyShield.defensePrecent[baseSkillPoints1[i]-1]+"%<br>Successful blocking: +"+holyShield.blockPrecentage[baseSkillPoints1[i]-1]+"%<br>Duration: "+holyShield.duration[baseSkillPoints1[i]-1]+" seconds<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Sorceress":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Hydra";
                    document.getElementById("skillDescription").innerHTML="Summons a multi-headed beast of flame to reduce your enemies ashes<br>Max hydras: 6<br>Duration: 10 seconds";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Hydra fire damage: "+hydra.minFireDmg[baseSkillPoints1[i]]+"-"+hydra.maxFireDmg[baseSkillPoints1[i]]+"<br>Mana cost: "+hydra.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Hydra fire damage: "+hydra.minFireDmg[baseSkillPoints1[i]-1]+"-"+hydra.maxFireDmg[baseSkillPoints1[i]-1]+"<br>Mana cost: "+hydra.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'>Hydra receives bonuses from:</span><br>Fire Bolt: +3% fire damage per level [+"+3*baseSkillPoints1[23]+"%]<br>Fire Ball: +3% fire damage per level [+"+3*baseSkillPoints1[24]+"%]<br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
                case "Druid":
                    infoDisplay()
                    document.getElementById("skillName").innerHTML="Solar Creeper";
                    document.getElementById("skillDescription").innerHTML="Summon a vine that eats eats corpses and replenishes your mana";
                    document.getElementById("reqLvl").innerHTML="Required level: "+skillRequirements[i];
                    document.getElementById("nextSkillInfo").innerHTML="Next level<br>Life: "+solarCreeper.hitPoints[baseSkillPoints1[i]]+"<br>Mana recovery rate: +"+solarCreeper.manaRecovery[baseSkillPoints1[i]]+"%<br>Mana cost: "+solarCreeper.manaCost[baseSkillPoints1[i]]+"<br>";
                    document.getElementById("currentSkillInfo").innerHTML="Current skill level: "+(baseSkillPoints1[i]+plusToSkills)+" <br>[base: "+baseSkillPoints1[i]+"] <br>Life: "+solarCreeper.hitPoints[baseSkillPoints1[i]-1]+"<br>Mana recovery rate: +"+solarCreeper.manaRecovery[baseSkillPoints1[i]-1]+"%<br>Mana cost: "+solarCreeper.manaCost[baseSkillPoints1[i]-1]+"<br><br>";
                    document.getElementById("bonuses").innerHTML="<span id='skillName'></span><br>";
                    if(baseSkillPoints1[i]==0)
                    {
                        document.getElementById("currentSkillInfo").style.display="none";
                    }
                    else if(baseSkillPoints1[i]==20)
                    {
                        document.getElementById("reqLvl").innerHTML="Maximum level reached";
                        document.getElementById("nextSkillInfo").style.display="none";
                        document.getElementById("infoColor").style.color="rgb(243, 60, 60)";
                    }
                break;
            }
        break;
    }
    function infoDisplay()
    {
            document.getElementById("skillName").style.display="inline";
            document.getElementById("skillDescription").style.display="inline";
            document.getElementById("reqLvl").style.display="inline";
            document.getElementById("nextSkillInfo").style.display="inline";
            document.getElementById("currentSkillInfo").style.display="inline";
            document.getElementById("bonuses").style.display="inline";
            document.getElementById("infoColor").style.color="rgba(255, 255, 255, 0.808)";
    }
}
}