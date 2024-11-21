// TODO: always be focused on the input field
// TODO: add a loading indicator when the command is being executed


"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

interface CommandResponse {
  type: "text" | "error" | "code" | "list" | "ascii";
  content: string | string[];
  loading?: boolean;
}

interface HistoryEntry {
  command: string;
  response: CommandResponse;
}

const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentPath, setCurrentPath] = useState("~/portfolio");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [konamiIndex, setKonamiIndex] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  const asciiArt = {
    logo: `
    ___           __      __ __    
   /   |  ____  _/ /_    / // /____
  / /| | / __ \\/ __/   / // /_/ _ \\
 / ___ |/ / / / /_    /__  __/  __/
/_/  |_/_/ /_/\\__/      /_/  \\___/ 
                                   
`,
    game: `
  _____                    
 |  __ \\                   
 | |__) |__ _  ___ ___    
 |  ___/ _  |/ __/ _ \\    
 | |  | (_| | (_|  __/    
 |_|   \\__,_|\\___\\___|    
                          
`,
  };

  const commands: Record<
    string,
    (args?: string[]) => Promise<CommandResponse>
  > = {
    help: async () => ({
      type: "list",
      content: [
        "Available commands:",
        "about - Learn more about me",
        "skills - View my technical skills",
        "projects - Browse my featured projects",
        "contact - Get my contact information",
        "clear - Clear the terminal",
        "ascii - Show some cool ASCII art",
        "game - Play a simple game (or find the easter egg)",
        "cd [dir] - Change directory",
        "ls - List directory contents",
        "history - Show command history",
        "help - Show this help message",
      ],
    }),

    about: async () => {
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate loading
      return {
        type: "text",
        content:
          "👋 Senior Web Developer with a passion for creating innovative web experiences. Specialized in React, TypeScript, and modern web technologies. Always exploring new ways to push the boundaries of web development.",
      };
    },

    skills: async () => ({
      type: "code",
      content: `
{
  "frontend": ["React", "Next.js", "TypeScript", "Framer Motion"],
  "backend": ["Node.js", "Python", "GraphQL", "REST"],
  "database": ["PostgreSQL", "MongoDB", "Redis"],
  "devops": ["Docker", "AWS", "CI/CD"],
  "design": ["Figma", "Responsive Design", "UI/UX"]
}`,
    }),

    ascii: async () => ({
      type: "ascii",
      content: asciiArt.logo,
    }),

    game: async () => ({
      type: "ascii",
      content: [
        asciiArt.game,
        "Use arrow keys to navigate. Try to find the secret code...",
        "(Hint: It's a famous cheat code)",
      ],
    }),

    history: async () => ({
      type: "list",
      content: commandHistory,
    }),

    clear: async () => {
      setHistory([]);
      return { type: "text", content: "" };
    },

    ls: async () => ({
      type: "list",
      content: ["projects/", "skills.json", "about.md", "contact.txt"],
    }),

    cd: async (args) => {
      const newPath = args?.[0];
      if (!newPath) {
        return { type: "error", content: "Please specify a directory" };
      }
      setCurrentPath(`~/portfolio/${newPath}`);
      return { type: "text", content: "" };
    },
  };

  const handleCommand = async (cmd: string): Promise<CommandResponse> => {
    const [command, ...args] = cmd.trim().toLowerCase().split(" ");
    const commandFn = commands[command];

    if (commandFn) {
      setIsLoading(true);
      try {
        const response = await commandFn(args);
        setIsLoading(false);
        return response;
      } catch (error) {
        setIsLoading(false);
        return {
          type: "error",
          content: "An error occurred while executing the command",
        };
      }
    }

    return {
      type: "error",
      content: `Command not found: ${cmd}. Type 'help' for available commands.`,
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setCommandHistory((prev) => [...prev, input]);
    setHistoryIndex(-1);

    const response = await handleCommand(input);
    setHistory((prev) => [...prev, { command: input, response }]);
    setInput("");

    // Refocus the input after command execution
    inputRef.current?.focus();
  };

  const handleKonamiCode = () => {
    const easterEggResponse: CommandResponse = {
      type: "ascii" as const, // This specifies the exact type
      content: [
        "🎮 Congratulations! You found the secret game!",
        asciiArt.game,
      ],
    };

    setHistory((prev: HistoryEntry[]) => [
      ...prev,
      {
        command: "easter-egg",
        response: easterEggResponse,
      },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }

    // Konami code detection
    if (konamiCode[konamiIndex] === e.key) {
      if (konamiIndex === konamiCode.length - 1) {
        handleKonamiCode();
        setKonamiIndex(0);
      } else {
        setKonamiIndex((prev) => prev + 1);
      }
    } else {
      setKonamiIndex(0);
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="min-h-screen bg-gray-900 flex items-center justify-center p-4"
      onClick={handleTerminalClick}
    >
      <motion.div
        className="w-full max-w-4xl bg-gray-800 rounded-lg overflow-hidden shadow-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => inputRef.current?.focus()}
      >
        <div className="bg-gray-700 p-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-gray-300 text-sm ml-2">{currentPath}</span>
        </div>

        <div
          ref={terminalRef}
          className="p-4 h-[480px] overflow-y-auto font-mono"
        >
          <AnimatePresence mode="popLayout">
            {history.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 text-green-400">
                  <span>➜</span>
                  <span className="text-blue-400">{currentPath}</span>
                  <span className="text-white">{entry.command}</span>
                </div>
                <div
                  className={clsx(
                    "mt-2 mb-4",
                    entry.response.type === "error" && "text-red-400",
                    entry.response.type === "code" && "text-yellow-300",
                    entry.response.type === "ascii" &&
                      "font-mono whitespace-pre",
                    entry.response.type === "text" && "text-gray-300"
                  )}
                >
                  {Array.isArray(entry.response.content)
                    ? entry.response.content.map((line, i) => (
                        <div key={i}>{line}</div>
                      ))
                    : entry.response.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 text-green-400"
          >
            <span>➜</span>
            <span className="text-blue-400">{currentPath}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-white"
              autoFocus
              disabled={isLoading}
            />
          </form>

          {isLoading && (
            <motion.div
              className="absolute bottom-4 right-4 text-green-400"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Processing...
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Terminal;
