import { motion } from 'motion/react';
import { Calendar, Users, Award, Zap, Phone, ArrowDown } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
}

export default function Hero({ onRegisterClick }: HeroProps) {
  return (
    <div id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-radial from-slate-900 via-sky-950 to-slate-950 text-white pt-16">
      {/* Sporty grid and lighting overlays */}
      <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-500/15 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Decorative dynamic court line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lime-400 to-sky-500 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            
            {/* Admissions Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/20 self-center lg:self-start text-xs sm:text-sm font-display uppercase tracking-wider font-semibold shadow-inner"
            >
              <Zap className="w-4 h-4 text-lime-400 animate-pulse" />
              Chiêu Sinh Hè - Khai Giảng Tháng 6/2026
            </motion.div>

            {/* Main Title Grouping */}
            <div className="space-y-2">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="block text-xl md:text-2xl font-display font-bold text-sky-400 uppercase tracking-widest"
              >
                HỌC VUI • KHỎE MẠNH • KẾT NỐI ĐAM MÊ!
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-tight uppercase text-glow-yellow"
              >
                LỚP HỌC <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-lime-400 via-yellow-300 to-lime-300 bg-clip-text text-transparent">
                  PICKLEBALL
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg md:text-xl font-display font-medium text-amber-500 italic mt-2"
              >
                "Hè này cùng Pickleball, bứt phá mọi giới hạn!"
              </motion.p>
            </div>

            {/* Sub-description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-sans"
            >
              Hãy tham gia cùng khóa huấn luyện đặc biệt mùa hè của HLV <span className="text-white font-semibold">Johnny Trí</span>. Chương trình được thiết kế bài bản từ cơ bản đến nâng cao cho mọi lứa tuổi, kết hợp rèn luyện sức bền, kỹ chiến thuật vượt trội trong môi trường năng động, thân thiện.
            </motion.p>

            {/* Quick Badges Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mt-2 sm:mt-4"
            >
              <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-xl p-3 sm:p-4 flex items-center gap-3">
                <div className="p-2 sm:p-2.5 bg-sky-500/10 text-sky-400 rounded-lg">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-xs text-slate-400">Thời Gian</span>
                  <span className="block text-sm font-semibold font-display">T6/2026 Khai Giảng</span>
                </div>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-xl p-3 sm:p-4 flex items-center gap-3">
                <div className="p-2 sm:p-2.5 bg-lime-500/10 text-lime-400 rounded-lg">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-xs text-slate-400">Đối Tượng</span>
                  <span className="block text-sm font-semibold font-display">6 tuổi tới người lớn</span>
                </div>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-xl p-3 sm:p-4 flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="p-2 sm:p-2.5 bg-amber-500/10 text-amber-400 rounded-lg">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-xs text-slate-400">HLV Chuyên Nghiệp</span>
                  <span className="block text-sm font-semibold font-display">Johnny Trí</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Elements */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <button 
                id="hero-register-btn"
                onClick={onRegisterClick}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-display uppercase tracking-wider font-extrabold text-lg rounded-xl shadow-lg shadow-red-500/20 active:scale-95 transition-all text-center flex items-center justify-center gap-3 border border-orange-500/30 cursor-pointer"
              >
                Đăng Ký Ngay
                <Zap className="w-5 h-5 text-yellow-300 animate-bounce" />
              </button>
              
              <a 
                id="hero-call-btn"
                href="tel:0945656766"
                className="w-full sm:w-auto px-6 py-4 bg-slate-900 hover:bg-slate-850 text-white font-semibold rounded-xl border border-slate-700 hover:border-slate-600 flex items-center justify-center gap-3 transition-colors text-base"
              >
                <Phone className="w-5 h-5 text-lime-400" />
                094.56.56.766
              </a>
            </motion.div>

          </div>

          {/* Right Column: Sporty Poster/Key Visual Representation */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-fit p-1 bg-gradient-to-br from-lime-400 via-sky-400 to-yellow-300 rounded-3xl shadow-2xl relative group"
            >
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-sky-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />

              {/* Dynamic summer/pickleball visual card */}
              <div className="bg-slate-950 rounded-2xl overflow-hidden p-6 sm:p-8 max-w-[380px] text-center border border-slate-800 relative">
                <div className="absolute top-2 right-2 w-12 h-12 rounded-full border border-dashed border-lime-400/20 animate-spin" style={{ animationDuration: '20s' }} />
                
                {/* Visual Representation of Pickleball court / Ball */}
                <div className="h-44 sm:h-52 w-full bg-gradient-to-b from-sky-650 to-blue-900 rounded-2xl relative flex flex-col items-center justify-center border border-slate-700 overflow-hidden">
                  <div className="absolute bottom-0 inset-x-0 h-1/2 bg-lime-500/10" />
                  <div className="absolute inset-x-0 top-1/2 h-0.5 bg-white/40" />
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20" />
                  
                  {/* Glowing Ball representation */}
                  <motion.div 
                    animate={{ 
                      y: [40, -40, 40], 
                      x: [-40, 40, -40],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut"
                    }}
                    className="absolute w-12 h-12 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center shadow-[0_0_20px_#facc15]"
                  >
                    {/* Circle patterns for ball holes */}
                    <div className="grid grid-cols-3 gap-1 p-2 w-full h-full">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-slate-900 rounded-full mx-auto" />
                      ))}
                    </div>
                  </motion.div>

                  <div className="z-10 font-display font-black text-white text-3xl uppercase tracking-wider text-glow-blue opacity-85">
                    HÈ BỨT PHÁ
                  </div>
                  <div className="z-10 font-display text-lime-400 font-bold text-xs tracking-widest uppercase mt-1">
                    HLV JOHNNY TRÍ
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="text-xs uppercase text-lime-400 tracking-widest font-bold">ƯU ĐÃI ĐĂNG KÝ SỚM</div>
                  <div className="text-3xl font-display font-black text-white">GIẢM NGAY 10%</div>
                  <div className="text-xs text-slate-400">Khi đăng ký ghi danh trước ngày <span className="text-white font-semibold font-mono">31/05/2026</span></div>
                  
                  <div className="pt-2 border-t border-slate-800/80">
                    <p className="text-slate-300 text-xs font-medium">Sĩ số lớp:</p>
                    <p className="text-sm font-semibold text-lime-300">Tối đa 12 học viên / lớp để đảm bảo chất lượng giảng dạy tốt nhất!</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Down indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 opacity-60">
          <span className="text-[10px] tracking-widest uppercase text-slate-400 font-display">TÌM HIỂU THÊM</span>
          <ArrowDown className="w-5 h-5 text-slate-400 animate-bounce" />
        </div>

      </div>
    </div>
  );
}
