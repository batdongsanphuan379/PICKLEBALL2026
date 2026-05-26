import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Phone, BookOpen, Clock, Heart, CheckCircle2, AlertTriangle, Users, Award, Ticket, Send, ArrowRight } from 'lucide-react';
import { Registration } from '../types';

interface RegistrationFormProps {
  formRef: React.RefObject<HTMLDivElement | null>;
}

export default function RegistrationForm({ formRef }: RegistrationFormProps) {
  // Input states
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [ageGroup, setAgeGroup] = useState<'kid' | 'student' | 'adult'>('adult');
  const [skillLevel, setSkillLevel] = useState<'beginner' | 'intermediate_advanced'>('beginner');
  const [schedulePreference, setSchedulePreference] = useState('evening');
  const [note, setNote] = useState('');

  // UI state managers
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registeredSuccess, setRegisteredSuccess] = useState<Registration | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedNotice, setCopiedNotice] = useState(false);
  
  // Simulated stats state
  const [remainingSlots, setRemainingSlots] = useState(5);
  const [recentRegistrations, setRecentRegistrations] = useState<any[]>([]);

  // Countdown clock state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate promotional countdown to 31/05/2026
  useEffect(() => {
    const targetDate = new Date('2026-05-31T23:59:59').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Initialize and load historical registrations from localStorage helper
  useEffect(() => {
    const mockUsers = [
      { id: '1', name: 'Nguyễn Tiến Hoàng', phone: '091*****82', course: 'Lớp Người Lớn Tối', time: '5 phút trước' },
      { id: '2', name: 'Phạm Minh Quân', phone: '098*****41', course: 'Lớp Trẻ Em Sáng M246', time: '17 phút trước' },
      { id: '3', name: 'Lê Quỳnh Anh', phone: '096*****19', course: 'Khóa Cơ Bản Linh Hoạt', time: '1 giờ trước' },
      { id: '4', name: 'Hoàng Quốc Bảo', phone: '035*****96', course: 'Lớp Người Lớn Chiều', time: '3 giờ trước' }
    ];

    const storedRegs = localStorage.getItem('pickleball_registrants');
    if (storedRegs) {
      try {
        const parsed = JSON.parse(storedRegs);
        // Combine mock with real registrations
        const updatedList = [
          ...parsed.map((r: Registration) => ({
            id: r.id,
            name: r.fullName,
            phone: r.phone.replace(/(\d{3})\d{4}(\d{3})/, '$1****$2'),
            course: r.ageGroup === 'kid' ? 'Lớp Trẻ Em 6+ tuổi' : r.ageGroup === 'student' ? 'Lớp Học Sinh - Học Viên' : 'Lớp Người Lớn Toàn Diện',
            time: 'Vừa xong'
          })),
          ...mockUsers
        ];
        // Dynamic randomizing slots left based on numbers of registrations
        const calcSlots = Math.max(12 - parsed.length, 2);
        setRemainingSlots(calcSlots);
        setRecentRegistrations(updatedList.slice(0, 5));
      } catch (e) {
        setRecentRegistrations(mockUsers);
      }
    } else {
      setRecentRegistrations(mockUsers);
    }
  }, [registeredSuccess]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    // Validation
    if (!fullName.trim()) {
      setErrorMsg('Vui lòng nhập họ và tên.');
      setIsSubmitting(false);
      return;
    }

    const cleanPhone = phone.trim();
    if (!cleanPhone || cleanPhone.length < 9 || cleanPhone.length > 11) {
      setErrorMsg('Vui lòng nhập số điện thoại hợp lệ (9 - 11 chữ số).');
      setIsSubmitting(false);
      return;
    }

    // Submit simulated delay
    setTimeout(() => {
      const newRegistration: Registration = {
        id: Math.random().toString(36).substr(2, 9),
        fullName: fullName.trim(),
        phone: cleanPhone,
        ageGroup,
        skillLevel,
        schedulePreference,
        note: note.trim(),
        registeredAt: new Date().toISOString(),
        status: 'pending'
      };

      // Store local database
      const existing = localStorage.getItem('pickleball_registrants');
      let currentRegs: Registration[] = [];
      if (existing) {
        try {
          currentRegs = JSON.parse(existing);
        } catch (e) {
          currentRegs = [];
        }
      }
      currentRegs.unshift(newRegistration);
      localStorage.setItem('pickleball_registrants', JSON.stringify(currentRegs));

      setRegisteredSuccess(newRegistration);
      setIsSubmitting(false);
      
      // Reset input fields
      setFullName('');
      setPhone('');
      setNote('');
    }, 1200);
  };

  const handleCopyZaloMessage = () => {
    if (!registeredSuccess) return;
    const bracketAge = 
      registeredSuccess.ageGroup === 'kid' ? 'Trẻ Em / Học Sinh' : 
      registeredSuccess.ageGroup === 'student' ? 'Học Sinh / Sinh Viên' : 'Người Lớn';
    const bracketSchedule = 
      registeredSuccess.schedulePreference === 'morning' ? 'Sáng' : 
      registeredSuccess.schedulePreference === 'afternoon' ? 'Chiều' : 'Tối';
    
    const msg = `Xin chào HLV Johnny Trí, tôi gửi mã vé xác nhận ghi danh học Pickleball:\n` +
      `- Mã vé của tôi: PICKLE-${registeredSuccess.id.toUpperCase()}\n` +
      `- Học viên: ${registeredSuccess.fullName}\n` +
      `- Số điện thoại: ${registeredSuccess.phone}\n` +
      `- Nhóm tuổi: ${bracketAge}\n` +
      `- Lịch học: Ca ${bracketSchedule}\n` +
      `Tôi muốn xác nhận giữ chỗ ưu đãi giảm 10% học phí thành công!`;
    
    try {
      navigator.clipboard.writeText(msg);
      setCopiedNotice(true);
      // Auto-reset notice after 5 seconds
      setTimeout(() => {
        setCopiedNotice(false);
      }, 5000);
    } catch (err) {
      console.error('Không thể tự động sao chép mã vé:', err);
    }
  };

  return (
    <section id="registration" ref={formRef} className="py-20 bg-slate-950 text-white relative">
      <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dynamic Countdown Header */}
        <div className="bg-gradient-to-r from-red-650 to-orange-650 rounded-3xl p-6 sm:p-8 md:p-10 border border-red-500/30 shadow-2xl text-center max-w-4xl mx-auto mb-16 space-y-6 relative overflow-hidden">
          {/* Grid bg inside promo banner */}
          <div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none" />
          
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-display font-black tracking-widest uppercase text-yellow-300 border border-white/10 mb-2">
              ƯU ĐÃI KHỦNG CHÀO HE 2026
            </span>
            
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-white">
              GIẢM NGAY 10% HỌC PHÍ
            </h2>
            
            <p className="text-sm md:text-base text-red-100 max-w-2xl mx-auto mt-2 font-medium">
              Dành riêng cho các nhóm học viên thực hiện đăng ký ghi danh giữ chỗ trước ngày <span className="underline font-bold text-yellow-300">31/05/2026</span>. Sắp hết hạn!
            </p>

            {/* Countdown Clock Display */}
            <div className="grid grid-cols-4 gap-3 max-w-sm sm:max-w-md mx-auto mt-6">
              {[
                { label: 'NGÀY', value: timeLeft.days },
                { label: 'GIỜ', value: timeLeft.hours },
                { label: 'PHÚT', value: timeLeft.minutes },
                { label: 'GIÂY', value: timeLeft.seconds }
              ].map((timePart, idx) => (
                <div key={idx} className="bg-slate-950/90 rounded-2xl p-2.5 sm:p-4 border border-white/5 shadow-inner flex flex-col items-center">
                  <span className="text-2xl sm:text-4xl font-mono font-black text-lime-400 tracking-tight">
                    {String(timePart.value).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-display font-bold tracking-widest text-slate-400 mt-1 uppercase">
                    {timePart.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-red-200 mt-5 font-bold animate-pulse">
              <Users className="w-4 h-4 text-yellow-300" />
              <span>Chỉ còn {remainingSlots} suất ưu đãi cuối cùng cho đợt khai giảng tháng 6 này!</span>
            </div>
          </div>
        </div>

        {/* Form and proof split container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Left split: Interactive registration form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 relative">
            
            <AnimatePresence mode="wait">
              {!registeredSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight flex items-center gap-2">
                      <Ticket className="w-6 h-6 text-lime-400" /> PHIẾU GHI DANH KHOÁ HỌC HÈ
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">Vui lòng điền thông tin chính xác, Huấn luyện viên Johnny Trí sẽ liên lạc trực tiếp tư vấn lộ trình và chốt lịch tập phù hợp.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Error display */}
                    {errorMsg && (
                      <div className="p-3 bg-red-950/60 border border-red-500/30 text-rose-300 text-xs rounded-xl flex items-center gap-2.5">
                        <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Fullname input */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-lime-400" /> Họ và tên Học viên <span className="text-red-500">*</span>
                      </label>
                      <input 
                        id="form-name-input"
                        type="text" 
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Ví dụ: Nguyễn Văn A"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400 transition-colors"
                      />
                    </div>

                    {/* Phone input */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-lime-400" /> Số điện thoại Zalo <span className="text-red-500">*</span>
                      </label>
                      <input 
                        id="form-phone-input"
                        type="tel" 
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ví dụ: 0945656766"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400 transition-colors"
                      />
                    </div>

                    {/* Age and Skill splits */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Age selection */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-lime-400" /> Nhóm Tuổi
                        </label>
                        <select 
                          id="form-age-select"
                          value={ageGroup}
                          onChange={(e) => setAgeGroup(e.target.value as any)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400 transition-colors cursor-pointer"
                        >
                          <option value="kid">Trẻ em - Học sinh (Hè vui vẻ)</option>
                          <option value="student">Học sinh lớp lớn - Sinh viên</option>
                          <option value="adult">Người đi làm - Người lớn tuổi</option>
                        </select>
                      </div>

                      {/* Level selection */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-lime-400" /> Trình Độ Hiện Tại
                        </label>
                        <select 
                          id="form-level-select"
                          value={skillLevel}
                          onChange={(e) => setSkillLevel(e.target.value as any)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400 transition-colors cursor-pointer"
                        >
                          <option value="beginner">Chưa từng chơi (Học cơ bản)</option>
                          <option value="intermediate_advanced">Đã chơi / Muốn nâng cao kĩ thuật</option>
                        </select>
                      </div>

                    </div>

                    {/* Schedule selection */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-lime-400" /> Ca Học Ưu Tiên
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'morning', label: 'Cực Sáng', desc: '5h - 8h sáng' },
                          { id: 'afternoon', label: 'Chiều mát', desc: '16h - 18h xế' },
                          { id: 'evening', label: 'Tối muộn', desc: '18h - 22h tối' }
                        ].map((sched) => (
                          <div 
                            key={sched.id}
                            onClick={() => setSchedulePreference(sched.id)}
                            className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                              schedulePreference === sched.id 
                                ? 'bg-lime-400/10 border-lime-400 text-lime-400' 
                                : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                            }`}
                          >
                            <span className="block text-xs font-bold font-display uppercase tracking-wide">{sched.label}</span>
                            <span className="text-[10px] opacity-70 block mt-0.5">{sched.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Note input */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
                        <Heart className="w-3.5 h-3.5 text-lime-400" /> Ghi Chú Đặc Biệt (Nếu có)
                      </label>
                      <textarea 
                        id="form-note-input"
                        rows={2}
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="VD: Cần mượn vợt khi tập, có chấn thương đầu gối nhẹ..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-lime-400 transition-colors"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      id="form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-lime-400 via-yellow-400 to-lime-300 text-slate-950 hover:opacity-90 font-display font-black uppercase text-sm tracking-widest rounded-xl transition-all shadow-lg shadow-lime-400/10 active:scale-98 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 mt-4"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          ĐANG XỬ LÝ GHI DANH...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          TIẾP TỤC ĐĂNG KÝ (ƯU ĐÃI GIẢM 10%)
                        </>
                      )}
                    </button>

                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-6 space-y-6"
                >
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold font-display uppercase tracking-widest text-emerald-400">Ghi Danh Thành Công!</span>
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-white">XIN CHÀO {registeredSuccess.fullName.toUpperCase()}</h3>
                    <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">HLV Johnny Trí đã ghi nhận thông tin giữ vé và mã ưu đãi giảm 10% học phí của bạn thành công.</p>
                  </div>

                  {/* Summary receipt ticket */}
                  <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800/80 max-w-md mx-auto text-left relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-1.5 bg-lime-400 text-slate-950 font-display font-bold text-[8px] tracking-widest uppercase rounded-bl">Ưu đãi 10%</div>
                    
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-900 pb-2">TICKET THÔNG TIN:</h4>
                    
                    <dl className="space-y-2 text-xs font-mono">
                      <div className="flex justify-between">
                        <dt className="text-slate-500">MÃ VÉ:</dt>
                        <dd className="text-white font-bold">PICKLE-{registeredSuccess.id.toUpperCase()}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-slate-500">HỌC VIÊN:</dt>
                        <dd className="text-white font-bold">{registeredSuccess.fullName}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-slate-500">ĐIỆN THOẠI:</dt>
                        <dd className="text-white">{registeredSuccess.phone}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-slate-500">NHÓM TUỔI:</dt>
                        <dd className="text-white">
                          {registeredSuccess.ageGroup === 'kid' && 'Trẻ Em / Học Sinh'}
                          {registeredSuccess.ageGroup === 'student' && 'Học Sinh / Sinh Viên'}
                          {registeredSuccess.ageGroup === 'adult' && 'Người Lớn'}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-slate-500">LỊCH HỌC:</dt>
                        <dd className="text-lime-400 font-bold uppercase">Ca {registeredSuccess.schedulePreference === 'morning' ? 'Sáng' : registeredSuccess.schedulePreference === 'afternoon' ? 'Chiều' : 'Tối'}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 justify-center pt-2">
                    <a 
                      id="success-zalo-confirm"
                      href={`https://zalo.me/0945656766` /* Direct link HLV phone */}
                      target="_blank"
                      rel="noreferrer"
                      onClick={handleCopyZaloMessage}
                      className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 font-display font-black text-xs text-white uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Xác Nhận Qua Zalo Ngay
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    
                    <button 
                      onClick={() => setRegisteredSuccess(null)}
                      className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-850 font-display font-bold text-xs text-slate-400 hover:text-white uppercase tracking-wider rounded-xl border border-slate-800 cursor-pointer"
                    >
                      Đăng Ký Khác
                    </button>
                  </div>

                  {copiedNotice && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 bg-lime-400/10 border border-lime-400/30 text-lime-400 p-4 rounded-2xl text-left text-xs leading-relaxed"
                    >
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4.5 h-4.5 text-lime-400 flex-shrink-0 mt-0.5 animate-pulse" />
                        <div>
                          <p className="font-bold uppercase tracking-wider text-[10px] text-lime-300">Đã sao chép kịch bản đăng ký!</p>
                          <p className="text-slate-300 mt-0.5">Hệ thống đã tự động lưu thông tin vé của bạn vào khay nhớ tạm. Khi ô chat Zalo mở ra, bạn chỉ cần click chuột phải rồi chọn <strong>"Dán" (hoặc Ctrl+V / Cmd+V)</strong> để gửi thông tin cho HLV ngay nhé!</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Right split: Social proof details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Live stats feed box */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 relative flex flex-col justify-between h-full">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-display font-black uppercase tracking-wider text-lime-400 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-lime-400 animate-pulse" /> SỐ SUẤT ĐÃ GIỮ CHỖ
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">CẬP NHẬT TRỰC TUYẾN</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Sĩ số giới hạn ưu đãi:</span>
                    <span className="font-bold text-white font-mono">12 học viên / lớp</span>
                  </div>
                  <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800 flex">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-full rounded-full transition-all duration-1000" 
                      style={{ width: `${((12 - remainingSlots) / 12) * 100}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-slate-500 text-right">Mới ghi danh thành công: <span className="font-semibold text-white">{12 - remainingSlots} học viên</span></p>
                </div>
              </div>

              {/* Feed lists of recent sign ups */}
              <div className="mt-6 flex-1 space-y-4">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block border-b border-slate-800/60 pb-1.5">DANH SÁCH GHI DANH GẦN ĐÂY:</span>
                
                <div className="space-y-3 max-h-[190px] overflow-y-auto pr-1">
                  {recentRegistrations.map((user) => (
                    <div key={user.id} className="p-3 bg-slate-950/70 border border-slate-800/40 rounded-xl flex items-center justify-between gap-2.5 hover:border-slate-800 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 bg-lime-400/10 text-lime-400 rounded-full border border-lime-400/20 flex items-center justify-center font-black text-xs font-display">
                          {user.name.charAt(0)}
                        </div>
                        <div className="text-left">
                          <span className="block text-xs font-bold text-slate-200">{user.name}</span>
                          <span className="block text-[10px] text-slate-500 font-mono">{user.phone} • {user.course}</span>
                        </div>
                      </div>
                      <span className="text-[9px] text-slate-500 bg-slate-900 border border-slate-800 py-0.5 px-2 rounded-full whitespace-nowrap">{user.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantee banner bottom */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed bg-slate-950/30 p-3 rounded-2xl border border-dashed border-slate-800">
                <Award className="w-4.5 h-4.5 text-lime-400 flex-shrink-0 mt-0.5 animate-pulse" />
                <span>
                  <strong className="text-slate-200">Cam Kết Chất Lượng:</strong> Chúng tôi hoàn tiền 100% học phí hoặc đổi buổi linh động nếu học viên không tiến bộ kĩ thuật sau khóa huấn luyện 8 buổi của HLV.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
