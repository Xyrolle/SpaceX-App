const BASE_URL = "https://api.spacexdata.com/v3/launches";
const pageSize = 6;

const fetchLaunches = async (page) => {
  let offset = pageSize * page;
  const response = await fetch(
    `${BASE_URL}?limit=6&offset=${offset}&sort=launch_date_utc&order=desc`
  );

  return await response.json();
};

export { fetchLaunches };
