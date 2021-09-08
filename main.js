song = "";
leftWristY = ""
leftWristX = ""
rightWristY = ""
rightWristX = ""

function preload(){
    song = loadSound("can.mp3");
    song = loadSound("entertainer.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
} 

function draw(){
    image(video, 0,0, 600,500)
}

function play(){
    song.play()
    song.setVolume(1)
    song.rate(1.5)
}

function modelLoaded(){
    console.log("Kitty Loaded!")
}

function gotPoses(results){
if(results.length > 0){
console.log(results)
leftWristX = results[0].pose.leftWrist.x
console.log(leftWristX)
leftWristY = results[0].pose.leftWrist.y
console.log(leftWristY)

rightWristX = results[0].pose.rightWrist.x
console.log(rightWristX)
rightWristY = results[0].pose.rightWrist.y
console.log(rightWristY)
}
}