import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, Leaf, Sparkles, MessageSquare } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuCategory, MenuItem } from '../types';

export const SignatureMenu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyVeg, setOnlyVeg] = useState<boolean>(false);

  const categories: MenuCategory[] = [
    'All',
    'Indian',
    'Chinese',
    'Snacks',
    'Desserts',
    'Mocktails',
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.hindiName && item.hindiName.includes(searchQuery));
      const matchesVeg = !onlyVeg || item.isVeg;

      return matchesCategory && matchesSearch && matchesVeg;
    });
  }, [selectedCategory, searchQuery, onlyVeg]);

  const handleWhatsAppOrder = (item: MenuItem) => {
    const message = encodeURIComponent(
      `Hello M.V Family Restaurant, I would like to order / inquire about: *${item.name}* (₹${item.price}). Please share availability and delivery/pickup details.`
    );
    window.open(`https://wa.me/919939057069?text=${message}`, '_blank');
  };

  return (
    <section id="menu" className="py-14 sm:py-20 bg-white border-y border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="text-[#C9A45C] font-ui font-bold text-xs uppercase tracking-[0.3em]">
              SIGNATURE SELECTIONS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C] tracking-tight">
            Our Favorites
          </h2>
          <p className="text-sm sm:text-base text-[#6B6B6B] font-sans">
            A selection of dishes made to bring everyone to the table.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full font-ui text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1C1C1C] text-white shadow-xs'
                    : 'bg-[#FAFAF7] text-[#6B6B6B] hover:text-[#1C1C1C] hover:bg-[#F1ECE3] border border-[#E8E4DC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Veg toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-56">
              <Search className="w-4 h-4 text-[#6B6B6B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 font-ui text-xs bg-[#FAFAF7] border border-[#E8E4DC] rounded-full focus:outline-none focus:ring-2 focus:ring-[#C9A45C]/50 text-[#1C1C1C]"
              />
            </div>

            {/* Veg Only Toggle */}
            <button
              onClick={() => setOnlyVeg(!onlyVeg)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full font-ui text-xs font-semibold tracking-wide border transition-colors cursor-pointer ${
                onlyVeg
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                  : 'bg-[#FAFAF7] border-[#E8E4DC] text-[#6B6B6B] hover:text-[#1C1C1C]'
              }`}
            >
              <Leaf className={`w-3.5 h-3.5 ${onlyVeg ? 'text-emerald-600' : 'text-gray-400'}`} />
              <span>Veg Only</span>
            </button>
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-[28px] border border-[#E8E4DC] hover:border-[#C9A45C] card-shadow hover:shadow-[0_16px_40px_-12px_rgba(201,164,92,0.15)] overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Food Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAFAF7]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover img-zoom"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40" />

                  {/* Badges on Image */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    {item.badge && (
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-xs text-[10px] font-ui font-bold text-[#1C1C1C] rounded-full uppercase tracking-wider shadow-xs flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 text-[#C9A45C]" />
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Veg / Non-Veg Indicator */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs p-1.5 rounded-full shadow-xs">
                    <div
                      className={`w-3.5 h-3.5 border flex items-center justify-center ${
                        item.isVeg ? 'border-emerald-600' : 'border-rose-600'
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-lg font-bold text-[#1C1C1C] leading-snug group-hover:text-[#C9A45C] transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  {item.hindiName && (
                    <p className="text-[11px] text-[#C9A45C] font-ui font-semibold uppercase tracking-wider mt-0.5">
                      {item.hindiName}
                    </p>
                  )}

                  <p className="text-xs text-[#6B6B6B] font-sans mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="px-5 pb-5 pt-0 border-t border-[#F1ECE3] mt-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-ui uppercase tracking-wider text-[#6B6B6B]">Price</span>
                  <p className="text-lg font-serif font-bold text-[#1C1C1C]">
                    ₹{item.price}
                  </p>
                </div>

                <button
                  onClick={() => handleWhatsAppOrder(item)}
                  className="flex items-center gap-1.5 px-4 py-2 font-ui text-xs font-bold uppercase tracking-wider bg-[#FAFAF7] hover:bg-[#1C1C1C] text-[#1C1C1C] hover:text-white border border-[#E8E4DC] hover:border-[#1C1C1C] rounded-full transition-all duration-200 cursor-pointer shadow-xs"
                  title="Order on WhatsApp"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-[#C9A45C]" />
                  <span>Order</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-[#FAFAF7] rounded-[28px] border border-[#E8E4DC] mt-8">
            <p className="text-sm text-[#6B6B6B] font-sans">No dishes found matching your selection.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setOnlyVeg(false);
              }}
              className="mt-3 text-xs font-ui font-bold text-[#C9A45C] uppercase tracking-wider underline underline-offset-4 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Menu Notice / Full Menu Note */}
        <div className="mt-10 p-5 rounded-[28px] bg-[#FAFAF7] border border-[#E8E4DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-xs font-ui font-bold text-[#1C1C1C] uppercase tracking-wider">
              Looking for our complete daily specials & thali menu?
            </p>
            <p className="text-[11px] text-[#6B6B6B] font-sans mt-0.5">
              Ask our captains for today's seasonal dishes, fresh tandoor breads and customized party packs.
            </p>
          </div>
          <a
            href={`https://wa.me/919939057069?text=${encodeURIComponent(
              'Hello M.V Family Restaurant, please send me your complete menu card and today specials.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-6 py-2.5 bg-[#1C1C1C] text-white hover:bg-[#C9A45C] hover:text-[#1C1C1C] rounded-full font-ui text-xs font-bold uppercase tracking-widest transition-all shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get Full Menu on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

