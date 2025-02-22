import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";

type CodeBlockProps = {
  filename: string;
  children: string;
};

export const CodeBlock = ({ filename, children }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 md:my-8">
      <pre className="overflow-hidden rounded-xl bg-[#2A2A2A] border border-gray-700">
        {/* Header - Always visible */}
        <div className="flex items-center justify-between text-xs border-b border-gray-700 p-2 md:p-3 bg-[#2A2A2A]">
          <span className="text-blue-400">{filename}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-gray-400 hover:text-blue-400 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span className="hidden sm:inline">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="hidden sm:inline">Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Code content with syntax highlighting */}
        <div className="overflow-x-auto">
          <Highlight 
            theme={themes.vsDark}
            code={children.trim()} 
            language="typescript"
          >
            {({ tokens, getLineProps, getTokenProps }) => (
              <code className="block p-3 md:p-4 text-sm md:text-base text-gray-100">
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </code>
            )}
          </Highlight>
        </div>
      </pre>
    </div>
  );
}; 