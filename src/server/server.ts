interface RequestOptions {
  method: string;
  headers?: Record<string, string>;
  body?: any;
}

interface FetchDataOptions extends RequestOptions {
  url: string;
}

async function fetchData({ url, method, headers, body }: FetchDataOptions) {
  try {
    const options: RequestInit = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        ...headers, // Merge con headers personalizados, si los hay
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(`Error: ${error}`);
    throw new Error(`Error: ${error}`);
  }
}

export default fetchData;
