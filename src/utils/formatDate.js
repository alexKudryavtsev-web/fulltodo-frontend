export default function formatDate(timestamp) {
  const dateCreated = new Date(timestamp);
  const formatedDateCreated = dateCreated.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return formatedDateCreated;
}
