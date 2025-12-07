import { useState } from 'react';
import { DollarSign, Clock, TrendingUp, Mail, Zap, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const opportunities = [
  {
    category: "Sell as a Service",
    color: "#22c55e",
    icon: DollarSign,
    ideas: [
      {
        title: "Lead Generation Agency",
        description: "Scrape business directories, LinkedIn, job postings. Sell verified leads to sales teams.",
        revenue: "$2-5K/mo per client",
        effort: "Medium",
        example: "Scrape new restaurants opening → sell to food suppliers, POS companies"
      },
      {
        title: "Competitor Intel Reports",
        description: "Productize what you built. Weekly reports on pricing, features, positioning changes.",
        revenue: "$500-2K/mo per client",
        effort: "Low",
        example: "SaaS founders pay for weekly competitor pricing/feature tracking"
      },
      {
        title: "Review Monitoring Service",
        description: "Track Google, Yelp, G2 reviews. Alert businesses to new reviews instantly.",
        revenue: "$100-300/mo per client",
        effort: "Low",
        example: "Local businesses pay to know immediately when reviews drop"
      }
    ]
  },
  {
    category: "Arbitrage & Trading",
    color: "#3b82f6",
    icon: TrendingUp,
    ideas: [
      {
        title: "E-commerce Arbitrage",
        description: "Monitor prices across Amazon, eBay, Walmart. Buy low, sell high automatically.",
        revenue: "$1-10K/mo",
        effort: "Medium",
        example: "Alert when product is 40% cheaper on Walmart than Amazon → resell"
      },
      {
        title: "Real Estate Deal Finder",
        description: "Scrape listings for underpriced properties, price drops, motivated sellers.",
        revenue: "$5-50K per deal",
        effort: "Medium",
        example: "Find listings 20%+ below market, alert investors who pay finder's fee"
      },
      {
        title: "Domain Flipping",
        description: "Monitor expiring domains with SEO value or brand potential.",
        revenue: "$100-10K per flip",
        effort: "Low",
        example: "Catch expired domains with existing backlinks → resell to SEO agencies"
      }
    ]
  },
  {
    category: "Content & Audience",
    color: "#8b5cf6",
    icon: Mail,
    ideas: [
      {
        title: "Niche Newsletters",
        description: "Aggregate industry news/deals automatically. Monetize via ads or paid tier.",
        revenue: "$1-20K/mo",
        effort: "Medium",
        example: "AI curates best remote job postings daily → paid subscribers"
      },
      {
        title: "Deal Aggregator Sites",
        description: "Scrape discounts, coupons, sales. Monetize with affiliate links.",
        revenue: "$500-5K/mo",
        effort: "Medium",
        example: "Auto-post software deals to site → affiliate commissions"
      },
      {
        title: "Job Board (Niche)",
        description: "Aggregate job postings in specific industry. Charge employers to feature.",
        revenue: "$2-10K/mo",
        effort: "High",
        example: "Scrape all climate/green jobs → charge companies for premium listings"
      }
    ]
  },
  {
    category: "Freelance Advantages",
    color: "#f97316",
    icon: Zap,
    ideas: [
      {
        title: "First-Mover on Gigs",
        description: "Scrape Upwork/freelance sites. Get alerts on new posts before others.",
        revenue: "2-3x win rate",
        effort: "Low",
        example: "Be first to respond to $5K+ projects within minutes of posting"
      },
      {
        title: "RFP/Grant Monitoring",
        description: "Track government contracts, grants, RFPs. Alert relevant businesses.",
        revenue: "$500-2K/mo per client",
        effort: "Medium",
        example: "Non-profits pay for instant alerts on matching grant opportunities"
      },
      {
        title: "Investor/Funding Alerts",
        description: "Monitor SEC filings, Crunchbase, press releases for funding news.",
        revenue: "Better deal flow",
        effort: "Medium",
        example: "Know when competitors raise money or companies need your service"
      }
    ]
  }
];

const steps = [
  { num: "01", title: "Book a Call", desc: "We identify time-wasters", color: "from-green-500 to-emerald-500" },
  { num: "02", title: "I Build It", desc: "Custom automation", color: "from-blue-500 to-cyan-500" },
  { num: "03", title: "You Win", desc: "Hours back weekly", color: "from-purple-500 to-pink-500" }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [expandedIdea, setExpandedIdea] = useState(null);

  return (
    <div className="min-h-screen text-white" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #020617 100%)' }}>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-green-400" />
            <span className="text-sm text-green-400 font-medium">Automation Services</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-3 bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-transparent">
            Fyne Workflows
          </h1>
          <p className="text-lg text-slate-400 text-center max-w-xl mx-auto mb-8">
            Stop doing repetitive work. Let automation handle it while you focus on what matters.
          </p>

          {/* Steps */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-6 sm:gap-12 mb-6 mx-auto w-fit">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center font-bold text-sm`}>
                  {step.num}
                </div>
                <div>
                  <p className="font-semibold text-white">{step.title}</p>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </div>
                {i < 2 && <ArrowRight className="w-5 h-5 text-slate-600 hidden sm:block ml-6" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-8 w-full">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {opportunities.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => { setSelectedCategory(idx); setExpandedIdea(null); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                selectedCategory === idx 
                  ? 'bg-white text-slate-900 shadow-lg shadow-white/10' 
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-700/50'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {opportunities[selectedCategory].ideas.map((idea, idx) => (
            <div
              key={idx}
              onClick={() => setExpandedIdea(expandedIdea === idx ? null : idx)}
              className={`group bg-slate-900/50 backdrop-blur border rounded-2xl p-5 cursor-pointer transition-all ${
                expandedIdea === idx 
                  ? 'border-slate-600 bg-slate-800/50' 
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-semibold text-white text-lg">{idea.title}</h3>
                    <span 
                      className="text-xs px-2.5 py-1 rounded-full font-semibold"
                      style={{ 
                        backgroundColor: opportunities[selectedCategory].color + '15',
                        color: opportunities[selectedCategory].color
                      }}
                    >
                      {idea.revenue}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{idea.description}</p>
                </div>
                <ChevronRight className={`w-5 h-5 text-slate-600 transition-transform flex-shrink-0 ml-3 ${expandedIdea === idx ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
              </div>
              
              {expandedIdea === idx && (
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <div className="text-sm">
                    <span className="text-slate-500">Example: </span>
                    <span className="text-slate-300">{idea.example}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-3">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-xs text-slate-500">Effort: {idea.effort}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="border-t border-slate-800 bg-slate-900/50 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to automate?</h2>
          <p className="text-slate-400 mb-6">Book a free call and let's find what's eating your time.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://calendly.com/fynebusinessllc/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-green-500/25 flex items-center justify-center gap-2"
            >
              Book a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="mailto:fynebusinessllc@gmail.com" 
              className="w-full sm:w-auto px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all border border-slate-700"
            >
              Email Me
            </a>
          </div>
          
          <p className="text-slate-600 text-sm mt-6">fynebusinessllc@gmail.com</p>
        </div>
      </div>
    </div>
  );
}