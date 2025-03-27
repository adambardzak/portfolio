"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Twitter, Facebook, Linkedin, Link as LinkIcon, Check } from "lucide-react";
import { useMotionConfig } from "@/components/motion-config";

type SocialShareProps = {
  title: string;
  url: string;
  description?: string;
};

export default function SocialShare({ title, url, description = "" }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const { shouldReduceMotion } = useMotionConfig();
  
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);
  const encodedDescription = encodeURIComponent(description);
  
  const shareLinks = [
    {
      name: "Twitter",
      icon: <Twitter size={18} />,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: "bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2]",
    },
    {
      name: "Facebook",
      icon: <Facebook size={18} />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "bg-[#4267B2]/10 hover:bg-[#4267B2]/20 text-[#4267B2]",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5]",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.3 } 
    },
  };

  return (
    <motion.div 
      className="my-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
        Sdílet článek
      </h3>
      <div className="flex flex-wrap gap-3">
        {shareLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${link.color} font-medium`}
            variants={itemVariants}
            whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
            whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
          >
            {link.icon}
            <span>{link.name}</span>
          </motion.a>
        ))}
        <motion.button
          onClick={copyToClipboard}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors 
            ${copied 
              ? "bg-green-500/10 hover:bg-green-500/20 text-green-600 dark:text-green-400" 
              : "bg-gray-200/50 hover:bg-gray-200 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300"
            } font-medium`}
          variants={itemVariants}
          whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
          whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
        >
          {copied ? <Check size={18} /> : <LinkIcon size={18} />}
          <span>{copied ? "Zkopírováno!" : "Kopírovat odkaz"}</span>
        </motion.button>
      </div>
    </motion.div>
  );
} 