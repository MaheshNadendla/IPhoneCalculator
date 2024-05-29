
let ans="0";


function MovePointer()
{
    let input=document.querySelector('.Inputs')
    input.setSelectionRange(ans.length,ans.length);
    input.focus();
    
}





function left () {
    document.querySelector('.applications').classList.toggle('active-slide');
    document.querySelector('.span1').classList.add('active-screen');
    document.querySelector('.span2').classList.remove('active-screen');
    
}
function right() {
    document.querySelector('.applications').classList.toggle('active-slide');
    document.querySelector('.span1').classList.remove('active-screen');
    document.querySelector('.span2').classList.add('active-screen');
}

const openMenu = document.querySelector('.open-button');
openMenu.addEventListener("click", OpenAppScreen);
function OpenAppScreen () {
    document.querySelector('.lock-screen').classList.replace('active', 'animate-lock-screen');
    document.querySelector('.lock-screen').style.height = '0';
    document.querySelector('.application-menu').classList.add('active');


        document.querySelector('.bs1').innerHTML=`
        
        <img class="AppleImg" src="Apple2Bg.jpg" alt="" />

        `;


}


function Calculator()
{

    document.querySelector('.application-menu').style=`visibility: hidden;
    display:none;`;

    document.querySelector('.bs1').innerHTML=``;

    document.querySelector('.iphone-frame').style=`background-color:black`;

    document.querySelector('.CalDiv').style=`display:block`;



}

function Coming()
{

    document.querySelector('.application-menu').style=`visibility: hidden;
    display:none;`;

    document.querySelector('.AvaSoon').style=`display: flex;
    justify-content: center;
    align-items: center;`;


}



let bill=0;

function Backs()
{

    if(bill>0)
    {

        document.querySelector('.CalDiv').style=`display:none`;

        document.querySelector('.AvaSoon').style=`display: none;`;

        

        document.querySelector('.application-menu').style=`visibility: visible;
        display:block;`;

        document.querySelector('.bs1').innerHTML=`<img class="AppleImg" src="Apple2Bg.jpg" alt="" />`;

    }

}

function Checker()
{
    bill=bill+1;

}


document.querySelector('.Inputs').value=`${ans}`;


function One()
{
    if(ans==="0" || ans==="Error")
        ans=1
    else
    ans=ans+"1";
    document.querySelector('.Inputs').value=`${ans}`;

    MovePointer();
}

function Two()
{
    if(ans==="0" || ans==="Error")
        ans=2
    else
    ans=ans+"2";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Thr()
{
    if(ans==="0" || ans==="Error")
        ans=3
    else
    ans=ans+"3";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Fou()
{
    if(ans==="0" || ans==="Error")
        ans=4
    else
    ans=ans+"4";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Fiv()
{
    if(ans==="0" || ans==="Error")
        ans=5
    else
    ans=ans+"5";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Six()
{
    if(ans==="0" || ans==="Error")
        ans=6
    else
    ans=ans+"6";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Sev()
{
    if(ans==="0" || ans==="Error")
        ans=7
    else
    ans=ans+"7";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Eig()
{
    if(ans==="0" || ans==="Error")
        ans=8
    else
    ans=ans+"8";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Nin()
{
    if(ans==="0" || ans==="Error")
        ans=9
    else
    ans=ans+"9";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Zer()
{
    if(ans==="0" || ans==="Error")
        ans="0";
    else
    ans=ans+"0";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function AllClear()
{
    ans="0";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Back(){
    if (ans.length>0)
    ans=ans.slice(0,-1)
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();

}

function Dot()
{
    ans=ans+".";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Plus()
{
    ans=ans+"+";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Minus()
{
    ans=ans+"-";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Mul()
{
    ans=ans+"*";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Div()
{
    ans=ans+"/";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}

function Mod()
{
    ans=ans+"%";
    document.querySelector('.Inputs').value=`${ans}`;
    MovePointer();
}
function Equal(){

    try{
        ans=document.querySelector('.Inputs').value;
        console.log(ans);
        ans=String(eval(ans));
        document.querySelector('.Inputs').value=`${ans}`;
    }
    catch(e){
        ans="Error";
        document.querySelector('.Inputs').value=`${ans}`;
    }
    MovePointer();

}


document.addEventListener("keydown",e=>{

    
    if(e.key==="Enter")
        Equal();

    if(e.key==="=")
        Equal();


})
