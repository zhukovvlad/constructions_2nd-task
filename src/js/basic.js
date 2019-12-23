export default function findBy(prop, phrase) {
  return (x) => {
    if (x[prop].search(phrase) !== -1) {
      return x;
    }
    return 0;
  };
}
