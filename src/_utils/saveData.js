function saveData() {
  if ("connection" in navigator) {
    return (navigator.connection.saveData === true);
  } else return false;
}

export default saveData;
