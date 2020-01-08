<script>
  import { onMount } from "svelte";
  import {
    DataTable,
    DataTableHeader,
    DataTableColumn,
    TabGroup,
    TabItem
  } from "svelte-toolkit";
  import { countries } from "../../stores/countries";

  let keyField = "name";
  let pageNumber = 1;
  let pageSize = 10;
  let itemCount = 0;
  let type = "";

  let loading = true;
  let data = [];
  let dataSortField = "vote_average";
  let dataSortDirection = "desc";
  let dataPageNumber = 1;
  let dataPageSize = 20;
  let dataItemCount = 0;

  $: exampleCode = `
import { DataTable, DataTableColumn } from "svelte-toolkit";

<DataTable items={countries} keyField="${keyField}" type="${type}" let:item>
  <DataTableColumn field="name" header="Name" sortable>
    {item.name}
  </DataTableColumn>
  <DataTableColumn field="title" header="Title" sortable>
    {item.title}
  </DataTableColumn>
  …
  <div slot="empty">No countries were found...</div>
</DataTable>

~ OR ~

<DataTable
  data={countries}
  keyField="${keyField}"
  {itemCount}
  {pageNumber}
  {pageSize}
  type="${type}"
  let:item
  on:sort={handleSort}
  on:page={handlePage}>
  <DataTableColumn field="name" header="Name" sortable>
    {item.name}
  </DataTableColumn>
  <DataTableColumn field="title" header="Title" sortable>
    {item.title}
  </DataTableColumn>
  …
  <div slot="loading">Loading countries...</div>
  <div slot="empty">No countries were found...</div>
</DataTable>`.trim();

  onMount(async () => {
    await loadData();
  });

  function formatNumber(number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  async function loadData() {
    loading = true;
    const params = [
      "api_key=ffd0afce8d1c3d7369391dcc1d19dd7f",
      "language=en-US",
      "include_adult=false",
      "include_video=false",
      `sort_by=${dataSortField}.${dataSortDirection}`,
      "vote_count.gte=1000",
      `page=${dataPageNumber}`
    ].join("&");
    await fetch(`https://api.themoviedb.org/3/discover/movie?${params}`)
      .then(response => response.json())
      .then(response => {
        dataItemCount = response.total_results;
        data = response.results;
      })
      .catch(err => {
        dataItemCount = 0;
        data = [];
        throw err;
      });
    loading = false;
  }

  async function handleSort(e) {
    dataSortField = e.detail.sort;
    dataSortDirection = e.detail.sortDirection;
    loadData();
  }

  function handlePage(e) {
    dataPageNumber = e.detail;
    loadData();
  }
</script>

<svelte:head>
  <title>Data Table | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Data Table</h1>
  <p>A table with data in rows.</p>
  <p>
    The table works in two main ways: you can either pass in an array of items
    using the `items` property to have the table handle your sorting and paging,
    or you can pass in an array of items using the `data` property and handle
    sorting and paging via the on:sort and on:page events yourself. The first
    way is handy when the array of data doesn't change, whereas the second is
    handy when you are loading your data from a database or web service.
  </p>

  <TabGroup>
    <TabItem header="With Items" id="tab1">
      <DataTable
        items={countries}
        {keyField}
        bind:pageNumber
        {pageSize}
        {itemCount}
        {type}
        let:item>
        <DataTableColumn field="name" header="Name" sortable>
          {item.name}
        </DataTableColumn>
        <DataTableColumn field="title" header="Title" sortable>
          {item.title}
        </DataTableColumn>
        <DataTableColumn field="capital" header="Capital" sortable>
          {item.capital}
        </DataTableColumn>
        <DataTableColumn field="area" header="Area (km²)" sortable>
          {formatNumber(item.area)}
        </DataTableColumn>
        <DataTableColumn field="population" header="Population" sortable>
          {formatNumber(item.population)}
        </DataTableColumn>
        <DataTableColumn field="worldPercent" header="World %" sortable>
          {`${formatNumber(item.worldPercent)}%`}
        </DataTableColumn>
        <div slot="empty">No countries were found...</div>
      </DataTable>
    </TabItem>
    <TabItem header="With Data" id="tab2">
      <p>
        Data from
        <a href="https://www.themoviedb.org">The Movie DB</a>
      </p>
      <DataTable
        {data}
        {loading}
        keyField="id"
        itemCount={dataItemCount}
        pageNumber={dataPageNumber}
        pageSize={dataPageSize}
        {type}
        let:item
        on:sort={handleSort}
        on:page={handlePage}>
        <DataTableColumn field="title" header="Title" sortable>
          {item.title}
        </DataTableColumn>
        <DataTableColumn field="vote_average" header="Vote Average" sortable>
          {item.vote_average}
        </DataTableColumn>
        <DataTableColumn field="vote_count" header="Vote Count" sortable>
          {item.vote_count}
        </DataTableColumn>
        <DataTableColumn field="release_date" header="Release Date" sortable>
          {item.release_date ? new Date(item.release_date).toLocaleDateString() : ''}
        </DataTableColumn>
        <DataTableColumn header="Overview">
          {item.overview.length > 200 ? item.overview
                .substring(0, 199)
                .trim() + '…' : item.overview}
        </DataTableColumn>
        <div slot="loading">Loading movies...</div>
        <div slot="empty">No movies were found...</div>
      </DataTable>
    </TabItem>
  </TabGroup>

  <h2>Properties</h2>
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
          <td>items</td>
          <td />
          <td>
            An array of items to show in the table. When using this property,
            the table will handle sorting and paging
          </td>
          <td />
        </tr>
        <tr>
          <td>data</td>
          <td />
          <td>
            An array of items to show in the table. When using this property,
            you will need to handle sorting and paging yourself
          </td>
          <td />
        </tr>
        <tr>
          <td>loading</td>
          <td>false</td>
          <td>
            Whether the data property is being loaded. If true, the `loading`
            slot will be displayed
          </td>
          <td />
        </tr>
        <tr>
          <td>keyField</td>
          <td />
          <td>The name of the field to use for keying items for updates</td>
          <td>
            <input bind:value={keyField} />
          </td>
        </tr>
        <tr>
          <td>pageNumber</td>
          <td>1</td>
          <td>The current page number</td>
          <td>
            <input type="number" bind:value={pageNumber} />
          </td>
        </tr>
        <tr>
          <td>pageSize</td>
          <td>10</td>
          <td>The number of items displayed on each page</td>
          <td>
            <input type="number" bind:value={pageSize} />
          </td>
        </tr>
        <tr>
          <td>itemCount</td>
          <td />
          <td>The total number of items</td>
          <td>
            <input type="number" bind:value={itemCount} />
          </td>
        </tr>
        <tr>
          <td>type</td>
          <td />
          <td>line</td>
          <td>
            <select bind:value={type}>
              <option>-</option>
              <option>line</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Events</h2>
  <div class="block">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Args</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>sort</td>
          <td>
            field: the name of the field that was sorted; sortDirection: "asc"
            or "desc"
          </td>
        </tr>
        <tr>
          <td>page</td>
          <td>value: the number of the current page</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
