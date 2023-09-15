 /*   document.getElementById('images').addEventListener('click', function(e){
    console.log("clicked inside the ui");
 }, true)

 document.getElementById('owl').addEventListener('click', function(e){
    console.log("owl clicked");
   // e.stopPropagation();
 }, true)    */
/*-------------------------------------------------------
 document.getElementById('images').addEventListener('click', function(e){
    console.log("clicked inside the ui");
 }, false)

 document.getElementById('owl').addEventListener('click', function(e){
    console.log("owl clicked");
   // e.stopPropagation();
 }, false) ---------*/

 document.getElementById('google').addEventListener('click', function(e){
   e.preventDefault();
   e.stopPropagation();
    console.log("google clicked");

 }, false)



  // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode
/*
    //type
    document.getElementById('photoshop').addEventListener('click', function(e) {
        console.log(`${e.type} `);
    }, false)
    // output is click type hai

    // timestamp
    document.getElementById("japan").addEventListener('click', function(e){
        console.log(`${e.timeStamp}`);
    })

    //target

    document.getElementById("river").addEventListener('click' , function(e){
        console.log(`${e.Target.style.visibility ="hidden"}`)
    }, false)

     // clientX, clientY, screenX, screenY
     document.getElementById("prayer").addEventListener('click' , function(e){
        console.log(`${e.clientX}`)
    }, false)
*/

document.querySelector("#images").addEventListener('click' , function(e){
     console.log(e.target.tagName);
    if(e.target.tagName === 'IMG') {
        console.log(e.target.id);
    let removeIt = e.target.parentNode;
    removeIt.parentNode.removeChild(removeIt);
   // removeIt.remove();
    }
})

//shortcut method

//removeIt.parentNode.removeChild(removeIt);