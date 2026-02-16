import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Send,
  MessageSquare,
  Calculator,
  Users,
  Calendar,
  Hash,
  FileText,
  Brain,
} from 'lucide-react';

interface ServiceNode {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  accentColor: string;
  angle: number;
}

export function MacMiniVisualization() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activeLines, setActiveLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const serviceNodes: ServiceNode[] = [
    {
      id: 'gmail',
      label: 'Gmail',
      icon: <Mail className="w-6 h-6" />,
      description: 'Reads 150+ emails overnight. Summarizes. Proposes actions.',
      accentColor: '#EA4335',
      angle: 0,
    },
    {
      id: 'phone',
      label: 'Phone',
      icon: <Phone className="w-6 h-6" />,
      description: '24/7 AI voice agent. Answers calls, books appointments.',
      accentColor: '#34A853',
      angle: 36,
    },
    {
      id: 'telegram',
      label: 'Telegram',
      icon: <Send className="w-6 h-6" />,
      description: 'Your command center. Text any task, get it done.',
      accentColor: '#0088cc',
      angle: 72,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: <MessageSquare className="w-6 h-6" />,
      description: 'Customer messages answered in under 30 seconds.',
      accentColor: '#25D366',
      angle: 108,
    },
    {
      id: 'quickbooks',
      label: 'QuickBooks',
      icon: <Calculator className="w-6 h-6" />,
      description: 'Receipts auto-extracted and categorized.',
      accentColor: '#3FA9F5',
      angle: 144,
    },
    {
      id: 'hubspot',
      label: 'HubSpot',
      icon: <Users className="w-6 h-6" />,
      description: 'Contacts and deals synced automatically.',
      accentColor: '#FF7A59',
      angle: 180,
    },
    {
      id: 'calendar',
      label: 'Calendar',
      icon: <Calendar className="w-6 h-6" />,
      description: 'Smart scheduling. No conflicts. Meeting briefs.',
      accentColor: '#4285F4',
      angle: 216,
    },
    {
      id: 'slack',
      label: 'Slack',
      icon: <Hash className="w-6 h-6" />,
      description: 'Team notifications for every completed task.',
      accentColor: '#E01E5A',
      angle: 252,
    },
    {
      id: 'documents',
      label: 'Documents',
      icon: <FileText className="w-6 h-6" />,
      description: 'OCR extraction from any document format.',
      accentColor: '#F9AB00',
      angle: 288,
    },
    {
      id: 'brain',
      label: 'Brain',
      icon: <Brain className="w-6 h-6" />,
      description: 'Local AI processing. Your data never leaves.',
      accentColor: '#8B5CF6',
      angle: 324,
    },
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animate connection lines
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNode = serviceNodes[Math.floor(Math.random() * serviceNodes.length)];
      setActiveLines((prev) => {
        const newLines = [...prev, randomNode.id];
        if (newLines.length > 3) newLines.shift();
        return newLines;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [serviceNodes]);

  // Mobile layout
  if (isMobile) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center px-4 py-8">
        {/* Mac Mini */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-12"
        >
          <motion.div
            animate={{ boxShadow: ['0 0 20px rgba(14, 165, 233, 0.3)', '0 0 40px rgba(14, 165, 233, 0.6)', '0 0 20px rgba(14, 165, 233, 0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-32 h-24 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl flex items-center justify-center border-2 border-gray-400 shadow-lg"
          >
            <div className="flex flex-col items-center">
              <Brain className="w-8 h-8 text-cyan-500 mb-2" />
              <span className="text-xs font-bold text-slate-700">Mac Mini</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
          {serviceNodes.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="relative"
            >
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border-2"
                style={{
                  borderColor: node.accentColor,
                  backgroundColor: `${node.accentColor}20`,
                }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-white" style={{ color: node.accentColor }}>
                  {node.icon}
                </span>
              </motion.div>

              {/* Tooltip */}
              {hoveredNode === node.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute left-1/2 -translate-x-1/2 top-20 bg-slate-700 text-white text-xs rounded-lg p-2 whitespace-nowrap z-50 border border-cyan-500/50"
                >
                  {node.description}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop layout
  const radiusX = 280;
  const radiusY = 200;

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden relative"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Main container */}
      <div className="relative w-full h-full max-w-6xl max-h-[600px] flex items-center justify-center">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
            </linearGradient>

            {/* Individual gradients for each line */}
            {serviceNodes.map((node) => (
              <linearGradient
                key={`gradient-${node.id}`}
                id={`lineGradient-${node.id}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={node.accentColor} stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.4" />
              </linearGradient>
            ))}
          </defs>

          {/* Connection lines */}
          {serviceNodes.map((node) => {
            const radians = (node.angle * Math.PI) / 180;
            const x = 500 + radiusX * Math.cos(radians);
            const y = 300 + radiusY * Math.sin(radians);

            const isActive = activeLines.includes(node.id);

            return (
              <g key={`line-${node.id}`}>
                {/* Base line */}
                <path
                  d={`M 500 300 Q ${(500 + x) / 2} ${(300 + y) / 2 + 40} ${x} ${y}`}
                  stroke={`url(#lineGradient-${node.id})`}
                  strokeWidth={isActive ? '3' : '2'}
                  fill="none"
                  opacity={isActive ? '0.9' : '0.5'}
                  className="transition-all duration-300"
                />

                {/* Glow effect for active lines */}
                {isActive && (
                  <motion.path
                    d={`M 500 300 Q ${(500 + x) / 2} ${(300 + y) / 2 + 40} ${x} ${y}`}
                    stroke={node.accentColor}
                    strokeWidth="5"
                    fill="none"
                    opacity="0.3"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}

                {/* Animated pulse dot */}
                <motion.circle
                  cx="500"
                  cy="300"
                  r="4"
                  fill={node.accentColor}
                  opacity={isActive ? "1" : "0.3"}
                  animate={{
                    cx: [500, (500 + x) / 2, x],
                    cy: [300, (300 + y) / 2 + 40, y],
                    opacity: [1, 0.8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* Mac Mini Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
          className="absolute z-20 flex flex-col items-center"
        >
          {/* Outer pulsing glow */}
          <motion.div
            animate={{
              boxShadow: [
                '0 0 30px rgba(14, 165, 233, 0.3)',
                '0 0 60px rgba(14, 165, 233, 0.6)',
                '0 0 30px rgba(14, 165, 233, 0.3)',
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute inset-0 w-48 h-40 rounded-3xl -z-10"
          />

          {/* Mac Mini Body */}
          <div className="relative w-48 h-40 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-3xl shadow-2xl border-2 border-gray-400 flex items-center justify-center overflow-hidden">
            {/* Screen reflection */}
            <div className="absolute inset-2 bg-gradient-to-b from-white/10 to-transparent rounded-2xl" />

            {/* Center content */}
            <div className="flex flex-col items-center z-10 relative">
              {/* Brain/D Logo with glow */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative mb-3"
              >
                <div className="absolute inset-0 bg-cyan-400/40 blur-lg rounded-full" />
                <Brain className="w-16 h-16 text-cyan-500 relative z-10" />
              </motion.div>

              {/* Mac Mini label */}
              <span className="text-sm font-bold text-gray-700 tracking-wide">Mac Mini</span>
              <span className="text-xs text-gray-600 mt-1">Denivra Hub</span>
            </div>

            {/* Bottom stand */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-3 bg-gradient-to-b from-gray-400 to-gray-500 rounded-t-sm" />
          </div>
        </motion.div>

        {/* Service Nodes */}
        {serviceNodes.map((node) => {
          const radians = (node.angle * Math.PI) / 180;
          const x = radiusX * Math.cos(radians);
          const y = radiusY * Math.sin(radians);

          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: (node.angle / 360) * 0.5,
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
              }}
              className="absolute z-10"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Service Node Circle */}
              <motion.div
                className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border-2 shadow-lg relative group"
                style={{
                  borderColor: node.accentColor,
                  backgroundColor: `${node.accentColor}25`,
                }}
                whileHover={{
                  scale: 1.15,
                  boxShadow: `0 0 20px ${node.accentColor}`,
                }}
                animate={
                  activeLines.includes(node.id)
                    ? {
                        boxShadow: [`0 0 10px ${node.accentColor}`, `0 0 25px ${node.accentColor}`, `0 0 10px ${node.accentColor}`],
                      }
                    : {}
                }
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span style={{ color: node.accentColor }} className="relative z-10">
                  {node.icon}
                </span>

                {/* Rotating border for active state */}
                {activeLines.includes(node.id) && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-transparent"
                    style={{
                      borderTopColor: node.accentColor,
                      borderRightColor: node.accentColor,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                )}
              </motion.div>

              {/* Tooltip */}
              {hoveredNode === node.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-16 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-sm rounded-lg p-3 whitespace-nowrap z-50 border border-cyan-500/50 shadow-2xl max-w-xs"
                >
                  <div className="font-semibold mb-1" style={{ color: node.accentColor }}>
                    {node.label}
                  </div>
                  {node.description}
                </motion.div>
              )}

              {/* Service label */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {node.label}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Corner accents */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-cyan-500/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-40 h-40 border border-cyan-500/10 rounded-full" />
    </div>
  );
}
