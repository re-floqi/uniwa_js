<script>
  let announcements = [];

  // Φόρτωση ανακοινώσεων από το CSV του Google Sheets
  async function loadAnnouncements() {
    const response = await fetch('https://docs.google.com/spreadsheets/d/1dqBSWQTSJmpDH_bkCg43jZ9rvR2sLVevxLDycrb9XM8/export?format=csv');
    const data = await response.text();
    const rows = data.split('\n').map(row => row.split(','));

    // Δημιουργία αντικειμένων από τα δεδομένα του CSV
    announcements = rows.slice(1).map(row => ({
      TITLE: row[0],
      DATE: new Date(row[1]),
      DESCRIPTION: row[2]
    }));

    // Ταξινόμηση κατά ημερομηνία
    announcements.sort((a, b) => b.DATE - a.DATE);
  }

  // Φόρτωμα κατά την εκκίνηση
  loadAnnouncements();
</script>

<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f7fc;
    margin: 0;
    padding: 0;
  }
  h1 {
    text-align: center;
    color: #4c6ef5;
    padding-top: 20px;
  }
  .announcement {
    background-color: #fff;
    padding: 20px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .announcement h2 {
    color: #333;
    margin: 0;
  }
  .announcement p {
    color: #666;
    font-size: 14px;
  }
  .announcement hr {
    border: 0;
    border-top: 1px solid #ddd;
  }
</style>

<main>
  <h1>Ανακοινώσεις</h1>
  {#each announcements as ann}
    <div class="announcement">
      <h2>{ann.TITLE}</h2>
      <p>📅 {ann.DATE.toLocaleDateString()}</p>
      <p>{ann.DESCRIPTION}</p>
      <hr />
    </div>
  {/each}
</main>
