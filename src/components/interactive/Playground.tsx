/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Play, Settings, ChevronDown, ChevronRight, Copy, Check, Info } from 'lucide-react';

export default function Playground() {
  const [endpoint, setEndpoint] = useState('GET /api/v1/scaffold-data');
  const [queryInput, setQueryInput] = useState('Gw sial banget hari ini..');
  
  // Collapse states
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [isJsonOpen, setIsJsonOpen] = useState(false);
  
  // Simulated request outcomes
  const [isExecuting, setIsExecuting] = useState(false);
  const [hasExecuted, setHasExecuted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [responseTime, setResponseTime] = useState(0);
  const [responseJson, setResponseJson] = useState('');

  const jsonBodyMock = `{
  "scaffold_id": "sys_mock_948",
  "meta": {
    "engine_version": "1.0",
    "strict_mode": false,
    "max_recursive_depth": 3
  },
  "constraints": {
    "allow_empty_arrays": true,
    "fallback_action": "REJECT"
  }
}`;

  const endpointsMap: { [key: string]: { description: string, mockResponse: any } } = {
    'GET /api/v1/scaffold-data': {
      description: 'Simulates retrieval of generic placeholder data schemas.',
      mockResponse: {
        status: "success",
        code: 200,
        latency: "14ms",
        data: {
          items_found: 3,
          results: [
            { id: "item-01", label: "[LOREM_MOCK_VALUE_A]", type: "scaffold" },
            { id: "item-02", label: "[LOREM_MOCK_VALUE_B]", type: "operational" },
            { id: "item-03", label: "[LOREM_MOCK_VALUE_C]", type: "scaffold" }
          ]
        }
      }
    },
    'POST /api/v1/validate': {
      description: 'Simulates input validation schema diagnostics.',
      mockResponse: {
        status: "validated",
        code: 200,
        latency: "28ms",
        diagnostics: {
          syntax_valid_flag: true,
          schema_compliance: 1.0,
          warnings: []
        }
      }
    },
    'PUT /api/v1/transform': {
      description: 'Simulates structure normalizing transformation pipeline.',
      mockResponse: {
        status: "transformed",
        code: 200,
        latency: "41ms",
        transformation_summary: {
          initial_bytes: 142,
          final_bytes: 110,
          operations_executed: ["DE_HYDRATE", "NORMALIZE_KEYS"]
        }
      }
    }
  };

  const handleExecute = () => {
    setIsExecuting(true);
    const selected = endpointsMap[endpoint];
    setTimeout(() => {
      setResponseTime(Math.round(Math.random() * 30 + 10));
      setResponseJson(JSON.stringify(selected.mockResponse, null, 2));
      setIsExecuting(false);
      setHasExecuted(true);
    }, 700);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(responseJson || '// [No output to copy]');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-mono text-xs">
      
      {/* LEFT COLUMN: CONTROL PANEL */}
      <div className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-[#0f111a] p-5 shadow-sm space-y-5 transition-colors duration-200">
        <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/50 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-600 dark:bg-green-500"></span>
            <span className="font-semibold text-slate-800 dark:text-slate-500">PLAY YOUR API</span>
          </div>
          <span className="text-[11px] text-slate-400 dark:text-slate-500">Status : Ready</span>
        </div>

        {/* 1. ENDPOINT SELECTOR */}
        <div>
          <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1.5 uppercase">Pilih endpoint API:</label>
          <select 
            value={endpoint}
            onChange={(e) => {
              setEndpoint(e.target.value);
              setHasExecuted(false);
            }}
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-md bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-slate-600 cursor-pointer font-sans"
          >
            <option value="GET /api/v1/scaffold-data">GET /api/v1/scaffold-data</option>
            <option value="POST /api/v1/validate">POST /api/v1/validate</option>
            <option value="PUT /api/v1/transform">PUT /api/v1/transform</option>
          </select>
          <div className="mt-2 text-[10px] text-slate-400 dark:text-slate-500 leading-normal flex items-start gap-1.5 pr-2">
            <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
            <span>{endpointsMap[endpoint].description}</span>
          </div>
        </div>

        {/* 2. TEXTAREA QUERY INPUT */}
        <div>
          <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1.5 uppercase">Masukkan input kamu:</label>
          <textarea
            value={queryInput}
            onChange={(e) => setQueryInput(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-md bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-slate-600 font-sans text-sm resize-none"
            placeholder="Saya cinta Backend..."
          />
        </div>

        {/* 3. COLLAPSIBLE ADVANCED SETTINGS */}
        <div className="border border-slate-100 dark:border-slate-900 rounded-lg overflow-hidden">
          <button
            onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
            className="w-full bg-slate-50 dark:bg-slate-900/60 px-4 py-3 flex items-center justify-between font-medium text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-900 cursor-pointer select-none"
            aria-expanded={isAdvancedOpen}
          >
            <span className="flex items-center gap-2">
              <Settings className="w-3.5 h-3.5 text-slate-500" />
              <span>Setting</span>
            </span>
            {isAdvancedOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          </button>
          
          {isAdvancedOpen && (
            <div className="p-4 space-y-3 bg-slate-50/20 dark:bg-slate-950/20 border-b border-slate-100 dark:border-slate-900">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">[strict_diagnostics_flag]:</span>
                <input type="checkbox" defaultChecked className="rounded border-slate-300 dark:border-slate-700 text-slate-500 focus:ring-slate-500 h-3.5 w-3.5" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">[suppress_warning_logs]:</span>
                <input type="checkbox" className="rounded border-slate-300 dark:border-slate-700 text-slate-500 focus:ring-slate-500 h-3.5 w-3.5" />
              </div>
            </div>
          )}
        </div>

        {/* 4. COLLAPSIBLE JSON BODY */}
        <div className="border border-slate-100 dark:border-slate-900 rounded-lg overflow-hidden">
          <button
            onClick={() => setIsJsonOpen(!isJsonOpen)}
            className="w-full bg-slate-50 dark:bg-slate-900/60 px-4 py-3 flex items-center justify-between font-medium text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-900 cursor-pointer select-none"
            aria-expanded={isJsonOpen}
          >
            <span className="flex items-center gap-2">
              <span>{`{ }`}</span>
              <span>Body JSON</span>
            </span>
            {isJsonOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          </button>
          
          {isJsonOpen && (
            <div className="p-0 bg-slate-950 text-slate-300 select-all border-b border-slate-100 dark:border-slate-900">
              <pre className="p-4 overflow-x-auto text-[11px] leading-relaxed text-slate-400 font-mono">
                {jsonBodyMock}
              </pre>
            </div>
          )}
        </div>

        {/* 5. REQUEST ACTION BUTTON */}
        <button
          onClick={handleExecute}
          disabled={isExecuting}
          className="w-full px-4 py-3 rounded-lg bg-slate-950 dark:bg-slate-50 text-slate-50 dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 disabled:bg-slate-300 dark:disabled:bg-slate-800 font-medium tracking-wide flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
        >
          <Play className={`w-3.5 h-3.5 ${isExecuting ? 'animate-spin' : ''}`} />
          <span>{isExecuting ? 'Sedang diproses...' : 'Exequte'}</span>
        </button>
      </div>

      {/* RIGHT COLUMN: RESPONSE SCREEN */}
      <div className="border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-900 dark:bg-[#090b11] text-slate-300 p-5 shadow-inner min-h-[350px] flex flex-col justify-between transition-colors duration-200">
        <div>
          {/* HEADER SCREEN */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-[10px] text-slate-500 font-mono">
            <span className="text-slate-400">// Preview Response</span>
            {hasExecuted && (
              <span className="text-slate-400">Ping: ~{responseTime}ms STATUS: 200_OK</span>
            )}
          </div>

          {/* SCREEN CONTENT */}
          <div className="overflow-x-auto max-h-[300px]">
            {isExecuting ? (
              <div className="py-12 text-center text-slate-500 animate-pulse">
                Sedang memproses permintaan kamu...
              </div>
            ) : hasExecuted ? (
              <pre className="text-[11px] leading-relaxed text-slate-300 font-mono select-all">
                {responseJson}
              </pre>
            ) : (
              <div className="py-20 text-center text-slate-600 flex flex-col items-center justify-center gap-2">
                <span className="text-2xl whitespace-nowrap">◇</span>
                <span>Disini akan ditampilkan bentuk respon sesuai request POST/ GET</span>
              </div>
            )}
          </div>
        </div>

        {/* LOWER SCREEN BAR */}
        {hasExecuted && !isExecuting && (
          <div className="border-t border-slate-800 pt-3 mt-4 flex justify-between items-center">
            <span className="text-[10px] text-slate-500">SIZE: ~{new Blob([responseJson]).size} Bytes</span>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded border border-slate-800 hover:bg-slate-900 text-[10px] font-mono hover:text-slate-105 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-slate-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
