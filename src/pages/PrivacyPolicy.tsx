const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background py-12 px-4">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-foreground mb-6">Политика конфиденциальности</h1>

      <div className="prose prose-sm text-foreground/90 space-y-4">
        <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта.</p>

        <h2 className="text-lg font-semibold mt-6">1. Общие положения</h2>
        <p>Оставляя заявку на сайте, вы даёте согласие на обработку ваших персональных данных в соответствии с настоящей Политикой.</p>

        <h2 className="text-lg font-semibold mt-6">2. Какие данные мы собираем</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Имя</li>
          <li>Номер телефона</li>
          <li>Предпочтительный способ связи</li>
          <li>Информация о заказе (товар, объём, комментарий)</li>
        </ul>

        <h2 className="text-lg font-semibold mt-6">3. Цели обработки данных</h2>
        <p>Персональные данные используются исключительно для:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Обработки заявок и связи с клиентами</li>
          <li>Предоставления информации о продукции и ценах</li>
          <li>Улучшения качества обслуживания</li>
        </ul>

        <h2 className="text-lg font-semibold mt-6">4. Защита данных</h2>
        <p>Мы принимаем все необходимые меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.</p>

        <h2 className="text-lg font-semibold mt-6">5. Передача данных третьим лицам</h2>
        <p>Мы не передаём персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством РФ.</p>

        <h2 className="text-lg font-semibold mt-6">6. Срок хранения данных</h2>
        <p>Персональные данные хранятся в течение срока, необходимого для выполнения целей обработки, после чего удаляются.</p>

        <h2 className="text-lg font-semibold mt-6">7. Права пользователя</h2>
        <p>Вы имеете право запросить удаление или изменение ваших персональных данных, обратившись к нам по контактным данным, указанным на сайте.</p>

        <h2 className="text-lg font-semibold mt-6">8. Контакты</h2>
        <p>По вопросам обработки персональных данных обращайтесь по телефону +7 (903) 957-45-77 или по электронной почте sofiakizilova23@mail.ru.</p>
      </div>

      <div className="mt-8">
        <a href="/" className="text-primary hover:underline font-medium">← Вернуться на главную</a>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
