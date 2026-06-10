const fetch = globalThis.fetch;

(async () => {
  try {
    const res = await fetch('http://127.0.0.1:3000/api/ai/enhance-job-desc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer test'
      },
      body: JSON.stringify({ userContent: 'Test summary for enhancement' })
    });
    console.log('status', res.status);
    const text = await res.text();
    console.log('body', text);
  } catch (err) {
    console.error(err);
  }
})();
