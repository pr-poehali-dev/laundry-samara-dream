import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" size={24} className="text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">ЧистоПром</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Прайс
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                🏭 Промышленная прачечная
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Профессиональная стирка
                <span className="text-blue-600 block">постельного белья</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                Специализируемся на стирке простыней, пододеяльников и крупных текстильных изделий. 
                Самая низкая цена в Самаре — всего 100₽ за килограмм.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => scrollToSection('contacts')}
                >
                  Заказать стирку
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('pricing')}
                >
                  Узнать цены
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img 
                  src="/img/b6f7fc4a-f2a4-4c98-9821-581a7fa6724e.jpg" 
                  alt="Промышленная прачечная"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">100₽</div>
                <div className="text-sm opacity-90">за килограмм</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Профессиональная стирка крупного текстиля с использованием современного оборудования
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Bed" size={32} className="text-blue-600 mb-2" />
                <CardTitle>Постельное белье</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Стирка простыней, пододеяльников, наволочек любых размеров
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Sofa" size={32} className="text-blue-600 mb-2" />
                <CardTitle>Покрывала и пледы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Деликатная стирка покрывал, пледов и других крупных изделий
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Shirt" size={32} className="text-blue-600 mb-2" />
                <CardTitle>Скатерти и шторы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Профессиональная стирка скатертей, штор и других текстильных изделий
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Droplets" size={32} className="text-blue-600 mb-2" />
                <CardTitle>Экологичная стирка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Используем безопасные моющие средства, безвредные для здоровья
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Clock" size={32} className="text-blue-600 mb-2" />
                <CardTitle>Быстрая обработка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Стирка и сушка в течение 24 часов, экспресс-обработка доступна
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Truck" size={32} className="text-blue-600 mb-2" />
                <CardTitle>Доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Забираем и доставляем по Самаре, удобное время для вас
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Цены</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Самые низкие цены в Самаре на профессиональную стирку крупного текстиля
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="text-center text-2xl">Прайс-лист</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-200">
                  <div className="p-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Стирка постельного белья</h3>
                      <p className="text-gray-600">Простыни, пододеяльники, наволочки</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">100₽</div>
                      <div className="text-sm text-gray-500">за килограмм</div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Покрывала и пледы</h3>
                      <p className="text-gray-600">Деликатная стирка крупных изделий</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">100₽</div>
                      <div className="text-sm text-gray-500">за килограмм</div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Скатерти и шторы</h3>
                      <p className="text-gray-600">Профессиональная стирка текстиля</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">100₽</div>
                      <div className="text-sm text-gray-500">за килограмм</div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex justify-between items-center bg-blue-50">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Доставка по Самаре</h3>
                      <p className="text-gray-600">Забираем и доставляем</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">Бесплатно</div>
                      <div className="text-sm text-gray-500">при заказе от 5 кг</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <Card className="text-center border-gray-100">
                <CardContent className="pt-6">
                  <Icon name="Shield" size={32} className="text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Гарантия качества</h3>
                  <p className="text-sm text-gray-600">Перестираем бесплатно, если результат не устроит</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-gray-100">
                <CardContent className="pt-6">
                  <Icon name="Heart" size={32} className="text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Деликатный уход</h3>
                  <p className="text-sm text-gray-600">Используем профессиональные средства для разных типов тканей</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-gray-100">
                <CardContent className="pt-6">
                  <Icon name="Zap" size={32} className="text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Быстро и удобно</h3>
                  <p className="text-sm text-gray-600">Готово за 24 часа, забираем и доставляем по адресу</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы находимся в Самаре и готовы принять ваш заказ
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="MapPin" size={24} className="text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Адрес</h3>
                      <p className="text-gray-600">г. Самара, ул. Промышленная, 15</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Phone" size={24} className="text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Телефон</h3>
                      <p className="text-gray-600">+7 (846) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Clock" size={24} className="text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Режим работы</h3>
                      <p className="text-gray-600">Пн-Пт: 8:00 - 18:00</p>
                      <p className="text-gray-600">Сб: 9:00 - 16:00</p>
                      <p className="text-gray-600">Вс: выходной</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Mail" size={24} className="text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">info@chistoprom-samara.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Как мы работаем</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Заявка</h4>
                    <p className="text-gray-600 text-sm">Позвоните нам или оставьте заявку</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Забор</h4>
                    <p className="text-gray-600 text-sm">Приедем и заберем ваши вещи</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Стирка</h4>
                    <p className="text-gray-600 text-sm">Профессиональная стирка и сушка</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Доставка</h4>
                    <p className="text-gray-600 text-sm">Доставим чистые вещи обратно</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Заказать стирку
                  <Icon name="Phone" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Sparkles" size={24} className="text-blue-400" />
              <span className="text-xl font-bold">ЧистоПром</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 ЧистоПром. Все права защищены.</p>
              <p className="text-gray-400">Промышленная прачечная в Самаре</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}