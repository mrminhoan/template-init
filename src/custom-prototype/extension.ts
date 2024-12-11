String.prototype.format = function (...args: string[]): string {
  return this.replace(/{(\d+)}/g, (match, number) => {
    return typeof args[number] !== 'undefined' ? args[number] : match
  })
}

export {}
