Status = ""
input_text = ""

function createCanvas() {
    canvas = createCanvas(380 , 480)
    canvas.position(480 , 250)
    video = createCapture(VIDEO)
    video.size(300 , 290)
    video.hide()
}

function start() {
    object_Detector = ml5.objectDetector('cocossd' , modelLoaded)
    document.getElementById("Status").innerHTML = "Status : object is detected"
    input_text = document.getElementById("imput").value
}

function modelLoaded() {
    console.log("Model is loaded");
    Status = true
}

function draw() {
    image(video , 0 , 0 , 300 , 290)
}