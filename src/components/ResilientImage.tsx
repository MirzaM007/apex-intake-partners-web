import { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export function ResilientImage({ src, alt, caption, className = '' }: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 border border-slate-200 p-8 text-center ${className}`}
      >
        <Building2 className="w-8 h-8 text-slate-400 mb-3" aria-hidden="true" />
        <p className="text-sm font-medium text-slate-700 max-w-xs">{alt}</p>
        {caption && <p className="text-xs text-slate-500 mt-1">{caption}</p>}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
