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
  } from "svelte-toolkit";

  $: exampleCode = `
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
} from "svelte-toolkit";

<ArrowUp />
<ArrowDown />
<ArrowLeft />
<ArrowRight />
<ChevronUp />
<ChevronDown />
<ChevronLeft />
<ChevronRight />
<Bars />
<Cross />
<Check />`.trim();
</script>

<svelte:head>
  <title>Icons | Svelte Toolkit</title>
</svelte:head>

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
    <pre>{exampleCode}</pre>
  </div>
</div>
