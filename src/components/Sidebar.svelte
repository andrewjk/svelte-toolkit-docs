<script>
  import {
    Accordion,
    AccordionItem,
    SubNavMenu,
    SubNavMenuItem,
    SubNavMenuHeader
  } from "svelte-toolkit";

  let search = null;

  let pages = [
    { group: "General", title: "Installation" },
    { group: "General", title: "Base Styles" },
    { group: "General", title: "Theming" },
    { group: "General", title: "Theme Properties" },
    { group: "Layout", title: "Page" },
    { group: "Layout", title: "Container" },
    { group: "Layout", title: "Grid" },
    { group: "Layout", title: "Level" },
    { group: "Layout", title: "Panel" },
    { group: "Components", title: "Accordion" },
    { group: "Components", title: "Alert" },
    { group: "Components", title: "Auto Complete" },
    { group: "Components", title: "Badge" },
    { group: "Components", title: "Breadcrumb" },
    { group: "Components", title: "Button" },
    { group: "Components", title: "Calendar" },
    { group: "Components", title: "Card" },
    { group: "Components", title: "Color Picker" },
    { group: "Components", title: "Cover Image" },
    { group: "Components", title: "Data Table" },
    { group: "Components", title: "Date Picker" },
    { group: "Components", title: "Drop Down" },
    { group: "Components", title: "Focus Group" },
    { group: "Components", title: "Image Button" },
    { group: "Components", title: "Notification" },
    { group: "Components", title: "Off Screen" },
    { group: "Components", title: "Palette" },
    { group: "Components", title: "Progress" },
    { group: "Components", title: "Slider" },
    { group: "Components", title: "Tab Group" },
    { group: "Components", title: "Tag" },
    { group: "Components", title: "Tag Input" },
    { group: "Navigation", title: "Nav Bar" },
    { group: "Navigation", title: "Sub Nav Menu" },
    { group: "Navigation", title: "Switcher" },
    { group: "Navigation", title: "Pagination" },
    { group: "Navigation", title: "Dot Navigation" },
    { group: "Navigation", title: "Story Navigation" },
    { group: "Navigation", title: "Wizard Navigation" },
    { group: "Forms", title: "Field" },
    { group: "Forms", title: "CheckBox" },
    { group: "Forms", title: "Currency" },
    { group: "Forms", title: "File" },
    { group: "Forms", title: "Number" },
    { group: "Forms", title: "Radio" },
    { group: "Forms", title: "Select" },
    { group: "Forms", title: "TextBox" },
    { group: "Forms", title: "TextArea" },
    { group: "Forms", title: "Validation" },
    { group: "Dialogs", title: "Info" },
    { group: "Dialogs", title: "Confirm" },
    { group: "Dialogs", title: "Modal" },
    { group: "Dialogs", title: "Prompt" },
    { group: "Charts", title: "Bar Chart" },
    { group: "Charts", title: "Line Chart" },
    { group: "Charts", title: "Pie Chart" },
    { group: "Icons", title: "Icons" }
  ];

  let groups = pages.map(p => p.group).filter((element, index, self) => index == self.indexOf(element));

</script>

<style>
  a {
    display: block;
    width: 100%;
  }
</style>

<div class="block">
  <input type="text" bind:value={search} placeholder="Search..." />
</div>
{#if search}
  <SubNavMenu type="vertical">
    {#each pages.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    ) as page}
      <SubNavMenuItem>
        <a href={`${page.group}/${page.title.replace(/ /g, '')}`.toLowerCase()}>
          {page.group} &gt; {page.title}
        </a>
      </SubNavMenuItem>
    {/each}
  </SubNavMenu>
{:else}
  <Accordion>
    {#each groups as group}
      <AccordionItem header={group.toUpperCase()}>
        <SubNavMenu type="vertical">
          {#each pages.filter(p => p.group === group) as page}
            <SubNavMenuItem>
              <a
                href={`${page.group}/${page.title.replace(/ /g, '')}`.toLowerCase()}>
                {page.title}
              </a>
            </SubNavMenuItem>
          {/each}
        </SubNavMenu>
      </AccordionItem>
    {/each}
  </Accordion>
{/if}
