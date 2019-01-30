const takeANumber = (line, name) => {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
};

const nowServing = katzDeliLine => {
  if (katzDeliLine.length === 0) {
    return ``
  }
}