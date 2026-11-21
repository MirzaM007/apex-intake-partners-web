interface BrandLogoProps {
  variant?: 'gold-white' | 'original';
  className?: string;
}

const LOGO_SRC = '/assets/aistudio/Apex_Intake_Partners_Logo_0fc917b2.png';

export function BrandLogo({ variant = 'gold-white', className = 'h-12' }: BrandLogoProps) {
  if (variant === 'original') {
    return (
      <img
        src={LOGO_SRC}
        alt="Apex Intake Partners"
        className={className}
      />
    );
  }

  return (
    <span
      className={`relative inline-block overflow-hidden shrink-0 select-none ${className}`}
      style={{ aspectRatio: '1885 / 363' }}
    >
      <span
        className="absolute block"
        style={{
          width: '115.225%',
          height: '199.449%',
          left: '-7.692%',
          top: '-47.934%',
        }}
      >
        {/* Gold folded A mark preserved in original brand gold */}
        <img
          src={LOGO_SRC}
          alt="Apex Intake Partners"
          className="h-full w-full object-contain block"
          style={{ clipPath: 'inset(0 77.14% 0 0)' }}
        />
        {/* Wordmark rendered in crisp white against Midnight/Dark Navy backgrounds */}
        <img
          src={LOGO_SRC}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-contain block brightness-0 invert"
          style={{ clipPath: 'inset(0 0 0 22.86%)' }}
        />
      </span>
    </span>
  );
}
