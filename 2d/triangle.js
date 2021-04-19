var gl;
var points;

window.onload = function init(){
    var canvas = document.getElementById( "triangle-canvas" );
    gl = canvas.getContext("webgl")
    || canvas.getContext("experimental-webgl");
    if ( !gl ) { alert( "WebGL isn't available" ); }

    var vertices = [
        vec2( -0.5, -0.5 ),
        vec2(  0,  0.5 ),
        vec2(  0.5, -0.5 )    
        ];    

    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );

    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );
    render();
};

function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawArrays( gl.TRIANGLES, 0, 3 );
}







