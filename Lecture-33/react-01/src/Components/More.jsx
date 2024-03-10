function More() {
  let obj = {
    a: 10,
    b: "samarth",
  };

  let arr = [10, 20, 30, 40];

  return (
    <div>
      {arr}
      <h1>{arr[0]}</h1>
      <h1>{arr["0"]}</h1>
    </div>
  );
  //   return (
  //     <div>
  //       {/* {obj} */}
  //       {obj.a} {obj.b}
  //     </div>
  //   );
  //   return <div>{JSON.stringify(obj)}</div>;
}

export default More;
