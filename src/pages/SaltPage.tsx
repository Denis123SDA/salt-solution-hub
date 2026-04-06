import { useState } from "react";
import saltHero from "@/assets/salt-hero.jpg";
import saltMozyr from "@/assets/salt-mozyr.jpg";
import saltRussol from "@/assets/salt-russol.jpg";
import {
  Droplets, Flame, Factory, Waves, Car, Home, Building2,
  Package, Truck, Users, BadgePercent, Headphones, MapPin,
  CheckCircle2, Phone, MessageCircle, Send, ChevronRight,
} from "lucide-react";

const SaltPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", volume: "", comment: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Заявка на соль:\nИмя: ${form.name}\nТелефон: ${form.phone}\nОбъём: ${form.volume || "не указан"}\nКомментарий: ${form.comment || "—"}`;
    window.open(`https://wa.me/73852779823?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <span className="text-lg font-bold text-foreground">Севуч Плюс</span>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#products" className="hover:text-foreground transition-colors">Продукция</a>
            <a href="#advantages" className="hover:text-foreground transition-colors">Преимущества</a>
            <a href="#order" className="hover:text-foreground transition-colors">Как заказать</a>
            <a href="#contacts" className="hover:text-foreground transition-colors">Контакты</a>
          </nav>
          <a href="tel:+73852779823" className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Позвонить
          </a>
        </div>
      </header>

      {/* Block 1: Hero */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground">
              Таблетированная соль<br />
              <span className="text-accent-foreground">Мозырьсоль и Руссоль</span><br />
              в Барнауле
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Для водоочистки, котельных, производств, бассейнов и частных домов.
              Опт и розница. Всегда в наличии.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#form" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-base hover:brightness-105 transition-all shadow-lg">
                Получить цену
              </a>
              <a href="tel:+73852779823" className="border-2 border-foreground text-foreground px-8 py-4 rounded-full font-bold text-base hover:bg-foreground hover:text-background transition-all">
                Позвонить
              </a>
            </div>
            <p className="text-sm text-muted-foreground">Работаем с физическими и юридическими лицами</p>
          </div>
          <div className="relative">
            <img src={saltHero} alt="Таблетированная соль на складе" width={1920} height={1080} className="rounded-2xl shadow-2xl object-cover w-full aspect-[16/10]" />
          </div>
        </div>
      </section>

      {/* Block 2: Products */}
      <section id="products" className="bg-warm py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-foreground">Ассортимент</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mozyr */}
            <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <img src={saltMozyr} alt="Соль Мозырьсоль" loading="lazy" width={800} height={800} className="rounded-xl w-full aspect-square object-cover mb-5" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Таблетированная соль Мозырьсоль</h3>
              <p className="text-muted-foreground mb-3">
                Высококачественная соль для систем водоочистки и промышленного применения.
                Обеспечивает стабильную работу оборудования и эффективную регенерацию.
              </p>
              <p className="text-sm font-semibold mb-3 text-foreground">Фасовка: мешки 25 кг</p>
              <ul className="space-y-1.5 mb-5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Подходит для фильтров и умягчителей воды</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Используется в котельных и на производстве</li>
              </ul>
              <a href="#form" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:brightness-105 transition-all">
                Узнать цену <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            {/* Russol */}
            <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <img src={saltRussol} alt="Соль Руссоль" loading="lazy" width={800} height={800} className="rounded-xl w-full aspect-square object-cover mb-5" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Таблетированная соль Руссоль</h3>
              <p className="text-muted-foreground mb-3">
                Надёжный вариант для бытового и коммерческого использования.
                Оптимальное решение для систем очистки воды и регулярного применения.
              </p>
              <p className="text-sm font-semibold mb-3 text-foreground">Фасовка: мешки 25 кг</p>
              <ul className="space-y-1.5 mb-5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Для частных домов и бизнеса</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Подходит для различных систем водоочистки</li>
              </ul>
              <a href="#form" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:brightness-105 transition-all">
                Узнать цену <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Applications */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-foreground">Где применяется</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Droplets, label: "Системы водоочистки и умягчения воды" },
              { icon: Flame, label: "Котельные и теплоузлы" },
              { icon: Factory, label: "Промышленные предприятия" },
              { icon: Waves, label: "Бассейны и СПА-комплексы" },
              { icon: Car, label: "Автомойки" },
              { icon: Home, label: "Частные дома с системой фильтрации" },
              { icon: Building2, label: "Управляющие компании и ЖКХ" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center p-5 rounded-2xl bg-muted hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                  <Icon className="w-7 h-7 text-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 4: Advantages */}
      <section id="advantages" className="bg-warm py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-foreground">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Package, text: "Всегда в наличии на складе" },
              { icon: Truck, text: "Быстрая отгрузка" },
              { icon: Users, text: "Работаем с оптом и розницей" },
              { icon: BadgePercent, text: "Скидки при объёмах" },
              { icon: Headphones, text: "Помогаем подобрать под задачу" },
              { icon: Truck, text: "Самовывоз и доставка" },
              { icon: Users, text: "Гибкие условия для постоянных клиентов" },
              { icon: Phone, text: "Отдельный телефон для заказов по соли" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-start gap-3 bg-card p-5 rounded-xl">
                <Icon className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-foreground">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 5: Pricing */}
      <section className="py-16 md:py-24" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-primary-foreground">Условия и цена</h2>
          <p className="text-lg mb-2 text-primary-foreground/90">Стоимость зависит от объёма заказа и условий поставки.</p>
          <p className="text-lg mb-2 text-primary-foreground/90">Для постоянных клиентов действуют скидки и специальные условия.</p>
          <p className="text-lg mb-8 text-primary-foreground/90">Оставьте заявку — рассчитаем цену под ваш объём.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#form" className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity">
              Оставить заявку
            </a>
            <a href="#form" className="bg-card text-foreground px-8 py-4 rounded-full font-bold hover:shadow-lg transition-shadow">
              Получить прайс
            </a>
          </div>
        </div>
      </section>

      {/* Block 6: How to order */}
      <section id="order" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-foreground">Как заказать</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Оставляете заявку или звоните",
              "Уточняем задачу и объём",
              "Подбираем вариант и рассчитываем стоимость",
              "Согласовываем отгрузку или доставку",
            ].map((step, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-muted">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-black text-primary-foreground">{i + 1}</span>
                </div>
                <p className="text-sm font-medium text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 7: Contact Form */}
      <section id="form" className="bg-warm py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-foreground">Оставить заявку</h2>
          <p className="text-center text-muted-foreground mb-8">Свяжемся с вами в ближайшее время</p>
          <form onSubmit={handleSubmit} className="space-y-4 bg-card p-8 rounded-2xl shadow-lg">
            <input
              type="text"
              required
              placeholder="Ваше имя"
              value={form.name}
              onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
              className="w-full px-5 py-3.5 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="tel"
              required
              placeholder="Телефон"
              value={form.phone}
              onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
              className="w-full px-5 py-3.5 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="text"
              placeholder="Объём (необязательно)"
              value={form.volume}
              onChange={e => setForm(p => ({ ...p, volume: e.target.value }))}
              className="w-full px-5 py-3.5 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              placeholder="Комментарий"
              value={form.comment}
              onChange={e => setForm(p => ({ ...p, comment: e.target.value }))}
              rows={3}
              className="w-full px-5 py-3.5 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-base hover:brightness-105 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" /> Отправить заявку
            </button>
          </form>
        </div>
      </section>

      {/* Block 8: Contacts */}
      <section id="contacts" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-foreground">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Телефон для заказов</p>
                  <a href="tel:+73852779823" className="text-xl font-bold text-foreground hover:text-accent transition-colors">+7 (3852) 77-98-23</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MessageCircle className="w-6 h-6 text-accent mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <a href="https://wa.me/73852779823" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-foreground hover:text-accent transition-colors">Написать в WhatsApp</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Адрес офиса</p>
                  <p className="text-foreground font-medium">г. Барнаул, Ярных, 34, помещ. н3</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-auto">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=83.764884%2C53.346785&z=16&pt=83.764884%2C53.346785%2Cpm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта — Барнаул, Ярных 34"
                className="min-h-[256px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Block 9: SEO */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-sm text-muted-foreground max-w-none space-y-3">
            <p>
              Таблетированная соль — востребованный продукт для систем водоочистки, котельных, производственных предприятий и частного использования.
            </p>
            <p>
              У нас вы можете купить таблетированную соль Мозырьсоль и Руссоль в Барнауле с возможностью самовывоза или доставки.
            </p>
            <p>
              Работаем с оптовыми и розничными клиентами, предлагаем выгодные условия сотрудничества и стабильное наличие продукции на складе.
            </p>
            <p>
              Если вам нужна таблетированная соль для фильтров, умягчителей воды или промышленного использования — оставьте заявку или свяжитесь с нами по телефону.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center space-y-3">
          <p className="font-bold">Севуч Плюс</p>
          <p className="text-xs opacity-70">
            Стоимость продукции носит информационный характер и может изменяться в зависимости от объёма и условий поставки.
            Актуальная цена уточняется при обращении.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SaltPage;
