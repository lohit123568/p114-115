noseX=0;
noseY=0;

function preload() {
    clown_nose=loadImage('https://i.postimg.cc/4yCC4dC6/ppd.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result)
        console.log("nose x =" + result[0].pose.nose.x);
        console.log("nose y =" + result[0].pose.nose.y);
            
    }
}

function draw() {
image(video, 0, 0, 300, 300); 
fill(255,0,0);
stroke(255,0,0);
circle(noseX, noseY, 20)
}

function take_snapshot() {
    save('myFilterImage.pnd');
}