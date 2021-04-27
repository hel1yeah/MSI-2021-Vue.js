export const dogNames = (dogs) => {
  let names = [];

  dogs.forEach((element) => {
    names.push(element.name);
  });
  return names;
};

export const getForNameBreeds = (data, name) => {
  let dog = [];
  data.forEach((e) => {
    if (e.name === name) {
      dog.push(e);
    }
  });
  return dog;
};