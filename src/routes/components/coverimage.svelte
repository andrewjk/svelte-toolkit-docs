<script>
  import {
    CoverImage,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Default</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Change</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>src</TableCell>
          <td />
          <TableCell>The image source as a URL</TableCell>
          <TableCell>
            <input type="text" bind:value={src} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>position</TableCell>
          <TableCell>50% 50%</TableCell>
          <TableCell>Overrides the background-position style</TableCell>
          <TableCell>
            <input type="text" bind:value={position} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>repeat</TableCell>
          <TableCell>no-repeat</TableCell>
          <TableCell>Overrides the background-repeat style</TableCell>
          <TableCell>
            <input type="text" bind:value={repeat} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>size</TableCell>
          <TableCell>cover</TableCell>
          <TableCell>Overrides the background-size style</TableCell>
          <TableCell>
            <input type="text" bind:value={size} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>height</TableCell>
          <TableCell>0</TableCell>
          <TableCell>
            You MUST provide a height for your image, either via this property
            or by CSS styling
          </TableCell>
          <TableCell>
            <input type="text" bind:value={height} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>width</TableCell>
          <TableCell>100%</TableCell>
          <TableCell>
            You can also provide a width for your image, either via this
            property or by CSS styling
          </TableCell>
          <TableCell>
            <input type="text" bind:value={width} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>alt</TableCell>
          <td />
          <TableCell>Alternative text used to describe this image to a screen-reader</TableCell>
          <TableCell>
            <input type="text" bind:value={alt} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <Panel>
      <pre>{exampleCode}</pre>
    </Panel>
  </div>
</div>
