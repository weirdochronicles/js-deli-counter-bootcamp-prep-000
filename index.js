const takeANumber = (line, name) => {
  let customers = [];
  for (let i = 0; i <= line.length;  i++) {
  customers.push(`Welcome, ${name[i]} You are number ${i} in line.`)
  }
  return customers
};
