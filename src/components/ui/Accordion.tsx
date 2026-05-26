/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div 
            key={item.id} 
            className="border border-slate-200/60 dark:border-slate-800/60 rounded-lg overflow-hidden bg-white/45 dark:bg-slate-950/25 backdrop-blur-sm transition-colors duration-200"
          >
            {/* ACCORDION HEADER TRIGGER */}
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-5 py-4 flex items-center justify-between text-left font-sans text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-slate-50 select-none cursor-pointer group"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
                  ◇ {item.id}
                </span>
                <span>{item.title}</span>
              </span>
              <span className="text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-400 transition-colors">
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>

            {/* ACCORDION BODY PANEL */}
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-96 opacity-100 border-t border-slate-200/30 dark:border-slate-800/30' : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
              <div className="px-5 py-4 text-xs font-mono text-slate-500 dark:text-slate-400 leading-relaxed bg-slate-50/20 dark:bg-slate-950/10">
                {/* DOCS ACCORDION */}
                {/* Put documentation items here */}
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
