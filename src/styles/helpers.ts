export const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' }

export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}
