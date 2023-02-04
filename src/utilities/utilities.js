export const playersState = [
    { id: 1, name: "Robert", lastName: "Lewandowski", age: 34 },
    { id: 2, name: "Tomasz", lastName: "Hajto", age: 99 },
    { id: 3, name: "Marek", lastName: "Koniarek", age: 54 }
  ];
  
  export const inputProps = {
    name: {
      id: "name",
      name: "name",
      htmlFor: "name",
      type: "text"
    },
    lastName: {
      id: "lastName",
      name: "lastName",
      htmlFor: "lastName",
      type: "text"
    },
    age: {
      id: "age",
      name: "age",
      htmlFor: "age",
      type: "number"
    }
  };
  
  export const playerState = {
    name: "",
    lastName: "",
    age: ""
  };
  