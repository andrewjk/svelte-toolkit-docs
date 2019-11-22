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
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>--element-margin</td>
          <td>1.5rem</td>
          <td>The margin between elements.</td>
        </tr>
        <tr>
          <td>--element-padding</td>
          <td>2rem</td>
          <td>The padding within elements.</td>
        </tr>
        <tr>
          <td>--border-radius</td>
          <td>2px</td>
          <td>The border radius.</td>
        </tr>
        <tr>
          <td>--border-color</td>
          <td>
            <span class="color-preview" style="background-color: #d2d2d2" />
            #d2d2d2
          </td>
          <td>The border color.</td>
        </tr>
        <tr>
          <td>--light-border-color</td>
          <td>
            <span class="color-preview" style="background-color: #aaaaaa" />
            #aaaaaa
          </td>
          <td>The light border color.</td>
        </tr>
        <tr>
          <td>--icon-size</td>
          <td>1.5rem</td>
          <td>The size of icons.</td>
        </tr>
        <tr>
          <td>--font-size</td>
          <td>1.4rem</td>
          <td>The base font size.</td>
        </tr>
        <tr>
          <td>--font-size-small</td>
          <td>1.1rem</td>
          <td>The small font size.</td>
        </tr>
        <tr>
          <td>--font-size-large</td>
          <td>1.7rem</td>
          <td>The large font size.</td>
        </tr>
        <tr>
          <td>--font-size-title</td>
          <td>1.6rem</td>
          <td>
            The font size for titles (e.g. in TabGroup and Accordion headers).
          </td>
        </tr>
        <tr>
          <td>--line-height</td>
          <td>1.4</td>
          <td>The base line height.</td>
        </tr>
        <tr>
          <td>--body-back-color</td>
          <td>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </td>
          <td>The background color of the body.</td>
        </tr>
        <tr>
          <td>--body-text-color</td>
          <td>
            <span class="color-preview" style="background-color: #222222" />
            #222222
          </td>
          <td>The text color of the body.</td>
        </tr>
        <tr>
          <td>--light-back-color</td>
          <td>
            <span class="color-preview" style="background-color: #fafafa" />
            #fafafa
          </td>
          <td>A light back color.</td>
        </tr>
        <tr>
          <td>--middle-back-color</td>
          <td>
            <span class="color-preview" style="background-color: #e5e5e5" />
            #e5e5e5
          </td>
          <td>A middle back color.</td>
        </tr>
        <tr>
          <td>--dark-back-color</td>
          <td>
            <span class="color-preview" style="background-color: #888888" />
            #888888
          </td>
          <td>A dark back color.</td>
        </tr>
        <tr>
          <td>--link-color</td>
          <td>
            <span class="color-preview" style="background-color: #0265b7" />
            #0265b7
          </td>
          <td>The color of links.</td>
        </tr>
        <tr>
          <td>--link-hover-color</td>
          <td>
            <span class="color-preview" style="background-color: #0265b7" />
            #0265b7
          </td>
          <td>The hover color for links.</td>
        </tr>
        <tr>
          <td>--button-back-color</td>
          <td>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </td>
          <td>The background color of buttons used in components.</td>
        </tr>
        <tr>
          <td>--button-text-color</td>
          <td>
            <span
              class="color-preview"
              style="background-color: rgba(0, 0, 0, 0.7)" />
            rgba(0, 0, 0, 0.7)
          </td>
          <td>The text color of buttons used in components.</td>
        </tr>
        <tr>
          <td>--button-hover-color</td>
          <td>
            <span class="color-preview" style="background-color: #cccccc" />
            #cccccc
          </td>
          <td>The hover color for buttons used in components.</td>
        </tr>
        <tr>
          <td>--list-back-color</td>
          <td>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </td>
          <td>The background color of drop-down lists.</td>
        </tr>
        <tr>
          <td>--list-text-color</td>
          <td>
            <span
              class="color-preview"
              style="background-color: rgba(0, 0, 0, 0.7)" />
            rgba(0, 0, 0, 0.7)
          </td>
          <td>The text color of drop-down lists.</td>
        </tr>
        <tr>
          <td>--select-color</td>
          <td>
            <span class="color-preview" style="background-color: #3396ff" />
            #3396ff
          </td>
          <td>The select color of drop-down lists and buttons.</td>
        </tr>
        <tr>
          <td>--select-text-color</td>
          <td>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </td>
          <td>The select text color of drop-down lists and buttons.</td>
        </tr>
        <tr>
          <td>--focus-color</td>
          <td>
            <span class="color-preview" style="background-color: #8fc5ff" />
            #8fc5ff
          </td>
          <td>The color of focused inputs.</td>
        </tr>
        <tr>
          <td>--active-color</td>
          <td>
            <span class="color-preview" style="background-color: #ffa500" />
            #ffa500
          </td>
          <td>
            The color of active sections (e.g. in TabGroups and the NavBar).
          </td>
        </tr>
        <tr>
          <td>--mark-back-color</td>
          <td>
            <span class="color-preview" style="background-color: #ffff00" />
            #ffff00
          </td>
          <td>The background color of highlight marks.</td>
        </tr>
        <tr>
          <td>--mark-text-color</td>
          <td>
            <span class="color-preview" style="background-color: #222222" />
            #222222
          </td>
          <td>The text color of highlight marks.</td>
        </tr>
        <tr>
          <td>--primary-color</td>
          <td>
            <span class="color-preview" style="background-color: #ff0066" />
            #ff0066
          </td>
          <td>The primary color, which you can change to your brand color.</td>
        </tr>
        <tr>
          <td>--primary-text-color</td>
          <td>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </td>
          <td>The text color of primary elements.</td>
        </tr>
        <tr>
          <td>--primary-hover-color</td>
          <td>
            <span class="color-preview" style="background-color: #cc0052" />
            #cc0052
          </td>
          <td>The hover color for primary elements.</td>
        </tr>
        <tr>
          <td>--light-primary-color</td>
          <td>
            <span class="color-preview" style="background-color: #fff2f7" />
            #fff2f7
          </td>
          <td>The color of light primary elements.</td>
        </tr>
        <tr>
          <td>--light-primary-text-color</td>
          <td>
            <span class="color-preview" style="background-color: #c70050" />
            #c70050
          </td>
          <td>The text color of light primary elements.</td>
        </tr>
        <tr>
          <td>--light-primary-border-color</td>
          <td>
            <span class="color-preview" style="background-color: #ff0066" />
            #ff0066
          </td>
          <td>The border color of light primary elements.</td>
        </tr>
        <tr>
          <td>--info-color</td>
          <td>
            <span class="color-preview" style="background-color: #4d90fe" />
            #4d90fe
          </td>
          <td>The info color.</td>
        </tr>
        <tr>
          <td>--info-text-color</td>
          <td>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </td>
          <td>The text color of info elements.</td>
        </tr>
        <tr>
          <td>--info-hover-color</td>
          <td>
            <span class="color-preview" style="background-color: #0b67fe" />
            #0b67fe
          </td>
          <td>The hover color for info elements.</td>
        </tr>
        <tr>
          <td>--light-info-color</td>
          <td>
            <span class="color-preview" style="background-color: #f6f9ff" />
            #f6f9ff
          </td>
          <td>The color of light info elements.</td>
        </tr>
        <tr>
          <td>--light-info-text-color</td>
          <td>
            <span class="color-preview" style="background-color: #0563fe" />
            #0563fe
          </td>
          <td>The text color of light info elements.</td>
        </tr>
        <tr>
          <td>--light-info-border-color</td>
          <td>
            <span class="color-preview" style="background-color: #4d90fe" />
            #4d90fe
          </td>
          <td>The border color of light info elements.</td>
        </tr>
        <tr>
          <td>--success-color</td>
          <td>
            <span class="color-preview" style="background-color: #00a852" />
            #00a852
          </td>
          <td>The success color.</td>
        </tr>
        <tr>
          <td>--success-text-color</td>
          <td>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </td>
          <td>The text color of success elements.</td>
        </tr>
        <tr>
          <td>--success-hover-color</td>
          <td>
            <span class="color-preview" style="background-color: #008642" />
            #008642
          </td>
          <td>The hover color for success elements.</td>
        </tr>
        <tr>
          <td>--light-success-color</td>
          <td>
            <span class="color-preview" style="background-color: #eefff6" />
            #eefff6
          </td>
          <td>The color of light success elements.</td>
        </tr>
        <tr>
          <td>--light-success-text-color</td>
          <td>
            <span class="color-preview" style="background-color: #008340" />
            #008340
          </td>
          <td>The text color of light success elements.</td>
        </tr>
        <tr>
          <td>--light-success-border-color</td>
          <td>
            <span class="color-preview" style="background-color: #00a852" />
            #00a852
          </td>
          <td>The border color of light success elements.</td>
        </tr>
        <tr>
          <td>--warning-color</td>
          <td>
            <span class="color-preview" style="background-color: #f3c42e" />
            #f3c42e
          </td>
          <td>The warning color.</td>
        </tr>
        <tr>
          <td>--warning-text-color</td>
          <td>
            <span
              class="color-preview"
              style="background-color: rgba(0, 0, 0, 0.7)" />
            rgba(0, 0, 0, 0.7)
          </td>
          <td>The text color of warning elements.</td>
        </tr>
        <tr>
          <td>--warning-hover-color</td>
          <td>
            <span class="color-preview" style="background-color: #dba90d" />
            #dba90d
          </td>
          <td>The hover color for warning elements.</td>
        </tr>
        <tr>
          <td>--light-warning-color</td>
          <td>
            <span class="color-preview" style="background-color: #fefcf5" />
            #fefcf5
          </td>
          <td>The color of light warning elements.</td>
        </tr>
        <tr>
          <td>--light-warning-text-color</td>
          <td>
            <span class="color-preview" style="background-color: #b28a0a" />
            #b28a0a
          </td>
          <td>The text color of light warning elements.</td>
        </tr>
        <tr>
          <td>--light-warning-border-color</td>
          <td>
            <span class="color-preview" style="background-color: #f3c42e" />
            #f3c42e
          </td>
          <td>The border color of light warning elements.</td>
        </tr>
        <tr>
          <td>--danger-color</td>
          <td>
            <span class="color-preview" style="background-color: #ee2e24" />
            #ee2e24
          </td>
          <td>The danger color.</td>
        </tr>
        <tr>
          <td>--danger-text-color</td>
          <td>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </td>
          <td>The text color of danger elements.</td>
        </tr>
        <tr>
          <td>--danger-hover-color</td>
          <td>
            <span class="color-preview" style="background-color: #cb1910" />
            #cb1910
          </td>
          <td>The hover color for danger elements.</td>
        </tr>
        <tr>
          <td>--light-danger-color</td>
          <td>
            <span class="color-preview" style="background-color: #fef5f4" />
            #fef5f4
          </td>
          <td>The color of light danger elements.</td>
        </tr>
        <tr>
          <td>--light-danger-text-color</td>
          <td>
            <span class="color-preview" style="background-color: #c6180f" />
            #c6180f
          </td>
          <td>The text color of light danger elements.</td>
        </tr>
        <tr>
          <td>--light-danger-border-color</td>
          <td>
            <span class="color-preview" style="background-color: #ee2e24" />
            #ee2e24
          </td>
          <td>The border color of light danger elements.</td>
        </tr>
        <tr>
          <td>--confirm-color</td>
          <td>
            <span class="color-preview" style="background-color: #3396ff" />
            #3396ff
          </td>
          <td>The confirm color.</td>
        </tr>
        <tr>
          <td>--confirm-text-color</td>
          <td>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </td>
          <td>The text color of confirm elements.</td>
        </tr>
        <tr>
          <td>--confirm-hover-color</td>
          <td>
            <span class="color-preview" style="background-color: #0077f5" />
            #0077f5
          </td>
          <td>The hover color for confirm elements.</td>
        </tr>
        <tr>
          <td>--cancel-color</td>
          <td>
            <span class="color-preview" style="background-color: #949494" />
            #949494
          </td>
          <td>The cancel color.</td>
        </tr>
        <tr>
          <td>--cancel-text-color</td>
          <td>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </td>
          <td>The text color of cancel elements.</td>
        </tr>
        <tr>
          <td>--cancel-hover-color</td>
          <td>
            <span class="color-preview" style="background-color: #767676" />
            #767676
          </td>
          <td>The hover color for cancel elements.</td>
        </tr>
        <tr>
          <td>--disabled-color</td>
          <td>
            <span class="color-preview" style="background-color: #f2f2f2" />
            #f2f2f2
          </td>
          <td>The color of disabled elements.</td>
        </tr>
        <tr>
          <td>--disabled-text-color</td>
          <td>
            <span class="color-preview" style="background-color: #c2c2c2" />
            #c2c2c2
          </td>
          <td>The text color of disabled elements.</td>
        </tr>
        <tr>
          <td>--header-back-color</td>
          <td>
            <span class="color-preview" style="background-color: #fafafa" />
            #fafafa
          </td>
          <td>The background color of the header.</td>
        </tr>
        <tr>
          <td>--header-text-color</td>
          <td>
            <span
              class="color-preview"
              style="background-color: rgba(0, 0, 0, 0.7)" />
            rgba(0, 0, 0, 0.7)
          </td>
          <td>The text color of the header.</td>
        </tr>
        <tr>
          <td>--header-line-height</td>
          <td>4rem</td>
          <td>The line height of the header.</td>
        </tr>
        <tr>
          <td>--footer-back-color</td>
          <td>
            <span class="color-preview" style="background-color: #fafafa" />
            #fafafa
          </td>
          <td>The background color of the footer.</td>
        </tr>
        <tr>
          <td>--footer-text-color</td>
          <td>
            <span
              class="color-preview"
              style="background-color: rgba(0, 0, 0, 0.7)" />
            rgba(0, 0, 0, 0.7)
          </td>
          <td>The text color of the footer.</td>
        </tr>
        <tr>
          <td>--footer-line-height</td>
          <td>4rem</td>
          <td>The line height of the footer.</td>
        </tr>
        <tr>
          <td>--nav-bar-item-back-color</td>
          <td>
            <span
              class="color-preview"
              style="background-color: rgba(0, 0, 0, 0)" />
            transparent
          </td>
          <td>The background color of a nav bar item.</td>
        </tr>
        <tr>
          <td>--nav-bar-item-text-color</td>
          <td>
            <span class="color-preview" style="background-color: #222222" />
            #222222
          </td>
          <td>The text color of a nav bar item.</td>
        </tr>
        <tr>
          <td>--nav-bar-item-hover-back-color</td>
          <td>
            <span
              class="color-preview"
              style="background-color: rgba(0, 0, 0, 0.1)" />
            rgba(0, 0, 0, 0.1)
          </td>
          <td>The hover color for a nav bar item.</td>
        </tr>
        <tr>
          <td>--nav-bar-item-hover-text-color</td>
          <td>
            <span class="color-preview" style="background-color: #222222" />
            #222222
          </td>
          <td>The hover text color for a nav bar item.</td>
        </tr>
        <tr>
          <td>--input-back-color</td>
          <td>
            <span class="color-preview" style="background-color: #ffffff" />
            #ffffff
          </td>
          <td>The background color of inputs.</td>
        </tr>
        <tr>
          <td>--input-text-color</td>
          <td>
            <span class="color-preview" style="background-color: #000000" />
            #000000
          </td>
          <td>The text color of inputs.</td>
        </tr>
        <tr>
          <td>--input-height</td>
          <td>3.2rem</td>
          <td>The height of inputs.</td>
        </tr>
        <tr>
          <td>--input-width</td>
          <td>32rem</td>
          <td>The width of inputs.</td>
        </tr>
        <tr>
          <td>--label-text-color</td>
          <td>
            <span class="color-preview" style="background-color: #777777" />
            #777777
          </td>
          <td>The text color of labels.</td>
        </tr>
        <tr>
          <td>--label-width</td>
          <td>16rem</td>
          <td>The width of labels.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
