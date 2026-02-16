'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Brain,
  Tags,
  Calculator,
  CheckCircle,
  Send,
  GitBranch,
  Zap,
  MessageSquare,
  Sun,
  Users,
  FileText,
  CreditCard,
  DollarSign,
  CheckSquare,
  Phone,
  Calendar,
  Star,
  Settings,
  Server,
  Shield,
  Hash,
  Receipt,
  Inbox,
  BarChart3,
  Clock,
  Search,
  Globe,
  Lock,
  Cpu,
  RotateCcw,
} from 'lucide-react';

// Icon mapping
const iconMap: Record<string, React.ComponentType<any>> = {
  Mail,
  Brain,
  Tags,
  Calculator,
  CheckCircle,
  Send,
  GitBranch,
  Zap,
  MessageSquare,
  Sun,
  Users,
  FileText,
  CreditCard,
  DollarSign,
  CheckSquare,
  Phone,
  Calendar,
  Star,
  Settings,
  Server,
  Shield,
  Hash,
  Receipt,
  Inbox,
  BarChart3,
  Clock,
  Search,
  Globe,
  Lock,
  Cpu,
};

// TypeScript Interfaces
interface FlowStep {
  icon: string;
  label: string;
  detail: string;
}

interface AnimatedFlowProps {
  steps: FlowStep[];
  autoPlay?: boolean;
  speed?: number;
  direction?: 'horizontal' | 'vertical';
  title?: string;
  subtitle?: string;
}

export function AnimatedFlow({
  steps,
  autoPlay = true,
  speed = 1500,
  direction: directionProp,
  title,
  subtitle,
}: AnimatedFlowProps) {
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Determine direction based on screen size
  const direction = directionProp || (isMobile ? 'vertical' : 'horizontal');

  // Media query hook
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer to detect when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInViewport(entry.isIntersecting);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    observerRef.current = observer;
    return () => observerRef.current?.disconnect();
  }, []);

  // Auto-play animation
  useEffect(() => {
    if (!autoPlay || !isInViewport || isAnimating) return;

    setIsAnimating(true);
    let currentStep = -1;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setActiveStep(currentStep);
        setCompletedSteps((prev) => new Set([...prev, currentStep - 1]));
      } else {
        clearInterval(timer);
        setIsAnimating(false);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [autoPlay, isInViewport, isAnimating, steps.length, speed]);

  // Manual step advancement
  useEffect(() => {
    if (!isInViewport) return;

    const timer = setTimeout(() => {
      if (activeStep < steps.length - 1 && !isAnimating) {
        setActiveStep((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [activeStep, isInViewport, isAnimating, steps.length, speed]);

  const handleReplay = () => {
    setActiveStep(-1);
    setCompletedSteps(new Set());
    setIsAnimating(false);
  };

  const getStepOpacity = (index: number) => {
    if (completedSteps.has(index) || index === activeStep) return 1;
    if (index < activeStep) return 1;
    return 0.4;
  };


  const renderIcon = (iconName: string, index: number) => {
    const Icon = iconMap[iconName] || Mail;
    const isCompleted = completedSteps.has(index);
    const isActive = index === activeStep;

    return (
      <div className="relative w-12 h-12 flex items-center justify-center">
        {isCompleted && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 bg-green-500/20 rounded-full"
          />
        )}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className={`relative z-10 ${isActive ? 'text-blue-400' : 'text-gray-300'}`}
        >
          <Icon size={24} />
        </motion.div>
        {isActive && (
          <motion.div
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(59, 130, 246, 0.7)',
                '0 0 0 12px rgba(59, 130, 246, 0)',
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full border border-blue-400"
          />
        )}
      </div>
    );
  };

  // Render connection line for horizontal layout
  const renderHorizontalConnection = (index: number) => {
    const isCompleted = index < activeStep || (index < activeStep && completedSteps.has(index));

    return (
      <motion.svg
        key={`connection-${index}`}
        className="absolute top-1/2 left-0 w-full h-12 transform -translate-y-1/2"
        style={{ pointerEvents: 'none' }}
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 50 50 Q 500 20, 950 50"
          fill="none"
          stroke={isCompleted ? 'url(#grad-0)' : '#ffffff'}
          strokeWidth="2"
          strokeOpacity={isCompleted ? 1 : 0.2}
          strokeDasharray={isCompleted ? '0' : '5,5'}
          initial={{ pathLength: 0 }}
          animate={isCompleted ? { pathLength: 1 } : {}}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        {index === activeStep && (
          <motion.circle
            cx="50"
            cy="50"
            r="8"
            fill="#3b82f6"
            animate={{ cx: ['50', '950'] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </motion.svg>
    );
  };

  // Render connection line for vertical layout
  const renderVerticalConnection = (index: number) => {
    const isCompleted = index < activeStep || (index < activeStep && completedSteps.has(index));
    return (
      <motion.svg
        key={`v-connection-${index}`}
        className="w-12 h-24"
        viewBox="0 0 100 100"
        style={{ overflow: 'visible' }}
      >
        <motion.path
          d="M 50 0 L 50 100"
          stroke={isCompleted ? '#10b981' : '#ffffff'}
          strokeWidth="2"
          strokeOpacity={isCompleted ? 1 : 0.2}
          initial={{ pathLength: 0 }}
          animate={isCompleted ? { pathLength: 1 } : {}}
          transition={{ duration: 0.8 }}
        />
      </motion.svg>
    );
  };

  const isAnimationComplete = completedSteps.size === steps.length && activeStep === steps.length - 1;

  return (
    <div ref={containerRef} className="w-full">
      {/* Header */}
      {(title || subtitle) && (
        <div className="mb-12 text-center">
          {title && <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>}
          {subtitle && <p className="text-gray-400">{subtitle}</p>}
        </div>
      )}

      {/* Main Flow Container */}
      <div className={`relative ${direction === 'horizontal' ? 'flex flex-col gap-12' : 'flex flex-col gap-0'}`}>
        {direction === 'horizontal' ? (
          // Horizontal Layout
          <div className="relative">
            <div className="flex justify-between items-start gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex-1 flex flex-col items-center relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: getStepOpacity(index) }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Icon */}
                  <div className="mb-4 relative z-10">
                    {renderIcon(step.icon, index)}
                  </div>

                  {/* Card */}
                  <motion.div
                    initial={{ scale: 0, y: 20 }}
                    animate={{
                      scale: index <= activeStep ? 1 : 0.9,
                      y: 0,
                    }}
                    transition={{ delay: 0.2 }}
                    className={`
                      w-full max-w-xs p-4 rounded-xl backdrop-blur
                      border transition-all duration-300
                      ${
                        activeStep === index
                          ? 'bg-white/10 border-blue-400/50 shadow-lg shadow-blue-500/25'
                          : 'bg-white/5 border-white/8'
                      }
                      ${completedSteps.has(index) ? 'border-green-500/30' : ''}
                    `}
                  >
                    {completedSteps.has(index) && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-green-500/10 rounded-xl"
                      />
                    )}
                    <div className="relative z-10">
                      <h3 className="font-bold text-white text-sm mb-1">{step.label}</h3>
                      <p className="text-gray-400 text-xs">{step.detail}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Connection Lines */}
            <div className="absolute top-0 left-0 w-full h-16">
              {steps.map((_, index) => {
                if (index === steps.length - 1) return null;
                return renderHorizontalConnection(index);
              })}
            </div>
          </div>
        ) : (
          // Vertical Layout
          <div className="flex flex-col items-center">
            {steps.map((step, index) => (
              <div key={index} className="w-full flex flex-col items-center">
                <motion.div
                  className="flex flex-col items-center w-full max-w-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: getStepOpacity(index) }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Icon */}
                  <div className="mb-4 relative z-10">
                    {renderIcon(step.icon, index)}
                  </div>

                  {/* Card */}
                  <motion.div
                    initial={{ scale: 0, y: 20 }}
                    animate={{
                      scale: index <= activeStep ? 1 : 0.9,
                      y: 0,
                    }}
                    transition={{ delay: 0.2 }}
                    className={`
                      w-full p-4 rounded-xl backdrop-blur
                      border transition-all duration-300
                      ${
                        activeStep === index
                          ? 'bg-white/10 border-blue-400/50 shadow-lg shadow-blue-500/25'
                          : 'bg-white/5 border-white/8'
                      }
                      ${completedSteps.has(index) ? 'border-green-500/30' : ''}
                    `}
                  >
                    {completedSteps.has(index) && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-green-500/10 rounded-xl"
                      />
                    )}
                    <div className="relative z-10 text-center">
                      <h3 className="font-bold text-white text-sm mb-1">{step.label}</h3>
                      <p className="text-gray-400 text-xs">{step.detail}</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Vertical Connection */}
                {index < steps.length - 1 && renderVerticalConnection(index)}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Replay Button */}
      <AnimatePresence>
        {isAnimationComplete && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex justify-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReplay}
              className="
                flex items-center gap-2 px-4 py-2 rounded-lg
                bg-gradient-to-r from-blue-500 to-purple-500
                text-white font-medium text-sm
                hover:shadow-lg hover:shadow-blue-500/50
                transition-all duration-300
              "
            >
              <RotateCcw size={16} />
              Replay
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
