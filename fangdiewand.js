start = () => {
    var canvas = document.querySelector("canvas")
    document.title = "Fang die Wand!"

    rahmenAussen = new Path.Rectangle(new Point(64, 64), new Size(830, 830));
    rahmenAussen.strokeColor = "black";
    rahmenAussen.strokeWidth = 15;

    var Wall = [];
    var i = 0;
    var Field = [];

    for (var breite = 88; breite < 800; breite = breite+100) {
        for (var hoehe = 88; hoehe < 800; hoehe = hoehe + 100) {
            Field[i] = new Path.Rectangle(new Point(breite, hoehe), new Size(90, 90));
            Field[i].fillColor = "white";
            Field[i].onMouseEnter = function (event) {canvas.style.cursor = "pointer";}
            Field[i].onMouseLeave = function (event) {canvas.style.cursor = "default";}
            Field[i].onclick = function (event) {
                Field[i].strokeColor = "white";
                Field[i].strokeWidth = 3;
                Field[i].fillColor = "black";
            }
            i++;
        }
    }

    i = 0;

    for (var breite = 180; breite < 800; breite = breite + 100) {
        for (var hoehe = 80; hoehe < 800; hoehe = hoehe + 100) {
            Wall[i] = new Path.Rectangle(new Point(breite, hoehe), new Size(5, 100));
            Wall[i].strokeColor = "#eaeaea";
            Wall[i].strokeWidth = 5;
            Wall[i].onMouseEnter = function (event) {canvas.style.cursor = "pointer";}
            Wall[i].onMouseLeave = function (event) {canvas.style.cursor = "default";}
            Wall[i].onclick = function (event) {
                Wall[i].strokeColor = "red";
                Wall[i].insertAbove();
            }
            Wall[i+1] = new Path.Rectangle(new Point(hoehe, breite), new Size(100, 5));
            Wall[i+1].strokeColor = "#eaeaea";
            Wall[i+1].strokeWidth = 5;
            Wall[i+1].onMouseEnter = function (event) {canvas.style.cursor = "pointer";}
            Wall[i+1].onMouseLeave = function (event) {canvas.style.cursor = "default";}
            Wall[i+1].onclick = function (event) {
                Wall[i+1].strokeColor = "red";
                Wall[i+1].insertAbove();
            }
            i = i+2;
        }
    }

    rahmenInnen = new Path.Rectangle(new Point(82, 82), new Size(794,794));
    rahmenInnen.strokeColor = "red";
    rahmenInnen.strokeWidth = 10;
}
