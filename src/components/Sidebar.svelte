<script>
  import {
    Accordion,
    AccordionItem,
    SubNavMenu,
    SubNavMenuItem,
    SubNavMenuHeader
  } from "svelte-toolkit";
</script>

<style>
  a {
    display: block;
    width: 100%;
  }
</style>

<Accordion>
  <AccordionItem header="GENERAL">
    <SubNavMenu type="vertical">
      <SubNavMenuItem>
        <a href="general/installation">Installation</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="general/styles">Styles</a>
      </SubNavMenuItem>
    </SubNavMenu>
  </AccordionItem>
  <AccordionItem header="LAYOUT">
    <SubNavMenu type="vertical">
      <SubNavMenuItem>
        <a href="layout/page">Page</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="layout/container">Container</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="layout/grid">Grid</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="layout/level">Level</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="layout/panel">Panel</a>
      </SubNavMenuItem>
    </SubNavMenu>
  </AccordionItem>
  <AccordionItem header="COMPONENTS">
    <SubNavMenu type="vertical">
      <SubNavMenuItem>
        <a href="components/accordion">Accordion</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/alert">Alert</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/autocomplete">Auto Complete</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/badge">Badge</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/breadcrumb">Breadcrumb</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/button">Button</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/calendar">Calendar</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/card">Card</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/colorpicker">Color Picker</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/coverimage">Cover Image</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/datepicker">Date Picker</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/dropdown">Drop Down</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/imagebutton">Image Button</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/notification">Notification</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/offscreen">Off Screen</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/palette">Palette</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/progress">Progress</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/slider">Slider</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/tabgroup">Tab Group</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/table">Table</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/tag">Tag</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="components/taginput">Tag Input</a>
      </SubNavMenuItem>
    </SubNavMenu>
  </AccordionItem>
  <AccordionItem header="NAVIGATION">
    <SubNavMenu type="vertical">
      <SubNavMenuItem>
        <a href="nav/navbar">Nav Bar</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="nav/subnavmenu">Sub Nav Menu</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="nav/switcher">Switcher</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="nav/pagination">Pagination</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="nav/dotnav">Dot Navigation</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="nav/storynav">Story Navigation</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="nav/wizardnav">Wizard Navigation</a>
      </SubNavMenuItem>
    </SubNavMenu>
  </AccordionItem>
  <AccordionItem header="FORMS">
    <SubNavMenu type="vertical">
      <SubNavMenuItem>
        <a href="forms/field">Field</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="forms/checkbox">CheckBox</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="forms/file">File</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="forms/number">Number</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="forms/radio">Radio</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="forms/select">Select</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="forms/textbox">TextBox</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="forms/textarea">TextArea</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="forms/validation">Validation</a>
      </SubNavMenuItem>
    </SubNavMenu>
  </AccordionItem>
  <AccordionItem header="DIALOGS">
    <SubNavMenu type="vertical">
      <SubNavMenuItem>
        <a href="dialogs/info">Info Dialog</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="dialogs/confirm">Confirm Dialog</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="dialogs/prompt">Prompt Dialog</a>
      </SubNavMenuItem>
    </SubNavMenu>
  </AccordionItem>
  <AccordionItem header="CHARTS">
    <SubNavMenu type="vertical">
      <SubNavMenuItem>
        <a href="charts/barchart">Bar Chart</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="charts/linechart">Line Chart</a>
      </SubNavMenuItem>
      <SubNavMenuItem>
        <a href="charts/piechart">Pie Chart</a>
      </SubNavMenuItem>
    </SubNavMenu>
  </AccordionItem>
  <AccordionItem header="ICONS">
    <SubNavMenu type="vertical">
      <SubNavMenuItem>
        <a href="components/icons">Icons</a>
      </SubNavMenuItem>
    </SubNavMenu>
  </AccordionItem>
</Accordion>
