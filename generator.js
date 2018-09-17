const specials = '!@#$%^&*()_+{}:"<>?\|[];\',./`~';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';

String.prototype.pick = function (min, max) {
  let n; let
    chars = '';

  if (typeof max === 'undefined') {
    n = min;
  } else {
    n = min + Math.floor(Math.random() * (max - min + 1));
  }

  for (let i = 0; i < n; i++) {
    chars += this.charAt(Math.floor(Math.random() * this.length));
  }

  return chars;
};


// Credit to @Christoph: http://stackoverflow.com/a/962890/464744
String.prototype.shuffle = function () {
  const array = this.split('');
  let tmp; let current; let
    top = array.length;

  if (top) {
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  }

  return array.join('');
};


module.exports = {
  pswCreate: (minLength = 8, minUppercase = 1, minDigest = 1, minSpecial = 1) => {
    let password = '';
    password += specials.pick(minSpecial);
    password += uppercase.pick(minUppercase);
    password += numbers.pick(minDigest);
    password += lowercase.pick(minLength - password.length);
    password = password.shuffle();
    return password;
  },
};
