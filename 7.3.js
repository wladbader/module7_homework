//Написать функцию, которая создает пустой объект, но без прототипа.

const createEmptyObject = () => {
    return Object.create(null);
  }
  
  const obj = createEmptyObject();