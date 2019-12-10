export default function findBy(prop, phrase) {
  return function check(x) {
    return (x[prop].search(phrase) !== -1) ? x : 0;
  };
}
