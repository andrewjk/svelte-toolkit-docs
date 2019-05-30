<script>
  import {
    ArrowUp,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ChevronUp,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Bars,
    Cross,
    Check
  } from "../../../../svelte-toolkit/main.js";

  function exampleCode() {
    return (
      "<ArrowUp />\n" +
      "<ArrowDown />\n" +
      "<ArrowLeft />\n" +
      "<ArrowRight />\n" +
      "<ChevronUp />\n" +
      "<ChevronDown />\n" +
      "<ChevronLeft />\n" +
      "<ChevronRight />\n" +
      "<Bars />\n" +
      "<Cross />"
    );
  }
</script>

<div class="container">
  <h2>Icons</h2>
  <p>
    Some basic SVG icons made while I figure out how to incorporate FontAwesome
    and other icon sets.
  </p>

  <h3>Demo</h3>
  <div class="block">
    <h4>Arrows</h4>
    <div class="block">
      <ArrowUp />
      <ArrowDown />
      <ArrowLeft />
      <ArrowRight />
    </div>
    <h4>Chevrons</h4>
    <div class="block">
      <ChevronUp />
      <ChevronDown />
      <ChevronLeft />
      <ChevronRight />
    </div>
    <h4>Misc</h4>
    <div class="block">
      <Bars />
      <Cross />
      <Check />
    </div>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>{exampleCode()}</pre>
  </div>
</div>
