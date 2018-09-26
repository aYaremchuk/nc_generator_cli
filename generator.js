const specials = '!@#$%^&*()_+{}:"<>?\|[];\',./`~';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';

function pick(value, min, max) {
  let n;
  let chars = '';

  if (typeof max === 'undefined') {
    n = min;
  } else {
    n = min + Math.floor(Math.random() * (max - min + 1));
  }
  for (let i = 0; i < n; i += 1) {
    chars += value.charAt(Math.floor(Math.random() * value.length));
  }

  return chars;
}

function shuffle(value) {
  const array = value.split('');
  let tmp;
  let current;
  let top = array.length;

  if (top) {
    while (top -= 1) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  }

  return array.join('');
}


module.exports = {
  pswCreate: (minLength = 8, minUppercase = 1, minDigest = 1, minSpecial = 1) => {
    let password = '';
    password += pick(specials, minSpecial);
    password += pick(uppercase, minUppercase);
    password += pick(numbers, minDigest);
    password += pick(lowercase, minLength - password.length);
    password = shuffle(password);
    return password;
  },
};
