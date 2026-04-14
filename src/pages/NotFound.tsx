import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 — Страница не найдена | Севуч Плюс";
    const metaDesc = document.querySelector('meta[name="description"]');
    const previousDescription = metaDesc?.getAttribute("content") ?? "";

    metaDesc?.setAttribute(
      "content",
      "Страница не найдена. Вернитесь на главную страницу сайта Севуч Плюс."
    );

    return () => {
      document.title = "Таблетированная соль Мозырьсоль и Руссоль в Барнауле и Кемерово | Севуч Плюс";
      if (metaDesc) metaDesc.setAttribute("content", previousDescription);
    };
  }, []);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-background px-4 py-16 flex items-center justify-center">
      <section className="w-full max-w-2xl rounded-3xl border border-border bg-card p-8 md:p-12 text-center shadow-2xl">
        <span className="inline-flex rounded-full bg-primary/15 px-4 py-2 text-sm font-black tracking-[0.18em] text-foreground">
          404
        </span>
        <h1 className="mt-5 text-4xl md:text-6xl font-black text-foreground leading-none">
          Страница не найдена
        </h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
          Проверьте адрес страницы или вернитесь на главную. Если вы открыли старую ссылку, нужный раздел мог быть перенесён.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground hover:bg-primary/90 transition-colors w-full sm:w-auto"
          >
            На главную
          </Link>
          <Link
            to="/privacy"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-bold text-foreground hover:bg-muted transition-colors w-full sm:w-auto"
          >
            Политика
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
