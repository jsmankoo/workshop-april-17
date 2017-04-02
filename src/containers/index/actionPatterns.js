export function value(type) {
  return (value) => ({
    type,
    value
  })
}