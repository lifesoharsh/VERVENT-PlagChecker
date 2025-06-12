jQuery( document ).ready(function( $ ) {

const mainContainer = document.querySelector(".grid-pattern .grid-pattern__container");

let depth = 1;
// this variable is what makes it cycle through multiple times (not sure what the point is)
const maxDepth = 1;
const bigShape = .7; // %
const blankSpot = .25; // %
let gridOn = false;

function makeContainer() {
  const inner_containers = document.querySelectorAll(
    `.grid-pattern .inner-container.depth-${depth}`
  );
  inner_containers.forEach(container => {
    // % chance you'll get a big shape
    if (Math.random() > bigShape) {
      for (i = 0; i < 4; i++) {
        container.classList.remove("fillable");
        const create_inner_container = document.createElement("div");
        create_inner_container.className = `inner-container depth-${depth +
          1} fillable`;
        if (gridOn) {
          create_inner_container.style.outline = "1px solid #ff0000";
        }
        container.appendChild(create_inner_container);
      }
    }
  });
  depth++;
}

function fillContainers() {
  const inner_containers = document.querySelectorAll(".fillable");
  const shapes = document.querySelectorAll(".shape");
  shapes.forEach(shape => shape.remove());
  //Shapes
  // const little_shapes = ["square", "circle", "triangle"];
  // const big_shapes = ["square", "circle", "triangle"];
  const little_shapes = ["square", "circle"];
  const big_shapes = ["square", "circle"];
  //Transforming shapes causes issues so made 4 triangles instead (squares and circles dont need rotation)
  const triangle_array = ["triangle-bot", "triangle-top", "triangle-left", "triangle-right"];
  const little_triangle_array = ["triangle-bot-sm", "triangle-top-sm", "triangle-left-sm", "triangle-right-sm"];
  //Colors
  const colors = ["#8DB1B4", "#FC6E65", "#BBB08B", "#FFF", "#535261"];
  //const rotation = ["90deg", "180deg"];

  
  inner_containers.forEach(container => {
    const container_depth = parseInt(container.classList[1].slice(-1));
    //switches between little and big shapes
    const shape_array = container_depth > 1 ? little_shapes : big_shapes;
    // % chance you'll get blank spot
    if (Math.random() > blankSpot) {
      const create_shape = document.createElement("div");
      //select shape
      const selected_shape = shape_array[Math.floor(Math.random() * shape_array.length)];
      //if shape is a big triangle select from big triangle array
      if (shape_array == big_shapes && selected_shape == "triangle" ) {
        create_shape.className = `shape ${
        triangle_array[Math.floor(Math.random() * triangle_array.length)]
      }`;
        // console.log(create_shape.className);
      }
      //else if shape is a little triangle select from little triangle array
      else if (shape_array == little_shapes && selected_shape == "triangle" ) {
        create_shape.className = `shape ${
        little_triangle_array[Math.floor(Math.random() * little_triangle_array.length)]
      }`;
        // console.log(create_shape.className);
      }
      // else use the shape that was selected
      else {
        create_shape.className = `shape ${
        selected_shape
      }`;
        // console.log(create_shape.className + " else");
      }
      create_shape.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      //rotation causes line issue. try removing rotation and adding actual rotated triangles
      /*create_shape.style.transform = `rotate(${
        rotation[Math.floor(Math.random() * colors.length)]
      })`;*/
      container.appendChild(create_shape);
    }
  });
}

let generating = false;
function makeContainers(i) {
  setTimeout(function() {
    if (++i < maxDepth) {
      makeContainers(i);
    }
    if (i == maxDepth) {
      generating = false;
    }
  }, 280);
  makeContainer();
  fillContainers();
}

function regen() {
  if (generating) return;
  generating = true;
  depth = 1;
  const depth_one_containers = document.querySelectorAll(
    ".inner-container.depth-1"
  );
  depth_one_containers.forEach(container => {
    container.innerHTML = "";
    container.classList.add("fillable");
  });
  makeContainers(0);
}

regen();

// When facets load, regen();
$(document).on('facetwp-loaded', function() {
  regen();
});

function hashCode(s) {
  for(var i = 0, h = 0; i < s.length; i++)
      h = Math.imul(31, h) + s.charCodeAt(i) | 0;
  return h;
}

const post_preview_list = document.querySelectorAll('.post-preview');

post_preview_list.forEach(function(post) {
  var title = post.querySelector('.post-preview-meta__title').innerHTML;
  var hash = Math.abs(hashCode(title));
  
});

});