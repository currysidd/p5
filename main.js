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
    rect(40,50,40,50)
    image(video, 50, 50, 700, 400)
    tint(tintcolor)
}
function applyFilter() {
tintcolor=document.getElementById("color").value
}
function take_snapshot() {
save("image.png")
}