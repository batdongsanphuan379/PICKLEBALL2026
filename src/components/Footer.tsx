import { Shield, Sparkles, MessageCircle, PhoneCall, HelpCircle, MapPin, Award } from 'lucide-react';

interface FooterProps {
  onBackToFormClick: () => void;
}

export default function Footer({ onBackToFormClick }: FooterProps) {
  return (
    <footer id="footer" className="bg-slate-950 text-slate-400 border-t border-slate-900 py-16 px-4 relative overflow-hidden">
      {/* Decorative light reflection */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-lime-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand/Slogan column (4 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-lime-400 text-slate-950 rounded-lg">
                <Award className="w-5 h-5" />
              </span>
              <span className="text-xl font-display font-black tracking-tight text-white uppercase">
                JOHNNY TRÍ <span className="text-lime-400">PICKLEBALL</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed font-sans max-w-sm">
              Khóa huấn luyện chuyên đề Pickleball hè 2026. Học vui - Khỏe mạnh - Kết nối đam mê và đồng bộ kĩ thuật đỉnh cao cùng huấn luyện viên thực chiến.
            </p>

            <div className="pt-2 flex flex-col space-y-2.5 text-xs text-slate-500 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-lime-400" />
                <span>Hệ thống cụm sân tập hiện đại bậc nhất khu vực</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-sky-400" />
                <span>Giấy chứng nhận chuẩn cơ bản & nâng cao xuất sắc</span>
              </div>
            </div>
          </div>

          {/* Quick links (3 cols) */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest">ĐIỀU HƯỚNG NHANH</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-lime-400 transition-colors">Trang chủ / Đầu trang</a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-lime-400 transition-colors">4 Lợi ích vàng</a>
              </li>
              <li>
                <a href="#tactics" className="hover:text-lime-400 transition-colors">Bản đồ Chiến thuật Pro</a>
              </li>
              <li>
                <a href="#audience" className="hover:text-lime-400 transition-colors font-semibold">Ai nên tham gia học?</a>
              </li>
            </ul>
          </div>

          {/* Contact direct hotline (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest">LIÊN HỆ TRỰC TIẾP</h4>
            
            <div className="space-y-3">
              <a 
                id="footer-call-btn"
                href="tel:0945656766"
                className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-3.5 rounded-2xl hover:border-lime-400/50 hover:bg-slate-850 transition-all text-white font-semibold cursor-pointer group"
              >
                <div className="p-2.5 bg-lime-400 text-slate-950 rounded-xl group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-4.5 h-4.5" />
                </div>
                <div className="text-left font-display">
                  <span className="block text-[10px] text-slate-500 uppercase tracking-widest">Gọi Điện Thoại</span>
                  <span className="block text-base tracking-wide font-black">094.56.56.766</span>
                </div>
              </a>

              <a 
                id="footer-zalo-btn"
                href="https://zalo.me/0945656766"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-sky-950/40 border border-sky-900/40 p-3.5 rounded-2xl hover:border-sky-400 hover:bg-sky-900/20 transition-all text-white font-semibold cursor-pointer group"
              >
                <div className="p-2.5 bg-sky-500 text-white rounded-xl group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-4.5 h-4.5" />
                </div>
                <div className="text-left font-display">
                  <span className="block text-[10px] text-sky-400 uppercase tracking-widest">Chat Nhắn Tin Zalo</span>
                  <span className="block text-base tracking-wide font-black">LIÊN HỆ ZALO NGAY</span>
                </div>
              </a>
            </div>

            <button
              id="footer-cta-register"
              onClick={onBackToFormClick}
              className="w-full text-center py-2.5 border border-dashed border-slate-800 hover:border-lime-400/40 text-xs font-display font-medium rounded-xl hover:text-white transition-all cursor-pointer"
            >
              Cần giữ chỗ lớp? Click điền đăng ký nhanh!
            </button>
          </div>

        </div>

        {/* Legal and credits disclaimer (no tech-larping/logs/ping coordinates) */}
        <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-600 text-[11px] font-sans">
          <p>© 2026 JOHNNY TRÍ PICKLEBALL. All Rights Reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <span>Học thử miễn phí 1 buổi</span>
            <span>•</span>
            <span>Đổi tuyển chính nhận vợt</span>
            <span>•</span>
            <span>Tự tin ra sân từ vạch chuẩn</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
