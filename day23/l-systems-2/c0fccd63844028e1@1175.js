// https://observablehq.com/@kelleyvanevert/l-systems-2@1175
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# L-systems #2 — using SVG`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md`These L-systems are built from the following meaningful syntax:

<pre>
  <strong>Moving & drawing</strong>                      <strong>Turning</strong>
    F  draw & move forward                +  turn right
    f  draw without moving forward        -  turn left
    g  just go forward                    |  turn 180 deg
    {  begin polygon (dotted line)
    .  add polygon point
    }  end polygon (dotted line)
                                        <strong>State</strong>
  <strong>Step length</strong>                           (<em>position</em>, <em>heading</em> (${tex`\mathop{\to}`}), <em>angle</em> (${tex`90^\circ`}), <em>step length</em>)
    @${tex`n`}   step := step${tex`~\times~n`}                 [  save current state
    @I${tex`n`}  step := step${tex`~\times~(\frac{1}{n})`}               ]  restore state
    @Q${tex`n`}  step := step${tex`~\times~\sqrt{n}`}
</pre>

Any other symbols can be used as well, to control the production rules, but will be treated as meaningless at draw-time.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Interactive L-system editors`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The editors below can be used to interactively edit L-systems.

- *Redraw on edit*. The structure is redrawn on every succesful edit of the system specification. (I.e., when there is a syntax error, the previous structure is kept displayed.)
- *Animate*. You can animate the drawing by clicking the SVG, or including the <code>animate</code> flag in the specification.
- *Colors*. Use the <code>stroke</code> and <code>bg</code> options to color the drawing (and the <code>fill</code> option to fill polygons); or use the <code>colorful</code> flag to get some random colors :)
- *Download SVG / PNG*. You can down the image as an SVG or PNG by clicking on the button in the bottom-right corner on the image.

Be careful with large order numbers: the computation time grows exponentially, and you might hang your browser :)`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Koch curve`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`You can define an L-system like this:`
)});
  main.variable(observer("koch")).define("koch", ["L","parse"], function(L,parse){return(
L(parse(`order: 3
axiom: F+F+F+F
angle: 90
stroke: #fff
bg: #222

F -> F+F-F-FF+F+F-F`))
)});
  main.variable(observer()).define(["md"], function(md){return(
md`And draw it like this:`
)});
  main.variable(observer()).define(["draw","koch"], function(draw,koch){return(
draw(koch)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`But, for a tad bit more interactivity, use the <code>edit</code> function to create an interactive editor, which returns an Observable <code>viewof</code>-able dom element:`
)});
  main.variable(observer("viewof koch2")).define("viewof koch2", ["edit","koch"], function(edit,koch){return(
edit(koch)
)});
  main.variable(observer("koch2")).define("koch2", ["Generators", "viewof koch2"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`### Sierpinski triangle`
)});
  main.variable(observer("viewof sierpinski")).define("viewof sierpinski", ["edit","L","parse"], function(edit,L,parse){return(
edit(L(parse(`order: 7
axiom: AF
angle: 60
colorful
animate

A -> BF-AF-B
B -> AF+BF+A`)))
)});
  main.variable(observer("sierpinski")).define("sierpinski", ["Generators", "viewof sierpinski"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`### Dragon curve`
)});
  main.variable(observer("viewof dragoncurve")).define("viewof dragoncurve", ["edit","L","parse"], function(edit,L,parse){return(
edit(L(parse(`order: 10
axiom: FX
angle: 90
colorful
animate

X -> X+YF+
Y -> -FX-Y`)))
)});
  main.variable(observer("dragoncurve")).define("dragoncurve", ["Generators", "viewof dragoncurve"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`### Hexagonal gosper`
)});
  main.variable(observer("viewof hexg")).define("viewof hexg", ["edit","L","parse"], function(edit,L,parse){return(
edit(L(parse(`order: 4
axiom: XF
angle: 60
colorful

X -> X+YF++YF-FX--FXFX-YF+
Y -> -FX+YFYF++YF+FX--FX-Y`)))
)});
  main.variable(observer("hexg")).define("hexg", ["Generators", "viewof hexg"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`### Cube `
)});
  main.variable(observer("viewof cubes")).define("viewof cubes", ["edit","L","parse"], function(edit,L,parse){return(
edit(L(parse(`order: 10
axiom: Y
angle: 120
colorful

X -> F+gF
Y -> XY-XY`)))
)});
  main.variable(observer("cubes")).define("cubes", ["Generators", "viewof cubes"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`### Sierpinski Square`
)});
  main.variable(observer("viewof sierpinski_sq")).define("viewof sierpinski_sq", ["edit","L","parse"], function(edit,L,parse){return(
edit(L(parse(`order: 10
axiom: X--F--X--F
angle: 45
colorful

X -> +Y-F-Y+
Y -> -X+F+X-`)))
)});
  main.variable(observer("sierpinski_sq")).define("sierpinski_sq", ["Generators", "viewof sierpinski_sq"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`### Koch snowflake`
)});
  main.variable(observer("viewof koch_snowflake")).define("viewof koch_snowflake", ["edit","L","parse"], function(edit,L,parse){return(
edit(L(parse(`order: 4
axiom: F++F++F
angle: 60
colorful

F -> F-F++F-F`)))
)});
  main.variable(observer("koch_snowflake")).define("koch_snowflake", ["Generators", "viewof koch_snowflake"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`### Hilbert Curve`
)});
  main.variable(observer("viewof hilbert_curve")).define("viewof hilbert_curve", ["edit","L","parse"], function(edit,L,parse){return(
edit(L(parse(`order: 6
axiom: X
angle: 90
colorful

X -> -YF+XFX+FY-
Y -> +XF-YFY-FX+`)))
)});
  main.variable(observer("hilbert_curve")).define("hilbert_curve", ["Generators", "viewof hilbert_curve"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`### Fractal plant`
)});
  main.variable(observer("viewof plant")).define("viewof plant", ["edit","L","parse"], function(edit,L,parse){return(
edit(L(parse(`order: 5
axiom: ---X
angle: 25

X -> F[-X][X]F[-X]+FX
F -> FF`)))
)});
  main.variable(observer("plant")).define("plant", ["Generators", "viewof plant"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`### Penrose P3`
)});
  main.variable(observer("viewof penrose")).define("viewof penrose", ["edit","L","parse"], function(edit,L,parse){return(
edit(L(parse(`order: 5
axiom: [N]++[N]++[N]++[N]++[N]
angle: 36
colorful

M -> OF++PF----NF[-OF----MF]++
N -> +OF--PF[---MF--NF]+
O -> -MF++NF[+++OF++PF]-
P -> --OF++++MF[+PF++++NF]--NF
F ->`)))
)});
  main.variable(observer("penrose")).define("penrose", ["Generators", "viewof penrose"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`### Box`
)});
  main.variable(observer("viewof box")).define("viewof box", ["edit","L","parse"], function(edit,L,parse){return(
edit(L(parse(`order: 4
axiom: F+F+F+F
angle: 90
colorful

F -> FF+F+F+F+FF`)))
)});
  main.variable(observer("box")).define("box", ["Generators", "viewof box"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`### Leaves`
)});
  main.variable(observer("viewof leaf1")).define("viewof leaf1", ["edit","L","parse"], function(edit,L,parse){return(
edit(
  L(
    parse(`order: 7
axiom: F[A][B]
angle: 10
animate

A -> [+A{.].C.}
B -> [-B{.].C.}
C -> FC`)
  )
)
)});
  main.variable(observer("leaf1")).define("leaf1", ["Generators", "viewof leaf1"], (G, _) => G.input(_));
  main.variable(observer("viewof leaf2")).define("viewof leaf2", ["edit","L","parse"], function(edit,L,parse){return(
edit(
  L(
    parse(`order: 13
axiom: ----+FF+FF+FF+FF[A][B]
angle: 10
animate

A -> [+A{.].C.}
B -> [-B{.].C.}
C -> C@1.2F`)
  )
)
)});
  main.variable(observer("leaf2")).define("leaf2", ["Generators", "viewof leaf2"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`This one is not working as expected. I want to put leaves where I now have circular polygons, but for some reason I can't succesfully exchange <code>[L]</code> for <code>C</code>. The drawing code is getting messier as well...`
)});
  main.variable(observer("viewof leafed_tree")).define("viewof leafed_tree", ["edit","L","parse"], function(edit,L,parse){return(
edit(
  L(
    parse(`order: 11
axiom: ---------A
angle: 10
animate

T -> TF
A -> TF[+++X]TFB
B -> TF[---Y]TFA
X -> A
Y -> BC
C -> [{g.++g.++g.++g.++g.++g.++g.++g.++g.++g.++g.++g.++g.++g.++g.++g.++g.++g.}]
L -> [N][M]
N -> [+N{.].O.}
M -> [-M{.].O.}
O -> O@1.2F`)
  )
)
)});
  main.variable(observer("leafed_tree")).define("leafed_tree", ["Generators", "viewof leafed_tree"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`The goal is to have something like this:

![](http://www.gib.uni-tuebingen.de/own/journal/img/upload/507944a4dbc01f7468c24b2db605fcb8.png)`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Implementation`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md`Types involved:

<pre>  <strong>System</strong>    := { order<sup>${tex`\mathbb{N}`}</sup>, axiom<sup>String</sup>, angle<sup>${tex`\mathbb{N}`} (degrees)</sup>, rules<sup>{Var: String}*</sup> }
  <strong>Generator</strong> := (${tex`\mathbb{N}`} -> String)  w/  .system<sup>System</sup></pre>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<code style="background: #f5f5f5; padding: 5px;"><strong>L :: System -> Generator</strong></code>

Creates an L-system generator form a system specification.`
)});
  main.variable(observer("L")).define("L", function(){return(
function L (system = {}) {
  var gen;

  function reset () {
    gen = [system.axiom];
  }
  
  function g (n = 0) {
    return new Promise(resolve => {
      function go () {
        if (gen[n]) return resolve(gen[n]);
        gen.push(gen[gen.length-1].replace(/./g, c => system.rules[c]));
        setTimeout(go, 1);
      }
      go();
    });
  }

  reset();

  g.reset = reset;
  g.system = system;
  return g;
}
)});
  main.variable(observer("L_old")).define("L_old", function(){return(
function L_old (system = {}) {
  var gen;

  function reset () {
    gen = [system.axiom];
  }
  
  function g (n = 0) {
    var rule;
    for (var i = gen.length; i <= n; i++) {
      gen[i] = gen[i-1].replace(/./g, c => system.rules[c]);
    }
    return gen[n];
  }

  reset();

  g.reset = reset;
  g.system = system;
  return g;
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<code style="background: #f5f5f5; padding: 5px;"><strong>L :: System -> String</strong></code>

Pretty-prints an L-system.`
)});
  main.variable(observer("stringify")).define("stringify", function(){return(
function stringify (system) {
  return `order: ${system.order}
axiom: ${system.axiom}
angle: ${system.angle}${system.animate === 'no' ? `
animate: no`: ''}${system.colorful ? `
colorful` : ''}

${Object.entries(system.rules).map(([k,v]) => `${k} -> ${v}`).join('\n')}`;
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<code style="background: #f5f5f5; padding: 5px;"><strong>parse :: String -> System</strong></code>

Parses an L-system. The accepted grammar is, approximately:

      <system> ::= (<param> | <rule>)*
      <param>  ::= ("order" | "axiom" | "angle" | "animate"): VALUE
      <rule>   ::= <var> "->" <instr>
      <instr>  ::= "F" | "f" | "g" | "+" | "-" | "[" | "]"
                 | "@" NUMBER | "@I" NUMBER | "@Q" NUMBER`
)});
  main.variable(observer("parse")).define("parse", ["colorsets"], function(colorsets){return(
function parse (text = '') {
  const def = {
    axiom: 'X',
    angle: 90,
    fill: '#f6f6f6',
    stroke: 'black',
    bg: '#f9f9f9',
  };
  
  const known = {
    angle: [/^[0-9\.]+$/, parseFloat],
    order: [/^[0-9]+$/, parseInt],
    axiom: String,
    animate: () => true,
    colorful: () => true,
    stroke: String,
    fill: String,
    bg: String,
  };

  // inherit defaults
  const system = Object.create(def);
  system.rules = {};
  system._text = text;
  
  var m, f;

  text.split('\n').forEach(line => {
    line = line.trim();
    if (!line) return;
    if (line.match(/^\/\//)) return;

    if (m = line.match(/^([a-z]+)(?:[ ]*:[ ]*(.*))?$/)) {
      if (f = known[m[1]]) {
        var test = /.*/;
        var coerce = f;
        if (f.splice) {
          test = f[0];
          coerce = f[1];
        }
        if (!(m[2] || '').match(test)) {
          throw 'Parameter invalid: ' + m[1];
        }
        system[m[1]] = coerce(m[2] || '');
      } else {
        throw 'Err: key not known: ' + m[1];
      }
    } else if (m = line.match(/^([A-Z])[ ]*(?:->|=)[ ]*(.*)$/)) {
      system.rules[m[1]] = m[2];
    } else {
      throw 'Err: line not parseable: ' + line;
    }
  });
  
  const constants = {};
  Object.values(system.rules).forEach(v => {
    v.split('').forEach(c => {
      if (system.rules[c] === undefined) {
        constants[c] = c;
      }
    });
  });
  system.rules = Object.assign(Object.create(constants), system.rules);
  
  if (!system.order) {
    system.order = 2;
  }
  
  if (system.colorful) {
    const colorset = colorsets[Math.floor(Math.random() * colorsets.length)];
    Object.assign(system, colorset);
  }

  return system;
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<code style="background: #f5f5f5; padding: 5px;"><strong>edit :: Generator -> <em style="font-weight:normal;">viewof</em> Generator</strong></code>

Displays an interactive editor for the given L-system generator. You can use Observable's <code>viewof</code> operator to use the resulting generator reactively.`
)});
  main.variable(observer("edit")).define("edit", ["html","stringify","d3","DOM","parse","L","draw"], function(html,stringify,d3,DOM,parse,L,draw){return(
function edit (g, params = {}) {
  const S = 400;
  const t = Object.entries(g.system.rules).map(([k,v]) => `${k} -> ${v}`).join('\n');
  
  const form = html`<form class="l-system-editor" style="display: flex;">
    <div class="c" style="width: ${S}px; box-sizing: border-box; height: ${S}px; background: #fafafa; position: relative;">
       <div style="position: absolute; bottom: 0; right: 0;">
         <a class="d svg" download="im.svg" href="#" style="font-size: 14px; display: inline-block; padding: 0 4px;">Download SVG</a>
         <a class="d png" download="im.png" href="#" style="font-size: 14px; display: inline-block; padding: 0 4px;">Download PNG</a>
       </div>
    </div>
    <div class="l-system" style="min-width: ${S}px; height: ${S}px;">
      <textarea style="resize: none; font-size: 14px; margin: 0; width: ${S}px; height: ${S}px; padding: 10px; box-sizing: border-box; border: 2px solid #eee;">${g.system._text || stringify(g.system)}</textarea>
    </div>
    <style>
      .l-system-editor a { color: #000; opacity: .4; }
      .l-system-editor .c:hover a { color: #fff; background: #222; opacity: 1; text-decoration: none; }
    </style>
    <div style="clear: both;"></div>
  </form>`;
  
  const svg = d3.select(DOM.svg(S, S));
  svg.node().style = 'display: inline-block; background: #fafafa;';
  form.querySelector('.c').appendChild(svg.node());
  
  const a_png = form.querySelector('a.d.png');
  a_png.onclick = function (e) {
    var url = a_png.href = URL.createObjectURL(svg._pngblob);
    setTimeout(function() { URL.revokeObjectURL(url); }, 50);
  }
  
  const a_svg = form.querySelector('a.d.svg');
  a_svg.onclick = function (e) {
    var url = a_svg.href = URL.createObjectURL(svg._svgblob);
    setTimeout(function() { URL.revokeObjectURL(url); }, 50);
  }
  
  const textarea = form.querySelector('textarea');
  const verb = 'oninput';
  form[verb] = (e) => {
    e && e.preventDefault();
    var system;
    try {
      system = parse(textarea.value);
    } catch (e) {
      textarea.style['color'] = '#d00';
    }
    if (system) {
      g = L(system);
      textarea.style['color'] = '#333';
      
      draw(g, S, svg);
      
      if (form.output) form.output.value = g;
      form.value = g;
      if (verb != "oninput") form.dispatchEvent(new CustomEvent("input"));
    }
  };
  form[verb]();
  
  form.value = g;
  return form;
}
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md`<code style="background: #f5f5f5; padding: 5px;"><strong>linedata :: Generator [, order<sup>${tex`\mathbb{N}`}</sup>] -> Promise({ lines<sup>Array(Line)</sup>, polygons<sup>Array(Polygon)</sup> })</strong></code>

<pre>  <strong>Line</strong>    := Array( { x, y } )
  <strong>Polygon</strong> := Array( { x, y } )</pre>

Render the result of the generation as an array of lines. The points live in a coordinate system where generation started at (0, 0) and to the right, and the step size started at 1. The bounds depend entirely on the generated result. To display, you'll have to scale accordingly.`
)});
  main.variable(observer("linedata")).define("linedata", ["Matrix"], function(Matrix){return(
function linedata (g, order = g.system.order) {
  const lines = [];
  const polygons = []; const editpolys = [];
  const mat = [new Matrix()];
  mat[0]._step = 1;
  
  const start_new_line = () => lines.unshift([ mat[0].applyToPoint(0, 0) ]);
  const draw_line      = () => lines[0].push(mat[0].applyToPoint(mat[0]._step, 0));
  const just_move      = () => mat[0].translate(mat[0]._step, 0);
  
  const add_poly_dot   = () => {
    if (!editpolys.length) throw 'No polygon [add_poly_dot]';
    editpolys[0].push(mat[0].applyToPoint(0, 0));
  }
  const start_polygon  = () => editpolys.unshift([]);
  const close_polygon  = () => {
    if (!editpolys.length) throw 'No polygon [close_polyong]';
    var polygon = editpolys.shift();
    polygon.push(polygon[0]);
    polygons.push(polygon);
  }
  
  const instructions = {
    'F': () => (draw_line(), just_move()), // draw & move forward
    'f': () => (draw_line(), start_new_line()), // draw but don't move
    'g': () => (just_move(), start_new_line()), // only move forward
    '+': () => mat[0].rotateDeg(g.system.angle), // rotate right
    '-': () => mat[0].rotateDeg(-g.system.angle), // rotate left
    '|': () => mat[0].rotateDeg(180),
    '[': () => { mat.unshift(mat[0].clone()); mat[0]._step = mat[1]._step; }, // push matrix
    ']': () => (mat.shift(), start_new_line()), // pop matrix
    
    '.': () => add_poly_dot(),
    '{': () => start_polygon(),
    '}': () => close_polygon(),
  };
  
  start_new_line();
  
  return new Promise(resolve => {
    g(order).then(str => {
      var m;

      while (m = str.match(/^([^@]|@[IQ]?[0-9\.]+\^?)/)) {
        str = str.slice(m[1].length);
        if (m[1][0] == '@') {
          m = m[1].match(/^@([IQ]?)([0-9\.]+)(\^?)/);
          var mod = m[1];
          var n = parseFloat(m[2]);
          if (m[3]) n = Math.pow(n, g.system.order);
          if (mod == 'I') n = 1/n;
          if (mod == 'Q') n = Math.sqrt(n);
          mat[0]._step *= n;
        } else {
          if (instructions[m[1]]) {
            instructions[m[1]]();
          }
        }
      }

      resolve({ lines, polygons });
    });
  });
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<code style="background: #f5f5f5; padding: 5px;"><strong>bounds :: Array(Line) -> [ min_x, min_y, max_x, max_y ]</strong></code>

Computes the bounds of a set of lines.`
)});
  main.variable(observer("bounds")).define("bounds", function(){return(
function bounds (lines) {
  const b = [0, 0, 0, 0]; // minx, miny, maxx, maxy
  
  for (var line of lines) {
    for (var p of line) {
      if (p.x < b[0]) b[0] = p.x;
      if (p.y < b[1]) b[1] = p.y;
      if (p.x > b[2]) b[2] = p.x;
      if (p.y > b[3]) b[3] = p.y;
    }
  }
  
  return b;
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`<code style="background: #f5f5f5; padding: 5px;"><strong>draw :: { lines, polygons } [, x] [, y] [, w] [, h] [, d3svg] [, animate] [, colorful] -> SVGElement</strong></code>

Draws the given lines to an SVG element (reusing the given d3-wrapped element if provided). The structure is positioned in the center of the specified rectangle, making sure to scale both axes the same amount.`
)});
  main.variable(observer("draw")).define("draw", ["d3","DOM","linedata","bounds","serialize","rasterize"], function(d3,DOM,linedata,bounds,serialize,rasterize){return(
function draw (lgen, S = 300, svg = d3.select(DOM.svg(S, S))) {
  
  svg.selectAll('path').interrupt();
  const node = svg.node();
  while(node.lastChild) node.removeChild(node.lastChild);

  svg.append('rect')
    .attr('x', 0).attr('width', S)
    .attr('y', 0).attr('height', S)
    .attr('fill', lgen.system.bg)
    .attr('stroke', 'none');
  
  return new Promise(resolve => {
    linedata(lgen).then(data => {
      const b = bounds(data.lines);

      var sx = S / (b[2]-b[0]);
      var sy = S / (b[3]-b[1]);
      var diff = (b[2]-b[0]) - (b[3]-b[1]);
      if (sx > sy) {
        b[2] -= diff/2;
        b[0] += diff/2;
      } else {
        b[3] += diff/2;
        b[1] -= diff/2;
      }

      const scaleX = d3.scaleLinear().domain([b[0], b[2]]).range([10, S-10]);
      const scaleY = d3.scaleLinear().domain([b[1], b[3]]).range([10, S-10]);

      const T = 1500; // total animation time

      const line = d3.line().x(d => scaleX(d.x)).y(d => scaleY(d.y));

      //svg.select('rect').remove();
      //svg.selectAll('path').remove();

//      svg.append('rect').attr('x', 0).attr('y', 0).attr('width', S).attr('height', S)
//         .attr('fill', lgen.system.bg)
//         .attr('stroke', 'none');

      // draw polygons
      const polygons = data.polygons.reverse();
      var polypaths = svg
        .append('g')
          .attr('class', 'poly')
          .attr('fill', lgen.system.fill)
          .attr('stroke', lgen.system.stroke)
          .attr('stroke-width', '1')
          .attr("stroke-dasharray", '3 3')
          .selectAll('path').data(polygons)
            .enter().append('path').attr('d', line);

      // draw lines
      const lines = data.lines.reverse();
      var paths = svg
        .append('g')
          .attr('class', 'line')
          .attr('fill', 'none')
          .attr('stroke', lgen.system.stroke)
          .attr('stroke-width', '1')
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .selectAll('path').data(lines.filter(line => line.length > 1))
            .enter().append('path').attr('d', line);

      function animate () {
        var total_len = 0;
        paths
            .interrupt()
            .attr("stroke-dashoffset", function (d) {
              d._prevt = total_len;
              total_len += (d._len = this.getTotalLength());
              return d._len;
            })
            .attr("stroke-dasharray", d => d._len + ' ' + d._len);

        var u = T / total_len;
        paths
            .transition()
            .delay(line => line._prevt * u)
            .duration(line => line._len * u)
            .ease(d3.easeLinear)
            .attr("stroke-dashoffset", 0);
      }

      // Create rasterized blobs *before* animation
      svg._svgblob = serialize(svg.node());
      rasterize(svg.node(), 2).then(b => {
        svg._pngblob = b;
        if (lgen.system.animate) {
          animate();
        }
      });

      svg.on("click", null).on("click", animate);
      
      resolve(svg.node());
    });  
  });
}
)});
  main.variable(observer("colorsets")).define("colorsets", function(){return(
[
  { bg: 'yellow', stroke: 'orange', fill: '#db1717' },
  //{ bg: 'lightblue', stroke: 'darkblue', fill: 'lightblue' },
  { bg: 'lightgreen', stroke: 'darkgreen', fill: 'lightgreen' },
  { bg: '#345fa1', stroke: '#d0e8e9', fill: '#adb16c' },
  { bg: '#34a17e', stroke: '#f4f6d1', fill: '#adb16c' },
]
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Dependencies`
)});
  main.variable(observer("Matrix")).define("Matrix", ["require"], function(require){return(
require('transformation-matrix-js').catch(e => window.Matrix)
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require('https://d3js.org/d3.v5.min.js')
)});
  main.variable(observer("serialize")).define("serialize", function()
{
  const xmlns = "http://www.w3.org/2000/xmlns/";
  const xlinkns = "http://www.w3.org/1999/xlink";
  const svgns = "http://www.w3.org/2000/svg";
  return function serialize(svg) {
    svg = svg.cloneNode(true);
    svg.setAttributeNS(xmlns, "xmlns", svgns);
    svg.setAttributeNS(xmlns, "xmlns:xlink", xlinkns);
    const serializer = new window.XMLSerializer;
    const string = serializer.serializeToString(svg);
    return new Blob([string], {type: "image/svg+xml"});
  };
}
);
  main.variable(observer("rasterize")).define("rasterize", ["DOM","serialize"], function(DOM,serialize){return(
function rasterize(svg, scale = 1) {
  let resolve, reject;
  const promise = new Promise((y, n) => (resolve = y, reject = n));
  const image = new Image;
  image.onerror = reject;
  image.onload = () => {
    const rect = svg.getBoundingClientRect();
    const context = DOM.context2d(rect.width * scale, rect.height * scale);
    context.drawImage(image, 0, 0, rect.width * scale, rect.height * scale);
    context.canvas.toBlob(resolve);
  };
  image.src = URL.createObjectURL(serialize(svg));
  return promise;
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Some resources / references

- https://10klsystems.wordpress.com/examples/
- http://www.kevs3d.co.uk/dev/lsystems/
- http://www.cs.brandeis.edu/~storer/JimPuzzles/PACK/CzechFarms/PenroseTilingWikipedia.pdf
- http://codeboje.de/lindenmayer-systems-using-python/
- http://paulbourke.net/fractals/lsys/
- https://cgjennings.ca/articles/l-systems.html
- https://n-e-r-v-o-u-s.com/blog/?p=3983`
)});
  return main;
}
