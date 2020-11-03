
process.stdout.write('hello from spinner1.js... \rheyyy\n');

let str2animate = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '/', '-', '\\', '\n\nfun ...']
for (let i=0; i<str2animate.length; i++){
  setTimeout(() => {
    process.stdout.write('\r'+str2animate[i]);
  }, 100+200*i);
}
