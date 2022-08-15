const
str = `DOM Manipluation

Simulate hacker typing in browser
`;
let span;
function ann(i){
    b = document.getElementById('span');
    sp = document.createElement('span');
    sp.setAttribute('id', 'sp' + i);
    sp.innerText = str[i];
    b.appendChild(sp);
    if(i < str.length - 1){
        setTimeout(() => {ann(i+=1)}, 70);
    }else{
        setTimeout( () => {
        st(0);
        }, 3000);
        span = document.querySelectorAll('span');
        icon(0);
    }
}

function st(i){
    document.getElementById('sp' + i).style.fontSize = '2vw';
    document.getElementById('sp' + i).style.textShadow = '0 0 7px cyan';
    if(i < str.length - 1){
        setTimeout(() => {
            st(i+=1);
        }, 70);
        // setTimeout(() => {
            na(document.getElementById('sp' + i), i);
        // }, 100);
        }else{
            // na(0);
            col(str.indexOf(c), c.length);
            na(document.getElementById('sp' + i), i);
        }
}
let ex = 0;
let pro = '...refresh page to go again!';
function na(ct, i){
        return setTimeout(() => {
            ct.style.fontSize = '6vw';
            ct.innerText =  ct.innerText.toUpperCase();
            
            if (i >= str.indexOf(pr) && (ex < pro.length)){
                ct.innerText = pro[ex++];
            }else if (i > (pro.length + str.indexOf(pr)) - 1){
                ct.remove()
            }else if ((i >= str.indexOf(c)) /* && i <c.length - 1 */){
                ct.style.fontWeight = "bold";
                }
            // else{
            //     span[span.length - 1]['remove']();
            // };
        }, 400);
    // if(i < str.length - 1){
    //     setTimeout(() => {na(i+=1)}, 70);
    //     } 
}

function col(i, l){
    // let i=str.indexOf(c);
    
    s = document.getElementById('sp' + i);
    if (i < (l + str.indexOf(c))){
        s.style.color = "white";
        s.style.textShadow = "0 0 7px red";
        if (s.innerText !== "\u0020"){
            // s.style.borderBottom= '2px solid darkred';
        }
    }
    // s.style.fontFamily = "cooper black";
    if(i < str.length - 2){
        setTimeout(() => {
            col(i+=1, l);
        }, 30)
    }
}

let ico = ["img/wineI.ico","img/cakeI.ico"];
let initial = document['head']['querySelector']('title')['innerText'];
let icon = function(i){
    if (i == 0){
    document['head']['querySelector']('link')['href'] = ico[i];
    document['head']['querySelector']('title')['innerText'] = c.toUpperCase();
    setTimeout(() => {
        icon(++i);
    }, 700)
    }else if(i == 1){
        document['head']['querySelector']('link')['href'] = ico[i];
        document['head']['querySelector']('title')['innerText'] = initial;
    setTimeout(() => {
        icon(i=0);
    }, 700)
    }
    
}

let color = (i) => {
    sp = document.querySelectorAll('span')
    if (i < sp.length){
    sp[i].style.color = 'white';
    sp[i].style.borderBottom= 'initial';
    setTimeout(() => {color(i+=1)}, 30);
    
    }
}

let cap = (i) => {
    sp = document.querySelectorAll('span')
    if (i < sp.length){
    sp[i].innerText = sp[i].innerText.toLowerCase()
    setTimeout(() => {cap(i+=1)}, 30);
    }
}
