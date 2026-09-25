import React, { useState } from 'react';
import { X, Smartphone, Monitor, ShoppingBag, MessageCircle, Star, Check } from 'lucide-react';

interface MockupPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenStartNow: () => void;
}

export const MockupPreviewModal: React.FC<MockupPreviewModalProps> = ({
  isOpen,
  onClose,
  onOpenStartNow
}) => {
  const [activeDevice, setActiveDevice] = useState<'mobile' | 'desktop'>('mobile');
  const [cart, setCart] = useState<Array<{ name: string; price: number }>>([
    { name: 'Royal Emerald Kaftan', price: 35000 }
  ]);
  const [customerName, setCustomerName] = useState('Chidinma Okafor');
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const products = [
    {
      id: 1,
      name: 'Royal Emerald Kaftan',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&auto=format&fit=crop&q=80',
      category: 'Women Luxury'
    },
    {
      id: 2,
      name: 'Silk Ankara Evening Wrap',
      price: 24000,
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop&q=80',
      category: 'Ready to Wear'
    },
    {
      id: 3,
      name: 'Gold Embellished Aso-Ebi Set',
      price: 52000,
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&auto=format&fit=crop&q=80',
      category: 'Celebration'
    }
  ];

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const toggleCartItem = (product: { name: string; price: number }) => {
    if (cart.find(c => c.name === product.name)) {
      setCart(cart.filter(c => c.name !== product.name));
    } else {
      setCart([...cart, product]);
    }
  };

  const generateWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello Luxe Lagos Boutique! 🛍️\nI would like to place an order from your website:\n\n` +
      cart.map(c => `• ${c.name} - ₦${c.price.toLocaleString()}`).join('\n') +
      `\n\nTotal: ₦${total.toLocaleString()}` +
      `\nCustomer: ${customerName}` +
      `\nDelivery: Lekki Phase 1, Lagos` +
      `\nPlease send payment account details!`
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="relative bg-zinc-950 text-white rounded-[36px] max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-zinc-800 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Controls Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-orange-400 bg-orange-950/80 px-2.5 py-1 rounded-full">
              Live SME Customer Experience
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-1.5 text-white">
              Interactive WhatsApp Sales Machine Demo
            </h3>
            <p className="text-xs text-zinc-400">
              See what your customers experience when you use SalesSite NG.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Device toggles */}
            <div className="hidden sm:flex items-center bg-zinc-900 rounded-full p-1 border border-zinc-800">
              <button
                onClick={() => setActiveDevice('mobile')}
                className={`p-1.5 rounded-full transition-colors ${
                  activeDevice === 'mobile' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveDevice('desktop')}
                className={`p-1.5 rounded-full transition-colors ${
                  activeDevice === 'desktop' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'
                }`}
                title="Desktop View"
              >
                <Monitor className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Device Simulator Frame */}
        <div className="my-6 flex justify-center">
          <div
            className={`transition-all duration-300 rounded-[32px] overflow-hidden border-4 border-zinc-800 bg-[#f9fafb] text-zinc-900 shadow-2xl relative ${
              activeDevice === 'mobile' ? 'w-[360px] min-h-[540px]' : 'w-full min-h-[480px]'
            }`}
          >
            {/* Simulated Mobile Notch / Browser Header */}
            <div className="bg-zinc-900 text-white px-4 py-2 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-semibold">luxelagos.ng</span>
              </div>
              <span className="text-[10px] text-zinc-400">Powered by SalesSite NG</span>
            </div>

            {/* Simulated Store Hero */}
            <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 border-b border-zinc-100 flex items-center justify-between">
              <div>
                <span className="text-[9px] uppercase font-bold text-orange-600">Lekki Phase 1, Lagos</span>
                <h4 className="text-base font-bold text-zinc-950">Luxe Lagos Coutures</h4>
                <div className="flex items-center gap-1 text-[10px] text-amber-500 mt-0.5">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-zinc-800">4.9</span>
                  <span className="text-zinc-500">(120+ WhatsApp Reviews)</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white shadow-xs p-1 flex items-center justify-center font-serif text-lg font-bold text-orange-600">
                LL
              </div>
            </div>

            {/* Product Catalogue in simulator */}
            <div className="p-4 max-h-[300px] overflow-y-auto space-y-3">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                Featured Collection
              </span>

              {products.map((item) => {
                const inCart = cart.some(c => c.name === item.name);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleCartItem(item)}
                    className={`flex items-center justify-between p-2.5 rounded-2xl border transition-all cursor-pointer ${
                      inCart
                        ? 'border-orange-500 bg-orange-50/40 shadow-xs'
                        : 'border-zinc-200/80 bg-white hover:border-zinc-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-xl object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <p className="text-xs font-bold text-zinc-900">{item.name}</p>
                        <p className="text-[10px] text-zinc-500">{item.category}</p>
                        <p className="text-xs font-extrabold text-orange-600 mt-0.5">
                          ₦{item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <button
                      className={`px-3 py-1 rounded-full text-[10px] font-bold transition-colors ${
                        inCart
                          ? 'bg-orange-500 text-white'
                          : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200'
                      }`}
                    >
                      {inCart ? '✓ Added' : '+ Add'}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Bottom 1-Tap WhatsApp Checkout Bar */}
            <div className="p-4 bg-white border-t border-zinc-200">
              <div className="flex justify-between items-center mb-2.5 text-xs">
                <span className="text-zinc-500">{cart.length} item(s) selected:</span>
                <span className="font-bold text-zinc-950 text-sm">₦{total.toLocaleString()}</span>
              </div>

              {orderPlaced ? (
                <div className="bg-emerald-50 border border-emerald-500 text-emerald-800 text-xs p-3 rounded-2xl text-center">
                  <p className="font-bold flex items-center justify-center gap-1">
                    <Check className="w-4 h-4" /> WhatsApp Order Dispatched!
                  </p>
                  <p className="text-[10px] text-emerald-600 mt-0.5">
                    Pre-formatted text sent directly to merchant phone.
                  </p>
                </div>
              ) : (
                <a
                  href={`https://wa.me/2348000000000?text=${generateWhatsAppMessage()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOrderPlaced(true);
                    setTimeout(() => setOrderPlaced(false), 4000);
                  }}
                  className="w-full py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>1-Tap Order via WhatsApp</span>
                </a>
              )}
            </div>

          </div>
        </div>

        {/* Action footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800">
          <p className="text-xs text-zinc-400">
            Want this exact sales machine for your business? We build yours in 48 hours for ₦0 upfront.
          </p>

          <button
            onClick={() => {
              onClose();
              onOpenStartNow();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm"
          >
            Claim Your Free Mockup (₦0 Upfront)
          </button>
        </div>

      </div>
    </div>
  );
};
