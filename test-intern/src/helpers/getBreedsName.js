const dogNames = (dogs) => {
  let names = [];

  dogs.forEach((element) => {
    names.push(element.name);
  });
  return names;
};

const getForNameBreeds = (data, name) => {
  let dog = [];
  data.forEach((e) => {
    if (
      e.name
        .split(" ")
        .join("")
        .toLowerCase()
        .includes(name.split(" ").join("").toLowerCase())
    ) {
      dog.push(e);
    }
  });
  return dog;
};

export { dogNames, getForNameBreeds };
