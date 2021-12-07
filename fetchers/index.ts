import { res404, res503 } from "../initial_data/http_response";

const Fetcher = async <T>(url: string): Promise<T> => {
  const res: Response = await fetch(url);
  if (res.status === 404) {
    throw res404;
  } else if (res.status === 503) {
    throw res503;
  }
  return res.json();
};

export default Fetcher;
