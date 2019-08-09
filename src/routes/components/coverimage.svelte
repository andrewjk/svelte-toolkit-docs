<script>
  import { CoverImage } from "svelte-toolkit";

  let src = "/images/image1.jpg";
  let position = "";
  let repeat = "";
  let size = "";
  let height = "100px";
  let width = "";
  let alt = "A kangaroo";

  $: exampleCode = `
import { CoverImage } from "svelte-toolkit";

<CoverImage src="${src}" position="${position}" repeat="${repeat}" size="${size}" height="${height}" width="${width}" alt="${alt}" />`.trim();
</script>

<svelte:head>
  <title>CoverImage | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Cover Image</h1>
  <p>
    A div with a background-image, which allows you to do some things you can't
    do with a simple img.
  </p>

  <h2>Demo</h2>
  <div class="block">
    <CoverImage {src} {position} {repeat} {size} {height} {width} {alt} />
  </div>

  <h2>Properties</h2>
  <div class="block">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>src</td>
          <td />
          <td>The image source as a URL</td>
          <td>
            <input type="text" bind:value={src} />
          </td>
        </tr>
        <tr>
          <td>position</td>
          <td>50% 50%</td>
          <td>Overrides the background-position style</td>
          <td>
            <input type="text" bind:value={position} />
          </td>
        </tr>
        <tr>
          <td>repeat</td>
          <td>no-repeat</td>
          <td>Overrides the background-repeat style</td>
          <td>
            <input type="text" bind:value={repeat} />
          </td>
        </tr>
        <tr>
          <td>size</td>
          <td>cover</td>
          <td>Overrides the background-size style</td>
          <td>
            <input type="text" bind:value={size} />
          </td>
        </tr>
        <tr>
          <td>height</td>
          <td>0</td>
          <td>
            You MUST provide a height for your image, either via this property
            or by CSS styling
          </td>
          <td>
            <input type="text" bind:value={height} />
          </td>
        </tr>
        <tr>
          <td>width</td>
          <td>100%</td>
          <td>
            You can also provide a width for your image, either via this
            property or by CSS styling
          </td>
          <td>
            <input type="text" bind:value={width} />
          </td>
        </tr>
        <tr>
          <td>alt</td>
          <td />
          <td>Alternative text used to describe this image to a screen-reader</td>
          <td>
            <input type="text" bind:value={alt} />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
