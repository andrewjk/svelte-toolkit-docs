<script>
  import { Calendar } from "svelte-toolkit";

  const today = new Date();

  let selectable = false;
  let value = dummyDate(+2);
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

  $: exampleCode =
    "<Calendar startOfWeek={" +
    startOfWeek +
    "} selectable={" +
    selectable +
    "} value={new Date()} {events} />";

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
  <h2>Calendar</h2>
  <p>
    A calendar with (optional) day, month and year views that can be used to
    display events or solicit a date input from the user.
  </p>

  <h3>Demo</h3>
  <div class="block">
    <Calendar {startOfWeek} {selectable} {value} {events} />
  </div>

  <h3>Properties</h3>
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
          <td>startOfWeek</td>
          <td>1</td>
          <td>
            the day of the week to start with, where 0 = Sunday, 1 = Monday etc
          </td>
          <td>
            <input type="number" bind:value={startOfWeek} />
          </td>
        </tr>
        <tr>
          <td>selectable</td>
          <td>false</td>
          <td>set to true to allow the user to select a day</td>
          <td>
            <label>
              <input type="checkbox" bind:checked={selectable} />
              Allow selecting
            </label>
          </td>
        </tr>
        <tr>
          <td>value</td>
          <td />
          <td>the value of the selected date (if selectable is true)</td>
          <td>TODO:</td>
        </tr>
        <tr>
          <td>events</td>
          <td />
          <td>
            an array of events to display in the calendar, where each event can
            have the properties date, content and color
          </td>
          <td>TODO:</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
