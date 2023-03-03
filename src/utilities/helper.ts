// <div className="search-wrapper">
//   <Link to={generateNewSearchParamString("type", "simple", searchParams)}>
//     Simple
//   </Link>
//   <Link to={generateNewSearchParamString("type", "rugged", searchParams)}>
//     Rugged
//   </Link>
//   <Link to={generateNewSearchParamString("type", "luxury", searchParams)}>
//     Luxury
//   </Link>
//   <Link to={generateNewSearchParamString("type", null, searchParams)}>
//     Clear
//   </Link>
// </div>

const generateNewSearchParamString = (key: string, value: string | null, searchParams: URLSearchParams) => {
  const searchParam = new URLSearchParams(searchParams);
  value === null ? searchParam.delete(key) : searchParam.set(key, value);

  return `?${searchParam.toString()}`;
};

export {
  generateNewSearchParamString,
}