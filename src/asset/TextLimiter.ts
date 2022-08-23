export const delimiter = (text:string, limit:number) => {
  if (text.length <= limit) return text;
  return `${text.substr(0, limit)}...`;
};