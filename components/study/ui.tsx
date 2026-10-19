import { forwardRef, type ButtonHTMLAttributes, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-primary-foreground hover:opacity-90',
  secondary: 'border border-border bg-surface text-foreground hover:bg-surface-hover',
  ghost: 'text-muted-foreground hover:bg-surface-hover hover:text-foreground',
  danger: 'border border-red-500/30 text-red-400 hover:bg-red-500/10',
};

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: 'sm' | 'md' }
>(function Button({ variant = 'secondary', size = 'md', className, ...props }, ref) {
  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
        'disabled:pointer-events-none disabled:opacity-50',
        size === 'sm' ? 'h-8 px-3 text-xs' : 'h-10 px-4 text-sm',
        variants[variant],
        className,
      )}
      {...props}
    />
  );
});

const field =
  'w-full rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-dim ' +
  'transition-colors focus:border-emerald-400/60 focus:outline-none focus:ring-1 focus:ring-emerald-400/30';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function Input(
  { className, ...props },
  ref,
) {
  return <input ref={ref} className={cn(field, 'h-10', className)} {...props} />;
});

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  function Textarea({ className, ...props }, ref) {
    return <textarea ref={ref} className={cn(field, 'min-h-[120px] py-2.5 font-mono text-[13px] leading-relaxed', className)} {...props} />;
  },
);

export function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="eyebrow mb-2 block text-muted-foreground">
      {children}
    </label>
  );
}

export function Panel({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('rounded-lg border border-border bg-card', className)}>{children}</div>;
}

/** Anki-style colored due counts: new · learning · review. */
export function Counts({
  newCount,
  learningCount,
  reviewCount,
  active,
}: {
  newCount: number;
  learningCount: number;
  reviewCount: number;
  active?: 'new' | 'learning' | 'review';
}) {
  const item = (value: number, color: string, key: typeof active, title: string) => (
    <span
      title={title}
      className={cn(
        'tabular-nums',
        value ? color : 'text-dim',
        active === key && 'underline decoration-2 underline-offset-4',
      )}
    >
      {value}
    </span>
  );
  return (
    <span className="inline-flex items-center gap-3 font-mono text-sm">
      {item(newCount, 'text-sky-400', 'new', 'New')}
      {item(learningCount, 'text-amber-400', 'learning', 'Learning')}
      {item(reviewCount, 'text-highlight', 'review', 'To review')}
    </span>
  );
}

export function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
      {children}
    </kbd>
  );
}
