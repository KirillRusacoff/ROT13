const encode = () => {
  const input = document.getElementById('inputText').value;
  const output = rot13(input);
  document.getElementById('outputText').value = output;
};

const decode = () => {
  const input = document.getElementById('inputText').value;
  const output = rot13(input);
  document.getElementById('outputText').value = output;
};

const clearFields = () => {
  document.getElementById('inputText').value = '';
  document.getElementById('outputText').value = '';
};

const rot13 = (str) => {
  return str.replace(/[a-zA-Z]/g, (c) => {
    const base = c <= 'Z' ? 65 : 97;
    return String.fromCharCode(base + (c.charCodeAt(0) - base + 13) % 26);
  });
};
