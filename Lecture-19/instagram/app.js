

function step1(fn){
    console.log('i am searching a image...');
    setTimeout(function(){
        console.log("Image Selected");
        fn('selected image');
    } , 4000)
}

function step2(image , fn){
    console.log(`i am applying filter ${image}`);
    setTimeout(function(){
        console.log("Filter Applied");
        fn('filtered image')
    } , 2000)
}

function step3(filter , fn){
    console.log(`i am adding caption to ${filter}...`);
    setTimeout(function(){
        console.log("Caption added");
        fn('added caption');
    } , 5000)
}

function step4(caption){
    console.log(`i am uploading image with ${caption}`);
    setTimeout(function(){
        console.log("Image uploded");
    } , 4000)
}

step1(function(image){
    step2(image , function(filter){
        step3(filter , function(caption){
            step4(caption)
        })
    });
})













