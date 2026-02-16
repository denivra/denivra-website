import React, { useMemo, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  FileText,
  Mail,
  BookOpen,
  Lock,
  Search,
} from 'lucide-react';

interface BrainNode {
  id: string;
  label: string;
  x: number;
  y: number;
  delay: number;
  color: string;
  size: 'small' | 'medium' | 'large';
}

interface BrainConnection {
  from: string;
  to: string;
  delay: number;
}

export function SecondBrainSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nodeLabels = [
    'Emails',
    'Documents',
    'Clients',
    'Pricing',
    'SOPs',
    'Invoices',
    'Calendar',
    'Notes',
    'Contracts',
    'Feedback',
    'Analytics',
    'Projects',
    'Contacts',
    'Templates',
    'Knowledge',
  ];

  const nodes: BrainNode[] = useMemo(() => {
    const nodeCount = isMobile ? 10 : 16;
    const nodeArray: BrainNode[] = [];
    const colors = [
      '#38bdf8', // primary-400
      '#fbbf24', // warm-400
      '#8b5cf6', // accent-purple
      '#06b6d4', // accent-cyan
      '#ec4899', // accent-pink
    ];

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 120 + Math.random() * 100;
      const x = 250 + Math.cos(angle) * radius;
      const y = 250 + Math.sin(angle) * radius;

      nodeArray.push({
        id: `node-${i}`,
        label: nodeLabels[i % nodeLabels.length],
        x,
        y,
        delay: i * 0.3,
        color: colors[i % colors.length],
        size: i < 3 ? 'large' : i < 8 ? 'medium' : 'small',
      });
    }

    return nodeArray;
  }, [isMobile]);

  const connections: BrainConnection[] = useMemo(() => {
    const conns: BrainConnection[] = [];
    const initialNodeCount = isMobile ? 3 : 5;

    // Connect initial nodes to each other
    for (let i = 0; i < initialNodeCount; i++) {
      for (let j = i + 1; j < initialNodeCount; j++) {
        conns.push({
          from: `node-${i}`,
          to: `node-${j}`,
          delay: 0,
        });
      }
    }

    // Connect new nodes to existing ones as they appear
    for (let i = initialNodeCount; i < nodes.length; i++) {
      const connectTo = Math.floor(Math.random() * (i - 1));
      conns.push({
        from: `node-${connectTo}`,
        to: `node-${i}`,
        delay: nodes[i].delay,
      });

      if (Math.random() > 0.6) {
        const connectTo2 = Math.floor(Math.random() * (i - 1));
        conns.push({
          from: `node-${connectTo2}`,
          to: `node-${i}`,
          delay: nodes[i].delay + 0.1,
        });
      }
    }

    return conns;
  }, [nodes, isMobile]);

  const nodeRadius = {
    small: 6,
    medium: 10,
    large: 14,
  };

  const keyPoints = [
    {
      icon: Database,
      title: 'RAG knowledge base — answers from YOUR documents',
    },
    {
      icon: FileText,
      title: 'Upload SOPs, manuals, pricing sheets, FAQs',
    },
    {
      icon: Mail,
      title: 'Every email interaction builds the knowledge graph',
    },
    {
      icon: BookOpen,
      title: 'Obsidian integration for structured company brain',
    },
    {
      icon: Lock,
      title: 'Local-first: your data never leaves your Mac Mini',
    },
    {
      icon: Search,
      title: 'Ask: "What did we charge the Johnson project?" — instant answer',
    },
  ];

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE - TEXT CONTENT */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Label */}
            <div className="space-y-4">
              <span className="text-primary-400 text-sm uppercase tracking-widest font-semibold">
                Intelligent Learning
              </span>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Your Business Gets a Second Brain
              </h2>

              {/* Subheadline */}
              <p className="text-lg text-dark-300 leading-relaxed">
                Every email, document, and conversation makes Nous smarter. It builds a knowledge base of your business automatically — your pricing, your clients, your processes. Ask it anything and it answers from YOUR data.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4 pt-4">
              {keyPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <p className="text-dark-200 leading-relaxed text-sm md:text-base">
                      {point.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT SIDE - BRAIN NETWORK ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center min-h-[400px] md:min-h-[500px]"
          >
            <svg
              ref={svgRef}
              viewBox="0 0 500 500"
              className="w-full h-full max-w-md md:max-w-lg"
              style={{ filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.1))' }}
            >
              {/* Animated Connection Lines */}
              {connections.map((conn, idx) => {
                const fromNode = nodes.find((n) => n.id === conn.from);
                const toNode = nodes.find((n) => n.id === conn.to);

                if (!fromNode || !toNode) return null;

                return (
                  <motion.line
                    key={`conn-${idx}`}
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke="white"
                    strokeWidth="1.5"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 0.15, 0.1],
                    }}
                    transition={{
                      duration: 2,
                      delay: conn.delay,
                      repeat: Infinity,
                      repeatDelay: nodes.length * 0.3 + 3,
                    }}
                    vectorEffect="non-scaling-stroke"
                  />
                );
              })}

              {/* Animated Nodes */}
              {nodes.map((node) => (
                <g key={node.id}>
                  {/* Glow layer */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={nodeRadius[node.size]}
                    fill="none"
                    stroke={node.color}
                    strokeWidth="2"
                    initial={{ r: 0, opacity: 0 }}
                    animate={{
                      r: [
                        nodeRadius[node.size],
                        nodeRadius[node.size] * 1.8,
                        nodeRadius[node.size],
                      ],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      delay: node.delay,
                      repeat: Infinity,
                      repeatDelay: nodes.length * 0.3 + 3,
                    }}
                    vectorEffect="non-scaling-stroke"
                  />

                  {/* Main node circle */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={nodeRadius[node.size]}
                    fill={node.color}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.9 }}
                    transition={{
                      duration: 0.5,
                      delay: node.delay,
                      ease: 'easeOut',
                    }}
                  >
                    <title>{node.label}</title>
                  </motion.circle>

                  {/* Subtle pulse within main node */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={nodeRadius[node.size]}
                    fill={node.color}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.9, 0.5, 0.9] }}
                    transition={{
                      duration: 3,
                      delay: node.delay,
                      repeat: Infinity,
                      repeatDelay: nodes.length * 0.3 + 3,
                    }}
                  />

                  {/* Label - hidden on mobile, shown on desktop for larger nodes */}
                  {!isMobile && node.size === 'large' && (
                    <motion.text
                      x={node.x}
                      y={node.y + nodeRadius[node.size] + 20}
                      textAnchor="middle"
                      fill="white"
                      fontSize="11"
                      fontFamily="Inter, system-ui, sans-serif"
                      opacity={0.6}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.6 }}
                      transition={{
                        duration: 0.5,
                        delay: node.delay,
                        ease: 'easeOut',
                      }}
                    >
                      {node.label}
                    </motion.text>
                  )}
                </g>
              ))}

              {/* Background glow circle - pulses with the network */}
              <motion.circle
                cx="250"
                cy="250"
                r="180"
                fill="none"
                stroke="url(#glowGradient)"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: nodes.length * 0.3 + 4,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />

              {/* Gradient definition for background circle */}
              <defs>
                <radialGradient id="glowGradient">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
