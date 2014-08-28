function fruit(name, color, shape, sweetness, nativeLand) {
    this.name = name;
    this.color = color;
    this.shape = shape;
    this.sweetness = sweetness;
    this.showName = function () {
        console.log("The name is " + this.name);
    };
    this.nativeLand = nativeLand;
    this.nativeToLand = function () {
        this.nativeLand.forEach(function (country) {
            console.log("Native to: " + country);
        });
    };
}

Mango = new fruit("Mango", "Yellow", "", "", ["India"]);
