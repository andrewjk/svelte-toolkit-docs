<script>
  import {
    Calendar,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

  let selectable = false;
  let value = new Date();
  let startOfWeek = 1;

  let events = [
    {
      date: dummyDate(-35),
      text: "A blast from the past"
    },
    {
      date: dummyDate(-5),
      text: "Something that happened a few days ago"
    },
    {
      date: dummyDate(+5),
      text: "Something that's coming up soon!"
    },
    {
      date: dummyDate(+35),
      text: "Something to look forward to"
    }
  ];

  $: exampleCode = `
import { Calendar } from "svelte-toolkit";

<Calendar startOfWeek={${startOfWeek}} selectable={${selectable}} {value} {events} />`.trim();

  function dummyDate(days) {
    const today = new Date();
    today.setDate(today.getDate() + days);
    return today;
  }
</script>

<svelte:head>
  <title>Calendar | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Calendar</h1>
  <p>
    A calendar with (optional) day, month and year views that can be used to
    display events or solicit a date input from the user.
  </p>

  <h2>Demo</h2>
  <div class="block">
    <Calendar {startOfWeek} {selectable} {value} {events} />
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
          <TableCell>startOfWeek</TableCell>
          <TableCell>1</TableCell>
          <TableCell>
            the day of the week to start with, where 0 = Sunday, 1 = Monday etc
          </TableCell>
          <TableCell>
            <input type="number" bind:value={startOfWeek} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>selectable</TableCell>
          <TableCell>false</TableCell>
          <TableCell>set to true to allow the user to select a day</TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={selectable} />
              Allow selecting
            </label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>value</TableCell>
          <td />
          <TableCell>the value of the selected date (if selectable is true)</TableCell>
          <td />
        </TableRow>
        <TableRow>
          <TableCell>events</TableCell>
          <td />
          <TableCell>
            an array of events to display in the calendar, where each event can
            have the properties date, content and color
          </TableCell>
          <td />
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
