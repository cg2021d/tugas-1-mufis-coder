function main(){
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    let vertices = [ 
        -0.54, -0.06625, 1.0, 0.0, 0.0,
        -0.535, -0.125, 1.0, 0.0, 0.0,
        -0.56625, -0.08625, 1.0, 0.0, 0.0,
        
        -0.535, -0.125, 1.0, 0.0, 0.0,
        -0.56625, -0.08625, 1.0, 0.0, 0.0,
        -0.5775, -0.135, 1.0, 0.0, 0.0,
        
        -0.56625, -0.08625, 1.0, 0.0, 0.0,
        -0.5775, -0.135, 1.0, 0.0, 0.0,
        -0.6, -0.09375, 1.0, 0.0, 0.0,
        
        -0.5775, -0.135, 1.0, 0.0, 0.0,
        -0.6, -0.09375, 1.0, 0.0, 0.0,
        -0.6125, -0.1375, 1.0, 0.0, 0.0,
        
        -0.6, -0.09375, 1.0, 0.0, 0.0,
        -0.6125, -0.1375, 1.0, 0.0, 0.0,
        -0.62375, -0.07375, 1.0, 0.0, 0.0,
        
        -0.6125, -0.1375, 1.0, 0.0, 0.0,
        -0.62375, -0.07375, 1.0, 0.0, 0.0,
        -0.66, -0.12125, 1.0, 0.0, 0.0,
        
        -0.62375, -0.07375, 1.0, 0.0, 0.0,
        -0.66, -0.12125, 1.0, 0.0, 0.0,
        -0.64, -0.0625, 1.0, 0.0, 0.0,
        
        -0.66, -0.12125, 1.0, 0.0, 0.0,
        -0.64, -0.0625, 1.0, 0.0, 0.0,
        -0.67875, -0.1025, 1.0, 0.0, 0.0,
        
        -0.64, -0.0625, 1.0, 0.0, 0.0,
        -0.67875, -0.1025, 1.0, 0.0, 0.0,
        -0.64, -0.05625, 1.0, 0.0, 0.0,
        
        -0.67875, -0.1025, 1.0, 0.0, 0.0,
        -0.64, -0.05625, 1.0, 0.0, 0.0,
        -0.69, -0.0925, 1.0, 0.0, 0.0,
        
        -0.64, -0.05625, 1.0, 0.0, 0.0,
        -0.69, -0.0925, 1.0, 0.0, 0.0,
        -0.63875, -0.05, 1.0, 0.0, 0.0,
        
        -0.69, -0.0925, 1.0, 0.0, 0.0,
        -0.63875, -0.05, 1.0, 0.0, 0.0,
        -0.70375, -0.075, 1.0, 0.0, 0.0,
        
        -0.63875, -0.05, 1.0, 0.0, 0.0,
        -0.70375, -0.075, 1.0, 0.0, 0.0,
        -0.6375, -0.04, 1.0, 0.0, 0.0,
        
        -0.70375, -0.075, 1.0, 0.0, 0.0,
        -0.6375, -0.04, 1.0, 0.0, 0.0,
        -0.70625, -0.05875, 1.0, 0.0, 0.0,
        
        -0.6375, -0.04, 1.0, 0.0, 0.0,
        -0.70625, -0.05875, 1.0, 0.0, 0.0,
        -0.63875, -0.02875, 1.0, 0.0, 0.0,
        
        -0.70625, -0.05875, 1.0, 0.0, 0.0,
        -0.63875, -0.02875, 1.0, 0.0, 0.0,
        -0.70875, -0.035, 1.0, 0.0, 0.0,
        
        -0.63875, -0.02875, 1.0, 0.0, 0.0,
        -0.70875, -0.035, 1.0, 0.0, 0.0,
        -0.63375, -0.015, 1.0, 0.0, 0.0,
        
        -0.70875, -0.035, 1.0, 0.0, 0.0,
        -0.63375, -0.015, 1.0, 0.0, 0.0,
        -0.70375, -0.01, 1.0, 0.0, 0.0,
        
        -0.63375, -0.015, 1.0, 0.0, 0.0,
        -0.70375, -0.01, 1.0, 0.0, 0.0,
        -0.6325, 0.00625, 1.0, 0.0, 0.0,
        
        -0.70375, -0.01, 1.0, 0.0, 0.0,
        -0.6325, 0.00625, 1.0, 0.0, 0.0,
        -0.70125, 0.0075, 1.0, 0.0, 0.0,
        
        -0.6325, 0.00625, 1.0, 0.0, 0.0,
        -0.70125, 0.0075, 1.0, 0.0, 0.0,
        -0.62875, 0.0375, 1.0, 0.0, 0.0,
        
        -0.70125, 0.0075, 1.0, 0.0, 0.0,
        -0.62875, 0.0375, 1.0, 0.0, 0.0,
        -0.69125, 0.0375, 1.0, 0.0, 0.0,
        
        -0.62875, 0.0375, 1.0, 0.0, 0.0,
        -0.69125, 0.0375, 1.0, 0.0, 0.0,
        -0.62625, 0.06125, 1.0, 0.0, 0.0,
        
        -0.69125, 0.0375, 1.0, 0.0, 0.0,
        -0.62625, 0.06125, 1.0, 0.0, 0.0,
        -0.6825, 0.055, 1.0, 0.0, 0.0,
        
        -0.62625, 0.06125, 1.0, 0.0, 0.0,
        -0.6825, 0.055, 1.0, 0.0, 0.0,
        -0.62125, 0.08875, 1.0, 0.0, 0.0,
        
        -0.6825, 0.055, 1.0, 0.0, 0.0,
        -0.62125, 0.08875, 1.0, 0.0, 0.0,
        -0.67, 0.08625, 1.0, 0.0, 0.0,
        
        -0.62125, 0.08875, 1.0, 0.0, 0.0,
        -0.67, 0.08625, 1.0, 0.0, 0.0,
        -0.615, 0.10875, 1.0, 0.0, 0.0,
        
        -0.67, 0.08625, 1.0, 0.0, 0.0,
        -0.615, 0.10875, 1.0, 0.0, 0.0,
        -0.65125, 0.11375, 1.0, 0.0, 0.0,
        
        -0.615, 0.10875, 1.0, 0.0, 0.0,
        -0.65125, 0.11375, 1.0, 0.0, 0.0,
        -0.615, 0.1075, 1.0, 0.0, 0.0,
        
        -0.65125, 0.11375, 1.0, 0.0, 0.0,
        -0.615, 0.1075, 1.0, 0.0, 0.0,
        -0.6375, 0.1275, 1.0, 0.0, 0.0,
        
        -0.615, 0.1075, 1.0, 0.0, 0.0,
        -0.6375, 0.1275, 1.0, 0.0, 0.0,
        -0.6175, 0.07625, 1.0, 0.0, 0.0,
        
        -0.6375, 0.1275, 1.0, 0.0, 0.0,
        -0.6175, 0.07625, 1.0, 0.0, 0.0,
        -0.6375, 0.1275, 1.0, 0.0, 0.0,
        
        -0.6175, 0.07625, 1.0, 0.0, 0.0,
        -0.6375, 0.1275, 1.0, 0.0, 0.0,
        -0.6, 0.075, 1.0, 0.0, 0.0,
        
        -0.6375, 0.1275, 1.0, 0.0, 0.0,
        -0.6, 0.075, 1.0, 0.0, 0.0,
        -0.6025, 0.14125, 1.0, 0.0, 0.0,
        
        -0.6, 0.075, 1.0, 0.0, 0.0,
        -0.6025, 0.14125, 1.0, 0.0, 0.0,
        -0.5775, 0.08375, 1.0, 0.0, 0.0,
        
        -0.6025, 0.14125, 1.0, 0.0, 0.0,
        -0.5775, 0.08375, 1.0, 0.0, 0.0,
        -0.5725, 0.14625, 1.0, 0.0, 0.0,
        
        -0.5775, 0.08375, 1.0, 0.0, 0.0,
        -0.5725, 0.14625, 1.0, 0.0, 0.0,
        -0.56625, 0.085, 1.0, 0.0, 0.0,
        
        -0.5725, 0.14625, 1.0, 0.0, 0.0,
        -0.56625, 0.085, 1.0, 0.0, 0.0,
        -0.54, 0.14125, 1.0, 0.0, 0.0,
        
        -0.56625, 0.085, 1.0, 0.0, 0.0,
        -0.54, 0.14125, 1.0, 0.0, 0.0,
        -0.545, 0.08125, 1.0, 0.0, 0.0,
        
        -0.54, 0.14125, 1.0, 0.0, 0.0,
        -0.545, 0.08125, 1.0, 0.0, 0.0,
        -0.51625, 0.13125, 1.0, 0.0, 0.0,
        
        -0.545, 0.08125, 1.0, 0.0, 0.0,
        -0.51625, 0.13125, 1.0, 0.0, 0.0,
        -0.52, 0.07625, 1.0, 0.0, 0.0,
        
        -0.51625, 0.13125, 1.0, 0.0, 0.0,
        -0.52, 0.07625, 1.0, 0.0, 0.0,
        -0.4975, 0.1225, 1.0, 0.0, 0.0,
        
        -0.52, 0.07625, 1.0, 0.0, 0.0,
        -0.4975, 0.1225, 1.0, 0.0, 0.0,
        -0.50125, 0.06625, 1.0, 0.0, 0.0,
        
        -0.4975, 0.1225, 1.0, 0.0, 0.0,
        -0.50125, 0.06625, 1.0, 0.0, 0.0,
        -0.4325, 0.07625, 1.0, 0.0, 0.0,
        
        -0.50125, 0.06625, 1.0, 0.0, 0.0,
        -0.4325, 0.07625, 1.0, 0.0, 0.0,
        -0.43625, 0.0575, 1.0, 0.0, 0.0,
        
        -0.4325, 0.07625, 1.0, 0.0, 0.0,
        -0.43625, 0.0575, 1.0, 0.0, 0.0,
        -0.40875, 0.04, 1.0, 0.0, 0.0,
        
        -0.43625, 0.0575, 1.0, 0.0, 0.0,
        -0.40875, 0.04, 1.0, 0.0, 0.0,
        -0.4375, 0.0275, 1.0, 0.0, 0.0,
        
        -0.40875, 0.04, 1.0, 0.0, 0.0,
        -0.4375, 0.0275, 1.0, 0.0, 0.0,
        -0.40125, 0.01, 1.0, 0.0, 0.0,
        
        -0.4375, 0.0275, 1.0, 0.0, 0.0,
        -0.40125, 0.01, 1.0, 0.0, 0.0,
        -0.44125, 0.0, 1.0, 0.0, 0.0,
        
        -0.40125, 0.01, 1.0, 0.0, 0.0,
        -0.44125, 0.0, 1.0, 0.0, 0.0,
        -0.4025, -0.015, 1.0, 0.0, 0.0,
        
        -0.44125, 0.0, 1.0, 0.0, 0.0,
        -0.4025, -0.015, 1.0, 0.0, 0.0,
        -0.45125, -0.02375, 1.0, 0.0, 0.0,
        
        -0.4025, -0.015, 1.0, 0.0, 0.0,
        -0.45125, -0.02375, 1.0, 0.0, 0.0,
        -0.40625, -0.045, 1.0, 0.0, 0.0,
        
        -0.45125, -0.02375, 1.0, 0.0, 0.0,
        -0.40625, -0.045, 1.0, 0.0, 0.0,
        -0.45375, -0.05, 1.0, 0.0, 0.0,
        
        -0.40625, -0.045, 1.0, 0.0, 0.0,
        -0.45375, -0.05, 1.0, 0.0, 0.0,
        -0.41875, -0.0775, 1.0, 0.0, 0.0,
        
        -0.45375, -0.05, 1.0, 0.0, 0.0,
        -0.41875, -0.0775, 1.0, 0.0, 0.0,
        -0.46125, -0.07375, 1.0, 0.0, 0.0,
        
        -0.41875, -0.0775, 1.0, 0.0, 0.0,
        -0.46125, -0.07375, 1.0, 0.0, 0.0,
        -0.43125, -0.11125, 1.0, 0.0, 0.0,
        
        -0.46125, -0.07375, 1.0, 0.0, 0.0,
        -0.43125, -0.11125, 1.0, 0.0, 0.0,
        -0.475, -0.09625, 1.0, 0.0, 0.0,
        
        -0.43125, -0.11125, 1.0, 0.0, 0.0,
        -0.475, -0.09625, 1.0, 0.0, 0.0,
        -0.44625, -0.13625, 1.0, 0.0, 0.0,
        
        -0.475, -0.09625, 1.0, 0.0, 0.0,
        -0.44625, -0.13625, 1.0, 0.0, 0.0,
        -0.485, -0.11875, 1.0, 0.0, 0.0,
        
        -0.44625, -0.13625, 1.0, 0.0, 0.0,
        -0.485, -0.11875, 1.0, 0.0, 0.0,
        -0.465, -0.155, 1.0, 0.0, 0.0,
        
        -0.485, -0.11875, 1.0, 0.0, 0.0,
        -0.465, -0.155, 1.0, 0.0, 0.0,
        -0.50875, -0.13, 1.0, 0.0, 0.0,
        
        -0.465, -0.155, 1.0, 0.0, 0.0,
        -0.50875, -0.13, 1.0, 0.0, 0.0,
        -0.48625, -0.18375, 1.0, 0.0, 0.0,
        
        -0.50875, -0.13, 1.0, 0.0, 0.0,
        -0.48625, -0.18375, 1.0, 0.0, 0.0,
        -0.53375, -0.145, 1.0, 0.0, 0.0,
        
        -0.48625, -0.18375, 1.0, 0.0, 0.0,
        -0.53375, -0.145, 1.0, 0.0, 0.0,
        -0.51875, -0.2, 1.0, 0.0, 0.0,
        
        -0.53375, -0.145, 1.0, 0.0, 0.0,
        -0.51875, -0.2, 1.0, 0.0, 0.0,
        -0.55625, -0.16, 1.0, 0.0, 0.0,
        
        -0.51875, -0.2, 1.0, 0.0, 0.0,
        -0.55625, -0.16, 1.0, 0.0, 0.0,
        -0.57875, -0.215, 1.0, 0.0, 0.0,
        
        -0.55625, -0.16, 1.0, 0.0, 0.0,
        -0.57875, -0.215, 1.0, 0.0, 0.0,
        -0.61625, -0.165, 1.0, 0.0, 0.0,
        
        -0.57875, -0.215, 1.0, 0.0, 0.0,
        -0.61625, -0.165, 1.0, 0.0, 0.0,
        -0.62625, -0.22, 1.0, 0.0, 0.0,
        
        -0.61625, -0.165, 1.0, 0.0, 0.0,
        -0.62625, -0.22, 1.0, 0.0, 0.0,
        -0.6425, -0.16125, 1.0, 0.0, 0.0,
        
        -0.62625, -0.22, 1.0, 0.0, 0.0,
        -0.6425, -0.16125, 1.0, 0.0, 0.0,
        -0.68875, -0.19375, 1.0, 0.0, 0.0,
        
        -0.6425, -0.16125, 1.0, 0.0, 0.0,
        -0.68875, -0.19375, 1.0, 0.0, 0.0,
        -0.68, -0.14625, 1.0, 0.0, 0.0,
        
        -0.68875, -0.19375, 1.0, 0.0, 0.0,
        -0.68, -0.14625, 1.0, 0.0, 0.0,
        -0.71875, -0.16875, 1.0, 0.0, 0.0,
        
        -0.68, -0.14625, 1.0, 0.0, 0.0,
        -0.71875, -0.16875, 1.0, 0.0, 0.0,
        -0.69875, -0.1, 1.0, 0.0, 0.0,
        
        -0.71875, -0.16875, 1.0, 0.0, 0.0,
        -0.69875, -0.1, 1.0, 0.0, 0.0,
        -0.7425, -0.125, 1.0, 0.0, 0.0,
        
        -0.69875, -0.1, 1.0, 0.0, 0.0,
        -0.7425, -0.125, 1.0, 0.0, 0.0,
        -0.71, -0.0775, 1.0, 0.0, 0.0,
        
        -0.7425, -0.125, 1.0, 0.0, 0.0,
        -0.71, -0.0775, 1.0, 0.0, 0.0,
        -0.75, -0.095, 1.0, 0.0, 0.0,
        
        -0.71, -0.0775, 1.0, 0.0, 0.0,
        -0.75, -0.095, 1.0, 0.0, 0.0,
        -0.7125, -0.055, 1.0, 0.0, 0.0,
        
        -0.75, -0.095, 1.0, 0.0, 0.0,
        -0.7125, -0.055, 1.0, 0.0, 0.0,
        -0.7575, -0.06125, 1.0, 0.0, 0.0,
        
        -0.7125, -0.055, 1.0, 0.0, 0.0,
        -0.7575, -0.06125, 1.0, 0.0, 0.0,
        -0.715, -0.0275, 1.0, 0.0, 0.0,
        
        -0.7575, -0.06125, 1.0, 0.0, 0.0,
        -0.715, -0.0275, 1.0, 0.0, 0.0,
        -0.755, -0.03375, 1.0, 0.0, 0.0,
        
        -0.715, -0.0275, 1.0, 0.0, 0.0,
        -0.755, -0.03375, 1.0, 0.0, 0.0,
        -0.70875, -0.00875, 1.0, 0.0, 0.0,
        
        -0.755, -0.03375, 1.0, 0.0, 0.0,
        -0.70875, -0.00875, 1.0, 0.0, 0.0,
        -0.75125, -0.0075, 1.0, 0.0, 0.0,
        
        -0.70875, -0.00875, 1.0, 0.0, 0.0,
        -0.75125, -0.0075, 1.0, 0.0, 0.0,
        -0.70375, 0.0075, 1.0, 0.0, 0.0,
        
        -0.75125, -0.0075, 1.0, 0.0, 0.0,
        -0.70375, 0.0075, 1.0, 0.0, 0.0,
        -0.7525, 0.01875, 1.0, 0.0, 0.0,
        
        -0.70375, 0.0075, 1.0, 0.0, 0.0,
        -0.7525, 0.01875, 1.0, 0.0, 0.0,
        -0.7025, 0.02625, 1.0, 0.0, 0.0,
        
        -0.7525, 0.01875, 1.0, 0.0, 0.0,
        -0.7025, 0.02625, 1.0, 0.0, 0.0,
        -0.74375, 0.04625, 1.0, 0.0, 0.0,
        
        -0.7025, 0.02625, 1.0, 0.0, 0.0,
        -0.74375, 0.04625, 1.0, 0.0, 0.0,
        -0.69375, 0.04875, 1.0, 0.0, 0.0,
        
        -0.74375, 0.04625, 1.0, 0.0, 0.0,
        -0.69375, 0.04875, 1.0, 0.0, 0.0,
        -0.7375, 0.06875, 1.0, 0.0, 0.0,
        
        -0.69375, 0.04875, 1.0, 0.0, 0.0,
        -0.7375, 0.06875, 1.0, 0.0, 0.0,
        -0.68625, 0.07, 1.0, 0.0, 0.0,
        
        -0.7375, 0.06875, 1.0, 0.0, 0.0,
        -0.68625, 0.07, 1.0, 0.0, 0.0,
        -0.72125, 0.09625, 1.0, 0.0, 0.0,
        
        -0.68625, 0.07, 1.0, 0.0, 0.0,
        -0.72125, 0.09625, 1.0, 0.0, 0.0,
        -0.675, 0.09, 1.0, 0.0, 0.0,
        
        -0.72125, 0.09625, 1.0, 0.0, 0.0,
        -0.675, 0.09, 1.0, 0.0, 0.0,
        -0.70875, 0.11625, 1.0, 0.0, 0.0,
        
        -0.675, 0.09, 1.0, 0.0, 0.0,
        -0.70875, 0.11625, 1.0, 0.0, 0.0,
        -0.66375, 0.10875, 1.0, 0.0, 0.0,
        
        -0.70875, 0.11625, 1.0, 0.0, 0.0,
        -0.66375, 0.10875, 1.0, 0.0, 0.0,
        -0.6875, 0.14, 1.0, 0.0, 0.0,
        
        -0.66375, 0.10875, 1.0, 0.0, 0.0,
        -0.6875, 0.14, 1.0, 0.0, 0.0,
        -0.64875, 0.125, 1.0, 0.0, 0.0,
        
        -0.6875, 0.14, 1.0, 0.0, 0.0,
        -0.64875, 0.125, 1.0, 0.0, 0.0,
        -0.66875, 0.1625, 1.0, 0.0, 0.0,
        
        -0.64875, 0.125, 1.0, 0.0, 0.0,
        -0.66875, 0.1625, 1.0, 0.0, 0.0,
        -0.62875, 0.14125, 1.0, 0.0, 0.0,
        
        -0.66875, 0.1625, 1.0, 0.0, 0.0,
        -0.62875, 0.14125, 1.0, 0.0, 0.0,
        -0.645, 0.17375, 1.0, 0.0, 0.0,
        
        -0.62875, 0.14125, 1.0, 0.0, 0.0,
        -0.645, 0.17375, 1.0, 0.0, 0.0,
        -0.60375, 0.155, 1.0, 0.0, 0.0,
        
        -0.645, 0.17375, 1.0, 0.0, 0.0,
        -0.60375, 0.155, 1.0, 0.0, 0.0,
        -0.615, 0.1875, 1.0, 0.0, 0.0,
        
        -0.60375, 0.155, 1.0, 0.0, 0.0,
        -0.615, 0.1875, 1.0, 0.0, 0.0,
        -0.58375, 0.16375, 1.0, 0.0, 0.0,
        
        -0.615, 0.1875, 1.0, 0.0, 0.0,
        -0.58375, 0.16375, 1.0, 0.0, 0.0,
        -0.58625, 0.19375, 1.0, 0.0, 0.0,
        
        -0.58375, 0.16375, 1.0, 0.0, 0.0,
        -0.58625, 0.19375, 1.0, 0.0, 0.0,
        -0.555, 0.15375, 1.0, 0.0, 0.0,
        
        -0.58625, 0.19375, 1.0, 0.0, 0.0,
        -0.555, 0.15375, 1.0, 0.0, 0.0,
        -0.55125, 0.1975, 1.0, 0.0, 0.0,
        
        -0.555, 0.15375, 1.0, 0.0, 0.0,
        -0.55125, 0.1975, 1.0, 0.0, 0.0,
        -0.5375, 0.1525, 1.0, 0.0, 0.0,
        
        -0.55125, 0.1975, 1.0, 0.0, 0.0,
        -0.5375, 0.1525, 1.0, 0.0, 0.0,
        -0.52875, 0.19375, 1.0, 0.0, 0.0,
        
        -0.5375, 0.1525, 1.0, 0.0, 0.0,
        -0.52875, 0.19375, 1.0, 0.0, 0.0,
        -0.52375, 0.145, 1.0, 0.0, 0.0,
        
        -0.52875, 0.19375, 1.0, 0.0, 0.0,
        -0.52375, 0.145, 1.0, 0.0, 0.0,
        -0.50375, 0.18375, 1.0, 0.0, 0.0,
        
        -0.52375, 0.145, 1.0, 0.0, 0.0,
        -0.50375, 0.18375, 1.0, 0.0, 0.0,
        -0.5125, 0.1325, 1.0, 0.0, 0.0,
        
        -0.50375, 0.18375, 1.0, 0.0, 0.0,
        -0.5125, 0.1325, 1.0, 0.0, 0.0,
        -0.485, 0.17125, 1.0, 0.0, 0.0,
        
        -0.5125, 0.1325, 1.0, 0.0, 0.0,
        -0.485, 0.17125, 1.0, 0.0, 0.0,
        -0.50625, 0.1275, 1.0, 0.0, 0.0,
        
        -0.485, 0.17125, 1.0, 0.0, 0.0,
        -0.50625, 0.1275, 1.0, 0.0, 0.0,
        -0.4725, 0.15, 1.0, 0.0, 0.0,
        
        -0.50625, 0.1275, 1.0, 0.0, 0.0,
        -0.4725, 0.15, 1.0, 0.0, 0.0,
        -0.4975, 0.11375, 1.0, 0.0, 0.0,
        
        -0.4725, 0.15, 1.0, 0.0, 0.0,
        -0.4975, 0.11375, 1.0, 0.0, 0.0,
        -0.46375, 0.13125, 1.0, 0.0, 0.0,
        
        -0.4975, 0.11375, 1.0, 0.0, 0.0,
        -0.46375, 0.13125, 1.0, 0.0, 0.0,
        -0.48625, 0.08375, 1.0, 0.0, 0.0,
        
        -0.46375, 0.13125, 1.0, 0.0, 0.0,
        -0.48625, 0.08375, 1.0, 0.0, 0.0,
        -0.45875, 0.10875, 1.0, 0.0, 0.0,
        
        -0.48625, 0.08375, 1.0, 0.0, 0.0,
        -0.45875, 0.10875, 1.0, 0.0, 0.0,
        -0.4825, 0.06125, 1.0, 0.0, 0.0,
        
        -0.45875, 0.10875, 1.0, 0.0, 0.0,
        -0.4825, 0.06125, 1.0, 0.0, 0.0,
        -0.4525, 0.08125, 1.0, 0.0, 0.0,
        
        -0.4825, 0.06125, 1.0, 0.0, 0.0,
        -0.4525, 0.08125, 1.0, 0.0, 0.0,
        -0.48625, 0.04625, 1.0, 0.0, 0.0,
        
        -0.4525, 0.08125, 1.0, 0.0, 0.0,
        -0.48625, 0.04625, 1.0, 0.0, 0.0,
        -0.45125, 0.055, 1.0, 0.0, 0.0,
        
        -0.48625, 0.04625, 1.0, 0.0, 0.0,
        -0.45125, 0.055, 1.0, 0.0, 0.0,
        -0.48625, 0.0225, 1.0, 0.0, 0.0,
        
        -0.45125, 0.055, 1.0, 0.0, 0.0,
        -0.48625, 0.0225, 1.0, 0.0, 0.0,
        -0.4475, 0.00375, 1.0, 0.0, 0.0,
        
        -0.48625, 0.0225, 1.0, 0.0, 0.0,
        -0.4475, 0.00375, 1.0, 0.0, 0.0,
        -0.4975, -0.0025, 1.0, 0.0, 0.0,
        
        -0.4475, 0.00375, 1.0, 0.0, 0.0,
        -0.4975, -0.0025, 1.0, 0.0, 0.0,
        -0.455, -0.03, 1.0, 0.0, 0.0,
        
        -0.4975, -0.0025, 1.0, 0.0, 0.0,
        -0.455, -0.03, 1.0, 0.0, 0.0,
        -0.505, -0.02, 1.0, 0.0, 0.0,
        
        -0.455, -0.03, 1.0, 0.0, 0.0,
        -0.505, -0.02, 1.0, 0.0, 0.0,
        -0.48, -0.0675, 1.0, 0.0, 0.0,
        
        -0.505, -0.02, 1.0, 0.0, 0.0,
        -0.48, -0.0675, 1.0, 0.0, 0.0,
        -0.51875, -0.0375, 1.0, 0.0, 0.0,
        
        -0.48, -0.0675, 1.0, 0.0, 0.0,
        -0.51875, -0.0375, 1.0, 0.0, 0.0,
        -0.48, -0.0825, 1.0, 0.0, 0.0,
        
        -0.51875, -0.0375, 1.0, 0.0, 0.0,
        -0.48, -0.0825, 1.0, 0.0, 0.0,
        -0.5275, -0.04875, 1.0, 0.0, 0.0,
        
        -0.48, -0.0825, 1.0, 0.0, 0.0,
        -0.5275, -0.04875, 1.0, 0.0, 0.0,
        -0.4975, -0.0975, 1.0, 0.0, 0.0,
        
        -0.5275, -0.04875, 1.0, 0.0, 0.0,
        -0.4975, -0.0975, 1.0, 0.0, 0.0,
        -0.55, -0.065, 1.0, 0.0, 0.0,
        
        -0.4975, -0.0975, 1.0, 0.0, 0.0,
        -0.55, -0.065, 1.0, 0.0, 0.0,
        -0.54375, -0.12125, 1.0, 0.0, 0.0,
        
        -0.55, -0.065, 1.0, 0.0, 0.0,
        -0.54375, -0.12125, 1.0, 0.0, 0.0,
        -0.54, -0.06625, 1.0, 0.0, 0.0,

        /* Vertices Kanan*/
        0.5325, -0.03375, 1.0, 0.0, 0.0,
        0.43375, -0.10375, 1.0, 0.0, 0.0,
        0.49375, -0.0325, 1.0, 0.0, 0.0,
        
        0.43375, -0.10375, 1.0, 0.0, 0.0,
        0.49375, -0.0325, 1.0, 0.0, 0.0,
        0.39875, -0.10375, 1.0, 0.0, 0.0,
        
        0.49375, -0.0325, 1.0, 0.0, 0.0,
        0.39875, -0.10375, 1.0, 0.0, 0.0,
        0.45625, -0.03875, 1.0, 0.0, 0.0,
        
        0.39875, -0.10375, 1.0, 0.0, 0.0,
        0.45625, -0.03875, 1.0, 0.0, 0.0,
        0.35125, -0.08875, 1.0, 0.0, 0.0,
        
        0.45625, -0.03875, 1.0, 0.0, 0.0,
        0.35125, -0.08875, 1.0, 0.0, 0.0,
        0.4125, -0.03375, 1.0, 0.0, 0.0,
        
        0.35125, -0.08875, 1.0, 0.0, 0.0,
        0.4125, -0.03375, 1.0, 0.0, 0.0,
        0.315, -0.08, 1.0, 0.0, 0.0,
        
        0.4125, -0.03375, 1.0, 0.0, 0.0,
        0.315, -0.08, 1.0, 0.0, 0.0,
        0.3775, -0.03125, 1.0, 0.0, 0.0,
        
        0.315, -0.08, 1.0, 0.0, 0.0,
        0.3775, -0.03125, 1.0, 0.0, 0.0,
        0.2775, -0.0625, 1.0, 0.0, 0.0,
        
        0.3775, -0.03125, 1.0, 0.0, 0.0,
        0.2775, -0.0625, 1.0, 0.0, 0.0,
        0.34125, -0.01875, 1.0, 0.0, 0.0,
        
        0.2775, -0.0625, 1.0, 0.0, 0.0,
        0.34125, -0.01875, 1.0, 0.0, 0.0,
        0.24125, -0.04125, 1.0, 0.0, 0.0,
        
        0.34125, -0.01875, 1.0, 0.0, 0.0,
        0.24125, -0.04125, 1.0, 0.0, 0.0,
        0.30625, -0.0025, 1.0, 0.0, 0.0,
        
        0.24125, -0.04125, 1.0, 0.0, 0.0,
        0.30625, -0.0025, 1.0, 0.0, 0.0,
        0.22, -0.01875, 1.0, 0.0, 0.0,
        
        0.30625, -0.0025, 1.0, 0.0, 0.0,
        0.22, -0.01875, 1.0, 0.0, 0.0,
        0.2825, 0.0175, 1.0, 0.0, 0.0,
        
        0.22, -0.01875, 1.0, 0.0, 0.0,
        0.2825, 0.0175, 1.0, 0.0, 0.0,
        0.20625, 0.01, 1.0, 0.0, 0.0,
        
        0.2825, 0.0175, 1.0, 0.0, 0.0,
        0.20625, 0.01, 1.0, 0.0, 0.0,
        0.255, 0.03875, 1.0, 0.0, 0.0,
        
        0.20625, 0.01, 1.0, 0.0, 0.0,
        0.255, 0.03875, 1.0, 0.0, 0.0,
        0.2175, 0.0525, 1.0, 0.0, 0.0,
        
        0.255, 0.03875, 1.0, 0.0, 0.0,
        0.2175, 0.0525, 1.0, 0.0, 0.0,
        0.24125, 0.06, 1.0, 0.0, 0.0,
        
        0.2175, 0.0525, 1.0, 0.0, 0.0,
        0.24125, 0.06, 1.0, 0.0, 0.0,
        0.25125, 0.045, 1.0, 0.0, 0.0,
        
        0.24125, 0.06, 1.0, 0.0, 0.0,
        0.25125, 0.045, 1.0, 0.0, 0.0,
        0.23375, 0.08125, 1.0, 0.0, 0.0,
        
        0.25125, 0.045, 1.0, 0.0, 0.0,
        0.23375, 0.08125, 1.0, 0.0, 0.0,
        0.2825, 0.04, 1.0, 0.0, 0.0,
        
        0.23375, 0.08125, 1.0, 0.0, 0.0,
        0.2825, 0.04, 1.0, 0.0, 0.0,
        0.24375, 0.1, 1.0, 0.0, 0.0,
        
        0.2825, 0.04, 1.0, 0.0, 0.0,
        0.24375, 0.1, 1.0, 0.0, 0.0,
        0.30125, 0.04125, 1.0, 0.0, 0.0,
        
        0.24375, 0.1, 1.0, 0.0, 0.0,
        0.30125, 0.04125, 1.0, 0.0, 0.0,
        0.27, 0.115, 1.0, 0.0, 0.0,
        
        0.30125, 0.04125, 1.0, 0.0, 0.0,
        0.27, 0.115, 1.0, 0.0, 0.0,
        0.33, 0.0425, 1.0, 0.0, 0.0,
        
        0.27, 0.115, 1.0, 0.0, 0.0,
        0.33, 0.0425, 1.0, 0.0, 0.0,
        0.29875, 0.1225, 1.0, 0.0, 0.0,
        
        0.33, 0.0425, 1.0, 0.0, 0.0,
        0.29875, 0.1225, 1.0, 0.0, 0.0,
        0.3625, 0.0425, 1.0, 0.0, 0.0,
        
        0.29875, 0.1225, 1.0, 0.0, 0.0,
        0.3625, 0.0425, 1.0, 0.0, 0.0,
        0.32875, 0.12375, 1.0, 0.0, 0.0,
        
        0.3625, 0.0425, 1.0, 0.0, 0.0,
        0.32875, 0.12375, 1.0, 0.0, 0.0,
        0.39375, 0.04125, 1.0, 0.0, 0.0,
        
        0.32875, 0.12375, 1.0, 0.0, 0.0,
        0.39375, 0.04125, 1.0, 0.0, 0.0,
        0.36375, 0.11875, 1.0, 0.0, 0.0,
        
        0.39375, 0.04125, 1.0, 0.0, 0.0,
        0.36375, 0.11875, 1.0, 0.0, 0.0,
        0.42625, 0.04, 1.0, 0.0, 0.0,
        
        0.36375, 0.11875, 1.0, 0.0, 0.0,
        0.42625, 0.04, 1.0, 0.0, 0.0,
        0.3925, 0.11375, 1.0, 0.0, 0.0,
        
        0.42625, 0.04, 1.0, 0.0, 0.0,
        0.3925, 0.11375, 1.0, 0.0, 0.0,
        0.45875, 0.03875, 1.0, 0.0, 0.0,
        
        0.3925, 0.11375, 1.0, 0.0, 0.0,
        0.45875, 0.03875, 1.0, 0.0, 0.0,
        0.425, 0.10625, 1.0, 0.0, 0.0,
        
        0.45875, 0.03875, 1.0, 0.0, 0.0,
        0.425, 0.10625, 1.0, 0.0, 0.0,
        0.49125, 0.04125, 1.0, 0.0, 0.0,
        
        0.425, 0.10625, 1.0, 0.0, 0.0,
        0.49125, 0.04125, 1.0, 0.0, 0.0,
        0.45625, 0.09875, 1.0, 0.0, 0.0,
        
        0.49125, 0.04125, 1.0, 0.0, 0.0,
        0.45625, 0.09875, 1.0, 0.0, 0.0,
        0.51625, 0.04, 1.0, 0.0, 0.0,
        
        0.45625, 0.09875, 1.0, 0.0, 0.0,
        0.51625, 0.04, 1.0, 0.0, 0.0,
        0.4925, 0.09625, 1.0, 0.0, 0.0,
        
        0.51625, 0.04, 1.0, 0.0, 0.0,
        0.4925, 0.09625, 1.0, 0.0, 0.0,
        0.54, 0.0325, 1.0, 0.0, 0.0,
        
        0.4925, 0.09625, 1.0, 0.0, 0.0,
        0.54, 0.0325, 1.0, 0.0, 0.0,
        0.52375, 0.09, 1.0, 0.0, 0.0,
        
        0.54, 0.0325, 1.0, 0.0, 0.0,
        0.52375, 0.09, 1.0, 0.0, 0.0,
        0.56, 0.02125, 1.0, 0.0, 0.0,
        
        0.52375, 0.09, 1.0, 0.0, 0.0,
        0.56, 0.02125, 1.0, 0.0, 0.0,
        0.56, 0.08, 1.0, 0.0, 0.0,
        
        0.56, 0.02125, 1.0, 0.0, 0.0,
        0.56, 0.08, 1.0, 0.0, 0.0,
        0.58, 0.0075, 1.0, 0.0, 0.0,
        
        0.56, 0.08, 1.0, 0.0, 0.0,
        0.58, 0.0075, 1.0, 0.0, 0.0,
        0.59125, 0.0575, 1.0, 0.0, 0.0,
        
        0.58, 0.0075, 1.0, 0.0, 0.0,
        0.59125, 0.0575, 1.0, 0.0, 0.0,
        0.59375, -0.01, 1.0, 0.0, 0.0,
        
        0.59125, 0.0575, 1.0, 0.0, 0.0,
        0.59375, -0.01, 1.0, 0.0, 0.0,
        0.61375, 0.02875, 1.0, 0.0, 0.0,
        
        0.59375, -0.01, 1.0, 0.0, 0.0,
        0.61375, 0.02875, 1.0, 0.0, 0.0,
        0.62375, -0.035, 1.0, 0.0, 0.0,
        
        0.61375, 0.02875, 1.0, 0.0, 0.0,
        0.62375, -0.035, 1.0, 0.0, 0.0,
        0.62, 0.00625, 1.0, 0.0, 0.0,
        
        0.62375, -0.035, 1.0, 0.0, 0.0,
        0.62, 0.00625, 1.0, 0.0, 0.0,
        0.6425, -0.07875, 1.0, 0.0, 0.0,
        
        0.62, 0.00625, 1.0, 0.0, 0.0,
        0.6425, -0.07875, 1.0, 0.0, 0.0,
        0.61875, -0.02125, 1.0, 0.0, 0.0,
        
        0.6425, -0.07875, 1.0, 0.0, 0.0,
        0.61875, -0.02125, 1.0, 0.0, 0.0,
        0.63625, -0.10875, 1.0, 0.0, 0.0,
        
        0.61875, -0.02125, 1.0, 0.0, 0.0,
        0.63625, -0.10875, 1.0, 0.0, 0.0,
        0.61125, -0.0525, 1.0, 0.0, 0.0,
        
        0.63625, -0.10875, 1.0, 0.0, 0.0,
        0.61125, -0.0525, 1.0, 0.0, 0.0,
        0.6125, -0.14, 1.0, 0.0, 0.0,
        
        0.61125, -0.0525, 1.0, 0.0, 0.0,
        0.6125, -0.14, 1.0, 0.0, 0.0,
        0.5925, -0.08, 1.0, 0.0, 0.0,
        
        0.6125, -0.14, 1.0, 0.0, 0.0,
        0.5925, -0.08, 1.0, 0.0, 0.0,
        0.5875, -0.1625, 1.0, 0.0, 0.0,
        
        0.5925, -0.08, 1.0, 0.0, 0.0,
        0.5875, -0.1625, 1.0, 0.0, 0.0,
        0.5775, -0.09625, 1.0, 0.0, 0.0,
        
        0.5875, -0.1625, 1.0, 0.0, 0.0,
        0.5775, -0.09625, 1.0, 0.0, 0.0,
        0.5575, -0.1825, 1.0, 0.0, 0.0,
        
        0.5775, -0.09625, 1.0, 0.0, 0.0,
        0.5575, -0.1825, 1.0, 0.0, 0.0,
        0.5575, -0.1075, 1.0, 0.0, 0.0,
        
        0.5575, -0.1825, 1.0, 0.0, 0.0,
        0.5575, -0.1075, 1.0, 0.0, 0.0,
        0.52125, -0.19375, 1.0, 0.0, 0.0,
        
        0.5575, -0.1075, 1.0, 0.0, 0.0,
        0.52125, -0.19375, 1.0, 0.0, 0.0,
        0.53125, -0.11125, 1.0, 0.0, 0.0,
        
        0.52125, -0.19375, 1.0, 0.0, 0.0,
        0.53125, -0.11125, 1.0, 0.0, 0.0,
        0.4825, -0.2025, 1.0, 0.0, 0.0,
        
        0.53125, -0.11125, 1.0, 0.0, 0.0,
        0.4825, -0.2025, 1.0, 0.0, 0.0,
        0.50125, -0.11875, 1.0, 0.0, 0.0,
        
        0.4825, -0.2025, 1.0, 0.0, 0.0,
        0.50125, -0.11875, 1.0, 0.0, 0.0,
        0.4325, -0.2, 1.0, 0.0, 0.0,
        
        0.50125, -0.11875, 1.0, 0.0, 0.0,
        0.4325, -0.2, 1.0, 0.0, 0.0,
        0.465, -0.12625, 1.0, 0.0, 0.0,
        
        0.4325, -0.2, 1.0, 0.0, 0.0,
        0.465, -0.12625, 1.0, 0.0, 0.0,
        0.39375, -0.19625, 1.0, 0.0, 0.0,
        
        0.465, -0.12625, 1.0, 0.0, 0.0,
        0.39375, -0.19625, 1.0, 0.0, 0.0,
        0.43, -0.12625, 1.0, 0.0, 0.0,
        
        0.39375, -0.19625, 1.0, 0.0, 0.0,
        0.43, -0.12625, 1.0, 0.0, 0.0,
        0.3575, -0.18875, 1.0, 0.0, 0.0,
        
        0.43, -0.12625, 1.0, 0.0, 0.0,
        0.3575, -0.18875, 1.0, 0.0, 0.0,
        0.395, -0.12625, 1.0, 0.0, 0.0,
        
        0.3575, -0.18875, 1.0, 0.0, 0.0,
        0.395, -0.12625, 1.0, 0.0, 0.0,
        0.31875, -0.18, 1.0, 0.0, 0.0,
        
        0.395, -0.12625, 1.0, 0.0, 0.0,
        0.31875, -0.18, 1.0, 0.0, 0.0,
        0.35875, -0.12, 1.0, 0.0, 0.0,
        
        0.31875, -0.18, 1.0, 0.0, 0.0,
        0.35875, -0.12, 1.0, 0.0, 0.0,
        0.28625, -0.16, 1.0, 0.0, 0.0,
        
        0.35875, -0.12, 1.0, 0.0, 0.0,
        0.28625, -0.16, 1.0, 0.0, 0.0,
        0.32625, -0.10875, 1.0, 0.0, 0.0,
        
        0.28625, -0.16, 1.0, 0.0, 0.0,
        0.32625, -0.10875, 1.0, 0.0, 0.0,
        0.25375, -0.1475, 1.0, 0.0, 0.0,
        
        0.32625, -0.10875, 1.0, 0.0, 0.0,
        0.25375, -0.1475, 1.0, 0.0, 0.0,
        0.295, -0.1, 1.0, 0.0, 0.0,
        
        0.25375, -0.1475, 1.0, 0.0, 0.0,
        0.295, -0.1, 1.0, 0.0, 0.0,
        0.235, -0.1275, 1.0, 0.0, 0.0,
        
        0.295, -0.1, 1.0, 0.0, 0.0,
        0.235, -0.1275, 1.0, 0.0, 0.0,
        0.2675, -0.0875, 1.0, 0.0, 0.0,
        
        0.235, -0.1275, 1.0, 0.0, 0.0,
        0.2675, -0.0875, 1.0, 0.0, 0.0,
        0.19625, -0.1, 1.0, 0.0, 0.0,
        
        0.2675, -0.0875, 1.0, 0.0, 0.0,
        0.19625, -0.1, 1.0, 0.0, 0.0,
        0.24375, -0.06625, 1.0, 0.0, 0.0,
        
        0.19625, -0.1, 1.0, 0.0, 0.0,
        0.24375, -0.06625, 1.0, 0.0, 0.0,
        0.17625, -0.0325, 1.0, 0.0, 0.0,
        
        0.24375, -0.06625, 1.0, 0.0, 0.0,
        0.17625, -0.0325, 1.0, 0.0, 0.0,
        0.21625, -0.0425, 1.0, 0.0, 0.0,
        
        0.17625, -0.0325, 1.0, 0.0, 0.0,
        0.21625, -0.0425, 1.0, 0.0, 0.0,
        0.18125, -0.01, 1.0, 0.0, 0.0,
        
        0.21625, -0.0425, 1.0, 0.0, 0.0,
        0.18125, -0.01, 1.0, 0.0, 0.0,
        0.2025, -0.01875, 1.0, 0.0, 0.0,
        
        0.18125, -0.01, 1.0, 0.0, 0.0,
        0.2025, -0.01875, 1.0, 0.0, 0.0,
        0.1875, 0.01375, 1.0, 0.0, 0.0,
        
        0.2025, -0.01875, 1.0, 0.0, 0.0,
        0.1875, 0.01375, 1.0, 0.0, 0.0,
        0.1975, 0.0025, 1.0, 0.0, 0.0,
        
        0.1875, 0.01375, 1.0, 0.0, 0.0,
        0.1975, 0.0025, 1.0, 0.0, 0.0,
        0.21, 0.04125, 1.0, 0.0, 0.0,
        
        0.1975, 0.0025, 1.0, 0.0, 0.0,
        0.21, 0.04125, 1.0, 0.0, 0.0,
        0.1925, 0.03875, 1.0, 0.0, 0.0,
        
        0.21, 0.04125, 1.0, 0.0, 0.0,
        0.1925, 0.03875, 1.0, 0.0, 0.0,
        0.23625, 0.05875, 1.0, 0.0, 0.0,
        
        0.1925, 0.03875, 1.0, 0.0, 0.0,
        0.23625, 0.05875, 1.0, 0.0, 0.0,
        0.2, 0.06125, 1.0, 0.0, 0.0,
        
        0.23625, 0.05875, 1.0, 0.0, 0.0,
        0.2, 0.06125, 1.0, 0.0, 0.0,
        0.26375, 0.07625, 1.0, 0.0, 0.0,
        
        0.2, 0.06125, 1.0, 0.0, 0.0,
        0.26375, 0.07625, 1.0, 0.0, 0.0,
        0.22, 0.08375, 1.0, 0.0, 0.0,
        
        0.26375, 0.07625, 1.0, 0.0, 0.0,
        0.22, 0.08375, 1.0, 0.0, 0.0,
        0.29125, 0.08625, 1.0, 0.0, 0.0,
        
        0.22, 0.08375, 1.0, 0.0, 0.0,
        0.29125, 0.08625, 1.0, 0.0, 0.0,
        0.23875, 0.1025, 1.0, 0.0, 0.0,
        
        0.29125, 0.08625, 1.0, 0.0, 0.0,
        0.23875, 0.1025, 1.0, 0.0, 0.0,
        0.31125, 0.0975, 1.0, 0.0, 0.0,
        
        0.23875, 0.1025, 1.0, 0.0, 0.0,
        0.31125, 0.0975, 1.0, 0.0, 0.0,
        0.27, 0.1225, 1.0, 0.0, 0.0,
        
        0.31125, 0.0975, 1.0, 0.0, 0.0,
        0.27, 0.1225, 1.0, 0.0, 0.0,
        0.345, 0.10375, 1.0, 0.0, 0.0,
        
        0.27, 0.1225, 1.0, 0.0, 0.0,
        0.345, 0.10375, 1.0, 0.0, 0.0,
        0.3, 0.13375, 1.0, 0.0, 0.0,
        
        0.345, 0.10375, 1.0, 0.0, 0.0,
        0.3, 0.13375, 1.0, 0.0, 0.0,
        0.3725, 0.10375, 1.0, 0.0, 0.0,
        
        0.3, 0.13375, 1.0, 0.0, 0.0,
        0.3725, 0.10375, 1.0, 0.0, 0.0,
        0.33125, 0.14375, 1.0, 0.0, 0.0,
        
        0.3725, 0.10375, 1.0, 0.0, 0.0,
        0.33125, 0.14375, 1.0, 0.0, 0.0,
        0.4, 0.10875, 1.0, 0.0, 0.0,
        
        0.33125, 0.14375, 1.0, 0.0, 0.0,
        0.4, 0.10875, 1.0, 0.0, 0.0,
        0.3625, 0.14625, 1.0, 0.0, 0.0,
        
        0.4, 0.10875, 1.0, 0.0, 0.0,
        0.3625, 0.14625, 1.0, 0.0, 0.0,
        0.425, 0.105, 1.0, 0.0, 0.0,
        
        0.3625, 0.14625, 1.0, 0.0, 0.0,
        0.425, 0.105, 1.0, 0.0, 0.0,
        0.39625, 0.1475, 1.0, 0.0, 0.0,
        
        0.425, 0.105, 1.0, 0.0, 0.0,
        0.39625, 0.1475, 1.0, 0.0, 0.0,
        0.4575, 0.10375, 1.0, 0.0, 0.0,
        
        0.39625, 0.1475, 1.0, 0.0, 0.0,
        0.4575, 0.10375, 1.0, 0.0, 0.0,
        0.42625, 0.14875, 1.0, 0.0, 0.0,
        
        0.4575, 0.10375, 1.0, 0.0, 0.0,
        0.42625, 0.14875, 1.0, 0.0, 0.0,
        0.4875, 0.1, 1.0, 0.0, 0.0,
        
        0.42625, 0.14875, 1.0, 0.0, 0.0,
        0.4875, 0.1, 1.0, 0.0, 0.0,
        0.45875, 0.14375, 1.0, 0.0, 0.0,
        
        0.4875, 0.1, 1.0, 0.0, 0.0,
        0.45875, 0.14375, 1.0, 0.0, 0.0,
        0.5175, 0.09375, 1.0, 0.0, 0.0,
        
        0.45875, 0.14375, 1.0, 0.0, 0.0,
        0.5175, 0.09375, 1.0, 0.0, 0.0,
        0.49375, 0.14125, 1.0, 0.0, 0.0,
        
        0.5175, 0.09375, 1.0, 0.0, 0.0,
        0.49375, 0.14125, 1.0, 0.0, 0.0,
        0.5375, 0.0925, 1.0, 0.0, 0.0,
        
        0.49375, 0.14125, 1.0, 0.0, 0.0,
        0.5375, 0.0925, 1.0, 0.0, 0.0,
        0.525, 0.1375, 1.0, 0.0, 0.0,
        
        0.5375, 0.0925, 1.0, 0.0, 0.0,
        0.525, 0.1375, 1.0, 0.0, 0.0,
        0.58125, 0.07625, 1.0, 0.0, 0.0,
        
        0.525, 0.1375, 1.0, 0.0, 0.0,
        0.58125, 0.07625, 1.0, 0.0, 0.0,
        0.55375, 0.13375, 1.0, 0.0, 0.0,
        
        0.58125, 0.07625, 1.0, 0.0, 0.0,
        0.55375, 0.13375, 1.0, 0.0, 0.0,
        0.5975, 0.06625, 1.0, 0.0, 0.0,
        
        0.55375, 0.13375, 1.0, 0.0, 0.0,
        0.5975, 0.06625, 1.0, 0.0, 0.0,
        0.58375, 0.12, 1.0, 0.0, 0.0,
        
        0.5975, 0.06625, 1.0, 0.0, 0.0,
        0.58375, 0.12, 1.0, 0.0, 0.0,
        0.635, 0.035, 1.0, 0.0, 0.0,
        
        0.58375, 0.12, 1.0, 0.0, 0.0,
        0.635, 0.035, 1.0, 0.0, 0.0,
        0.60875, 0.1075, 1.0, 0.0, 0.0,
        
        0.635, 0.035, 1.0, 0.0, 0.0,
        0.60875, 0.1075, 1.0, 0.0, 0.0,
        0.6775, -0.00625, 1.0, 0.0, 0.0,
        
        0.60875, 0.1075, 1.0, 0.0, 0.0,
        0.6775, -0.00625, 1.0, 0.0, 0.0,
        0.6325, 0.0925, 1.0, 0.0, 0.0,
        
        0.6775, -0.00625, 1.0, 0.0, 0.0,
        0.6325, 0.0925, 1.0, 0.0, 0.0,
        0.66875, -0.035, 1.0, 0.0, 0.0,
        
        0.6325, 0.0925, 1.0, 0.0, 0.0,
        0.66875, -0.035, 1.0, 0.0, 0.0,
        0.6575, 0.0725, 1.0, 0.0, 0.0,
        
        0.66875, -0.035, 1.0, 0.0, 0.0,
        0.6575, 0.0725, 1.0, 0.0, 0.0,
        0.64375, -0.075, 1.0, 0.0, 0.0,
        
        0.6575, 0.0725, 1.0, 0.0, 0.0,
        0.64375, -0.075, 1.0, 0.0, 0.0,
        0.65625, 0.04625, 1.0, 0.0, 0.0,
        
        0.64375, -0.075, 1.0, 0.0, 0.0,
        0.65625, 0.04625, 1.0, 0.0, 0.0,
        0.61875, -0.08875, 1.0, 0.0, 0.0,
        
        0.65625, 0.04625, 1.0, 0.0, 0.0,
        0.61875, -0.08875, 1.0, 0.0, 0.0,
        0.6475, 0.02, 1.0, 0.0, 0.0,
        
        0.61875, -0.08875, 1.0, 0.0, 0.0,
        0.6475, 0.02, 1.0, 0.0, 0.0,
        0.59125, -0.0925, 1.0, 0.0, 0.0,
        
        0.6475, 0.02, 1.0, 0.0, 0.0,
        0.59125, -0.0925, 1.0, 0.0, 0.0,
        0.63625, 0.00625, 1.0, 0.0, 0.0,
        
        0.59125, -0.0925, 1.0, 0.0, 0.0,
        0.63625, 0.00625, 1.0, 0.0, 0.0,
        0.56, -0.1025, 1.0, 0.0, 0.0,
        
        0.63625, 0.00625, 1.0, 0.0, 0.0,
        0.56, -0.1025, 1.0, 0.0, 0.0,
        0.6175, -0.0075, 1.0, 0.0, 0.0,
        
        0.56, -0.1025, 1.0, 0.0, 0.0,
        0.6175, -0.0075, 1.0, 0.0, 0.0,
        0.51875, -0.105, 1.0, 0.0, 0.0,
        
        0.6175, -0.0075, 1.0, 0.0, 0.0,
        0.51875, -0.105, 1.0, 0.0, 0.0,
        0.595, -0.015, 1.0, 0.0, 0.0,
        
        0.51875, -0.105, 1.0, 0.0, 0.0,
        0.595, -0.015, 1.0, 0.0, 0.0,
        0.47875, -0.1075, 1.0, 0.0, 0.0,
        
        0.595, -0.015, 1.0, 0.0, 0.0,
        0.47875, -0.1075, 1.0, 0.0, 0.0,
        0.56625, -0.0225, 1.0, 0.0, 0.0,
        
        0.47875, -0.1075, 1.0, 0.0, 0.0,
        0.56625, -0.0225, 1.0, 0.0, 0.0,
        0.4375, -0.10375, 1.0, 0.0, 0.0,
    ];
    var LEFT = 133*3; //ukuran vertices kiri
    var RIGHT = 132*3; //ukuran vertices kanan
    var SIZE_V = LEFT + RIGHT;

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  
  
    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;
  
    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;
  
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
  
  
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
  
  
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);
  
  
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);
    
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

    //speed berdasarkan digit nrp
    var speed = 0.0135;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");
  
    function moveVertices() {
  
        if (change < -0.7 || change > 0.7) {
            speed = speed * -1;
        }
  
        for (let i = 1996; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        } // Kalo kelipatan 5 kanan kiri, kalo 6 akhirannya atas bawah
    }
  
  
    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);
  
        gl.clearColor(1.0, 1.0, 1.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, SIZE_V);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}