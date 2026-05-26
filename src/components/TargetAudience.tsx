import { motion } from 'motion/react';
import { CalendarRange, Smile, Sparkles, UserCheck, Flame, ShieldAlert } from 'lucide-react';

export default function TargetAudience() {
  const targetGroups = [
    {
      id: 'kids',
      title: 'TRẺ EM • HỌC SINH',
      ageRange: 'Từ 6 tuổi trở lên',
      description: 'Lớp hè vui nhộn giúp con rèn luyện thói quen tự lập, phản xạ thị giác, sức khỏe dẻo dai sau một năm học tập căng thẳng mệt mỏi.',
      features: [
        'Vừa chơi vừa học cực kỳ cuốn hút',
        'Phát triển chiều cao & sự linh hoạt chân tay',
        'Rèn luyện tinh thần đồng đội & kỷ luật tích cực',
        'Tặng bộ giáo cụ tập đập bóng tiêu chuẩn'
      ],
      icon: Smile,
      gradient: 'from-amber-400 to-orange-500',
      badge: 'Độ Tuổi Vàng'
    },
    {
      id: 'adults',
      title: 'SINH VIÊN • NGƯỜI LỚN',
      ageRange: 'Mọi độ tuổi & ngành nghề',
      description: 'Khóa học được chia nhỏ theo trình độ riêng, bám sát mong muốn cải thiện thể chất, giải tỏa căng thẳng sau những giờ nghiên cứu hoặc làm việc văn phòng.',
      features: [
        'Giáo án cá nhân hóa theo thể trạng từng người',
        'Rèn tư thế chuẩn tránh chấn thương cột sống, cổ tay',
        'Cung cấp chiến thuật thực chiến đánh đơn / đôi chuyên nghiệp',
        'Hỗ trợ kết nối cộng đồng người chơi văn minh'
      ],
      icon: Flame,
      gradient: 'from-sky-500 to-indigo-600',
      badge: 'Phóng Khoáng & Năng Động'
    }
  ];

  return (
    <section id="audience" className="py-20 bg-slate-100 text-slate-900 relative">
      <div className="absolute inset-0 bg-grid-blue opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-display tracking-widest font-black text-rose-500 uppercase">
            XÁC ĐỊNH MỤC TIÊU CÙNG HLB
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight uppercase leading-none">
            KHÓA HỌC DÀNH CHO AI?
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-lime-400 to-sky-500 mx-auto rounded-full mt-2" />
          <p className="text-slate-600 font-sans text-sm sm:text-base mt-2">
            Từ trẻ nhỏ hoạt bát tới người đi làm bận rộn, từ người mới bắt đầu chưa từng cầm vợt đến các tay vợt muốn nâng cao kỹ thuật thực chiến.
          </p>
        </div>

        {/* Target Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {targetGroups.map((group, idx) => {
            const IconComp = group.icon;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-md flex flex-col justify-between hover:shadow-xl transition-all relative overflow-hidden group"
              >
                {/* Visual Accent Corner Wave */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${group.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`} />

                <div>
                  {/* Category Header Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <span className={`px-3.5 py-1 rounded-full text-[10px] font-bold font-display uppercase tracking-wider bg-gradient-to-r ${group.gradient} text-white shadow-sm`}>
                      {group.badge}
                    </span>
                    <div className="text-slate-300 group-hover:text-amber-400 transition-colors">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="mb-6 space-y-2">
                    <div className="inline-flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${group.gradient} text-white`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight">
                        {group.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm font-bold text-amber-600 font-display">
                      ⛳ Độ tuổi khuyến nghị: {group.ageRange}
                    </p>
                  </div>

                  {/* Intro */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    {group.description}
                  </p>

                  {/* Detailed features bullet list */}
                  <div className="space-y-3.5">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5 mb-2">
                      <UserCheck className="w-4 h-4 text-emerald-500" /> CAM KẾT SỰ TIẾN BỘ ĐỒNG ĐỀU:
                    </h4>
                    
                    <ul className="grid grid-cols-1 gap-3">
                      {group.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-xs leading-relaxed text-slate-600">
                          <span className={`w-5 h-5 rounded-full bg-slate-50 border border-slate-200/80 text-emerald-500 flex items-center justify-center font-bold flex-shrink-0 text-[10px]`}>
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                    Nhập thông tin đăng ký bên dưới để xếp lớp phù hợp!
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Highlights: Schedules, Flexible Times, Vùng cam kết */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 md:p-10 text-white border border-slate-800 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold text-lime-400 uppercase tracking-widest block">LỊCH HỌC SIÊU LINH HOẠT</span>
            <h3 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tight text-white leading-tight">
              TỰ CHỌN GIỜ HỌC <br className="hidden sm:inline" />
              TỰ DO THOẢI MÁI
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Chúng tôi hiểu rằng mỗi người có quỹ thời gian khác nhau. Khóa học được HLV linh động xếp lịch từ Sáng tới Tối để bạn giữ trọn nhịp học thể thao tốt nhất.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2.5 text-lime-400">
                <CalendarRange className="w-5 h-5" />
                <span className="text-xs font-display font-black tracking-widest uppercase">Thứ 2 - Chủ nhật</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Đủ các ca học sáng (5am - 8am), chiều (4pm - 6pm) hoặc tối muộn (6pm - 10pm) đáp ứng lịch trình đi học, đi làm của học viên.
              </p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2.5 text-sky-400">
                <ShieldAlert className="w-5 h-5" />
                <span className="text-xs font-display font-black tracking-widest uppercase">Trình độ tương thích</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Các học viên được sắp xếp ngồi cùng một nhóm huấn luyện tương đồng sức khỏe và kĩ thuật, giúp gắn kết tự nhiên và cải tiến tốt nhất.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
