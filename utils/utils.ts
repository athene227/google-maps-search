export function classNames(...classes: string[]) {
  return classes
    .map(className => (className ? className.split(' ').join(' ') : ''))
    .join(' ')
}
