<script>
  import {
    NavBar,
    NavLogo,
    NavMenu,
    NavMenuItem,
    NavMenuLink,
    NavMenuDropDown,
    DropDownMenu,
    DropDownMenuLink,
    DropDownMenuDivider,
    Button
  } from "svelte-toolkit";

  $: exampleCode = `
import {
  NavBar,
  NavLogo,
  NavMenu,
  NavMenuLink,
  NavMenuItem,
  NavMenuDropDown,
  DropDownMenuItem,
  DropDownMenuDivider
} from "svelte-toolkit";

<NavBar>
  <NavLogo src="logo-192.png" alt="Svelte logo" />
  <NavMenu>
    <NavMenuLink href="components/accordion">Accordion</NavMenuLink>
    <NavMenuLink href="components/alert">Alert</NavMenuLink>
    <NavMenuItem>
      <Button>Button</Button>
    </NavMenuItem>
  </NavMenu>
  <NavMenu position="end">
    <NavMenuLink href="components/badge">Badge</NavMenuLink>
    <NavMenuDropDown>
      Others...
      <div slot="menu">
        <DropDownMenuLink href="components/breadcrumb">
          Breadcrumb
        </DropDownMenuLink>
        <DropDownMenuDivider />
        <DropDownMenuLink href="components/calendar">
          Calendar
        </DropDownMenuLink>
        <DropDownMenuLink href="components/dialog">
          Dialog
        </DropDownMenuLink>
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
      <NavLogo src="logo-192.png" alt="Svelte logo" height="48" />
      <NavMenu>
        <NavMenuLink href="components/accordion">Accordion</NavMenuLink>
        <NavMenuLink href="components/alert">Alert</NavMenuLink>
        <NavMenuItem>
          <Button>Button</Button>
        </NavMenuItem>
      </NavMenu>
      <NavMenu position="end">
        <NavMenuLink href="components/badge">Badge</NavMenuLink>
        <NavMenuDropDown>
          Others...
          <div slot="menu">
            <DropDownMenuLink href="components/breadcrumb">
              Breadcrumb
            </DropDownMenuLink>
            <DropDownMenuDivider />
            <DropDownMenuLink href="components/calendar">
              Calendar
            </DropDownMenuLink>
            <DropDownMenuLink href="components/dialog">Dialog</DropDownMenuLink>
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
