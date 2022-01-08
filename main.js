function preload() {
}

function setup() {
    canvas = createCanvas(400, 300);
    video = createCapture(VIDEO);
    video.hide();
    tintColor = "";
}

function draw() {
    image(video, 0, 0, 400, 300);
    tint(tintColor);
}

function take_snapshot() {
    save("picture.png");
}

function filterColor() {
    tintColor = document.getElementById("filterColor").value;
}