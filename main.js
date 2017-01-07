function getValue() {

    document.getElementById("btn").addEventListener("click", function() {
        var input = document.getElementById('textbox_id');

        function growCanvas() { //this function allows the canvas width to grow with the input value
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            canvas.width = input.valueAsNumber;
            ctx.font = "20px 'Press Start 2P'";
            ctx.fillStyle = "white";
            ctx.fillText(input.valueAsNumber, 10, 35);
        }

        growCanvas();

        input.valueAsNumber = ' ';
    })
};

getValue();
