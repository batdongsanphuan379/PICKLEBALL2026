import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, ArrowRight, Shield, Award, Sparkles, Smile, Compass, RefreshCw } from 'lucide-react';

interface ConceptBadge {
  id: string;
  name: string;
  desc: string;
  aimArea: 'feet' | 'middle' | 'deep' | 'kitchen' | 'all';
}

export default function Tactics() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const [activeBadge, setActiveBadge] = useState<string | null>(null);

  const steps = [
    {
      id: 1,
      title: 'RESET',
      tagline: 'Lập lại trạng thái cân bằng lực lượng',
      description: 'Khi đối thủ tấn công dồn dập hoặc bóng khó, chiến thuật cốt lõi là đánh dink/vụt một đường bóng mềm mại rơi ngay trong khu vực Kitchen đối phương. Cú đánh này hóa giải hoàn toàn lực sút mạnh, buộc đối thủ phải ngừng ép sân và kéo trận đấu về bước dink chậm kiểm soát.',
      colorClass: 'bg-indigo-600 border-indigo-400 text-indigo-100',
      tagColor: 'text-indigo-400 bg-indigo-500/10',
      details: [
        'Kỹ thuật hấp thụ lực: Giữ cổ tay lỏng thả lỏng lực tay vừa phải.',
        'Mục tiêu: Đưa bóng rớt ngắn vào thung lũng Kitchen.',
        'Thời điểm dùng: Khi bị ép sâu về vạch cuối sân hoặc bóng nảy quá ngực.'
      ]
    },
    {
      id: 2,
      title: 'KIỂM SOÁT',
      tagline: 'Kéo giãn đối thủ bằng chuỗi cú Dink kiên nhẫn',
      description: 'Dink rally - cuộc giằng co cân não. Tránh cẩu thả vụt bừa bãi. Thực hiện các cú dink chéo góc tinh tế hướng sang hai đường biên hông hoặc nhắm chệch chân trái đối phương. Giữ chân đứng sát vạch Kitchen và di chuyển song hành đồng bộ cùng đồng đội.',
      colorClass: 'bg-emerald-600 border-emerald-400 text-emerald-100',
      tagColor: 'text-emerald-400 bg-emerald-500/10',
      details: [
        'Sự kiên trì tuyệt đối: Chờ đối thủ nóng vội phạm sai lầm nâng bóng cao.',
        'Vị trí vợt luôn nâng cao trước ngực sẵn sàng cướp cò.',
        'Đồng bộ di chuyển đôi: Chuyển dịch cùng nhau như có sợi dây nối.'
      ]
    },
    {
      id: 3,
      title: 'TĂNG TỐC',
      tagline: 'Đánh úp rình rập bất ngờ ngay khi bóng rời rạc',
      description: 'Khi bắt bài bóng đối thù dink hơi non hoặc lộ kẽ hở nảy cao trên lưới, ngay lập tức búng cổ tay dồn lực sút bắn bóng nhanh ngắm vào nách, vai thuận hoặc mặt của đối thủ. Cú tăng tốc làm rách nhịp chuẩn bị khiến đối phương luống cuống đỡ bóng hoặc giật mình trả hỏng.',
      colorClass: 'bg-amber-600 border-amber-400 text-amber-100',
      tagColor: 'text-amber-400 bg-amber-500/10',
      details: [
        'Động tác cực ngắn giấu hướng đánh: Ép bóng căng cắm đột ngột.',
        'Vị trí nhắm bắn: Vào vùng góc ngực / hông khó vặn cổ tay đỡ.',
        'Cảnh báo: Không lạm dụng khi bóng chưa qua điểm cao hơn lưới.'
      ]
    },
    {
      id: 4,
      title: 'KẾT LIỄU',
      tagline: 'Đập Smash dứt khoát không để đối phương trở tay',
      description: 'Bóng dựng bổng trên không là cơ hội vàng chấm dứt rally. Di chuyển lùi nghiêng người, lấy vai dẫn hướng, bật nhảy nhẹ hoặc gõ cổ tay chúc vợt hướng góc cắm trực tiếp sâu về giữa sân hoặc sát mép vạch cuối biên trái của đối thủ.',
      colorClass: 'bg-rose-600 border-rose-400 text-rose-100',
      tagColor: 'text-rose-400 bg-rose-500/10',
      details: [
        'Overhead Smash uy lực tuyệt đối: Điểm tiếp bóng chính xác ở góc 1 giờ trên đầu.',
        'Bắn phá các kẽ hở không người bọc lót giữa sân.',
        'Vừa đập vừa áp sát mép lưới chiếm quyền kiểm soát tuyệt đối.'
      ]
    }
  ];

  const conceptualBadges: ConceptBadge[] = [
    { id: 'middle', name: 'Đánh Vào Giữa', desc: 'Sút luồn khe giữa hai đối thủ gây bất đồng giao tiếp nhận bóng.', aimArea: 'middle' },
    { id: 'feet', name: 'Đánh Vào Chân', desc: 'Bóng găm sát bàn chân bắt đối thủ gập hông cứu hỏng bóng.', aimArea: 'feet' },
    { id: 'deep', name: 'Đánh Xa Tầm Tay', desc: 'Gõ bóng chéo góc rộng (angle dink) bắt đối thủ bay người sải chân kéo sải vợt.', aimArea: 'deep' },
    { id: 'purpose', name: 'Đánh Có Mục Đích', desc: 'Mọi cú chạm đều có chủ ý sâu sắc, không gõ thụ động ngẫu nhiên.', aimArea: 'all' },
    { id: 'control', name: 'Kiểm Soát Bóng', desc: 'Làm chủ góc xoáy, tốc độ của bóng, không nôn nóng vụt hỏng.', aimArea: 'kitchen' },
    { id: 'sync', name: 'Di Chuyển Cùng Nhau', desc: 'Lên công về thủ nhịp nhàng, đóng kẽ hở khoảng trống giữa 2 người.', aimArea: 'middle' },
    { id: 'timing', name: 'Chờ Đúng Thời Điểm', desc: 'Kiên nhẫn dink rình rập chờ đối thủ bung bóng bổng mới kết liễu.', aimArea: 'deep' }
  ];

  // Helper mapping areas to coordinates for visual indicator
  const getAimPoints = (area: string) => {
    switch (area) {
      case 'feet':
        return [
          { x: '25%', y: '18%', label: 'Chân đối thủ trái' },
          { x: '75%', y: '18%', label: 'Chân đối thủ phải' },
        ];
      case 'middle':
        return [{ x: '50%', y: '45%', label: 'Trung lộ trống trải' }];
      case 'deep':
        return [
          { x: '15%', y: '30%', label: 'Góc sân chéo sâu hông trái' },
          { x: '85%', y: '30%', label: 'Góc sân chéo sâu hông phải' },
        ];
      case 'kitchen':
        return [
          { x: '35%', y: '68%', label: 'Khu vực Kitchen sườn trái' },
          { x: '65%', y: '68%', label: 'Khu vực Kitchen sườn phải' },
        ];
      case 'all':
        return [
          { x: '50%', y: '45%', label: '' },
          { x: '25%', y: '18%', label: '' },
          { x: '75%', y: '18%', label: '' }
        ];
      default:
        return [];
    }
  };

  return (
    <section id="tactics" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-display tracking-widest font-black text-lime-400 uppercase">
            Học tập thực chiến hiệu thấu đáo
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight uppercase leading-none">
            CHIẾN THUẬT GAMEPLAY PRO
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-lime-400 to-sky-500 mx-auto rounded-full mt-2" />
          <p className="text-slate-400 font-sans text-sm sm:text-base mt-2">
            Mô hình hóa chiến lược chơi đôi Pickleball chuẩn quốc tế từ cơ bản đến nâng cao. Nhấp chọn các bước và phân khu sân để rèn luyện nhãn quan nhanh nhạy.
          </p>
        </div>

        {/* Dynamic Multi-Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Block: Tactics Stepper Control & Details (7 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            
            {/* Steps tabs picker */}
            <div className="grid grid-cols-4 gap-2 w-full">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(step.id);
                    // Match badges with step for contextual feedback
                    const badgeMap = ['kitchen', 'sync', 'feet', 'deep'];
                    setActiveBadge(badgeMap[step.id - 1]);
                  }}
                  className={`py-3 sm:py-4 px-2 rounded-2xl flex flex-col items-center justify-center transition-all border duration-300 relative cursor-pointer ${
                    activeStep === step.id
                      ? 'bg-slate-800 border-lime-400 text-white shadow-lg shadow-lime-400/15'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span className="text-xs font-mono font-bold tracking-tight text-lime-400/80 mb-0.5">0{step.id}</span>
                  <span className="text-xs sm:text-sm font-display font-black uppercase tracking-wider">{step.title}</span>
                  {activeStep === step.id && (
                    <motion.div 
                      layoutId="activeTacticTab"
                      className="absolute bottom-1 w-6 h-1 bg-lime-400 rounded-full" 
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Panel Content Box */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-display font-bold uppercase tracking-wider mb-3 ${steps[activeStep - 1].tagColor}`}>
                      Chiến thuật giai đoạn {activeStep}/4
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight">
                      CÚ ĐÁNH {steps[activeStep - 1].title}
                    </h3>
                    <p className="text-sm font-semibold text-lime-300 mt-1 italic">
                      "{steps[activeStep - 1].tagline}"
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {steps[activeStep - 1].description}
                  </p>

                  <div className="space-y-3 pt-3 border-t border-slate-900/40">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Compass className="w-4 h-4 text-lime-400" /> CHỈ DẪN THỰC THI CHUYÊN GIA:
                    </h4>
                    <ul className="space-y-2">
                      {steps[activeStep - 1].details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                          <span className="w-2 h-2 rounded-full bg-lime-400 mt-1 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-sans">
                <span>*Sẽ được rèn luyện thực tế 1-kèm-1 cùng bóng ném trên sân.</span>
                <span className="text-lime-400 font-semibold font-mono">Johnny Trí Pickleball ©</span>
              </div>
            </div>

          </div>

          {/* Right Block: Court Visual & Badges (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Concept Badges Horizontal Layout */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                Các Khái Niệm Quan Trọng (Vui lòng click xem):
              </h4>
              <div className="flex flex-wrap gap-2">
                {conceptualBadges.map((badge) => (
                  <button
                    key={badge.id}
                    onClick={() => {
                      setActiveBadge(activeBadge === badge.id ? null : badge.id);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold font-display transition-all duration-250 cursor-pointer ${
                      activeBadge === badge.id
                        ? 'bg-lime-400 text-slate-950 font-bold shadow-md shadow-lime-400/20 scale-105'
                        : 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    {badge.name}
                  </button>
                ))}
              </div>
              <AnimatePresence>
                {activeBadge && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-xs text-lime-300 font-medium bg-slate-950/30 p-2.5 rounded-xl border border-slate-800/40"
                  >
                    💡 <span className="underline font-bold">{conceptualBadges.find(b => b.id === activeBadge)?.name}</span>: {conceptualBadges.find(b => b.id === activeBadge)?.desc}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Interactive Court Container */}
            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 flex flex-col justify-between relative min-h-[420px]">
              
              {/* Reset view helper */}
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="font-display font-semibold flex items-center gap-1.5 text-[11px] text-slate-300">
                  ⚡ PHÂN TÍCH SÂN CHIẾN THUẬT (BẤM CÁC VÙNG ĐỂ XEM):
                </span>
                {(activeZone || activeBadge) && (
                  <button 
                    onClick={() => { setActiveZone(null); setActiveBadge(null); }}
                    className="text-lime-400 hover:underline flex items-center gap-1 cursor-pointer font-bold font-display"
                  >
                    <RefreshCw className="w-3 h-3 animate-spin" style={{ animationDuration: '6s' }} /> Đặt Lại
                  </button>
                )}
              </div>

              {/* Court Plane with perspective */}
              <div className="relative flex-1 bg-sky-900 border-[3.5px] border-white rounded-xl shadow-lg shadow-sky-500/5 overflow-hidden flex flex-col divide-y-2 divide-white/80 select-none">
                
                {/* Court Mid-line (horizontal center line background) */}
                <div className="absolute inset-y-0 left-1/2 w-[1.5px] bg-white/60 pointer-events-none" />

                {/* 1. Opponent Back Court Zone / Base Court (Top half) */}
                <div 
                  onClick={() => setActiveZone('opponent_back')}
                  className={`h-1/3 relative flex items-center justify-center transition-all cursor-pointer ${
                    activeZone === 'opponent_back' ? 'bg-sky-700' : 'hover:bg-sky-800/40'
                  }`}
                >
                  <span className="text-[10px] sm:text-xs font-display font-medium text-white/50 relative z-10 pointer-events-none uppercase tracking-wide">
                    Baseline Zone (Vùng Cuối Sân)
                  </span>
                </div>

                {/* 2. Transition Zone (Middle half representing bridge) */}
                <div 
                  onClick={() => setActiveZone('transition')}
                  className={`h-1/3 relative flex items-center justify-center transition-all cursor-pointer ${
                    activeZone === 'transition' ? 'bg-indigo-900/80' : 'bg-sky-850/60 hover:bg-sky-800/40'
                  }`}
                >
                  <span className="text-[10px] sm:text-xs font-display font-bold text-slate-200/60 relative z-10 pointer-events-none uppercase tracking-widest">
                    TRANSITION ZONE
                  </span>
                  
                  {/* Sync movements indicators */}
                  {activeBadge === 'sync' && (
                    <div className="absolute inset-x-0 flex items-center justify-between px-10 pointer-events-none animate-pulse">
                      <div className="text-xs bg-slate-900 px-2 py-1 rounded border border-lime-400 text-lime-400 font-bold">&#8592; Đồng bộ &#8594;</div>
                      <div className="text-xs bg-slate-900 px-2 py-1 rounded border border-lime-400 text-lime-400 font-bold">&#8592; Vợt song song &#8594;</div>
                    </div>
                  )}
                </div>

                {/* 3. Kitchen Zone / Non-Volley Zone (Bottom half where net sits) */}
                <div 
                  onClick={() => setActiveZone('kitchen')}
                  className={`h-1/3 relative flex flex-col items-center justify-center transition-all cursor-pointer ${
                    activeZone === 'kitchen' ? 'bg-lime-950/90' : 'bg-emerald-950/70 hover:bg-emerald-900/50'
                  }`}
                >
                  <span className="text-[10px] sm:text-xs font-display font-black text-lime-400 relative z-10 pointer-events-none uppercase tracking-widest">
                    NON-VOLLEY ZONE (KITCHEN)
                  </span>
                  <span className="text-[9px] text-white/40 mt-1 pointer-events-none">*VÙNG KHÔNG ĐƯỢC VÔ-LÊ TRỰC TIẾP*</span>
                </div>

                {/* Tactical Aiming Overlay Rings */}
                {activeBadge && getAimPoints(conceptualBadges.find(b => b.id === activeBadge)?.aimArea || '').map((point, index) => (
                  <div
                    key={index}
                    style={{ left: point.x, top: point.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 flex flex-col items-center"
                  >
                    <div className="w-8 h-8 rounded-full border-2 border-red-500 bg-red-500/20 animate-ping absolute" />
                    <div className="w-4 h-4 rounded-full border border-white bg-red-600 shadow-md flex items-center justify-center font-bold text-[8px] text-white">
                      X
                    </div>
                    {point.label && (
                      <span className="bg-red-900 border border-red-500 text-white font-semibold rounded text-[9px] px-1 md:px-1.5 py-0.5 mt-2 shadow whitespace-nowrap">
                        {point.label}
                      </span>
                    )}
                  </div>
                ))}

              </div>

              {/* Dynamic explanations helper based on clicked zone */}
              <div className="mt-4 bg-slate-900/95 border border-slate-800 rounded-2xl p-3.5 min-h-[90px] flex items-center">
                <AnimatePresence mode="wait">
                  {activeZone ? (
                    <motion.div
                      key={activeZone}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs space-y-1"
                    >
                      <span className="font-bold text-lime-400 uppercase tracking-widest block font-display">
                        {activeZone === 'opponent_back' && '📌 Vạch Cuối Sân (Baseline)'}
                        {activeZone === 'transition' && '📌 Vùng Chuyển Động (Transition Zone)'}
                        {activeZone === 'kitchen' && '📌 Thung Lũng Nhà Bếp (Kitchen Zone)'}
                      </span>
                      <p className="text-slate-300 leading-relaxed font-sans mt-0.5">
                        {activeZone === 'opponent_back' && 'Khu vực cơ sở thích hợp để gõ bóng bền bọc sườn sân. Khoảng cách này đòi hỏi sự kiên nhẫn bách phát bách trúng, hạn chế đánh smash khi tư thế chưa vững vàng.'}
                        {activeZone === 'transition' && 'Khu vực nhạy cảm bậc nhất. Không đứng chôn chân ở đây! Phải lập tức reset bóng rớt ngắn vào kitchen đối phương rồi băng lên chiếm lưới, hoặc lùi sâu hẳn phòng thủ.'}
                        {activeZone === 'kitchen' && 'Đây là vinh quang hay nấm mồ cứu bóng. Bạn không được đứng vô-lê khi bóng chưa chạm đất ở đây. Do đó, kỹ thuật dink mềm, khéo léo là vũ khí hủy diệt tối thượng.'}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.p
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-slate-400 text-xs italic text-center w-full"
                    >
                      💡 Bấm chọn vạch sân: <span className="text-slate-200">Kitchen</span>, <span className="text-slate-200">Transition Zone</span> hoặc <span className="text-slate-200">Vùng cuối sân</span> để huấn luyện viên phân tách sơ đồ cứu cánh và rèn luyện chân thực!
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
