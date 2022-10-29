class Login {
   constructor(x, y) {
      this.x = x;
      this.y = y;
   }
   password(pass){
      if (pass.length >= 5){//Проверяем, если кол-во символов меньше 5 то выводим ошибку
         if (pass == pass.toLowerCase()){
            console.error('Пароль должен содержать большие буквы');
         }
         else {
            if (/\d/.test(pass)) {//Проверяем, если нет цифр то выводим ошибку
               if (pass.includes('qwerty')) {//Проверяем, нет ли qwerty в пароле
                  console.error('Ваш пароль содержит простые символы');
               }
               else {
                  console.log('Ваш пароль подходит');//Если всё ок то выводим
               }
            }
            else {
               console.error('Пароль должен содержать хотя бы одну цифру');
            }
         }
      }
      else {
         console.error('Ваш пароль меньше 5 символов');
      }
   }
   login(login) {
      if(login.length >= 5) {
         console.log('Ваш логин подходит');
      }
      else {
         console.error('Ваш логин меньше 5 символов');
      }
   }
}
var password = new Login();
var login = new Login();

password.password('12345Ф');
login.login('12345');
