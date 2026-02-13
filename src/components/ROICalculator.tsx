import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Clock, Users, TrendingUp, Calculator } from 'lucide-react'

interface SliderProps {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (value: number) => void
  format?: (value: number) => string
  icon: React.ElementType
}

function Slider({ label, value, min, max, step, onChange, format, icon: Icon }: SliderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Icon className="w-4 h-4 text-primary-400" />
          <span className="text-sm font-medium">{label}</span>
        </div>
        <span className="text-lg font-bold text-primary-400">
          {format ? format(value) : value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer
                   [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:w-5
                   [&::-webkit-slider-thumb]:h-5
                   [&::-webkit-slider-thumb]:rounded-full
                   [&::-webkit-slider-thumb]:bg-gradient-to-r
                   [&::-webkit-slider-thumb]:from-primary-500
                   [&::-webkit-slider-thumb]:to-accent-purple
                   [&::-webkit-slider-thumb]:cursor-pointer
                   [&::-webkit-slider-thumb]:shadow-lg"
      />
    </div>
  )
}

export function ROICalculator() {
  const [employees, setEmployees] = useState(5)
  const [hoursManualTasks, setHoursManualTasks] = useState(20)
  const [avgHourlyRate, setAvgHourlyRate] = useState(35)
  const [emailsPerDay, setEmailsPerDay] = useState(100)
  const [callsPerDay, setCallsPerDay] = useState(30)

  const calculations = useMemo(() => {
    // Time savings
    const manualHoursSavedPerWeek = hoursManualTasks * 0.6 // 60% automation
    const emailTimePerWeek = (emailsPerDay * 5 * 2) / 60 // 2 min per email
    const callTimePerWeek = (callsPerDay * 5 * 5) / 60 // 5 min per call
    const totalHoursSavedPerWeek = manualHoursSavedPerWeek + (emailTimePerWeek * 0.8) + (callTimePerWeek * 0.7)
    const monthlyHoursSaved = totalHoursSavedPerWeek * 4

    // Cost savings
    const monthlyCostSaved = monthlyHoursSaved * avgHourlyRate
    const annualCostSaved = monthlyCostSaved * 12

    // ROI calculation (assuming Nous Connect at $2,499 + $199/mo)
    const setupCost = 2499
    const monthlyCost = 199
    const firstYearCost = setupCost + (monthlyCost * 12)
    const roi = ((annualCostSaved - firstYearCost) / firstYearCost) * 100
    const paybackMonths = firstYearCost / monthlyCostSaved

    return {
      monthlyHoursSaved: Math.round(monthlyHoursSaved),
      monthlyCostSaved: Math.round(monthlyCostSaved),
      annualCostSaved: Math.round(annualCostSaved),
      roi: Math.round(roi),
      paybackMonths: paybackMonths.toFixed(1),
    }
  }, [employees, hoursManualTasks, avgHourlyRate, emailsPerDay, callsPerDay])

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="card">
          <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
            <Calculator className="w-5 h-5 text-primary-400" />
            <span>Your Current Situation</span>
          </h3>

          <Slider
            label="Team Members"
            value={employees}
            min={1}
            max={50}
            step={1}
            onChange={setEmployees}
            icon={Users}
          />

          <Slider
            label="Hours/Week on Manual Tasks"
            value={hoursManualTasks}
            min={5}
            max={60}
            step={5}
            onChange={setHoursManualTasks}
            format={(v) => `${v}h`}
            icon={Clock}
          />

          <Slider
            label="Average Hourly Cost"
            value={avgHourlyRate}
            min={15}
            max={100}
            step={5}
            onChange={setAvgHourlyRate}
            format={(v) => `$${v}`}
            icon={DollarSign}
          />

          <Slider
            label="Emails Processed/Day"
            value={emailsPerDay}
            min={10}
            max={500}
            step={10}
            onChange={setEmailsPerDay}
            icon={TrendingUp}
          />

          <Slider
            label="Calls Handled/Day"
            value={callsPerDay}
            min={0}
            max={200}
            step={5}
            onChange={setCallsPerDay}
            icon={TrendingUp}
          />
        </div>

        {/* Results */}
        <div className="space-y-4">
          <motion.div
            key={calculations.monthlyHoursSaved}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="card bg-gradient-to-br from-primary-500/10 to-accent-purple/10 border-primary-500/30"
          >
            <div className="text-dark-300 text-sm mb-1">Monthly Hours Saved</div>
            <div className="text-4xl font-bold gradient-text">{calculations.monthlyHoursSaved}h</div>
            <div className="text-dark-400 text-sm mt-2">
              That's {Math.round(calculations.monthlyHoursSaved / 8)} full work days/month
            </div>
          </motion.div>

          <motion.div
            key={calculations.monthlyCostSaved}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="card bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30"
          >
            <div className="text-dark-300 text-sm mb-1">Monthly Cost Savings</div>
            <div className="text-4xl font-bold text-green-400">
              ${calculations.monthlyCostSaved.toLocaleString()}
            </div>
            <div className="text-dark-400 text-sm mt-2">
              ${calculations.annualCostSaved.toLocaleString()}/year
            </div>
          </motion.div>

          <motion.div
            key={calculations.roi}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-dark-300 text-sm mb-1">First Year ROI</div>
                <div className="text-3xl font-bold text-primary-400">{calculations.roi}%</div>
              </div>
              <div>
                <div className="text-dark-300 text-sm mb-1">Payback Period</div>
                <div className="text-3xl font-bold text-accent-purple">{calculations.paybackMonths} mo</div>
              </div>
            </div>
          </motion.div>

          <div className="card bg-dark-800/50">
            <div className="text-sm text-dark-400 mb-3">Investment (Nous Connect)</div>
            <div className="flex justify-between items-center">
              <span>One-time setup</span>
              <span className="font-semibold">$2,499</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span>Monthly maintenance</span>
              <span className="font-semibold">$199/mo</span>
            </div>
            <hr className="my-3 border-white/10" />
            <div className="flex justify-between items-center">
              <span className="font-semibold">First Year Total</span>
              <span className="font-bold text-primary-400">$4,887</span>
            </div>
            <div className="flex justify-between items-center mt-2 text-green-400">
              <span className="font-semibold">Net First Year Savings</span>
              <span className="font-bold">${(calculations.annualCostSaved - 4887).toLocaleString()}</span>
            </div>
          </div>

          <button className="btn-primary w-full">
            Get Custom Quote
          </button>
        </div>
      </div>
    </div>
  )
}
