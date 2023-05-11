https://teachablemachine.withgoogle.com/models/-PbF9v36M/
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image' src="+data_uri+">";
    });
}
console.log("ml5 version:",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-PbF9v36M/model.json",Modelloadded);
function Modelloadded(){
    console.log("Model Loadded");
}

function check(){
    img=document.getElementById("capture_image");
    classifier.classify(img,gotresult);
}
function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("hand_gesture").innerHTML=results[0].label;
        if(results[0].label=="best"){
            document.getElementById("gesture").innerHTML="&#128077;";
        }
        if(results[0].label=="amazing"){
            document.getElementById("gesture").innerHTML="&#128076;";
        }
        if(results[0].label=="victory"){
            document.getElementById("gesture").innerHTML="&#9996;";
        }
    }
}
