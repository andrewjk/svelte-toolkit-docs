<script>
  import { Level, LevelItem } from "svelte-toolkit";
</script>

<svelte:head>
  <title>Level | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Level</h1>

  <p>A container for laying out items horizontally.</p>

  <p>
    Add LevelItems to a Level to ensure all items are the same width and
    vertically centered:
  </p>
  <div class="block">
    <div class="outer-panel">
      <Level>
        <LevelItem>
          <div class="inner-panel">An item.</div>
        </LevelItem>
        <LevelItem>
          <div class="inner-panel">
            <div class="title">Title</div>
          </div>
        </LevelItem>
        <LevelItem>
          <div class="inner-panel">Another item.</div>
        </LevelItem>
      </Level>
    </div>
  </div>

  <p>
    Add LevelItems with <code>position="start"</code> to align them to the start
    of the level, or <code>position="end"</code> to align them with the end of the level:
  </p>
  <div class="block">
    <div class="outer-panel">
      <Level>
        <LevelItem position="start">
          <div class="inner-panel">An item at the start.</div>
        </LevelItem>
        <LevelItem position="end">
          <div class="inner-panel">An item at the end.</div>
        </LevelItem>
      </Level>
    </div>
  </div>

  <p>
    LevelItems placed between start and end items will expand to fill the
    available space:
  </p>
  <div class="block">
    <div class="outer-panel">
      <Level>
        <LevelItem position="start">
          <div class="inner-panel">An item at the start.</div>
        </LevelItem>
        <LevelItem>
          <div class="inner-panel">1</div>
        </LevelItem>
        <LevelItem>
          <div class="inner-panel">
            <div class="title">2</div>
          </div>
        </LevelItem>
        <LevelItem>
          <div class="inner-panel">3</div>
        </LevelItem>
        <LevelItem position="end">
          <div class="inner-panel">An item at the end.</div>
        </LevelItem>
      </Level>
    </div>
  </div>

  <p>
    Levels can have a <code>spaced</code> attribute to put some space between
    the items, and a <code>collapse</code> attribute to display items vertically
    on small screens:
  </p>
  <div class="block">
    <div class="outer-panel">
      <Level spaced collapse>
        <LevelItem>
          <div class="inner-panel">1</div>
        </LevelItem>
        <LevelItem>
          <div class="inner-panel">2</div>
        </LevelItem>
        <LevelItem>
          <div class="inner-panel">3</div>
        </LevelItem>
      </Level>
    </div>
  </div>
</div>
