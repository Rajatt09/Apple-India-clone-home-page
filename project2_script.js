let aind = document.getElementsByClassName("ind");
let hello = document.getElementsByClassName("hello");
let cbtn = document.getElementsByClassName("crouselbtn");
let vidbtn = document.getElementById("vidbtn");
let video = document.getElementById("myvideo");
let ind = Array.from(aind);
let slide = document.getElementsByClassName("slide");
let temp1 = -90,temp2=0,check1=9,t1=-180,check2=0,t2=810;
let k=0,count=0,id,o=0,vidcount=0;

function openNavhello() {
    document.getElementById("mySidenavhello").style.height = "100%";
  }
  
function closeNavhello() {
    document.getElementById("mySidenavhello").style.height = "0";
  }


let futu = document.getElementsByClassName("footdropdown");
let footopenbt = document.getElementsByClassName("footopenbt");
let footclosebt = document.getElementsByClassName("footclosebt");

function footdraw(num,ht) {
    futu[num].style.height = `${ht}rem`;
    footopenbt[num].style.display = "none";
    footclosebt[num].style.display = "block";
    futu[num].style.transition = "height 1s";
}

function footshrink(num) {
    futu[num].style.height = `0rem`;
    footopenbt[num].style.display = "block";
    footclosebt[num].style.display = "none";
    futu[num].style.transition = "none";
}




function vidfun(e) {
    // e.preventDefault();
    if (vidcount == 0) {
        vidbtn.innerHTML = `<i class="fa fa-play-circle"></i>`;
                video.pause();
        
        vidcount = 1;
    }
    else if(vidcount == 1) {

        video.play();

        vidbtn.innerHTML = `<i class="fa fa-pause-circle"></i>`;
        vidcount = 0;
    }

}


id = setInterval(fun1,3000);

for (let i=0; i<10; i++) {
    slide[i].style.marginLeft = `${temp1}rem`;
    temp1 = temp1+90;
}


function crousanim() {
    if(count==1) {
        id = setInterval(fun1,2000);
        cbtn[0].innerHTML = `<i class="fa fa-pause-circle-o"></i>`;
        count = 0;
    }
    else {
        clearInterval(id);
        count =1;
        cbtn[0].innerHTML = `<i class="fa fa-play-circle-o"></i>`;
    }

}


function fun1() {

    temp2 = temp2+90;
    if(check1 == -1) {
        check1 = 9;
    }
    for (let i=9; i>=0; i--) {
        if (i==check1) {
            slide[i].style.marginLeft = `${t1}rem`;                      
            slide[i].style.transform = `translateX(${temp2}rem)`;
        }
        else {
            slide[i].style.transform = `translateX(${temp2}rem)`;
        }

    }
    check1--;
    t1=t1-90;

            if (k==9) {
                ind[k].style.backgroundColor = "rgb(61, 60, 60,0.4)";
                k=0;
                ind[k].style.backgroundColor = "rgb(19, 18, 18)";
            }
            else {
                ind[k].style.backgroundColor = "rgb(61, 60, 60,0.4)";
                ind[k+1].style.backgroundColor = "rgb(19, 18, 18)";
                k++;

            }

            if (o==0) {
                slide[o+1].style.opacity = "0.4";
                hello[o+1].style.height = "0";
                slide[o].style.opacity = "1";
                hello[o].style.height = "7.5rem";
                o++;
            }
            else if (o==1) {
                slide[o-1].style.opacity = "0.4";
                hello[o-1].style.height = "0";
                slide[10-o].style.opacity = "1";
                hello[10-o].style.height = "7.5rem";
                o++;
            }
            else if (o==11) {
                o=1;
                slide[o-1].style.opacity = "0.4";
                hello[o-1].style.height = "0";
                slide[10-o].style.opacity = "1";
                hello[10-o].style.height = "7.5rem";
                o++;
            }
            else {
                slide[11-o].style.opacity = "0.4";
                hello[11-o].style.height = "0";
                slide[10-o].style.opacity = "1";
                hello[10-o].style.height = "7.5rem";
                o++;
            }


}

// function fun2() {
//     temp2=temp2-90;
//     slide[9].style.marginLeft = `${810}rem`;
//     if(check2 == 10) {
//         check2 = 0;
//     }
//     for (let i=0; i<10; i++) {
//         console.log(13);
//         if (i==check2) { 
//         slide[i].style.marginLeft = `${t2}rem`;                      
//         slide[i].style.transform = `translateX(${temp2}rem)`;
//     }
//     else {
//         slide[i].style.transform = `translateX(${temp2}rem)`;
//     }

// }
// check2++;
// t2=t2+90;
// // temp2 = temp2+200;

// }        
