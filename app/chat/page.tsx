"use client";
import React, { useState, useEffect, useRef } from "react";
import { Message, continueConversation } from "@/app/actions/chat";
import { readStreamableValue } from "ai/rsc";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import AgentsLists from "@/components/AgentsList";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github.css";
import withAuth from "@/lib/useAuth";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vs,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import "./markdown.css";
import { Pencil } from "lucide-react";

// Force the page to be dynamic and allow streaming responses up to 30 seconds
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const Playground: React.FC = () => {
  const { theme } = useTheme();
  const [conversation, setConversation] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { messages, newMessage } = await continueConversation([
      ...conversation,
      { role: "user", content: input },
    ]);

    let textContent = "";
    for await (const delta of readStreamableValue(newMessage)) {
      textContent = `${textContent}${delta}`;
      setConversation([
        ...messages,
        { role: "assistant", content: textContent },
      ]);
    }

    setInput(""); // Clear the input field after sending the message
  };

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [conversation]);

  return (
    <>
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel maxSize={50} minSize={30}></ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <div className='flex flex-col h-screen'>
            <div id='response' className='flex-grow overflow-auto p-4'>
              {conversation.map((message, index) => (
                <div key={index} className='p-2'>
                  <strong>{message.role}:</strong>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={{
                      code({ inline, className, children, ...props }: any) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <SyntaxHighlighter
                            style={theme === "light" ? vs : vscDarkPlus}
                            language={match[1]}
                            PreTag='div'
                            {...props}
                          >
                            {String(children).replace(/\n$/, "<br/>")}
                          </SyntaxHighlighter>
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>{" "}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form
              className='p-4 border-t flex items-center'
              onSubmit={handleSubmit}
            >
              <input
                type='text'
                value={input}
                onChange={handleInputChange}
                className='flex-grow border p-2 mr-2 rounded-lg outline-none shadow-md'
                placeholder='Type your message...'
              />
              <button
                type='submit'
                className='bg-blue-500 text-white p-2 rounded-lg'
              >
                Send
              </button>
            </form>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default withAuth(Playground);
