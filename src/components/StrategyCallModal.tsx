import React, { useState } from 'react';
import { X, Calendar, Clock, Phone, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';

interface StrategyCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StrategyCallModal: React.FC<StrategyCallModalProps> = ({ isOpen, onClose }) => {
  const [selectedDay, setSelectedDay] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('11:00 AM WAT');
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  const getWhatsAppBookingLink = () => {
    const text = encodeURIComponent(
      `Hello SalesSite NG team! 📞\nI would like to book a 15-minute Strategy Call.\n\n` +
      `👤 Name: ${name || 'Founder'}\n` +
      `🗓️ Day: ${selectedDay}\n` +
      `⏰ Time: ${selectedTime}\n` +
      `📱 WhatsApp: ${whatsapp}\n\n` +
      `Looking forward to talking about building our zero-upfront sales site!`
    );
    return `https://wa.me/2348000000000?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-[32px] max-w-md w-full p-6 sm:p-8 shadow-2xl border border-zinc-100 animate-in fade-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-500 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!booked ? (
          <div>
            <div className="mb-5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
                15-Min Discovery
              </span>
              <h3 className="text-2xl font-bold text-zinc-950 mt-2">
                Book a Strategy Call
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                Chat with a Nigerian growth engineer on how a WhatsApp-first site will increase your daily sales.
              </p>
            </div>

            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-800 mb-1">
                  Select Day
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Today', 'Tomorrow', 'This Friday'].map((day) => (
                    <button
                      type="button"
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`py-2 px-2 rounded-xl border text-xs font-medium transition-all ${
                        selectedDay === day
                          ? 'border-orange-500 bg-orange-50/50 text-orange-950 font-bold'
                          : 'border-zinc-200 bg-zinc-50 text-zinc-600'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-800 mb-1">
                  Preferred Time (West Africa Time)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['11:00 AM WAT', '02:00 PM WAT', '04:30 PM WAT', '07:00 PM WAT'].map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-2.5 rounded-xl border text-xs font-medium transition-all ${
                        selectedTime === time
                          ? 'border-orange-500 bg-orange-50/50 text-orange-950 font-bold'
                          : 'border-zinc-200 bg-zinc-50 text-zinc-600'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-800 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Tunde Balogun"
                  className="w-full text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-800 mb-1">
                  WhatsApp Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="+234 803 123 4567"
                  className="w-full text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
                />
              </div>

              <div className="pt-2">
                <LiquidMetalButton
                  type="submit"
                  className="w-full justify-center"
                  width="100%"
                  label={
                    <>
                      <span>Confirm Strategy Session</span>
                      <ArrowRight className="w-4 h-4 text-orange-400" />
                    </>
                  }
                />
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-zinc-950">
              Session Reserved!
            </h3>
            <p className="text-xs text-zinc-600 mt-2">
              We look forward to speaking with you on <strong>{selectedDay} at {selectedTime}</strong>.
            </p>

            <div className="my-5 p-3 rounded-2xl bg-[#f7f7f8] text-xs text-zinc-600">
              A calendar invite and reminder has been prepared for {whatsapp}.
            </div>

            <a
              href={getWhatsAppBookingLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Open in WhatsApp</span>
            </a>
          </div>
        )}

      </div>
    </div>
  );
};
