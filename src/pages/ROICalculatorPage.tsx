import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Bot, Calculator, DollarSign, Clock, TrendingUp, Users,
  ArrowRight, Check, Phone, Mail, Zap
} from 'lucide-react'

const industries = [
  { id: 'general', name: 'General Business', multiplier: 1.0 },
  { id: 'cafe', name: 'Café / Coffee Shop', multiplier: 1.2 },
  { id: 'restaurant', name: 'Restaurant', multiplier: 1.3 },
  { id: 'salon', name: 'Salon / Spa', multiplier: 1.1 },
  { id: 'cpa', name: 'CPA / Accounting', multiplier: 1.5 },
  { id: 'realty', name: 'Real Estate', multiplier: 1.2 },
  { id: 'payroll', name: 'Payroll Services', multiplier: 1.4 },
]

const packages = [
  { id: 'assist', name: 'Nous Assist', price: 2800, monthly: 250, automationPercent: 40 },
  { id: 'connect', name: 'Nous Connect', price: 7500, monthly: 750, automationPercent: 65 },
  { id: 'command', name: 'Nous Command', price: 20000, monthly: 1500, automationPercent: 80 },
]

export function ROICalculatorPage() {
  const [teamSize, setTeamSize] = useState(5)
  const [hoursOnManualTasks, setHoursOnManualTasks] = useState(15)
  const [avgHourlyCost, setAvgHourlyCost] = useState(35)
  const [emailsPerDay, setEmailsPerDay] = useState(50)
  const [callsPerDay, setCallsPerDay] = useState(20)
  const [industry, setIndustry] = useState('general')
  const [selectedPackage, setSelectedPackage] = useState('connect')

  const industryData = industries.find(i => i.id === industry) || industries[0]
  const packageData = packages.find(p => p.id === selectedPackage) || packages[1]

  // Calculations
  const weeklyManualHours = teamSize * hoursOnManualTasks
  const weeklyManualCost = weeklyManualHours * avgHourlyCost
  const monthlyManualCost = weeklyManualCost * 4.33
  const yearlyManualCost = monthlyManualCost * 12

  const automationRate = packageData.automationPercent / 100
  const adjustedAutomationRate = automationRate * industryData.multiplier
  const cappedAutomationRate = Math.min(adjustedAutomationRate, 0.85)

  const hoursSavedPerWeek = weeklyManualHours * cappedAutomationRate
  const monthlySavings = (monthlyManualCost * cappedAutomationRate) - packageData.monthly
  const yearlySavings = monthlySavings * 12
  const paybackMonths = packageData.price / Math.max(monthlySavings, 1)

  const emailTimeSaved = (emailsPerDay * 2 * cappedAutomationRate) / 60 // 2 min per email
  const callTimeSaved = (callsPerDay * 5 * cappedAutomationRate) / 60 // 5 min per call

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Denivra</span>
            </Link>
            <Link
              to="/pricing"
              className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-purple rounded-lg font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Calculator className="w-4 h-4 text-primary-400" />
            <span className="text-primary-400 text-sm font-medium">ROI Calculator</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Calculate Your
            <span className="gradient-text"> Automation ROI</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-dark-300"
          >
            See how much time and money Nous can save your business
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Inputs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="p-8 rounded-2xl bg-dark-800/50 border border-white/5">
                <h2 className="text-xl font-bold mb-6">Your Business</h2>
                
                {/* Industry */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-dark-300 mb-2">
                    Industry
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl text-white focus:border-primary-500 focus:outline-none"
                  >
                    {industries.map(ind => (
                      <option key={ind.id} value={ind.id}>{ind.name}</option>
                    ))}
                  </select>
                </div>

                {/* Team Size */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-dark-300">Team Size</label>
                    <span className="text-primary-400 font-bold">{teamSize} people</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={teamSize}
                    onChange={(e) => setTeamSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                </div>

                {/* Hours on Manual Tasks */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-dark-300">Hours/week on manual tasks (per person)</label>
                    <span className="text-primary-400 font-bold">{hoursOnManualTasks}h</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    value={hoursOnManualTasks}
                    onChange={(e) => setHoursOnManualTasks(parseInt(e.target.value))}
                    className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                </div>

                {/* Hourly Cost */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-dark-300">Average hourly cost (fully loaded)</label>
                    <span className="text-primary-400 font-bold">${avgHourlyCost}/hr</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="100"
                    step="5"
                    value={avgHourlyCost}
                    onChange={(e) => setAvgHourlyCost(parseInt(e.target.value))}
                    className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                </div>

                {/* Emails per day */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-dark-300">Emails received per day</label>
                    <span className="text-primary-400 font-bold">{emailsPerDay}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={emailsPerDay}
                    onChange={(e) => setEmailsPerDay(parseInt(e.target.value))}
                    className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                </div>

                {/* Calls per day */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-dark-300">Phone calls per day</label>
                    <span className="text-primary-400 font-bold">{callsPerDay}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={callsPerDay}
                    onChange={(e) => setCallsPerDay(parseInt(e.target.value))}
                    className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                </div>
              </div>

              {/* Package Selection */}
              <div className="p-8 rounded-2xl bg-dark-800/50 border border-white/5">
                <h2 className="text-xl font-bold mb-6">Select Package</h2>
                <div className="space-y-3">
                  {packages.map(pkg => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all ${
                        selectedPackage === pkg.id
                          ? 'border-primary-500 bg-primary-500/10'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold">{pkg.name}</div>
                          <div className="text-sm text-dark-400">
                            ${pkg.price.toLocaleString()} + ${pkg.monthly}/mo
                          </div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedPackage === pkg.id ? 'border-primary-500 bg-primary-500' : 'border-dark-500'
                        }`}>
                          {selectedPackage === pkg.id && <Check className="w-3 h-3 text-white" />}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Main Stats */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-purple/10 border border-primary-500/30">
                <h2 className="text-xl font-bold mb-6">Your Estimated ROI</h2>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-dark-400 text-sm mb-1">Monthly Savings</div>
                    <div className="text-3xl font-bold text-green-400">
                      ${Math.max(0, monthlySavings).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                  </div>
                  <div>
                    <div className="text-dark-400 text-sm mb-1">Yearly Savings</div>
                    <div className="text-3xl font-bold text-green-400">
                      ${Math.max(0, yearlySavings).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                  </div>
                  <div>
                    <div className="text-dark-400 text-sm mb-1">Hours Saved/Week</div>
                    <div className="text-3xl font-bold text-primary-400">
                      {hoursSavedPerWeek.toFixed(0)}h
                    </div>
                  </div>
                  <div>
                    <div className="text-dark-400 text-sm mb-1">Payback Period</div>
                    <div className="text-3xl font-bold text-primary-400">
                      {paybackMonths > 0 && paybackMonths < 100 ? `${paybackMonths.toFixed(1)} mo` : 'N/A'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Breakdown */}
              <div className="p-8 rounded-2xl bg-dark-800/50 border border-white/5">
                <h3 className="font-semibold mb-4">Savings Breakdown</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-dark-400" />
                      <span className="text-dark-300">Email processing time saved</span>
                    </div>
                    <span className="font-medium">{emailTimeSaved.toFixed(1)}h/day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-dark-400" />
                      <span className="text-dark-300">Call handling time saved</span>
                    </div>
                    <span className="font-medium">{callTimeSaved.toFixed(1)}h/day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-dark-400" />
                      <span className="text-dark-300">Automation rate</span>
                    </div>
                    <span className="font-medium">{(cappedAutomationRate * 100).toFixed(0)}%</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <span className="text-white font-medium">3-Year Total Savings</span>
                    </div>
                    <span className="font-bold text-green-400">
                      ${(yearlySavings * 3).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="p-8 rounded-2xl bg-dark-800/50 border border-white/5 text-center">
                <h3 className="font-semibold mb-2">Ready to see these savings?</h3>
                <p className="text-dark-400 text-sm mb-6">
                  Book a demo and we'll show you exactly how Nous works for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-purple rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Book Demo</span>
                  </Link>
                  <Link
                    to="/pricing"
                    className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all"
                  >
                    <DollarSign className="w-5 h-5" />
                    <span>See Pricing</span>
                  </Link>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-dark-500 text-center">
                * Estimates based on industry averages. Actual results may vary based on your specific operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/5 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold">Denivra</span>
          </div>
          <p className="text-dark-500 text-sm">
            © {new Date().getFullYear()} Denivra Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
