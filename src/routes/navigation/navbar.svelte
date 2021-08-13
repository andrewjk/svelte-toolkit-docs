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

  $: exampleCode = `
import {
  NavBar,
  NavLogo,
  NavMenu,
  NavMenuItem,
  NavMenuDropDown,
  DropDownMenuItem,
  DropDownMenuDivider
} from "svelte-toolkit";

<NavBar>
  <NavLogo src="/logo-192.png" alt="Svelte logo" />
  <NavMenu>
    <NavMenuItem>
      <a href="../components/accordion">Accordion</a>
    </NavMenuItem>
    <NavMenuItem>
      <a href="../components/alert">Alert</a>
    </NavMenuItem>
    <NavMenuItem>
      <Button>Button</Button>
    </NavMenuItem>
  </NavMenu>
  <NavMenu position="end">
    <NavMenuItem>
      <a href="../components/badge">Badge</a>
    </NavMenuItem>
    <NavMenuDropDown>
      Others...
      <div slot="menu">
        <DropDownMenuItem>
          <a href="../components/breadcrumb">Breadcrumb</a>
        </DropDownMenuItem>
        <DropDownMenuDivider />
        <DropDownMenuItem>
          <a href="../components/calendar">Calendar</a>
        </DropDownMenuItem>
        <DropDownMenuItem>
          <a href="../components/dialog">Dialog</a>
        </DropDownMenuItem>
      </div>
    </NavMenuDropDown>
  </NavMenu>
</NavBar>`.trim();
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

  <h2>Demo</h2>
  <div class="block nav-bar-demo">
    <NavBar>
      <NavLogo src="/logo-192.png" alt="Svelte logo" height="48" />
      <NavMenu>
        <NavMenuItem>
          <a href="../components/accordion">Accordion</a>
        </NavMenuItem>
        <NavMenuItem>
          <a href="../components/alert">Alert</a>
        </NavMenuItem>
        <NavMenuItem>
          <Button>Button</Button>
        </NavMenuItem>
      </NavMenu>
      <NavMenu position="end">
        <NavMenuItem>
          <a href="../components/badge">Badge</a>
        </NavMenuItem>
        <NavMenuDropDown>
          Others...
          <div slot="menu">
            <DropDownMenuItem>
              <a href="../components/breadcrumb">Breadcrumb</a>
            </DropDownMenuItem>
            <DropDownMenuDivider />
            <DropDownMenuItem>
              <a href="../components/calendar">Calendar</a>
            </DropDownMenuItem>
            <DropDownMenuItem>
              <a href="../components/dialog">Dialog</a>
            </DropDownMenuItem>
          </div>
        </NavMenuDropDown>
      </NavMenu>
    </NavBar>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre style="">{exampleCode}</pre>
  </div>
</div>
