<script>
  import {
    NavBar,
    NavLogo,
    NavMenu,
    NavMenuItem,
    NavMenuDropDown,
    DropDownMenuItem,
    DropDownMenuDivider,
    Button
  } from "svelte-toolkit";

  function exampleCode () {
    return '' +
    '<NavBar>\n' +
    '  <NavLogo src="logo-192.png" alt="Svelte logo" />\n' +
    '  <NavMenu>\n' +
    '    <NavMenuItem>\n' +
    '      <a href="components/accordion">Accordion</a>\n' +
    '    </NavMenuItem>\n' +
    '    <NavMenuItem>\n' +
    '      <a href="components/alert">Alert</a>\n' +
    '    </NavMenuItem>\n' +
    '    <NavMenuItem>\n' +
    '      <Button>Button</Button>\n' +
    '    </NavMenuItem>\n' +
    '  </NavMenu>\n' +
    '  <NavMenu position="right">\n' +
    '    <NavMenuItem>\n' +
    '      <a href="components/alert">Badge</a>\n' +
    '    </NavMenuItem>\n' +
    '    <NavMenuDropDown>\n' +
    '      Others...\n' +
    '      <div slot="menu">\n' +
    '        <DropDownMenuItem>\n' +
    '          <a href="components/breadcrumb">Breadcrumb</a>\n' +
    '        </DropDownMenuItem>\n' +
    '        <DropDownMenuDivider />\n' +
    '        <DropDownMenuItem>\n' +
    '          <a href="components/calendar">Calendar</a>\n' +
    '        </DropDownMenuItem>\n' +
    '        <DropDownMenuItem>\n' +
    '          <a href="components/dialog">Dialog</a>\n' +
    '        </DropDownMenuItem>\n' +
    '      </div>\n' +
    '    </NavMenuDropDown>\n' +
    '  </NavMenu>\n' +
    '</NavBar>'.trim()
  }
</script>

<style>
  .nav-bar-demo {
    border: 1px dashed #d2d2d2;
  }
</style>

<svelte:head>
  <title>Navbar | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Navbar</h1>
  <p>A top-level navigation bar.</p>

  <h3>Demo</h3>
  <div class="block nav-bar-demo">
    <NavBar>
      <NavLogo src="logo-192.png" alt="Svelte logo" height="48" />
      <NavMenu>
        <NavMenuItem>
          <a href="components/accordion">Accordion</a>
        </NavMenuItem>
        <NavMenuItem>
          <a href="components/alert">Alert</a>
        </NavMenuItem>
        <NavMenuItem>
          <Button>Button</Button>
        </NavMenuItem>
      </NavMenu>
      <NavMenu position="right">
        <NavMenuItem>
          <a href="components/alert">Badge</a>
        </NavMenuItem>
        <NavMenuDropDown>
          Others...
          <div slot="menu">
            <DropDownMenuItem>
              <a href="components/breadcrumb">Breadcrumb</a>
            </DropDownMenuItem>
            <DropDownMenuDivider />
            <DropDownMenuItem>
              <a href="components/calendar">Calendar</a>
            </DropDownMenuItem>
            <DropDownMenuItem>
              <a href="components/dialog">Dialog</a>
            </DropDownMenuItem>
          </div>
        </NavMenuDropDown>
      </NavMenu>
    </NavBar>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre style=>
      {exampleCode()}
    </pre>
  </div>
</div>
