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
    Check,
    Plus,
    Minus,
    Panel,
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
  Check,
  Plus,
  Minus
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
<Check />
<Plus />
<Minus />`.trim();
</script>

<svelte:head>
  <title>Icons | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Icons</h1>
  <p>
    Some basic SVG icons made while I figure out how to incorporate FontAwesome
    and other icon sets.
  </p>

  <h2>Demo</h2>
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
      <Plus />
      <Minus />
    </div>
  </div>

  <h2>Code</h2>
  <div class="block">
    <Panel>
      <pre>{exampleCode}</pre>
    </Panel>
  </div>
</div>
