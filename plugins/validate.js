import { extend } from "vee-validate";
import { required, alpha, numeric, email } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "Поле обязательно к заполнению"
});

extend("alpha", {
  ...alpha,
  message: "Это поле должно содержать только буквенные символы"
});

extend("numeric", {
  ...numeric,
  message: 'Проверяемое поле должно состоять только из чисел.'
})

extend("email", {
  ...email,
  message: 'Адрес электронной почты должен содержать символ "@"'
});
