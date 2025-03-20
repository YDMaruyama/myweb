
import { Menu, X, Instagram, Youtube, Twitter, ChevronRight, Video, BarChart, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "SNS運用代行",
      icon: <Instagram className="w-6 h-6" />,
      description: "戦略的なコンテンツ作成と運用で、あなたのブランドの存在感を高めます。"
    },
    {
      title: "動画制作",
      icon: <Video className="w-6 h-6" />,
      description: "魅力的なショート動画の企画から編集まで、一貫してサポートします。"
    },
    {
      title: "分析・コンサルティング",
      icon: <BarChart className="w-6 h-6" />,
      description: "データに基づいた戦略立案で、確実な成果を実現します。"
    }
  ];

  const achievements = [
    {
      title: "地域企業のフォロワー数",
      value: "10,000+",
      description: "増加を達成"
    },
    {
      title: "動画再生回数",
      value: "100万+",
      description: "月間達成"
    },
    {
      title: "顧客満足度",
      value: "98%",
      description: "以上を維持"
    }
  ];

  const snsProfiles = [
    {
      platform: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      profileImage: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80",
      handle: "@cafe_sakura",
      achievement: "フォロワー数 5,000→50,000",
      description: "地元カフェの魅力を発信し、若年層の集客に成功"
    },
    {
      platform: "Youtube",
      icon: <Youtube className="w-5 h-5" />,
      profileImage: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80",
      handle: "@tech_innovate",
      achievement: "月間再生数 100万回達成",
      description: "製品紹介動画で認知度向上・問い合わせ増加"
    },
    {
      platform: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      profileImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80",
      handle: "@local_market",
      achievement: "エンゲージメント率 15%",
      description: "地域特産品の魅力発信でEC売上200%増"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                SNS Pro
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary-600 transition-colors">サービス</a>
              <a href="#achievements" className="text-gray-600 hover:text-primary-600 transition-colors">実績</a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">お問い合わせ</a>
              <a 
                href="https://app.aitemasu.me/u/unszzmm2/meeting" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                無料相談
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-primary-600 transition-colors">サービス</a>
              <a href="#achievements" className="block px-3 py-2 text-gray-600 hover:text-primary-600 transition-colors">実績</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-primary-600 transition-colors">お問い合わせ</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-white via-primary-50 to-white pt-16 pb-32 overflow-hidden">
        <div className="mt-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
              <div className="animate-fade-in">
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:text-6xl lg:mt-6">
                  <span className="block animate-slide-up">SNSで</span>
                  <span className="block text-primary-600 animate-slide-up delay-100">ビジネスを加速する</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl animate-slide-up delay-200">
                  佐野市を中心に、SNS運用代行・動画制作のプロフェッショナルサービスを提供。
                  あなたのビジネスのデジタルプレゼンスを最大化します。
                </p>
                <div className="mt-8 sm:mt-12 animate-slide-up delay-300">
                  <a 
                    href="https://app.aitemasu.me/u/unszzmm2/meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary group"
                  >
                    無料相談を予約する
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
              <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-xl sm:overflow-hidden shadow-xl animate-fade-in">
                <img
                  src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80"
                  alt="Social Media Management"
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">サービス内容</h2>
            <p className="section-subtitle">
              あなたのビジネスに最適なSNSソリューションを提供します
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="pt-6 px-6 pb-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale"
                >
                  <div className="text-primary-600">{service.icon}</div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-500">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div id="achievements" className="py-24 bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">実績</h2>
            <p className="section-subtitle">
              数字で見る私たちの成果
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale"
                >
                  <p className="text-5xl font-extrabold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                    {achievement.value}
                  </p>
                  <p className="mt-2 text-xl font-medium text-gray-900">
                    {achievement.title}
                  </p>
                  <p className="mt-1 text-gray-500">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SNS Profile Cards */}
          <div className="mt-24">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">運用実績</h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {snsProfiles.map((profile, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={profile.profileImage}
                        alt={`${profile.platform} Profile`}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
                        <div className="text-primary-600">
                          {profile.icon}
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{profile.handle}</p>
                      <p className="text-primary-600 font-semibold">{profile.achievement}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{profile.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">お問い合わせ</h2>
            <p className="section-subtitle">
              まずは無料相談からはじめませんか？
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 hover-scale">
                <h3 className="text-xl font-medium text-gray-900">お電話でのお問い合わせ</h3>
                <p className="mt-4 text-gray-500">
                  平日 9:00 - 18:00
                </p>
                <div className="mt-4 flex items-center">
                  <Phone className="h-6 w-6 text-primary-600" />
                  <span className="ml-2 text-xl font-medium text-gray-900">0123-456-789</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 hover-scale">
                <h3 className="text-xl font-medium text-gray-900">メールでのお問い合わせ</h3>
                <p className="mt-4 text-gray-500">
                  24時間受付中
                </p>
                <div className="mt-4 flex items-center">
                  <MessageCircle className="h-6 w-6 text-primary-600" />
                  <span className="ml-2 text-xl font-medium text-gray-900">info@example.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2025 SNS Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;