'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cvData } from '@/lib/cv-data';

/**
 * Floating chat bubble (bottom-right) that embeds the ACP agent in an iframe.
 * The iframe mounts on first open (page views don't create guest sessions on
 * the agent server) and stays mounted afterwards so closing the panel keeps
 * the conversation alive.
 */
export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      {mounted && (
        <motion.div
          initial={false}
          animate={open ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          style={{ pointerEvents: open ? 'auto' : 'none' }}
          aria-hidden={!open}
          role="dialog"
          aria-label="Chat with my agent"
          className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-card md:inset-auto md:bottom-24 md:right-6 md:h-[600px] md:max-h-[calc(100vh-7rem)] md:w-[400px] md:rounded-2xl md:border md:border-border md:shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <div className="flex items-center gap-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
              <span className="font-medium">Ask my agent</span>
            </div>
            <div className="flex items-center gap-1">
              <a
                href={cvData.agentUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-md px-2 py-1 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                Open full app
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden>
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
          </div>
          <iframe
            src={`${cvData.agentUrl}embed`}
            title="Chat with my agent"
            className="min-h-0 w-full flex-1 border-0 bg-card"
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </motion.div>
      )}

      {/* On phones the panel is full-screen and has its own close button. */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Chat with my agent'}
        aria-expanded={open}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-6 right-6 z-50 h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-1 ring-border ${open ? 'hidden md:flex' : 'flex'}`}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
          {open ? (
            <path
              d="M6 6l12 12M18 6 6 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          ) : (
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 3h11A3.5 3.5 0 0 1 21 6.5v7a3.5 3.5 0 0 1-3.5 3.5H11.2L7.4 20.4A1 1 0 0 1 5.75 19.6V17H6.5A3.5 3.5 0 0 1 3 13.5v-7A3.5 3.5 0 0 1 6.5 3ZM8.5 9.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm3.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm3.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
            />
          )}
        </svg>
      </motion.button>
    </>
  );
}
