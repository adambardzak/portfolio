"use client";

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-50">
      {/* Base background color */}
      <div className="absolute inset-0 bg-light dark:bg-dark transition-colors duration-300" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blue orb */}
        <div
          className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] 
          bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_70%)] 
          dark:bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)]
          blur-[60px] rounded-full"
        />
        {/* Pink orb */}
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] 
          bg-[radial-gradient(circle,rgba(236,72,153,0.15)_0%,transparent_70%)] 
          dark:bg-[radial-gradient(circle,rgba(236,72,153,0.1)_0%,transparent_70%)]
          blur-[60px] rounded-full"
        />
      </div>

      {/* Noise overlay */}
      <div
        className="absolute inset-0 
        [background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+)]
        bg-repeat opacity-[0.15] dark:opacity-[0.25]
        mix-blend-soft-light pointer-events-none"
      />
    </div>
  );
};
