function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/JAnOZJw0C/model.json",modelReady);
    
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_object").innerHTML="I can hear "+results[0].label;
    document.getElementById("result_confidence").innerHTML="Accuracy "+(results[0].confidence*100).toFixed(2)+"%";
    img1=document.getElementById("image_1");
    
    if(results[0].label=="dog"){
        img1.src="dog.gif";
        
    }
    else if(results[0].label=="cat "){
        img1.src="cat.gif";
        
        
    }
    else {
        img1.src="ear.png";
        
    }
}

}