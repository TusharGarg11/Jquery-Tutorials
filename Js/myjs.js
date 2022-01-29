// Syntax for Document ready
$(document).ready(function(){

    console.log("Jquery Tutorial");
// Basic Syntax
// $('selector').action()
// $('p').click() // click on the paragraph
// $('p').click(function(){  //do this when we click on p
//     console.log("Hello World");
// })


// Types of Selector in Jquery
// Element Selector : select element based on element name
// Id selector : based on id
// Class Selector: based opn class

// Element Selector
// $('p').click(function(){
//     $('p').hide();
// })

// Id Selector
// $('#one').click(function(){
//     $('#one').hide();
// })

// Class Selector
// $('.odd').click(function(){
//     $('.odd').hide();
// })


// Selection using this keyword
// $('p').click(function(){
//     $(this).hide();
// })

// selection using *

// Events in jquery

// Mouse Event :-click,dblclick,mouseenter,mouseleave
// Keyboard Event:- Keypress,Keyup,keydown
// Form Event: submit,change
// window Event/document : load,resize,scroll


// Basic Syntax for Event 
// $('slector').EventName(function(){

// })


// Example of Events

// $('div').mouseenter(function(){
//     console.log("Example of Mouse Enter");
// });

//      $('div').mouseleave(function(){
//     console.log("Example of Mouse Leave");
// }); 

// $('div').dblclick(function(){
//     $('div').hide();
// }) 

// Example of On
// $('div').on({
// click: function(){
//     $('div').hide();
// },
// mouseleave:function(){
//     console.log("Example of Mouse Leave");
// },
// mouseenter:function(){
//     console.log("Example of Mouse Enter");
// }
// })
//  });

// Methods deals with Jquery and CSS
// $("#one").text();
// 'This is Jquery tutorial first'
// $("#one").text("Tech and Tutorials");
// S.fn.init [p#one.odd]
// $("#one").css({"color":"red"});
// S.fn.init [p#one.odd]
// myjs.js:78 Example of Mouse Enter
// myjs.js:75 Example of Mouse Leave
// $("#one").css({"font-size":"50px"});
// S.fn.init [p#one.odd]
// $("#one").text("Tech and Tutorials");
// S.fn.init [p#one.odd]
// $("#one").html();
// 'Tech and Tutorials'
// $("#one").html("Tushar Garg");
// S.fn.init [p#one.odd]
// $("#one").text("<h1>Tech and Tutorials</h1>");
// S.fn.init [p#one.odd]
// $("#second").html("<h1>Tech and Tutorials</h1>");
// S.fn.init [p#second] 
// $("#one").addClass("demo");
// S.fn.init [p#one.odd.demo]

// another way to define document ready
// $(function(){

//  Jquary Effect
// 1. Display Effect
// hide,show and toggle

// $('div').hide(8000,function(){alert("The square is hide successfully")});
// $('div').show();
// $('div').toggle();
// $('div').toggle();


// 2. Sliding Effect
// slideUp,slideDown,slideToggle
// ('div').slideUp();
// $('div').slideDown();
// $('div').slideToggle();
// $('div').slideToggle();

// 3. fade Effect
// fadeIn,fadeOut,FadeTogge,fadeTo
// $("div").fadeOut(5000);
// S.fn.init [div, prevObject: S.fn.init(1)]
// $("div").fadeIn();
// S.fn.init [div, prevObject: S.fn.init(1)]
// $("div").fadeToggle();
// S.fn.init [div, prevObject: S.fn.init(1)]
// $("div").fadeToggle();
// S.fn.init [div, prevObject: S.fn.init(1)]

// Animation Effect
// animate,delay
// $('div').click(function(){
//     $('div').animate({
//         height:'150px',
//         width:'150px'
//     })
// });

// Jquery Ajex
// $.get("https://code.jquery.com/jquery-3.6.0.js");
// {readyState: 1, getResponseHeader: ƒ, getAllResponseHeaders: ƒ, setRequestHeader: ƒ, overrideMimeType: ƒ, …}abort: ƒ (e)always: ƒ ()catch: ƒ (e)done: ƒ ()fail: ƒ ()getAllResponseHeaders: ƒ ()getResponseHeader: ƒ (e)overrideMimeType: ƒ (e)pipe: ƒ ()progress: ƒ ()promise: ƒ (e)readyState: 4responseText: "/*!\n * jQuery JavaScript Library v3.6.0\n * httpsetRequestHeader: ƒ (e,t)state: ƒ ()status: 200statusCode: ƒ (e)statusText: "success"then: ƒ (t,n,r)[[Prototype]]: Object
// $.get("https://code.jquery.com/jquery-3.6.0.js",function(data,status){alert(data)});
// {readyState: 1, getResponseHeader: ƒ, getAllResponseHeaders: ƒ, setRequestHeader: ƒ, overrideMimeType: ƒ, …}
// $.get("https://code.jquery.com/jquery-3.6.0.js",function(data,status){alert(status)});

})
// })