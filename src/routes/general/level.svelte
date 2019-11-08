<style>
  .outer-panel {
    background-color: #fafafa;
    border: 1px dashed #d2d2d2;
    padding: 20px;
  }

  .title {
    font-size: 3rem;
  }
</style>

<svelte:head>
  <title>Level | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Level</h1>

  <p>A container for laying out items horizontally.</p>

  <p>
    Add items with the class `level-item` to a parent item with the class
    `level` to ensure all items are the same width and vertically centered:
  </p>
  <div class="block">
    <div class="level outer-panel">
      <div class="level-item panel">An item.</div>
      <div class="level-item panel">
        <div class="title">Title</div>
      </div>
      <div class="level-item panel">Another item.</div>
    </div>
  </div>

  <p>
    Add items with the class `level-item start` to align them to the start of
    the level, or `level-item end` to align them with the end of the level:
  </p>
  <div class="block">
    <div class="level outer-panel">
      <div class="level-item start panel">An item at the start.</div>
      <div class="level-item end panel">An item at the end.</div>
    </div>
  </div>

  <p>
    Level items placed between start and end items will expand to fill the available space:
  </p>
  <div class="block">
    <div class="level outer-panel">
      <div class="level-item start panel">An item at the start.</div>
      <div class="level-item panel">1</div>
      <div class="level-item panel"><div class="title">2</div></div>
      <div class="level-item panel">3</div>
      <div class="level-item end panel">An item at the end.</div>
    </div>
  </div>
</div>
