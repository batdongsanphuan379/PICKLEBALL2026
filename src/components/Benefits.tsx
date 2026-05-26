import { motion } from 'motion/react';
import { Heart, Target, Users2, Sparkles } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      id: 'health',
      title: 'Nâng Cao Sức Khỏe',
      subTitle: 'Tăng cường thể lực & dẻo dai',
      description: 'Pickleball là sự kết hợp tuyệt vời giữa cardio và rèn luyện phản xạ nhanh. Giúp cải thiện nhịp tim, sự linh hoạt khớp và duy trì nguồn năng lượng tràn trề mỗi ngày.',
      bulletTitle: 'Lợi ích thể chất:',
      bullets: [
        'Đốt cháy calories hiệu quả (~400-600 cal/giờ)',
        'Tăng khả năng quan sát và phản xạ tức thì',
        'Phát triển thể lực dẻo dai toàn diện'
      ],
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      shadow: 'shadow-rose-500/10 border-rose-500/20'
    },
    {
      id: 'technique',
      title: 'Kỹ Thuật Bài Bản',
      subTitle: 'Huấn luyện viên tận tâm chỉ dạy',
      description: 'Lộ trình được HLV Johnny Trí thiết kế chuyên biệt, dễ hiểu lý thuyết và áp dụng thực tế trên sân ngay lập tức. Phù hợp cho cả người chưa bao giờ cầm vợt.',
      bulletTitle: 'Phương pháp huấn luyện:',
      bullets: [
        'Kỹ thuật di chuyển, cầm vợt đúng chuẩn không đau chấn thương',
        'Chiến thuật thi đấu đơn/đôi chuyên nghiệp',
        'Sửa tư thế sai lệch chi tiết từng buổi học'
      ],
      icon: Target,
      color: 'from-lime-500 to-emerald-600',
      shadow: 'shadow-lime-500/10 border-lime-500/20'
    },
    {
      id: 'network',
      title: 'Kết Nối Bạn Bè',
      subTitle: 'Giao lưu cộng đồng văn minh',
      description: 'Môi trường tập luyện trẻ trung, hòa đồng, năng động. Gặp gỡ những người bạn cùng sở thích lành mạnh, mở rộng mạng lưới giao lưu cá nhân và gia đình.',
      bulletTitle: 'Giá trị cộng đồng:',
      bullets: [
        'Tham gia hội nhóm thể thao Pickleball lâu dài',
        'Giao lưu bằng các buổi mini-game/mini-tournament',
        'Nâng cao kỹ năng làm việc nhóm, tương tác giao tiếp'
      ],
      icon: Users2,
      color: 'from-sky-500 to-blue-600',
      shadow: 'shadow-sky-500/10 border-sky-500/20'
    },
    {
      id: 'growth',
      title: 'Phát Triển Toàn Diện',
      subTitle: 'Rèn luyện kỷ luật & ý chí thép',
      description: 'Thể thao không chỉ nâng cao cơ bắp, mà còn xây dựng tính kỷ luật, sự tập trung và tinh thần đồng đội cao. Giúp giảm căng thẳng hiệu quả sau giờ học/làm việc.',
      bulletTitle: 'Góc tinh thần:',
      bullets: [
        'Tạo dựng thói quen kiên trì, tôn trọng kỷ luật nhóm',
        'Cách giải tỏa căng thẳng tự nhiên, lành mạnh',
        'Xây dựng sự tự tin, bản lĩnh ứng phó tình huống khó khăn'
      ],
      icon: Sparkles,
      color: 'from-amber-500 to-orange-600',
      shadow: 'shadow-amber-500/10 border-amber-500/20'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-slate-50 text-slate-950 relative">
      {/* Decorative styling */}
      <div className="absolute inset-0 bg-grid-blue opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-display tracking-widest font-black text-sky-600 uppercase">
            Học viên nhận được gì?
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight uppercase leading-none">
            LỢI ÍCH KHI THAM GIA LỚP HỌC
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-lime-400 to-sky-500 mx-auto rounded-full mt-2" />
          <p className="text-slate-600 font-sans text-sm sm:text-base mt-2">
            Không chỉ đơn thuần là tập luyện kỹ năng, lớp học hè 2026 của chúng tôi cam kết mang lại những giá trị thiết thực và lâu dài.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md ${benefit.shadow} hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Icon & Title Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${benefit.color} text-white shadow-lg`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-sm font-semibold text-slate-500 font-display">
                        {benefit.subTitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                </div>

                {/* Bullets Sub-section */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-2.5">
                    {benefit.bulletTitle}
                  </h4>
                  <ul className="space-y-2">
                    {benefit.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-1.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
