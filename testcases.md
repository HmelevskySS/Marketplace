# Test Cases for 21Vek

## Testcase 21V01

- **Platform:** Desktop
- **Type:** Smoke
- **Priority:** High
- **Automation status:** Ready for Automation

### Summary
[Main page] Verify user can log in his account on the main page

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;

### Steps / Expected Result
1. **Step:** Click on the ‘Аккаунт’-button in the top right corner of the page.  
   **Expected Result:** The drop-down appears under the button; The button becomes inactive; The drop-down contains the ‘Войти’-button.
   
2. **Step:** Click on the ‘Войти’-button  
   **Expected Result:** The ‘Вход’-popup displays in the centre of the page; The popup contains ‘Электронная почта’-field; The popup contains ‘Пароль’-field; There is a ‘Войти’-button on the popup.
   
3. **Step:** Paste valid user email and password into the fields on the popup; Click on the ‘Войти’-button  
   **Expected Result:** The popup disappears; The ‘Аккаунт’-button’s image is changed to the human icon; There is user email in the ‘Аккаунт’-drop-down.

---

## Testcase 21V02

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Main page] Verify user can NOT log in his account with invalid password and valid email

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;

### Steps / Expected Result
1. **Step:** Click on the ‘Аккаунт’-button in the top right corner of the page.  
   **Expected Result:** The drop-down appears under the button; The button becomes inactive; The drop-down contains the ‘Войти’-button.
   
2. **Step:** Click on the ‘Войти’-button  
   **Expected Result:** The ‘Вход’-popup displays in the centre of the page; The popup contains ‘Электронная почта’-field; The popup contains ‘Пароль’-field; There is a ‘Войти’-button on the popup.
   
3. **Step:** Paste valid user email and invalid password into the fields on the popup; Click on the ‘Войти’-button  
   **Expected Result:** There is a ‘Неправильный пароль’-error under the password field; There is a ‘Сбросить пароль?’-link for password reset next to the error.

---

## Testcase 21V03

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Main page] Verify user can NOT log in his account with filled password field and invalid email format

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;

### Steps / Expected Result
1. **Step:** Click on the ‘Аккаунт’-button in the top right corner of the page.  
   **Expected Result:** The drop-down appears under the button; The button becomes inactive; The drop-down contains the ‘Войти’-button.
   
2. **Step:** Click on the ‘Войти’-button  
   **Expected Result:** The ‘Вход’-popup displays in the centre of the page; The popup contains ‘Электронная почта’-field; The popup contains ‘Пароль’-field; There is a ‘Войти’-button on the popup.
   
3. **Step:** Paste invalid user email and any password into the fields on the popup; Click on the ‘Войти’-button  
   **Expected Result:** There is a ‘Неправильный формат электронной почты’-error under the email field.

---

## Testcase 21V04

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Main page] Verify the login popup fields have empty values validation

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;

### Steps / Expected Result
1. **Step:** Click on the ‘Аккаунт’-button in the top right corner of the page.  
   **Expected Result:** The drop-down appears under the button; The button becomes inactive; The drop-down contains the ‘Войти’-button.
   
2. **Step:** Click on the ‘Войти’-button  
   **Expected Result:** The ‘Вход’-popup displays in the centre of the page; The popup contains ‘Электронная почта’-field; The popup contains ‘Пароль’-field; There is a ‘Войти’-button on the popup.
   
3. **Step:** Click on the ‘Войти’-button  
   **Expected Result:** There is a ‘Электронная почта не указана’-error under the email field; There is a ‘Пароль не указан’-error under the password field.

---

## Testcase 21V05

- **Platform:** Desktop
- **Type:** Smoke
- **Priority:** High
- **Automation status:** None

### Summary
[Main page] Verify user can register new account

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;

### Steps / Expected Result
1. **Step:** Click on the ‘Аккаунт’-button in the top right corner of the page.  
   **Expected Result:** The drop-down appears under the button; The button becomes inactive; The drop-down contains the ‘Войти’-button.
   
2. **Step:** Click on the ‘Регистрация’-link  
   **Expected Result:** The ‘Регистрация’-popup displays in the centre of the page; The popup contains ‘Номер телефона’-field; The popup contains ‘Электронная почта’-field; There is a ‘Продолжить’-button on the popup.
   
3. **Step:** Paste valid phone number into the phone field; Paste valid user email into the email field; Click on the ‘Продолжить’-button  
   **Expected Result:** The ‘Подтверждение телефона’-popup displays on the screen; The popup contains ‘Отправить код еще раз’-link; There are input fields for the 4-digit code.
   
4. **Step:** Paste the code from the SMS  
   **Expected Result:** The ‘Согласие на обработку персональных данных’-popup appears on the page; There is a ‘Отказываюсь’-button on the popup; There is a ‘Соглашаюсь’-button on the popup.
   
5. **Step:** Click on the ‘Соглашаюсь’-button  
   **Expected Result:** The ‘Вы зарегистрированы’-popup appears on the page; There is a ‘Войти’-button on the popup.

---

## Testcase 21V06

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Main page] Verify user can NOT register already existing email address

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;

### Steps / Expected Result
1. **Step:** Click on the ‘Аккаунт’-button in the top right corner of the page.  
   **Expected Result:** The drop-down appears under the button; The button becomes inactive; The drop-down contains the ‘Войти’-button.
   
2. **Step:** Click on the ‘Регистрация’-link  
   **Expected Result:** The ‘Регистрация’-popup displays in the centre of the page; The popup contains ‘Электронная почта’-field; There is a ‘Продолжить’-button on the popup.
   
3. **Step:** Paste valid phone number into the phone field; Paste any existing email into the email field; Click on the ‘Продолжить’-button  
   **Expected Result:** The ‘Проверьте электронную почту или войдите’-error appears under the email field; The ‘Продолжить’-button is blocked.

---

## Testcase 21V07

- **Platform:** Desktop
- **Type:** Smoke
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Main page] Verify user can select his own city in the location dropdown

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;

### Steps / Expected Result
1. **Step:** Click on the location button in the top left corner of the page.  
   **Expected Result:** The ‘Населенный пункт’-popup appears on the page; The current city is already inserted into the ‘Населенный пункт’-field; The ‘Сохранить’-button is available to click.
   
2. **Step:** Click on the (X)-button in the ‘Населенный пункт’-field  
   **Expected Result:** The ‘Населенный пункт’-field is empty; The dropdown with available cities is opened.
   
3. **Step:** Select the first value in the list  
   **Expected Result:** The chosen city is inserted into the ‘Населенный пункт’-field; The ‘Сохранить’-button is available to click.
   
4. **Step:** Click on the ‘Сохранить’-button  
   **Expected Result:** The ‘Населенный пункт’-popup is closed; The chosen city displays in the location at the top left corner of the page.

---

## Testcase 21V08

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Main page] Verify user can search a city in the location dropdown

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;

### Steps / Expected Result
1. **Step:** Click on the location button in the top left corner of the page.  
   **Expected Result:** The ‘Населенный пункт’-popup appears on the page; The current city is already inserted into the ‘Населенный пункт’-field; The ‘Сохранить’-button is available to click.
   
2. **Step:** Click on the (X)-button in the ‘Населенный пункт’-field  
   **Expected Result:** The ‘Населенный пункт’-field is empty; The dropdown with available cities is opened.
   
3. **Step:** Start typing any value into the field (e.g. ‘гур’)  
   **Expected Result:** The list with matching cities displays under the field.
   
4. **Step:** Select the first value; Click on the ‘Сохранить’-button  
   **Expected Result:** The ‘Населенный пункт’-popup is closed; The chosen city displays in the location at the top left corner of the page.

---

## Testcase 21V09

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Main page] Verify user can NOT set empty field in the location popup

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;

### Steps / Expected Result
1. **Step:** Click on the location button in the top left corner of the page.  
   **Expected Result:** The ‘Населенный пункт’-popup appears on the page; The current city is already inserted into the ‘Населенный пункт’-field; The ‘Сохранить’-button is available to click.
   
2. **Step:** Click on the (X)-button in the ‘Населенный пункт’-field  
   **Expected Result:** The ‘Населенный пункт’-field is empty; The dropdown with available cities is opened.
   
3. **Step:** Click outside the dropdown  
   **Expected Result:** There is a ‘Выберите населенный пункт из списка’-error under the location field; The ‘Сохранить’-button is blocked.

---

## Testcase 21V10

- **Platform:** Desktop
- **Type:** Smoke
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Main page] Verify the search on the page returns correct results

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;

### Steps / Expected Result
1. **Step:** Click on the search bar in the header of the page  
   **Expected Result:** The cursor is set into the field; The popular categories list displays under the search bar.
   
2. **Step:** Enter any search request into the field (e.g. ‘тест’)  
   **Expected Result:** The list under the search bar is updated; The list contains categories and products with matching in their naming.
   
3. **Step:** Click on the ‘Search’-button in the field  
   **Expected Result:** The results list is updated; There is a page with different items matching the search request.

---

## Testcase 21V11

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Main page] Verify the search on the page returns correct results if user types Russian words on the English keyboard

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;

### Steps / Expected Result
1. **Step:** Click on the search bar in the header of the page  
   **Expected Result:** The cursor is set into the field; The popular categories list displays under the search bar.
   
2. **Step:** Enter any search request into the field (e.g. ‘ntcn’)  
   **Expected Result:** The list under the search bar is updated; The list contains categories and products with matching in their naming; Results match with the word ‘тест’.
   
3. **Step:** Click on the ‘Search’-button in the field  
   **Expected Result:** The results list is updated; There is a page with different items matching the search request.

---

Certainly! Here's the continuation of the Markdown (`.md`) file with the remaining test cases:

---

## Testcase 21V12

- **Platform:** Desktop
- **Type:** Smoke
- **Priority:** High
- **Automation status:** Ready for Automation

### Summary
[Basket] Verify user can add any product to the basket

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;

### Steps / Expected Result
1. **Step:** Click on the ‘Холодильники’-button in the categories toolbar of the header  
   **Expected Result:** The [https://www.21vek.by/refrigerators/](https://www.21vek.by/refrigerators/) page is opened; The list of available products displays on the page.

2. **Step:** Click on the ‘В корзину’-button for the first product  
   **Expected Result:** The ‘В корзину’-button becomes white; There is a (1)-notification mark on the ‘Корзина’-button.

3. **Step:** Click on the ‘Корзина’-button  
   **Expected Result:** The [https://www.21vek.by/order/](https://www.21vek.by/order/) page is opened; The selected product displays on the page.

---

## Testcase 21V13

- **Platform:** Desktop
- **Type:** Smoke
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Basket] Verify the price changes in case user increases/decreases the amount of added products

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;

### Steps / Expected Result
1. **Step:** Click on the ‘Холодильники’-button in the categories toolbar of the header  
   **Expected Result:** The [https://www.21vek.by/refrigerators/](https://www.21vek.by/refrigerators/) page is opened; The list of available products displays on the page.

2. **Step:** Click on the ‘В корзину’-button for the first product  
   **Expected Result:** The ‘В корзину’-button becomes white; There is a (1)-notification mark on the ‘Корзина’-button.

3. **Step:** Click on the ‘Корзина’-button  
   **Expected Result:** The [https://www.21vek.by/order/](https://www.21vek.by/order/) page is opened; The selected product displays on the page.

4. **Step:** Click on the (+)-button in the amount field  
   **Expected Result:** The amount is updated to 2; The price is increased twice.

5. **Step:** Type ‘1’ into the amount field  
   **Expected Result:** The amount is updated to 1; The price is decreased twice.

---

## Testcase 21V14

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Basket] Verify the error displays on the page when user tries to enter 0 into the amount field

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;

### Steps / Expected Result
1. **Step:** Click on the ‘Холодильники’-button in the categories toolbar of the header  
   **Expected Result:** The [https://www.21vek.by/refrigerators/](https://www.21vek.by/refrigerators/) page is opened; The list of available products displays on the page.

2. **Step:** Click on the ‘В корзину’-button for the first product  
   **Expected Result:** The ‘В корзину’-button becomes white; There is a (1)-notification mark on the ‘Корзина’-button.

3. **Step:** Click on the ‘Корзина’-button  
   **Expected Result:** The [https://www.21vek.by/order/](https://www.21vek.by/order/) page is opened; The selected product displays on the page.

4. **Step:** Type ‘0’ into the amount field  
   **Expected Result:** The ‘Недостаточное количество товара’-error displays on the page; The amount is set to 1 by default.

---

## Testcase 21V15

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Basket] Verify the displaying additional services added to the product increase final price

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;

### Steps / Expected Result
1. **Step:** Click on the ‘Холодильники’-button in the categories toolbar of the header  
   **Expected Result:** The [https://www.21vek.by/refrigerators/](https://www.21vek.by/refrigerators/) page is opened; The list of available products displays on the page.

2. **Step:** Click on the ‘В корзину’-button for the first product  
   **Expected Result:** The ‘В корзину’-button becomes white; There is a (1)-notification mark on the ‘Корзина’-button.

3. **Step:** Click on the ‘Корзина’-button  
   **Expected Result:** The [https://www.21vek.by/order/](https://www.21vek.by/order/) page is opened; The selected product displays on the page.

4. **Step:** Check the second service checkbox  
   **Expected Result:** The summary list is updated; The ‘Услуга добавлена в корзину’-message displays on the page; The service name is added to the summary; The price is increased by the service’s price.

5. **Step:** Uncheck the additional service’s checkbox  
   **Expected Result:** The summary list is updated; The ‘Услуга удалена’-message displays on the page; The service is removed from the summary.

---

## Testcase 21V16

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Basket] Verify user can open the whole list of additional services and add it to the order

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;
- Add any refrigerator to the basket;
- Go to the basket;

### Steps / Expected Result
1. **Step:** In the additional services list, click on the ‘Все услуги’-link  
   **Expected Result:** The side curtain appears on the page; There are several tabs on the curtain; Each additional service contains ‘+ Добавить’-button.

2. **Step:** Click on the ‘Страхование’-tab; Click on the ‘+ Добавить’-button  
   **Expected Result:** The green checkmark appears next to the service’s name; The ‘+ Добавить’-button is changed to bin icon.

3. **Step:** Click on the X-button in the top right corner of the curtain; Check the price of the order  
   **Expected Result:** The price is increased by the value of the additional service.

---

## Testcase 21V17

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Basket] Verify the login form is opened after clicking on ‘Оформить заказ’-button for not logged in user

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;
- Add any refrigerator to the basket;
- Go to the basket;

### Steps / Expected Result
1. **Step:** Click on the ‘Оформить заказ’-button  
   **Expected Result:** The ‘Оформление заказа’-window is opened; There are two tabs on the window; There is a login form.

---

## Testcase 21V18

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Basket] Verify user can remove the product from the basket

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;
- Add any refrigerator to the basket;
- Go to the basket;

### Steps / Expected Result
1. **Step:** Click on the ‘Удалить’-button under the product  
   **Expected Result:** The ‘Удалить товар из корзины’-popup displays on the page; There is a ‘Отмена’-button on the popup; There is a ‘Удалить’-button on the popup.

2. **Step:** Click on the ‘Отмена’-button  
   **Expected Result:** The popup is closed; The product stays in the basket.

3. **Step:** Click on the ‘Удалить’-button under the product; Click on the ‘Удалить’-button  
   **Expected Result:** The ‘Товар удален из корзины’ message displays on the page; The basket is empty.

---

## Testcase 21V19

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Basket] Verify user is redirected to the certificates page if he has no added ones

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;
- Go to the basket;

### Steps / Expected Result
1. **Step:** Click on the ‘Сертификаты’-tab  
   **Expected Result:** The ‘Сертификаты’-tab is opened; There is a link to the certificates page.

2. **Step:** Click on the ‘здесь’-link  
   **Expected Result:** The [https://www.21vek.by/electronic_gift_certificates/](https://www.21vek.by/electronic_gift_certificates/) page is opened.

---

## Testcase 21V20

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Product details] Verify user can select amount for certificate on the details page and add it to the basket

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;
- Go to the basket;
- Open the certificates page;

### Steps / Expected Result
1. **Step:** Click on the first product  
   **Expected Result:** User is redirected to the product details page; There are different certificate amounts on the page; There is ‘Добавить в корзину’-button.

2. **Step:** Select any other certificate amount (e.g. ‘5000 р’)  
   **Expected Result:** User is redirected to the corresponding nominal certificate page.

3. **Step:** Click on the ‘Добавить в корзину’-button  
   **Expected Result:** The button is changed to ‘В корзине’; The basket button has an amount notification.

4. **Step:** Click on the basket button  
   **Expected Result:** User is redirected to the certificates tab; The correct certificate is added to the basket.

---

## Testcase 21V21

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Special offers] Verify user can sort special offers by the discount percentage

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;

### Steps / Expected Result
1. **Step:** Click on the ‘Все акции’-button in the categories tool panel in the header  
   **Expected Result:** User is redirected to the [https://www.21vek.by/special_offers/promo.html](https://www.21vek.by/special_offers/promo.html) page; There is a sidebar with filters and sortings to the right of the products list.

2. **Step:** Click on the 50% radio-button in the ‘Скидка’-list  
   **Expected Result:** All the products are filtered by the available discount; The discount for each product is no lower than 50%.

---

## Testcase 21V22

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Special offers] Check the price filtering works correctly

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;
- Go to the special offers page;

### Steps / Expected Result
1. **Step:** Enter the price 10 into the ‘Цена от’-field; Click outside the field  
   **Expected Result:** The page is updated; Products which prices are greater than 10 display in the list.

2. **Step:** Enter the price 15 into the ‘Цена до’-field; Click outside the field  
   **Expected Result:** The page is updated; Products which prices are greater than 10 but lower than 15 display in the list.

3. **Step:** Enter the price 10 into the ‘Цена до’-field; Click outside the field  
   **Expected Result:** The page is updated; Only products with the price 10 display in the list.

---

## Testcase 21V23

- **Platform:** Desktop
- **Type:** Smoke
- **Priority:** High
- **Automation status:** Ready for Automation

### Summary
[Main page] Verify user can open the categories catalogue

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;

### Steps / Expected Result
1. **Step:** Click on the ‘Каталог товаров’-button in the top right corner next to the logo  
   **Expected Result:** The drop-down appears under the button; The ‘Каталог товаров’-button changes its colour to grey; The ‘Подборки’-section displays for each category.

2. **Step:** Hover over any other category  
   **Expected Result:** The category product groups display in the section; The section’s name is changed to the name of the chosen category.

---

## Testcase 21V24

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Main page] Verify user can open product page using the catalogue menu

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;
- Open the catalogue;

### Steps / Expected Result
1. **Step:** Click on any category from the catalogue (e.g. ‘Авто и мото’)  
   **Expected Result:** The drop-down is closed; The page is reloaded; The [https://www.21vek.by/cars/](https://www.21vek.by/cars/) page is opened.

2. **Step:** Click on the ‘Мотошины’ sub-category  
   **Expected Result:** The page with tires is opened; The list contains different products with ‘Мотошина’ word in the name.

3. **Step:** Click on the first product  
   **Expected Result:** The product page is opened.

---

## Testcase 21V25

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Low
- **Automation status:** Ready for Automation

### Summary
[Product page] Verify the tooltip about multiple attributes changing displays on hover

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;
- Open the catalogue;
- Go to any product page where different attributes require changing of some other ones (e.g. tires);

### Steps / Expected Result
1. **Step:** Hover over any not-selected product parameter  
   **Expected Result:** The ‘Будет изменено более одной модификации’-message displays.

---

## Testcase 21V26

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Comparison page] Verify user can add several products to the comparison page

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;
- Open the catalogue;
- Go to any product page with different variants (e.g. any tires page);

### Steps / Expected Result
1. **Step:** Click on the ‘Добавить к сравнению’-link on the product page  
   **Expected Result:** The link’s name is changed to ‘Перейти к сравнению’; There is a (1)-badge next to the ‘Перейти к сравнению’-link.

2. **Step:** Click on any other product variant  
   **Expected Result:** The new product page is opened.

3. **Step:** Click on the ‘Добавить к сравнению’-link on the product page  
   **Expected Result:** The link’s name is changed to ‘Перейти к сравнению’; There is a (2)-badge next to the ‘Перейти к сравнению’-link.

4. **Step:** Click on the ‘Перейти к сравнению’-link  
   **Expected Result:** The …/compare/ page is opened; There is a table with two products and their parameters.

---

## Testcase 21V27

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Comparison page] Verify only differences between products can be displayed on the page

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;
- Open the catalogue;
- Add two products of the same category to the comparison;

### Steps / Expected Result
1. **Step:** Open the comparison page  
   **Expected Result:** The …/compare/ page is opened; There is a table with two products and their parameters.

2. **Step:** Click on the ‘Показать только отличия’-checkbox  
   **Expected Result:** Only not same parameters’ values display on the page.

---

## Testcase 21V28

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Main page] Verify user can open the job form using the footer menu

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;
- Scroll the page down to the footer;

### Steps / Expected Result
1. **Step:** In the ‘Компания’-menu, select the ‘Вакансии’-item  
   **Expected Result:** The /company/vacancies.html page is opened.

2. **Step:** Click on the ‘Оставить заявку’-button  
   **Expected Result:** User is redirected to the Google form page.

---

## Testcase 21V29

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Main page] Verify user can open company networks in the footer menu

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;
- Scroll the page down to the footer;

### Steps / Expected Result
1. **Step:** Click on the VK logo  
   **Expected Result:** The [https://vk.com/21vek_by](https://vk.com/21vek_by) page is opened in the new tab.

2. **Step:** Click on the Facebook logo  
   **Expected Result:** The [https://www.facebook.com/21vek.by/](https://www.facebook.com/21vek.by/) page is opened in the new tab.

3. **Step:** Click on other social media logos  
   **Expected Result:** The corresponding social media page is opened in the new tab.

---

## Testcase 21V30

- **Platform:** Desktop
- **Type:** Regression
- **Priority:** Medium
- **Automation status:** Ready for Automation

### Summary
[Main page] Verify user can scroll the homepage slider

### Pre-conditions
- Open the [21vek.by](https://www.21vek.by/) page;

### Steps / Expected Result
1. **Step:** Click on the scroll right button for the homepage banner  
   **Expected Result:** The next banner is displayed.

2. **Step:** Click on the scroll left button for the homepage banner  
   **Expected Result:** The previous banner is displayed.