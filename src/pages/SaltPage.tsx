import { useState } from "react";
import saltHero from "@/assets/salt-hero-generated.png";
import warehouseImg from "@/assets/warehouse.png";
import saltMozyr from "@/assets/salt-mozyr.jpg";
import saltRussol from "@/assets/salt-russol.jpg";
import logoImg from "@/assets/logo.png";
import deliveryTruckImg from "@/assets/delivery-truck.png";
import warehouseBgImg from "@/assets/warehouse-bg.png";
import {
  Droplets, Flame, Factory, Waves, Home, Building2,
  Package, Truck, Users, BadgePercent, Headphones, MapPin,
  CheckCircle2, Phone, MessageCircle, Send, ChevronRight,
  ShieldCheck, Clock, Award, Menu, X,
} from "lucide-react";

/* Reusable decorative salt tablets */
const SaltTablets = ({ tablets }: { tablets: { size: number; top?: string; bottom?: string; left?: string; right?: string; className: string; opacity?: number }[] }) => (
  <>
    {tablets.map((t, i) => (
      <div
        key={i}
        className={`salt-tablet ${t.className}`}
        style={{
          width: t.size, height: t.size * 0.45,
          top: t.top, bottom: t.bottom, left: t.left, right: t.right,
          opacity: t.opacity ?? 0.5,
          borderRadius: '50%',
        }}
      />
    ))}
  </>
);

const SaltPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", volume: "", comment: "" });
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Заявка на соль:\nИмя: ${form.name}\nТелефон: ${form.phone}\nОбъём: ${form.volume || "не указан"}\nКомментарий: ${form.comment || "—"}`;
    window.open(`https://wa.me/79235690767?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const navLinks = [
    { href: "#products", label: "Продукция" },
    { href: "#applications", label: "Применение" },
    { href: "#advantages", label: "Преимущества" },
    { href: "#order", label: "Как заказать" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ===== TOP BAR ===== */}
      <div className="hidden md:block bg-foreground text-foreground/60 py-2">
        <div className="container mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-background/60">
            <MapPin className="w-3.5 h-3.5" />
            <span>г. Барнаул, ул. Ярных, 34, помещ. н3</span>
          </div>
          <a href="tel:+79235690767" className="text-background/60 hover:text-primary transition-colors font-medium">+7 (923) 569-07-67</a>
        </div>
      </div>

      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 pt-3 px-4 md:px-8">
        <div className="container mx-auto bg-muted/80 backdrop-blur-xl rounded-full border border-border/50 shadow-lg px-4 md:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <img src={logoImg} alt="Севуч Плюс" className="w-10 h-10 object-contain" />
          </div>
          <nav className="hidden md:flex gap-7 text-sm font-semibold text-foreground">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="hover:text-primary transition-colors py-1 border-b-2 border-transparent hover:border-primary">{l.label}</a>
            ))}
          </nav>
          <a href="#form" className="hidden md:inline-flex bg-foreground text-background px-6 py-2.5 rounded-full text-sm font-bold hover:bg-foreground/85 transition-colors">
            Оставить заявку
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-foreground">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-2 mx-auto container bg-muted/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-lg py-4 px-6">
            <div className="flex flex-col gap-3">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-foreground py-2">{l.label}</a>
              ))}
              <a href="#form" className="bg-foreground text-background px-5 py-3 rounded-full text-sm font-bold text-center mt-2">
                Оставить заявку
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section className="py-16 md:py-24 lg:py-28 relative overflow-hidden">
        <SaltTablets tablets={[
          { size: 80, top: '8%', left: '2%', className: 'salt-float-1', opacity: 0.55 },
          { size: 46, top: '20%', right: '5%', className: 'salt-float-2', opacity: 0.5 },
          { size: 110, bottom: '12%', left: '6%', className: 'salt-float-3', opacity: 0.35 },
          { size: 58, bottom: '28%', right: '2%', className: 'salt-float-4', opacity: 0.5 },
          { size: 36, top: '55%', left: '42%', className: 'salt-float-5', opacity: 0.45 },
          { size: 28, top: '15%', left: '35%', className: 'salt-float-2', opacity: 0.45 },
          { size: 86, top: '70%', right: '8%', className: 'salt-float-3', opacity: 0.3 },
          { size: 22, top: '40%', left: '15%', className: 'salt-float-1', opacity: 0.55 },
          { size: 64, bottom: '5%', right: '15%', className: 'salt-float-5', opacity: 0.38 },
          { size: 26, top: '5%', right: '20%', className: 'salt-float-4', opacity: 0.5 },
        ]} />
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-7">
              <div>
                <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Поставщик в Барнауле</p>
                <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] font-black leading-[1.12] text-foreground">
                  Таблетированная соль Мозырьсоль и&nbsp;Руссоль
                </h1>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
                Для водоочистки, котельных, производств и частного использования
              </p>
              <ul className="space-y-3">
                {[
                  "Всегда в наличии на складе",
                  "Мешки 25 кг",
                  "Опт и розница",
                  "Самовывоз и доставка",
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-foreground/90">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 pt-1">
                <a href="#form" className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold text-base hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
                  Получить цену
                </a>
                <a href="tel:+79235690767" className="border border-foreground/30 text-foreground px-8 py-4 rounded-md font-bold text-base hover:bg-foreground/10 transition-colors">
                  Позвонить
                </a>
              </div>
              <p className="text-sm text-foreground/50 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Работаем с физическими и юридическими лицами
              </p>
            </div>
            <div className="relative">
              <img
                src={saltHero}
                alt="Таблетированная соль Мозырьсоль и Руссоль"
                width={1920}
                height={1080}
                className="rounded-2xl shadow-2xl object-cover w-full"
              />
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-5 py-3 rounded-md shadow-lg">
                <p className="text-2xl font-black">25 кг</p>
                <p className="text-xs opacity-80">мешок</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <section className="py-10 md:py-14 relative overflow-hidden">
        <SaltTablets tablets={[
          { size: 40, top: '10%', left: '5%', className: 'salt-float-1', opacity: 0.45 },
          { size: 30, top: '20%', right: '8%', className: 'salt-float-3', opacity: 0.5 },
          { size: 52, bottom: '15%', left: '50%', className: 'salt-float-5', opacity: 0.35 },
          { size: 24, bottom: '25%', right: '15%', className: 'salt-float-2', opacity: 0.48 },
        ]} />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "25 кг", label: "фасовка мешков", icon: Package },
              { value: "В наличии", label: "всегда на складе", icon: CheckCircle2 },
              { value: "Опт / розница", label: "любые объёмы", icon: BadgePercent },
              { value: "Барнаул", label: "офис и склад", icon: MapPin },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="group relative bg-card rounded-xl border border-border p-6 text-center transition-all duration-300 hover:shadow-lg hover:border-primary/40 hover:-translate-y-1">
                <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={2.5} />
                </div>
                <p className="text-xl font-black text-foreground">{value}</p>
                <p className="text-sm text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section id="products" className="py-20 md:py-28 relative overflow-hidden">
        <SaltTablets tablets={[
          { size: 96, top: '4%', right: '3%', className: 'salt-float-2', opacity: 0.4 },
          { size: 52, top: '35%', left: '2%', className: 'salt-float-4', opacity: 0.5 },
          { size: 76, bottom: '8%', right: '5%', className: 'salt-float-1', opacity: 0.38 },
          { size: 40, bottom: '20%', left: '5%', className: 'salt-float-3', opacity: 0.48 },
          { size: 32, top: '15%', left: '45%', className: 'salt-float-5', opacity: 0.42 },
          { size: 60, top: '60%', right: '12%', className: 'salt-float-2', opacity: 0.35 },
          { size: 26, top: '75%', left: '10%', className: 'salt-float-4', opacity: 0.52 },
          { size: 70, bottom: '35%', right: '20%', className: 'salt-float-1', opacity: 0.3 },
        ]} />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Каталог</p>
            <h2 className="text-3xl md:text-[36px] font-black text-foreground">Ассортимент продукции</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                img: saltMozyr,
                alt: "Соль Мозырьсоль",
                name: "Мозырьсоль",
                subtitle: "Таблетированная соль Мозырьсоль (Беларусь)",
                desc: "Решение для объектов с постоянной нагрузкой: котельные, производственные линии, системы водоподготовки.",
                features: [
                  "Стабильное качество от партии к партии",
                  "Равномерная растворимость без образования осадка",
                  "Минимальная нагрузка на оборудование",
                  "Подходит для непрерывной эксплуатации",
                ],
                packing: "Фасовка: мешки 25 кг",
                usage: "Используется на предприятиях и в коммерческих системах водоочистки",
                cta: "Запросить оптовую цену",
              },
              {
                img: saltRussol,
                alt: "Соль Руссоль",
                name: "Руссоль",
                subtitle: "Таблетированная соль Руссоль (Россия)",
                desc: "Практичное решение для регулярного использования в системах водоочистки и обслуживаемых объектах.",
                features: [
                  "Стабильная работа в стандартных условиях",
                  "Оптимальный вариант по стоимости",
                  "Подходит для большинства систем умягчения воды",
                  "Постоянное наличие на складе",
                ],
                packing: "Фасовка: мешки 25 кг",
                usage: "Используется в ЖКХ, частных и коммерческих объектах",
                cta: "Запросить цену",
              },
            ].map(product => (
              <div key={product.name} className="border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow group flex flex-col">
                <div className="aspect-square overflow-hidden bg-card flex items-center justify-center p-8">
                  <img src={product.img} alt={product.alt} loading="lazy" width={800} height={800} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-1 text-foreground">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3 italic">{product.subtitle}</p>
                  <p className="text-muted-foreground mb-5 leading-relaxed">{product.desc}</p>
                  <ul className="space-y-2.5 mb-4 flex-1">
                    {product.features.map(item => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mb-1">{product.packing}</p>
                  <p className="text-sm text-primary font-medium mb-6">{product.usage}</p>
                  <a href="#form" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-colors w-full">
                    {product.cta} <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Help CTA */}
          <div className="mt-14 text-center">
            <p className="text-muted-foreground text-lg">
              Не уверены, какая соль подойдёт? <a href="#form" className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80">Подберём под вашу систему и объём</a>.
            </p>
          </div>
        </div>
      </section>

      {/* ===== APPLICATIONS ===== */}
      <section id="applications" className="bg-section-alt py-20 md:py-28 rounded-3xl mx-4 md:mx-8 my-4 relative overflow-hidden">
        <SaltTablets tablets={[
          { size: 54, top: '8%', left: '4%', className: 'salt-float-2', opacity: 0.3 },
          { size: 80, bottom: '10%', right: '5%', className: 'salt-float-4', opacity: 0.25 },
          { size: 36, top: '50%', right: '3%', className: 'salt-float-1', opacity: 0.38 },
          { size: 46, bottom: '30%', left: '8%', className: 'salt-float-5', opacity: 0.35 },
          { size: 26, top: '20%', right: '15%', className: 'salt-float-3', opacity: 0.42 },
        ]} />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Сферы применения</p>
            <h2 className="text-3xl md:text-[36px] font-black text-foreground">Где используется таблетированная соль</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {[
              { icon: Droplets, label: "Водоочистка" },
              { icon: Flame, label: "Котельные" },
              { icon: Factory, label: "Производство" },
              { icon: Waves, label: "Бассейны" },
              { icon: Building2, label: "ЖКХ" },
              { icon: Home, label: "Частные дома" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md hover:border-primary/40 transition-all">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADVANTAGES ===== */}
      <section id="advantages" className="py-20 md:py-28 relative overflow-hidden">
        <SaltTablets tablets={[
          { size: 70, top: '6%', left: '4%', className: 'salt-float-3', opacity: 0.42 },
          { size: 90, bottom: '10%', right: '2%', className: 'salt-float-1', opacity: 0.35 },
          { size: 48, top: '45%', right: '6%', className: 'salt-float-5', opacity: 0.5 },
          { size: 32, top: '20%', left: '40%', className: 'salt-float-2', opacity: 0.42 },
          { size: 58, bottom: '30%', left: '3%', className: 'salt-float-4', opacity: 0.38 },
          { size: 28, top: '70%', right: '15%', className: 'salt-float-1', opacity: 0.48 },
          { size: 42, top: '12%', right: '25%', className: 'salt-float-3', opacity: 0.35 },
        ]} />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Преимущества</p>
            <h2 className="text-3xl md:text-[36px] font-black text-foreground">Почему выбирают нас</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Package, title: "Всегда в наличии", text: "Стабильные запасы на складе в Барнауле" },
              { icon: Clock, title: "Быстрая отгрузка", text: "Отгрузка в день обращения при наличии" },
              { icon: BadgePercent, title: "Скидки при объёмах", text: "Выгодные условия для оптовых покупателей" },
              { icon: Truck, title: "Самовывоз и доставка", text: "Удобные варианты получения товара" },
              { icon: Users, title: "Опт и розница", text: "Работаем с любыми объёмами заказов" },
              { icon: Headphones, title: "Подбор под задачу", text: "Подскажем оптимальный вариант" },
              { icon: ShieldCheck, title: "Проверенные бренды", text: "Мозырьсоль и Руссоль — лидеры рынка" },
              { icon: Award, title: "Гибкие условия", text: "Индивидуальный подход для постоянных клиентов" },
            ].map(({ icon: Icon, title, text }, i) => (
              <div key={i} className="border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-1.5 text-base">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST / ABOUT ===== */}
      <section className="bg-section-alt py-20 md:py-28 rounded-3xl mx-4 md:mx-8 my-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">О компании</p>
              <h2 className="text-3xl md:text-[36px] font-black text-foreground mb-6 leading-tight">Надёжный поставщик таблетированной соли в&nbsp;Барнауле</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                <p>
                  Компания «Севуч Плюс» — поставщик таблетированной соли для предприятий, котельных, систем водоочистки
                  и частных клиентов в Барнауле и Алтайском крае.
                </p>
                <p>
                  Мы работаем напрямую с производителями Мозырьсоль и Руссоль, что гарантирует стабильное качество
                  и конкурентные цены. Продукция всегда в наличии на нашем складе.
                </p>
                <p>
                  Работаем с физическими и юридическими лицами, предлагаем оптовые и розничные поставки
                  с возможностью доставки или самовывоза.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { val: "2", sub: "бренда в наличии" },
                  { val: "25 кг", sub: "фасовка мешков" },
                  { val: "∞", sub: "запас на складе" },
                ].map(s => (
                  <div key={s.sub} className="text-center p-4 bg-card border border-border rounded-lg">
                    <p className="text-2xl font-black text-primary">{s.val}</p>
                    <p className="text-xs text-muted-foreground mt-1">{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <img src={warehouseImg} alt="Склад таблетированной соли" loading="lazy" className="rounded-lg w-full aspect-[4/3] object-cover shadow-lg" />
              <p className="text-sm text-muted-foreground text-center">Наш склад в Барнауле — продукция всегда в наличии</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW TO ORDER ===== */}
      <section id="order" className="py-20 md:py-28 relative overflow-hidden">
        <SaltTablets tablets={[
          { size: 62, top: '12%', right: '4%', className: 'salt-float-2', opacity: 0.48 },
          { size: 86, bottom: '18%', left: '3%', className: 'salt-float-4', opacity: 0.38 },
          { size: 38, top: '40%', left: '7%', className: 'salt-float-1', opacity: 0.52 },
          { size: 68, top: '8%', left: '30%', className: 'salt-float-5', opacity: 0.3 },
          { size: 28, bottom: '35%', right: '10%', className: 'salt-float-3', opacity: 0.5 },
          { size: 48, bottom: '8%', right: '25%', className: 'salt-float-2', opacity: 0.35 },
        ]} />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Процесс</p>
            <h2 className="text-3xl md:text-[36px] font-black text-foreground">Как заказать</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Заявка или звонок", text: "Оставьте заявку на сайте или позвоните нам" },
              { step: "02", title: "Уточнение объёма", text: "Обсуждаем вашу задачу и нужный объём" },
              { step: "03", title: "Расчёт стоимости", text: "Подбираем вариант и рассчитываем цену" },
              { step: "04", title: "Отгрузка", text: "Забираете самовывозом или организуем доставку" },
            ].map(({ step, title, text }) => (
              <div key={step} className="border border-border rounded-lg p-8 text-center hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-5">
                  <span className="text-lg font-black">{step}</span>
                </div>
                <h3 className="font-bold text-foreground mb-2 text-base">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DELIVERY ===== */}
      <section className="py-10 md:py-16 px-4 md:px-8">
        <div className="container mx-auto rounded-3xl overflow-hidden relative">
          {/* Left beige bg that covers ~55% */}
          <div className="absolute inset-y-0 left-0 w-[55%] bg-[hsl(var(--muted))] rounded-3xl" />
          {/* Right warehouse bg */}
          <div className="absolute inset-y-0 right-0 w-[50%] overflow-hidden rounded-r-3xl">
            <img src={warehouseBgImg} alt="" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="grid md:grid-cols-2 items-center relative z-10">
            <div className="p-10 md:p-14 bg-[hsl(var(--muted))] md:bg-transparent rounded-3xl md:rounded-none">
              <h2 className="text-3xl md:text-[40px] font-black text-foreground leading-tight mb-6">
                Условия доставки<br />и самовывоза
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Мы осуществляем доставку по всей территории России с помощью автомобильных и железнодорожных перевозок.
                Также возможен самовывоз со складов в Барнауле — это удобно и экономит ваше время. Условия доставки обсуждаются индивидуально.
              </p>
              <a href="#form" className="inline-flex items-center bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-foreground/85 transition-colors">
                Подробнее
              </a>
            </div>
            <div className="relative flex items-center justify-center py-6 md:py-0">
              <img src={deliveryTruckImg} alt="Доставка таблетированной соли" loading="lazy" width={960} height={640} className="relative z-10 w-full max-w-[480px] object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FORM ===== */}
      <section id="form" className="bg-section-dark py-20 md:py-28 rounded-3xl mx-4 md:mx-8 my-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Бесплатная консультация</p>
              <h2 className="text-3xl md:text-[36px] font-black text-foreground mb-4">Оставить заявку</h2>
              <p className="text-lg text-foreground/70">Оставьте заявку — рассчитаем стоимость под ваш объём</p>
            </div>
            <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 md:p-10 shadow-2xl space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Имя *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Телефон *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Объём</label>
                <input
                  type="text"
                  placeholder="Например: 10 мешков, 1 тонна"
                  value={form.volume}
                  onChange={e => setForm(p => ({ ...p, volume: e.target.value }))}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Комментарий</label>
                <textarea
                  placeholder="Расскажите о вашей задаче"
                  value={form.comment}
                  onChange={e => setForm(p => ({ ...p, comment: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-md font-bold text-base hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
              >
                <Send className="w-5 h-5" /> Отправить заявку
              </button>
              <p className="text-xs text-muted-foreground text-center">Заявка отправляется в WhatsApp — мы ответим быстро</p>
            </form>
          </div>
        </div>
      </section>

      {/* ===== CONTACTS ===== */}
      <section id="contacts" className="py-20 md:py-28 relative overflow-hidden">
        <SaltTablets tablets={[
          { size: 74, top: '8%', left: '2%', className: 'salt-float-5', opacity: 0.42 },
          { size: 54, bottom: '12%', right: '3%', className: 'salt-float-2', opacity: 0.5 },
          { size: 32, top: '50%', left: '45%', className: 'salt-float-1', opacity: 0.38 },
          { size: 46, top: '25%', right: '10%', className: 'salt-float-4', opacity: 0.48 },
          { size: 26, bottom: '30%', left: '12%', className: 'salt-float-3', opacity: 0.5 },
        ]} />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Связаться</p>
            <h2 className="text-3xl md:text-[36px] font-black text-foreground">Контакты</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 border border-border rounded-lg bg-card">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Телефон для заказов</p>
                  <a href="tel:+79235690767" className="text-xl font-bold text-foreground hover:text-primary transition-colors">+7 (923) 569-07-67</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 border border-border rounded-lg bg-card">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                  <a href="https://wa.me/79235690767" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">Написать в WhatsApp</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 border border-border rounded-lg bg-card">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Адрес офиса и склада</p>
                  <p className="text-foreground font-semibold">г. Барнаул, ул. Ярных, 34, помещ. н3</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-border h-80 md:h-auto">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=83.764884%2C53.346785&z=16&pt=83.764884%2C53.346785%2Cpm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта — Барнаул, Ярных 34"
                className="min-h-[320px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEO TEXT ===== */}
      <section className="bg-section-alt py-16 rounded-3xl mx-4 md:mx-8 my-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-sm text-muted-foreground max-w-none space-y-4 leading-relaxed">
            <p>
              Таблетированная соль — востребованный продукт для систем водоочистки, котельных, производственных предприятий и частного использования.
              Основное назначение — регенерация ионообменных смол в системах умягчения и фильтрации воды.
            </p>
            <p>
              У нас вы можете купить таблетированную соль Мозырьсоль и Руссоль в Барнауле с возможностью самовывоза или доставки.
              Мы предлагаем продукцию проверенных производителей, которая соответствует всем стандартам качества.
            </p>
            <p>
              Работаем с оптовыми и розничными клиентами, предлагаем выгодные условия сотрудничества и стабильное наличие продукции на складе.
              Если вам нужна таблетированная соль для фильтров, умягчителей воды или промышленного использования — оставьте заявку или свяжитесь с нами по телефону.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#1a1a1a] text-white pt-14 pb-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
            {/* Column 1: Logo + Contacts */}
            <div className="flex flex-col gap-6">
              <img src={logoImg} alt="Севуч Плюс" className="w-24 h-24 object-contain brightness-0 invert" />

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-yellow-400 text-sm mb-1">Адрес офиса:</p>
                  <p className="font-bold">656011, г. Барнаул,<br/>ул. Ярных, 34, пом. Н3</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-yellow-400 text-sm mb-1">Телефон:</p>
                  <a href="tel:+79235690767" className="font-bold hover:text-yellow-400 transition-colors">+7 (923) 569-07-67</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Send className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-yellow-400 text-sm mb-1">Email:</p>
                  <a href="mailto:sevuch@krupa22.ru" className="font-bold hover:text-yellow-400 transition-colors">sevuch@krupa22.ru</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Home className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-yellow-400 text-sm mb-1">Склады:</p>
                  <p className="font-bold">ул. Ярных, 34<br/>ул. Аносова, 2а</p>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="flex flex-col gap-4">
              {[
                { href: "#about", label: "О компании" },
                { href: "#products", label: "Продукция" },
                { href: "#production", label: "Производство" },
                { href: "#price", label: "Прайс-лист" },
                { href: "#export", label: "Экспорт" },
                { href: "#contacts", label: "Контакты" },
              ].map(link => (
                <a key={link.href} href={link.href} className="text-white font-semibold hover:text-yellow-400 transition-colors text-lg">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Column 3: CTA */}
            <div className="flex flex-col items-start md:items-end justify-start">
              <a
                href="#form"
                className="bg-yellow-400 text-black font-bold text-lg px-10 py-5 rounded-full hover:bg-yellow-300 transition-colors"
              >
                Написать нам
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/50">
            <span>Copyright © 2018 - 2025</span>
            <span>Политика конфиденциальности</span>
            <div className="text-right">
              <p>Пн–Пт с 9:00 до 17:00</p>
              <p>Сб–Вс – выходной</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SaltPage;
