import { cn } from './utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--gold)] text-black font-semibold shadow-[0_0_10px_rgba(245,197,24,0.4)] hover:bg-[var(--gold-dark)] hover:shadow-[0_0_18px_rgba(245,197,24,0.8)]',
        destructive:
          'bg-red-600 text-white hover:bg-red-700 shadow-[0_0_10px_rgba(255,0,0,0.4)]',
        outline:
          'border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)]/10',
        secondary:
          'bg-zinc-800 text-slate-100 hover:bg-zinc-700',
        ghost:
          'hover:bg-yellow-500/10 hover:text-yellow-300',
        link:
          'text-yellow-400 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };