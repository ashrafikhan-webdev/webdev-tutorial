const LESSONS = [
  {
    id: 'html-structure',
    section: 'HTML',
    tag: 'html',
    title: 'Document Structure',
    cat: 'HTML Fundamentals',
    catClass: 'cat-html',
    desc: 'Every HTML page follows a standard structure. The <code>&lt;!DOCTYPE html&gt;</code> declaration tells the browser this is HTML5. Inside <code>&lt;html&gt;</code>, we have two main parts: <code>&lt;head&gt;</code> (invisible metadata) and <code>&lt;body&gt;</code> (visible content).',
    concepts: [
      '<code>&lt;!DOCTYPE html&gt;</code> — Declares the document as HTML5',
      '<code>&lt;html lang="en"&gt;</code> — Root element, sets language',
      '<code>&lt;head&gt;</code> — Holds metadata: title, charset, links',
      '<code>&lt;body&gt;</code> — Everything visible on the page lives here',
      '<code>&lt;meta charset="UTF-8"&gt;</code> — Supports all characters & emoji',
    ],
    challenge: 'Try editing the title and body text below. Hit Run to see your changes in the preview!',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My First Page</title>
</head>
<body>
  <h1>Hello, World! 👋</h1>
  <p>This is my first web page.</p>
  <p>Edit this and click <strong>Run</strong>!</p>
</body>
</html>`,
  },
  {
    id: 'html-tags',
    section: 'HTML',
    tag: 'html',
    title: 'Common HTML Tags',
    cat: 'HTML Fundamentals',
    catClass: 'cat-html',
    desc: 'HTML has dozens of tags, each with a semantic meaning. Using the right tag improves readability and accessibility. Headings (<code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code>), paragraphs (<code>&lt;p&gt;</code>), links (<code>&lt;a&gt;</code>), images (<code>&lt;img&gt;</code>), and lists (<code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>) are the most common.',
    concepts: [
      '<code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> — Headings, h1 is most important',
      '<code>&lt;p&gt;</code> — Paragraphs of text',
      '<code>&lt;a href="..."&gt;</code> — Clickable hyperlinks',
      '<code>&lt;img src="..." alt="..."&gt;</code> — Images (always add alt text!)',
      '<code>&lt;ul&gt;</code> / <code>&lt;ol&gt;</code> — Unordered / Ordered lists',
      '<code>&lt;strong&gt;</code> / <code>&lt;em&gt;</code> — Bold / Italic emphasis',
    ],
    challenge: 'Try adding a new list item, or change the link href to a different URL!',
    code: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Common Tags</title></head>
<body>
  <h1>Web Dev Tags</h1>
  <h2>A Subheading</h2>
  <p>This is a <strong>paragraph</strong> with <em>emphasis</em>.</p>

  <h3>My Favourite Sites</h3>
  <ul>
    <li><a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a></li>
    <li><a href="https://css-tricks.com" target="_blank">CSS-Tricks</a></li>
    <li>Add your own link here!</li>
  </ul>

  <h3>Steps to learn HTML</h3>
  <ol>
    <li>Read the docs</li>
    <li>Practice with examples</li>
    <li>Build projects!</li>
  </ol>
</body>
</html>`,
  },
  {
    id: 'html-forms',
    section: 'HTML',
    tag: 'html',
    title: 'Forms & Inputs',
    cat: 'HTML Fundamentals',
    catClass: 'cat-html',
    desc: 'Forms let users send data to a server or interact with a page. The <code>&lt;form&gt;</code> element wraps inputs. Each <code>&lt;input&gt;</code> has a <code>type</code> attribute that changes its behaviour — text, email, checkbox, radio, and more.',
    concepts: [
      '<code>&lt;form&gt;</code> — Container for form elements',
      '<code>&lt;input type="text"&gt;</code> — Single-line text field',
      '<code>&lt;input type="email"&gt;</code> — Email field with validation',
      '<code>&lt;input type="checkbox"&gt;</code> — Tick box',
      '<code>&lt;label for="id"&gt;</code> — Connects label to an input',
      '<code>&lt;button type="submit"&gt;</code> — Submits the form',
    ],
    challenge: 'Add a new field — try <code>&lt;input type="number"&gt;</code> for age!',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Forms</title>
<style>
  body { font-family: sans-serif; padding: 20px; }
  label { display: block; margin: 10px 0 4px; font-weight: bold; }
  input, select { padding: 8px; border: 1px solid #ccc; border-radius: 4px; width: 200px; }
  button { margin-top: 14px; padding: 9px 20px; background: #4f46e5; color: white; border: none; border-radius: 5px; cursor: pointer; }
</style>
</head>
<body>
  <h2>Sign Up Form</h2>
  <form>
    <label for="name">Full Name</label>
    <input type="text" id="name" placeholder="Jane Doe" />

    <label for="email">Email</label>
    <input type="email" id="email" placeholder="jane@example.com" />

    <label>
      <input type="checkbox" /> I agree to the terms
    </label>

    <button type="submit">Submit</button>
  </form>
</body>
</html>`,
  },
  {
    id: 'css-selectors',
    section: 'CSS',
    tag: 'css',
    title: 'Selectors & Properties',
    cat: 'CSS Styling',
    catClass: 'cat-css',
    desc: 'CSS selects HTML elements and applies visual styles. You can target by <strong>tag</strong> name, <strong>class</strong> (with a dot <code>.</code>), or <strong>id</strong> (with a hash <code>#</code>). Properties like <code>color</code>, <code>font-size</code>, and <code>background</code> control appearance.',
    concepts: [
      '<code>p { }</code> — Targets all <code>&lt;p&gt;</code> elements',
      '<code>.box { }</code> — Targets elements with <code>class="box"</code>',
      '<code>#title { }</code> — Targets the element with <code>id="title"</code>',
      '<code>color</code> — Text colour (name, hex, rgb)',
      '<code>background-color</code> — Element background',
      '<code>font-size</code> — Text size in px, em, or rem',
    ],
    challenge: 'Try changing the colours, add a border, or adjust the font-size!',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>CSS Selectors</title>
<style>
  /* Tag selector */
  body {
    font-family: sans-serif;
    padding: 20px;
    background: #f0f4f8;
  }

  /* Class selector */
  .card {
    background: white;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }

  /* ID selector */
  #special {
    background: #4f46e5;
    color: white;
  }

  /* Multiple selectors */
  h2, h3 {
    color: #1e293b;
    margin-bottom: 8px;
  }
</style>
</head>
<body>
  <div class="card">
    <h2>Regular Card</h2>
    <p>Styled with the <code>.card</code> class.</p>
  </div>

  <div class="card" id="special">
    <h2>Special Card</h2>
    <p>Also has <code>id="special"</code> — notice the different background!</p>
  </div>
</body>
</html>`,
  },
  {
    id: 'css-box-model',
    section: 'CSS',
    tag: 'css',
    title: 'The Box Model',
    cat: 'CSS Styling',
    catClass: 'cat-css',
    desc: 'Every HTML element is a rectangular box. The CSS Box Model describes the four layers around content: <strong>content</strong>, <strong>padding</strong> (inner space), <strong>border</strong>, and <strong>margin</strong> (outer space). Understanding this is crucial for layout!',
    concepts: [
      '<code>width / height</code> — Size of the content area',
      '<code>padding</code> — Space between content and border (inside)',
      '<code>border</code> — Line around the padding',
      '<code>margin</code> — Space outside the border (pushes away from neighbours)',
      '<code>box-sizing: border-box</code> — Makes width include padding & border',
    ],
    challenge: 'Change the padding, margin, or border-width values and watch the box change!',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Box Model</title>
<style>
  body { font-family: sans-serif; padding: 20px; background: #f1f5f9; }

  .box {
    width: 200px;
    height: 80px;
    padding: 20px;
    border: 4px solid #4f46e5;
    border-radius: 8px;
    margin: 30px;
    background: #e0e7ff;
    color: #1e1b4b;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .outer {
    background: #fde68a;
    display: inline-block;
    border: 2px dashed #d97706;
  }
</style>
</head>
<body>
  <p><strong>Yellow</strong> = margin area &nbsp; <strong>Purple border</strong> = border &nbsp; <strong>Blue</strong> = padding + content</p>
  <div class="outer">
    <div class="box">I am a box!</div>
  </div>
</body>
</html>`,
  },
  {
    id: 'css-center-flex',
    section: 'CSS',
    tag: 'css',
    title: 'Center a Div — Flexbox',
    cat: 'CSS Styling',
    catClass: 'cat-css',
    desc: 'Centering elements is one of the most asked questions in CSS! <strong>Flexbox</strong> makes it trivial. Apply <code>display: flex</code> to the <em>parent</em>, then use <code>justify-content: center</code> (horizontal) and <code>align-items: center</code> (vertical).',
    concepts: [
      '<code>display: flex</code> — Enables Flexbox on the parent',
      '<code>justify-content: center</code> — Centers children horizontally',
      '<code>align-items: center</code> — Centers children vertically',
      '<code>gap</code> — Space between flex children',
      '<code>flex-direction: column</code> — Stacks children vertically instead',
    ],
    challenge: 'Try changing <code>justify-content</code> to <code>flex-start</code> or <code>space-between</code>, and see what happens!',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Center with Flexbox</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { height: 100vh; background: #0f172a; }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 16px;
  }

  .box {
    width: 120px;
    height: 120px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 14px;
    color: white;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="box" style="background:#6366f1;">Box 1</div>
    <div class="box" style="background:#ec4899;">Box 2</div>
    <div class="box" style="background:#14b8a6;">Box 3</div>
  </div>
</body>
</html>`,
  },
  {
    id: 'css-center-grid',
    section: 'CSS',
    tag: 'css',
    title: 'Center a Div — Grid',
    cat: 'CSS Styling',
    catClass: 'cat-css',
    desc: 'CSS Grid is another powerful layout system. To center a single element, apply <code>display: grid</code> to the parent and use <code>place-items: center</code> — that\'s a shorthand for both axes at once. Two lines!',
    concepts: [
      '<code>display: grid</code> — Enables CSS Grid on the parent',
      '<code>place-items: center</code> — Centers in both axes (shorthand)',
      '<code>place-items</code> = <code>align-items</code> + <code>justify-items</code>',
      '<code>grid-template-columns</code> — Defines column sizes',
      'Grid is great for 2D layouts; Flex is great for 1D',
    ],
    challenge: 'Try <code>place-items: start end</code> — can you guess where the box ends up?',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Center with Grid</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { height: 100vh; background: #0f172a; }

  .container {
    display: grid;
    place-items: center;
    height: 100%;
  }

  .box {
    background: linear-gradient(135deg, #8b5cf6, #ec4899);
    color: white;
    font-family: sans-serif;
    font-size: 18px;
    font-weight: bold;
    width: 180px;
    height: 180px;
    border-radius: 20px;
    display: grid;
    place-items: center;
    box-shadow: 0 20px 60px rgba(139,92,246,0.4);
  }
</style>
</head>
<body>
  <div class="container">
    <div class="box">Centered! 🎯</div>
  </div>
</body>
</html>`,
  },
  {
    id: 'js-variables',
    section: 'JavaScript',
    tag: 'js',
    title: 'Variables & Data Types',
    cat: 'JavaScript',
    catClass: 'cat-js',
    desc: 'Variables store data. Use <code>let</code> for values that change and <code>const</code> for values that stay fixed. JavaScript has several data types: strings, numbers, booleans, arrays, and objects.',
    concepts: [
      '<code>let</code> — Declares a variable that can be reassigned',
      '<code>const</code> — Declares a constant (cannot be reassigned)',
      '<code>string</code> — Text in quotes: <code>"hello"</code> or <code>\'hi\'</code>',
      '<code>number</code> — Integers & decimals: <code>42</code>, <code>3.14</code>',
      '<code>boolean</code> — <code>true</code> or <code>false</code>',
      '<code>array</code> — List of values: <code>[1, 2, 3]</code>',
    ],
    challenge: 'Add a new variable and display it in the output box below!',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>JS Variables</title>
<style>
  body { font-family: monospace; padding: 20px; background: #1e293b; color: #94a3b8; }
  h2 { color: #f8fafc; font-family: sans-serif; margin-bottom: 16px; }
  .output { background: #0f172a; border-radius: 8px; padding: 16px; line-height: 2; }
  .key { color: #7dd3fc; }
  .val { color: #86efac; }
  .type { color: #f0abfc; font-size: 12px; }
</style>
</head>
<body>
  <h2>Variables & Types</h2>
  <div class="output" id="out"></div>
  <script>
    const name = "Alex";
    let age = 25;
    const isProgrammer = true;
    const scores = [90, 85, 92];
    const person = { city: "London", hobby: "coding" };

    const out = document.getElementById("out");
    const show = (k, v) => {
      const type = Array.isArray(v) ? "array" : typeof v;
      out.innerHTML += \`<div><span class="key">\${k}</span> = <span class="val">\${JSON.stringify(v)}</span> <span class="type">(\${type})</span></div>\`;
    };
    show("name", name);
    show("age", age);
    show("isProgrammer", isProgrammer);
    show("scores", scores);
    show("person", person);
  <\/script>
</body>
</html>`,
  },
  {
    id: 'js-functions',
    section: 'JavaScript',
    tag: 'js',
    title: 'Functions',
    cat: 'JavaScript',
    catClass: 'cat-js',
    desc: 'Functions are reusable blocks of code. Define them once, call them many times. You can pass <strong>parameters</strong> in and get a <strong>return value</strong> out. Arrow functions (<code>=&gt;</code>) are a modern, shorter syntax.',
    concepts: [
      '<code>function name() { }</code> — Traditional function declaration',
      '<code>const name = () =&gt; { }</code> — Arrow function',
      '<code>parameters</code> — Inputs listed inside the parentheses',
      '<code>return</code> — Sends a value back to the caller',
      'Functions can call other functions!',
    ],
    challenge: 'Write a function called <code>square</code> that returns a number multiplied by itself!',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Functions</title>
<style>
  body { font-family: sans-serif; padding: 20px; background: #fefce8; }
  .card { background: white; border-radius: 10px; padding: 16px; margin-bottom: 12px; box-shadow: 0 2px 6px rgba(0,0,0,0.07); }
  .result { color: #854d0e; font-weight: bold; }
</style>
</head>
<body>
  <div class="card"><strong>greet("Alice")</strong> → <span class="result" id="r1"></span></div>
  <div class="card"><strong>add(7, 3)</strong> → <span class="result" id="r2"></span></div>
  <div class="card"><strong>double(5)</strong> → <span class="result" id="r3"></span></div>
  <div class="card"><strong>Your square(9):</strong> <span class="result" id="r4">— write the function below!</span></div>
  <script>
    function greet(name) { return "Hello, " + name + "! 👋"; }
    const add = (a, b) => a + b;
    const double = (n) => { return n * 2; };
    // TODO: write square() here!
    // const square = (n) => ???

    document.getElementById("r1").textContent = greet("Alice");
    document.getElementById("r2").textContent = add(7, 3);
    document.getElementById("r3").textContent = double(5);
    // document.getElementById("r4").textContent = square(9);
  <\/script>
</body>
</html>`,
  },
  {
    id: 'js-dom',
    section: 'JavaScript',
    tag: 'js',
    title: 'DOM Manipulation',
    cat: 'JavaScript',
    catClass: 'cat-js',
    desc: 'The DOM (Document Object Model) is a tree of all elements on the page. JavaScript can select, read, and change any element. <code>document.getElementById()</code> finds an element; then you can change its <code>textContent</code>, <code>style</code>, or <code>innerHTML</code>.',
    concepts: [
      '<code>document.getElementById("id")</code> — Find element by id',
      '<code>document.querySelector(".class")</code> — Find first matching element',
      '<code>element.textContent = "..."</code> — Change text',
      '<code>element.style.color = "red"</code> — Change inline style',
      '<code>element.innerHTML = "&lt;b&gt;...&lt;/b&gt;"</code> — Change HTML inside',
      '<code>element.classList.add("class")</code> — Add a CSS class',
    ],
    challenge: 'Try changing the box colour to green by setting <code>style.background</code>!',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>DOM Manipulation</title>
<style>
  body { font-family: sans-serif; padding: 20px; }
  #box {
    width: 150px; height: 150px;
    background: #6366f1; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    color: white; font-weight: bold; font-size: 18px;
    margin: 20px 0; transition: all 0.3s;
  }
  #message { font-size: 18px; color: #1e293b; }
</style>
</head>
<body>
  <p id="message">Original text</p>
  <div id="box">Box</div>
  <script>
    const msg = document.getElementById("message");
    const box = document.getElementById("box");
    msg.textContent = "Changed by JavaScript! ✨";
    box.style.background = "#ec4899";
    box.style.borderRadius = "50%";
    box.innerHTML = "Round!";
    // Try: change box.style.background to your favourite colour
  <\/script>
</body>
</html>`,
  },
  {
    id: 'js-events',
    section: 'JavaScript',
    tag: 'js',
    title: 'Events & Interaction',
    cat: 'JavaScript',
    catClass: 'cat-js',
    desc: 'Events let your page react to user actions — clicks, key presses, mouse movements, and more. Use <code>addEventListener</code> to attach an event handler function to an element.',
    concepts: [
      '<code>element.addEventListener("click", fn)</code> — Run fn on click',
      '<code>"mouseover"</code> — Fires when mouse enters an element',
      '<code>"keydown"</code> — Fires when a key is pressed',
      '<code>"input"</code> — Fires when an input value changes',
      '<code>event.target</code> — The element that triggered the event',
    ],
    challenge: 'Add a <code>"mouseover"</code> event to change the box colour when you hover it!',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Events</title>
<style>
  body { font-family: sans-serif; padding: 20px; }
  #btn { padding: 12px 24px; font-size: 16px; background: #4f46e5; color: white; border: none; border-radius: 8px; cursor: pointer; transition: transform .1s; }
  #btn:active { transform: scale(0.96); }
  #counter { font-size: 48px; font-weight: bold; color: #4f46e5; margin: 20px 0; }
  #textbox { padding: 10px; font-size: 16px; border: 2px solid #ccc; border-radius: 6px; margin-top: 16px; width: 250px; }
  #echo { margin-top: 8px; color: #475569; font-size: 15px; }
</style>
</head>
<body>
  <p><strong>Click the button:</strong></p>
  <div id="counter">0</div>
  <button id="btn">Click me!</button>
  <p style="margin-top:24px"><strong>Type something:</strong></p>
  <input type="text" id="textbox" placeholder="Start typing..." />
  <p id="echo">You typed: —</p>
  <script>
    let count = 0;
    const counter = document.getElementById("counter");
    const btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
      count++;
      counter.textContent = count;
      if (count >= 10) counter.style.color = "#ec4899";
    });
    const textbox = document.getElementById("textbox");
    const echo = document.getElementById("echo");
    textbox.addEventListener("input", (event) => {
      echo.textContent = "You typed: " + event.target.value;
    });
  <\/script>
</body>
</html>`,
  },
];

// ─── State ────────────────────────────────────────────────────────
let currentId = null;
const done = new Set(JSON.parse(localStorage.getItem('wdb-done') || '[]'));

// ─── Build sidebar ────────────────────────────────────────────────
function buildSidebar() {
  const sidebar = document.getElementById('sidebar');
  const sections = {};
  LESSONS.forEach(l => {
    if (!sections[l.section]) sections[l.section] = [];
    sections[l.section].push(l);
  });
  let html = '';
  for (const [sec, lessons] of Object.entries(sections)) {
    const tagClass = { HTML: 'tag-html', CSS: 'tag-css', JavaScript: 'tag-js' }[sec];
    html += `<div class="nav-section">
      <div class="nav-section-label">${sec}</div>`;
    lessons.forEach(l => {
      const isDone = done.has(l.id);
      html += `<div class="nav-item${isDone ? ' done' : ''}" data-id="${l.id}" onclick="loadLesson('${l.id}')">
        <span class="dot"></span>
        <span>${l.title}</span>
        <span class="tag ${tagClass}">${sec.slice(0,2).toUpperCase()}</span>
      </div>`;
    });
    html += `</div>`;
  }
  sidebar.innerHTML = html;
}

// ─── Load lesson ──────────────────────────────────────────────────
function loadLesson(id) {
  currentId = id;
  const l = LESSONS.find(x => x.id === id);
  if (!l) return;

  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const navEl = document.querySelector(`.nav-item[data-id="${id}"]`);
  if (navEl) navEl.classList.add('active');

  const main = document.getElementById('main');
  main.innerHTML = `
    <div class="lesson-pane">
      <div class="explanation">
        <div class="lesson-category ${l.catClass}">${l.cat}</div>
        <div class="lesson-title">${l.title}</div>
        <div class="lesson-desc">${l.desc}</div>
        <div class="concept-box">
          <h4>Key Concepts</h4>
          <ul>${l.concepts.map(c => `<li>${c}</li>`).join('')}</ul>
        </div>
        <div class="challenge-label">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          Your Challenge
        </div>
        <div class="challenge-text">${l.challenge}</div>
        <button class="mark-done-btn" onclick="markDone()">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          Mark as Done
        </button>
      </div>
      <div class="editor-preview">
        <div class="pane-header">
          <div class="dot-row"><span class="d1"></span><span class="d2"></span><span class="d3"></span></div>
          &nbsp;editor.html
        </div>
        <div class="editor-area">
          <textarea id="code-editor" spellcheck="false">${escHtml(l.code)}</textarea>
        </div>
        <div class="action-bar">
          <button class="btn btn-run" onclick="runCode()">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Run
          </button>
          <button class="btn btn-reset" onclick="resetCode()">Reset</button>
          <span class="run-hint">Ctrl + Enter</span>
        </div>
        <div class="preview-area">
          <div class="preview-overlay" id="preview-hint">▶ Press Run to see preview</div>
          <iframe id="preview-frame" sandbox="allow-scripts"></iframe>
        </div>
      </div>
    </div>
  `;

  document.getElementById('code-editor').addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); runCode(); }
    if (e.key === 'Tab') { e.preventDefault(); insertTab(e.target); }
  });

  runCode();
}

function insertTab(ta) {
  const s = ta.selectionStart, e = ta.selectionEnd;
  ta.value = ta.value.slice(0, s) + '  ' + ta.value.slice(e);
  ta.selectionStart = ta.selectionEnd = s + 2;
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function runCode() {
  const editor = document.getElementById('code-editor');
  const frame = document.getElementById('preview-frame');
  const hint = document.getElementById('preview-hint');
  if (!editor || !frame) return;
  if (hint) hint.style.display = 'none';
  frame.srcdoc = editor.value;
}

function resetCode() {
  const l = LESSONS.find(x => x.id === currentId);
  if (!l) return;
  document.getElementById('code-editor').value = l.code;
  runCode();
}

function markDone() {
  if (!currentId) return;
  done.add(currentId);
  localStorage.setItem('wdb-done', JSON.stringify([...done]));
  const navEl = document.querySelector(`.nav-item[data-id="${currentId}"]`);
  if (navEl) { navEl.classList.add('done'); navEl.classList.remove('active'); }
  updateProgress();

  const btn = document.querySelector('.mark-done-btn');
  if (btn) {
    btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Completed! ✨`;
    btn.style.background = 'color-mix(in srgb, #4ade80 20%, transparent)';
    btn.style.borderColor = '#4ade80';
    btn.disabled = true;
  }

  const idx = LESSONS.findIndex(x => x.id === currentId);
  if (idx < LESSONS.length - 1) {
    setTimeout(() => loadLesson(LESSONS[idx + 1].id), 800);
  }
}

function updateProgress() {
  const pct = Math.round((done.size / LESSONS.length) * 100);
  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('progress-pct').textContent = pct + '%';
}

// ─── Init ─────────────────────────────────────────────────────────
buildSidebar();
updateProgress();
done.forEach(id => {
  const el = document.querySelector(`.nav-item[data-id="${id}"]`);
  if (el) el.classList.add('done');
});
