function preload() {

}

function setup() {
    canvas = createCanvas(800, 500)
    // canvas.center()
    canvas.position(200, 350)
    video = createCapture(VIDEO)
    video.hide()
    tintcolor = ""
}

function draw() {
    background("#0275d8")
    fill("green")
    circle(20,20,50)
    fill("red")
    circle(780,20,50)
    fill("blue")
    circle(780,480,50)
    fill("yellow")
    circle(20,480,50)
    fill("orange")
    rect(40,40,720,20)
    rect(40,440,720,20)
    rect(40,40,20,420)
    rect(740,40,20,420)
    image(video, 50, 50, 700, 400)
    
    tint(tintcolor)
}
function applyFilter() {
tintcolor=document.getElementById("color").value
}
function take_snapshot() {
save("image.png")
}