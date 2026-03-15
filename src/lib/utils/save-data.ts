interface NetworkInformation {
  saveData: boolean
}

export function saveData(): boolean {
  if ("connection" in navigator) {
    return (navigator.connection as NetworkInformation).saveData === true
  }
  return false
}
