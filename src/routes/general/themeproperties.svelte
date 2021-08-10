<script>
  import {
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit"
</script>

<style>
  .color-preview {
    border: 1px solid #d2d2d2;
    border-radius: 2px;
    display: inline-block;
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 4px;
  }
</style>

<svelte:head>
  <title>Theme Properties | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Theme Properties</h1>
  <p>
    Note: these properties are likely to change often while we pin down which
    ones are required for theming.
  </p>

  <div class="block">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Default</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>--element-margin</TableCell>
          <TableCell>1.5rem</TableCell>
          <TableCell>The margin between elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--element-padding</TableCell>
          <TableCell>2rem</TableCell>
          <TableCell>The padding within elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--border-radius</TableCell>
          <TableCell>2px</TableCell>
          <TableCell>The border radius.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--border-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #d2d2d2" />
            #d2d2d2
          </TableCell>
          <TableCell>The border color.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--light-border-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #aaaaaa" />
            #aaaaaa
          </TableCell>
          <TableCell>The light border color.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--icon-size</TableCell>
          <TableCell>1.5rem</TableCell>
          <TableCell>The size of icons.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--font-size</TableCell>
          <TableCell>1.4rem</TableCell>
          <TableCell>The base font size.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--font-size-small</TableCell>
          <TableCell>1.1rem</TableCell>
          <TableCell>The small font size.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--font-size-large</TableCell>
          <TableCell>1.7rem</TableCell>
          <TableCell>The large font size.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--font-size-title</TableCell>
          <TableCell>1.6rem</TableCell>
          <TableCell>
            The font size for titles (e.g. in TabGroup and Accordion headers).
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--line-height</TableCell>
          <TableCell>1.4</TableCell>
          <TableCell>The base line height.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--body-back-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </TableCell>
          <TableCell>The background color of the body.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--body-text-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #222222" />
            #222222
          </TableCell>
          <TableCell>The text color of the body.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--light-back-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #fafafa" />
            #fafafa
          </TableCell>
          <TableCell>A light back color.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--middle-back-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #e5e5e5" />
            #e5e5e5
          </TableCell>
          <TableCell>A middle back color.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--dark-back-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #888888" />
            #888888
          </TableCell>
          <TableCell>A dark back color.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--link-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #0265b7" />
            #0265b7
          </TableCell>
          <TableCell>The color of links.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--link-hover-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #0265b7" />
            #0265b7
          </TableCell>
          <TableCell>The hover color for links.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--button-back-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </TableCell>
          <TableCell>The background color of buttons used in components.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--button-text-color</TableCell>
          <TableCell>
            <span
              class="color-preview"
              style="background-color: rgba(0, 0, 0, 0.7)" />
            rgba(0, 0, 0, 0.7)
          </TableCell>
          <TableCell>The text color of buttons used in components.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--button-hover-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #cccccc" />
            #cccccc
          </TableCell>
          <TableCell>The hover color for buttons used in components.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--list-back-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </TableCell>
          <TableCell>The background color of drop-down lists.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--list-text-color</TableCell>
          <TableCell>
            <span
              class="color-preview"
              style="background-color: rgba(0, 0, 0, 0.7)" />
            rgba(0, 0, 0, 0.7)
          </TableCell>
          <TableCell>The text color of drop-down lists.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--select-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #3396ff" />
            #3396ff
          </TableCell>
          <TableCell>The select color of drop-down lists and buttons.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--select-text-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </TableCell>
          <TableCell>The select text color of drop-down lists and buttons.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--focus-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #8fc5ff" />
            #8fc5ff
          </TableCell>
          <TableCell>The color of focused inputs.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--active-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #ffa500" />
            #ffa500
          </TableCell>
          <TableCell>
            The color of active sections (e.g. in TabGroups and the NavBar).
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--mark-back-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #ffff00" />
            #ffff00
          </TableCell>
          <TableCell>The background color of highlight marks.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--mark-text-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #222222" />
            #222222
          </TableCell>
          <TableCell>The text color of highlight marks.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--primary-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #ff0066" />
            #ff0066
          </TableCell>
          <TableCell>The primary color, which you can change to your brand color.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--primary-text-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </TableCell>
          <TableCell>The text color of primary elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--primary-hover-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #cc0052" />
            #cc0052
          </TableCell>
          <TableCell>The hover color for primary elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--light-primary-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #fff2f7" />
            #fff2f7
          </TableCell>
          <TableCell>The color of light primary elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--light-primary-text-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #c70050" />
            #c70050
          </TableCell>
          <TableCell>The text color of light primary elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--light-primary-border-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #ff0066" />
            #ff0066
          </TableCell>
          <TableCell>The border color of light primary elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--info-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #4d90fe" />
            #4d90fe
          </TableCell>
          <TableCell>The info color.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--info-text-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </TableCell>
          <TableCell>The text color of info elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--info-hover-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #0b67fe" />
            #0b67fe
          </TableCell>
          <TableCell>The hover color for info elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--light-info-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #f6f9ff" />
            #f6f9ff
          </TableCell>
          <TableCell>The color of light info elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--light-info-text-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #0563fe" />
            #0563fe
          </TableCell>
          <TableCell>The text color of light info elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--light-info-border-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #4d90fe" />
            #4d90fe
          </TableCell>
          <TableCell>The border color of light info elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--success-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #00a852" />
            #00a852
          </TableCell>
          <TableCell>The success color.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--success-text-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </TableCell>
          <TableCell>The text color of success elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--success-hover-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #008642" />
            #008642
          </TableCell>
          <TableCell>The hover color for success elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--light-success-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #eefff6" />
            #eefff6
          </TableCell>
          <TableCell>The color of light success elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--light-success-text-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #008340" />
            #008340
          </TableCell>
          <TableCell>The text color of light success elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--light-success-border-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #00a852" />
            #00a852
          </TableCell>
          <TableCell>The border color of light success elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--warning-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #f3c42e" />
            #f3c42e
          </TableCell>
          <TableCell>The warning color.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--warning-text-color</TableCell>
          <TableCell>
            <span
              class="color-preview"
              style="background-color: rgba(0, 0, 0, 0.7)" />
            rgba(0, 0, 0, 0.7)
          </TableCell>
          <TableCell>The text color of warning elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--warning-hover-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #dba90d" />
            #dba90d
          </TableCell>
          <TableCell>The hover color for warning elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--light-warning-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #fefcf5" />
            #fefcf5
          </TableCell>
          <TableCell>The color of light warning elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--light-warning-text-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #b28a0a" />
            #b28a0a
          </TableCell>
          <TableCell>The text color of light warning elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--light-warning-border-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #f3c42e" />
            #f3c42e
          </TableCell>
          <TableCell>The border color of light warning elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--danger-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #ee2e24" />
            #ee2e24
          </TableCell>
          <TableCell>The danger color.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--danger-text-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </TableCell>
          <TableCell>The text color of danger elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--danger-hover-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #cb1910" />
            #cb1910
          </TableCell>
          <TableCell>The hover color for danger elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--light-danger-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #fef5f4" />
            #fef5f4
          </TableCell>
          <TableCell>The color of light danger elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--light-danger-text-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #c6180f" />
            #c6180f
          </TableCell>
          <TableCell>The text color of light danger elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--light-danger-border-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #ee2e24" />
            #ee2e24
          </TableCell>
          <TableCell>The border color of light danger elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--confirm-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #3396ff" />
            #3396ff
          </TableCell>
          <TableCell>The confirm color.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--confirm-text-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </TableCell>
          <TableCell>The text color of confirm elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--confirm-hover-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #0077f5" />
            #0077f5
          </TableCell>
          <TableCell>The hover color for confirm elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--cancel-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #949494" />
            #949494
          </TableCell>
          <TableCell>The cancel color.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--cancel-text-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </TableCell>
          <TableCell>The text color of cancel elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--cancel-hover-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #767676" />
            #767676
          </TableCell>
          <TableCell>The hover color for cancel elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--disabled-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #f2f2f2" />
            #f2f2f2
          </TableCell>
          <TableCell>The color of disabled elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--disabled-text-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #c2c2c2" />
            #c2c2c2
          </TableCell>
          <TableCell>The text color of disabled elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--header-back-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #fafafa" />
            #fafafa
          </TableCell>
          <TableCell>The background color of the header.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--header-text-color</TableCell>
          <TableCell>
            <span
              class="color-preview"
              style="background-color: rgba(0, 0, 0, 0.7)" />
            rgba(0, 0, 0, 0.7)
          </TableCell>
          <TableCell>The text color of the header.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--header-line-height</TableCell>
          <TableCell>4rem</TableCell>
          <TableCell>The line height of the header.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--footer-back-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #fafafa" />
            #fafafa
          </TableCell>
          <TableCell>The background color of the footer.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--footer-text-color</TableCell>
          <TableCell>
            <span
              class="color-preview"
              style="background-color: rgba(0, 0, 0, 0.7)" />
            rgba(0, 0, 0, 0.7)
          </TableCell>
          <TableCell>The text color of the footer.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--footer-line-height</TableCell>
          <TableCell>4rem</TableCell>
          <TableCell>The line height of the footer.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--nav-bar-item-back-color</TableCell>
          <TableCell>
            <span
              class="color-preview"
              style="background-color: rgba(0, 0, 0, 0)" />
            transparent
          </TableCell>
          <TableCell>The background color of a nav bar item.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--nav-bar-item-text-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #222222" />
            #222222
          </TableCell>
          <TableCell>The text color of a nav bar item.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--nav-bar-item-hover-back-color</TableCell>
          <TableCell>
            <span
              class="color-preview"
              style="background-color: rgba(0, 0, 0, 0.1)" />
            rgba(0, 0, 0, 0.1)
          </TableCell>
          <TableCell>The hover color for a nav bar item.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--nav-bar-item-hover-text-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #222222" />
            #222222
          </TableCell>
          <TableCell>The hover text color for a nav bar item.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--input-back-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </TableCell>
          <TableCell>The background color of inputs.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--input-text-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #000000" />
            #000000
          </TableCell>
          <TableCell>The text color of inputs.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--input-height</TableCell>
          <TableCell>3.2rem</TableCell>
          <TableCell>The height of inputs.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--input-width</TableCell>
          <TableCell>32rem</TableCell>
          <TableCell>The width of inputs.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--label-text-color</TableCell>
          <TableCell>
            <span class="color-preview" style="background-color: #777777" />
            #777777
          </TableCell>
          <TableCell>The text color of labels.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>--label-width</TableCell>
          <TableCell>16rem</TableCell>
          <TableCell>The width of labels.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</div>
