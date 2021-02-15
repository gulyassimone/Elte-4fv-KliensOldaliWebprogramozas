//document.querySelectorAll('a')->$('a')

console.log($('a'))

const obj ={
    number: 42,
    name: 'Robi'
}

console.log($.param(obj)); //jquery

console.log(new URLSearchParams(obj).toString()); //javascript

document.addEventListener('scroll',()=>{

    //$-> _
    console.log(scrollY);
})

//throttle(callback, timeout)