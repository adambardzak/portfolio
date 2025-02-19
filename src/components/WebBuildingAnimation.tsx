"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  Users,
  TrendingUp,
  Star,
  Mail,
  CreditCard,
  MessageSquare,
} from "lucide-react";

const WebBuildingAnimation = () => {
  return (
    <div className="w-full h-full relative p-8">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full rounded-3xl bg-[#1A1A1A] border border-white/[0.08] overflow-hidden shadow-2xl"
      >
        <div className="grid grid-cols-2 h-full">
          {/* Website Preview Side */}
          <div className="p-6 border-r border-white/[0.08]">
            <div className="flex gap-2 mb-8">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="w-3 h-3 rounded-full bg-white/10"
                />
              ))}
            </div>

            <div className="space-y-6">
              {/* Hero Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-3"
              >
                <div className="h-8 w-3/4 rounded-xl bg-gradient-to-r from-purple-500/80 via-purple-400/70 to-purple-300/80 backdrop-blur-sm" />
                <div className="h-4 w-1/2 rounded-xl bg-white/10" />
              </motion.div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: ShoppingCart, color: "#a855f7" },
                  { icon: Users, color: "#d8b4fe" },
                  { icon: TrendingUp, color: "#a855f7" },
                  { icon: Star, color: "#d8b4fe" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.2 }}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]"
                  >
                    <item.icon
                      className="w-5 h-5 mb-3 opacity-80"
                      style={{ color: item.color }}
                    />
                    <div className="h-3 w-2/3 rounded-full bg-white/10" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Results Side */}
          <div className="p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base text-white/40 mb-8"
            >
              Business Results
            </motion.div>

            <div className="space-y-4">
              {[
                { icon: CreditCard, label: "Sales", trend: "+64%" },
                { icon: Users, label: "Visitors", trend: "+127%" },
                { icon: MessageSquare, label: "Engagement" },
                { icon: Mail, label: "Leads", trend: "+156%" },
              ].map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + i * 0.2 }}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03]"
                >
                  <div className="flex items-center gap-3">
                    <metric.icon className="w-5 h-5 text-purple-500 opacity-80" />
                    <span className="text-white/60 text-sm whitespace-nowrap">
                      {metric.label}
                    </span>
                  </div>
                  <span className="text-purple-400 text-sm ml-2 whitespace-nowrap">
                    {metric.trend}
                  </span>
                </motion.div>
              ))}

              {/* Growth Chart */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="h-32 mt-8 rounded-2xl relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(168, 85, 247, 0.03) 0%, rgba(216, 180, 254, 0.02) 100%)",
                  transformOrigin: "bottom",
                }}
              >
                <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,black)]" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WebBuildingAnimation;
