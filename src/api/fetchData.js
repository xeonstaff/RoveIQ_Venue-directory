export async function fetchData() {
    const response = await fetch('https://testapi.io/api/ndenlinger/roveiq');
    if (!response.ok) {
      throw new Error('Failed to fetch locations');
    }
    const data = await response.json();
    return data;
  }  